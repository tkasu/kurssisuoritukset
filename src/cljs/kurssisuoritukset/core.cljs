(ns kurssisuoritukset.core
    (:require [reagent.core :as r]
              [reagent.session :as s]
              [kurssisuoritukset.views.pages :refer [pages]]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType])
  (:import goog.History))

(comment [kurssisuoritukset.session :as session :refer [global-put!]])

(comment
(defn current-page-will-mount []
  (session/global-put! :current-page (#'pages :current-page)))

(defn current-page-will-render []
  (session/global-state :current-page))

(defn page-component []
  (r/create-class {:component-will-mount current-page-will-mount
                   :reagent-render current-page-will-render})))

(defn current-page []
  [:div [(s/get :current-page)]])

; Route helpers

(defn list-page-helper []
  (let [list-page (#'pages :list-page)]
    (s/put! :current-page list-page)))

(defn course-page-helper []
  (let [course-page (#'pages :course-page)]
    (s/put! :current-page course-page)))

; Routes

(secretary/set-config! :prefix "#")

(secretary/defroute "/" [] (#'list-page-helper))

(secretary/defroute "/:id" [] (#'course-page-helper))

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

