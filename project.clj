(defproject kurssisuoritukset "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.107" :scope "provided"]
                 [reagent "0.5.1-rc"]
                 [reagent-utils "0.1.5"]
                 [secretary "1.2.1"]
                 [compojure "1.4.0"]
                 [ring/ring-core "1.4.0"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [figwheel "0.3.6"]
                 [figwheel-sidecar "0.3.6"]
                 [matchbox "0.0.7"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]]

  :source-paths ["src/clj" "src/cljs"]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.6"]
            [lein-ring "0.9.6"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :auto-clean false

  :main ^:skip-aot kurssisuoritukset.core
  :profiles {:uberjar {:aot [kurssisuoritukset.core]}
             :hooks ['leiningen.cljsbuild]
             :cljsbuild {:jar true
                         :builds {
                                  :id "min"
                                   :source-paths ["src/cljs"]

                                   :compiler {:main kurssisuoritukset.core
                                              :output-to "resources/public/js/compiled/app.js"
                                              :optimizations :advanced
                                              :pretty-print false}}}}

  :min-lein-version "2.0.0"

  :uberjar-name "kurssisuoritukset-standalone.jar"


  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]

                        :figwheel {:on-jsload "kurssisuoritukset.core/main"
                                   :server-port 3449}

                        :compiler {:main kurssisuoritukset.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :asset-path "js/compiled/out"
                                   :source-map-timestamp true}}

                       {:id "min"
                        :source-paths ["src/cljs"]

                        :compiler {:main kurssisuoritukset.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :optimizations :advanced
                                   :pretty-print false}}]}

  :ring {:handler kurssisuoritukset.core/-main})
