// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__26452_SHARP_,p2__26451_SHARP_){
return [cljs.core.str(p2__26451_SHARP_)].join('');
}));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);

}
}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__18632__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__18632__auto__)){
return (window["CustomEvent"]);
} else {
return and__18632__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent(event_name,(function (){var obj26456 = {"detail":data};
return obj26456;
})())));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args26461 = [];
var len__19702__auto___26467 = arguments.length;
var i__19703__auto___26468 = (0);
while(true){
if((i__19703__auto___26468 < len__19702__auto___26467)){
args26461.push((arguments[i__19703__auto___26468]));

var G__26469 = (i__19703__auto___26468 + (1));
i__19703__auto___26468 = G__26469;
continue;
} else {
}
break;
}

var G__26463 = args26461.length;
switch (G__26463) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26461.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__26464 = cljs.core._EQ_;
var expr__26465 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__26464.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__26465))){
return ((function (pred__26464,expr__26465){
return (function (p1__26457_SHARP_){
return console.warn(p1__26457_SHARP_);
});
;})(pred__26464,expr__26465))
} else {
if(cljs.core.truth_(pred__26464.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__26465))){
return ((function (pred__26464,expr__26465){
return (function (p1__26458_SHARP_){
return console.debug(p1__26458_SHARP_);
});
;})(pred__26464,expr__26465))
} else {
if(cljs.core.truth_(pred__26464.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__26465))){
return ((function (pred__26464,expr__26465){
return (function (p1__26459_SHARP_){
return console.error(p1__26459_SHARP_);
});
;})(pred__26464,expr__26465))
} else {
return ((function (pred__26464,expr__26465){
return (function (p1__26460_SHARP_){
return console.log(p1__26460_SHARP_);
});
;})(pred__26464,expr__26465))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=utils.js.map?rel=1441303748629