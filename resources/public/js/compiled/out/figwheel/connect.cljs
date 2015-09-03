(ns figwheel.connect (:require [kurssisuoritukset.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/kurssisuoritukset.core.main (apply js/kurssisuoritukset.core.main x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'kurssisuoritukset.core/main' is missing"))), :server-port 3449, :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

