// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25144__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25145__i = 0, G__25145__a = new Array(arguments.length -  0);
while (G__25145__i < G__25145__a.length) {G__25145__a[G__25145__i] = arguments[G__25145__i + 0]; ++G__25145__i;}
  args = new cljs.core.IndexedSeq(G__25145__a,0);
} 
return G__25144__delegate.call(this,args);};
G__25144.cljs$lang$maxFixedArity = 0;
G__25144.cljs$lang$applyTo = (function (arglist__25146){
var args = cljs.core.seq(arglist__25146);
return G__25144__delegate(args);
});
G__25144.cljs$core$IFn$_invoke$arity$variadic = G__25144__delegate;
return G__25144;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25147){
var map__25150 = p__25147;
var map__25150__$1 = ((((!((map__25150 == null)))?((((map__25150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25150):map__25150);
var message = cljs.core.get.call(null,map__25150__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25150__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16517__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16517__auto__)){
return or__16517__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16505__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16505__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16505__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20309__auto___25280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___25280,ch){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___25280,ch){
return (function (state_25254){
var state_val_25255 = (state_25254[(1)]);
if((state_val_25255 === (7))){
var inst_25250 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
var statearr_25256_25281 = state_25254__$1;
(statearr_25256_25281[(2)] = inst_25250);

(statearr_25256_25281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (1))){
var state_25254__$1 = state_25254;
var statearr_25257_25282 = state_25254__$1;
(statearr_25257_25282[(2)] = null);

(statearr_25257_25282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (4))){
var inst_25218 = (state_25254[(7)]);
var inst_25218__$1 = (state_25254[(2)]);
var state_25254__$1 = (function (){var statearr_25258 = state_25254;
(statearr_25258[(7)] = inst_25218__$1);

return statearr_25258;
})();
if(cljs.core.truth_(inst_25218__$1)){
var statearr_25259_25283 = state_25254__$1;
(statearr_25259_25283[(1)] = (5));

} else {
var statearr_25260_25284 = state_25254__$1;
(statearr_25260_25284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (13))){
var state_25254__$1 = state_25254;
var statearr_25261_25285 = state_25254__$1;
(statearr_25261_25285[(2)] = null);

(statearr_25261_25285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (6))){
var state_25254__$1 = state_25254;
var statearr_25262_25286 = state_25254__$1;
(statearr_25262_25286[(2)] = null);

(statearr_25262_25286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (3))){
var inst_25252 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25254__$1,inst_25252);
} else {
if((state_val_25255 === (12))){
var inst_25225 = (state_25254[(8)]);
var inst_25238 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25225);
var inst_25239 = cljs.core.first.call(null,inst_25238);
var inst_25240 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25239);
var inst_25241 = console.warn("Figwheel: Not loading code with warnings - ",inst_25240);
var state_25254__$1 = state_25254;
var statearr_25263_25287 = state_25254__$1;
(statearr_25263_25287[(2)] = inst_25241);

(statearr_25263_25287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (2))){
var state_25254__$1 = state_25254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25254__$1,(4),ch);
} else {
if((state_val_25255 === (11))){
var inst_25234 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
var statearr_25264_25288 = state_25254__$1;
(statearr_25264_25288[(2)] = inst_25234);

(statearr_25264_25288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (9))){
var inst_25224 = (state_25254[(9)]);
var inst_25236 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25224,opts);
var state_25254__$1 = state_25254;
if(cljs.core.truth_(inst_25236)){
var statearr_25265_25289 = state_25254__$1;
(statearr_25265_25289[(1)] = (12));

} else {
var statearr_25266_25290 = state_25254__$1;
(statearr_25266_25290[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (5))){
var inst_25224 = (state_25254[(9)]);
var inst_25218 = (state_25254[(7)]);
var inst_25220 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25221 = (new cljs.core.PersistentArrayMap(null,2,inst_25220,null));
var inst_25222 = (new cljs.core.PersistentHashSet(null,inst_25221,null));
var inst_25223 = figwheel.client.focus_msgs.call(null,inst_25222,inst_25218);
var inst_25224__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25223);
var inst_25225 = cljs.core.first.call(null,inst_25223);
var inst_25226 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25224__$1,opts);
var state_25254__$1 = (function (){var statearr_25267 = state_25254;
(statearr_25267[(8)] = inst_25225);

(statearr_25267[(9)] = inst_25224__$1);

return statearr_25267;
})();
if(cljs.core.truth_(inst_25226)){
var statearr_25268_25291 = state_25254__$1;
(statearr_25268_25291[(1)] = (8));

} else {
var statearr_25269_25292 = state_25254__$1;
(statearr_25269_25292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (14))){
var inst_25244 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
var statearr_25270_25293 = state_25254__$1;
(statearr_25270_25293[(2)] = inst_25244);

(statearr_25270_25293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (10))){
var inst_25246 = (state_25254[(2)]);
var state_25254__$1 = (function (){var statearr_25271 = state_25254;
(statearr_25271[(10)] = inst_25246);

return statearr_25271;
})();
var statearr_25272_25294 = state_25254__$1;
(statearr_25272_25294[(2)] = null);

(statearr_25272_25294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (8))){
var inst_25225 = (state_25254[(8)]);
var inst_25228 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25229 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25225);
var inst_25230 = cljs.core.async.timeout.call(null,(1000));
var inst_25231 = [inst_25229,inst_25230];
var inst_25232 = (new cljs.core.PersistentVector(null,2,(5),inst_25228,inst_25231,null));
var state_25254__$1 = state_25254;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25254__$1,(11),inst_25232);
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
});})(c__20309__auto___25280,ch))
;
return ((function (switch__20244__auto__,c__20309__auto___25280,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20245__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20245__auto____0 = (function (){
var statearr_25276 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25276[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20245__auto__);

(statearr_25276[(1)] = (1));

return statearr_25276;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20245__auto____1 = (function (state_25254){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_25254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e25277){if((e25277 instanceof Object)){
var ex__20248__auto__ = e25277;
var statearr_25278_25295 = state_25254;
(statearr_25278_25295[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25296 = state_25254;
state_25254 = G__25296;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20245__auto__ = function(state_25254){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20245__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20245__auto____1.call(this,state_25254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20245__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20245__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___25280,ch))
})();
var state__20311__auto__ = (function (){var statearr_25279 = f__20310__auto__.call(null);
(statearr_25279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___25280);

return statearr_25279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___25280,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25297_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25297_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_25304 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25304){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25302 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25303 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25302,_STAR_print_newline_STAR_25303,base_path_25304){
return (function() { 
var G__25305__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25306__i = 0, G__25306__a = new Array(arguments.length -  0);
while (G__25306__i < G__25306__a.length) {G__25306__a[G__25306__i] = arguments[G__25306__i + 0]; ++G__25306__i;}
  args = new cljs.core.IndexedSeq(G__25306__a,0);
} 
return G__25305__delegate.call(this,args);};
G__25305.cljs$lang$maxFixedArity = 0;
G__25305.cljs$lang$applyTo = (function (arglist__25307){
var args = cljs.core.seq(arglist__25307);
return G__25305__delegate(args);
});
G__25305.cljs$core$IFn$_invoke$arity$variadic = G__25305__delegate;
return G__25305;
})()
;})(_STAR_print_fn_STAR_25302,_STAR_print_newline_STAR_25303,base_path_25304))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25303;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25302;
}}catch (e25301){if((e25301 instanceof Error)){
var e = e25301;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25304], null));
} else {
var e = e25301;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25304))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25308){
var map__25315 = p__25308;
var map__25315__$1 = ((((!((map__25315 == null)))?((((map__25315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25315):map__25315);
var opts = map__25315__$1;
var build_id = cljs.core.get.call(null,map__25315__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25315,map__25315__$1,opts,build_id){
return (function (p__25317){
var vec__25318 = p__25317;
var map__25319 = cljs.core.nth.call(null,vec__25318,(0),null);
var map__25319__$1 = ((((!((map__25319 == null)))?((((map__25319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25319):map__25319);
var msg = map__25319__$1;
var msg_name = cljs.core.get.call(null,map__25319__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25318,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25318,map__25319,map__25319__$1,msg,msg_name,_,map__25315,map__25315__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25318,map__25319,map__25319__$1,msg,msg_name,_,map__25315,map__25315__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25315,map__25315__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25325){
var vec__25326 = p__25325;
var map__25327 = cljs.core.nth.call(null,vec__25326,(0),null);
var map__25327__$1 = ((((!((map__25327 == null)))?((((map__25327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25327):map__25327);
var msg = map__25327__$1;
var msg_name = cljs.core.get.call(null,map__25327__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25326,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25329){
var map__25339 = p__25329;
var map__25339__$1 = ((((!((map__25339 == null)))?((((map__25339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25339):map__25339);
var on_compile_warning = cljs.core.get.call(null,map__25339__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25339__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25339,map__25339__$1,on_compile_warning,on_compile_fail){
return (function (p__25341){
var vec__25342 = p__25341;
var map__25343 = cljs.core.nth.call(null,vec__25342,(0),null);
var map__25343__$1 = ((((!((map__25343 == null)))?((((map__25343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25343):map__25343);
var msg = map__25343__$1;
var msg_name = cljs.core.get.call(null,map__25343__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25342,(1));
var pred__25345 = cljs.core._EQ_;
var expr__25346 = msg_name;
if(cljs.core.truth_(pred__25345.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25346))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25345.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25346))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25339,map__25339__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto__,msg_hist,msg_names,msg){
return (function (state_25547){
var state_val_25548 = (state_25547[(1)]);
if((state_val_25548 === (7))){
var inst_25481 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25549_25590 = state_25547__$1;
(statearr_25549_25590[(2)] = inst_25481);

(statearr_25549_25590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (20))){
var inst_25509 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25547__$1 = state_25547;
if(cljs.core.truth_(inst_25509)){
var statearr_25550_25591 = state_25547__$1;
(statearr_25550_25591[(1)] = (22));

} else {
var statearr_25551_25592 = state_25547__$1;
(statearr_25551_25592[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (27))){
var inst_25521 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25522 = figwheel.client.heads_up.display_warning.call(null,inst_25521);
var state_25547__$1 = state_25547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25547__$1,(30),inst_25522);
} else {
if((state_val_25548 === (1))){
var inst_25469 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25547__$1 = state_25547;
if(cljs.core.truth_(inst_25469)){
var statearr_25552_25593 = state_25547__$1;
(statearr_25552_25593[(1)] = (2));

} else {
var statearr_25553_25594 = state_25547__$1;
(statearr_25553_25594[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (24))){
var inst_25537 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25554_25595 = state_25547__$1;
(statearr_25554_25595[(2)] = inst_25537);

(statearr_25554_25595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (4))){
var inst_25545 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25547__$1,inst_25545);
} else {
if((state_val_25548 === (15))){
var inst_25497 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25498 = figwheel.client.format_messages.call(null,inst_25497);
var inst_25499 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25500 = figwheel.client.heads_up.display_error.call(null,inst_25498,inst_25499);
var state_25547__$1 = state_25547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25547__$1,(18),inst_25500);
} else {
if((state_val_25548 === (21))){
var inst_25539 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25555_25596 = state_25547__$1;
(statearr_25555_25596[(2)] = inst_25539);

(statearr_25555_25596[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (31))){
var inst_25528 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25547__$1 = state_25547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25547__$1,(34),inst_25528);
} else {
if((state_val_25548 === (32))){
var state_25547__$1 = state_25547;
var statearr_25556_25597 = state_25547__$1;
(statearr_25556_25597[(2)] = null);

(statearr_25556_25597[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (33))){
var inst_25533 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25557_25598 = state_25547__$1;
(statearr_25557_25598[(2)] = inst_25533);

(statearr_25557_25598[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (13))){
var inst_25487 = (state_25547[(2)]);
var inst_25488 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25489 = figwheel.client.format_messages.call(null,inst_25488);
var inst_25490 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25491 = figwheel.client.heads_up.display_error.call(null,inst_25489,inst_25490);
var state_25547__$1 = (function (){var statearr_25558 = state_25547;
(statearr_25558[(7)] = inst_25487);

return statearr_25558;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25547__$1,(14),inst_25491);
} else {
if((state_val_25548 === (22))){
var inst_25511 = figwheel.client.heads_up.clear.call(null);
var state_25547__$1 = state_25547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25547__$1,(25),inst_25511);
} else {
if((state_val_25548 === (29))){
var inst_25535 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25559_25599 = state_25547__$1;
(statearr_25559_25599[(2)] = inst_25535);

(statearr_25559_25599[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (6))){
var inst_25477 = figwheel.client.heads_up.clear.call(null);
var state_25547__$1 = state_25547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25547__$1,(9),inst_25477);
} else {
if((state_val_25548 === (28))){
var inst_25526 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25547__$1 = state_25547;
if(cljs.core.truth_(inst_25526)){
var statearr_25560_25600 = state_25547__$1;
(statearr_25560_25600[(1)] = (31));

} else {
var statearr_25561_25601 = state_25547__$1;
(statearr_25561_25601[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (25))){
var inst_25513 = (state_25547[(2)]);
var inst_25514 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25515 = figwheel.client.heads_up.display_warning.call(null,inst_25514);
var state_25547__$1 = (function (){var statearr_25562 = state_25547;
(statearr_25562[(8)] = inst_25513);

return statearr_25562;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25547__$1,(26),inst_25515);
} else {
if((state_val_25548 === (34))){
var inst_25530 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25563_25602 = state_25547__$1;
(statearr_25563_25602[(2)] = inst_25530);

(statearr_25563_25602[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (17))){
var inst_25541 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25564_25603 = state_25547__$1;
(statearr_25564_25603[(2)] = inst_25541);

(statearr_25564_25603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (3))){
var inst_25483 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25547__$1 = state_25547;
if(cljs.core.truth_(inst_25483)){
var statearr_25565_25604 = state_25547__$1;
(statearr_25565_25604[(1)] = (10));

} else {
var statearr_25566_25605 = state_25547__$1;
(statearr_25566_25605[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (12))){
var inst_25543 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25567_25606 = state_25547__$1;
(statearr_25567_25606[(2)] = inst_25543);

(statearr_25567_25606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (2))){
var inst_25471 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25547__$1 = state_25547;
if(cljs.core.truth_(inst_25471)){
var statearr_25568_25607 = state_25547__$1;
(statearr_25568_25607[(1)] = (5));

} else {
var statearr_25569_25608 = state_25547__$1;
(statearr_25569_25608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (23))){
var inst_25519 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25547__$1 = state_25547;
if(cljs.core.truth_(inst_25519)){
var statearr_25570_25609 = state_25547__$1;
(statearr_25570_25609[(1)] = (27));

} else {
var statearr_25571_25610 = state_25547__$1;
(statearr_25571_25610[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (19))){
var inst_25506 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25507 = figwheel.client.heads_up.append_message.call(null,inst_25506);
var state_25547__$1 = state_25547;
var statearr_25572_25611 = state_25547__$1;
(statearr_25572_25611[(2)] = inst_25507);

(statearr_25572_25611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (11))){
var inst_25495 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25547__$1 = state_25547;
if(cljs.core.truth_(inst_25495)){
var statearr_25573_25612 = state_25547__$1;
(statearr_25573_25612[(1)] = (15));

} else {
var statearr_25574_25613 = state_25547__$1;
(statearr_25574_25613[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (9))){
var inst_25479 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25575_25614 = state_25547__$1;
(statearr_25575_25614[(2)] = inst_25479);

(statearr_25575_25614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (5))){
var inst_25473 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25547__$1 = state_25547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25547__$1,(8),inst_25473);
} else {
if((state_val_25548 === (14))){
var inst_25493 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25576_25615 = state_25547__$1;
(statearr_25576_25615[(2)] = inst_25493);

(statearr_25576_25615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (26))){
var inst_25517 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25577_25616 = state_25547__$1;
(statearr_25577_25616[(2)] = inst_25517);

(statearr_25577_25616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (16))){
var inst_25504 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25547__$1 = state_25547;
if(cljs.core.truth_(inst_25504)){
var statearr_25578_25617 = state_25547__$1;
(statearr_25578_25617[(1)] = (19));

} else {
var statearr_25579_25618 = state_25547__$1;
(statearr_25579_25618[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (30))){
var inst_25524 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25580_25619 = state_25547__$1;
(statearr_25580_25619[(2)] = inst_25524);

(statearr_25580_25619[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (10))){
var inst_25485 = figwheel.client.heads_up.clear.call(null);
var state_25547__$1 = state_25547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25547__$1,(13),inst_25485);
} else {
if((state_val_25548 === (18))){
var inst_25502 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25581_25620 = state_25547__$1;
(statearr_25581_25620[(2)] = inst_25502);

(statearr_25581_25620[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25548 === (8))){
var inst_25475 = (state_25547[(2)]);
var state_25547__$1 = state_25547;
var statearr_25582_25621 = state_25547__$1;
(statearr_25582_25621[(2)] = inst_25475);

(statearr_25582_25621[(1)] = (7));


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
});})(c__20309__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20244__auto__,c__20309__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20245__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20245__auto____0 = (function (){
var statearr_25586 = [null,null,null,null,null,null,null,null,null];
(statearr_25586[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20245__auto__);

(statearr_25586[(1)] = (1));

return statearr_25586;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20245__auto____1 = (function (state_25547){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_25547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e25587){if((e25587 instanceof Object)){
var ex__20248__auto__ = e25587;
var statearr_25588_25622 = state_25547;
(statearr_25588_25622[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25623 = state_25547;
state_25547 = G__25623;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20245__auto__ = function(state_25547){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20245__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20245__auto____1.call(this,state_25547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20245__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20245__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto__,msg_hist,msg_names,msg))
})();
var state__20311__auto__ = (function (){var statearr_25589 = f__20310__auto__.call(null);
(statearr_25589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto__);

return statearr_25589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto__,msg_hist,msg_names,msg))
);

return c__20309__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20309__auto___25686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___25686,ch){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___25686,ch){
return (function (state_25669){
var state_val_25670 = (state_25669[(1)]);
if((state_val_25670 === (1))){
var state_25669__$1 = state_25669;
var statearr_25671_25687 = state_25669__$1;
(statearr_25671_25687[(2)] = null);

(statearr_25671_25687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25670 === (2))){
var state_25669__$1 = state_25669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25669__$1,(4),ch);
} else {
if((state_val_25670 === (3))){
var inst_25667 = (state_25669[(2)]);
var state_25669__$1 = state_25669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25669__$1,inst_25667);
} else {
if((state_val_25670 === (4))){
var inst_25657 = (state_25669[(7)]);
var inst_25657__$1 = (state_25669[(2)]);
var state_25669__$1 = (function (){var statearr_25672 = state_25669;
(statearr_25672[(7)] = inst_25657__$1);

return statearr_25672;
})();
if(cljs.core.truth_(inst_25657__$1)){
var statearr_25673_25688 = state_25669__$1;
(statearr_25673_25688[(1)] = (5));

} else {
var statearr_25674_25689 = state_25669__$1;
(statearr_25674_25689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25670 === (5))){
var inst_25657 = (state_25669[(7)]);
var inst_25659 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25657);
var state_25669__$1 = state_25669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25669__$1,(8),inst_25659);
} else {
if((state_val_25670 === (6))){
var state_25669__$1 = state_25669;
var statearr_25675_25690 = state_25669__$1;
(statearr_25675_25690[(2)] = null);

(statearr_25675_25690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25670 === (7))){
var inst_25665 = (state_25669[(2)]);
var state_25669__$1 = state_25669;
var statearr_25676_25691 = state_25669__$1;
(statearr_25676_25691[(2)] = inst_25665);

(statearr_25676_25691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25670 === (8))){
var inst_25661 = (state_25669[(2)]);
var state_25669__$1 = (function (){var statearr_25677 = state_25669;
(statearr_25677[(8)] = inst_25661);

return statearr_25677;
})();
var statearr_25678_25692 = state_25669__$1;
(statearr_25678_25692[(2)] = null);

(statearr_25678_25692[(1)] = (2));


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
});})(c__20309__auto___25686,ch))
;
return ((function (switch__20244__auto__,c__20309__auto___25686,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20245__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20245__auto____0 = (function (){
var statearr_25682 = [null,null,null,null,null,null,null,null,null];
(statearr_25682[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20245__auto__);

(statearr_25682[(1)] = (1));

return statearr_25682;
});
var figwheel$client$heads_up_plugin_$_state_machine__20245__auto____1 = (function (state_25669){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_25669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e25683){if((e25683 instanceof Object)){
var ex__20248__auto__ = e25683;
var statearr_25684_25693 = state_25669;
(statearr_25684_25693[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25694 = state_25669;
state_25669 = G__25694;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20245__auto__ = function(state_25669){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20245__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20245__auto____1.call(this,state_25669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20245__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20245__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___25686,ch))
})();
var state__20311__auto__ = (function (){var statearr_25685 = f__20310__auto__.call(null);
(statearr_25685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___25686);

return statearr_25685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___25686,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto__){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto__){
return (function (state_25715){
var state_val_25716 = (state_25715[(1)]);
if((state_val_25716 === (1))){
var inst_25710 = cljs.core.async.timeout.call(null,(3000));
var state_25715__$1 = state_25715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25715__$1,(2),inst_25710);
} else {
if((state_val_25716 === (2))){
var inst_25712 = (state_25715[(2)]);
var inst_25713 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25715__$1 = (function (){var statearr_25717 = state_25715;
(statearr_25717[(7)] = inst_25712);

return statearr_25717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25715__$1,inst_25713);
} else {
return null;
}
}
});})(c__20309__auto__))
;
return ((function (switch__20244__auto__,c__20309__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20245__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20245__auto____0 = (function (){
var statearr_25721 = [null,null,null,null,null,null,null,null];
(statearr_25721[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20245__auto__);

(statearr_25721[(1)] = (1));

return statearr_25721;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20245__auto____1 = (function (state_25715){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_25715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e25722){if((e25722 instanceof Object)){
var ex__20248__auto__ = e25722;
var statearr_25723_25725 = state_25715;
(statearr_25723_25725[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25726 = state_25715;
state_25715 = G__25726;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20245__auto__ = function(state_25715){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20245__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20245__auto____1.call(this,state_25715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20245__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20245__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto__))
})();
var state__20311__auto__ = (function (){var statearr_25724 = f__20310__auto__.call(null);
(statearr_25724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto__);

return statearr_25724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto__))
);

return c__20309__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25727){
var map__25734 = p__25727;
var map__25734__$1 = ((((!((map__25734 == null)))?((((map__25734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25734):map__25734);
var ed = map__25734__$1;
var formatted_exception = cljs.core.get.call(null,map__25734__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25734__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25734__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25736_25740 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25737_25741 = null;
var count__25738_25742 = (0);
var i__25739_25743 = (0);
while(true){
if((i__25739_25743 < count__25738_25742)){
var msg_25744 = cljs.core._nth.call(null,chunk__25737_25741,i__25739_25743);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25744);

var G__25745 = seq__25736_25740;
var G__25746 = chunk__25737_25741;
var G__25747 = count__25738_25742;
var G__25748 = (i__25739_25743 + (1));
seq__25736_25740 = G__25745;
chunk__25737_25741 = G__25746;
count__25738_25742 = G__25747;
i__25739_25743 = G__25748;
continue;
} else {
var temp__4425__auto___25749 = cljs.core.seq.call(null,seq__25736_25740);
if(temp__4425__auto___25749){
var seq__25736_25750__$1 = temp__4425__auto___25749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25736_25750__$1)){
var c__17320__auto___25751 = cljs.core.chunk_first.call(null,seq__25736_25750__$1);
var G__25752 = cljs.core.chunk_rest.call(null,seq__25736_25750__$1);
var G__25753 = c__17320__auto___25751;
var G__25754 = cljs.core.count.call(null,c__17320__auto___25751);
var G__25755 = (0);
seq__25736_25740 = G__25752;
chunk__25737_25741 = G__25753;
count__25738_25742 = G__25754;
i__25739_25743 = G__25755;
continue;
} else {
var msg_25756 = cljs.core.first.call(null,seq__25736_25750__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25756);

var G__25757 = cljs.core.next.call(null,seq__25736_25750__$1);
var G__25758 = null;
var G__25759 = (0);
var G__25760 = (0);
seq__25736_25740 = G__25757;
chunk__25737_25741 = G__25758;
count__25738_25742 = G__25759;
i__25739_25743 = G__25760;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25761){
var map__25764 = p__25761;
var map__25764__$1 = ((((!((map__25764 == null)))?((((map__25764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25764):map__25764);
var w = map__25764__$1;
var message = cljs.core.get.call(null,map__25764__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16505__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16505__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16505__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25772 = cljs.core.seq.call(null,plugins);
var chunk__25773 = null;
var count__25774 = (0);
var i__25775 = (0);
while(true){
if((i__25775 < count__25774)){
var vec__25776 = cljs.core._nth.call(null,chunk__25773,i__25775);
var k = cljs.core.nth.call(null,vec__25776,(0),null);
var plugin = cljs.core.nth.call(null,vec__25776,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25778 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25772,chunk__25773,count__25774,i__25775,pl_25778,vec__25776,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25778.call(null,msg_hist);
});})(seq__25772,chunk__25773,count__25774,i__25775,pl_25778,vec__25776,k,plugin))
);
} else {
}

var G__25779 = seq__25772;
var G__25780 = chunk__25773;
var G__25781 = count__25774;
var G__25782 = (i__25775 + (1));
seq__25772 = G__25779;
chunk__25773 = G__25780;
count__25774 = G__25781;
i__25775 = G__25782;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25772);
if(temp__4425__auto__){
var seq__25772__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25772__$1)){
var c__17320__auto__ = cljs.core.chunk_first.call(null,seq__25772__$1);
var G__25783 = cljs.core.chunk_rest.call(null,seq__25772__$1);
var G__25784 = c__17320__auto__;
var G__25785 = cljs.core.count.call(null,c__17320__auto__);
var G__25786 = (0);
seq__25772 = G__25783;
chunk__25773 = G__25784;
count__25774 = G__25785;
i__25775 = G__25786;
continue;
} else {
var vec__25777 = cljs.core.first.call(null,seq__25772__$1);
var k = cljs.core.nth.call(null,vec__25777,(0),null);
var plugin = cljs.core.nth.call(null,vec__25777,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25787 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25772,chunk__25773,count__25774,i__25775,pl_25787,vec__25777,k,plugin,seq__25772__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25787.call(null,msg_hist);
});})(seq__25772,chunk__25773,count__25774,i__25775,pl_25787,vec__25777,k,plugin,seq__25772__$1,temp__4425__auto__))
);
} else {
}

var G__25788 = cljs.core.next.call(null,seq__25772__$1);
var G__25789 = null;
var G__25790 = (0);
var G__25791 = (0);
seq__25772 = G__25788;
chunk__25773 = G__25789;
count__25774 = G__25790;
i__25775 = G__25791;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25792 = [];
var len__17575__auto___25795 = arguments.length;
var i__17576__auto___25796 = (0);
while(true){
if((i__17576__auto___25796 < len__17575__auto___25795)){
args25792.push((arguments[i__17576__auto___25796]));

var G__25797 = (i__17576__auto___25796 + (1));
i__17576__auto___25796 = G__25797;
continue;
} else {
}
break;
}

var G__25794 = args25792.length;
switch (G__25794) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25792.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17582__auto__ = [];
var len__17575__auto___25803 = arguments.length;
var i__17576__auto___25804 = (0);
while(true){
if((i__17576__auto___25804 < len__17575__auto___25803)){
args__17582__auto__.push((arguments[i__17576__auto___25804]));

var G__25805 = (i__17576__auto___25804 + (1));
i__17576__auto___25804 = G__25805;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((0) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17583__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25800){
var map__25801 = p__25800;
var map__25801__$1 = ((((!((map__25801 == null)))?((((map__25801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25801):map__25801);
var opts = map__25801__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25799){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25799));
});

//# sourceMappingURL=client.js.map?rel=1441561822537