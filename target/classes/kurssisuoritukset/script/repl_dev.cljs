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

  (require '[kurssisuoritukset.data :as data :refer [get-course current-course add-result]])


  (let [course (get-course (int (current-course)))
        assignments (:assignments course)]
    (for [assignment (vals assignments)]
      (add-result
        (int (current-course))
        (:id assignment)
        "12345"
        20))))

