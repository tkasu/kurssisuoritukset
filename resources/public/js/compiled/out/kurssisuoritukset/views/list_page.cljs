(ns ^:figwheel-always kurssisuoritukset.views.list-page
  (:require [kurssisuoritukset.data :refer [coursesA courses-id-counter add-course-atom add-course add-result add-assignment]]))



;; Initial data

(defonce init (do
                (add-course "wepa")
                (add-course "TiKaPe")
                (add-course "OhPe")
                (add-course "weso")
                (add-assignment 1 "Harkat" 5)
                (add-assignment 1 "Harkat2" 3)
                (add-assignment 2 "Tentti" 7)
                (add-assignment 3 "Suullinen tentti" 12)
                (add-result 1 1 "012345678" 30)
                (add-result 1 1 "001122334" 20)
                (add-result 1 2 "012345678" 40)))

; Views

(defn add-course-input [value]
  [:div.form-inline
   [:div.form-group
     [:input {:id "add-course"
              :type "text"
              :class "form-control"
              :placeholder "course name"
              :value @value
              :on-change #(reset! value (-> % .-target .-value))}]]
   [:button {:on-click #(add-course @value)
             :class "btn btn-primary"}
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
  [:div.container
   [courses-component]])
