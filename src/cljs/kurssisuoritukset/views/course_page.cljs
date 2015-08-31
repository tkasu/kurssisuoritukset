(ns ^:figwheel-always kurssisuoritukset.views.course-page
  (:require
    [kurssisuoritukset.data :as data :refer [get-course add-assignment current-course]]))

(enable-console-print!)

(defn add-assignment-input [name-value crd-value]
  [:div.form-inline
   [:div.form-group
     [:input {:id "assignment-name"
              :class "form-control"
              :type "text"
              :placeholder "assignment name"
              :value @name-value
              :on-change #(reset! name-value (-> % .-target .-value))}]]
   [:div.form-group
     [:input {:id "assignment-credit"
              :class "form-control"
              :type "text"
              :placeholder "credits"
              :value @crd-value
              :on-change #(reset! crd-value (-> % .-target .-value))}]]
   [:button {:class "btn btn-primary"
             :on-click #(add-assignment (int (current-course))
                                        @name-value
                                        (int @crd-value))}
    "Add assignment!"]])


(defn course-page []
  [:div
    [:div.container
     (when (not (nil? current-course))
       (let [course (get-course (int (current-course)))]
         [:div {:id "course-mod"}
          [:h2 "Course:"]
          [:input {:default-value (:name course)}]
          [:h3 "Assignments:"]
          [:table.table
           [:thead
            [:tr
              [:th "Assignment"]
              [:th "Max points"]]]
           [:tbody
           (for [assignment (vals (:assignments course))]
             ^{:key (:id assignment)}
              [:tr
               [:td (:name assignment)]
               [:td (:credits assignment)]])]]
           [add-assignment-input data/add-assignment-atom data/add-assignment-crd-atom]]))]
    [:div.container
       [:a {:href "#/"} " back to the front page"]]])

