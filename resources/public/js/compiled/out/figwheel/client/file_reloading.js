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
return cljs.core.reduce.call(null,(function (p1__25489_SHARP_,p2__25490_SHARP_){
var and__16505__auto__ = p1__25489_SHARP_;
if(cljs.core.truth_(and__16505__auto__)){
return p2__25490_SHARP_;
} else {
return and__16505__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16517__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16517__auto__){
return or__16517__auto__;
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
if(cljs.core.truth_((function (){var or__16517__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16517__auto__){
return or__16517__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16517__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16517__auto__)){
return or__16517__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17430__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17431__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17432__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17433__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17434__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17434__auto__,method_table__17430__auto__,prefer_table__17431__auto__,method_cache__17432__auto__,cached_hierarchy__17433__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__25491){
var map__25492 = p__25491;
var map__25492__$1 = ((((!((map__25492 == null)))?((((map__25492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25492):map__25492);
var file = cljs.core.get.call(null,map__25492__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__25494){
var map__25495 = p__25494;
var map__25495__$1 = ((((!((map__25495 == null)))?((((map__25495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25495):map__25495);
var namespace = cljs.core.get.call(null,map__25495__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17430__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17431__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17432__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17433__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17434__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17434__auto__,method_table__17430__auto__,prefer_table__17431__auto__,method_cache__17432__auto__,cached_hierarchy__17433__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e25497){if((e25497 instanceof Error)){
var e = e25497;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25497;

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
var args25498 = [];
var len__17575__auto___25501 = arguments.length;
var i__17576__auto___25502 = (0);
while(true){
if((i__17576__auto___25502 < len__17575__auto___25501)){
args25498.push((arguments[i__17576__auto___25502]));

var G__25503 = (i__17576__auto___25502 + (1));
i__17576__auto___25502 = G__25503;
continue;
} else {
}
break;
}

var G__25500 = args25498.length;
switch (G__25500) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25498.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25505,callback){
var map__25508 = p__25505;
var map__25508__$1 = ((((!((map__25508 == null)))?((((map__25508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25508):map__25508);
var file_msg = map__25508__$1;
var request_url = cljs.core.get.call(null,map__25508__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25508,map__25508__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25508,map__25508__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25510){
var map__25513 = p__25510;
var map__25513__$1 = ((((!((map__25513 == null)))?((((map__25513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25513):map__25513);
var file_msg = map__25513__$1;
var namespace = cljs.core.get.call(null,map__25513__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__25513__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16517__auto__ = meta_data;
if(cljs.core.truth_(or__16517__auto__)){
return or__16517__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16505__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16505__auto__){
var or__16517__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16517__auto__)){
return or__16517__auto__;
} else {
var or__16517__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16517__auto____$1)){
return or__16517__auto____$1;
} else {
var and__16505__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16505__auto____$1){
var or__16517__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16517__auto____$2){
return or__16517__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16505__auto____$1;
}
}
}
} else {
return and__16505__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25515,callback){
var map__25518 = p__25515;
var map__25518__$1 = ((((!((map__25518 == null)))?((((map__25518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25518):map__25518);
var file_msg = map__25518__$1;
var request_url = cljs.core.get.call(null,map__25518__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25518__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20007__auto___25606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___25606,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___25606,out){
return (function (state_25588){
var state_val_25589 = (state_25588[(1)]);
if((state_val_25589 === (1))){
var inst_25566 = cljs.core.nth.call(null,files,(0),null);
var inst_25567 = cljs.core.nthnext.call(null,files,(1));
var inst_25568 = files;
var state_25588__$1 = (function (){var statearr_25590 = state_25588;
(statearr_25590[(7)] = inst_25567);

(statearr_25590[(8)] = inst_25568);

(statearr_25590[(9)] = inst_25566);

return statearr_25590;
})();
var statearr_25591_25607 = state_25588__$1;
(statearr_25591_25607[(2)] = null);

(statearr_25591_25607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (2))){
var inst_25571 = (state_25588[(10)]);
var inst_25568 = (state_25588[(8)]);
var inst_25571__$1 = cljs.core.nth.call(null,inst_25568,(0),null);
var inst_25572 = cljs.core.nthnext.call(null,inst_25568,(1));
var inst_25573 = (inst_25571__$1 == null);
var inst_25574 = cljs.core.not.call(null,inst_25573);
var state_25588__$1 = (function (){var statearr_25592 = state_25588;
(statearr_25592[(10)] = inst_25571__$1);

(statearr_25592[(11)] = inst_25572);

return statearr_25592;
})();
if(inst_25574){
var statearr_25593_25608 = state_25588__$1;
(statearr_25593_25608[(1)] = (4));

} else {
var statearr_25594_25609 = state_25588__$1;
(statearr_25594_25609[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (3))){
var inst_25586 = (state_25588[(2)]);
var state_25588__$1 = state_25588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25588__$1,inst_25586);
} else {
if((state_val_25589 === (4))){
var inst_25571 = (state_25588[(10)]);
var inst_25576 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25571);
var state_25588__$1 = state_25588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25588__$1,(7),inst_25576);
} else {
if((state_val_25589 === (5))){
var inst_25582 = cljs.core.async.close_BANG_.call(null,out);
var state_25588__$1 = state_25588;
var statearr_25595_25610 = state_25588__$1;
(statearr_25595_25610[(2)] = inst_25582);

(statearr_25595_25610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (6))){
var inst_25584 = (state_25588[(2)]);
var state_25588__$1 = state_25588;
var statearr_25596_25611 = state_25588__$1;
(statearr_25596_25611[(2)] = inst_25584);

(statearr_25596_25611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (7))){
var inst_25572 = (state_25588[(11)]);
var inst_25578 = (state_25588[(2)]);
var inst_25579 = cljs.core.async.put_BANG_.call(null,out,inst_25578);
var inst_25568 = inst_25572;
var state_25588__$1 = (function (){var statearr_25597 = state_25588;
(statearr_25597[(12)] = inst_25579);

(statearr_25597[(8)] = inst_25568);

return statearr_25597;
})();
var statearr_25598_25612 = state_25588__$1;
(statearr_25598_25612[(2)] = null);

(statearr_25598_25612[(1)] = (2));


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
});})(c__20007__auto___25606,out))
;
return ((function (switch__19942__auto__,c__20007__auto___25606,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19943__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19943__auto____0 = (function (){
var statearr_25602 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25602[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19943__auto__);

(statearr_25602[(1)] = (1));

return statearr_25602;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19943__auto____1 = (function (state_25588){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_25588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e25603){if((e25603 instanceof Object)){
var ex__19946__auto__ = e25603;
var statearr_25604_25613 = state_25588;
(statearr_25604_25613[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25614 = state_25588;
state_25588 = G__25614;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19943__auto__ = function(state_25588){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19943__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19943__auto____1.call(this,state_25588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19943__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19943__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___25606,out))
})();
var state__20009__auto__ = (function (){var statearr_25605 = f__20008__auto__.call(null);
(statearr_25605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___25606);

return statearr_25605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___25606,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__25615,p__25616){
var map__25621 = p__25615;
var map__25621__$1 = ((((!((map__25621 == null)))?((((map__25621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25621):map__25621);
var opts = map__25621__$1;
var url_rewriter = cljs.core.get.call(null,map__25621__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25622 = p__25616;
var map__25622__$1 = ((((!((map__25622 == null)))?((((map__25622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25622):map__25622);
var file_msg = map__25622__$1;
var file = cljs.core.get.call(null,map__25622__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25625,opts){
var map__25629 = p__25625;
var map__25629__$1 = ((((!((map__25629 == null)))?((((map__25629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25629):map__25629);
var eval_body__$1 = cljs.core.get.call(null,map__25629__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25629__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16505__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16505__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16505__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25631){var e = e25631;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25636,p__25637){
var map__25865 = p__25636;
var map__25865__$1 = ((((!((map__25865 == null)))?((((map__25865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25865):map__25865);
var opts = map__25865__$1;
var before_jsload = cljs.core.get.call(null,map__25865__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25865__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__25865__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__25866 = p__25637;
var map__25866__$1 = ((((!((map__25866 == null)))?((((map__25866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25866):map__25866);
var msg = map__25866__$1;
var files = cljs.core.get.call(null,map__25866__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files){
return (function (state_26007){
var state_val_26008 = (state_26007[(1)]);
if((state_val_26008 === (7))){
var inst_25880 = (state_26007[(7)]);
var inst_25881 = (state_26007[(8)]);
var inst_25883 = (state_26007[(9)]);
var inst_25882 = (state_26007[(10)]);
var inst_25888 = cljs.core._nth.call(null,inst_25881,inst_25883);
var inst_25889 = figwheel.client.file_reloading.eval_body.call(null,inst_25888,opts);
var inst_25890 = (inst_25883 + (1));
var tmp26009 = inst_25880;
var tmp26010 = inst_25881;
var tmp26011 = inst_25882;
var inst_25880__$1 = tmp26009;
var inst_25881__$1 = tmp26010;
var inst_25882__$1 = tmp26011;
var inst_25883__$1 = inst_25890;
var state_26007__$1 = (function (){var statearr_26012 = state_26007;
(statearr_26012[(7)] = inst_25880__$1);

(statearr_26012[(8)] = inst_25881__$1);

(statearr_26012[(11)] = inst_25889);

(statearr_26012[(9)] = inst_25883__$1);

(statearr_26012[(10)] = inst_25882__$1);

return statearr_26012;
})();
var statearr_26013_26092 = state_26007__$1;
(statearr_26013_26092[(2)] = null);

(statearr_26013_26092[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (20))){
var inst_25926 = (state_26007[(12)]);
var inst_25932 = (state_26007[(13)]);
var inst_25929 = (state_26007[(14)]);
var inst_25930 = (state_26007[(15)]);
var inst_25925 = (state_26007[(16)]);
var inst_25935 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25937 = (function (){var all_files = inst_25925;
var files_SINGLEQUOTE_ = inst_25926;
var res_SINGLEQUOTE_ = inst_25929;
var res = inst_25930;
var files_not_loaded = inst_25932;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25926,inst_25932,inst_25929,inst_25930,inst_25925,inst_25935,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files){
return (function (p__25936){
var map__26014 = p__25936;
var map__26014__$1 = ((((!((map__26014 == null)))?((((map__26014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26014):map__26014);
var namespace = cljs.core.get.call(null,map__26014__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26014__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25926,inst_25932,inst_25929,inst_25930,inst_25925,inst_25935,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files))
})();
var inst_25938 = cljs.core.map.call(null,inst_25937,inst_25930);
var inst_25939 = cljs.core.pr_str.call(null,inst_25938);
var inst_25940 = figwheel.client.utils.log.call(null,inst_25939);
var inst_25941 = (function (){var all_files = inst_25925;
var files_SINGLEQUOTE_ = inst_25926;
var res_SINGLEQUOTE_ = inst_25929;
var res = inst_25930;
var files_not_loaded = inst_25932;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25926,inst_25932,inst_25929,inst_25930,inst_25925,inst_25935,inst_25937,inst_25938,inst_25939,inst_25940,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25926,inst_25932,inst_25929,inst_25930,inst_25925,inst_25935,inst_25937,inst_25938,inst_25939,inst_25940,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files))
})();
var inst_25942 = setTimeout(inst_25941,(10));
var state_26007__$1 = (function (){var statearr_26016 = state_26007;
(statearr_26016[(17)] = inst_25935);

(statearr_26016[(18)] = inst_25940);

return statearr_26016;
})();
var statearr_26017_26093 = state_26007__$1;
(statearr_26017_26093[(2)] = inst_25942);

(statearr_26017_26093[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (27))){
var state_26007__$1 = state_26007;
var statearr_26018_26094 = state_26007__$1;
(statearr_26018_26094[(2)] = false);

(statearr_26018_26094[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (1))){
var inst_25872 = (state_26007[(19)]);
var inst_25869 = before_jsload.call(null,files);
var inst_25870 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25871 = (function (){return ((function (inst_25872,inst_25869,inst_25870,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files){
return (function (p1__25632_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25632_SHARP_);
});
;})(inst_25872,inst_25869,inst_25870,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files))
})();
var inst_25872__$1 = cljs.core.filter.call(null,inst_25871,files);
var inst_25873 = cljs.core.not_empty.call(null,inst_25872__$1);
var state_26007__$1 = (function (){var statearr_26019 = state_26007;
(statearr_26019[(19)] = inst_25872__$1);

(statearr_26019[(20)] = inst_25869);

(statearr_26019[(21)] = inst_25870);

return statearr_26019;
})();
if(cljs.core.truth_(inst_25873)){
var statearr_26020_26095 = state_26007__$1;
(statearr_26020_26095[(1)] = (2));

} else {
var statearr_26021_26096 = state_26007__$1;
(statearr_26021_26096[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (24))){
var state_26007__$1 = state_26007;
var statearr_26022_26097 = state_26007__$1;
(statearr_26022_26097[(2)] = null);

(statearr_26022_26097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (39))){
var state_26007__$1 = state_26007;
var statearr_26023_26098 = state_26007__$1;
(statearr_26023_26098[(2)] = null);

(statearr_26023_26098[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (4))){
var inst_25917 = (state_26007[(2)]);
var inst_25918 = (function (){return ((function (inst_25917,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files){
return (function (p1__25633_SHARP_){
var and__16505__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25633_SHARP_);
if(cljs.core.truth_(and__16505__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25633_SHARP_));
} else {
return and__16505__auto__;
}
});
;})(inst_25917,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files))
})();
var inst_25919 = cljs.core.filter.call(null,inst_25918,files);
var state_26007__$1 = (function (){var statearr_26024 = state_26007;
(statearr_26024[(22)] = inst_25917);

(statearr_26024[(23)] = inst_25919);

return statearr_26024;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26025_26099 = state_26007__$1;
(statearr_26025_26099[(1)] = (16));

} else {
var statearr_26026_26100 = state_26007__$1;
(statearr_26026_26100[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (15))){
var inst_25907 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26027_26101 = state_26007__$1;
(statearr_26027_26101[(2)] = inst_25907);

(statearr_26027_26101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (21))){
var state_26007__$1 = state_26007;
var statearr_26028_26102 = state_26007__$1;
(statearr_26028_26102[(2)] = null);

(statearr_26028_26102[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (31))){
var inst_25964 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26029_26103 = state_26007__$1;
(statearr_26029_26103[(2)] = inst_25964);

(statearr_26029_26103[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (32))){
var inst_25952 = (state_26007[(24)]);
var inst_25969 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25952);
var state_26007__$1 = state_26007;
var statearr_26030_26104 = state_26007__$1;
(statearr_26030_26104[(2)] = inst_25969);

(statearr_26030_26104[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (40))){
var inst_25975 = (state_26007[(25)]);
var inst_25993 = (state_26007[(2)]);
var inst_25994 = cljs.core.not_empty.call(null,inst_25975);
var state_26007__$1 = (function (){var statearr_26031 = state_26007;
(statearr_26031[(26)] = inst_25993);

return statearr_26031;
})();
if(cljs.core.truth_(inst_25994)){
var statearr_26032_26105 = state_26007__$1;
(statearr_26032_26105[(1)] = (41));

} else {
var statearr_26033_26106 = state_26007__$1;
(statearr_26033_26106[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (33))){
var inst_25952 = (state_26007[(24)]);
var state_26007__$1 = state_26007;
var statearr_26034_26107 = state_26007__$1;
(statearr_26034_26107[(2)] = inst_25952);

(statearr_26034_26107[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (13))){
var inst_25893 = (state_26007[(27)]);
var inst_25897 = cljs.core.chunk_first.call(null,inst_25893);
var inst_25898 = cljs.core.chunk_rest.call(null,inst_25893);
var inst_25899 = cljs.core.count.call(null,inst_25897);
var inst_25880 = inst_25898;
var inst_25881 = inst_25897;
var inst_25882 = inst_25899;
var inst_25883 = (0);
var state_26007__$1 = (function (){var statearr_26035 = state_26007;
(statearr_26035[(7)] = inst_25880);

(statearr_26035[(8)] = inst_25881);

(statearr_26035[(9)] = inst_25883);

(statearr_26035[(10)] = inst_25882);

return statearr_26035;
})();
var statearr_26036_26108 = state_26007__$1;
(statearr_26036_26108[(2)] = null);

(statearr_26036_26108[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (22))){
var inst_25932 = (state_26007[(13)]);
var inst_25945 = (state_26007[(2)]);
var inst_25946 = cljs.core.not_empty.call(null,inst_25932);
var state_26007__$1 = (function (){var statearr_26037 = state_26007;
(statearr_26037[(28)] = inst_25945);

return statearr_26037;
})();
if(cljs.core.truth_(inst_25946)){
var statearr_26038_26109 = state_26007__$1;
(statearr_26038_26109[(1)] = (23));

} else {
var statearr_26039_26110 = state_26007__$1;
(statearr_26039_26110[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (36))){
var state_26007__$1 = state_26007;
var statearr_26040_26111 = state_26007__$1;
(statearr_26040_26111[(2)] = null);

(statearr_26040_26111[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (41))){
var inst_25975 = (state_26007[(25)]);
var inst_25996 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25975);
var inst_25997 = cljs.core.pr_str.call(null,inst_25996);
var inst_25998 = [cljs.core.str("not required: "),cljs.core.str(inst_25997)].join('');
var inst_25999 = figwheel.client.utils.log.call(null,inst_25998);
var state_26007__$1 = state_26007;
var statearr_26041_26112 = state_26007__$1;
(statearr_26041_26112[(2)] = inst_25999);

(statearr_26041_26112[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (43))){
var inst_26002 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26042_26113 = state_26007__$1;
(statearr_26042_26113[(2)] = inst_26002);

(statearr_26042_26113[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (29))){
var state_26007__$1 = state_26007;
var statearr_26043_26114 = state_26007__$1;
(statearr_26043_26114[(2)] = true);

(statearr_26043_26114[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (6))){
var inst_25914 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26044_26115 = state_26007__$1;
(statearr_26044_26115[(2)] = inst_25914);

(statearr_26044_26115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (28))){
var inst_25967 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
if(cljs.core.truth_(inst_25967)){
var statearr_26045_26116 = state_26007__$1;
(statearr_26045_26116[(1)] = (32));

} else {
var statearr_26046_26117 = state_26007__$1;
(statearr_26046_26117[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (25))){
var inst_26005 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26007__$1,inst_26005);
} else {
if((state_val_26008 === (34))){
var inst_25973 = (state_26007[(29)]);
var inst_25972 = (state_26007[(2)]);
var inst_25973__$1 = cljs.core.get.call(null,inst_25972,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25974 = cljs.core.get.call(null,inst_25972,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_25975 = cljs.core.get.call(null,inst_25972,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25976 = cljs.core.not_empty.call(null,inst_25973__$1);
var state_26007__$1 = (function (){var statearr_26047 = state_26007;
(statearr_26047[(30)] = inst_25974);

(statearr_26047[(29)] = inst_25973__$1);

(statearr_26047[(25)] = inst_25975);

return statearr_26047;
})();
if(cljs.core.truth_(inst_25976)){
var statearr_26048_26118 = state_26007__$1;
(statearr_26048_26118[(1)] = (35));

} else {
var statearr_26049_26119 = state_26007__$1;
(statearr_26049_26119[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (17))){
var inst_25919 = (state_26007[(23)]);
var state_26007__$1 = state_26007;
var statearr_26050_26120 = state_26007__$1;
(statearr_26050_26120[(2)] = inst_25919);

(statearr_26050_26120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (3))){
var state_26007__$1 = state_26007;
var statearr_26051_26121 = state_26007__$1;
(statearr_26051_26121[(2)] = null);

(statearr_26051_26121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (12))){
var inst_25910 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26052_26122 = state_26007__$1;
(statearr_26052_26122[(2)] = inst_25910);

(statearr_26052_26122[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (2))){
var inst_25872 = (state_26007[(19)]);
var inst_25879 = cljs.core.seq.call(null,inst_25872);
var inst_25880 = inst_25879;
var inst_25881 = null;
var inst_25882 = (0);
var inst_25883 = (0);
var state_26007__$1 = (function (){var statearr_26053 = state_26007;
(statearr_26053[(7)] = inst_25880);

(statearr_26053[(8)] = inst_25881);

(statearr_26053[(9)] = inst_25883);

(statearr_26053[(10)] = inst_25882);

return statearr_26053;
})();
var statearr_26054_26123 = state_26007__$1;
(statearr_26054_26123[(2)] = null);

(statearr_26054_26123[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (23))){
var inst_25926 = (state_26007[(12)]);
var inst_25932 = (state_26007[(13)]);
var inst_25929 = (state_26007[(14)]);
var inst_25930 = (state_26007[(15)]);
var inst_25952 = (state_26007[(24)]);
var inst_25925 = (state_26007[(16)]);
var inst_25948 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25951 = (function (){var all_files = inst_25925;
var files_SINGLEQUOTE_ = inst_25926;
var res_SINGLEQUOTE_ = inst_25929;
var res = inst_25930;
var files_not_loaded = inst_25932;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25926,inst_25932,inst_25929,inst_25930,inst_25952,inst_25925,inst_25948,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files){
return (function (p__25950){
var map__26055 = p__25950;
var map__26055__$1 = ((((!((map__26055 == null)))?((((map__26055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26055):map__26055);
var meta_data = cljs.core.get.call(null,map__26055__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25926,inst_25932,inst_25929,inst_25930,inst_25952,inst_25925,inst_25948,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files))
})();
var inst_25952__$1 = cljs.core.group_by.call(null,inst_25951,inst_25932);
var inst_25954 = (inst_25952__$1 == null);
var inst_25955 = cljs.core.not.call(null,inst_25954);
var state_26007__$1 = (function (){var statearr_26057 = state_26007;
(statearr_26057[(31)] = inst_25948);

(statearr_26057[(24)] = inst_25952__$1);

return statearr_26057;
})();
if(inst_25955){
var statearr_26058_26124 = state_26007__$1;
(statearr_26058_26124[(1)] = (26));

} else {
var statearr_26059_26125 = state_26007__$1;
(statearr_26059_26125[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (35))){
var inst_25973 = (state_26007[(29)]);
var inst_25978 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25973);
var inst_25979 = cljs.core.pr_str.call(null,inst_25978);
var inst_25980 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25979)].join('');
var inst_25981 = figwheel.client.utils.log.call(null,inst_25980);
var state_26007__$1 = state_26007;
var statearr_26060_26126 = state_26007__$1;
(statearr_26060_26126[(2)] = inst_25981);

(statearr_26060_26126[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (19))){
var inst_25926 = (state_26007[(12)]);
var inst_25929 = (state_26007[(14)]);
var inst_25930 = (state_26007[(15)]);
var inst_25925 = (state_26007[(16)]);
var inst_25929__$1 = (state_26007[(2)]);
var inst_25930__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25929__$1);
var inst_25931 = (function (){var all_files = inst_25925;
var files_SINGLEQUOTE_ = inst_25926;
var res_SINGLEQUOTE_ = inst_25929__$1;
var res = inst_25930__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_25926,inst_25929,inst_25930,inst_25925,inst_25929__$1,inst_25930__$1,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files){
return (function (p1__25635_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25635_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_25926,inst_25929,inst_25930,inst_25925,inst_25929__$1,inst_25930__$1,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files))
})();
var inst_25932 = cljs.core.filter.call(null,inst_25931,inst_25929__$1);
var inst_25933 = cljs.core.not_empty.call(null,inst_25930__$1);
var state_26007__$1 = (function (){var statearr_26061 = state_26007;
(statearr_26061[(13)] = inst_25932);

(statearr_26061[(14)] = inst_25929__$1);

(statearr_26061[(15)] = inst_25930__$1);

return statearr_26061;
})();
if(cljs.core.truth_(inst_25933)){
var statearr_26062_26127 = state_26007__$1;
(statearr_26062_26127[(1)] = (20));

} else {
var statearr_26063_26128 = state_26007__$1;
(statearr_26063_26128[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (11))){
var state_26007__$1 = state_26007;
var statearr_26064_26129 = state_26007__$1;
(statearr_26064_26129[(2)] = null);

(statearr_26064_26129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (9))){
var inst_25912 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26065_26130 = state_26007__$1;
(statearr_26065_26130[(2)] = inst_25912);

(statearr_26065_26130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (5))){
var inst_25883 = (state_26007[(9)]);
var inst_25882 = (state_26007[(10)]);
var inst_25885 = (inst_25883 < inst_25882);
var inst_25886 = inst_25885;
var state_26007__$1 = state_26007;
if(cljs.core.truth_(inst_25886)){
var statearr_26066_26131 = state_26007__$1;
(statearr_26066_26131[(1)] = (7));

} else {
var statearr_26067_26132 = state_26007__$1;
(statearr_26067_26132[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (14))){
var inst_25893 = (state_26007[(27)]);
var inst_25902 = cljs.core.first.call(null,inst_25893);
var inst_25903 = figwheel.client.file_reloading.eval_body.call(null,inst_25902,opts);
var inst_25904 = cljs.core.next.call(null,inst_25893);
var inst_25880 = inst_25904;
var inst_25881 = null;
var inst_25882 = (0);
var inst_25883 = (0);
var state_26007__$1 = (function (){var statearr_26068 = state_26007;
(statearr_26068[(7)] = inst_25880);

(statearr_26068[(8)] = inst_25881);

(statearr_26068[(9)] = inst_25883);

(statearr_26068[(10)] = inst_25882);

(statearr_26068[(32)] = inst_25903);

return statearr_26068;
})();
var statearr_26069_26133 = state_26007__$1;
(statearr_26069_26133[(2)] = null);

(statearr_26069_26133[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (26))){
var inst_25952 = (state_26007[(24)]);
var inst_25957 = inst_25952.cljs$lang$protocol_mask$partition0$;
var inst_25958 = (inst_25957 & (64));
var inst_25959 = inst_25952.cljs$core$ISeq$;
var inst_25960 = (inst_25958) || (inst_25959);
var state_26007__$1 = state_26007;
if(cljs.core.truth_(inst_25960)){
var statearr_26070_26134 = state_26007__$1;
(statearr_26070_26134[(1)] = (29));

} else {
var statearr_26071_26135 = state_26007__$1;
(statearr_26071_26135[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (16))){
var inst_25919 = (state_26007[(23)]);
var inst_25921 = (function (){var all_files = inst_25919;
return ((function (all_files,inst_25919,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files){
return (function (p1__25634_SHARP_){
return cljs.core.update_in.call(null,p1__25634_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_25919,state_val_26008,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files))
})();
var inst_25922 = cljs.core.map.call(null,inst_25921,inst_25919);
var state_26007__$1 = state_26007;
var statearr_26072_26136 = state_26007__$1;
(statearr_26072_26136[(2)] = inst_25922);

(statearr_26072_26136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (38))){
var inst_25974 = (state_26007[(30)]);
var inst_25987 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25974);
var inst_25988 = cljs.core.pr_str.call(null,inst_25987);
var inst_25989 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_25988)].join('');
var inst_25990 = figwheel.client.utils.log.call(null,inst_25989);
var state_26007__$1 = state_26007;
var statearr_26073_26137 = state_26007__$1;
(statearr_26073_26137[(2)] = inst_25990);

(statearr_26073_26137[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (30))){
var state_26007__$1 = state_26007;
var statearr_26074_26138 = state_26007__$1;
(statearr_26074_26138[(2)] = false);

(statearr_26074_26138[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (10))){
var inst_25893 = (state_26007[(27)]);
var inst_25895 = cljs.core.chunked_seq_QMARK_.call(null,inst_25893);
var state_26007__$1 = state_26007;
if(inst_25895){
var statearr_26075_26139 = state_26007__$1;
(statearr_26075_26139[(1)] = (13));

} else {
var statearr_26076_26140 = state_26007__$1;
(statearr_26076_26140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (18))){
var inst_25926 = (state_26007[(12)]);
var inst_25925 = (state_26007[(16)]);
var inst_25925__$1 = (state_26007[(2)]);
var inst_25926__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_25925__$1);
var inst_25927 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25926__$1);
var state_26007__$1 = (function (){var statearr_26077 = state_26007;
(statearr_26077[(12)] = inst_25926__$1);

(statearr_26077[(16)] = inst_25925__$1);

return statearr_26077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26007__$1,(19),inst_25927);
} else {
if((state_val_26008 === (42))){
var state_26007__$1 = state_26007;
var statearr_26078_26141 = state_26007__$1;
(statearr_26078_26141[(2)] = null);

(statearr_26078_26141[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (37))){
var inst_25974 = (state_26007[(30)]);
var inst_25984 = (state_26007[(2)]);
var inst_25985 = cljs.core.not_empty.call(null,inst_25974);
var state_26007__$1 = (function (){var statearr_26079 = state_26007;
(statearr_26079[(33)] = inst_25984);

return statearr_26079;
})();
if(cljs.core.truth_(inst_25985)){
var statearr_26080_26142 = state_26007__$1;
(statearr_26080_26142[(1)] = (38));

} else {
var statearr_26081_26143 = state_26007__$1;
(statearr_26081_26143[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (8))){
var inst_25880 = (state_26007[(7)]);
var inst_25893 = (state_26007[(27)]);
var inst_25893__$1 = cljs.core.seq.call(null,inst_25880);
var state_26007__$1 = (function (){var statearr_26082 = state_26007;
(statearr_26082[(27)] = inst_25893__$1);

return statearr_26082;
})();
if(inst_25893__$1){
var statearr_26083_26144 = state_26007__$1;
(statearr_26083_26144[(1)] = (10));

} else {
var statearr_26084_26145 = state_26007__$1;
(statearr_26084_26145[(1)] = (11));

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
});})(c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files))
;
return ((function (switch__19942__auto__,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19943__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19943__auto____0 = (function (){
var statearr_26088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26088[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19943__auto__);

(statearr_26088[(1)] = (1));

return statearr_26088;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19943__auto____1 = (function (state_26007){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_26007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e26089){if((e26089 instanceof Object)){
var ex__19946__auto__ = e26089;
var statearr_26090_26146 = state_26007;
(statearr_26090_26146[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26147 = state_26007;
state_26007 = G__26147;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19943__auto__ = function(state_26007){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19943__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19943__auto____1.call(this,state_26007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19943__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19943__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files))
})();
var state__20009__auto__ = (function (){var statearr_26091 = f__20008__auto__.call(null);
(statearr_26091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_26091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__,map__25865,map__25865__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25866,map__25866__$1,msg,files))
);

return c__20007__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26150,link){
var map__26153 = p__26150;
var map__26153__$1 = ((((!((map__26153 == null)))?((((map__26153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26153):map__26153);
var file = cljs.core.get.call(null,map__26153__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26153,map__26153__$1,file){
return (function (p1__26148_SHARP_,p2__26149_SHARP_){
if(cljs.core._EQ_.call(null,p1__26148_SHARP_,p2__26149_SHARP_)){
return p1__26148_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26153,map__26153__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26159){
var map__26160 = p__26159;
var map__26160__$1 = ((((!((map__26160 == null)))?((((map__26160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26160):map__26160);
var match_length = cljs.core.get.call(null,map__26160__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26160__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26155_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26155_SHARP_);
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
var args26162 = [];
var len__17575__auto___26165 = arguments.length;
var i__17576__auto___26166 = (0);
while(true){
if((i__17576__auto___26166 < len__17575__auto___26165)){
args26162.push((arguments[i__17576__auto___26166]));

var G__26167 = (i__17576__auto___26166 + (1));
i__17576__auto___26166 = G__26167;
continue;
} else {
}
break;
}

var G__26164 = args26162.length;
switch (G__26164) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26162.length)].join('')));

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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26169){
var map__26172 = p__26169;
var map__26172__$1 = ((((!((map__26172 == null)))?((((map__26172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26172):map__26172);
var f_data = map__26172__$1;
var file = cljs.core.get.call(null,map__26172__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__26172__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16517__auto__ = request_url;
if(cljs.core.truth_(or__16517__auto__)){
return or__16517__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26174,files_msg){
var map__26197 = p__26174;
var map__26197__$1 = ((((!((map__26197 == null)))?((((map__26197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26197):map__26197);
var opts = map__26197__$1;
var on_cssload = cljs.core.get.call(null,map__26197__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26199_26219 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26200_26220 = null;
var count__26201_26221 = (0);
var i__26202_26222 = (0);
while(true){
if((i__26202_26222 < count__26201_26221)){
var f_26223 = cljs.core._nth.call(null,chunk__26200_26220,i__26202_26222);
figwheel.client.file_reloading.reload_css_file.call(null,f_26223);

var G__26224 = seq__26199_26219;
var G__26225 = chunk__26200_26220;
var G__26226 = count__26201_26221;
var G__26227 = (i__26202_26222 + (1));
seq__26199_26219 = G__26224;
chunk__26200_26220 = G__26225;
count__26201_26221 = G__26226;
i__26202_26222 = G__26227;
continue;
} else {
var temp__4425__auto___26228 = cljs.core.seq.call(null,seq__26199_26219);
if(temp__4425__auto___26228){
var seq__26199_26229__$1 = temp__4425__auto___26228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26199_26229__$1)){
var c__17320__auto___26230 = cljs.core.chunk_first.call(null,seq__26199_26229__$1);
var G__26231 = cljs.core.chunk_rest.call(null,seq__26199_26229__$1);
var G__26232 = c__17320__auto___26230;
var G__26233 = cljs.core.count.call(null,c__17320__auto___26230);
var G__26234 = (0);
seq__26199_26219 = G__26231;
chunk__26200_26220 = G__26232;
count__26201_26221 = G__26233;
i__26202_26222 = G__26234;
continue;
} else {
var f_26235 = cljs.core.first.call(null,seq__26199_26229__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26235);

var G__26236 = cljs.core.next.call(null,seq__26199_26229__$1);
var G__26237 = null;
var G__26238 = (0);
var G__26239 = (0);
seq__26199_26219 = G__26236;
chunk__26200_26220 = G__26237;
count__26201_26221 = G__26238;
i__26202_26222 = G__26239;
continue;
}
} else {
}
}
break;
}

var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__,map__26197,map__26197__$1,opts,on_cssload){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto__,map__26197,map__26197__$1,opts,on_cssload){
return (function (state_26209){
var state_val_26210 = (state_26209[(1)]);
if((state_val_26210 === (1))){
var inst_26203 = cljs.core.async.timeout.call(null,(100));
var state_26209__$1 = state_26209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26209__$1,(2),inst_26203);
} else {
if((state_val_26210 === (2))){
var inst_26205 = (state_26209[(2)]);
var inst_26206 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26207 = on_cssload.call(null,inst_26206);
var state_26209__$1 = (function (){var statearr_26211 = state_26209;
(statearr_26211[(7)] = inst_26205);

return statearr_26211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26209__$1,inst_26207);
} else {
return null;
}
}
});})(c__20007__auto__,map__26197,map__26197__$1,opts,on_cssload))
;
return ((function (switch__19942__auto__,c__20007__auto__,map__26197,map__26197__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19943__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19943__auto____0 = (function (){
var statearr_26215 = [null,null,null,null,null,null,null,null];
(statearr_26215[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19943__auto__);

(statearr_26215[(1)] = (1));

return statearr_26215;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19943__auto____1 = (function (state_26209){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_26209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e26216){if((e26216 instanceof Object)){
var ex__19946__auto__ = e26216;
var statearr_26217_26240 = state_26209;
(statearr_26217_26240[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26241 = state_26209;
state_26209 = G__26241;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19943__auto__ = function(state_26209){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19943__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19943__auto____1.call(this,state_26209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19943__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19943__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto__,map__26197,map__26197__$1,opts,on_cssload))
})();
var state__20009__auto__ = (function (){var statearr_26218 = f__20008__auto__.call(null);
(statearr_26218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_26218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__,map__26197,map__26197__$1,opts,on_cssload))
);

return c__20007__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1441453638857