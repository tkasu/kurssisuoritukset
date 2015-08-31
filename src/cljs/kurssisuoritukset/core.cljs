(ns kurssisuoritukset.core
    (:require [reagent.core :as r]
              [kurssisuoritukset.data :refer [current-page current-course]]
              [reagent.session :as s]
              [secretary.core :as secretary :refer-macros [defroute]]
              [kurssisuoritukset.views.pages :refer [pages]]
              [goog.events :as events]
              [goog.history.EventType :as EventType])
  (:import goog.History))

(comment [kurssisuoritukset.session :as session :refer [global-put!]])

; Route helpers

(defn list-page-helper []
  (let [list-page (#'pages :list-page)]
    (s/put! :current-page list-page)))

(defn course-page-helper [id]
  (let [course-page (#'pages :course-page)]
    (do
      (s/put! :current-course id)
      (s/put! :current-page course-page))))

; Route

(secretary/set-config! :prefix "#")

(defroute "/" [] (list-page-helper))

(defroute "/courses/:id" [id] (course-page-helper id))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      EventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

; Render views

(defn init []
    (hook-browser-navigation!)
    (r/render [current-page]
               (.getElementById js/document "app")))

