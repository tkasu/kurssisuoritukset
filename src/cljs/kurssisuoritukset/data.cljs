(ns ^:figwheel-always kurssisuoritukset.data
  (:require [reagent.core :as r]
            [reagent.session :as s]))

;; App-state / Models

(defonce coursesA (r/atom (sorted-map)))

(defonce courses-id-counter (r/atom 0))

(defonce add-course-atom (r/atom (str)))

(defonce add-assignment-atom (r/atom (str)))

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
        id (inc (count (vals assignments)))]
    (swap! coursesA assoc-in [course-id :assignments]
           (assoc assignments id {:id id :name name :credits credits}))))

;; Page states

(defn current-page []
  [:div [(s/get :current-page)]])

(defn current-course []
  (s/get :current-course))

