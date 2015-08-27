(ns ^:figwheel-always kurssisuoritukset.views.list-page
  (:require [kurssisuoritukset.data :refer [coursesA courses-id-counter add-input add-course]]))



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
        [:li [:a {:href (str "#/courses/" (:id course))} (:name course)]])]]))

(defn list-page []
  [:div
   [courses-component]
   [:a {:href "#/courses/id"} "id"]])
