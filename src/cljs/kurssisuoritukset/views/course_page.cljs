(ns ^:figwheel-always kurssisuoritukset.views.course-page
  (:require [kurssisuoritukset.data :refer [current-course get-course]]))

(enable-console-print!)

(defn course-page []
  (let [course-id #'current-course
        course (get-course 3)]
    [:div
      [:h2 (str "Course " (:name course) " (not working yet)")]
       [:a {:href "#/"} " back to front page"]]))

(println (:name (get-course 2)))

(comment
  (println (:name (get-course current-course)))
)
