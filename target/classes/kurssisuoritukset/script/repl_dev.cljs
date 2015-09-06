(ns ^:figwheel-no-load kurssisuoritukset.script.repl-dev)

(comment

  (+ 2 2)

  (defn fb []
    (js/Firebase. "https://torrid-fire-7569.firebaseio.com/kurssisuoritukset"))

  (.push fb "xd")

  (def testc (a/chan))

  (def c (chan))

  (put! c "lol")

  (take! c (fn [v] (println v)))

  (go 42)

  (<!! (go 42))

  (go (println "It works!" (<! (go 42))))

  (def fbc (chan 1))

  (go (>! fbc 1)
      (println "done 1"))

  (take! fbc (fn [v] (println v)))

  (go (>! fbc 2)
      (println "done 2"))

  (go
    (loop []
      (when-let [v (<! fbc)]
        (println "Got: " v))
      (println "Exiting!")))

  (put! fbc "xdd")


  (def log-chan (chan))

  (go
    (loop []
      (when-let [v (<! log-chan)]
        (println v)
        (recur)))
    (println "Log Closed"))


  (def c (chan))

  (go
    (println "Waiting")
    (<! c)
    (println "Got it!"))

  (put! c "lol")

  (take! c (fn [v] (println v)))


  (close! log-chan)

  (defn log [msg]
    (put! log-chan msg))

  (log "lol")


  (let [c (chan 1)]
    (tap m c)
    (go (loop []
          (when-let [v (<! c)]
            (println "Got! " v)
            (recur))
          (println "Exiting!"))))

  (>!! to-mult 42)
  (>!! to-mult 43)

  (close! to-mult)

  (<!! fbc)
  (<!! fbc)



  (require '[matchbox.core :as m])

  (require '[matchbox.reagent :as mr])

  (require '[cljs.core.async :as a
             :refer [<! >! chan close! sliding-buffer put! take! alts!]])

  (require-macros '[cljs.core.async.macros :as m :refer [go alt!]])



  (m/connect base-uri)

  (def base-uri "https://kurssisuoritukset.firebaseio.com/")

  (def root (m/connect base-uri))

  (def ref
    (m/connect base-uri))


  (m/deref courses fb-c)

  (take! fb-c (fn [v] (println v)))

  (def courses (m/get-in ref [:courses]))

  (def tomis-friends (m/get-in ref [:users :tomi :friends]))

  (m/deref
    tomis-friends
    (fn [key value]
      (m/reset-in! ref [:users :tomi :num-friends]
                   (count value))))

  (m/reset! tomis-friends [{:name "Janne"} {:name "Anton"}])

  (m/conj! tomis-friends {:name "Sonja"})

  (defn async-put [& msgs]
    (put! fb-c msgs))

  (m/reset! courses @coursesA)

  (def fb-c (chan))

  (m/deref (m/get-in ref [:courses]) async-put)

  (m/deref-rw (m/get-in ref [:courses]) async-put)

  (a/go-loop []
     (let [msgs (<! fb-c)]
       (doseq [msg msgs]
         (println msg)))
       (println " ")
       (recur))


  (take! fb-c (fn [v] (println v)))

  (take! fb-c (fn [v] (println v)))

  (go (loop []
        (when-let [v (<! fb-c)]
          (println "Got! " v))
        (println "Exiting!")))

  @coursesA

  (def coursesT (mr/sync-rw (m/get-in ref [:courses])))

  (reset! coursesA (sorted-map))

  (go (loop []
        (when-let [v (<! fb-c)]
          (reset! coursesA v))
        (println "Exiting!")))

  (defn get-courses []
    (let [fb-c (chan)]
      (do
        (m/deref (m/get-in ref [:courses]) async-put)
        (go (loop []
          (when-let [v (<! fb-c)]
            (println "Got! " v))
          (println "Exiting!"))))))

  (get-courses)


  (m/reset!)

  (m/auth-anon ref)

  (def f (m/connect base-uri (str (rand-int 100))))

  (m/reset! ref {:deep {:route "secret"}})

  (m/auth-anon (m/connect base-uri))

  (ns kurssisuoritukset.data)

  (defn set-student-to-input-test! [course-id student-id]
    (do
      (reset! (:student-id add-result-atom) student-id)
      (reset! (:points add-result-atom) (sorted-map))
      (for [assignment (vals (:assignments (get-course course-id)))]
        (swap! (:points add-result-atom) assoc (int (:id assignment))
               (r/atom (get-in @coursesA [course-id :assignments
                                          (:id assignment) :results
                                          student-id :points]))))))

  (get-in results [student-id :points])

  (set-student-to-input-test! 1 "001122334")

  (set-student-to-input! 1 "001122334")

  (get-in (get-course 1)
          [:assignments 1 :results])

  (get-in (get-in (get-course 1)
                  [:assignments 1 :results]) ["001122334" :points])

  (require '[reagent.core :as r])

  :let [input-point
        (swap! assignments-points-atom
               assoc
               (int (:id assignment))
               (r/atom (str)))]

  (swap! (:points add-result-atom) assoc 1
         (r/atom 50))

  @coursesA

  (reset! (:student-id add-result-atom) "LOLLERO")

  (swap! (:points add-result-atom) assoc 1 (r/atom 50))

  (get @(:points add-result-atom) 2)

  (:points add-result-atom)

  (:student-id add-result-atom)

  (current-student)

  @(:points add-result-atom)

  (get @(:points add-result-atom) 1)

  (vals (:assignments (vals (get-course 1))))

  (get-course 1)

  (:assignments (get-course 1))

  (vals (:assignments (get-course 1)))

  (:assignments (vals (get-course 1)))

  (vals (get-course 1))

  (:student-id add-result-atom)

  (reset! (:student-id add-result-atom) "LOLLERO")

  (xdd)

  (set-student-to-input! 1 "1234")

  (current-student)

  (set-current-student! "1234")

  @coursesA

  (get-course 1)

  (into []
        (distinct
          (apply concat
                 (reduce
                   (fn [acc next]
                     (let [students (reduce (fn [acc-s next-s]
                                              (let [student (:student-id next-s)]
                                                (conj acc-s student)))
                                            []
                                            (vals (:results next)))]
                       (conj acc students)))
                   []
                   (vals (get-in @coursesA [1 :assignments]))))))

  (get-in (get-in @coursesA [1 :assignments]) [1 :results])

  (get-in @coursesA [1 :assignments])

  (vals (:results (nth (vals (get-in @coursesA [1 :assignments])) 0)))

  (ns kurssisuoritukset.views.course-results-page)

  (result-page)

  (ns kurssisuoritukset.views.course-results-mod-page)

  (require '[kurssisuoritukset.data :as data :refer [get-course
                                                     add-result-atom
                                                     current-course
                                                     add-result
                                                     delete-course-result]])

  (:student-id add-result-atom)
  (:points add-result-atom)

  (get @(:points add-result-atom) 2)


  (let [course (get-course (int (current-course)))
        assignments (:assignments course)]
    (for [assignment (vals assignments)]
      (add-result
        (int (current-course))
        (:id assignment)
        "12345"
        20)))

  (let [course (get-course (int (current-course)))
        assignments (:assignments course)]
    (add-course-results
      (int (current-course))
      assignments
      "12345"))

  #(add-course-results
    (int (current-course))
    assignments
    "1234")

  (add-result 1
              2
              @student-id-atom
              @(get @assignments-points-atom 2))


  @coursesA

  (defn remove-result-backup [course-id student-id]
    (reduce (fn [acc next]
              (let [results (:results next)]
                (conj acc results)))
            []
            (vals (get-in @coursesA [course-id :assignments]))))

  (defn remove-result-backup2 [course-id student-id]
    (reduce (fn [acc next]
              (let [results (:results next)]
                (reduce
                  (fn [acc next]
                    (if (= (:student-id (vals next)) student-id)
                      (do
                        (println (:student-id (vals next)))
                        acc)
                      (conj acc next)))
                  results)))
            []
            (vals (get-in @coursesA [course-id :assignments]))))

  (defn delete-result [course-id assignment-id student-id]
    (let [results (get-in (get-course course-id)
                          [:assignments assignment-id :results])]
      (swap! coursesA assoc-in [course-id :assignments assignment-id :results]
             (dissoc results student-id))))

  (defn delete-course-result-backup [course-id student-id]
    (reduce (fn [acc next]
              (let [results (:results next)]
                (reduce
                  (fn [acc-r next-r]
                    (if (= (key next-r) student-id)
                      (do
                        (delete-result course-id (:id next) student-id)
                        (println (str "I'm here!" next))))
                    (println (:id next)))
                  []
                  results)))
            []
            (vals (get-in @coursesA [course-id :assignments]))))

  (vals (get-in @coursesA [1 :assignments]))

  (delete-result 1 1 "012345678")



  (delete-course-result 1 "001122334")

  @coursesA

  )
