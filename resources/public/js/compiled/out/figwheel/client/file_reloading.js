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
return cljs.core.reduce.call(null,(function (p1__26632_SHARP_,p2__26633_SHARP_){
var and__18109__auto__ = p1__26632_SHARP_;
if(cljs.core.truth_(and__18109__auto__)){
return p2__26633_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26634){
var map__26635 = p__26634;
var map__26635__$1 = ((cljs.core.seq_QMARK_.call(null,map__26635))?cljs.core.apply.call(null,cljs.core.hash_map,map__26635):map__26635);
var file = cljs.core.get.call(null,map__26635__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26636){
var map__26637 = p__26636;
var map__26637__$1 = ((cljs.core.seq_QMARK_.call(null,map__26637))?cljs.core.apply.call(null,cljs.core.hash_map,map__26637):map__26637);
var namespace = cljs.core.get.call(null,map__26637__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e26638){if((e26638 instanceof Error)){
var e = e26638;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26638;

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
var G__26640 = arguments.length;
switch (G__26640) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26642,callback){
var map__26644 = p__26642;
var map__26644__$1 = ((cljs.core.seq_QMARK_.call(null,map__26644))?cljs.core.apply.call(null,cljs.core.hash_map,map__26644):map__26644);
var file_msg = map__26644__$1;
var request_url = cljs.core.get.call(null,map__26644__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26644,map__26644__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26644,map__26644__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26645){
var map__26647 = p__26645;
var map__26647__$1 = ((cljs.core.seq_QMARK_.call(null,map__26647))?cljs.core.apply.call(null,cljs.core.hash_map,map__26647):map__26647);
var file_msg = map__26647__$1;
var meta_data = cljs.core.get.call(null,map__26647__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__26647__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26648,callback){
var map__26650 = p__26648;
var map__26650__$1 = ((cljs.core.seq_QMARK_.call(null,map__26650))?cljs.core.apply.call(null,cljs.core.hash_map,map__26650):map__26650);
var file_msg = map__26650__$1;
var namespace = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__21529__auto___26737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___26737,out){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___26737,out){
return (function (state_26719){
var state_val_26720 = (state_26719[(1)]);
if((state_val_26720 === (7))){
var inst_26703 = (state_26719[(7)]);
var inst_26709 = (state_26719[(2)]);
var inst_26710 = cljs.core.async.put_BANG_.call(null,out,inst_26709);
var inst_26699 = inst_26703;
var state_26719__$1 = (function (){var statearr_26721 = state_26719;
(statearr_26721[(8)] = inst_26710);

(statearr_26721[(9)] = inst_26699);

return statearr_26721;
})();
var statearr_26722_26738 = state_26719__$1;
(statearr_26722_26738[(2)] = null);

(statearr_26722_26738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26720 === (6))){
var inst_26715 = (state_26719[(2)]);
var state_26719__$1 = state_26719;
var statearr_26723_26739 = state_26719__$1;
(statearr_26723_26739[(2)] = inst_26715);

(statearr_26723_26739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26720 === (5))){
var inst_26713 = cljs.core.async.close_BANG_.call(null,out);
var state_26719__$1 = state_26719;
var statearr_26724_26740 = state_26719__$1;
(statearr_26724_26740[(2)] = inst_26713);

(statearr_26724_26740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26720 === (4))){
var inst_26702 = (state_26719[(10)]);
var inst_26707 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26702);
var state_26719__$1 = state_26719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26719__$1,(7),inst_26707);
} else {
if((state_val_26720 === (3))){
var inst_26717 = (state_26719[(2)]);
var state_26719__$1 = state_26719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26719__$1,inst_26717);
} else {
if((state_val_26720 === (2))){
var inst_26702 = (state_26719[(10)]);
var inst_26699 = (state_26719[(9)]);
var inst_26702__$1 = cljs.core.nth.call(null,inst_26699,(0),null);
var inst_26703 = cljs.core.nthnext.call(null,inst_26699,(1));
var inst_26704 = (inst_26702__$1 == null);
var inst_26705 = cljs.core.not.call(null,inst_26704);
var state_26719__$1 = (function (){var statearr_26725 = state_26719;
(statearr_26725[(10)] = inst_26702__$1);

(statearr_26725[(7)] = inst_26703);

return statearr_26725;
})();
if(inst_26705){
var statearr_26726_26741 = state_26719__$1;
(statearr_26726_26741[(1)] = (4));

} else {
var statearr_26727_26742 = state_26719__$1;
(statearr_26727_26742[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26720 === (1))){
var inst_26697 = cljs.core.nth.call(null,files,(0),null);
var inst_26698 = cljs.core.nthnext.call(null,files,(1));
var inst_26699 = files;
var state_26719__$1 = (function (){var statearr_26728 = state_26719;
(statearr_26728[(11)] = inst_26698);

(statearr_26728[(9)] = inst_26699);

(statearr_26728[(12)] = inst_26697);

return statearr_26728;
})();
var statearr_26729_26743 = state_26719__$1;
(statearr_26729_26743[(2)] = null);

(statearr_26729_26743[(1)] = (2));


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
});})(c__21529__auto___26737,out))
;
return ((function (switch__21467__auto__,c__21529__auto___26737,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21468__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21468__auto____0 = (function (){
var statearr_26733 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26733[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21468__auto__);

(statearr_26733[(1)] = (1));

return statearr_26733;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21468__auto____1 = (function (state_26719){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_26719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e26734){if((e26734 instanceof Object)){
var ex__21471__auto__ = e26734;
var statearr_26735_26744 = state_26719;
(statearr_26735_26744[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26745 = state_26719;
state_26719 = G__26745;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21468__auto__ = function(state_26719){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21468__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21468__auto____1.call(this,state_26719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21468__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21468__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___26737,out))
})();
var state__21531__auto__ = (function (){var statearr_26736 = f__21530__auto__.call(null);
(statearr_26736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___26737);

return statearr_26736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___26737,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__26746,p__26747){
var map__26750 = p__26746;
var map__26750__$1 = ((cljs.core.seq_QMARK_.call(null,map__26750))?cljs.core.apply.call(null,cljs.core.hash_map,map__26750):map__26750);
var opts = map__26750__$1;
var url_rewriter = cljs.core.get.call(null,map__26750__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26751 = p__26747;
var map__26751__$1 = ((cljs.core.seq_QMARK_.call(null,map__26751))?cljs.core.apply.call(null,cljs.core.hash_map,map__26751):map__26751);
var file_msg = map__26751__$1;
var file = cljs.core.get.call(null,map__26751__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26752){
var map__26755 = p__26752;
var map__26755__$1 = ((cljs.core.seq_QMARK_.call(null,map__26755))?cljs.core.apply.call(null,cljs.core.hash_map,map__26755):map__26755);
var file = cljs.core.get.call(null,map__26755__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__26755__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e26756){var e = e26756;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26761,p__26762){
var map__26964 = p__26761;
var map__26964__$1 = ((cljs.core.seq_QMARK_.call(null,map__26964))?cljs.core.apply.call(null,cljs.core.hash_map,map__26964):map__26964);
var opts = map__26964__$1;
var load_unchanged_files = cljs.core.get.call(null,map__26964__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__26964__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__26964__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__26965 = p__26762;
var map__26965__$1 = ((cljs.core.seq_QMARK_.call(null,map__26965))?cljs.core.apply.call(null,cljs.core.hash_map,map__26965):map__26965);
var msg = map__26965__$1;
var files = cljs.core.get.call(null,map__26965__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files){
return (function (state_27090){
var state_val_27091 = (state_27090[(1)]);
if((state_val_27091 === (7))){
var inst_26979 = (state_27090[(7)]);
var inst_26977 = (state_27090[(8)]);
var inst_26978 = (state_27090[(9)]);
var inst_26980 = (state_27090[(10)]);
var inst_26985 = cljs.core._nth.call(null,inst_26978,inst_26980);
var inst_26986 = figwheel.client.file_reloading.eval_body.call(null,inst_26985);
var inst_26987 = (inst_26980 + (1));
var tmp27092 = inst_26979;
var tmp27093 = inst_26977;
var tmp27094 = inst_26978;
var inst_26977__$1 = tmp27093;
var inst_26978__$1 = tmp27094;
var inst_26979__$1 = tmp27092;
var inst_26980__$1 = inst_26987;
var state_27090__$1 = (function (){var statearr_27095 = state_27090;
(statearr_27095[(7)] = inst_26979__$1);

(statearr_27095[(8)] = inst_26977__$1);

(statearr_27095[(9)] = inst_26978__$1);

(statearr_27095[(10)] = inst_26980__$1);

(statearr_27095[(11)] = inst_26986);

return statearr_27095;
})();
var statearr_27096_27165 = state_27090__$1;
(statearr_27096_27165[(2)] = null);

(statearr_27096_27165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (20))){
var inst_27023 = (state_27090[(12)]);
var inst_27026 = (state_27090[(13)]);
var inst_27027 = (state_27090[(14)]);
var inst_27029 = (state_27090[(15)]);
var inst_27022 = (state_27090[(16)]);
var inst_27032 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27034 = (function (){var files_not_loaded = inst_27029;
var res = inst_27027;
var res_SINGLEQUOTE_ = inst_27026;
var files_SINGLEQUOTE_ = inst_27023;
var all_files = inst_27022;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27023,inst_27026,inst_27027,inst_27029,inst_27022,inst_27032,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files){
return (function (p__27033){
var map__27097 = p__27033;
var map__27097__$1 = ((cljs.core.seq_QMARK_.call(null,map__27097))?cljs.core.apply.call(null,cljs.core.hash_map,map__27097):map__27097);
var file = cljs.core.get.call(null,map__27097__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__27097__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27023,inst_27026,inst_27027,inst_27029,inst_27022,inst_27032,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files))
})();
var inst_27035 = cljs.core.map.call(null,inst_27034,inst_27027);
var inst_27036 = cljs.core.pr_str.call(null,inst_27035);
var inst_27037 = figwheel.client.utils.log.call(null,inst_27036);
var inst_27038 = (function (){var files_not_loaded = inst_27029;
var res = inst_27027;
var res_SINGLEQUOTE_ = inst_27026;
var files_SINGLEQUOTE_ = inst_27023;
var all_files = inst_27022;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27023,inst_27026,inst_27027,inst_27029,inst_27022,inst_27032,inst_27034,inst_27035,inst_27036,inst_27037,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27023,inst_27026,inst_27027,inst_27029,inst_27022,inst_27032,inst_27034,inst_27035,inst_27036,inst_27037,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files))
})();
var inst_27039 = setTimeout(inst_27038,(10));
var state_27090__$1 = (function (){var statearr_27098 = state_27090;
(statearr_27098[(17)] = inst_27032);

(statearr_27098[(18)] = inst_27037);

return statearr_27098;
})();
var statearr_27099_27166 = state_27090__$1;
(statearr_27099_27166[(2)] = inst_27039);

(statearr_27099_27166[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (27))){
var inst_27049 = (state_27090[(19)]);
var state_27090__$1 = state_27090;
var statearr_27100_27167 = state_27090__$1;
(statearr_27100_27167[(2)] = inst_27049);

(statearr_27100_27167[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (1))){
var inst_26969 = (state_27090[(20)]);
var inst_26966 = before_jsload.call(null,files);
var inst_26967 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26968 = (function (){return ((function (inst_26969,inst_26966,inst_26967,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files){
return (function (p1__26757_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26757_SHARP_);
});
;})(inst_26969,inst_26966,inst_26967,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files))
})();
var inst_26969__$1 = cljs.core.filter.call(null,inst_26968,files);
var inst_26970 = cljs.core.not_empty.call(null,inst_26969__$1);
var state_27090__$1 = (function (){var statearr_27101 = state_27090;
(statearr_27101[(21)] = inst_26966);

(statearr_27101[(22)] = inst_26967);

(statearr_27101[(20)] = inst_26969__$1);

return statearr_27101;
})();
if(cljs.core.truth_(inst_26970)){
var statearr_27102_27168 = state_27090__$1;
(statearr_27102_27168[(1)] = (2));

} else {
var statearr_27103_27169 = state_27090__$1;
(statearr_27103_27169[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (24))){
var state_27090__$1 = state_27090;
var statearr_27104_27170 = state_27090__$1;
(statearr_27104_27170[(2)] = null);

(statearr_27104_27170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (4))){
var inst_27014 = (state_27090[(2)]);
var inst_27015 = (function (){return ((function (inst_27014,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files){
return (function (p1__26758_SHARP_){
var and__18109__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26758_SHARP_);
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26758_SHARP_));
} else {
return and__18109__auto__;
}
});
;})(inst_27014,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files))
})();
var inst_27016 = cljs.core.filter.call(null,inst_27015,files);
var state_27090__$1 = (function (){var statearr_27105 = state_27090;
(statearr_27105[(23)] = inst_27014);

(statearr_27105[(24)] = inst_27016);

return statearr_27105;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_27106_27171 = state_27090__$1;
(statearr_27106_27171[(1)] = (16));

} else {
var statearr_27107_27172 = state_27090__$1;
(statearr_27107_27172[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (15))){
var inst_27004 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
var statearr_27108_27173 = state_27090__$1;
(statearr_27108_27173[(2)] = inst_27004);

(statearr_27108_27173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (21))){
var state_27090__$1 = state_27090;
var statearr_27109_27174 = state_27090__$1;
(statearr_27109_27174[(2)] = null);

(statearr_27109_27174[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (31))){
var inst_27057 = (state_27090[(25)]);
var inst_27067 = (state_27090[(2)]);
var inst_27068 = cljs.core.not_empty.call(null,inst_27057);
var state_27090__$1 = (function (){var statearr_27110 = state_27090;
(statearr_27110[(26)] = inst_27067);

return statearr_27110;
})();
if(cljs.core.truth_(inst_27068)){
var statearr_27111_27175 = state_27090__$1;
(statearr_27111_27175[(1)] = (32));

} else {
var statearr_27112_27176 = state_27090__$1;
(statearr_27112_27176[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (32))){
var inst_27057 = (state_27090[(25)]);
var inst_27070 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27057);
var inst_27071 = cljs.core.pr_str.call(null,inst_27070);
var inst_27072 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_27071)].join('');
var inst_27073 = figwheel.client.utils.log.call(null,inst_27072);
var state_27090__$1 = state_27090;
var statearr_27113_27177 = state_27090__$1;
(statearr_27113_27177[(2)] = inst_27073);

(statearr_27113_27177[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (33))){
var state_27090__$1 = state_27090;
var statearr_27114_27178 = state_27090__$1;
(statearr_27114_27178[(2)] = null);

(statearr_27114_27178[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (13))){
var inst_26990 = (state_27090[(27)]);
var inst_26994 = cljs.core.chunk_first.call(null,inst_26990);
var inst_26995 = cljs.core.chunk_rest.call(null,inst_26990);
var inst_26996 = cljs.core.count.call(null,inst_26994);
var inst_26977 = inst_26995;
var inst_26978 = inst_26994;
var inst_26979 = inst_26996;
var inst_26980 = (0);
var state_27090__$1 = (function (){var statearr_27115 = state_27090;
(statearr_27115[(7)] = inst_26979);

(statearr_27115[(8)] = inst_26977);

(statearr_27115[(9)] = inst_26978);

(statearr_27115[(10)] = inst_26980);

return statearr_27115;
})();
var statearr_27116_27179 = state_27090__$1;
(statearr_27116_27179[(2)] = null);

(statearr_27116_27179[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (22))){
var inst_27029 = (state_27090[(15)]);
var inst_27042 = (state_27090[(2)]);
var inst_27043 = cljs.core.not_empty.call(null,inst_27029);
var state_27090__$1 = (function (){var statearr_27117 = state_27090;
(statearr_27117[(28)] = inst_27042);

return statearr_27117;
})();
if(cljs.core.truth_(inst_27043)){
var statearr_27118_27180 = state_27090__$1;
(statearr_27118_27180[(1)] = (23));

} else {
var statearr_27119_27181 = state_27090__$1;
(statearr_27119_27181[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (36))){
var state_27090__$1 = state_27090;
var statearr_27120_27182 = state_27090__$1;
(statearr_27120_27182[(2)] = null);

(statearr_27120_27182[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (29))){
var inst_27058 = (state_27090[(29)]);
var inst_27061 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27058);
var inst_27062 = cljs.core.pr_str.call(null,inst_27061);
var inst_27063 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27062)].join('');
var inst_27064 = figwheel.client.utils.log.call(null,inst_27063);
var state_27090__$1 = state_27090;
var statearr_27121_27183 = state_27090__$1;
(statearr_27121_27183[(2)] = inst_27064);

(statearr_27121_27183[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (6))){
var inst_27011 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
var statearr_27122_27184 = state_27090__$1;
(statearr_27122_27184[(2)] = inst_27011);

(statearr_27122_27184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (28))){
var inst_27058 = (state_27090[(29)]);
var inst_27055 = (state_27090[(2)]);
var inst_27056 = cljs.core.get.call(null,inst_27055,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27057 = cljs.core.get.call(null,inst_27055,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_27058__$1 = cljs.core.get.call(null,inst_27055,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27059 = cljs.core.not_empty.call(null,inst_27058__$1);
var state_27090__$1 = (function (){var statearr_27123 = state_27090;
(statearr_27123[(29)] = inst_27058__$1);

(statearr_27123[(30)] = inst_27056);

(statearr_27123[(25)] = inst_27057);

return statearr_27123;
})();
if(cljs.core.truth_(inst_27059)){
var statearr_27124_27185 = state_27090__$1;
(statearr_27124_27185[(1)] = (29));

} else {
var statearr_27125_27186 = state_27090__$1;
(statearr_27125_27186[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (25))){
var inst_27088 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27090__$1,inst_27088);
} else {
if((state_val_27091 === (34))){
var inst_27056 = (state_27090[(30)]);
var inst_27076 = (state_27090[(2)]);
var inst_27077 = cljs.core.not_empty.call(null,inst_27056);
var state_27090__$1 = (function (){var statearr_27126 = state_27090;
(statearr_27126[(31)] = inst_27076);

return statearr_27126;
})();
if(cljs.core.truth_(inst_27077)){
var statearr_27127_27187 = state_27090__$1;
(statearr_27127_27187[(1)] = (35));

} else {
var statearr_27128_27188 = state_27090__$1;
(statearr_27128_27188[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (17))){
var inst_27016 = (state_27090[(24)]);
var state_27090__$1 = state_27090;
var statearr_27129_27189 = state_27090__$1;
(statearr_27129_27189[(2)] = inst_27016);

(statearr_27129_27189[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (3))){
var state_27090__$1 = state_27090;
var statearr_27130_27190 = state_27090__$1;
(statearr_27130_27190[(2)] = null);

(statearr_27130_27190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (12))){
var inst_27007 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
var statearr_27131_27191 = state_27090__$1;
(statearr_27131_27191[(2)] = inst_27007);

(statearr_27131_27191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (2))){
var inst_26969 = (state_27090[(20)]);
var inst_26976 = cljs.core.seq.call(null,inst_26969);
var inst_26977 = inst_26976;
var inst_26978 = null;
var inst_26979 = (0);
var inst_26980 = (0);
var state_27090__$1 = (function (){var statearr_27132 = state_27090;
(statearr_27132[(7)] = inst_26979);

(statearr_27132[(8)] = inst_26977);

(statearr_27132[(9)] = inst_26978);

(statearr_27132[(10)] = inst_26980);

return statearr_27132;
})();
var statearr_27133_27192 = state_27090__$1;
(statearr_27133_27192[(2)] = null);

(statearr_27133_27192[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (23))){
var inst_27023 = (state_27090[(12)]);
var inst_27026 = (state_27090[(13)]);
var inst_27027 = (state_27090[(14)]);
var inst_27029 = (state_27090[(15)]);
var inst_27022 = (state_27090[(16)]);
var inst_27049 = (state_27090[(19)]);
var inst_27045 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27048 = (function (){var files_not_loaded = inst_27029;
var res = inst_27027;
var res_SINGLEQUOTE_ = inst_27026;
var files_SINGLEQUOTE_ = inst_27023;
var all_files = inst_27022;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27023,inst_27026,inst_27027,inst_27029,inst_27022,inst_27049,inst_27045,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files){
return (function (p__27047){
var map__27134 = p__27047;
var map__27134__$1 = ((cljs.core.seq_QMARK_.call(null,map__27134))?cljs.core.apply.call(null,cljs.core.hash_map,map__27134):map__27134);
var meta_data = cljs.core.get.call(null,map__27134__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27023,inst_27026,inst_27027,inst_27029,inst_27022,inst_27049,inst_27045,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files))
})();
var inst_27049__$1 = cljs.core.group_by.call(null,inst_27048,inst_27029);
var inst_27050 = cljs.core.seq_QMARK_.call(null,inst_27049__$1);
var state_27090__$1 = (function (){var statearr_27135 = state_27090;
(statearr_27135[(32)] = inst_27045);

(statearr_27135[(19)] = inst_27049__$1);

return statearr_27135;
})();
if(inst_27050){
var statearr_27136_27193 = state_27090__$1;
(statearr_27136_27193[(1)] = (26));

} else {
var statearr_27137_27194 = state_27090__$1;
(statearr_27137_27194[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (35))){
var inst_27056 = (state_27090[(30)]);
var inst_27079 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27056);
var inst_27080 = cljs.core.pr_str.call(null,inst_27079);
var inst_27081 = [cljs.core.str("not required: "),cljs.core.str(inst_27080)].join('');
var inst_27082 = figwheel.client.utils.log.call(null,inst_27081);
var state_27090__$1 = state_27090;
var statearr_27138_27195 = state_27090__$1;
(statearr_27138_27195[(2)] = inst_27082);

(statearr_27138_27195[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (19))){
var inst_27023 = (state_27090[(12)]);
var inst_27026 = (state_27090[(13)]);
var inst_27027 = (state_27090[(14)]);
var inst_27022 = (state_27090[(16)]);
var inst_27026__$1 = (state_27090[(2)]);
var inst_27027__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27026__$1);
var inst_27028 = (function (){var res = inst_27027__$1;
var res_SINGLEQUOTE_ = inst_27026__$1;
var files_SINGLEQUOTE_ = inst_27023;
var all_files = inst_27022;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27023,inst_27026,inst_27027,inst_27022,inst_27026__$1,inst_27027__$1,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files){
return (function (p1__26760_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26760_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27023,inst_27026,inst_27027,inst_27022,inst_27026__$1,inst_27027__$1,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files))
})();
var inst_27029 = cljs.core.filter.call(null,inst_27028,inst_27026__$1);
var inst_27030 = cljs.core.not_empty.call(null,inst_27027__$1);
var state_27090__$1 = (function (){var statearr_27139 = state_27090;
(statearr_27139[(13)] = inst_27026__$1);

(statearr_27139[(14)] = inst_27027__$1);

(statearr_27139[(15)] = inst_27029);

return statearr_27139;
})();
if(cljs.core.truth_(inst_27030)){
var statearr_27140_27196 = state_27090__$1;
(statearr_27140_27196[(1)] = (20));

} else {
var statearr_27141_27197 = state_27090__$1;
(statearr_27141_27197[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (11))){
var state_27090__$1 = state_27090;
var statearr_27142_27198 = state_27090__$1;
(statearr_27142_27198[(2)] = null);

(statearr_27142_27198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (9))){
var inst_27009 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
var statearr_27143_27199 = state_27090__$1;
(statearr_27143_27199[(2)] = inst_27009);

(statearr_27143_27199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (5))){
var inst_26979 = (state_27090[(7)]);
var inst_26980 = (state_27090[(10)]);
var inst_26982 = (inst_26980 < inst_26979);
var inst_26983 = inst_26982;
var state_27090__$1 = state_27090;
if(cljs.core.truth_(inst_26983)){
var statearr_27144_27200 = state_27090__$1;
(statearr_27144_27200[(1)] = (7));

} else {
var statearr_27145_27201 = state_27090__$1;
(statearr_27145_27201[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (14))){
var inst_26990 = (state_27090[(27)]);
var inst_26999 = cljs.core.first.call(null,inst_26990);
var inst_27000 = figwheel.client.file_reloading.eval_body.call(null,inst_26999);
var inst_27001 = cljs.core.next.call(null,inst_26990);
var inst_26977 = inst_27001;
var inst_26978 = null;
var inst_26979 = (0);
var inst_26980 = (0);
var state_27090__$1 = (function (){var statearr_27146 = state_27090;
(statearr_27146[(7)] = inst_26979);

(statearr_27146[(8)] = inst_26977);

(statearr_27146[(33)] = inst_27000);

(statearr_27146[(9)] = inst_26978);

(statearr_27146[(10)] = inst_26980);

return statearr_27146;
})();
var statearr_27147_27202 = state_27090__$1;
(statearr_27147_27202[(2)] = null);

(statearr_27147_27202[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (26))){
var inst_27049 = (state_27090[(19)]);
var inst_27052 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27049);
var state_27090__$1 = state_27090;
var statearr_27148_27203 = state_27090__$1;
(statearr_27148_27203[(2)] = inst_27052);

(statearr_27148_27203[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (16))){
var inst_27016 = (state_27090[(24)]);
var inst_27018 = (function (){var all_files = inst_27016;
return ((function (all_files,inst_27016,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files){
return (function (p1__26759_SHARP_){
return cljs.core.update_in.call(null,p1__26759_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_27016,state_val_27091,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files))
})();
var inst_27019 = cljs.core.map.call(null,inst_27018,inst_27016);
var state_27090__$1 = state_27090;
var statearr_27149_27204 = state_27090__$1;
(statearr_27149_27204[(2)] = inst_27019);

(statearr_27149_27204[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (30))){
var state_27090__$1 = state_27090;
var statearr_27150_27205 = state_27090__$1;
(statearr_27150_27205[(2)] = null);

(statearr_27150_27205[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (10))){
var inst_26990 = (state_27090[(27)]);
var inst_26992 = cljs.core.chunked_seq_QMARK_.call(null,inst_26990);
var state_27090__$1 = state_27090;
if(inst_26992){
var statearr_27151_27206 = state_27090__$1;
(statearr_27151_27206[(1)] = (13));

} else {
var statearr_27152_27207 = state_27090__$1;
(statearr_27152_27207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (18))){
var inst_27023 = (state_27090[(12)]);
var inst_27022 = (state_27090[(16)]);
var inst_27022__$1 = (state_27090[(2)]);
var inst_27023__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_27022__$1);
var inst_27024 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27023__$1);
var state_27090__$1 = (function (){var statearr_27153 = state_27090;
(statearr_27153[(12)] = inst_27023__$1);

(statearr_27153[(16)] = inst_27022__$1);

return statearr_27153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27090__$1,(19),inst_27024);
} else {
if((state_val_27091 === (37))){
var inst_27085 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
var statearr_27154_27208 = state_27090__$1;
(statearr_27154_27208[(2)] = inst_27085);

(statearr_27154_27208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (8))){
var inst_26977 = (state_27090[(8)]);
var inst_26990 = (state_27090[(27)]);
var inst_26990__$1 = cljs.core.seq.call(null,inst_26977);
var state_27090__$1 = (function (){var statearr_27155 = state_27090;
(statearr_27155[(27)] = inst_26990__$1);

return statearr_27155;
})();
if(inst_26990__$1){
var statearr_27156_27209 = state_27090__$1;
(statearr_27156_27209[(1)] = (10));

} else {
var statearr_27157_27210 = state_27090__$1;
(statearr_27157_27210[(1)] = (11));

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
});})(c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files))
;
return ((function (switch__21467__auto__,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21468__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21468__auto____0 = (function (){
var statearr_27161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27161[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21468__auto__);

(statearr_27161[(1)] = (1));

return statearr_27161;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21468__auto____1 = (function (state_27090){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_27090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e27162){if((e27162 instanceof Object)){
var ex__21471__auto__ = e27162;
var statearr_27163_27211 = state_27090;
(statearr_27163_27211[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27212 = state_27090;
state_27090 = G__27212;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21468__auto__ = function(state_27090){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21468__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21468__auto____1.call(this,state_27090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21468__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21468__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files))
})();
var state__21531__auto__ = (function (){var statearr_27164 = f__21530__auto__.call(null);
(statearr_27164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto__);

return statearr_27164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto__,map__26964,map__26964__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26965,map__26965__$1,msg,files))
);

return c__21529__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27215,link){
var map__27217 = p__27215;
var map__27217__$1 = ((cljs.core.seq_QMARK_.call(null,map__27217))?cljs.core.apply.call(null,cljs.core.hash_map,map__27217):map__27217);
var file = cljs.core.get.call(null,map__27217__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__27217,map__27217__$1,file){
return (function (p1__27213_SHARP_,p2__27214_SHARP_){
if(cljs.core._EQ_.call(null,p1__27213_SHARP_,p2__27214_SHARP_)){
return p1__27213_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__27217,map__27217__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27221){
var map__27222 = p__27221;
var map__27222__$1 = ((cljs.core.seq_QMARK_.call(null,map__27222))?cljs.core.apply.call(null,cljs.core.hash_map,map__27222):map__27222);
var current_url_length = cljs.core.get.call(null,map__27222__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__27222__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27218_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27218_SHARP_);
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
var G__27224 = arguments.length;
switch (G__27224) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27226){
var map__27228 = p__27226;
var map__27228__$1 = ((cljs.core.seq_QMARK_.call(null,map__27228))?cljs.core.apply.call(null,cljs.core.hash_map,map__27228):map__27228);
var f_data = map__27228__$1;
var request_url = cljs.core.get.call(null,map__27228__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__27228__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27229,files_msg){
var map__27251 = p__27229;
var map__27251__$1 = ((cljs.core.seq_QMARK_.call(null,map__27251))?cljs.core.apply.call(null,cljs.core.hash_map,map__27251):map__27251);
var opts = map__27251__$1;
var on_cssload = cljs.core.get.call(null,map__27251__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27252_27272 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27253_27273 = null;
var count__27254_27274 = (0);
var i__27255_27275 = (0);
while(true){
if((i__27255_27275 < count__27254_27274)){
var f_27276 = cljs.core._nth.call(null,chunk__27253_27273,i__27255_27275);
figwheel.client.file_reloading.reload_css_file.call(null,f_27276);

var G__27277 = seq__27252_27272;
var G__27278 = chunk__27253_27273;
var G__27279 = count__27254_27274;
var G__27280 = (i__27255_27275 + (1));
seq__27252_27272 = G__27277;
chunk__27253_27273 = G__27278;
count__27254_27274 = G__27279;
i__27255_27275 = G__27280;
continue;
} else {
var temp__4126__auto___27281 = cljs.core.seq.call(null,seq__27252_27272);
if(temp__4126__auto___27281){
var seq__27252_27282__$1 = temp__4126__auto___27281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27252_27282__$1)){
var c__18906__auto___27283 = cljs.core.chunk_first.call(null,seq__27252_27282__$1);
var G__27284 = cljs.core.chunk_rest.call(null,seq__27252_27282__$1);
var G__27285 = c__18906__auto___27283;
var G__27286 = cljs.core.count.call(null,c__18906__auto___27283);
var G__27287 = (0);
seq__27252_27272 = G__27284;
chunk__27253_27273 = G__27285;
count__27254_27274 = G__27286;
i__27255_27275 = G__27287;
continue;
} else {
var f_27288 = cljs.core.first.call(null,seq__27252_27282__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27288);

var G__27289 = cljs.core.next.call(null,seq__27252_27282__$1);
var G__27290 = null;
var G__27291 = (0);
var G__27292 = (0);
seq__27252_27272 = G__27289;
chunk__27253_27273 = G__27290;
count__27254_27274 = G__27291;
i__27255_27275 = G__27292;
continue;
}
} else {
}
}
break;
}

var c__21529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto__,map__27251,map__27251__$1,opts,on_cssload){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto__,map__27251,map__27251__$1,opts,on_cssload){
return (function (state_27262){
var state_val_27263 = (state_27262[(1)]);
if((state_val_27263 === (2))){
var inst_27258 = (state_27262[(2)]);
var inst_27259 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_27260 = on_cssload.call(null,inst_27259);
var state_27262__$1 = (function (){var statearr_27264 = state_27262;
(statearr_27264[(7)] = inst_27258);

return statearr_27264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27262__$1,inst_27260);
} else {
if((state_val_27263 === (1))){
var inst_27256 = cljs.core.async.timeout.call(null,(100));
var state_27262__$1 = state_27262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27262__$1,(2),inst_27256);
} else {
return null;
}
}
});})(c__21529__auto__,map__27251,map__27251__$1,opts,on_cssload))
;
return ((function (switch__21467__auto__,c__21529__auto__,map__27251,map__27251__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21468__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21468__auto____0 = (function (){
var statearr_27268 = [null,null,null,null,null,null,null,null];
(statearr_27268[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21468__auto__);

(statearr_27268[(1)] = (1));

return statearr_27268;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21468__auto____1 = (function (state_27262){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_27262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e27269){if((e27269 instanceof Object)){
var ex__21471__auto__ = e27269;
var statearr_27270_27293 = state_27262;
(statearr_27270_27293[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27294 = state_27262;
state_27262 = G__27294;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21468__auto__ = function(state_27262){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21468__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21468__auto____1.call(this,state_27262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21468__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21468__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto__,map__27251,map__27251__$1,opts,on_cssload))
})();
var state__21531__auto__ = (function (){var statearr_27271 = f__21530__auto__.call(null);
(statearr_27271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto__);

return statearr_27271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto__,map__27251,map__27251__$1,opts,on_cssload))
);

return c__21529__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440697838628