(ns kurssisuoritukset.views.pages
  (:require [kurssisuoritukset.views.list-page :refer [list-page]]
            [kurssisuoritukset.views.course-page :refer [course-page]]
            [kurssisuoritukset.views.course-results-page :refer [result-page]]
            [kurssisuoritukset.views.course-results-mod-page :refer [result-mod-page]]))

(def pages {:list-page list-page
            :course-page course-page
            :result-page result-page
            :result-mod-page result-mod-page})






