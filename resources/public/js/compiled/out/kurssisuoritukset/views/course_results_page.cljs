(ns kurssisuoritukset.views.course-results-page
  (:require
    [kurssisuoritukset.data :as data :refer
     [get-course get-students get-student-points add-assignment current-course]]))


(defn result-page []
  [:div
   [:div.container
    (when (not (nil? current-course))
      (let [course (get-course (int (current-course)))
            assignments (:assignments course)
            students (get-students (int (current-course)))]
        [:div
          [:h3 (str (:name course) " result page")]
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
                   (:credits assignment))])])]]]))]])