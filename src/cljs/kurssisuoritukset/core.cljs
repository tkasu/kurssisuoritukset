(ns kurssisuoritukset.core
    (:require [reagent.core :as r]))

(defonce coursesA (r/atom (sorted-map)))

(defonce courses-id-counter (r/atom 0))

(defn add-course [name]
  (let [id (swap! courses-id-counter inc)]
    (swap! coursesA assoc id {:id id
                             :name name})))
(defonce init (do
                (add-course "wepa")
                (add-course "TiKaPe")
                (add-course "OhPe")
                (add-course "weso")))

(defn add-course-componen []
  [:div
   [:h2 "Add course"]
   [:input {:id "add-course"
            :type "text"
            :placeholder "course name"
            }]])

(defn courses-component []
  [:div
   [add-course-componen]
   [:h2 "Courses"]
   [:ul
    (for [course (vals @coursesA)]
      [:li (:name course) " " (:id course)])]])

(defn ^:export main []
  (r/render [courses-component]
                  (.getElementById js/document "app")))
