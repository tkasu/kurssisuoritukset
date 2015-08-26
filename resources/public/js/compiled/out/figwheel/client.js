// Compiled by ClojureScript 0.0-3211 {}
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
var G__25265__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25266__i = 0, G__25266__a = new Array(arguments.length -  0);
while (G__25266__i < G__25266__a.length) {G__25266__a[G__25266__i] = arguments[G__25266__i + 0]; ++G__25266__i;}
  args = new cljs.core.IndexedSeq(G__25266__a,0);
} 
return G__25265__delegate.call(this,args);};
G__25265.cljs$lang$maxFixedArity = 0;
G__25265.cljs$lang$applyTo = (function (arglist__25267){
var args = cljs.core.seq(arglist__25267);
return G__25265__delegate(args);
});
G__25265.cljs$core$IFn$_invoke$arity$variadic = G__25265__delegate;
return G__25265;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25268){
var map__25270 = p__25268;
var map__25270__$1 = ((cljs.core.seq_QMARK_.call(null,map__25270))?cljs.core.apply.call(null,cljs.core.hash_map,map__25270):map__25270);
var class$ = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18121__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18109__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18109__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18109__auto__;
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
var c__21347__auto___25399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___25399,ch){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___25399,ch){
return (function (state_25373){
var state_val_25374 = (state_25373[(1)]);
if((state_val_25374 === (7))){
var inst_25369 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25375_25400 = state_25373__$1;
(statearr_25375_25400[(2)] = inst_25369);

(statearr_25375_25400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (1))){
var state_25373__$1 = state_25373;
var statearr_25376_25401 = state_25373__$1;
(statearr_25376_25401[(2)] = null);

(statearr_25376_25401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (4))){
var inst_25337 = (state_25373[(7)]);
var inst_25337__$1 = (state_25373[(2)]);
var state_25373__$1 = (function (){var statearr_25377 = state_25373;
(statearr_25377[(7)] = inst_25337__$1);

return statearr_25377;
})();
if(cljs.core.truth_(inst_25337__$1)){
var statearr_25378_25402 = state_25373__$1;
(statearr_25378_25402[(1)] = (5));

} else {
var statearr_25379_25403 = state_25373__$1;
(statearr_25379_25403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (13))){
var state_25373__$1 = state_25373;
var statearr_25380_25404 = state_25373__$1;
(statearr_25380_25404[(2)] = null);

(statearr_25380_25404[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (6))){
var state_25373__$1 = state_25373;
var statearr_25381_25405 = state_25373__$1;
(statearr_25381_25405[(2)] = null);

(statearr_25381_25405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (3))){
var inst_25371 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25373__$1,inst_25371);
} else {
if((state_val_25374 === (12))){
var inst_25344 = (state_25373[(8)]);
var inst_25357 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25344);
var inst_25358 = cljs.core.first.call(null,inst_25357);
var inst_25359 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25358);
var inst_25360 = console.warn("Figwheel: Not loading code with warnings - ",inst_25359);
var state_25373__$1 = state_25373;
var statearr_25382_25406 = state_25373__$1;
(statearr_25382_25406[(2)] = inst_25360);

(statearr_25382_25406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (2))){
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25373__$1,(4),ch);
} else {
if((state_val_25374 === (11))){
var inst_25353 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25383_25407 = state_25373__$1;
(statearr_25383_25407[(2)] = inst_25353);

(statearr_25383_25407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (9))){
var inst_25343 = (state_25373[(9)]);
var inst_25355 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25343,opts);
var state_25373__$1 = state_25373;
if(cljs.core.truth_(inst_25355)){
var statearr_25384_25408 = state_25373__$1;
(statearr_25384_25408[(1)] = (12));

} else {
var statearr_25385_25409 = state_25373__$1;
(statearr_25385_25409[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (5))){
var inst_25343 = (state_25373[(9)]);
var inst_25337 = (state_25373[(7)]);
var inst_25339 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25340 = (new cljs.core.PersistentArrayMap(null,2,inst_25339,null));
var inst_25341 = (new cljs.core.PersistentHashSet(null,inst_25340,null));
var inst_25342 = figwheel.client.focus_msgs.call(null,inst_25341,inst_25337);
var inst_25343__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25342);
var inst_25344 = cljs.core.first.call(null,inst_25342);
var inst_25345 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25343__$1,opts);
var state_25373__$1 = (function (){var statearr_25386 = state_25373;
(statearr_25386[(9)] = inst_25343__$1);

(statearr_25386[(8)] = inst_25344);

return statearr_25386;
})();
if(cljs.core.truth_(inst_25345)){
var statearr_25387_25410 = state_25373__$1;
(statearr_25387_25410[(1)] = (8));

} else {
var statearr_25388_25411 = state_25373__$1;
(statearr_25388_25411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (14))){
var inst_25363 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25389_25412 = state_25373__$1;
(statearr_25389_25412[(2)] = inst_25363);

(statearr_25389_25412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (10))){
var inst_25365 = (state_25373[(2)]);
var state_25373__$1 = (function (){var statearr_25390 = state_25373;
(statearr_25390[(10)] = inst_25365);

return statearr_25390;
})();
var statearr_25391_25413 = state_25373__$1;
(statearr_25391_25413[(2)] = null);

(statearr_25391_25413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (8))){
var inst_25344 = (state_25373[(8)]);
var inst_25347 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25348 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25344);
var inst_25349 = cljs.core.async.timeout.call(null,(1000));
var inst_25350 = [inst_25348,inst_25349];
var inst_25351 = (new cljs.core.PersistentVector(null,2,(5),inst_25347,inst_25350,null));
var state_25373__$1 = state_25373;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25373__$1,(11),inst_25351);
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
});})(c__21347__auto___25399,ch))
;
return ((function (switch__21285__auto__,c__21347__auto___25399,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21286__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21286__auto____0 = (function (){
var statearr_25395 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25395[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21286__auto__);

(statearr_25395[(1)] = (1));

return statearr_25395;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21286__auto____1 = (function (state_25373){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_25373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e25396){if((e25396 instanceof Object)){
var ex__21289__auto__ = e25396;
var statearr_25397_25414 = state_25373;
(statearr_25397_25414[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25415 = state_25373;
state_25373 = G__25415;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21286__auto__ = function(state_25373){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21286__auto____1.call(this,state_25373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21286__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21286__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___25399,ch))
})();
var state__21349__auto__ = (function (){var statearr_25398 = f__21348__auto__.call(null);
(statearr_25398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___25399);

return statearr_25398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___25399,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25416_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25416_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_25423 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25423){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_25421 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25422 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25421,_STAR_print_newline_STAR_25422,base_path_25423){
return (function() { 
var G__25424__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25425__i = 0, G__25425__a = new Array(arguments.length -  0);
while (G__25425__i < G__25425__a.length) {G__25425__a[G__25425__i] = arguments[G__25425__i + 0]; ++G__25425__i;}
  args = new cljs.core.IndexedSeq(G__25425__a,0);
} 
return G__25424__delegate.call(this,args);};
G__25424.cljs$lang$maxFixedArity = 0;
G__25424.cljs$lang$applyTo = (function (arglist__25426){
var args = cljs.core.seq(arglist__25426);
return G__25424__delegate(args);
});
G__25424.cljs$core$IFn$_invoke$arity$variadic = G__25424__delegate;
return G__25424;
})()
;})(_STAR_print_fn_STAR_25421,_STAR_print_newline_STAR_25422,base_path_25423))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25422;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25421;
}}catch (e25420){if((e25420 instanceof Error)){
var e = e25420;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25423], null));
} else {
var e = e25420;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25423))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25427){
var map__25432 = p__25427;
var map__25432__$1 = ((cljs.core.seq_QMARK_.call(null,map__25432))?cljs.core.apply.call(null,cljs.core.hash_map,map__25432):map__25432);
var opts = map__25432__$1;
var build_id = cljs.core.get.call(null,map__25432__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25432,map__25432__$1,opts,build_id){
return (function (p__25433){
var vec__25434 = p__25433;
var map__25435 = cljs.core.nth.call(null,vec__25434,(0),null);
var map__25435__$1 = ((cljs.core.seq_QMARK_.call(null,map__25435))?cljs.core.apply.call(null,cljs.core.hash_map,map__25435):map__25435);
var msg = map__25435__$1;
var msg_name = cljs.core.get.call(null,map__25435__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25434,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__25434,map__25435,map__25435__$1,msg,msg_name,_,map__25432,map__25432__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25434,map__25435,map__25435__$1,msg,msg_name,_,map__25432,map__25432__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25432,map__25432__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25439){
var vec__25440 = p__25439;
var map__25441 = cljs.core.nth.call(null,vec__25440,(0),null);
var map__25441__$1 = ((cljs.core.seq_QMARK_.call(null,map__25441))?cljs.core.apply.call(null,cljs.core.hash_map,map__25441):map__25441);
var msg = map__25441__$1;
var msg_name = cljs.core.get.call(null,map__25441__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25440,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25442){
var map__25450 = p__25442;
var map__25450__$1 = ((cljs.core.seq_QMARK_.call(null,map__25450))?cljs.core.apply.call(null,cljs.core.hash_map,map__25450):map__25450);
var on_compile_fail = cljs.core.get.call(null,map__25450__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__25450__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__25450,map__25450__$1,on_compile_fail,on_compile_warning){
return (function (p__25451){
var vec__25452 = p__25451;
var map__25453 = cljs.core.nth.call(null,vec__25452,(0),null);
var map__25453__$1 = ((cljs.core.seq_QMARK_.call(null,map__25453))?cljs.core.apply.call(null,cljs.core.hash_map,map__25453):map__25453);
var msg = map__25453__$1;
var msg_name = cljs.core.get.call(null,map__25453__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25452,(1));
var pred__25454 = cljs.core._EQ_;
var expr__25455 = msg_name;
if(cljs.core.truth_(pred__25454.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25455))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25454.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25455))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25450,map__25450__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__,msg_hist,msg_names,msg){
return (function (state_25656){
var state_val_25657 = (state_25656[(1)]);
if((state_val_25657 === (7))){
var inst_25590 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25658_25699 = state_25656__$1;
(statearr_25658_25699[(2)] = inst_25590);

(statearr_25658_25699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (20))){
var inst_25618 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25656__$1 = state_25656;
if(cljs.core.truth_(inst_25618)){
var statearr_25659_25700 = state_25656__$1;
(statearr_25659_25700[(1)] = (22));

} else {
var statearr_25660_25701 = state_25656__$1;
(statearr_25660_25701[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (27))){
var inst_25630 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25631 = figwheel.client.heads_up.display_warning.call(null,inst_25630);
var state_25656__$1 = state_25656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25656__$1,(30),inst_25631);
} else {
if((state_val_25657 === (1))){
var inst_25578 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25656__$1 = state_25656;
if(cljs.core.truth_(inst_25578)){
var statearr_25661_25702 = state_25656__$1;
(statearr_25661_25702[(1)] = (2));

} else {
var statearr_25662_25703 = state_25656__$1;
(statearr_25662_25703[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (24))){
var inst_25646 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25663_25704 = state_25656__$1;
(statearr_25663_25704[(2)] = inst_25646);

(statearr_25663_25704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (4))){
var inst_25654 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25656__$1,inst_25654);
} else {
if((state_val_25657 === (15))){
var inst_25606 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25607 = figwheel.client.format_messages.call(null,inst_25606);
var inst_25608 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25609 = figwheel.client.heads_up.display_error.call(null,inst_25607,inst_25608);
var state_25656__$1 = state_25656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25656__$1,(18),inst_25609);
} else {
if((state_val_25657 === (21))){
var inst_25648 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25664_25705 = state_25656__$1;
(statearr_25664_25705[(2)] = inst_25648);

(statearr_25664_25705[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (31))){
var inst_25637 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25656__$1 = state_25656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25656__$1,(34),inst_25637);
} else {
if((state_val_25657 === (32))){
var state_25656__$1 = state_25656;
var statearr_25665_25706 = state_25656__$1;
(statearr_25665_25706[(2)] = null);

(statearr_25665_25706[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (33))){
var inst_25642 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25666_25707 = state_25656__$1;
(statearr_25666_25707[(2)] = inst_25642);

(statearr_25666_25707[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (13))){
var inst_25596 = (state_25656[(2)]);
var inst_25597 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25598 = figwheel.client.format_messages.call(null,inst_25597);
var inst_25599 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25600 = figwheel.client.heads_up.display_error.call(null,inst_25598,inst_25599);
var state_25656__$1 = (function (){var statearr_25667 = state_25656;
(statearr_25667[(7)] = inst_25596);

return statearr_25667;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25656__$1,(14),inst_25600);
} else {
if((state_val_25657 === (22))){
var inst_25620 = figwheel.client.heads_up.clear.call(null);
var state_25656__$1 = state_25656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25656__$1,(25),inst_25620);
} else {
if((state_val_25657 === (29))){
var inst_25644 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25668_25708 = state_25656__$1;
(statearr_25668_25708[(2)] = inst_25644);

(statearr_25668_25708[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (6))){
var inst_25586 = figwheel.client.heads_up.clear.call(null);
var state_25656__$1 = state_25656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25656__$1,(9),inst_25586);
} else {
if((state_val_25657 === (28))){
var inst_25635 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25656__$1 = state_25656;
if(cljs.core.truth_(inst_25635)){
var statearr_25669_25709 = state_25656__$1;
(statearr_25669_25709[(1)] = (31));

} else {
var statearr_25670_25710 = state_25656__$1;
(statearr_25670_25710[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (25))){
var inst_25622 = (state_25656[(2)]);
var inst_25623 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25624 = figwheel.client.heads_up.display_warning.call(null,inst_25623);
var state_25656__$1 = (function (){var statearr_25671 = state_25656;
(statearr_25671[(8)] = inst_25622);

return statearr_25671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25656__$1,(26),inst_25624);
} else {
if((state_val_25657 === (34))){
var inst_25639 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25672_25711 = state_25656__$1;
(statearr_25672_25711[(2)] = inst_25639);

(statearr_25672_25711[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (17))){
var inst_25650 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25673_25712 = state_25656__$1;
(statearr_25673_25712[(2)] = inst_25650);

(statearr_25673_25712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (3))){
var inst_25592 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25656__$1 = state_25656;
if(cljs.core.truth_(inst_25592)){
var statearr_25674_25713 = state_25656__$1;
(statearr_25674_25713[(1)] = (10));

} else {
var statearr_25675_25714 = state_25656__$1;
(statearr_25675_25714[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (12))){
var inst_25652 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25676_25715 = state_25656__$1;
(statearr_25676_25715[(2)] = inst_25652);

(statearr_25676_25715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (2))){
var inst_25580 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25656__$1 = state_25656;
if(cljs.core.truth_(inst_25580)){
var statearr_25677_25716 = state_25656__$1;
(statearr_25677_25716[(1)] = (5));

} else {
var statearr_25678_25717 = state_25656__$1;
(statearr_25678_25717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (23))){
var inst_25628 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25656__$1 = state_25656;
if(cljs.core.truth_(inst_25628)){
var statearr_25679_25718 = state_25656__$1;
(statearr_25679_25718[(1)] = (27));

} else {
var statearr_25680_25719 = state_25656__$1;
(statearr_25680_25719[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (19))){
var inst_25615 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25616 = figwheel.client.heads_up.append_message.call(null,inst_25615);
var state_25656__$1 = state_25656;
var statearr_25681_25720 = state_25656__$1;
(statearr_25681_25720[(2)] = inst_25616);

(statearr_25681_25720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (11))){
var inst_25604 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25656__$1 = state_25656;
if(cljs.core.truth_(inst_25604)){
var statearr_25682_25721 = state_25656__$1;
(statearr_25682_25721[(1)] = (15));

} else {
var statearr_25683_25722 = state_25656__$1;
(statearr_25683_25722[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (9))){
var inst_25588 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25684_25723 = state_25656__$1;
(statearr_25684_25723[(2)] = inst_25588);

(statearr_25684_25723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (5))){
var inst_25582 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25656__$1 = state_25656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25656__$1,(8),inst_25582);
} else {
if((state_val_25657 === (14))){
var inst_25602 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25685_25724 = state_25656__$1;
(statearr_25685_25724[(2)] = inst_25602);

(statearr_25685_25724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (26))){
var inst_25626 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25686_25725 = state_25656__$1;
(statearr_25686_25725[(2)] = inst_25626);

(statearr_25686_25725[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (16))){
var inst_25613 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25656__$1 = state_25656;
if(cljs.core.truth_(inst_25613)){
var statearr_25687_25726 = state_25656__$1;
(statearr_25687_25726[(1)] = (19));

} else {
var statearr_25688_25727 = state_25656__$1;
(statearr_25688_25727[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (30))){
var inst_25633 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25689_25728 = state_25656__$1;
(statearr_25689_25728[(2)] = inst_25633);

(statearr_25689_25728[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (10))){
var inst_25594 = figwheel.client.heads_up.clear.call(null);
var state_25656__$1 = state_25656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25656__$1,(13),inst_25594);
} else {
if((state_val_25657 === (18))){
var inst_25611 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25690_25729 = state_25656__$1;
(statearr_25690_25729[(2)] = inst_25611);

(statearr_25690_25729[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (8))){
var inst_25584 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25691_25730 = state_25656__$1;
(statearr_25691_25730[(2)] = inst_25584);

(statearr_25691_25730[(1)] = (7));


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
});})(c__21347__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21285__auto__,c__21347__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto____0 = (function (){
var statearr_25695 = [null,null,null,null,null,null,null,null,null];
(statearr_25695[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto__);

(statearr_25695[(1)] = (1));

return statearr_25695;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto____1 = (function (state_25656){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_25656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e25696){if((e25696 instanceof Object)){
var ex__21289__auto__ = e25696;
var statearr_25697_25731 = state_25656;
(statearr_25697_25731[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25732 = state_25656;
state_25656 = G__25732;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto__ = function(state_25656){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto____1.call(this,state_25656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__,msg_hist,msg_names,msg))
})();
var state__21349__auto__ = (function (){var statearr_25698 = f__21348__auto__.call(null);
(statearr_25698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_25698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__,msg_hist,msg_names,msg))
);

return c__21347__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21347__auto___25795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___25795,ch){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___25795,ch){
return (function (state_25778){
var state_val_25779 = (state_25778[(1)]);
if((state_val_25779 === (8))){
var inst_25770 = (state_25778[(2)]);
var state_25778__$1 = (function (){var statearr_25780 = state_25778;
(statearr_25780[(7)] = inst_25770);

return statearr_25780;
})();
var statearr_25781_25796 = state_25778__$1;
(statearr_25781_25796[(2)] = null);

(statearr_25781_25796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25779 === (7))){
var inst_25774 = (state_25778[(2)]);
var state_25778__$1 = state_25778;
var statearr_25782_25797 = state_25778__$1;
(statearr_25782_25797[(2)] = inst_25774);

(statearr_25782_25797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25779 === (6))){
var state_25778__$1 = state_25778;
var statearr_25783_25798 = state_25778__$1;
(statearr_25783_25798[(2)] = null);

(statearr_25783_25798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25779 === (5))){
var inst_25766 = (state_25778[(8)]);
var inst_25768 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25766);
var state_25778__$1 = state_25778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25778__$1,(8),inst_25768);
} else {
if((state_val_25779 === (4))){
var inst_25766 = (state_25778[(8)]);
var inst_25766__$1 = (state_25778[(2)]);
var state_25778__$1 = (function (){var statearr_25784 = state_25778;
(statearr_25784[(8)] = inst_25766__$1);

return statearr_25784;
})();
if(cljs.core.truth_(inst_25766__$1)){
var statearr_25785_25799 = state_25778__$1;
(statearr_25785_25799[(1)] = (5));

} else {
var statearr_25786_25800 = state_25778__$1;
(statearr_25786_25800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25779 === (3))){
var inst_25776 = (state_25778[(2)]);
var state_25778__$1 = state_25778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25778__$1,inst_25776);
} else {
if((state_val_25779 === (2))){
var state_25778__$1 = state_25778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25778__$1,(4),ch);
} else {
if((state_val_25779 === (1))){
var state_25778__$1 = state_25778;
var statearr_25787_25801 = state_25778__$1;
(statearr_25787_25801[(2)] = null);

(statearr_25787_25801[(1)] = (2));


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
});})(c__21347__auto___25795,ch))
;
return ((function (switch__21285__auto__,c__21347__auto___25795,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21286__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21286__auto____0 = (function (){
var statearr_25791 = [null,null,null,null,null,null,null,null,null];
(statearr_25791[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21286__auto__);

(statearr_25791[(1)] = (1));

return statearr_25791;
});
var figwheel$client$heads_up_plugin_$_state_machine__21286__auto____1 = (function (state_25778){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_25778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e25792){if((e25792 instanceof Object)){
var ex__21289__auto__ = e25792;
var statearr_25793_25802 = state_25778;
(statearr_25793_25802[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25803 = state_25778;
state_25778 = G__25803;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21286__auto__ = function(state_25778){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21286__auto____1.call(this,state_25778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21286__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21286__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___25795,ch))
})();
var state__21349__auto__ = (function (){var statearr_25794 = f__21348__auto__.call(null);
(statearr_25794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___25795);

return statearr_25794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___25795,ch))
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
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__){
return (function (state_25824){
var state_val_25825 = (state_25824[(1)]);
if((state_val_25825 === (2))){
var inst_25821 = (state_25824[(2)]);
var inst_25822 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25824__$1 = (function (){var statearr_25826 = state_25824;
(statearr_25826[(7)] = inst_25821);

return statearr_25826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25824__$1,inst_25822);
} else {
if((state_val_25825 === (1))){
var inst_25819 = cljs.core.async.timeout.call(null,(3000));
var state_25824__$1 = state_25824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25824__$1,(2),inst_25819);
} else {
return null;
}
}
});})(c__21347__auto__))
;
return ((function (switch__21285__auto__,c__21347__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21286__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21286__auto____0 = (function (){
var statearr_25830 = [null,null,null,null,null,null,null,null];
(statearr_25830[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21286__auto__);

(statearr_25830[(1)] = (1));

return statearr_25830;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21286__auto____1 = (function (state_25824){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_25824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e25831){if((e25831 instanceof Object)){
var ex__21289__auto__ = e25831;
var statearr_25832_25834 = state_25824;
(statearr_25832_25834[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25835 = state_25824;
state_25824 = G__25835;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21286__auto__ = function(state_25824){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21286__auto____1.call(this,state_25824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21286__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21286__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__))
})();
var state__21349__auto__ = (function (){var statearr_25833 = f__21348__auto__.call(null);
(statearr_25833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_25833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__))
);

return c__21347__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25836){
var map__25842 = p__25836;
var map__25842__$1 = ((cljs.core.seq_QMARK_.call(null,map__25842))?cljs.core.apply.call(null,cljs.core.hash_map,map__25842):map__25842);
var ed = map__25842__$1;
var cause = cljs.core.get.call(null,map__25842__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__25842__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__25842__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25843_25847 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25844_25848 = null;
var count__25845_25849 = (0);
var i__25846_25850 = (0);
while(true){
if((i__25846_25850 < count__25845_25849)){
var msg_25851 = cljs.core._nth.call(null,chunk__25844_25848,i__25846_25850);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25851);

var G__25852 = seq__25843_25847;
var G__25853 = chunk__25844_25848;
var G__25854 = count__25845_25849;
var G__25855 = (i__25846_25850 + (1));
seq__25843_25847 = G__25852;
chunk__25844_25848 = G__25853;
count__25845_25849 = G__25854;
i__25846_25850 = G__25855;
continue;
} else {
var temp__4126__auto___25856 = cljs.core.seq.call(null,seq__25843_25847);
if(temp__4126__auto___25856){
var seq__25843_25857__$1 = temp__4126__auto___25856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25843_25857__$1)){
var c__18906__auto___25858 = cljs.core.chunk_first.call(null,seq__25843_25857__$1);
var G__25859 = cljs.core.chunk_rest.call(null,seq__25843_25857__$1);
var G__25860 = c__18906__auto___25858;
var G__25861 = cljs.core.count.call(null,c__18906__auto___25858);
var G__25862 = (0);
seq__25843_25847 = G__25859;
chunk__25844_25848 = G__25860;
count__25845_25849 = G__25861;
i__25846_25850 = G__25862;
continue;
} else {
var msg_25863 = cljs.core.first.call(null,seq__25843_25857__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25863);

var G__25864 = cljs.core.next.call(null,seq__25843_25857__$1);
var G__25865 = null;
var G__25866 = (0);
var G__25867 = (0);
seq__25843_25847 = G__25864;
chunk__25844_25848 = G__25865;
count__25845_25849 = G__25866;
i__25846_25850 = G__25867;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25868){
var map__25870 = p__25868;
var map__25870__$1 = ((cljs.core.seq_QMARK_.call(null,map__25870))?cljs.core.apply.call(null,cljs.core.hash_map,map__25870):map__25870);
var w = map__25870__$1;
var message = cljs.core.get.call(null,map__25870__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__18109__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18109__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18109__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25877 = cljs.core.seq.call(null,plugins);
var chunk__25878 = null;
var count__25879 = (0);
var i__25880 = (0);
while(true){
if((i__25880 < count__25879)){
var vec__25881 = cljs.core._nth.call(null,chunk__25878,i__25880);
var k = cljs.core.nth.call(null,vec__25881,(0),null);
var plugin = cljs.core.nth.call(null,vec__25881,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25883 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25877,chunk__25878,count__25879,i__25880,pl_25883,vec__25881,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25883.call(null,msg_hist);
});})(seq__25877,chunk__25878,count__25879,i__25880,pl_25883,vec__25881,k,plugin))
);
} else {
}

var G__25884 = seq__25877;
var G__25885 = chunk__25878;
var G__25886 = count__25879;
var G__25887 = (i__25880 + (1));
seq__25877 = G__25884;
chunk__25878 = G__25885;
count__25879 = G__25886;
i__25880 = G__25887;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25877);
if(temp__4126__auto__){
var seq__25877__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25877__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__25877__$1);
var G__25888 = cljs.core.chunk_rest.call(null,seq__25877__$1);
var G__25889 = c__18906__auto__;
var G__25890 = cljs.core.count.call(null,c__18906__auto__);
var G__25891 = (0);
seq__25877 = G__25888;
chunk__25878 = G__25889;
count__25879 = G__25890;
i__25880 = G__25891;
continue;
} else {
var vec__25882 = cljs.core.first.call(null,seq__25877__$1);
var k = cljs.core.nth.call(null,vec__25882,(0),null);
var plugin = cljs.core.nth.call(null,vec__25882,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25892 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25877,chunk__25878,count__25879,i__25880,pl_25892,vec__25882,k,plugin,seq__25877__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25892.call(null,msg_hist);
});})(seq__25877,chunk__25878,count__25879,i__25880,pl_25892,vec__25882,k,plugin,seq__25877__$1,temp__4126__auto__))
);
} else {
}

var G__25893 = cljs.core.next.call(null,seq__25877__$1);
var G__25894 = null;
var G__25895 = (0);
var G__25896 = (0);
seq__25877 = G__25893;
chunk__25878 = G__25894;
count__25879 = G__25895;
i__25880 = G__25896;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__25898 = arguments.length;
switch (G__25898) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25901){
var map__25902 = p__25901;
var map__25902__$1 = ((cljs.core.seq_QMARK_.call(null,map__25902))?cljs.core.apply.call(null,cljs.core.hash_map,map__25902):map__25902);
var opts = map__25902__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25900){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25900));
});

//# sourceMappingURL=client.js.map?rel=1440563458911