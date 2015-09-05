(ns ^:figwheel-always kurssisuoritukset.data
  (:require [reagent.core :as r]
            [reagent.session :as s]))

;; App-state / Models

(defonce coursesA (r/atom (sorted-map)))

(defonce courses-id-counter (r/atom 0))

(defonce add-course-atom (r/atom (str)))

(defonce add-assignment-atom (r/atom (str)))

(defonce add-assignment-crd-atom (r/atom (str)))

(defonce assignments-id-counter (r/atom 0))

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

;; Page states

(defn current-page []
  [:div [(s/get :current-page)]])

(defn current-course []
  (s/get :current-course))

