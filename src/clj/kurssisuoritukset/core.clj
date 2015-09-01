(ns kurssisuoritukset.core
  (:gen-class)
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.handler :refer [site]]
            [compojure.route :refer [resources not-found]]
            [ring.adapter.jetty :as ring]
            [ring.util.response :refer [resource-response]]))

(defroutes routes
           (GET "/" [] (resource-response "index.html" {:root "public"}))
           (resources "/")
           (not-found "Page not found"))

(defn -main []
  (ring/run-jetty #'routes {:port 8080 :join? false}))