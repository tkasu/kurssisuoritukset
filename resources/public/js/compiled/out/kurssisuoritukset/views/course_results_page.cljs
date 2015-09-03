(ns kurssisuoritukset.views.course-results-page
  (:require
    [kurssisuoritukset.data :as data :refer [get-course add-assignment current-course]]))


(defn result-page []
  [:div
   [:div.container
    (when (not (nil? current-course))
      (let [course (get-course (int (current-course)))]
        [:div
          [:h3 (str (:name course) " sesult page")]
          [:p "Listing and point adding to be implemented"]]))]])