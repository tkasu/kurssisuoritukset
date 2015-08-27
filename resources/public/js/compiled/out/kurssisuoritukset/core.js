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
goog.require('kurssisuoritukset.data');
kurssisuoritukset.core.list_page_helper = (function kurssisuoritukset$core$list_page_helper(){
var list_page = new cljs.core.Var(function(){return kurssisuoritukset.views.pages.pages;},new cljs.core.Symbol("kurssisuoritukset.core","pages","kurssisuoritukset.core/pages",1461217508,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kurssisuoritukset.core","kurssisuoritukset.core",280182637,null),new cljs.core.Symbol(null,"pages","pages",1355125014,null),"/home/tomikasu/Dropbox/programming/NetBeansProjects/kesa2015-weso/kurssisuoritukset/src/cljs/kurssisuoritukset/views/pages.cljs",(11),(6),(5),(5),cljs.core.List.EMPTY,null,(cljs.core.truth_(kurssisuoritukset.views.pages.pages)?kurssisuoritukset.views.pages.pages.cljs$lang$test:null)])).call(null,new cljs.core.Keyword(null,"list-page","list-page",-1561305464));
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),list_page);
});
kurssisuoritukset.core.course_page_helper = (function kurssisuoritukset$core$course_page_helper(id){
var course_page = new cljs.core.Var(function(){return kurssisuoritukset.views.pages.pages;},new cljs.core.Symbol("kurssisuoritukset.core","pages","kurssisuoritukset.core/pages",1461217508,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kurssisuoritukset.core","kurssisuoritukset.core",280182637,null),new cljs.core.Symbol(null,"pages","pages",1355125014,null),"/home/tomikasu/Dropbox/programming/NetBeansProjects/kesa2015-weso/kurssisuoritukset/src/cljs/kurssisuoritukset/views/pages.cljs",(11),(6),(5),(5),cljs.core.List.EMPTY,null,(cljs.core.truth_(kurssisuoritukset.views.pages.pages)?kurssisuoritukset.views.pages.pages.cljs$lang$test:null)])).call(null,new cljs.core.Keyword(null,"course-page","course-page",-1321064698));
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-course","current-course",610293347),id);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),course_page);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__20245__auto___20257 = (function (params__20246__auto__){
if(cljs.core.map_QMARK_.call(null,params__20246__auto__)){
var map__20255 = params__20246__auto__;
var map__20255__$1 = ((cljs.core.seq_QMARK_.call(null,map__20255))?cljs.core.apply.call(null,cljs.core.hash_map,map__20255):map__20255);
return kurssisuoritukset.core.list_page_helper.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__20246__auto__)){
var vec__20256 = params__20246__auto__;
return kurssisuoritukset.core.list_page_helper.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__20245__auto___20257);

var action__20245__auto___20260 = (function (params__20246__auto__){
if(cljs.core.map_QMARK_.call(null,params__20246__auto__)){
var map__20258 = params__20246__auto__;
var map__20258__$1 = ((cljs.core.seq_QMARK_.call(null,map__20258))?cljs.core.apply.call(null,cljs.core.hash_map,map__20258):map__20258);
var id = cljs.core.get.call(null,map__20258__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return kurssisuoritukset.core.course_page_helper.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__20246__auto__)){
var vec__20259 = params__20246__auto__;
var id = cljs.core.nth.call(null,vec__20259,(0),null);
return kurssisuoritukset.core.course_page_helper.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/courses/:id",action__20245__auto___20260);

kurssisuoritukset.core.hook_browser_navigation_BANG_ = (function kurssisuoritukset$core$hook_browser_navigation_BANG_(){
var G__20262 = (new goog.History());
goog.events.listen(G__20262,goog.history.EventType.NAVIGATE,((function (G__20262){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__20262))
);

G__20262.setEnabled(true);

return G__20262;
});
kurssisuoritukset.core.init = (function kurssisuoritukset$core$init(){
kurssisuoritukset.core.hook_browser_navigation_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.data.current_page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map?rel=1440698973900