(ns kurssisuoritukset.core
    (:require [reagent.core :as r]
              [kurssisuoritukset.data :refer [current-page current-course]]
              [reagent.session :as s]
              [secretary.core :as secretary :refer-macros [defroute]]
              [kurssisuoritukset.views.pages :refer [pages]]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [cljs.core.async :as async])
  (:import goog.History))

; Route helpers

(defn list-page-helper []
  (let [list-page (#'pages :list-page)]
    (s/put! :current-page list-page)))

(defn course-page-helper [id]
  (let [course-page (#'pages :course-page)]
    (do
      (s/put! :current-course id)
      (s/put! :current-page course-page))))

(defn result-page-helper [id]
  (let [result-page (#'pages :result-page)]
    (do
      (s/put! :current-course id)
      (s/put! :current-page result-page))))

(defn result-mod-page-helper [id]
  (let [result-mod-page (#'pages :result-mod-page)]
    (do
      (s/put! :current-course id)
      (s/put! :current-page result-mod-page))))

; Route

(secretary/set-config! :prefix "#")

(defroute "/" [] (list-page-helper))

(defroute "/courses/:id" [id] (course-page-helper id))

(defroute "/courses/:id/results" [id] (result-page-helper id))

(defroute "/courses/:id/results/mod" [id] (result-mod-page-helper id))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      EventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(hook-browser-navigation!)
; Render views

(defn ^:export main []
    (r/render [current-page]
               (.getElementById js/document "app")))

