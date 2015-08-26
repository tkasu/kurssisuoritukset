(ns figwheel.connect (:require [kurssisuoritukset.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/kurssisuoritukset.core.init (apply js/kurssisuoritukset.core.init x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'kurssisuoritukset.core/init' is missing"))), :server-port 3449, :build-id "dev"})

