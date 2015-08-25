(ns kurssisuoritukset.core
    (:require [reagent.core :as reagent]))

(defonce app-state (reagent/atom {:text "Hello, what is your name? "}))

(defn page []
  [:div (@app-state :text) "Tomi"])

(defn ^:export main []
  (reagent/render [page]
                  (.getElementById js/document "app")))
