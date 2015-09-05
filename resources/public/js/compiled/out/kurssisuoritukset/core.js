// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.core');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('kurssisuoritukset.views.pages');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('kurssisuoritukset.data');
kurssisuoritukset.core.list_page_helper = (function kurssisuoritukset$core$list_page_helper(){
var list_page = new cljs.core.Var(function(){return kurssisuoritukset.views.pages.pages;},new cljs.core.Symbol("kurssisuoritukset.core","pages","kurssisuoritukset.core/pages",1461217508,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kurssisuoritukset.core","kurssisuoritukset.core",280182637,null),new cljs.core.Symbol(null,"pages","pages",1355125014,null),"/home/tomikasu/Dropbox/programming/NetBeansProjects/kesa2015-weso/kurssisuoritukset/target/classes/kurssisuoritukset/views/pages.cljs",11,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(kurssisuoritukset.views.pages.pages)?kurssisuoritukset.views.pages.pages.cljs$lang$test:null)])).call(null,new cljs.core.Keyword(null,"list-page","list-page",-1561305464));
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),list_page);
});
kurssisuoritukset.core.course_page_helper = (function kurssisuoritukset$core$course_page_helper(id){
var course_page = new cljs.core.Var(function(){return kurssisuoritukset.views.pages.pages;},new cljs.core.Symbol("kurssisuoritukset.core","pages","kurssisuoritukset.core/pages",1461217508,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kurssisuoritukset.core","kurssisuoritukset.core",280182637,null),new cljs.core.Symbol(null,"pages","pages",1355125014,null),"/home/tomikasu/Dropbox/programming/NetBeansProjects/kesa2015-weso/kurssisuoritukset/target/classes/kurssisuoritukset/views/pages.cljs",11,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(kurssisuoritukset.views.pages.pages)?kurssisuoritukset.views.pages.pages.cljs$lang$test:null)])).call(null,new cljs.core.Keyword(null,"course-page","course-page",-1321064698));
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-course","current-course",610293347),id);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),course_page);
});
kurssisuoritukset.core.result_page_helper = (function kurssisuoritukset$core$result_page_helper(id){
var result_page = new cljs.core.Var(function(){return kurssisuoritukset.views.pages.pages;},new cljs.core.Symbol("kurssisuoritukset.core","pages","kurssisuoritukset.core/pages",1461217508,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kurssisuoritukset.core","kurssisuoritukset.core",280182637,null),new cljs.core.Symbol(null,"pages","pages",1355125014,null),"/home/tomikasu/Dropbox/programming/NetBeansProjects/kesa2015-weso/kurssisuoritukset/target/classes/kurssisuoritukset/views/pages.cljs",11,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(kurssisuoritukset.views.pages.pages)?kurssisuoritukset.views.pages.pages.cljs$lang$test:null)])).call(null,new cljs.core.Keyword(null,"result-page","result-page",1649892199));
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-course","current-course",610293347),id);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),result_page);
});
kurssisuoritukset.core.result_mod_page_helper = (function kurssisuoritukset$core$result_mod_page_helper(id){
var result_mod_page = new cljs.core.Var(function(){return kurssisuoritukset.views.pages.pages;},new cljs.core.Symbol("kurssisuoritukset.core","pages","kurssisuoritukset.core/pages",1461217508,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kurssisuoritukset.core","kurssisuoritukset.core",280182637,null),new cljs.core.Symbol(null,"pages","pages",1355125014,null),"/home/tomikasu/Dropbox/programming/NetBeansProjects/kesa2015-weso/kurssisuoritukset/target/classes/kurssisuoritukset/views/pages.cljs",11,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(kurssisuoritukset.views.pages.pages)?kurssisuoritukset.views.pages.pages.cljs$lang$test:null)])).call(null,new cljs.core.Keyword(null,"result-mod-page","result-mod-page",1949132482));
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-course","current-course",610293347),id);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),result_mod_page);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__18896__auto___23016 = (function (params__18897__auto__){
if(cljs.core.map_QMARK_.call(null,params__18897__auto__)){
var map__23013 = params__18897__auto__;
var map__23013__$1 = ((((!((map__23013 == null)))?((((map__23013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23013):map__23013);
return kurssisuoritukset.core.list_page_helper.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__18897__auto__)){
var vec__23015 = params__18897__auto__;
return kurssisuoritukset.core.list_page_helper.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18896__auto___23016);

var action__18896__auto___23020 = (function (params__18897__auto__){
if(cljs.core.map_QMARK_.call(null,params__18897__auto__)){
var map__23017 = params__18897__auto__;
var map__23017__$1 = ((((!((map__23017 == null)))?((((map__23017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23017):map__23017);
var id = cljs.core.get.call(null,map__23017__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return kurssisuoritukset.core.course_page_helper.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__18897__auto__)){
var vec__23019 = params__18897__auto__;
var id = cljs.core.nth.call(null,vec__23019,(0),null);
return kurssisuoritukset.core.course_page_helper.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/courses/:id",action__18896__auto___23020);

var action__18896__auto___23024 = (function (params__18897__auto__){
if(cljs.core.map_QMARK_.call(null,params__18897__auto__)){
var map__23021 = params__18897__auto__;
var map__23021__$1 = ((((!((map__23021 == null)))?((((map__23021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23021):map__23021);
var id = cljs.core.get.call(null,map__23021__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return kurssisuoritukset.core.result_page_helper.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__18897__auto__)){
var vec__23023 = params__18897__auto__;
var id = cljs.core.nth.call(null,vec__23023,(0),null);
return kurssisuoritukset.core.result_page_helper.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/courses/:id/results",action__18896__auto___23024);

var action__18896__auto___23028 = (function (params__18897__auto__){
if(cljs.core.map_QMARK_.call(null,params__18897__auto__)){
var map__23025 = params__18897__auto__;
var map__23025__$1 = ((((!((map__23025 == null)))?((((map__23025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23025):map__23025);
var id = cljs.core.get.call(null,map__23025__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return kurssisuoritukset.core.result_mod_page_helper.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__18897__auto__)){
var vec__23027 = params__18897__auto__;
var id = cljs.core.nth.call(null,vec__23027,(0),null);
return kurssisuoritukset.core.result_mod_page_helper.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/courses/:id/results/mod",action__18896__auto___23028);

kurssisuoritukset.core.hook_browser_navigation_BANG_ = (function kurssisuoritukset$core$hook_browser_navigation_BANG_(){
var G__23030 = (new goog.History());
goog.events.listen(G__23030,goog.history.EventType.NAVIGATE,((function (G__23030){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__23030))
);

G__23030.setEnabled(true);

return G__23030;
});
kurssisuoritukset.core.hook_browser_navigation_BANG_.call(null);
kurssisuoritukset.core.main = (function kurssisuoritukset$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.data.current_page], null),document.getElementById("app"));
});
goog.exportSymbol('kurssisuoritukset.core.main', kurssisuoritukset.core.main);

//# sourceMappingURL=core.js.map?rel=1441465096480