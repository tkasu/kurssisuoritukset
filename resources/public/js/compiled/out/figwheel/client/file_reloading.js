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
return cljs.core.reduce.call(null,(function (p1__26638_SHARP_,p2__26639_SHARP_){
var and__18109__auto__ = p1__26638_SHARP_;
if(cljs.core.truth_(and__18109__auto__)){
return p2__26639_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26640){
var map__26641 = p__26640;
var map__26641__$1 = ((cljs.core.seq_QMARK_.call(null,map__26641))?cljs.core.apply.call(null,cljs.core.hash_map,map__26641):map__26641);
var file = cljs.core.get.call(null,map__26641__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26642){
var map__26643 = p__26642;
var map__26643__$1 = ((cljs.core.seq_QMARK_.call(null,map__26643))?cljs.core.apply.call(null,cljs.core.hash_map,map__26643):map__26643);
var namespace = cljs.core.get.call(null,map__26643__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e26644){if((e26644 instanceof Error)){
var e = e26644;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26644;

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
var G__26646 = arguments.length;
switch (G__26646) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26648,callback){
var map__26650 = p__26648;
var map__26650__$1 = ((cljs.core.seq_QMARK_.call(null,map__26650))?cljs.core.apply.call(null,cljs.core.hash_map,map__26650):map__26650);
var file_msg = map__26650__$1;
var request_url = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26650,map__26650__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26650,map__26650__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26651){
var map__26653 = p__26651;
var map__26653__$1 = ((cljs.core.seq_QMARK_.call(null,map__26653))?cljs.core.apply.call(null,cljs.core.hash_map,map__26653):map__26653);
var file_msg = map__26653__$1;
var meta_data = cljs.core.get.call(null,map__26653__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__26653__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26654,callback){
var map__26656 = p__26654;
var map__26656__$1 = ((cljs.core.seq_QMARK_.call(null,map__26656))?cljs.core.apply.call(null,cljs.core.hash_map,map__26656):map__26656);
var file_msg = map__26656__$1;
var namespace = cljs.core.get.call(null,map__26656__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__26656__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__21535__auto___26743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___26743,out){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___26743,out){
return (function (state_26725){
var state_val_26726 = (state_26725[(1)]);
if((state_val_26726 === (7))){
var inst_26709 = (state_26725[(7)]);
var inst_26715 = (state_26725[(2)]);
var inst_26716 = cljs.core.async.put_BANG_.call(null,out,inst_26715);
var inst_26705 = inst_26709;
var state_26725__$1 = (function (){var statearr_26727 = state_26725;
(statearr_26727[(8)] = inst_26716);

(statearr_26727[(9)] = inst_26705);

return statearr_26727;
})();
var statearr_26728_26744 = state_26725__$1;
(statearr_26728_26744[(2)] = null);

(statearr_26728_26744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (6))){
var inst_26721 = (state_26725[(2)]);
var state_26725__$1 = state_26725;
var statearr_26729_26745 = state_26725__$1;
(statearr_26729_26745[(2)] = inst_26721);

(statearr_26729_26745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (5))){
var inst_26719 = cljs.core.async.close_BANG_.call(null,out);
var state_26725__$1 = state_26725;
var statearr_26730_26746 = state_26725__$1;
(statearr_26730_26746[(2)] = inst_26719);

(statearr_26730_26746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (4))){
var inst_26708 = (state_26725[(10)]);
var inst_26713 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26708);
var state_26725__$1 = state_26725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26725__$1,(7),inst_26713);
} else {
if((state_val_26726 === (3))){
var inst_26723 = (state_26725[(2)]);
var state_26725__$1 = state_26725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26725__$1,inst_26723);
} else {
if((state_val_26726 === (2))){
var inst_26708 = (state_26725[(10)]);
var inst_26705 = (state_26725[(9)]);
var inst_26708__$1 = cljs.core.nth.call(null,inst_26705,(0),null);
var inst_26709 = cljs.core.nthnext.call(null,inst_26705,(1));
var inst_26710 = (inst_26708__$1 == null);
var inst_26711 = cljs.core.not.call(null,inst_26710);
var state_26725__$1 = (function (){var statearr_26731 = state_26725;
(statearr_26731[(10)] = inst_26708__$1);

(statearr_26731[(7)] = inst_26709);

return statearr_26731;
})();
if(inst_26711){
var statearr_26732_26747 = state_26725__$1;
(statearr_26732_26747[(1)] = (4));

} else {
var statearr_26733_26748 = state_26725__$1;
(statearr_26733_26748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (1))){
var inst_26703 = cljs.core.nth.call(null,files,(0),null);
var inst_26704 = cljs.core.nthnext.call(null,files,(1));
var inst_26705 = files;
var state_26725__$1 = (function (){var statearr_26734 = state_26725;
(statearr_26734[(11)] = inst_26703);

(statearr_26734[(9)] = inst_26705);

(statearr_26734[(12)] = inst_26704);

return statearr_26734;
})();
var statearr_26735_26749 = state_26725__$1;
(statearr_26735_26749[(2)] = null);

(statearr_26735_26749[(1)] = (2));


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
});})(c__21535__auto___26743,out))
;
return ((function (switch__21473__auto__,c__21535__auto___26743,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21474__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21474__auto____0 = (function (){
var statearr_26739 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26739[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21474__auto__);

(statearr_26739[(1)] = (1));

return statearr_26739;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21474__auto____1 = (function (state_26725){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_26725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e26740){if((e26740 instanceof Object)){
var ex__21477__auto__ = e26740;
var statearr_26741_26750 = state_26725;
(statearr_26741_26750[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26751 = state_26725;
state_26725 = G__26751;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21474__auto__ = function(state_26725){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21474__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21474__auto____1.call(this,state_26725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21474__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21474__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___26743,out))
})();
var state__21537__auto__ = (function (){var statearr_26742 = f__21536__auto__.call(null);
(statearr_26742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___26743);

return statearr_26742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___26743,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__26752,p__26753){
var map__26756 = p__26752;
var map__26756__$1 = ((cljs.core.seq_QMARK_.call(null,map__26756))?cljs.core.apply.call(null,cljs.core.hash_map,map__26756):map__26756);
var opts = map__26756__$1;
var url_rewriter = cljs.core.get.call(null,map__26756__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26757 = p__26753;
var map__26757__$1 = ((cljs.core.seq_QMARK_.call(null,map__26757))?cljs.core.apply.call(null,cljs.core.hash_map,map__26757):map__26757);
var file_msg = map__26757__$1;
var file = cljs.core.get.call(null,map__26757__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26758){
var map__26761 = p__26758;
var map__26761__$1 = ((cljs.core.seq_QMARK_.call(null,map__26761))?cljs.core.apply.call(null,cljs.core.hash_map,map__26761):map__26761);
var file = cljs.core.get.call(null,map__26761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__26761__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e26762){var e = e26762;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26767,p__26768){
var map__26970 = p__26767;
var map__26970__$1 = ((cljs.core.seq_QMARK_.call(null,map__26970))?cljs.core.apply.call(null,cljs.core.hash_map,map__26970):map__26970);
var opts = map__26970__$1;
var load_unchanged_files = cljs.core.get.call(null,map__26970__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__26970__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__26970__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__26971 = p__26768;
var map__26971__$1 = ((cljs.core.seq_QMARK_.call(null,map__26971))?cljs.core.apply.call(null,cljs.core.hash_map,map__26971):map__26971);
var msg = map__26971__$1;
var files = cljs.core.get.call(null,map__26971__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files){
return (function (state_27096){
var state_val_27097 = (state_27096[(1)]);
if((state_val_27097 === (7))){
var inst_26984 = (state_27096[(7)]);
var inst_26983 = (state_27096[(8)]);
var inst_26985 = (state_27096[(9)]);
var inst_26986 = (state_27096[(10)]);
var inst_26991 = cljs.core._nth.call(null,inst_26984,inst_26986);
var inst_26992 = figwheel.client.file_reloading.eval_body.call(null,inst_26991);
var inst_26993 = (inst_26986 + (1));
var tmp27098 = inst_26984;
var tmp27099 = inst_26983;
var tmp27100 = inst_26985;
var inst_26983__$1 = tmp27099;
var inst_26984__$1 = tmp27098;
var inst_26985__$1 = tmp27100;
var inst_26986__$1 = inst_26993;
var state_27096__$1 = (function (){var statearr_27101 = state_27096;
(statearr_27101[(7)] = inst_26984__$1);

(statearr_27101[(11)] = inst_26992);

(statearr_27101[(8)] = inst_26983__$1);

(statearr_27101[(9)] = inst_26985__$1);

(statearr_27101[(10)] = inst_26986__$1);

return statearr_27101;
})();
var statearr_27102_27171 = state_27096__$1;
(statearr_27102_27171[(2)] = null);

(statearr_27102_27171[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (20))){
var inst_27032 = (state_27096[(12)]);
var inst_27035 = (state_27096[(13)]);
var inst_27028 = (state_27096[(14)]);
var inst_27029 = (state_27096[(15)]);
var inst_27033 = (state_27096[(16)]);
var inst_27038 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27040 = (function (){var files_not_loaded = inst_27035;
var res = inst_27033;
var res_SINGLEQUOTE_ = inst_27032;
var files_SINGLEQUOTE_ = inst_27029;
var all_files = inst_27028;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27032,inst_27035,inst_27028,inst_27029,inst_27033,inst_27038,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files){
return (function (p__27039){
var map__27103 = p__27039;
var map__27103__$1 = ((cljs.core.seq_QMARK_.call(null,map__27103))?cljs.core.apply.call(null,cljs.core.hash_map,map__27103):map__27103);
var file = cljs.core.get.call(null,map__27103__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__27103__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27032,inst_27035,inst_27028,inst_27029,inst_27033,inst_27038,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files))
})();
var inst_27041 = cljs.core.map.call(null,inst_27040,inst_27033);
var inst_27042 = cljs.core.pr_str.call(null,inst_27041);
var inst_27043 = figwheel.client.utils.log.call(null,inst_27042);
var inst_27044 = (function (){var files_not_loaded = inst_27035;
var res = inst_27033;
var res_SINGLEQUOTE_ = inst_27032;
var files_SINGLEQUOTE_ = inst_27029;
var all_files = inst_27028;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27032,inst_27035,inst_27028,inst_27029,inst_27033,inst_27038,inst_27040,inst_27041,inst_27042,inst_27043,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27032,inst_27035,inst_27028,inst_27029,inst_27033,inst_27038,inst_27040,inst_27041,inst_27042,inst_27043,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files))
})();
var inst_27045 = setTimeout(inst_27044,(10));
var state_27096__$1 = (function (){var statearr_27104 = state_27096;
(statearr_27104[(17)] = inst_27038);

(statearr_27104[(18)] = inst_27043);

return statearr_27104;
})();
var statearr_27105_27172 = state_27096__$1;
(statearr_27105_27172[(2)] = inst_27045);

(statearr_27105_27172[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (27))){
var inst_27055 = (state_27096[(19)]);
var state_27096__$1 = state_27096;
var statearr_27106_27173 = state_27096__$1;
(statearr_27106_27173[(2)] = inst_27055);

(statearr_27106_27173[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (1))){
var inst_26975 = (state_27096[(20)]);
var inst_26972 = before_jsload.call(null,files);
var inst_26973 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26974 = (function (){return ((function (inst_26975,inst_26972,inst_26973,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files){
return (function (p1__26763_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26763_SHARP_);
});
;})(inst_26975,inst_26972,inst_26973,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files))
})();
var inst_26975__$1 = cljs.core.filter.call(null,inst_26974,files);
var inst_26976 = cljs.core.not_empty.call(null,inst_26975__$1);
var state_27096__$1 = (function (){var statearr_27107 = state_27096;
(statearr_27107[(20)] = inst_26975__$1);

(statearr_27107[(21)] = inst_26973);

(statearr_27107[(22)] = inst_26972);

return statearr_27107;
})();
if(cljs.core.truth_(inst_26976)){
var statearr_27108_27174 = state_27096__$1;
(statearr_27108_27174[(1)] = (2));

} else {
var statearr_27109_27175 = state_27096__$1;
(statearr_27109_27175[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (24))){
var state_27096__$1 = state_27096;
var statearr_27110_27176 = state_27096__$1;
(statearr_27110_27176[(2)] = null);

(statearr_27110_27176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (4))){
var inst_27020 = (state_27096[(2)]);
var inst_27021 = (function (){return ((function (inst_27020,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files){
return (function (p1__26764_SHARP_){
var and__18109__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26764_SHARP_);
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26764_SHARP_));
} else {
return and__18109__auto__;
}
});
;})(inst_27020,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files))
})();
var inst_27022 = cljs.core.filter.call(null,inst_27021,files);
var state_27096__$1 = (function (){var statearr_27111 = state_27096;
(statearr_27111[(23)] = inst_27022);

(statearr_27111[(24)] = inst_27020);

return statearr_27111;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_27112_27177 = state_27096__$1;
(statearr_27112_27177[(1)] = (16));

} else {
var statearr_27113_27178 = state_27096__$1;
(statearr_27113_27178[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (15))){
var inst_27010 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27114_27179 = state_27096__$1;
(statearr_27114_27179[(2)] = inst_27010);

(statearr_27114_27179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (21))){
var state_27096__$1 = state_27096;
var statearr_27115_27180 = state_27096__$1;
(statearr_27115_27180[(2)] = null);

(statearr_27115_27180[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (31))){
var inst_27063 = (state_27096[(25)]);
var inst_27073 = (state_27096[(2)]);
var inst_27074 = cljs.core.not_empty.call(null,inst_27063);
var state_27096__$1 = (function (){var statearr_27116 = state_27096;
(statearr_27116[(26)] = inst_27073);

return statearr_27116;
})();
if(cljs.core.truth_(inst_27074)){
var statearr_27117_27181 = state_27096__$1;
(statearr_27117_27181[(1)] = (32));

} else {
var statearr_27118_27182 = state_27096__$1;
(statearr_27118_27182[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (32))){
var inst_27063 = (state_27096[(25)]);
var inst_27076 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27063);
var inst_27077 = cljs.core.pr_str.call(null,inst_27076);
var inst_27078 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_27077)].join('');
var inst_27079 = figwheel.client.utils.log.call(null,inst_27078);
var state_27096__$1 = state_27096;
var statearr_27119_27183 = state_27096__$1;
(statearr_27119_27183[(2)] = inst_27079);

(statearr_27119_27183[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (33))){
var state_27096__$1 = state_27096;
var statearr_27120_27184 = state_27096__$1;
(statearr_27120_27184[(2)] = null);

(statearr_27120_27184[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (13))){
var inst_26996 = (state_27096[(27)]);
var inst_27000 = cljs.core.chunk_first.call(null,inst_26996);
var inst_27001 = cljs.core.chunk_rest.call(null,inst_26996);
var inst_27002 = cljs.core.count.call(null,inst_27000);
var inst_26983 = inst_27001;
var inst_26984 = inst_27000;
var inst_26985 = inst_27002;
var inst_26986 = (0);
var state_27096__$1 = (function (){var statearr_27121 = state_27096;
(statearr_27121[(7)] = inst_26984);

(statearr_27121[(8)] = inst_26983);

(statearr_27121[(9)] = inst_26985);

(statearr_27121[(10)] = inst_26986);

return statearr_27121;
})();
var statearr_27122_27185 = state_27096__$1;
(statearr_27122_27185[(2)] = null);

(statearr_27122_27185[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (22))){
var inst_27035 = (state_27096[(13)]);
var inst_27048 = (state_27096[(2)]);
var inst_27049 = cljs.core.not_empty.call(null,inst_27035);
var state_27096__$1 = (function (){var statearr_27123 = state_27096;
(statearr_27123[(28)] = inst_27048);

return statearr_27123;
})();
if(cljs.core.truth_(inst_27049)){
var statearr_27124_27186 = state_27096__$1;
(statearr_27124_27186[(1)] = (23));

} else {
var statearr_27125_27187 = state_27096__$1;
(statearr_27125_27187[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (36))){
var state_27096__$1 = state_27096;
var statearr_27126_27188 = state_27096__$1;
(statearr_27126_27188[(2)] = null);

(statearr_27126_27188[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (29))){
var inst_27064 = (state_27096[(29)]);
var inst_27067 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27064);
var inst_27068 = cljs.core.pr_str.call(null,inst_27067);
var inst_27069 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27068)].join('');
var inst_27070 = figwheel.client.utils.log.call(null,inst_27069);
var state_27096__$1 = state_27096;
var statearr_27127_27189 = state_27096__$1;
(statearr_27127_27189[(2)] = inst_27070);

(statearr_27127_27189[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (6))){
var inst_27017 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27128_27190 = state_27096__$1;
(statearr_27128_27190[(2)] = inst_27017);

(statearr_27128_27190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (28))){
var inst_27064 = (state_27096[(29)]);
var inst_27061 = (state_27096[(2)]);
var inst_27062 = cljs.core.get.call(null,inst_27061,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27063 = cljs.core.get.call(null,inst_27061,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_27064__$1 = cljs.core.get.call(null,inst_27061,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27065 = cljs.core.not_empty.call(null,inst_27064__$1);
var state_27096__$1 = (function (){var statearr_27129 = state_27096;
(statearr_27129[(30)] = inst_27062);

(statearr_27129[(25)] = inst_27063);

(statearr_27129[(29)] = inst_27064__$1);

return statearr_27129;
})();
if(cljs.core.truth_(inst_27065)){
var statearr_27130_27191 = state_27096__$1;
(statearr_27130_27191[(1)] = (29));

} else {
var statearr_27131_27192 = state_27096__$1;
(statearr_27131_27192[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (25))){
var inst_27094 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27096__$1,inst_27094);
} else {
if((state_val_27097 === (34))){
var inst_27062 = (state_27096[(30)]);
var inst_27082 = (state_27096[(2)]);
var inst_27083 = cljs.core.not_empty.call(null,inst_27062);
var state_27096__$1 = (function (){var statearr_27132 = state_27096;
(statearr_27132[(31)] = inst_27082);

return statearr_27132;
})();
if(cljs.core.truth_(inst_27083)){
var statearr_27133_27193 = state_27096__$1;
(statearr_27133_27193[(1)] = (35));

} else {
var statearr_27134_27194 = state_27096__$1;
(statearr_27134_27194[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (17))){
var inst_27022 = (state_27096[(23)]);
var state_27096__$1 = state_27096;
var statearr_27135_27195 = state_27096__$1;
(statearr_27135_27195[(2)] = inst_27022);

(statearr_27135_27195[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (3))){
var state_27096__$1 = state_27096;
var statearr_27136_27196 = state_27096__$1;
(statearr_27136_27196[(2)] = null);

(statearr_27136_27196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (12))){
var inst_27013 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27137_27197 = state_27096__$1;
(statearr_27137_27197[(2)] = inst_27013);

(statearr_27137_27197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (2))){
var inst_26975 = (state_27096[(20)]);
var inst_26982 = cljs.core.seq.call(null,inst_26975);
var inst_26983 = inst_26982;
var inst_26984 = null;
var inst_26985 = (0);
var inst_26986 = (0);
var state_27096__$1 = (function (){var statearr_27138 = state_27096;
(statearr_27138[(7)] = inst_26984);

(statearr_27138[(8)] = inst_26983);

(statearr_27138[(9)] = inst_26985);

(statearr_27138[(10)] = inst_26986);

return statearr_27138;
})();
var statearr_27139_27198 = state_27096__$1;
(statearr_27139_27198[(2)] = null);

(statearr_27139_27198[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (23))){
var inst_27032 = (state_27096[(12)]);
var inst_27035 = (state_27096[(13)]);
var inst_27028 = (state_27096[(14)]);
var inst_27055 = (state_27096[(19)]);
var inst_27029 = (state_27096[(15)]);
var inst_27033 = (state_27096[(16)]);
var inst_27051 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27054 = (function (){var files_not_loaded = inst_27035;
var res = inst_27033;
var res_SINGLEQUOTE_ = inst_27032;
var files_SINGLEQUOTE_ = inst_27029;
var all_files = inst_27028;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27032,inst_27035,inst_27028,inst_27055,inst_27029,inst_27033,inst_27051,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files){
return (function (p__27053){
var map__27140 = p__27053;
var map__27140__$1 = ((cljs.core.seq_QMARK_.call(null,map__27140))?cljs.core.apply.call(null,cljs.core.hash_map,map__27140):map__27140);
var meta_data = cljs.core.get.call(null,map__27140__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27032,inst_27035,inst_27028,inst_27055,inst_27029,inst_27033,inst_27051,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files))
})();
var inst_27055__$1 = cljs.core.group_by.call(null,inst_27054,inst_27035);
var inst_27056 = cljs.core.seq_QMARK_.call(null,inst_27055__$1);
var state_27096__$1 = (function (){var statearr_27141 = state_27096;
(statearr_27141[(19)] = inst_27055__$1);

(statearr_27141[(32)] = inst_27051);

return statearr_27141;
})();
if(inst_27056){
var statearr_27142_27199 = state_27096__$1;
(statearr_27142_27199[(1)] = (26));

} else {
var statearr_27143_27200 = state_27096__$1;
(statearr_27143_27200[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (35))){
var inst_27062 = (state_27096[(30)]);
var inst_27085 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27062);
var inst_27086 = cljs.core.pr_str.call(null,inst_27085);
var inst_27087 = [cljs.core.str("not required: "),cljs.core.str(inst_27086)].join('');
var inst_27088 = figwheel.client.utils.log.call(null,inst_27087);
var state_27096__$1 = state_27096;
var statearr_27144_27201 = state_27096__$1;
(statearr_27144_27201[(2)] = inst_27088);

(statearr_27144_27201[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (19))){
var inst_27032 = (state_27096[(12)]);
var inst_27028 = (state_27096[(14)]);
var inst_27029 = (state_27096[(15)]);
var inst_27033 = (state_27096[(16)]);
var inst_27032__$1 = (state_27096[(2)]);
var inst_27033__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27032__$1);
var inst_27034 = (function (){var res = inst_27033__$1;
var res_SINGLEQUOTE_ = inst_27032__$1;
var files_SINGLEQUOTE_ = inst_27029;
var all_files = inst_27028;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27032,inst_27028,inst_27029,inst_27033,inst_27032__$1,inst_27033__$1,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files){
return (function (p1__26766_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26766_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27032,inst_27028,inst_27029,inst_27033,inst_27032__$1,inst_27033__$1,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files))
})();
var inst_27035 = cljs.core.filter.call(null,inst_27034,inst_27032__$1);
var inst_27036 = cljs.core.not_empty.call(null,inst_27033__$1);
var state_27096__$1 = (function (){var statearr_27145 = state_27096;
(statearr_27145[(12)] = inst_27032__$1);

(statearr_27145[(13)] = inst_27035);

(statearr_27145[(16)] = inst_27033__$1);

return statearr_27145;
})();
if(cljs.core.truth_(inst_27036)){
var statearr_27146_27202 = state_27096__$1;
(statearr_27146_27202[(1)] = (20));

} else {
var statearr_27147_27203 = state_27096__$1;
(statearr_27147_27203[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (11))){
var state_27096__$1 = state_27096;
var statearr_27148_27204 = state_27096__$1;
(statearr_27148_27204[(2)] = null);

(statearr_27148_27204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (9))){
var inst_27015 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27149_27205 = state_27096__$1;
(statearr_27149_27205[(2)] = inst_27015);

(statearr_27149_27205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (5))){
var inst_26985 = (state_27096[(9)]);
var inst_26986 = (state_27096[(10)]);
var inst_26988 = (inst_26986 < inst_26985);
var inst_26989 = inst_26988;
var state_27096__$1 = state_27096;
if(cljs.core.truth_(inst_26989)){
var statearr_27150_27206 = state_27096__$1;
(statearr_27150_27206[(1)] = (7));

} else {
var statearr_27151_27207 = state_27096__$1;
(statearr_27151_27207[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (14))){
var inst_26996 = (state_27096[(27)]);
var inst_27005 = cljs.core.first.call(null,inst_26996);
var inst_27006 = figwheel.client.file_reloading.eval_body.call(null,inst_27005);
var inst_27007 = cljs.core.next.call(null,inst_26996);
var inst_26983 = inst_27007;
var inst_26984 = null;
var inst_26985 = (0);
var inst_26986 = (0);
var state_27096__$1 = (function (){var statearr_27152 = state_27096;
(statearr_27152[(33)] = inst_27006);

(statearr_27152[(7)] = inst_26984);

(statearr_27152[(8)] = inst_26983);

(statearr_27152[(9)] = inst_26985);

(statearr_27152[(10)] = inst_26986);

return statearr_27152;
})();
var statearr_27153_27208 = state_27096__$1;
(statearr_27153_27208[(2)] = null);

(statearr_27153_27208[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (26))){
var inst_27055 = (state_27096[(19)]);
var inst_27058 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27055);
var state_27096__$1 = state_27096;
var statearr_27154_27209 = state_27096__$1;
(statearr_27154_27209[(2)] = inst_27058);

(statearr_27154_27209[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (16))){
var inst_27022 = (state_27096[(23)]);
var inst_27024 = (function (){var all_files = inst_27022;
return ((function (all_files,inst_27022,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files){
return (function (p1__26765_SHARP_){
return cljs.core.update_in.call(null,p1__26765_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_27022,state_val_27097,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files))
})();
var inst_27025 = cljs.core.map.call(null,inst_27024,inst_27022);
var state_27096__$1 = state_27096;
var statearr_27155_27210 = state_27096__$1;
(statearr_27155_27210[(2)] = inst_27025);

(statearr_27155_27210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (30))){
var state_27096__$1 = state_27096;
var statearr_27156_27211 = state_27096__$1;
(statearr_27156_27211[(2)] = null);

(statearr_27156_27211[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (10))){
var inst_26996 = (state_27096[(27)]);
var inst_26998 = cljs.core.chunked_seq_QMARK_.call(null,inst_26996);
var state_27096__$1 = state_27096;
if(inst_26998){
var statearr_27157_27212 = state_27096__$1;
(statearr_27157_27212[(1)] = (13));

} else {
var statearr_27158_27213 = state_27096__$1;
(statearr_27158_27213[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (18))){
var inst_27028 = (state_27096[(14)]);
var inst_27029 = (state_27096[(15)]);
var inst_27028__$1 = (state_27096[(2)]);
var inst_27029__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_27028__$1);
var inst_27030 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27029__$1);
var state_27096__$1 = (function (){var statearr_27159 = state_27096;
(statearr_27159[(14)] = inst_27028__$1);

(statearr_27159[(15)] = inst_27029__$1);

return statearr_27159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27096__$1,(19),inst_27030);
} else {
if((state_val_27097 === (37))){
var inst_27091 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27160_27214 = state_27096__$1;
(statearr_27160_27214[(2)] = inst_27091);

(statearr_27160_27214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (8))){
var inst_26996 = (state_27096[(27)]);
var inst_26983 = (state_27096[(8)]);
var inst_26996__$1 = cljs.core.seq.call(null,inst_26983);
var state_27096__$1 = (function (){var statearr_27161 = state_27096;
(statearr_27161[(27)] = inst_26996__$1);

return statearr_27161;
})();
if(inst_26996__$1){
var statearr_27162_27215 = state_27096__$1;
(statearr_27162_27215[(1)] = (10));

} else {
var statearr_27163_27216 = state_27096__$1;
(statearr_27163_27216[(1)] = (11));

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
});})(c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files))
;
return ((function (switch__21473__auto__,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21474__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21474__auto____0 = (function (){
var statearr_27167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27167[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21474__auto__);

(statearr_27167[(1)] = (1));

return statearr_27167;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21474__auto____1 = (function (state_27096){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_27096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e27168){if((e27168 instanceof Object)){
var ex__21477__auto__ = e27168;
var statearr_27169_27217 = state_27096;
(statearr_27169_27217[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27218 = state_27096;
state_27096 = G__27218;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21474__auto__ = function(state_27096){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21474__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21474__auto____1.call(this,state_27096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21474__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21474__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files))
})();
var state__21537__auto__ = (function (){var statearr_27170 = f__21536__auto__.call(null);
(statearr_27170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto__);

return statearr_27170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__,map__26970,map__26970__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26971,map__26971__$1,msg,files))
);

return c__21535__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27221,link){
var map__27223 = p__27221;
var map__27223__$1 = ((cljs.core.seq_QMARK_.call(null,map__27223))?cljs.core.apply.call(null,cljs.core.hash_map,map__27223):map__27223);
var file = cljs.core.get.call(null,map__27223__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__27223,map__27223__$1,file){
return (function (p1__27219_SHARP_,p2__27220_SHARP_){
if(cljs.core._EQ_.call(null,p1__27219_SHARP_,p2__27220_SHARP_)){
return p1__27219_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__27223,map__27223__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27227){
var map__27228 = p__27227;
var map__27228__$1 = ((cljs.core.seq_QMARK_.call(null,map__27228))?cljs.core.apply.call(null,cljs.core.hash_map,map__27228):map__27228);
var current_url_length = cljs.core.get.call(null,map__27228__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__27228__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27224_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27224_SHARP_);
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
var G__27230 = arguments.length;
switch (G__27230) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27232){
var map__27234 = p__27232;
var map__27234__$1 = ((cljs.core.seq_QMARK_.call(null,map__27234))?cljs.core.apply.call(null,cljs.core.hash_map,map__27234):map__27234);
var f_data = map__27234__$1;
var request_url = cljs.core.get.call(null,map__27234__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__27234__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27235,files_msg){
var map__27257 = p__27235;
var map__27257__$1 = ((cljs.core.seq_QMARK_.call(null,map__27257))?cljs.core.apply.call(null,cljs.core.hash_map,map__27257):map__27257);
var opts = map__27257__$1;
var on_cssload = cljs.core.get.call(null,map__27257__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27258_27278 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27259_27279 = null;
var count__27260_27280 = (0);
var i__27261_27281 = (0);
while(true){
if((i__27261_27281 < count__27260_27280)){
var f_27282 = cljs.core._nth.call(null,chunk__27259_27279,i__27261_27281);
figwheel.client.file_reloading.reload_css_file.call(null,f_27282);

var G__27283 = seq__27258_27278;
var G__27284 = chunk__27259_27279;
var G__27285 = count__27260_27280;
var G__27286 = (i__27261_27281 + (1));
seq__27258_27278 = G__27283;
chunk__27259_27279 = G__27284;
count__27260_27280 = G__27285;
i__27261_27281 = G__27286;
continue;
} else {
var temp__4126__auto___27287 = cljs.core.seq.call(null,seq__27258_27278);
if(temp__4126__auto___27287){
var seq__27258_27288__$1 = temp__4126__auto___27287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27258_27288__$1)){
var c__18906__auto___27289 = cljs.core.chunk_first.call(null,seq__27258_27288__$1);
var G__27290 = cljs.core.chunk_rest.call(null,seq__27258_27288__$1);
var G__27291 = c__18906__auto___27289;
var G__27292 = cljs.core.count.call(null,c__18906__auto___27289);
var G__27293 = (0);
seq__27258_27278 = G__27290;
chunk__27259_27279 = G__27291;
count__27260_27280 = G__27292;
i__27261_27281 = G__27293;
continue;
} else {
var f_27294 = cljs.core.first.call(null,seq__27258_27288__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27294);

var G__27295 = cljs.core.next.call(null,seq__27258_27288__$1);
var G__27296 = null;
var G__27297 = (0);
var G__27298 = (0);
seq__27258_27278 = G__27295;
chunk__27259_27279 = G__27296;
count__27260_27280 = G__27297;
i__27261_27281 = G__27298;
continue;
}
} else {
}
}
break;
}

var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__,map__27257,map__27257__$1,opts,on_cssload){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto__,map__27257,map__27257__$1,opts,on_cssload){
return (function (state_27268){
var state_val_27269 = (state_27268[(1)]);
if((state_val_27269 === (2))){
var inst_27264 = (state_27268[(2)]);
var inst_27265 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_27266 = on_cssload.call(null,inst_27265);
var state_27268__$1 = (function (){var statearr_27270 = state_27268;
(statearr_27270[(7)] = inst_27264);

return statearr_27270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27268__$1,inst_27266);
} else {
if((state_val_27269 === (1))){
var inst_27262 = cljs.core.async.timeout.call(null,(100));
var state_27268__$1 = state_27268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27268__$1,(2),inst_27262);
} else {
return null;
}
}
});})(c__21535__auto__,map__27257,map__27257__$1,opts,on_cssload))
;
return ((function (switch__21473__auto__,c__21535__auto__,map__27257,map__27257__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21474__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21474__auto____0 = (function (){
var statearr_27274 = [null,null,null,null,null,null,null,null];
(statearr_27274[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21474__auto__);

(statearr_27274[(1)] = (1));

return statearr_27274;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21474__auto____1 = (function (state_27268){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_27268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e27275){if((e27275 instanceof Object)){
var ex__21477__auto__ = e27275;
var statearr_27276_27299 = state_27268;
(statearr_27276_27299[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27300 = state_27268;
state_27268 = G__27300;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21474__auto__ = function(state_27268){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21474__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21474__auto____1.call(this,state_27268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21474__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21474__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto__,map__27257,map__27257__$1,opts,on_cssload))
})();
var state__21537__auto__ = (function (){var statearr_27277 = f__21536__auto__.call(null);
(statearr_27277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto__);

return statearr_27277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__,map__27257,map__27257__$1,opts,on_cssload))
);

return c__21535__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440626242107