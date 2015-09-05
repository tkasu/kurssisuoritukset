(ns kurssisuoritukset.views.course-results-page
  (:require
    [kurssisuoritukset.data :as data :refer [get-course get-students add-assignment current-course]]))


(defn result-page []
  [:div
   [:div.container
    (when (not (nil? current-course))
      (let [course (get-course (int (current-course)))
            students (get-students (int (current-course)))]
        [:div
          [:h3 (str (:name course) " result page")]
         [:table.table
          [:thead
           [:tr
            [:th "Student"]
            [:th "xxd"]]]
          [:tbody
           (for [student students]
             ^{:key student}
             [:tr
              [:td student]
              [:td "tobedone"]])]]]))]])