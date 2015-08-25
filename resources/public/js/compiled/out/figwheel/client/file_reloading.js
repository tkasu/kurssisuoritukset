// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__26319_SHARP_,p2__26320_SHARP_){
var and__18109__auto__ = p1__26319_SHARP_;
if(cljs.core.truth_(and__18109__auto__)){
return p2__26320_SHARP_;
} else {
return and__18109__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18121__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18121__auto__){
return or__18121__auto__;
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
if(cljs.core.truth_((function (){var or__18121__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18121__auto__){
return or__18121__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18121__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26321){
var map__26322 = p__26321;
var map__26322__$1 = ((cljs.core.seq_QMARK_.call(null,map__26322))?cljs.core.apply.call(null,cljs.core.hash_map,map__26322):map__26322);
var file = cljs.core.get.call(null,map__26322__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26323){
var map__26324 = p__26323;
var map__26324__$1 = ((cljs.core.seq_QMARK_.call(null,map__26324))?cljs.core.apply.call(null,cljs.core.hash_map,map__26324):map__26324);
var namespace = cljs.core.get.call(null,map__26324__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e26325){if((e26325 instanceof Error)){
var e = e26325;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26325;

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
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__26327 = arguments.length;
switch (G__26327) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26329,callback){
var map__26331 = p__26329;
var map__26331__$1 = ((cljs.core.seq_QMARK_.call(null,map__26331))?cljs.core.apply.call(null,cljs.core.hash_map,map__26331):map__26331);
var file_msg = map__26331__$1;
var request_url = cljs.core.get.call(null,map__26331__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26331,map__26331__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26331,map__26331__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26332){
var map__26334 = p__26332;
var map__26334__$1 = ((cljs.core.seq_QMARK_.call(null,map__26334))?cljs.core.apply.call(null,cljs.core.hash_map,map__26334):map__26334);
var file_msg = map__26334__$1;
var meta_data = cljs.core.get.call(null,map__26334__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__26334__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18121__auto__ = meta_data;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18109__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18109__auto__){
var or__18121__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18121__auto____$1)){
return or__18121__auto____$1;
} else {
var and__18109__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18109__auto____$1){
var or__18121__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18121__auto____$2){
return or__18121__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18109__auto____$1;
}
}
}
} else {
return and__18109__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26335,callback){
var map__26337 = p__26335;
var map__26337__$1 = ((cljs.core.seq_QMARK_.call(null,map__26337))?cljs.core.apply.call(null,cljs.core.hash_map,map__26337):map__26337);
var file_msg = map__26337__$1;
var namespace = cljs.core.get.call(null,map__26337__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__26337__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__21347__auto___26424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___26424,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___26424,out){
return (function (state_26406){
var state_val_26407 = (state_26406[(1)]);
if((state_val_26407 === (7))){
var inst_26390 = (state_26406[(7)]);
var inst_26396 = (state_26406[(2)]);
var inst_26397 = cljs.core.async.put_BANG_.call(null,out,inst_26396);
var inst_26386 = inst_26390;
var state_26406__$1 = (function (){var statearr_26408 = state_26406;
(statearr_26408[(8)] = inst_26386);

(statearr_26408[(9)] = inst_26397);

return statearr_26408;
})();
var statearr_26409_26425 = state_26406__$1;
(statearr_26409_26425[(2)] = null);

(statearr_26409_26425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (6))){
var inst_26402 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
var statearr_26410_26426 = state_26406__$1;
(statearr_26410_26426[(2)] = inst_26402);

(statearr_26410_26426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (5))){
var inst_26400 = cljs.core.async.close_BANG_.call(null,out);
var state_26406__$1 = state_26406;
var statearr_26411_26427 = state_26406__$1;
(statearr_26411_26427[(2)] = inst_26400);

(statearr_26411_26427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (4))){
var inst_26389 = (state_26406[(10)]);
var inst_26394 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26389);
var state_26406__$1 = state_26406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26406__$1,(7),inst_26394);
} else {
if((state_val_26407 === (3))){
var inst_26404 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26406__$1,inst_26404);
} else {
if((state_val_26407 === (2))){
var inst_26386 = (state_26406[(8)]);
var inst_26389 = (state_26406[(10)]);
var inst_26389__$1 = cljs.core.nth.call(null,inst_26386,(0),null);
var inst_26390 = cljs.core.nthnext.call(null,inst_26386,(1));
var inst_26391 = (inst_26389__$1 == null);
var inst_26392 = cljs.core.not.call(null,inst_26391);
var state_26406__$1 = (function (){var statearr_26412 = state_26406;
(statearr_26412[(7)] = inst_26390);

(statearr_26412[(10)] = inst_26389__$1);

return statearr_26412;
})();
if(inst_26392){
var statearr_26413_26428 = state_26406__$1;
(statearr_26413_26428[(1)] = (4));

} else {
var statearr_26414_26429 = state_26406__$1;
(statearr_26414_26429[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (1))){
var inst_26384 = cljs.core.nth.call(null,files,(0),null);
var inst_26385 = cljs.core.nthnext.call(null,files,(1));
var inst_26386 = files;
var state_26406__$1 = (function (){var statearr_26415 = state_26406;
(statearr_26415[(8)] = inst_26386);

(statearr_26415[(11)] = inst_26384);

(statearr_26415[(12)] = inst_26385);

return statearr_26415;
})();
var statearr_26416_26430 = state_26406__$1;
(statearr_26416_26430[(2)] = null);

(statearr_26416_26430[(1)] = (2));


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
});})(c__21347__auto___26424,out))
;
return ((function (switch__21285__auto__,c__21347__auto___26424,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto____0 = (function (){
var statearr_26420 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26420[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto__);

(statearr_26420[(1)] = (1));

return statearr_26420;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto____1 = (function (state_26406){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_26406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e26421){if((e26421 instanceof Object)){
var ex__21289__auto__ = e26421;
var statearr_26422_26431 = state_26406;
(statearr_26422_26431[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26432 = state_26406;
state_26406 = G__26432;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto__ = function(state_26406){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto____1.call(this,state_26406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___26424,out))
})();
var state__21349__auto__ = (function (){var statearr_26423 = f__21348__auto__.call(null);
(statearr_26423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___26424);

return statearr_26423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___26424,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__26433,p__26434){
var map__26437 = p__26433;
var map__26437__$1 = ((cljs.core.seq_QMARK_.call(null,map__26437))?cljs.core.apply.call(null,cljs.core.hash_map,map__26437):map__26437);
var opts = map__26437__$1;
var url_rewriter = cljs.core.get.call(null,map__26437__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26438 = p__26434;
var map__26438__$1 = ((cljs.core.seq_QMARK_.call(null,map__26438))?cljs.core.apply.call(null,cljs.core.hash_map,map__26438):map__26438);
var file_msg = map__26438__$1;
var file = cljs.core.get.call(null,map__26438__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26439){
var map__26442 = p__26439;
var map__26442__$1 = ((cljs.core.seq_QMARK_.call(null,map__26442))?cljs.core.apply.call(null,cljs.core.hash_map,map__26442):map__26442);
var file = cljs.core.get.call(null,map__26442__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__26442__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18109__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18109__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18109__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e26443){var e = e26443;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26448,p__26449){
var map__26651 = p__26448;
var map__26651__$1 = ((cljs.core.seq_QMARK_.call(null,map__26651))?cljs.core.apply.call(null,cljs.core.hash_map,map__26651):map__26651);
var opts = map__26651__$1;
var load_unchanged_files = cljs.core.get.call(null,map__26651__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__26651__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__26651__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__26652 = p__26449;
var map__26652__$1 = ((cljs.core.seq_QMARK_.call(null,map__26652))?cljs.core.apply.call(null,cljs.core.hash_map,map__26652):map__26652);
var msg = map__26652__$1;
var files = cljs.core.get.call(null,map__26652__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files){
return (function (state_26777){
var state_val_26778 = (state_26777[(1)]);
if((state_val_26778 === (7))){
var inst_26664 = (state_26777[(7)]);
var inst_26665 = (state_26777[(8)]);
var inst_26667 = (state_26777[(9)]);
var inst_26666 = (state_26777[(10)]);
var inst_26672 = cljs.core._nth.call(null,inst_26665,inst_26667);
var inst_26673 = figwheel.client.file_reloading.eval_body.call(null,inst_26672);
var inst_26674 = (inst_26667 + (1));
var tmp26779 = inst_26664;
var tmp26780 = inst_26665;
var tmp26781 = inst_26666;
var inst_26664__$1 = tmp26779;
var inst_26665__$1 = tmp26780;
var inst_26666__$1 = tmp26781;
var inst_26667__$1 = inst_26674;
var state_26777__$1 = (function (){var statearr_26782 = state_26777;
(statearr_26782[(7)] = inst_26664__$1);

(statearr_26782[(11)] = inst_26673);

(statearr_26782[(8)] = inst_26665__$1);

(statearr_26782[(9)] = inst_26667__$1);

(statearr_26782[(10)] = inst_26666__$1);

return statearr_26782;
})();
var statearr_26783_26852 = state_26777__$1;
(statearr_26783_26852[(2)] = null);

(statearr_26783_26852[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (20))){
var inst_26714 = (state_26777[(12)]);
var inst_26710 = (state_26777[(13)]);
var inst_26709 = (state_26777[(14)]);
var inst_26716 = (state_26777[(15)]);
var inst_26713 = (state_26777[(16)]);
var inst_26719 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26721 = (function (){var files_not_loaded = inst_26716;
var res = inst_26714;
var res_SINGLEQUOTE_ = inst_26713;
var files_SINGLEQUOTE_ = inst_26710;
var all_files = inst_26709;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26714,inst_26710,inst_26709,inst_26716,inst_26713,inst_26719,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files){
return (function (p__26720){
var map__26784 = p__26720;
var map__26784__$1 = ((cljs.core.seq_QMARK_.call(null,map__26784))?cljs.core.apply.call(null,cljs.core.hash_map,map__26784):map__26784);
var file = cljs.core.get.call(null,map__26784__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__26784__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26714,inst_26710,inst_26709,inst_26716,inst_26713,inst_26719,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files))
})();
var inst_26722 = cljs.core.map.call(null,inst_26721,inst_26714);
var inst_26723 = cljs.core.pr_str.call(null,inst_26722);
var inst_26724 = figwheel.client.utils.log.call(null,inst_26723);
var inst_26725 = (function (){var files_not_loaded = inst_26716;
var res = inst_26714;
var res_SINGLEQUOTE_ = inst_26713;
var files_SINGLEQUOTE_ = inst_26710;
var all_files = inst_26709;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26714,inst_26710,inst_26709,inst_26716,inst_26713,inst_26719,inst_26721,inst_26722,inst_26723,inst_26724,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26714,inst_26710,inst_26709,inst_26716,inst_26713,inst_26719,inst_26721,inst_26722,inst_26723,inst_26724,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files))
})();
var inst_26726 = setTimeout(inst_26725,(10));
var state_26777__$1 = (function (){var statearr_26785 = state_26777;
(statearr_26785[(17)] = inst_26724);

(statearr_26785[(18)] = inst_26719);

return statearr_26785;
})();
var statearr_26786_26853 = state_26777__$1;
(statearr_26786_26853[(2)] = inst_26726);

(statearr_26786_26853[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (27))){
var inst_26736 = (state_26777[(19)]);
var state_26777__$1 = state_26777;
var statearr_26787_26854 = state_26777__$1;
(statearr_26787_26854[(2)] = inst_26736);

(statearr_26787_26854[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (1))){
var inst_26656 = (state_26777[(20)]);
var inst_26653 = before_jsload.call(null,files);
var inst_26654 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26655 = (function (){return ((function (inst_26656,inst_26653,inst_26654,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files){
return (function (p1__26444_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26444_SHARP_);
});
;})(inst_26656,inst_26653,inst_26654,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files))
})();
var inst_26656__$1 = cljs.core.filter.call(null,inst_26655,files);
var inst_26657 = cljs.core.not_empty.call(null,inst_26656__$1);
var state_26777__$1 = (function (){var statearr_26788 = state_26777;
(statearr_26788[(21)] = inst_26654);

(statearr_26788[(22)] = inst_26653);

(statearr_26788[(20)] = inst_26656__$1);

return statearr_26788;
})();
if(cljs.core.truth_(inst_26657)){
var statearr_26789_26855 = state_26777__$1;
(statearr_26789_26855[(1)] = (2));

} else {
var statearr_26790_26856 = state_26777__$1;
(statearr_26790_26856[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (24))){
var state_26777__$1 = state_26777;
var statearr_26791_26857 = state_26777__$1;
(statearr_26791_26857[(2)] = null);

(statearr_26791_26857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (4))){
var inst_26701 = (state_26777[(2)]);
var inst_26702 = (function (){return ((function (inst_26701,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files){
return (function (p1__26445_SHARP_){
var and__18109__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26445_SHARP_);
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26445_SHARP_));
} else {
return and__18109__auto__;
}
});
;})(inst_26701,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files))
})();
var inst_26703 = cljs.core.filter.call(null,inst_26702,files);
var state_26777__$1 = (function (){var statearr_26792 = state_26777;
(statearr_26792[(23)] = inst_26701);

(statearr_26792[(24)] = inst_26703);

return statearr_26792;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26793_26858 = state_26777__$1;
(statearr_26793_26858[(1)] = (16));

} else {
var statearr_26794_26859 = state_26777__$1;
(statearr_26794_26859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (15))){
var inst_26691 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
var statearr_26795_26860 = state_26777__$1;
(statearr_26795_26860[(2)] = inst_26691);

(statearr_26795_26860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (21))){
var state_26777__$1 = state_26777;
var statearr_26796_26861 = state_26777__$1;
(statearr_26796_26861[(2)] = null);

(statearr_26796_26861[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (31))){
var inst_26744 = (state_26777[(25)]);
var inst_26754 = (state_26777[(2)]);
var inst_26755 = cljs.core.not_empty.call(null,inst_26744);
var state_26777__$1 = (function (){var statearr_26797 = state_26777;
(statearr_26797[(26)] = inst_26754);

return statearr_26797;
})();
if(cljs.core.truth_(inst_26755)){
var statearr_26798_26862 = state_26777__$1;
(statearr_26798_26862[(1)] = (32));

} else {
var statearr_26799_26863 = state_26777__$1;
(statearr_26799_26863[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (32))){
var inst_26744 = (state_26777[(25)]);
var inst_26757 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26744);
var inst_26758 = cljs.core.pr_str.call(null,inst_26757);
var inst_26759 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_26758)].join('');
var inst_26760 = figwheel.client.utils.log.call(null,inst_26759);
var state_26777__$1 = state_26777;
var statearr_26800_26864 = state_26777__$1;
(statearr_26800_26864[(2)] = inst_26760);

(statearr_26800_26864[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (33))){
var state_26777__$1 = state_26777;
var statearr_26801_26865 = state_26777__$1;
(statearr_26801_26865[(2)] = null);

(statearr_26801_26865[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (13))){
var inst_26677 = (state_26777[(27)]);
var inst_26681 = cljs.core.chunk_first.call(null,inst_26677);
var inst_26682 = cljs.core.chunk_rest.call(null,inst_26677);
var inst_26683 = cljs.core.count.call(null,inst_26681);
var inst_26664 = inst_26682;
var inst_26665 = inst_26681;
var inst_26666 = inst_26683;
var inst_26667 = (0);
var state_26777__$1 = (function (){var statearr_26802 = state_26777;
(statearr_26802[(7)] = inst_26664);

(statearr_26802[(8)] = inst_26665);

(statearr_26802[(9)] = inst_26667);

(statearr_26802[(10)] = inst_26666);

return statearr_26802;
})();
var statearr_26803_26866 = state_26777__$1;
(statearr_26803_26866[(2)] = null);

(statearr_26803_26866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (22))){
var inst_26716 = (state_26777[(15)]);
var inst_26729 = (state_26777[(2)]);
var inst_26730 = cljs.core.not_empty.call(null,inst_26716);
var state_26777__$1 = (function (){var statearr_26804 = state_26777;
(statearr_26804[(28)] = inst_26729);

return statearr_26804;
})();
if(cljs.core.truth_(inst_26730)){
var statearr_26805_26867 = state_26777__$1;
(statearr_26805_26867[(1)] = (23));

} else {
var statearr_26806_26868 = state_26777__$1;
(statearr_26806_26868[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (36))){
var state_26777__$1 = state_26777;
var statearr_26807_26869 = state_26777__$1;
(statearr_26807_26869[(2)] = null);

(statearr_26807_26869[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (29))){
var inst_26745 = (state_26777[(29)]);
var inst_26748 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26745);
var inst_26749 = cljs.core.pr_str.call(null,inst_26748);
var inst_26750 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26749)].join('');
var inst_26751 = figwheel.client.utils.log.call(null,inst_26750);
var state_26777__$1 = state_26777;
var statearr_26808_26870 = state_26777__$1;
(statearr_26808_26870[(2)] = inst_26751);

(statearr_26808_26870[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (6))){
var inst_26698 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
var statearr_26809_26871 = state_26777__$1;
(statearr_26809_26871[(2)] = inst_26698);

(statearr_26809_26871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (28))){
var inst_26745 = (state_26777[(29)]);
var inst_26742 = (state_26777[(2)]);
var inst_26743 = cljs.core.get.call(null,inst_26742,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26744 = cljs.core.get.call(null,inst_26742,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_26745__$1 = cljs.core.get.call(null,inst_26742,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26746 = cljs.core.not_empty.call(null,inst_26745__$1);
var state_26777__$1 = (function (){var statearr_26810 = state_26777;
(statearr_26810[(29)] = inst_26745__$1);

(statearr_26810[(30)] = inst_26743);

(statearr_26810[(25)] = inst_26744);

return statearr_26810;
})();
if(cljs.core.truth_(inst_26746)){
var statearr_26811_26872 = state_26777__$1;
(statearr_26811_26872[(1)] = (29));

} else {
var statearr_26812_26873 = state_26777__$1;
(statearr_26812_26873[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (25))){
var inst_26775 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26777__$1,inst_26775);
} else {
if((state_val_26778 === (34))){
var inst_26743 = (state_26777[(30)]);
var inst_26763 = (state_26777[(2)]);
var inst_26764 = cljs.core.not_empty.call(null,inst_26743);
var state_26777__$1 = (function (){var statearr_26813 = state_26777;
(statearr_26813[(31)] = inst_26763);

return statearr_26813;
})();
if(cljs.core.truth_(inst_26764)){
var statearr_26814_26874 = state_26777__$1;
(statearr_26814_26874[(1)] = (35));

} else {
var statearr_26815_26875 = state_26777__$1;
(statearr_26815_26875[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (17))){
var inst_26703 = (state_26777[(24)]);
var state_26777__$1 = state_26777;
var statearr_26816_26876 = state_26777__$1;
(statearr_26816_26876[(2)] = inst_26703);

(statearr_26816_26876[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (3))){
var state_26777__$1 = state_26777;
var statearr_26817_26877 = state_26777__$1;
(statearr_26817_26877[(2)] = null);

(statearr_26817_26877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (12))){
var inst_26694 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
var statearr_26818_26878 = state_26777__$1;
(statearr_26818_26878[(2)] = inst_26694);

(statearr_26818_26878[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (2))){
var inst_26656 = (state_26777[(20)]);
var inst_26663 = cljs.core.seq.call(null,inst_26656);
var inst_26664 = inst_26663;
var inst_26665 = null;
var inst_26666 = (0);
var inst_26667 = (0);
var state_26777__$1 = (function (){var statearr_26819 = state_26777;
(statearr_26819[(7)] = inst_26664);

(statearr_26819[(8)] = inst_26665);

(statearr_26819[(9)] = inst_26667);

(statearr_26819[(10)] = inst_26666);

return statearr_26819;
})();
var statearr_26820_26879 = state_26777__$1;
(statearr_26820_26879[(2)] = null);

(statearr_26820_26879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (23))){
var inst_26714 = (state_26777[(12)]);
var inst_26710 = (state_26777[(13)]);
var inst_26709 = (state_26777[(14)]);
var inst_26716 = (state_26777[(15)]);
var inst_26713 = (state_26777[(16)]);
var inst_26736 = (state_26777[(19)]);
var inst_26732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26735 = (function (){var files_not_loaded = inst_26716;
var res = inst_26714;
var res_SINGLEQUOTE_ = inst_26713;
var files_SINGLEQUOTE_ = inst_26710;
var all_files = inst_26709;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26714,inst_26710,inst_26709,inst_26716,inst_26713,inst_26736,inst_26732,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files){
return (function (p__26734){
var map__26821 = p__26734;
var map__26821__$1 = ((cljs.core.seq_QMARK_.call(null,map__26821))?cljs.core.apply.call(null,cljs.core.hash_map,map__26821):map__26821);
var meta_data = cljs.core.get.call(null,map__26821__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26714,inst_26710,inst_26709,inst_26716,inst_26713,inst_26736,inst_26732,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files))
})();
var inst_26736__$1 = cljs.core.group_by.call(null,inst_26735,inst_26716);
var inst_26737 = cljs.core.seq_QMARK_.call(null,inst_26736__$1);
var state_26777__$1 = (function (){var statearr_26822 = state_26777;
(statearr_26822[(32)] = inst_26732);

(statearr_26822[(19)] = inst_26736__$1);

return statearr_26822;
})();
if(inst_26737){
var statearr_26823_26880 = state_26777__$1;
(statearr_26823_26880[(1)] = (26));

} else {
var statearr_26824_26881 = state_26777__$1;
(statearr_26824_26881[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (35))){
var inst_26743 = (state_26777[(30)]);
var inst_26766 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26743);
var inst_26767 = cljs.core.pr_str.call(null,inst_26766);
var inst_26768 = [cljs.core.str("not required: "),cljs.core.str(inst_26767)].join('');
var inst_26769 = figwheel.client.utils.log.call(null,inst_26768);
var state_26777__$1 = state_26777;
var statearr_26825_26882 = state_26777__$1;
(statearr_26825_26882[(2)] = inst_26769);

(statearr_26825_26882[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (19))){
var inst_26714 = (state_26777[(12)]);
var inst_26710 = (state_26777[(13)]);
var inst_26709 = (state_26777[(14)]);
var inst_26713 = (state_26777[(16)]);
var inst_26713__$1 = (state_26777[(2)]);
var inst_26714__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26713__$1);
var inst_26715 = (function (){var res = inst_26714__$1;
var res_SINGLEQUOTE_ = inst_26713__$1;
var files_SINGLEQUOTE_ = inst_26710;
var all_files = inst_26709;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26714,inst_26710,inst_26709,inst_26713,inst_26713__$1,inst_26714__$1,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files){
return (function (p1__26447_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26447_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26714,inst_26710,inst_26709,inst_26713,inst_26713__$1,inst_26714__$1,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files))
})();
var inst_26716 = cljs.core.filter.call(null,inst_26715,inst_26713__$1);
var inst_26717 = cljs.core.not_empty.call(null,inst_26714__$1);
var state_26777__$1 = (function (){var statearr_26826 = state_26777;
(statearr_26826[(12)] = inst_26714__$1);

(statearr_26826[(15)] = inst_26716);

(statearr_26826[(16)] = inst_26713__$1);

return statearr_26826;
})();
if(cljs.core.truth_(inst_26717)){
var statearr_26827_26883 = state_26777__$1;
(statearr_26827_26883[(1)] = (20));

} else {
var statearr_26828_26884 = state_26777__$1;
(statearr_26828_26884[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (11))){
var state_26777__$1 = state_26777;
var statearr_26829_26885 = state_26777__$1;
(statearr_26829_26885[(2)] = null);

(statearr_26829_26885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (9))){
var inst_26696 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
var statearr_26830_26886 = state_26777__$1;
(statearr_26830_26886[(2)] = inst_26696);

(statearr_26830_26886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (5))){
var inst_26667 = (state_26777[(9)]);
var inst_26666 = (state_26777[(10)]);
var inst_26669 = (inst_26667 < inst_26666);
var inst_26670 = inst_26669;
var state_26777__$1 = state_26777;
if(cljs.core.truth_(inst_26670)){
var statearr_26831_26887 = state_26777__$1;
(statearr_26831_26887[(1)] = (7));

} else {
var statearr_26832_26888 = state_26777__$1;
(statearr_26832_26888[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (14))){
var inst_26677 = (state_26777[(27)]);
var inst_26686 = cljs.core.first.call(null,inst_26677);
var inst_26687 = figwheel.client.file_reloading.eval_body.call(null,inst_26686);
var inst_26688 = cljs.core.next.call(null,inst_26677);
var inst_26664 = inst_26688;
var inst_26665 = null;
var inst_26666 = (0);
var inst_26667 = (0);
var state_26777__$1 = (function (){var statearr_26833 = state_26777;
(statearr_26833[(7)] = inst_26664);

(statearr_26833[(8)] = inst_26665);

(statearr_26833[(9)] = inst_26667);

(statearr_26833[(10)] = inst_26666);

(statearr_26833[(33)] = inst_26687);

return statearr_26833;
})();
var statearr_26834_26889 = state_26777__$1;
(statearr_26834_26889[(2)] = null);

(statearr_26834_26889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (26))){
var inst_26736 = (state_26777[(19)]);
var inst_26739 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26736);
var state_26777__$1 = state_26777;
var statearr_26835_26890 = state_26777__$1;
(statearr_26835_26890[(2)] = inst_26739);

(statearr_26835_26890[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (16))){
var inst_26703 = (state_26777[(24)]);
var inst_26705 = (function (){var all_files = inst_26703;
return ((function (all_files,inst_26703,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files){
return (function (p1__26446_SHARP_){
return cljs.core.update_in.call(null,p1__26446_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_26703,state_val_26778,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files))
})();
var inst_26706 = cljs.core.map.call(null,inst_26705,inst_26703);
var state_26777__$1 = state_26777;
var statearr_26836_26891 = state_26777__$1;
(statearr_26836_26891[(2)] = inst_26706);

(statearr_26836_26891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (30))){
var state_26777__$1 = state_26777;
var statearr_26837_26892 = state_26777__$1;
(statearr_26837_26892[(2)] = null);

(statearr_26837_26892[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (10))){
var inst_26677 = (state_26777[(27)]);
var inst_26679 = cljs.core.chunked_seq_QMARK_.call(null,inst_26677);
var state_26777__$1 = state_26777;
if(inst_26679){
var statearr_26838_26893 = state_26777__$1;
(statearr_26838_26893[(1)] = (13));

} else {
var statearr_26839_26894 = state_26777__$1;
(statearr_26839_26894[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (18))){
var inst_26710 = (state_26777[(13)]);
var inst_26709 = (state_26777[(14)]);
var inst_26709__$1 = (state_26777[(2)]);
var inst_26710__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_26709__$1);
var inst_26711 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26710__$1);
var state_26777__$1 = (function (){var statearr_26840 = state_26777;
(statearr_26840[(13)] = inst_26710__$1);

(statearr_26840[(14)] = inst_26709__$1);

return statearr_26840;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26777__$1,(19),inst_26711);
} else {
if((state_val_26778 === (37))){
var inst_26772 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
var statearr_26841_26895 = state_26777__$1;
(statearr_26841_26895[(2)] = inst_26772);

(statearr_26841_26895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (8))){
var inst_26664 = (state_26777[(7)]);
var inst_26677 = (state_26777[(27)]);
var inst_26677__$1 = cljs.core.seq.call(null,inst_26664);
var state_26777__$1 = (function (){var statearr_26842 = state_26777;
(statearr_26842[(27)] = inst_26677__$1);

return statearr_26842;
})();
if(inst_26677__$1){
var statearr_26843_26896 = state_26777__$1;
(statearr_26843_26896[(1)] = (10));

} else {
var statearr_26844_26897 = state_26777__$1;
(statearr_26844_26897[(1)] = (11));

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
});})(c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files))
;
return ((function (switch__21285__auto__,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto____0 = (function (){
var statearr_26848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26848[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto__);

(statearr_26848[(1)] = (1));

return statearr_26848;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto____1 = (function (state_26777){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_26777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e26849){if((e26849 instanceof Object)){
var ex__21289__auto__ = e26849;
var statearr_26850_26898 = state_26777;
(statearr_26850_26898[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26899 = state_26777;
state_26777 = G__26899;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto__ = function(state_26777){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto____1.call(this,state_26777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files))
})();
var state__21349__auto__ = (function (){var statearr_26851 = f__21348__auto__.call(null);
(statearr_26851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_26851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__,map__26651,map__26651__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26652,map__26652__$1,msg,files))
);

return c__21347__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26902,link){
var map__26904 = p__26902;
var map__26904__$1 = ((cljs.core.seq_QMARK_.call(null,map__26904))?cljs.core.apply.call(null,cljs.core.hash_map,map__26904):map__26904);
var file = cljs.core.get.call(null,map__26904__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__26904,map__26904__$1,file){
return (function (p1__26900_SHARP_,p2__26901_SHARP_){
if(cljs.core._EQ_.call(null,p1__26900_SHARP_,p2__26901_SHARP_)){
return p1__26900_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__26904,map__26904__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26908){
var map__26909 = p__26908;
var map__26909__$1 = ((cljs.core.seq_QMARK_.call(null,map__26909))?cljs.core.apply.call(null,cljs.core.hash_map,map__26909):map__26909);
var current_url_length = cljs.core.get.call(null,map__26909__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__26909__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26905_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26905_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__26911 = arguments.length;
switch (G__26911) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26913){
var map__26915 = p__26913;
var map__26915__$1 = ((cljs.core.seq_QMARK_.call(null,map__26915))?cljs.core.apply.call(null,cljs.core.hash_map,map__26915):map__26915);
var f_data = map__26915__$1;
var request_url = cljs.core.get.call(null,map__26915__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__26915__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18121__auto__ = request_url;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26916,files_msg){
var map__26938 = p__26916;
var map__26938__$1 = ((cljs.core.seq_QMARK_.call(null,map__26938))?cljs.core.apply.call(null,cljs.core.hash_map,map__26938):map__26938);
var opts = map__26938__$1;
var on_cssload = cljs.core.get.call(null,map__26938__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26939_26959 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26940_26960 = null;
var count__26941_26961 = (0);
var i__26942_26962 = (0);
while(true){
if((i__26942_26962 < count__26941_26961)){
var f_26963 = cljs.core._nth.call(null,chunk__26940_26960,i__26942_26962);
figwheel.client.file_reloading.reload_css_file.call(null,f_26963);

var G__26964 = seq__26939_26959;
var G__26965 = chunk__26940_26960;
var G__26966 = count__26941_26961;
var G__26967 = (i__26942_26962 + (1));
seq__26939_26959 = G__26964;
chunk__26940_26960 = G__26965;
count__26941_26961 = G__26966;
i__26942_26962 = G__26967;
continue;
} else {
var temp__4126__auto___26968 = cljs.core.seq.call(null,seq__26939_26959);
if(temp__4126__auto___26968){
var seq__26939_26969__$1 = temp__4126__auto___26968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26939_26969__$1)){
var c__18906__auto___26970 = cljs.core.chunk_first.call(null,seq__26939_26969__$1);
var G__26971 = cljs.core.chunk_rest.call(null,seq__26939_26969__$1);
var G__26972 = c__18906__auto___26970;
var G__26973 = cljs.core.count.call(null,c__18906__auto___26970);
var G__26974 = (0);
seq__26939_26959 = G__26971;
chunk__26940_26960 = G__26972;
count__26941_26961 = G__26973;
i__26942_26962 = G__26974;
continue;
} else {
var f_26975 = cljs.core.first.call(null,seq__26939_26969__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26975);

var G__26976 = cljs.core.next.call(null,seq__26939_26969__$1);
var G__26977 = null;
var G__26978 = (0);
var G__26979 = (0);
seq__26939_26959 = G__26976;
chunk__26940_26960 = G__26977;
count__26941_26961 = G__26978;
i__26942_26962 = G__26979;
continue;
}
} else {
}
}
break;
}

var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__,map__26938,map__26938__$1,opts,on_cssload){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__,map__26938,map__26938__$1,opts,on_cssload){
return (function (state_26949){
var state_val_26950 = (state_26949[(1)]);
if((state_val_26950 === (2))){
var inst_26945 = (state_26949[(2)]);
var inst_26946 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26947 = on_cssload.call(null,inst_26946);
var state_26949__$1 = (function (){var statearr_26951 = state_26949;
(statearr_26951[(7)] = inst_26945);

return statearr_26951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26949__$1,inst_26947);
} else {
if((state_val_26950 === (1))){
var inst_26943 = cljs.core.async.timeout.call(null,(100));
var state_26949__$1 = state_26949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26949__$1,(2),inst_26943);
} else {
return null;
}
}
});})(c__21347__auto__,map__26938,map__26938__$1,opts,on_cssload))
;
return ((function (switch__21285__auto__,c__21347__auto__,map__26938,map__26938__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto____0 = (function (){
var statearr_26955 = [null,null,null,null,null,null,null,null];
(statearr_26955[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto__);

(statearr_26955[(1)] = (1));

return statearr_26955;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto____1 = (function (state_26949){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_26949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e26956){if((e26956 instanceof Object)){
var ex__21289__auto__ = e26956;
var statearr_26957_26980 = state_26949;
(statearr_26957_26980[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26981 = state_26949;
state_26949 = G__26981;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto__ = function(state_26949){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto____1.call(this,state_26949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__,map__26938,map__26938__$1,opts,on_cssload))
})();
var state__21349__auto__ = (function (){var statearr_26958 = f__21348__auto__.call(null);
(statearr_26958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_26958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__,map__26938,map__26938__$1,opts,on_cssload))
);

return c__21347__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440531854238