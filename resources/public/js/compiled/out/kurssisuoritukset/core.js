// Compiled by ClojureScript 0.0-3211 {}
goog.provide('kurssisuoritukset.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof kurssisuoritukset.core.app_state !== 'undefined'){
} else {
kurssisuoritukset.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, what is your name? "], null));
}
kurssisuoritukset.core.page = (function kurssisuoritukset$core$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,kurssisuoritukset.core.app_state).call(null,new cljs.core.Keyword(null,"text","text",-1790561697)),"Tomi"], null);
});
kurssisuoritukset.core.main = (function kurssisuoritukset$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.core.page], null),document.getElementById("app"));
});
goog.exportSymbol('kurssisuoritukset.core.main', kurssisuoritukset.core.main);

//# sourceMappingURL=core.js.map?rel=1440531898233