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
return cljs.core.reduce.call(null,(function (p1__26241_SHARP_,p2__26242_SHARP_){
var and__16505__auto__ = p1__26241_SHARP_;
if(cljs.core.truth_(and__16505__auto__)){
return p2__26242_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26243){
var map__26244 = p__26243;
var map__26244__$1 = ((((!((map__26244 == null)))?((((map__26244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26244):map__26244);
var file = cljs.core.get.call(null,map__26244__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26246){
var map__26247 = p__26246;
var map__26247__$1 = ((((!((map__26247 == null)))?((((map__26247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26247):map__26247);
var namespace = cljs.core.get.call(null,map__26247__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e26249){if((e26249 instanceof Error)){
var e = e26249;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26249;

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
var args26250 = [];
var len__17575__auto___26253 = arguments.length;
var i__17576__auto___26254 = (0);
while(true){
if((i__17576__auto___26254 < len__17575__auto___26253)){
args26250.push((arguments[i__17576__auto___26254]));

var G__26255 = (i__17576__auto___26254 + (1));
i__17576__auto___26254 = G__26255;
continue;
} else {
}
break;
}

var G__26252 = args26250.length;
switch (G__26252) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26250.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26257,callback){
var map__26260 = p__26257;
var map__26260__$1 = ((((!((map__26260 == null)))?((((map__26260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26260):map__26260);
var file_msg = map__26260__$1;
var request_url = cljs.core.get.call(null,map__26260__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26260,map__26260__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26260,map__26260__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26262){
var map__26265 = p__26262;
var map__26265__$1 = ((((!((map__26265 == null)))?((((map__26265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26265):map__26265);
var file_msg = map__26265__$1;
var namespace = cljs.core.get.call(null,map__26265__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__26265__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26267,callback){
var map__26270 = p__26267;
var map__26270__$1 = ((((!((map__26270 == null)))?((((map__26270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26270):map__26270);
var file_msg = map__26270__$1;
var request_url = cljs.core.get.call(null,map__26270__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26270__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20309__auto___26358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___26358,out){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___26358,out){
return (function (state_26340){
var state_val_26341 = (state_26340[(1)]);
if((state_val_26341 === (1))){
var inst_26318 = cljs.core.nth.call(null,files,(0),null);
var inst_26319 = cljs.core.nthnext.call(null,files,(1));
var inst_26320 = files;
var state_26340__$1 = (function (){var statearr_26342 = state_26340;
(statearr_26342[(7)] = inst_26318);

(statearr_26342[(8)] = inst_26319);

(statearr_26342[(9)] = inst_26320);

return statearr_26342;
})();
var statearr_26343_26359 = state_26340__$1;
(statearr_26343_26359[(2)] = null);

(statearr_26343_26359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26341 === (2))){
var inst_26323 = (state_26340[(10)]);
var inst_26320 = (state_26340[(9)]);
var inst_26323__$1 = cljs.core.nth.call(null,inst_26320,(0),null);
var inst_26324 = cljs.core.nthnext.call(null,inst_26320,(1));
var inst_26325 = (inst_26323__$1 == null);
var inst_26326 = cljs.core.not.call(null,inst_26325);
var state_26340__$1 = (function (){var statearr_26344 = state_26340;
(statearr_26344[(10)] = inst_26323__$1);

(statearr_26344[(11)] = inst_26324);

return statearr_26344;
})();
if(inst_26326){
var statearr_26345_26360 = state_26340__$1;
(statearr_26345_26360[(1)] = (4));

} else {
var statearr_26346_26361 = state_26340__$1;
(statearr_26346_26361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26341 === (3))){
var inst_26338 = (state_26340[(2)]);
var state_26340__$1 = state_26340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26340__$1,inst_26338);
} else {
if((state_val_26341 === (4))){
var inst_26323 = (state_26340[(10)]);
var inst_26328 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26323);
var state_26340__$1 = state_26340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26340__$1,(7),inst_26328);
} else {
if((state_val_26341 === (5))){
var inst_26334 = cljs.core.async.close_BANG_.call(null,out);
var state_26340__$1 = state_26340;
var statearr_26347_26362 = state_26340__$1;
(statearr_26347_26362[(2)] = inst_26334);

(statearr_26347_26362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26341 === (6))){
var inst_26336 = (state_26340[(2)]);
var state_26340__$1 = state_26340;
var statearr_26348_26363 = state_26340__$1;
(statearr_26348_26363[(2)] = inst_26336);

(statearr_26348_26363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26341 === (7))){
var inst_26324 = (state_26340[(11)]);
var inst_26330 = (state_26340[(2)]);
var inst_26331 = cljs.core.async.put_BANG_.call(null,out,inst_26330);
var inst_26320 = inst_26324;
var state_26340__$1 = (function (){var statearr_26349 = state_26340;
(statearr_26349[(12)] = inst_26331);

(statearr_26349[(9)] = inst_26320);

return statearr_26349;
})();
var statearr_26350_26364 = state_26340__$1;
(statearr_26350_26364[(2)] = null);

(statearr_26350_26364[(1)] = (2));


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
});})(c__20309__auto___26358,out))
;
return ((function (switch__20244__auto__,c__20309__auto___26358,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20245__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20245__auto____0 = (function (){
var statearr_26354 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26354[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20245__auto__);

(statearr_26354[(1)] = (1));

return statearr_26354;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20245__auto____1 = (function (state_26340){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_26340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e26355){if((e26355 instanceof Object)){
var ex__20248__auto__ = e26355;
var statearr_26356_26365 = state_26340;
(statearr_26356_26365[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26366 = state_26340;
state_26340 = G__26366;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20245__auto__ = function(state_26340){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20245__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20245__auto____1.call(this,state_26340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20245__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20245__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___26358,out))
})();
var state__20311__auto__ = (function (){var statearr_26357 = f__20310__auto__.call(null);
(statearr_26357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___26358);

return statearr_26357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___26358,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__26367,p__26368){
var map__26373 = p__26367;
var map__26373__$1 = ((((!((map__26373 == null)))?((((map__26373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26373):map__26373);
var opts = map__26373__$1;
var url_rewriter = cljs.core.get.call(null,map__26373__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26374 = p__26368;
var map__26374__$1 = ((((!((map__26374 == null)))?((((map__26374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26374):map__26374);
var file_msg = map__26374__$1;
var file = cljs.core.get.call(null,map__26374__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26377,opts){
var map__26381 = p__26377;
var map__26381__$1 = ((((!((map__26381 == null)))?((((map__26381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26381):map__26381);
var eval_body__$1 = cljs.core.get.call(null,map__26381__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26381__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e26383){var e = e26383;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26388,p__26389){
var map__26617 = p__26388;
var map__26617__$1 = ((((!((map__26617 == null)))?((((map__26617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26617):map__26617);
var opts = map__26617__$1;
var before_jsload = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__26618 = p__26389;
var map__26618__$1 = ((((!((map__26618 == null)))?((((map__26618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26618):map__26618);
var msg = map__26618__$1;
var files = cljs.core.get.call(null,map__26618__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files){
return (function (state_26759){
var state_val_26760 = (state_26759[(1)]);
if((state_val_26760 === (7))){
var inst_26633 = (state_26759[(7)]);
var inst_26632 = (state_26759[(8)]);
var inst_26635 = (state_26759[(9)]);
var inst_26634 = (state_26759[(10)]);
var inst_26640 = cljs.core._nth.call(null,inst_26633,inst_26635);
var inst_26641 = figwheel.client.file_reloading.eval_body.call(null,inst_26640,opts);
var inst_26642 = (inst_26635 + (1));
var tmp26761 = inst_26633;
var tmp26762 = inst_26632;
var tmp26763 = inst_26634;
var inst_26632__$1 = tmp26762;
var inst_26633__$1 = tmp26761;
var inst_26634__$1 = tmp26763;
var inst_26635__$1 = inst_26642;
var state_26759__$1 = (function (){var statearr_26764 = state_26759;
(statearr_26764[(7)] = inst_26633__$1);

(statearr_26764[(11)] = inst_26641);

(statearr_26764[(8)] = inst_26632__$1);

(statearr_26764[(9)] = inst_26635__$1);

(statearr_26764[(10)] = inst_26634__$1);

return statearr_26764;
})();
var statearr_26765_26844 = state_26759__$1;
(statearr_26765_26844[(2)] = null);

(statearr_26765_26844[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (20))){
var inst_26682 = (state_26759[(12)]);
var inst_26678 = (state_26759[(13)]);
var inst_26684 = (state_26759[(14)]);
var inst_26681 = (state_26759[(15)]);
var inst_26677 = (state_26759[(16)]);
var inst_26687 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26689 = (function (){var all_files = inst_26677;
var files_SINGLEQUOTE_ = inst_26678;
var res_SINGLEQUOTE_ = inst_26681;
var res = inst_26682;
var files_not_loaded = inst_26684;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26682,inst_26678,inst_26684,inst_26681,inst_26677,inst_26687,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files){
return (function (p__26688){
var map__26766 = p__26688;
var map__26766__$1 = ((((!((map__26766 == null)))?((((map__26766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26766):map__26766);
var namespace = cljs.core.get.call(null,map__26766__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26766__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26682,inst_26678,inst_26684,inst_26681,inst_26677,inst_26687,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files))
})();
var inst_26690 = cljs.core.map.call(null,inst_26689,inst_26682);
var inst_26691 = cljs.core.pr_str.call(null,inst_26690);
var inst_26692 = figwheel.client.utils.log.call(null,inst_26691);
var inst_26693 = (function (){var all_files = inst_26677;
var files_SINGLEQUOTE_ = inst_26678;
var res_SINGLEQUOTE_ = inst_26681;
var res = inst_26682;
var files_not_loaded = inst_26684;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26682,inst_26678,inst_26684,inst_26681,inst_26677,inst_26687,inst_26689,inst_26690,inst_26691,inst_26692,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26682,inst_26678,inst_26684,inst_26681,inst_26677,inst_26687,inst_26689,inst_26690,inst_26691,inst_26692,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files))
})();
var inst_26694 = setTimeout(inst_26693,(10));
var state_26759__$1 = (function (){var statearr_26768 = state_26759;
(statearr_26768[(17)] = inst_26692);

(statearr_26768[(18)] = inst_26687);

return statearr_26768;
})();
var statearr_26769_26845 = state_26759__$1;
(statearr_26769_26845[(2)] = inst_26694);

(statearr_26769_26845[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (27))){
var state_26759__$1 = state_26759;
var statearr_26770_26846 = state_26759__$1;
(statearr_26770_26846[(2)] = false);

(statearr_26770_26846[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (1))){
var inst_26624 = (state_26759[(19)]);
var inst_26621 = before_jsload.call(null,files);
var inst_26622 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26623 = (function (){return ((function (inst_26624,inst_26621,inst_26622,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files){
return (function (p1__26384_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26384_SHARP_);
});
;})(inst_26624,inst_26621,inst_26622,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files))
})();
var inst_26624__$1 = cljs.core.filter.call(null,inst_26623,files);
var inst_26625 = cljs.core.not_empty.call(null,inst_26624__$1);
var state_26759__$1 = (function (){var statearr_26771 = state_26759;
(statearr_26771[(19)] = inst_26624__$1);

(statearr_26771[(20)] = inst_26621);

(statearr_26771[(21)] = inst_26622);

return statearr_26771;
})();
if(cljs.core.truth_(inst_26625)){
var statearr_26772_26847 = state_26759__$1;
(statearr_26772_26847[(1)] = (2));

} else {
var statearr_26773_26848 = state_26759__$1;
(statearr_26773_26848[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (24))){
var state_26759__$1 = state_26759;
var statearr_26774_26849 = state_26759__$1;
(statearr_26774_26849[(2)] = null);

(statearr_26774_26849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (39))){
var state_26759__$1 = state_26759;
var statearr_26775_26850 = state_26759__$1;
(statearr_26775_26850[(2)] = null);

(statearr_26775_26850[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (4))){
var inst_26669 = (state_26759[(2)]);
var inst_26670 = (function (){return ((function (inst_26669,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files){
return (function (p1__26385_SHARP_){
var and__16505__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26385_SHARP_);
if(cljs.core.truth_(and__16505__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26385_SHARP_));
} else {
return and__16505__auto__;
}
});
;})(inst_26669,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files))
})();
var inst_26671 = cljs.core.filter.call(null,inst_26670,files);
var state_26759__$1 = (function (){var statearr_26776 = state_26759;
(statearr_26776[(22)] = inst_26671);

(statearr_26776[(23)] = inst_26669);

return statearr_26776;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26777_26851 = state_26759__$1;
(statearr_26777_26851[(1)] = (16));

} else {
var statearr_26778_26852 = state_26759__$1;
(statearr_26778_26852[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (15))){
var inst_26659 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26779_26853 = state_26759__$1;
(statearr_26779_26853[(2)] = inst_26659);

(statearr_26779_26853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (21))){
var state_26759__$1 = state_26759;
var statearr_26780_26854 = state_26759__$1;
(statearr_26780_26854[(2)] = null);

(statearr_26780_26854[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (31))){
var inst_26716 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26781_26855 = state_26759__$1;
(statearr_26781_26855[(2)] = inst_26716);

(statearr_26781_26855[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (32))){
var inst_26704 = (state_26759[(24)]);
var inst_26721 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26704);
var state_26759__$1 = state_26759;
var statearr_26782_26856 = state_26759__$1;
(statearr_26782_26856[(2)] = inst_26721);

(statearr_26782_26856[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (40))){
var inst_26727 = (state_26759[(25)]);
var inst_26745 = (state_26759[(2)]);
var inst_26746 = cljs.core.not_empty.call(null,inst_26727);
var state_26759__$1 = (function (){var statearr_26783 = state_26759;
(statearr_26783[(26)] = inst_26745);

return statearr_26783;
})();
if(cljs.core.truth_(inst_26746)){
var statearr_26784_26857 = state_26759__$1;
(statearr_26784_26857[(1)] = (41));

} else {
var statearr_26785_26858 = state_26759__$1;
(statearr_26785_26858[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (33))){
var inst_26704 = (state_26759[(24)]);
var state_26759__$1 = state_26759;
var statearr_26786_26859 = state_26759__$1;
(statearr_26786_26859[(2)] = inst_26704);

(statearr_26786_26859[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (13))){
var inst_26645 = (state_26759[(27)]);
var inst_26649 = cljs.core.chunk_first.call(null,inst_26645);
var inst_26650 = cljs.core.chunk_rest.call(null,inst_26645);
var inst_26651 = cljs.core.count.call(null,inst_26649);
var inst_26632 = inst_26650;
var inst_26633 = inst_26649;
var inst_26634 = inst_26651;
var inst_26635 = (0);
var state_26759__$1 = (function (){var statearr_26787 = state_26759;
(statearr_26787[(7)] = inst_26633);

(statearr_26787[(8)] = inst_26632);

(statearr_26787[(9)] = inst_26635);

(statearr_26787[(10)] = inst_26634);

return statearr_26787;
})();
var statearr_26788_26860 = state_26759__$1;
(statearr_26788_26860[(2)] = null);

(statearr_26788_26860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (22))){
var inst_26684 = (state_26759[(14)]);
var inst_26697 = (state_26759[(2)]);
var inst_26698 = cljs.core.not_empty.call(null,inst_26684);
var state_26759__$1 = (function (){var statearr_26789 = state_26759;
(statearr_26789[(28)] = inst_26697);

return statearr_26789;
})();
if(cljs.core.truth_(inst_26698)){
var statearr_26790_26861 = state_26759__$1;
(statearr_26790_26861[(1)] = (23));

} else {
var statearr_26791_26862 = state_26759__$1;
(statearr_26791_26862[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (36))){
var state_26759__$1 = state_26759;
var statearr_26792_26863 = state_26759__$1;
(statearr_26792_26863[(2)] = null);

(statearr_26792_26863[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (41))){
var inst_26727 = (state_26759[(25)]);
var inst_26748 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26727);
var inst_26749 = cljs.core.pr_str.call(null,inst_26748);
var inst_26750 = [cljs.core.str("not required: "),cljs.core.str(inst_26749)].join('');
var inst_26751 = figwheel.client.utils.log.call(null,inst_26750);
var state_26759__$1 = state_26759;
var statearr_26793_26864 = state_26759__$1;
(statearr_26793_26864[(2)] = inst_26751);

(statearr_26793_26864[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (43))){
var inst_26754 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26794_26865 = state_26759__$1;
(statearr_26794_26865[(2)] = inst_26754);

(statearr_26794_26865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (29))){
var state_26759__$1 = state_26759;
var statearr_26795_26866 = state_26759__$1;
(statearr_26795_26866[(2)] = true);

(statearr_26795_26866[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (6))){
var inst_26666 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26796_26867 = state_26759__$1;
(statearr_26796_26867[(2)] = inst_26666);

(statearr_26796_26867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (28))){
var inst_26719 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26719)){
var statearr_26797_26868 = state_26759__$1;
(statearr_26797_26868[(1)] = (32));

} else {
var statearr_26798_26869 = state_26759__$1;
(statearr_26798_26869[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (25))){
var inst_26757 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26759__$1,inst_26757);
} else {
if((state_val_26760 === (34))){
var inst_26725 = (state_26759[(29)]);
var inst_26724 = (state_26759[(2)]);
var inst_26725__$1 = cljs.core.get.call(null,inst_26724,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26726 = cljs.core.get.call(null,inst_26724,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_26727 = cljs.core.get.call(null,inst_26724,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26728 = cljs.core.not_empty.call(null,inst_26725__$1);
var state_26759__$1 = (function (){var statearr_26799 = state_26759;
(statearr_26799[(29)] = inst_26725__$1);

(statearr_26799[(25)] = inst_26727);

(statearr_26799[(30)] = inst_26726);

return statearr_26799;
})();
if(cljs.core.truth_(inst_26728)){
var statearr_26800_26870 = state_26759__$1;
(statearr_26800_26870[(1)] = (35));

} else {
var statearr_26801_26871 = state_26759__$1;
(statearr_26801_26871[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (17))){
var inst_26671 = (state_26759[(22)]);
var state_26759__$1 = state_26759;
var statearr_26802_26872 = state_26759__$1;
(statearr_26802_26872[(2)] = inst_26671);

(statearr_26802_26872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (3))){
var state_26759__$1 = state_26759;
var statearr_26803_26873 = state_26759__$1;
(statearr_26803_26873[(2)] = null);

(statearr_26803_26873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (12))){
var inst_26662 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26804_26874 = state_26759__$1;
(statearr_26804_26874[(2)] = inst_26662);

(statearr_26804_26874[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (2))){
var inst_26624 = (state_26759[(19)]);
var inst_26631 = cljs.core.seq.call(null,inst_26624);
var inst_26632 = inst_26631;
var inst_26633 = null;
var inst_26634 = (0);
var inst_26635 = (0);
var state_26759__$1 = (function (){var statearr_26805 = state_26759;
(statearr_26805[(7)] = inst_26633);

(statearr_26805[(8)] = inst_26632);

(statearr_26805[(9)] = inst_26635);

(statearr_26805[(10)] = inst_26634);

return statearr_26805;
})();
var statearr_26806_26875 = state_26759__$1;
(statearr_26806_26875[(2)] = null);

(statearr_26806_26875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (23))){
var inst_26682 = (state_26759[(12)]);
var inst_26678 = (state_26759[(13)]);
var inst_26684 = (state_26759[(14)]);
var inst_26681 = (state_26759[(15)]);
var inst_26677 = (state_26759[(16)]);
var inst_26704 = (state_26759[(24)]);
var inst_26700 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26703 = (function (){var all_files = inst_26677;
var files_SINGLEQUOTE_ = inst_26678;
var res_SINGLEQUOTE_ = inst_26681;
var res = inst_26682;
var files_not_loaded = inst_26684;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26682,inst_26678,inst_26684,inst_26681,inst_26677,inst_26704,inst_26700,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files){
return (function (p__26702){
var map__26807 = p__26702;
var map__26807__$1 = ((((!((map__26807 == null)))?((((map__26807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26807):map__26807);
var meta_data = cljs.core.get.call(null,map__26807__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26682,inst_26678,inst_26684,inst_26681,inst_26677,inst_26704,inst_26700,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files))
})();
var inst_26704__$1 = cljs.core.group_by.call(null,inst_26703,inst_26684);
var inst_26706 = (inst_26704__$1 == null);
var inst_26707 = cljs.core.not.call(null,inst_26706);
var state_26759__$1 = (function (){var statearr_26809 = state_26759;
(statearr_26809[(31)] = inst_26700);

(statearr_26809[(24)] = inst_26704__$1);

return statearr_26809;
})();
if(inst_26707){
var statearr_26810_26876 = state_26759__$1;
(statearr_26810_26876[(1)] = (26));

} else {
var statearr_26811_26877 = state_26759__$1;
(statearr_26811_26877[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (35))){
var inst_26725 = (state_26759[(29)]);
var inst_26730 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26725);
var inst_26731 = cljs.core.pr_str.call(null,inst_26730);
var inst_26732 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26731)].join('');
var inst_26733 = figwheel.client.utils.log.call(null,inst_26732);
var state_26759__$1 = state_26759;
var statearr_26812_26878 = state_26759__$1;
(statearr_26812_26878[(2)] = inst_26733);

(statearr_26812_26878[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (19))){
var inst_26682 = (state_26759[(12)]);
var inst_26678 = (state_26759[(13)]);
var inst_26681 = (state_26759[(15)]);
var inst_26677 = (state_26759[(16)]);
var inst_26681__$1 = (state_26759[(2)]);
var inst_26682__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26681__$1);
var inst_26683 = (function (){var all_files = inst_26677;
var files_SINGLEQUOTE_ = inst_26678;
var res_SINGLEQUOTE_ = inst_26681__$1;
var res = inst_26682__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26682,inst_26678,inst_26681,inst_26677,inst_26681__$1,inst_26682__$1,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files){
return (function (p1__26387_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26387_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26682,inst_26678,inst_26681,inst_26677,inst_26681__$1,inst_26682__$1,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files))
})();
var inst_26684 = cljs.core.filter.call(null,inst_26683,inst_26681__$1);
var inst_26685 = cljs.core.not_empty.call(null,inst_26682__$1);
var state_26759__$1 = (function (){var statearr_26813 = state_26759;
(statearr_26813[(12)] = inst_26682__$1);

(statearr_26813[(14)] = inst_26684);

(statearr_26813[(15)] = inst_26681__$1);

return statearr_26813;
})();
if(cljs.core.truth_(inst_26685)){
var statearr_26814_26879 = state_26759__$1;
(statearr_26814_26879[(1)] = (20));

} else {
var statearr_26815_26880 = state_26759__$1;
(statearr_26815_26880[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (11))){
var state_26759__$1 = state_26759;
var statearr_26816_26881 = state_26759__$1;
(statearr_26816_26881[(2)] = null);

(statearr_26816_26881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (9))){
var inst_26664 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26817_26882 = state_26759__$1;
(statearr_26817_26882[(2)] = inst_26664);

(statearr_26817_26882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (5))){
var inst_26635 = (state_26759[(9)]);
var inst_26634 = (state_26759[(10)]);
var inst_26637 = (inst_26635 < inst_26634);
var inst_26638 = inst_26637;
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26638)){
var statearr_26818_26883 = state_26759__$1;
(statearr_26818_26883[(1)] = (7));

} else {
var statearr_26819_26884 = state_26759__$1;
(statearr_26819_26884[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (14))){
var inst_26645 = (state_26759[(27)]);
var inst_26654 = cljs.core.first.call(null,inst_26645);
var inst_26655 = figwheel.client.file_reloading.eval_body.call(null,inst_26654,opts);
var inst_26656 = cljs.core.next.call(null,inst_26645);
var inst_26632 = inst_26656;
var inst_26633 = null;
var inst_26634 = (0);
var inst_26635 = (0);
var state_26759__$1 = (function (){var statearr_26820 = state_26759;
(statearr_26820[(7)] = inst_26633);

(statearr_26820[(32)] = inst_26655);

(statearr_26820[(8)] = inst_26632);

(statearr_26820[(9)] = inst_26635);

(statearr_26820[(10)] = inst_26634);

return statearr_26820;
})();
var statearr_26821_26885 = state_26759__$1;
(statearr_26821_26885[(2)] = null);

(statearr_26821_26885[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (26))){
var inst_26704 = (state_26759[(24)]);
var inst_26709 = inst_26704.cljs$lang$protocol_mask$partition0$;
var inst_26710 = (inst_26709 & (64));
var inst_26711 = inst_26704.cljs$core$ISeq$;
var inst_26712 = (inst_26710) || (inst_26711);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26712)){
var statearr_26822_26886 = state_26759__$1;
(statearr_26822_26886[(1)] = (29));

} else {
var statearr_26823_26887 = state_26759__$1;
(statearr_26823_26887[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (16))){
var inst_26671 = (state_26759[(22)]);
var inst_26673 = (function (){var all_files = inst_26671;
return ((function (all_files,inst_26671,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files){
return (function (p1__26386_SHARP_){
return cljs.core.update_in.call(null,p1__26386_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_26671,state_val_26760,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files))
})();
var inst_26674 = cljs.core.map.call(null,inst_26673,inst_26671);
var state_26759__$1 = state_26759;
var statearr_26824_26888 = state_26759__$1;
(statearr_26824_26888[(2)] = inst_26674);

(statearr_26824_26888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (38))){
var inst_26726 = (state_26759[(30)]);
var inst_26739 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26726);
var inst_26740 = cljs.core.pr_str.call(null,inst_26739);
var inst_26741 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_26740)].join('');
var inst_26742 = figwheel.client.utils.log.call(null,inst_26741);
var state_26759__$1 = state_26759;
var statearr_26825_26889 = state_26759__$1;
(statearr_26825_26889[(2)] = inst_26742);

(statearr_26825_26889[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (30))){
var state_26759__$1 = state_26759;
var statearr_26826_26890 = state_26759__$1;
(statearr_26826_26890[(2)] = false);

(statearr_26826_26890[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (10))){
var inst_26645 = (state_26759[(27)]);
var inst_26647 = cljs.core.chunked_seq_QMARK_.call(null,inst_26645);
var state_26759__$1 = state_26759;
if(inst_26647){
var statearr_26827_26891 = state_26759__$1;
(statearr_26827_26891[(1)] = (13));

} else {
var statearr_26828_26892 = state_26759__$1;
(statearr_26828_26892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (18))){
var inst_26678 = (state_26759[(13)]);
var inst_26677 = (state_26759[(16)]);
var inst_26677__$1 = (state_26759[(2)]);
var inst_26678__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_26677__$1);
var inst_26679 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26678__$1);
var state_26759__$1 = (function (){var statearr_26829 = state_26759;
(statearr_26829[(13)] = inst_26678__$1);

(statearr_26829[(16)] = inst_26677__$1);

return statearr_26829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(19),inst_26679);
} else {
if((state_val_26760 === (42))){
var state_26759__$1 = state_26759;
var statearr_26830_26893 = state_26759__$1;
(statearr_26830_26893[(2)] = null);

(statearr_26830_26893[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (37))){
var inst_26726 = (state_26759[(30)]);
var inst_26736 = (state_26759[(2)]);
var inst_26737 = cljs.core.not_empty.call(null,inst_26726);
var state_26759__$1 = (function (){var statearr_26831 = state_26759;
(statearr_26831[(33)] = inst_26736);

return statearr_26831;
})();
if(cljs.core.truth_(inst_26737)){
var statearr_26832_26894 = state_26759__$1;
(statearr_26832_26894[(1)] = (38));

} else {
var statearr_26833_26895 = state_26759__$1;
(statearr_26833_26895[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (8))){
var inst_26632 = (state_26759[(8)]);
var inst_26645 = (state_26759[(27)]);
var inst_26645__$1 = cljs.core.seq.call(null,inst_26632);
var state_26759__$1 = (function (){var statearr_26834 = state_26759;
(statearr_26834[(27)] = inst_26645__$1);

return statearr_26834;
})();
if(inst_26645__$1){
var statearr_26835_26896 = state_26759__$1;
(statearr_26835_26896[(1)] = (10));

} else {
var statearr_26836_26897 = state_26759__$1;
(statearr_26836_26897[(1)] = (11));

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
});})(c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files))
;
return ((function (switch__20244__auto__,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20245__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20245__auto____0 = (function (){
var statearr_26840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26840[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20245__auto__);

(statearr_26840[(1)] = (1));

return statearr_26840;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20245__auto____1 = (function (state_26759){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_26759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e26841){if((e26841 instanceof Object)){
var ex__20248__auto__ = e26841;
var statearr_26842_26898 = state_26759;
(statearr_26842_26898[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26899 = state_26759;
state_26759 = G__26899;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20245__auto__ = function(state_26759){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20245__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20245__auto____1.call(this,state_26759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20245__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20245__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files))
})();
var state__20311__auto__ = (function (){var statearr_26843 = f__20310__auto__.call(null);
(statearr_26843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto__);

return statearr_26843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto__,map__26617,map__26617__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26618,map__26618__$1,msg,files))
);

return c__20309__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26902,link){
var map__26905 = p__26902;
var map__26905__$1 = ((((!((map__26905 == null)))?((((map__26905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26905):map__26905);
var file = cljs.core.get.call(null,map__26905__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26905,map__26905__$1,file){
return (function (p1__26900_SHARP_,p2__26901_SHARP_){
if(cljs.core._EQ_.call(null,p1__26900_SHARP_,p2__26901_SHARP_)){
return p1__26900_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26905,map__26905__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26911){
var map__26912 = p__26911;
var map__26912__$1 = ((((!((map__26912 == null)))?((((map__26912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26912):map__26912);
var match_length = cljs.core.get.call(null,map__26912__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26912__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26907_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26907_SHARP_);
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
var args26914 = [];
var len__17575__auto___26917 = arguments.length;
var i__17576__auto___26918 = (0);
while(true){
if((i__17576__auto___26918 < len__17575__auto___26917)){
args26914.push((arguments[i__17576__auto___26918]));

var G__26919 = (i__17576__auto___26918 + (1));
i__17576__auto___26918 = G__26919;
continue;
} else {
}
break;
}

var G__26916 = args26914.length;
switch (G__26916) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26914.length)].join('')));

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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26921){
var map__26924 = p__26921;
var map__26924__$1 = ((((!((map__26924 == null)))?((((map__26924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26924):map__26924);
var f_data = map__26924__$1;
var file = cljs.core.get.call(null,map__26924__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__26924__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26926,files_msg){
var map__26949 = p__26926;
var map__26949__$1 = ((((!((map__26949 == null)))?((((map__26949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26949):map__26949);
var opts = map__26949__$1;
var on_cssload = cljs.core.get.call(null,map__26949__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26951_26971 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26952_26972 = null;
var count__26953_26973 = (0);
var i__26954_26974 = (0);
while(true){
if((i__26954_26974 < count__26953_26973)){
var f_26975 = cljs.core._nth.call(null,chunk__26952_26972,i__26954_26974);
figwheel.client.file_reloading.reload_css_file.call(null,f_26975);

var G__26976 = seq__26951_26971;
var G__26977 = chunk__26952_26972;
var G__26978 = count__26953_26973;
var G__26979 = (i__26954_26974 + (1));
seq__26951_26971 = G__26976;
chunk__26952_26972 = G__26977;
count__26953_26973 = G__26978;
i__26954_26974 = G__26979;
continue;
} else {
var temp__4425__auto___26980 = cljs.core.seq.call(null,seq__26951_26971);
if(temp__4425__auto___26980){
var seq__26951_26981__$1 = temp__4425__auto___26980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26951_26981__$1)){
var c__17320__auto___26982 = cljs.core.chunk_first.call(null,seq__26951_26981__$1);
var G__26983 = cljs.core.chunk_rest.call(null,seq__26951_26981__$1);
var G__26984 = c__17320__auto___26982;
var G__26985 = cljs.core.count.call(null,c__17320__auto___26982);
var G__26986 = (0);
seq__26951_26971 = G__26983;
chunk__26952_26972 = G__26984;
count__26953_26973 = G__26985;
i__26954_26974 = G__26986;
continue;
} else {
var f_26987 = cljs.core.first.call(null,seq__26951_26981__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26987);

var G__26988 = cljs.core.next.call(null,seq__26951_26981__$1);
var G__26989 = null;
var G__26990 = (0);
var G__26991 = (0);
seq__26951_26971 = G__26988;
chunk__26952_26972 = G__26989;
count__26953_26973 = G__26990;
i__26954_26974 = G__26991;
continue;
}
} else {
}
}
break;
}

var c__20309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto__,map__26949,map__26949__$1,opts,on_cssload){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto__,map__26949,map__26949__$1,opts,on_cssload){
return (function (state_26961){
var state_val_26962 = (state_26961[(1)]);
if((state_val_26962 === (1))){
var inst_26955 = cljs.core.async.timeout.call(null,(100));
var state_26961__$1 = state_26961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26961__$1,(2),inst_26955);
} else {
if((state_val_26962 === (2))){
var inst_26957 = (state_26961[(2)]);
var inst_26958 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26959 = on_cssload.call(null,inst_26958);
var state_26961__$1 = (function (){var statearr_26963 = state_26961;
(statearr_26963[(7)] = inst_26957);

return statearr_26963;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26961__$1,inst_26959);
} else {
return null;
}
}
});})(c__20309__auto__,map__26949,map__26949__$1,opts,on_cssload))
;
return ((function (switch__20244__auto__,c__20309__auto__,map__26949,map__26949__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20245__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20245__auto____0 = (function (){
var statearr_26967 = [null,null,null,null,null,null,null,null];
(statearr_26967[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__20245__auto__);

(statearr_26967[(1)] = (1));

return statearr_26967;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20245__auto____1 = (function (state_26961){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_26961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e26968){if((e26968 instanceof Object)){
var ex__20248__auto__ = e26968;
var statearr_26969_26992 = state_26961;
(statearr_26969_26992[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26993 = state_26961;
state_26961 = G__26993;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__20245__auto__ = function(state_26961){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20245__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20245__auto____1.call(this,state_26961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20245__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20245__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto__,map__26949,map__26949__$1,opts,on_cssload))
})();
var state__20311__auto__ = (function (){var statearr_26970 = f__20310__auto__.call(null);
(statearr_26970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto__);

return statearr_26970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto__,map__26949,map__26949__$1,opts,on_cssload))
);

return c__20309__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1441561823718