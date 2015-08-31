(ns ^:figwheel-always kurssisuoritukset.views.list-page
  (:require [kurssisuoritukset.data :refer [coursesA courses-id-counter add-course-atom add-course add-assignment]]))



;; Initial data

(defonce init (do
                (add-course "wepa")
                (add-course "TiKaPe")
                (add-course "OhPe")
                (add-course "weso")
                (add-assignment 1 "Harkat" 5)
                (add-assignment 1 "Harkat2" 3)
                (add-assignment 2 "Tentti" 7)
                (add-assignment 3 "Suullinen tentti" 12)))

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
   [add-course-input add-course-atom]])

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
   [courses-component]])
