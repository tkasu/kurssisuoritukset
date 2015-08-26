// Compiled by ClojureScript 0.0-3211 {}
goog.provide('kurssisuoritukset.core');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('kurssisuoritukset.views.pages');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('goog.History');
goog.require('goog.events');
kurssisuoritukset.core.current_page = (function kurssisuoritukset$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
kurssisuoritukset.core.list_page_helper = (function kurssisuoritukset$core$list_page_helper(){
var list_page = new cljs.core.Var(function(){return kurssisuoritukset.views.pages.pages;},new cljs.core.Symbol("kurssisuoritukset.core","pages","kurssisuoritukset.core/pages",1461217508,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kurssisuoritukset.core","kurssisuoritukset.core",280182637,null),new cljs.core.Symbol(null,"pages","pages",1355125014,null),"/home/tomikasu/Dropbox/programming/NetBeansProjects/kesa2015-weso/kurssisuoritukset/src/cljs/kurssisuoritukset/views/pages.cljs",11,6,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(kurssisuoritukset.views.pages.pages)?kurssisuoritukset.views.pages.pages.cljs$lang$test:null)])).call(null,new cljs.core.Keyword(null,"list-page","list-page",-1561305464));
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),list_page);
});
kurssisuoritukset.core.course_page_helper = (function kurssisuoritukset$core$course_page_helper(){
var course_page = new cljs.core.Var(function(){return kurssisuoritukset.views.pages.pages;},new cljs.core.Symbol("kurssisuoritukset.core","pages","kurssisuoritukset.core/pages",1461217508,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kurssisuoritukset.core","kurssisuoritukset.core",280182637,null),new cljs.core.Symbol(null,"pages","pages",1355125014,null),"/home/tomikasu/Dropbox/programming/NetBeansProjects/kesa2015-weso/kurssisuoritukset/src/cljs/kurssisuoritukset/views/pages.cljs",11,6,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(kurssisuoritukset.views.pages.pages)?kurssisuoritukset.views.pages.pages.cljs$lang$test:null)])).call(null,new cljs.core.Keyword(null,"course-page","course-page",-1321064698));
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),course_page);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__20508__auto___30006 = (function (params__20509__auto__){
if(cljs.core.map_QMARK_.call(null,params__20509__auto__)){
var map__30004 = params__20509__auto__;
var map__30004__$1 = ((cljs.core.seq_QMARK_.call(null,map__30004))?cljs.core.apply.call(null,cljs.core.hash_map,map__30004):map__30004);
return new cljs.core.Var(function(){return kurssisuoritukset.core.list_page_helper;},new cljs.core.Symbol("kurssisuoritukset.core","list-page-helper","kurssisuoritukset.core/list-page-helper",-1046660801,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kurssisuoritukset.core","kurssisuoritukset.core",280182637,null),new cljs.core.Symbol(null,"list-page-helper","list-page-helper",-992415519,null),"/home/tomikasu/Dropbox/programming/NetBeansProjects/kesa2015-weso/kurssisuoritukset/src/cljs/kurssisuoritukset/core.cljs",23,7,28,28,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(kurssisuoritukset.core.list_page_helper)?kurssisuoritukset.core.list_page_helper.cljs$lang$test:null)])).call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__20509__auto__)){
var vec__30005 = params__20509__auto__;
return new cljs.core.Var(function(){return kurssisuoritukset.core.list_page_helper;},new cljs.core.Symbol("kurssisuoritukset.core","list-page-helper","kurssisuoritukset.core/list-page-helper",-1046660801,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kurssisuoritukset.core","kurssisuoritukset.core",280182637,null),new cljs.core.Symbol(null,"list-page-helper","list-page-helper",-992415519,null),"/home/tomikasu/Dropbox/programming/NetBeansProjects/kesa2015-weso/kurssisuoritukset/src/cljs/kurssisuoritukset/core.cljs",23,7,28,28,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(kurssisuoritukset.core.list_page_helper)?kurssisuoritukset.core.list_page_helper.cljs$lang$test:null)])).call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__20508__auto___30006);

var action__20508__auto___30009 = (function (params__20509__auto__){
if(cljs.core.map_QMARK_.call(null,params__20509__auto__)){
var map__30007 = params__20509__auto__;
var map__30007__$1 = ((cljs.core.seq_QMARK_.call(null,map__30007))?cljs.core.apply.call(null,cljs.core.hash_map,map__30007):map__30007);
return new cljs.core.Var(function(){return kurssisuoritukset.core.course_page_helper;},new cljs.core.Symbol("kurssisuoritukset.core","course-page-helper","kurssisuoritukset.core/course-page-helper",-911869633,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kurssisuoritukset.core","kurssisuoritukset.core",280182637,null),new cljs.core.Symbol(null,"course-page-helper","course-page-helper",-983367607,null),"/home/tomikasu/Dropbox/programming/NetBeansProjects/kesa2015-weso/kurssisuoritukset/src/cljs/kurssisuoritukset/core.cljs",25,7,32,32,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(kurssisuoritukset.core.course_page_helper)?kurssisuoritukset.core.course_page_helper.cljs$lang$test:null)])).call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__20509__auto__)){
var vec__30008 = params__20509__auto__;
return new cljs.core.Var(function(){return kurssisuoritukset.core.course_page_helper;},new cljs.core.Symbol("kurssisuoritukset.core","course-page-helper","kurssisuoritukset.core/course-page-helper",-911869633,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kurssisuoritukset.core","kurssisuoritukset.core",280182637,null),new cljs.core.Symbol(null,"course-page-helper","course-page-helper",-983367607,null),"/home/tomikasu/Dropbox/programming/NetBeansProjects/kesa2015-weso/kurssisuoritukset/src/cljs/kurssisuoritukset/core.cljs",25,7,32,32,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(kurssisuoritukset.core.course_page_helper)?kurssisuoritukset.core.course_page_helper.cljs$lang$test:null)])).call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/:id",action__20508__auto___30009);

kurssisuoritukset.core.hook_browser_navigation_BANG_ = (function kurssisuoritukset$core$hook_browser_navigation_BANG_(){
var G__30011 = (new goog.History());
goog.events.listen(G__30011,goog.history.EventType.NAVIGATE,((function (G__30011){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__30011))
);

G__30011.setEnabled(true);

return G__30011;
});
kurssisuoritukset.core.init = (function kurssisuoritukset$core$init(){
kurssisuoritukset.core.hook_browser_navigation_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.core.current_page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map?rel=1440626286794