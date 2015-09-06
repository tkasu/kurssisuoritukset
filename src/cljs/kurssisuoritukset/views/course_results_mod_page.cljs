(ns ^:figwheel-always kurssisuoritukset.views.course-results-mod-page
  (:require
    [reagent.core :as r]
    [kurssisuoritukset.data :as data :refer
     [add-result-atom add-result
      delete-course-result
      get-course get-students get-student-points
      add-assignment current-course
      current-student
      set-current-student! set-student-to-input!]]))

(defn result-add-input [value]
  [:div.form-inline
   [:div.form-group
    [:input {:id "student-id"
             :class "form-control"
             :disabled  (when (not= nil (current-student)) "disabled")
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
              [:th (:name assignment)])
            [:th]
            [:th]]]
          [:tbody
           (for [student students]
             ^{:key student}
             [:tr {:class  (when (= student (current-student)) "info")}
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
                   (:credits assignment))])
                [:td
                 (when (= nil (current-student))
                   [:button {:on-click #(do
                                             (set-current-student! student)
                                             (set-student-to-input! (int (current-course)) student))
                                 :class "btn btn-default"}
                        "Modify"])]
              [:td
               (when (= nil (current-student))
                 [:button {:on-click #(doall
                                           (delete-course-result
                                             (int (current-course))
                                             student))
                               :class "btn btn-danger"}
                      "Delete"])]])
           [:tr {:class  (when (not= nil (current-student)) "info")}
              [:td
                [result-add-input student-id-atom]]
              (for [assignment (vals assignments)]
                ^{:key (:id assignment)}
                [:td
                  (let [p-input (get
                                  @assignments-points-atom
                                  (:id assignment))]
                        (do
                          (when (= p-input nil)
                            (swap! assignments-points-atom
                                   assoc
                                   (int (:id assignment))
                                   (r/atom (str))))
                        [point-add-input (get
                                         @assignments-points-atom
                                         (:id assignment))]))])
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
                                     (reset! assignments-points-atom (sorted-map))
                                     (set-current-student! nil))

                         :class "btn btn-primary"}
                (if (= nil (current-student))
                  (str "Add!")
                  (str "Modify!"))]]

               [:td
                (when (not= nil (current-student))
                  [:button {:on-click #(do
                                        (set-current-student! nil)
                                        (reset! student-id-atom "")
                                        (reset! assignments-points-atom (sorted-map)))
                            :class    "btn btn-default"}
                  "Cancel"])]]]]]))
    [:div
     [:a {:href
          (str "#/courses/"
               (current-course)
               "/results")}
      "Back to result listing"]]]])