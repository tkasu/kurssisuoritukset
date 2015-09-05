(ns kurssisuoritukset.views.course-results-mod-page
  (:require
    [reagent.core :as r]
    [kurssisuoritukset.data :as data :refer
     [add-result-atom add-result add-course-results
      get-course get-students get-student-points
      add-assignment current-course]]))

(defn result-add-input [value]
  [:div.form-inline
   [:div.form-group
    [:input {:id "student-id"
             :class "form-control"
             :type "text"
             :placeholder "student-id"
             :value @value
             :on-change #(reset! value (-> % .-target .-value))}]]])

(defn point-add-input [value]
  [:div.form-inline
   [:div.form-group
    [:input {:class "form-control"
             :type "text"
             :placeholder "points"
             :value @value
             :on-change #(reset! value (-> % .-target .-value))}]]])

(defn result-mod-page []
  [:div
   [:div.container
    (when (not (nil? current-course))
      (let [course (get-course (int (current-course)))
            assignments (:assignments course)
            students (get-students (int (current-course)))
            student-id-atom (:student-id add-result-atom)
            assignments-points-atom (:points add-result-atom)]
        [:div
         [:h3 (str (:name course) " result adding page")]
         [:table.table
          [:thead
           [:tr
            [:th "Student"]
            (for [assignment (vals assignments)]
              ^{:key (:id assignment)}
              [:th (:name assignment)])]]
          [:tbody
           (for [student students]
             ^{:key student}
             [:tr
              [:td student]
              (for [assignment (vals assignments)]
                ^{:key (:id assignment)}
                [:td
                 (str
                   (get-student-points
                     (int (current-course))
                     (:id assignment)
                     student)
                   " / "
                   (:credits assignment))])])
           [:tr
              [:td
                [result-add-input student-id-atom]]
              (for [assignment (vals assignments)
                    :let [input-point
                          (swap! assignments-points-atom
                                 assoc
                                 (int (:id assignment))
                                 (r/atom (str)))]]
                ^{:key (:id assignment)}
                [:td
                  [point-add-input (get
                                     @assignments-points-atom
                                     (:id assignment))]])
              [:td
               [:button {:on-click #(do
                                     (doall
                                       (for [assignment (vals assignments)]
                                        (add-result
                                          (int (current-course))
                                          (:id assignment)
                                          @student-id-atom
                                          @(get @assignments-points-atom (:id assignment)))))
                                     (reset! student-id-atom "")
                                     (reset! assignments-points-atom (sorted-map)))

                         :class "btn btn-primary"}
              "Add result!"]]]]]]))
    [:div
     [:a {:href
          (str "#/courses/"
               (current-course)
               "/results")}
      "Back to result listing"]]]])