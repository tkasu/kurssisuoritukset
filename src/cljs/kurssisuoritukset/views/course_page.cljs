(ns ^:figwheel-always kurssisuoritukset.views.course-page
  (:require
    [kurssisuoritukset.data :as data :refer [get-course add-assignment current-course]]))

(enable-console-print!)

(defn add-assignment-input [name-value crd-value]
  [:div
   [:input {:id "assignment-name"
            :type "text"
            :placeholder "assignment name"
            :value @name-value
            :on-change #(reset! name-value (-> % .-target .-value))}]
   [:input {:id "assignment-credit"
            :type "text"
            :placeholder "credits"
            :value @crd-value
            :on-change #(reset! crd-value (-> % .-target .-value))}]
   [:button {:on-click #(add-assignment (current-course) @name-value @crd-value)} "Add assignment!"]])


(defn course-page []
    [:div
     (when (not (nil? current-course))
       (let [course (get-course (int (current-course)))]
         [:div {:id "course-mod"}
          [:h2 "Course:"]
          [:input {:default-value (:name course)}]
          [:h3 "Assignments:"]
          [:ul
           (for [assignment (vals (:assignments course))]
             ^{:key (:id assignment)}
             [:li (:name assignment)])]
           ;[add-assignment-input data/add-assignment-atom data/temp-counter]
           ]))
     [:a {:href "#/"} " back to front page"]])

