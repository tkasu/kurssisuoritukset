// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.reload_file_STAR_;

figwheel.client.file_reloading.resolve_ns;
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__27570_SHARP_,p2__27571_SHARP_){
var and__18632__auto__ = p1__27570_SHARP_;
if(cljs.core.truth_(and__18632__auto__)){
return p2__27571_SHARP_;
} else {
return and__18632__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18644__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18644__auto__){
return or__18644__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18644__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18644__auto__){
return or__18644__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18644__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18644__auto__)){
return or__18644__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19557__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19558__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19559__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19560__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19561__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19561__auto__,method_table__19557__auto__,prefer_table__19558__auto__,method_cache__19559__auto__,cached_hierarchy__19560__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27572){
var map__27573 = p__27572;
var map__27573__$1 = ((((!((map__27573 == null)))?((((map__27573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27573):map__27573);
var file = cljs.core.get.call(null,map__27573__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__27575){
var map__27576 = p__27575;
var map__27576__$1 = ((((!((map__27576 == null)))?((((map__27576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27576):map__27576);
var namespace = cljs.core.get.call(null,map__27576__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19557__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19558__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19559__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19560__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19561__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19561__auto__,method_table__19557__auto__,prefer_table__19558__auto__,method_cache__19559__auto__,cached_hierarchy__19560__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e27578){if((e27578 instanceof Error)){
var e = e27578;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27578;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(var_args){
var args27579 = [];
var len__19702__auto___27582 = arguments.length;
var i__19703__auto___27583 = (0);
while(true){
if((i__19703__auto___27583 < len__19702__auto___27582)){
args27579.push((arguments[i__19703__auto___27583]));

var G__27584 = (i__19703__auto___27583 + (1));
i__19703__auto___27583 = G__27584;
continue;
} else {
}
break;
}

var G__27581 = args27579.length;
switch (G__27581) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27579.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27586,callback){
var map__27589 = p__27586;
var map__27589__$1 = ((((!((map__27589 == null)))?((((map__27589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27589):map__27589);
var file_msg = map__27589__$1;
var request_url = cljs.core.get.call(null,map__27589__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27589,map__27589__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27589,map__27589__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27591){
var map__27594 = p__27591;
var map__27594__$1 = ((((!((map__27594 == null)))?((((map__27594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27594):map__27594);
var file_msg = map__27594__$1;
var namespace = cljs.core.get.call(null,map__27594__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__27594__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18644__auto__ = meta_data;
if(cljs.core.truth_(or__18644__auto__)){
return or__18644__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18632__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18632__auto__){
var or__18644__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18644__auto__)){
return or__18644__auto__;
} else {
var or__18644__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18644__auto____$1)){
return or__18644__auto____$1;
} else {
var and__18632__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18632__auto____$1){
var or__18644__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18644__auto____$2){
return or__18644__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18632__auto____$1;
}
}
}
} else {
return and__18632__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27596,callback){
var map__27599 = p__27596;
var map__27599__$1 = ((((!((map__27599 == null)))?((((map__27599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27599):map__27599);
var file_msg = map__27599__$1;
var request_url = cljs.core.get.call(null,map__27599__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27599__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22145__auto___27687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___27687,out){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___27687,out){
return (function (state_27669){
var state_val_27670 = (state_27669[(1)]);
if((state_val_27670 === (1))){
var inst_27647 = cljs.core.nth.call(null,files,(0),null);
var inst_27648 = cljs.core.nthnext.call(null,files,(1));
var inst_27649 = files;
var state_27669__$1 = (function (){var statearr_27671 = state_27669;
(statearr_27671[(7)] = inst_27648);

(statearr_27671[(8)] = inst_27649);

(statearr_27671[(9)] = inst_27647);

return statearr_27671;
})();
var statearr_27672_27688 = state_27669__$1;
(statearr_27672_27688[(2)] = null);

(statearr_27672_27688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (2))){
var inst_27652 = (state_27669[(10)]);
var inst_27649 = (state_27669[(8)]);
var inst_27652__$1 = cljs.core.nth.call(null,inst_27649,(0),null);
var inst_27653 = cljs.core.nthnext.call(null,inst_27649,(1));
var inst_27654 = (inst_27652__$1 == null);
var inst_27655 = cljs.core.not.call(null,inst_27654);
var state_27669__$1 = (function (){var statearr_27673 = state_27669;
(statearr_27673[(10)] = inst_27652__$1);

(statearr_27673[(11)] = inst_27653);

return statearr_27673;
})();
if(inst_27655){
var statearr_27674_27689 = state_27669__$1;
(statearr_27674_27689[(1)] = (4));

} else {
var statearr_27675_27690 = state_27669__$1;
(statearr_27675_27690[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (3))){
var inst_27667 = (state_27669[(2)]);
var state_27669__$1 = state_27669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27669__$1,inst_27667);
} else {
if((state_val_27670 === (4))){
var inst_27652 = (state_27669[(10)]);
var inst_27657 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27652);
var state_27669__$1 = state_27669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27669__$1,(7),inst_27657);
} else {
if((state_val_27670 === (5))){
var inst_27663 = cljs.core.async.close_BANG_.call(null,out);
var state_27669__$1 = state_27669;
var statearr_27676_27691 = state_27669__$1;
(statearr_27676_27691[(2)] = inst_27663);

(statearr_27676_27691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (6))){
var inst_27665 = (state_27669[(2)]);
var state_27669__$1 = state_27669;
var statearr_27677_27692 = state_27669__$1;
(statearr_27677_27692[(2)] = inst_27665);

(statearr_27677_27692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (7))){
var inst_27653 = (state_27669[(11)]);
var inst_27659 = (state_27669[(2)]);
var inst_27660 = cljs.core.async.put_BANG_.call(null,out,inst_27659);
var inst_27649 = inst_27653;
var state_27669__$1 = (function (){var statearr_27678 = state_27669;
(statearr_27678[(8)] = inst_27649);

(statearr_27678[(12)] = inst_27660);

return statearr_27678;
})();
var statearr_27679_27693 = state_27669__$1;
(statearr_27679_27693[(2)] = null);

(statearr_27679_27693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22145__auto___27687,out))
;
return ((function (switch__22080__auto__,c__22145__auto___27687,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22081__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22081__auto____0 = (function (){
var statearr_27683 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27683[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22081__auto__);

(statearr_27683[(1)] = (1));

return statearr_27683;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22081__auto____1 = (function (state_27669){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_27669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e27684){if((e27684 instanceof Object)){
var ex__22084__auto__ = e27684;
var statearr_27685_27694 = state_27669;
(statearr_27685_27694[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27695 = state_27669;
state_27669 = G__27695;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22081__auto__ = function(state_27669){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22081__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22081__auto____1.call(this,state_27669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22081__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22081__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___27687,out))
})();
var state__22147__auto__ = (function (){var statearr_27686 = f__22146__auto__.call(null);
(statearr_27686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___27687);

return statearr_27686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___27687,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__27696,p__27697){
var map__27702 = p__27696;
var map__27702__$1 = ((((!((map__27702 == null)))?((((map__27702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27702):map__27702);
var opts = map__27702__$1;
var url_rewriter = cljs.core.get.call(null,map__27702__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__27703 = p__27697;
var map__27703__$1 = ((((!((map__27703 == null)))?((((map__27703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27703):map__27703);
var file_msg = map__27703__$1;
var file = cljs.core.get.call(null,map__27703__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27706){
var map__27710 = p__27706;
var map__27710__$1 = ((((!((map__27710 == null)))?((((map__27710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27710):map__27710);
var eval_body__$1 = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18632__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18632__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18632__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e27712){var e = e27712;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27717,p__27718){
var map__27946 = p__27717;
var map__27946__$1 = ((((!((map__27946 == null)))?((((map__27946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27946):map__27946);
var opts = map__27946__$1;
var before_jsload = cljs.core.get.call(null,map__27946__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27946__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__27946__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__27947 = p__27718;
var map__27947__$1 = ((((!((map__27947 == null)))?((((map__27947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27947):map__27947);
var msg = map__27947__$1;
var files = cljs.core.get.call(null,map__27947__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__22145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files){
return (function (state_28088){
var state_val_28089 = (state_28088[(1)]);
if((state_val_28089 === (7))){
var inst_27961 = (state_28088[(7)]);
var inst_27962 = (state_28088[(8)]);
var inst_27964 = (state_28088[(9)]);
var inst_27963 = (state_28088[(10)]);
var inst_27969 = cljs.core._nth.call(null,inst_27962,inst_27964);
var inst_27970 = figwheel.client.file_reloading.eval_body.call(null,inst_27969);
var inst_27971 = (inst_27964 + (1));
var tmp28090 = inst_27961;
var tmp28091 = inst_27962;
var tmp28092 = inst_27963;
var inst_27961__$1 = tmp28090;
var inst_27962__$1 = tmp28091;
var inst_27963__$1 = tmp28092;
var inst_27964__$1 = inst_27971;
var state_28088__$1 = (function (){var statearr_28093 = state_28088;
(statearr_28093[(7)] = inst_27961__$1);

(statearr_28093[(11)] = inst_27970);

(statearr_28093[(8)] = inst_27962__$1);

(statearr_28093[(9)] = inst_27964__$1);

(statearr_28093[(10)] = inst_27963__$1);

return statearr_28093;
})();
var statearr_28094_28173 = state_28088__$1;
(statearr_28094_28173[(2)] = null);

(statearr_28094_28173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (20))){
var inst_28006 = (state_28088[(12)]);
var inst_28007 = (state_28088[(13)]);
var inst_28011 = (state_28088[(14)]);
var inst_28010 = (state_28088[(15)]);
var inst_28013 = (state_28088[(16)]);
var inst_28016 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28018 = (function (){var all_files = inst_28006;
var files_SINGLEQUOTE_ = inst_28007;
var res_SINGLEQUOTE_ = inst_28010;
var res = inst_28011;
var files_not_loaded = inst_28013;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28006,inst_28007,inst_28011,inst_28010,inst_28013,inst_28016,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files){
return (function (p__28017){
var map__28095 = p__28017;
var map__28095__$1 = ((((!((map__28095 == null)))?((((map__28095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28095):map__28095);
var namespace = cljs.core.get.call(null,map__28095__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28095__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28006,inst_28007,inst_28011,inst_28010,inst_28013,inst_28016,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files))
})();
var inst_28019 = cljs.core.map.call(null,inst_28018,inst_28011);
var inst_28020 = cljs.core.pr_str.call(null,inst_28019);
var inst_28021 = figwheel.client.utils.log.call(null,inst_28020);
var inst_28022 = (function (){var all_files = inst_28006;
var files_SINGLEQUOTE_ = inst_28007;
var res_SINGLEQUOTE_ = inst_28010;
var res = inst_28011;
var files_not_loaded = inst_28013;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28006,inst_28007,inst_28011,inst_28010,inst_28013,inst_28016,inst_28018,inst_28019,inst_28020,inst_28021,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28006,inst_28007,inst_28011,inst_28010,inst_28013,inst_28016,inst_28018,inst_28019,inst_28020,inst_28021,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files))
})();
var inst_28023 = setTimeout(inst_28022,(10));
var state_28088__$1 = (function (){var statearr_28097 = state_28088;
(statearr_28097[(17)] = inst_28021);

(statearr_28097[(18)] = inst_28016);

return statearr_28097;
})();
var statearr_28098_28174 = state_28088__$1;
(statearr_28098_28174[(2)] = inst_28023);

(statearr_28098_28174[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (27))){
var state_28088__$1 = state_28088;
var statearr_28099_28175 = state_28088__$1;
(statearr_28099_28175[(2)] = false);

(statearr_28099_28175[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (1))){
var inst_27953 = (state_28088[(19)]);
var inst_27950 = before_jsload.call(null,files);
var inst_27951 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27952 = (function (){return ((function (inst_27953,inst_27950,inst_27951,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files){
return (function (p1__27713_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27713_SHARP_);
});
;})(inst_27953,inst_27950,inst_27951,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files))
})();
var inst_27953__$1 = cljs.core.filter.call(null,inst_27952,files);
var inst_27954 = cljs.core.not_empty.call(null,inst_27953__$1);
var state_28088__$1 = (function (){var statearr_28100 = state_28088;
(statearr_28100[(20)] = inst_27951);

(statearr_28100[(21)] = inst_27950);

(statearr_28100[(19)] = inst_27953__$1);

return statearr_28100;
})();
if(cljs.core.truth_(inst_27954)){
var statearr_28101_28176 = state_28088__$1;
(statearr_28101_28176[(1)] = (2));

} else {
var statearr_28102_28177 = state_28088__$1;
(statearr_28102_28177[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (24))){
var state_28088__$1 = state_28088;
var statearr_28103_28178 = state_28088__$1;
(statearr_28103_28178[(2)] = null);

(statearr_28103_28178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (39))){
var state_28088__$1 = state_28088;
var statearr_28104_28179 = state_28088__$1;
(statearr_28104_28179[(2)] = null);

(statearr_28104_28179[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (4))){
var inst_27998 = (state_28088[(2)]);
var inst_27999 = (function (){return ((function (inst_27998,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files){
return (function (p1__27714_SHARP_){
var and__18632__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27714_SHARP_);
if(cljs.core.truth_(and__18632__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27714_SHARP_));
} else {
return and__18632__auto__;
}
});
;})(inst_27998,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files))
})();
var inst_28000 = cljs.core.filter.call(null,inst_27999,files);
var state_28088__$1 = (function (){var statearr_28105 = state_28088;
(statearr_28105[(22)] = inst_27998);

(statearr_28105[(23)] = inst_28000);

return statearr_28105;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_28106_28180 = state_28088__$1;
(statearr_28106_28180[(1)] = (16));

} else {
var statearr_28107_28181 = state_28088__$1;
(statearr_28107_28181[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (15))){
var inst_27988 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28108_28182 = state_28088__$1;
(statearr_28108_28182[(2)] = inst_27988);

(statearr_28108_28182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (21))){
var state_28088__$1 = state_28088;
var statearr_28109_28183 = state_28088__$1;
(statearr_28109_28183[(2)] = null);

(statearr_28109_28183[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (31))){
var inst_28045 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28110_28184 = state_28088__$1;
(statearr_28110_28184[(2)] = inst_28045);

(statearr_28110_28184[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (32))){
var inst_28033 = (state_28088[(24)]);
var inst_28050 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28033);
var state_28088__$1 = state_28088;
var statearr_28111_28185 = state_28088__$1;
(statearr_28111_28185[(2)] = inst_28050);

(statearr_28111_28185[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (40))){
var inst_28056 = (state_28088[(25)]);
var inst_28074 = (state_28088[(2)]);
var inst_28075 = cljs.core.not_empty.call(null,inst_28056);
var state_28088__$1 = (function (){var statearr_28112 = state_28088;
(statearr_28112[(26)] = inst_28074);

return statearr_28112;
})();
if(cljs.core.truth_(inst_28075)){
var statearr_28113_28186 = state_28088__$1;
(statearr_28113_28186[(1)] = (41));

} else {
var statearr_28114_28187 = state_28088__$1;
(statearr_28114_28187[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (33))){
var inst_28033 = (state_28088[(24)]);
var state_28088__$1 = state_28088;
var statearr_28115_28188 = state_28088__$1;
(statearr_28115_28188[(2)] = inst_28033);

(statearr_28115_28188[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (13))){
var inst_27974 = (state_28088[(27)]);
var inst_27978 = cljs.core.chunk_first.call(null,inst_27974);
var inst_27979 = cljs.core.chunk_rest.call(null,inst_27974);
var inst_27980 = cljs.core.count.call(null,inst_27978);
var inst_27961 = inst_27979;
var inst_27962 = inst_27978;
var inst_27963 = inst_27980;
var inst_27964 = (0);
var state_28088__$1 = (function (){var statearr_28116 = state_28088;
(statearr_28116[(7)] = inst_27961);

(statearr_28116[(8)] = inst_27962);

(statearr_28116[(9)] = inst_27964);

(statearr_28116[(10)] = inst_27963);

return statearr_28116;
})();
var statearr_28117_28189 = state_28088__$1;
(statearr_28117_28189[(2)] = null);

(statearr_28117_28189[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (22))){
var inst_28013 = (state_28088[(16)]);
var inst_28026 = (state_28088[(2)]);
var inst_28027 = cljs.core.not_empty.call(null,inst_28013);
var state_28088__$1 = (function (){var statearr_28118 = state_28088;
(statearr_28118[(28)] = inst_28026);

return statearr_28118;
})();
if(cljs.core.truth_(inst_28027)){
var statearr_28119_28190 = state_28088__$1;
(statearr_28119_28190[(1)] = (23));

} else {
var statearr_28120_28191 = state_28088__$1;
(statearr_28120_28191[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (36))){
var state_28088__$1 = state_28088;
var statearr_28121_28192 = state_28088__$1;
(statearr_28121_28192[(2)] = null);

(statearr_28121_28192[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (41))){
var inst_28056 = (state_28088[(25)]);
var inst_28077 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28056);
var inst_28078 = cljs.core.pr_str.call(null,inst_28077);
var inst_28079 = [cljs.core.str("not required: "),cljs.core.str(inst_28078)].join('');
var inst_28080 = figwheel.client.utils.log.call(null,inst_28079);
var state_28088__$1 = state_28088;
var statearr_28122_28193 = state_28088__$1;
(statearr_28122_28193[(2)] = inst_28080);

(statearr_28122_28193[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (43))){
var inst_28083 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28123_28194 = state_28088__$1;
(statearr_28123_28194[(2)] = inst_28083);

(statearr_28123_28194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (29))){
var state_28088__$1 = state_28088;
var statearr_28124_28195 = state_28088__$1;
(statearr_28124_28195[(2)] = true);

(statearr_28124_28195[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (6))){
var inst_27995 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28125_28196 = state_28088__$1;
(statearr_28125_28196[(2)] = inst_27995);

(statearr_28125_28196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (28))){
var inst_28048 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
if(cljs.core.truth_(inst_28048)){
var statearr_28126_28197 = state_28088__$1;
(statearr_28126_28197[(1)] = (32));

} else {
var statearr_28127_28198 = state_28088__$1;
(statearr_28127_28198[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (25))){
var inst_28086 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28088__$1,inst_28086);
} else {
if((state_val_28089 === (34))){
var inst_28054 = (state_28088[(29)]);
var inst_28053 = (state_28088[(2)]);
var inst_28054__$1 = cljs.core.get.call(null,inst_28053,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28055 = cljs.core.get.call(null,inst_28053,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_28056 = cljs.core.get.call(null,inst_28053,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28057 = cljs.core.not_empty.call(null,inst_28054__$1);
var state_28088__$1 = (function (){var statearr_28128 = state_28088;
(statearr_28128[(29)] = inst_28054__$1);

(statearr_28128[(30)] = inst_28055);

(statearr_28128[(25)] = inst_28056);

return statearr_28128;
})();
if(cljs.core.truth_(inst_28057)){
var statearr_28129_28199 = state_28088__$1;
(statearr_28129_28199[(1)] = (35));

} else {
var statearr_28130_28200 = state_28088__$1;
(statearr_28130_28200[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (17))){
var inst_28000 = (state_28088[(23)]);
var state_28088__$1 = state_28088;
var statearr_28131_28201 = state_28088__$1;
(statearr_28131_28201[(2)] = inst_28000);

(statearr_28131_28201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (3))){
var state_28088__$1 = state_28088;
var statearr_28132_28202 = state_28088__$1;
(statearr_28132_28202[(2)] = null);

(statearr_28132_28202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (12))){
var inst_27991 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28133_28203 = state_28088__$1;
(statearr_28133_28203[(2)] = inst_27991);

(statearr_28133_28203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (2))){
var inst_27953 = (state_28088[(19)]);
var inst_27960 = cljs.core.seq.call(null,inst_27953);
var inst_27961 = inst_27960;
var inst_27962 = null;
var inst_27963 = (0);
var inst_27964 = (0);
var state_28088__$1 = (function (){var statearr_28134 = state_28088;
(statearr_28134[(7)] = inst_27961);

(statearr_28134[(8)] = inst_27962);

(statearr_28134[(9)] = inst_27964);

(statearr_28134[(10)] = inst_27963);

return statearr_28134;
})();
var statearr_28135_28204 = state_28088__$1;
(statearr_28135_28204[(2)] = null);

(statearr_28135_28204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (23))){
var inst_28006 = (state_28088[(12)]);
var inst_28007 = (state_28088[(13)]);
var inst_28011 = (state_28088[(14)]);
var inst_28033 = (state_28088[(24)]);
var inst_28010 = (state_28088[(15)]);
var inst_28013 = (state_28088[(16)]);
var inst_28029 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28032 = (function (){var all_files = inst_28006;
var files_SINGLEQUOTE_ = inst_28007;
var res_SINGLEQUOTE_ = inst_28010;
var res = inst_28011;
var files_not_loaded = inst_28013;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28006,inst_28007,inst_28011,inst_28033,inst_28010,inst_28013,inst_28029,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files){
return (function (p__28031){
var map__28136 = p__28031;
var map__28136__$1 = ((((!((map__28136 == null)))?((((map__28136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28136):map__28136);
var meta_data = cljs.core.get.call(null,map__28136__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28006,inst_28007,inst_28011,inst_28033,inst_28010,inst_28013,inst_28029,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files))
})();
var inst_28033__$1 = cljs.core.group_by.call(null,inst_28032,inst_28013);
var inst_28035 = (inst_28033__$1 == null);
var inst_28036 = cljs.core.not.call(null,inst_28035);
var state_28088__$1 = (function (){var statearr_28138 = state_28088;
(statearr_28138[(24)] = inst_28033__$1);

(statearr_28138[(31)] = inst_28029);

return statearr_28138;
})();
if(inst_28036){
var statearr_28139_28205 = state_28088__$1;
(statearr_28139_28205[(1)] = (26));

} else {
var statearr_28140_28206 = state_28088__$1;
(statearr_28140_28206[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (35))){
var inst_28054 = (state_28088[(29)]);
var inst_28059 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28054);
var inst_28060 = cljs.core.pr_str.call(null,inst_28059);
var inst_28061 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28060)].join('');
var inst_28062 = figwheel.client.utils.log.call(null,inst_28061);
var state_28088__$1 = state_28088;
var statearr_28141_28207 = state_28088__$1;
(statearr_28141_28207[(2)] = inst_28062);

(statearr_28141_28207[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (19))){
var inst_28006 = (state_28088[(12)]);
var inst_28007 = (state_28088[(13)]);
var inst_28011 = (state_28088[(14)]);
var inst_28010 = (state_28088[(15)]);
var inst_28010__$1 = (state_28088[(2)]);
var inst_28011__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28010__$1);
var inst_28012 = (function (){var all_files = inst_28006;
var files_SINGLEQUOTE_ = inst_28007;
var res_SINGLEQUOTE_ = inst_28010__$1;
var res = inst_28011__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_28006,inst_28007,inst_28011,inst_28010,inst_28010__$1,inst_28011__$1,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files){
return (function (p1__27716_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27716_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_28006,inst_28007,inst_28011,inst_28010,inst_28010__$1,inst_28011__$1,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files))
})();
var inst_28013 = cljs.core.filter.call(null,inst_28012,inst_28010__$1);
var inst_28014 = cljs.core.not_empty.call(null,inst_28011__$1);
var state_28088__$1 = (function (){var statearr_28142 = state_28088;
(statearr_28142[(14)] = inst_28011__$1);

(statearr_28142[(15)] = inst_28010__$1);

(statearr_28142[(16)] = inst_28013);

return statearr_28142;
})();
if(cljs.core.truth_(inst_28014)){
var statearr_28143_28208 = state_28088__$1;
(statearr_28143_28208[(1)] = (20));

} else {
var statearr_28144_28209 = state_28088__$1;
(statearr_28144_28209[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (11))){
var state_28088__$1 = state_28088;
var statearr_28145_28210 = state_28088__$1;
(statearr_28145_28210[(2)] = null);

(statearr_28145_28210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (9))){
var inst_27993 = (state_28088[(2)]);
var state_28088__$1 = state_28088;
var statearr_28146_28211 = state_28088__$1;
(statearr_28146_28211[(2)] = inst_27993);

(statearr_28146_28211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (5))){
var inst_27964 = (state_28088[(9)]);
var inst_27963 = (state_28088[(10)]);
var inst_27966 = (inst_27964 < inst_27963);
var inst_27967 = inst_27966;
var state_28088__$1 = state_28088;
if(cljs.core.truth_(inst_27967)){
var statearr_28147_28212 = state_28088__$1;
(statearr_28147_28212[(1)] = (7));

} else {
var statearr_28148_28213 = state_28088__$1;
(statearr_28148_28213[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (14))){
var inst_27974 = (state_28088[(27)]);
var inst_27983 = cljs.core.first.call(null,inst_27974);
var inst_27984 = figwheel.client.file_reloading.eval_body.call(null,inst_27983);
var inst_27985 = cljs.core.next.call(null,inst_27974);
var inst_27961 = inst_27985;
var inst_27962 = null;
var inst_27963 = (0);
var inst_27964 = (0);
var state_28088__$1 = (function (){var statearr_28149 = state_28088;
(statearr_28149[(32)] = inst_27984);

(statearr_28149[(7)] = inst_27961);

(statearr_28149[(8)] = inst_27962);

(statearr_28149[(9)] = inst_27964);

(statearr_28149[(10)] = inst_27963);

return statearr_28149;
})();
var statearr_28150_28214 = state_28088__$1;
(statearr_28150_28214[(2)] = null);

(statearr_28150_28214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (26))){
var inst_28033 = (state_28088[(24)]);
var inst_28038 = inst_28033.cljs$lang$protocol_mask$partition0$;
var inst_28039 = (inst_28038 & (64));
var inst_28040 = inst_28033.cljs$core$ISeq$;
var inst_28041 = (inst_28039) || (inst_28040);
var state_28088__$1 = state_28088;
if(cljs.core.truth_(inst_28041)){
var statearr_28151_28215 = state_28088__$1;
(statearr_28151_28215[(1)] = (29));

} else {
var statearr_28152_28216 = state_28088__$1;
(statearr_28152_28216[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (16))){
var inst_28000 = (state_28088[(23)]);
var inst_28002 = (function (){var all_files = inst_28000;
return ((function (all_files,inst_28000,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files){
return (function (p1__27715_SHARP_){
return cljs.core.update_in.call(null,p1__27715_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_28000,state_val_28089,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files))
})();
var inst_28003 = cljs.core.map.call(null,inst_28002,inst_28000);
var state_28088__$1 = state_28088;
var statearr_28153_28217 = state_28088__$1;
(statearr_28153_28217[(2)] = inst_28003);

(statearr_28153_28217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (38))){
var inst_28055 = (state_28088[(30)]);
var inst_28068 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28055);
var inst_28069 = cljs.core.pr_str.call(null,inst_28068);
var inst_28070 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_28069)].join('');
var inst_28071 = figwheel.client.utils.log.call(null,inst_28070);
var state_28088__$1 = state_28088;
var statearr_28154_28218 = state_28088__$1;
(statearr_28154_28218[(2)] = inst_28071);

(statearr_28154_28218[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (30))){
var state_28088__$1 = state_28088;
var statearr_28155_28219 = state_28088__$1;
(statearr_28155_28219[(2)] = false);

(statearr_28155_28219[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (10))){
var inst_27974 = (state_28088[(27)]);
var inst_27976 = cljs.core.chunked_seq_QMARK_.call(null,inst_27974);
var state_28088__$1 = state_28088;
if(inst_27976){
var statearr_28156_28220 = state_28088__$1;
(statearr_28156_28220[(1)] = (13));

} else {
var statearr_28157_28221 = state_28088__$1;
(statearr_28157_28221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (18))){
var inst_28006 = (state_28088[(12)]);
var inst_28007 = (state_28088[(13)]);
var inst_28006__$1 = (state_28088[(2)]);
var inst_28007__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_28006__$1);
var inst_28008 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28007__$1);
var state_28088__$1 = (function (){var statearr_28158 = state_28088;
(statearr_28158[(12)] = inst_28006__$1);

(statearr_28158[(13)] = inst_28007__$1);

return statearr_28158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28088__$1,(19),inst_28008);
} else {
if((state_val_28089 === (42))){
var state_28088__$1 = state_28088;
var statearr_28159_28222 = state_28088__$1;
(statearr_28159_28222[(2)] = null);

(statearr_28159_28222[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (37))){
var inst_28055 = (state_28088[(30)]);
var inst_28065 = (state_28088[(2)]);
var inst_28066 = cljs.core.not_empty.call(null,inst_28055);
var state_28088__$1 = (function (){var statearr_28160 = state_28088;
(statearr_28160[(33)] = inst_28065);

return statearr_28160;
})();
if(cljs.core.truth_(inst_28066)){
var statearr_28161_28223 = state_28088__$1;
(statearr_28161_28223[(1)] = (38));

} else {
var statearr_28162_28224 = state_28088__$1;
(statearr_28162_28224[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28089 === (8))){
var inst_27974 = (state_28088[(27)]);
var inst_27961 = (state_28088[(7)]);
var inst_27974__$1 = cljs.core.seq.call(null,inst_27961);
var state_28088__$1 = (function (){var statearr_28163 = state_28088;
(statearr_28163[(27)] = inst_27974__$1);

return statearr_28163;
})();
if(inst_27974__$1){
var statearr_28164_28225 = state_28088__$1;
(statearr_28164_28225[(1)] = (10));

} else {
var statearr_28165_28226 = state_28088__$1;
(statearr_28165_28226[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files))
;
return ((function (switch__22080__auto__,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22081__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22081__auto____0 = (function (){
var statearr_28169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28169[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22081__auto__);

(statearr_28169[(1)] = (1));

return statearr_28169;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22081__auto____1 = (function (state_28088){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_28088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e28170){if((e28170 instanceof Object)){
var ex__22084__auto__ = e28170;
var statearr_28171_28227 = state_28088;
(statearr_28171_28227[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28228 = state_28088;
state_28088 = G__28228;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22081__auto__ = function(state_28088){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22081__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22081__auto____1.call(this,state_28088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22081__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22081__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files))
})();
var state__22147__auto__ = (function (){var statearr_28172 = f__22146__auto__.call(null);
(statearr_28172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto__);

return statearr_28172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto__,map__27946,map__27946__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27947,map__27947__$1,msg,files))
);

return c__22145__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28231,link){
var map__28234 = p__28231;
var map__28234__$1 = ((((!((map__28234 == null)))?((((map__28234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28234):map__28234);
var file = cljs.core.get.call(null,map__28234__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28234,map__28234__$1,file){
return (function (p1__28229_SHARP_,p2__28230_SHARP_){
if(cljs.core._EQ_.call(null,p1__28229_SHARP_,p2__28230_SHARP_)){
return p1__28229_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28234,map__28234__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28240){
var map__28241 = p__28240;
var map__28241__$1 = ((((!((map__28241 == null)))?((((map__28241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28241):map__28241);
var match_length = cljs.core.get.call(null,map__28241__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28241__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28236_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28236_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28243 = [];
var len__19702__auto___28246 = arguments.length;
var i__19703__auto___28247 = (0);
while(true){
if((i__19703__auto___28247 < len__19702__auto___28246)){
args28243.push((arguments[i__19703__auto___28247]));

var G__28248 = (i__19703__auto___28247 + (1));
i__19703__auto___28247 = G__28248;
continue;
} else {
}
break;
}

var G__28245 = args28243.length;
switch (G__28245) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28243.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28250){
var map__28253 = p__28250;
var map__28253__$1 = ((((!((map__28253 == null)))?((((map__28253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28253):map__28253);
var f_data = map__28253__$1;
var file = cljs.core.get.call(null,map__28253__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__28253__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18644__auto__ = request_url;
if(cljs.core.truth_(or__18644__auto__)){
return or__18644__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28255,files_msg){
var map__28278 = p__28255;
var map__28278__$1 = ((((!((map__28278 == null)))?((((map__28278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28278):map__28278);
var opts = map__28278__$1;
var on_cssload = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28280_28300 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28281_28301 = null;
var count__28282_28302 = (0);
var i__28283_28303 = (0);
while(true){
if((i__28283_28303 < count__28282_28302)){
var f_28304 = cljs.core._nth.call(null,chunk__28281_28301,i__28283_28303);
figwheel.client.file_reloading.reload_css_file.call(null,f_28304);

var G__28305 = seq__28280_28300;
var G__28306 = chunk__28281_28301;
var G__28307 = count__28282_28302;
var G__28308 = (i__28283_28303 + (1));
seq__28280_28300 = G__28305;
chunk__28281_28301 = G__28306;
count__28282_28302 = G__28307;
i__28283_28303 = G__28308;
continue;
} else {
var temp__4425__auto___28309 = cljs.core.seq.call(null,seq__28280_28300);
if(temp__4425__auto___28309){
var seq__28280_28310__$1 = temp__4425__auto___28309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28280_28310__$1)){
var c__19447__auto___28311 = cljs.core.chunk_first.call(null,seq__28280_28310__$1);
var G__28312 = cljs.core.chunk_rest.call(null,seq__28280_28310__$1);
var G__28313 = c__19447__auto___28311;
var G__28314 = cljs.core.count.call(null,c__19447__auto___28311);
var G__28315 = (0);
seq__28280_28300 = G__28312;
chunk__28281_28301 = G__28313;
count__28282_28302 = G__28314;
i__28283_28303 = G__28315;
continue;
} else {
var f_28316 = cljs.core.first.call(null,seq__28280_28310__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28316);

var G__28317 = cljs.core.next.call(null,seq__28280_28310__$1);
var G__28318 = null;
var G__28319 = (0);
var G__28320 = (0);
seq__28280_28300 = G__28317;
chunk__28281_28301 = G__28318;
count__28282_28302 = G__28319;
i__28283_28303 = G__28320;
continue;
}
} else {
}
}
break;
}

var c__22145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto__,map__28278,map__28278__$1,opts,on_cssload){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto__,map__28278,map__28278__$1,opts,on_cssload){
return (function (state_28290){
var state_val_28291 = (state_28290[(1)]);
if((state_val_28291 === (1))){
var inst_28284 = cljs.core.async.timeout.call(null,(100));
var state_28290__$1 = state_28290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28290__$1,(2),inst_28284);
} else {
if((state_val_28291 === (2))){
var inst_28286 = (state_28290[(2)]);
var inst_28287 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_28288 = on_cssload.call(null,inst_28287);
var state_28290__$1 = (function (){var statearr_28292 = state_28290;
(statearr_28292[(7)] = inst_28286);

return statearr_28292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28290__$1,inst_28288);
} else {
return null;
}
}
});})(c__22145__auto__,map__28278,map__28278__$1,opts,on_cssload))
;
return ((function (switch__22080__auto__,c__22145__auto__,map__28278,map__28278__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22081__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22081__auto____0 = (function (){
var statearr_28296 = [null,null,null,null,null,null,null,null];
(statearr_28296[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__22081__auto__);

(statearr_28296[(1)] = (1));

return statearr_28296;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22081__auto____1 = (function (state_28290){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_28290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e28297){if((e28297 instanceof Object)){
var ex__22084__auto__ = e28297;
var statearr_28298_28321 = state_28290;
(statearr_28298_28321[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28322 = state_28290;
state_28290 = G__28322;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__22081__auto__ = function(state_28290){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22081__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22081__auto____1.call(this,state_28290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22081__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22081__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto__,map__28278,map__28278__$1,opts,on_cssload))
})();
var state__22147__auto__ = (function (){var statearr_28299 = f__22146__auto__.call(null);
(statearr_28299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto__);

return statearr_28299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto__,map__28278,map__28278__$1,opts,on_cssload))
);

return c__22145__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1441303752034