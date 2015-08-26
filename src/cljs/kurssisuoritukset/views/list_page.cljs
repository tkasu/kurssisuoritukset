(ns kurssisuoritukset.views.list-page
  (:require [reagent.core :as r]))

;; App-state / Models

(defonce coursesA (r/atom (sorted-map)))

(defonce courses-id-counter (r/atom 0))

(defonce add-input (r/atom (str)))


;; Add course helper function

(defn add-course [name]
  (let [id (swap! courses-id-counter inc)]
    (do (swap! coursesA assoc id {:id id :name name})
        (reset! add-input ""))))

;; Initial data

(defonce init (do
                (add-course "wepa")
                (add-course "TiKaPe")
                (add-course "OhPe")
                (add-course "weso")))

; Views

(defn add-course-input [value]
  [:div
   [:input {:id "add-course"
            :type "text"
            :placeholder "course name"
            :value @value
            :on-change #(reset! value (-> % .-target .-value))}]
   [:button {:on-click #(add-course @value)}
    "Add course!"]])

(defn add-course-component []
  [:div
   [:h2 "Add course"]
   [add-course-input add-input]])

(defn courses-component []
  (let [courses (vals @coursesA)]
    [:div
     [add-course-component]
     [:h2 "Courses"]
     [:ul
      (for [course courses]
        ^{:key (:id course)}
        [:li [:a {:href (str "/" (:id course))} (:name course)]])]]))

(defn list-page []
  [:div
   [courses-component]
   [:a {:href "#/id"} "id"]])
