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

(defn start [port]
  (ring/run-jetty #'routes {:port port :join? false}))

(defn -main []
  (let [port (Integer. (or (System/getenv "PORT") "8080"))]
    (start port)))