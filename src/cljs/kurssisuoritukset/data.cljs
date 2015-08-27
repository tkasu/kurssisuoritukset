(ns kurssisuoritukset.data
  (:require [reagent.core :as r]
            [reagent.session :as s]))

;; App-state / Models

(defonce coursesA (r/atom (sorted-map)))

(defonce courses-id-counter (r/atom 0))

(defonce add-input (r/atom (str)))

;; Helper functions

(defn add-course [name]
  (let [id (swap! courses-id-counter inc)]
    (do (swap! coursesA assoc id {:id id :name name})
        (reset! add-input ""))))

(defn get-course [id]
  (get @coursesA id))

;; Page states

(defn current-page []
  [:div [(s/get :current-page)]])

(defn current-course []
  (s/get :current-course))



