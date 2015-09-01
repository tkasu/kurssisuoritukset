// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.data');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
if(typeof kurssisuoritukset.data.coursesA !== 'undefined'){
} else {
kurssisuoritukset.data.coursesA = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}
if(typeof kurssisuoritukset.data.studentsA !== 'undefined'){
} else {
kurssisuoritukset.data.studentsA = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}
if(typeof kurssisuoritukset.data.courses_id_counter !== 'undefined'){
} else {
kurssisuoritukset.data.courses_id_counter = reagent.core.atom.call(null,(0));
}
if(typeof kurssisuoritukset.data.student_id_counter !== 'undefined'){
} else {
kurssisuoritukset.data.student_id_counter = reagent.core.atom.call(null,(0));
}
if(typeof kurssisuoritukset.data.add_course_atom !== 'undefined'){
} else {
kurssisuoritukset.data.add_course_atom = reagent.core.atom.call(null,[].join(''));
}
if(typeof kurssisuoritukset.data.add_assignment_atom !== 'undefined'){
} else {
kurssisuoritukset.data.add_assignment_atom = reagent.core.atom.call(null,[].join(''));
}
if(typeof kurssisuoritukset.data.add_assignment_crd_atom !== 'undefined'){
} else {
kurssisuoritukset.data.add_assignment_crd_atom = reagent.core.atom.call(null,[].join(''));
}
if(typeof kurssisuoritukset.data.assignments_id_counter !== 'undefined'){
} else {
kurssisuoritukset.data.assignments_id_counter = reagent.core.atom.call(null,(0));
}
kurssisuoritukset.data.get_course = (function kurssisuoritukset$data$get_course(id){
return cljs.core.get.call(null,cljs.core.deref.call(null,kurssisuoritukset.data.coursesA),id);
});
kurssisuoritukset.data.add_course = (function kurssisuoritukset$data$add_course(name){
var id = cljs.core.swap_BANG_.call(null,kurssisuoritukset.data.courses_id_counter,cljs.core.inc);
cljs.core.swap_BANG_.call(null,kurssisuoritukset.data.coursesA,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"assignments","assignments",-1114514911),cljs.core.sorted_map.call(null)], null));

return cljs.core.reset_BANG_.call(null,kurssisuoritukset.data.add_course_atom,"");
});
kurssisuoritukset.data.add_assignment = (function kurssisuoritukset$data$add_assignment(course_id,name,credits){
var course = kurssisuoritukset.data.get_course.call(null,course_id);
var assignments = new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(course);
var id = cljs.core.swap_BANG_.call(null,kurssisuoritukset.data.assignments_id_counter,cljs.core.inc);
cljs.core.swap_BANG_.call(null,kurssisuoritukset.data.coursesA,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,new cljs.core.Keyword(null,"assignments","assignments",-1114514911)], null),cljs.core.assoc.call(null,assignments,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"credits","credits",785860820),credits], null)));

cljs.core.reset_BANG_.call(null,kurssisuoritukset.data.add_assignment_atom,"");

return cljs.core.reset_BANG_.call(null,kurssisuoritukset.data.add_assignment_crd_atom,"");
});
kurssisuoritukset.data.add_student = (function kurssisuoritukset$data$add_student(name){
return null;
});
kurssisuoritukset.data.current_page = (function kurssisuoritukset$data$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
kurssisuoritukset.data.current_course = (function kurssisuoritukset$data$current_course(){
return reagent.session.get.call(null,new cljs.core.Keyword(null,"current-course","current-course",610293347));
});

//# sourceMappingURL=data.js.map?rel=1441135588187