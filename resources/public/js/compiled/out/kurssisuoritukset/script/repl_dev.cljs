(ns ^:figwheel-no-load kurssisuoritukset.script.repl-dev)

(comment

  (+ 2 2)

  (ns kurssisuoritukset.data)

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


  (remove-result 1 "001122334")

  )

