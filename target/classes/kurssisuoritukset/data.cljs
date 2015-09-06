(ns kurssisuoritukset.data
  (:require [reagent.core :as r]
            [reagent.session :as s]
            [matchbox.core :as m]
            [cljs.core.async :as a
              :refer [<!  >!  chan close! sliding-buffer put! take! alts!]])
  (:require-macros [cljs.core.async.macros :as m :refer [go alt!]]))

;; App-state / Models

(def fb-uri "https://kurssisuoritukset.firebaseio.com/")

(def fb-ref
  (m/connect fb-uri))

(defonce coursesA (r/atom (sorted-map)))

(defonce courses-id-counter (r/atom 0))

(defonce add-course-atom (r/atom (str)))

(defonce add-result-atom {:student-id (r/atom (str))
                          :points (r/atom (sorted-map))})

(defonce add-assignment-atom (r/atom (str)))

(defonce add-assignment-crd-atom (r/atom (str)))

(defonce assignments-id-counter (r/atom 0))

;; test


;; Helper functions

(defn get-course [id]
  (get @coursesA id))

(defn add-course [name]
  (let [id (swap! courses-id-counter inc)]
    (do (swap! coursesA assoc id {:id id :name name :assignments (sorted-map)})
        (reset! add-course-atom ""))))

(defn add-assignment [course-id name credits]
  (let [course (get-course course-id)
        assignments (:assignments course)
        id (swap! assignments-id-counter inc)]
    (do
      (swap! coursesA assoc-in [course-id :assignments]
             (assoc assignments id {:id id :name name :credits credits :results (sorted-map)}))
      (reset! add-assignment-atom "")
      (reset! add-assignment-crd-atom ""))))

(defn add-result [course-id assignment-id student-id points]
  (let [results (get-in (get-course course-id)
                        [:assignments assignment-id :results])]
    (swap! coursesA assoc-in [course-id :assignments assignment-id :results]
           (assoc results student-id {:student-id student-id :points points}))))

(defn delete-result [course-id assignment-id student-id]
  (let [results (get-in (get-course course-id)
                        [:assignments assignment-id :results])]
    (swap! coursesA assoc-in [course-id :assignments assignment-id :results]
           (dissoc results student-id))))

(defn delete-course-result
  "Delete students results on a given course. For some reason isn't working in Figwheel REPL"
  [course-id student-id]
  (reduce (fn [acc next]
            (let [results (:results next)]
              (reduce
                (fn [acc-r next-r]
                  (when (= (key next-r) student-id)
                    (delete-result course-id (:id next) student-id)))

                []
                results)))
          []
          (vals (get-in @coursesA [course-id :assignments]))))

(defn get-students [course-id]
  (into []
        (distinct
          (apply concat
                 (reduce
                   (fn [acc next]
                     (let [students (reduce (fn [acc-s next-s]
                                              (let [student (:student-id next-s)]
                                                (conj acc-s student)))
                                            []
                                            (vals (:results next)))]
                       (conj acc students)))
                   []
                   (vals (get-in @coursesA [course-id :assignments])))))))

(defn get-student-points [course-id assignment-id student-id]
  (get-in @coursesA
          [course-id :assignments assignment-id :results student-id :points]))

(defn set-student-to-input! [course-id student-id]
  (do
    (reset! (:student-id add-result-atom) student-id)
    (doall
      (for [assignment (vals (:assignments (get-course course-id)))]
      (swap! (:points add-result-atom) assoc (int (:id assignment))
             (r/atom (get-in @coursesA [course-id :assignments
                                        (:id assignment) :results
                                        student-id :points])))))))

;; Page states

(defn current-page []
  [:div [(s/get :current-page)]])

(defn current-course []
  (s/get :current-course))

(defn current-student []
  (s/get :current-student))

(defn set-current-student! [student-id]
  (s/put! :current-student student-id))

