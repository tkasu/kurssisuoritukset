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
var G__24392__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24393__i = 0, G__24393__a = new Array(arguments.length -  0);
while (G__24393__i < G__24393__a.length) {G__24393__a[G__24393__i] = arguments[G__24393__i + 0]; ++G__24393__i;}
  args = new cljs.core.IndexedSeq(G__24393__a,0);
} 
return G__24392__delegate.call(this,args);};
G__24392.cljs$lang$maxFixedArity = 0;
G__24392.cljs$lang$applyTo = (function (arglist__24394){
var args = cljs.core.seq(arglist__24394);
return G__24392__delegate(args);
});
G__24392.cljs$core$IFn$_invoke$arity$variadic = G__24392__delegate;
return G__24392;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24395){
var map__24398 = p__24395;
var map__24398__$1 = ((((!((map__24398 == null)))?((((map__24398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24398):map__24398);
var message = cljs.core.get.call(null,map__24398__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24398__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20007__auto___24528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___24528,ch){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___24528,ch){
return (function (state_24502){
var state_val_24503 = (state_24502[(1)]);
if((state_val_24503 === (7))){
var inst_24498 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24504_24529 = state_24502__$1;
(statearr_24504_24529[(2)] = inst_24498);

(statearr_24504_24529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (1))){
var state_24502__$1 = state_24502;
var statearr_24505_24530 = state_24502__$1;
(statearr_24505_24530[(2)] = null);

(statearr_24505_24530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (4))){
var inst_24466 = (state_24502[(7)]);
var inst_24466__$1 = (state_24502[(2)]);
var state_24502__$1 = (function (){var statearr_24506 = state_24502;
(statearr_24506[(7)] = inst_24466__$1);

return statearr_24506;
})();
if(cljs.core.truth_(inst_24466__$1)){
var statearr_24507_24531 = state_24502__$1;
(statearr_24507_24531[(1)] = (5));

} else {
var statearr_24508_24532 = state_24502__$1;
(statearr_24508_24532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (13))){
var state_24502__$1 = state_24502;
var statearr_24509_24533 = state_24502__$1;
(statearr_24509_24533[(2)] = null);

(statearr_24509_24533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (6))){
var state_24502__$1 = state_24502;
var statearr_24510_24534 = state_24502__$1;
(statearr_24510_24534[(2)] = null);

(statearr_24510_24534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (3))){
var inst_24500 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24502__$1,inst_24500);
} else {
if((state_val_24503 === (12))){
var inst_24473 = (state_24502[(8)]);
var inst_24486 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24473);
var inst_24487 = cljs.core.first.call(null,inst_24486);
var inst_24488 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24487);
var inst_24489 = console.warn("Figwheel: Not loading code with warnings - ",inst_24488);
var state_24502__$1 = state_24502;
var statearr_24511_24535 = state_24502__$1;
(statearr_24511_24535[(2)] = inst_24489);

(statearr_24511_24535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (2))){
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(4),ch);
} else {
if((state_val_24503 === (11))){
var inst_24482 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24512_24536 = state_24502__$1;
(statearr_24512_24536[(2)] = inst_24482);

(statearr_24512_24536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (9))){
var inst_24472 = (state_24502[(9)]);
var inst_24484 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24472,opts);
var state_24502__$1 = state_24502;
if(cljs.core.truth_(inst_24484)){
var statearr_24513_24537 = state_24502__$1;
(statearr_24513_24537[(1)] = (12));

} else {
var statearr_24514_24538 = state_24502__$1;
(statearr_24514_24538[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (5))){
var inst_24472 = (state_24502[(9)]);
var inst_24466 = (state_24502[(7)]);
var inst_24468 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24469 = (new cljs.core.PersistentArrayMap(null,2,inst_24468,null));
var inst_24470 = (new cljs.core.PersistentHashSet(null,inst_24469,null));
var inst_24471 = figwheel.client.focus_msgs.call(null,inst_24470,inst_24466);
var inst_24472__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24471);
var inst_24473 = cljs.core.first.call(null,inst_24471);
var inst_24474 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24472__$1,opts);
var state_24502__$1 = (function (){var statearr_24515 = state_24502;
(statearr_24515[(9)] = inst_24472__$1);

(statearr_24515[(8)] = inst_24473);

return statearr_24515;
})();
if(cljs.core.truth_(inst_24474)){
var statearr_24516_24539 = state_24502__$1;
(statearr_24516_24539[(1)] = (8));

} else {
var statearr_24517_24540 = state_24502__$1;
(statearr_24517_24540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (14))){
var inst_24492 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24518_24541 = state_24502__$1;
(statearr_24518_24541[(2)] = inst_24492);

(statearr_24518_24541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (10))){
var inst_24494 = (state_24502[(2)]);
var state_24502__$1 = (function (){var statearr_24519 = state_24502;
(statearr_24519[(10)] = inst_24494);

return statearr_24519;
})();
var statearr_24520_24542 = state_24502__$1;
(statearr_24520_24542[(2)] = null);

(statearr_24520_24542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (8))){
var inst_24473 = (state_24502[(8)]);
var inst_24476 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24477 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24473);
var inst_24478 = cljs.core.async.timeout.call(null,(1000));
var inst_24479 = [inst_24477,inst_24478];
var inst_24480 = (new cljs.core.PersistentVector(null,2,(5),inst_24476,inst_24479,null));
var state_24502__$1 = state_24502;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24502__$1,(11),inst_24480);
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
});})(c__20007__auto___24528,ch))
;
return ((function (switch__19942__auto__,c__20007__auto___24528,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19943__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19943__auto____0 = (function (){
var statearr_24524 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24524[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19943__auto__);

(statearr_24524[(1)] = (1));

return statearr_24524;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19943__auto____1 = (function (state_24502){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_24502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e24525){if((e24525 instanceof Object)){
var ex__19946__auto__ = e24525;
var statearr_24526_24543 = state_24502;
(statearr_24526_24543[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24544 = state_24502;
state_24502 = G__24544;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19943__auto__ = function(state_24502){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19943__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19943__auto____1.call(this,state_24502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19943__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19943__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___24528,ch))
})();
var state__20009__auto__ = (function (){var statearr_24527 = f__20008__auto__.call(null);
(statearr_24527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___24528);

return statearr_24527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___24528,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24545_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24545_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_24552 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24552){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24550 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24551 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24550,_STAR_print_newline_STAR_24551,base_path_24552){
return (function() { 
var G__24553__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24554__i = 0, G__24554__a = new Array(arguments.length -  0);
while (G__24554__i < G__24554__a.length) {G__24554__a[G__24554__i] = arguments[G__24554__i + 0]; ++G__24554__i;}
  args = new cljs.core.IndexedSeq(G__24554__a,0);
} 
return G__24553__delegate.call(this,args);};
G__24553.cljs$lang$maxFixedArity = 0;
G__24553.cljs$lang$applyTo = (function (arglist__24555){
var args = cljs.core.seq(arglist__24555);
return G__24553__delegate(args);
});
G__24553.cljs$core$IFn$_invoke$arity$variadic = G__24553__delegate;
return G__24553;
})()
;})(_STAR_print_fn_STAR_24550,_STAR_print_newline_STAR_24551,base_path_24552))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24551;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24550;
}}catch (e24549){if((e24549 instanceof Error)){
var e = e24549;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24552], null));
} else {
var e = e24549;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24552))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24556){
var map__24563 = p__24556;
var map__24563__$1 = ((((!((map__24563 == null)))?((((map__24563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24563):map__24563);
var opts = map__24563__$1;
var build_id = cljs.core.get.call(null,map__24563__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24563,map__24563__$1,opts,build_id){
return (function (p__24565){
var vec__24566 = p__24565;
var map__24567 = cljs.core.nth.call(null,vec__24566,(0),null);
var map__24567__$1 = ((((!((map__24567 == null)))?((((map__24567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24567):map__24567);
var msg = map__24567__$1;
var msg_name = cljs.core.get.call(null,map__24567__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24566,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24566,map__24567,map__24567__$1,msg,msg_name,_,map__24563,map__24563__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24566,map__24567,map__24567__$1,msg,msg_name,_,map__24563,map__24563__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24563,map__24563__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24573){
var vec__24574 = p__24573;
var map__24575 = cljs.core.nth.call(null,vec__24574,(0),null);
var map__24575__$1 = ((((!((map__24575 == null)))?((((map__24575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24575):map__24575);
var msg = map__24575__$1;
var msg_name = cljs.core.get.call(null,map__24575__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24574,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24577){
var map__24587 = p__24577;
var map__24587__$1 = ((((!((map__24587 == null)))?((((map__24587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24587):map__24587);
var on_compile_warning = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24587,map__24587__$1,on_compile_warning,on_compile_fail){
return (function (p__24589){
var vec__24590 = p__24589;
var map__24591 = cljs.core.nth.call(null,vec__24590,(0),null);
var map__24591__$1 = ((((!((map__24591 == null)))?((((map__24591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24591):map__24591);
var msg = map__24591__$1;
var msg_name = cljs.core.get.call(null,map__24591__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24590,(1));
var pred__24593 = cljs.core._EQ_;
var expr__24594 = msg_name;
if(cljs.core.truth_(pred__24593.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24594))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24593.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24594))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24587,map__24587__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto__,msg_hist,msg_names,msg){
return (function (state_24795){
var state_val_24796 = (state_24795[(1)]);
if((state_val_24796 === (7))){
var inst_24729 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24797_24838 = state_24795__$1;
(statearr_24797_24838[(2)] = inst_24729);

(statearr_24797_24838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (20))){
var inst_24757 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24795__$1 = state_24795;
if(cljs.core.truth_(inst_24757)){
var statearr_24798_24839 = state_24795__$1;
(statearr_24798_24839[(1)] = (22));

} else {
var statearr_24799_24840 = state_24795__$1;
(statearr_24799_24840[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (27))){
var inst_24769 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24770 = figwheel.client.heads_up.display_warning.call(null,inst_24769);
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24795__$1,(30),inst_24770);
} else {
if((state_val_24796 === (1))){
var inst_24717 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24795__$1 = state_24795;
if(cljs.core.truth_(inst_24717)){
var statearr_24800_24841 = state_24795__$1;
(statearr_24800_24841[(1)] = (2));

} else {
var statearr_24801_24842 = state_24795__$1;
(statearr_24801_24842[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (24))){
var inst_24785 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24802_24843 = state_24795__$1;
(statearr_24802_24843[(2)] = inst_24785);

(statearr_24802_24843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (4))){
var inst_24793 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24795__$1,inst_24793);
} else {
if((state_val_24796 === (15))){
var inst_24745 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24746 = figwheel.client.format_messages.call(null,inst_24745);
var inst_24747 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24748 = figwheel.client.heads_up.display_error.call(null,inst_24746,inst_24747);
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24795__$1,(18),inst_24748);
} else {
if((state_val_24796 === (21))){
var inst_24787 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24803_24844 = state_24795__$1;
(statearr_24803_24844[(2)] = inst_24787);

(statearr_24803_24844[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (31))){
var inst_24776 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24795__$1,(34),inst_24776);
} else {
if((state_val_24796 === (32))){
var state_24795__$1 = state_24795;
var statearr_24804_24845 = state_24795__$1;
(statearr_24804_24845[(2)] = null);

(statearr_24804_24845[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (33))){
var inst_24781 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24805_24846 = state_24795__$1;
(statearr_24805_24846[(2)] = inst_24781);

(statearr_24805_24846[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (13))){
var inst_24735 = (state_24795[(2)]);
var inst_24736 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24737 = figwheel.client.format_messages.call(null,inst_24736);
var inst_24738 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24739 = figwheel.client.heads_up.display_error.call(null,inst_24737,inst_24738);
var state_24795__$1 = (function (){var statearr_24806 = state_24795;
(statearr_24806[(7)] = inst_24735);

return statearr_24806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24795__$1,(14),inst_24739);
} else {
if((state_val_24796 === (22))){
var inst_24759 = figwheel.client.heads_up.clear.call(null);
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24795__$1,(25),inst_24759);
} else {
if((state_val_24796 === (29))){
var inst_24783 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24807_24847 = state_24795__$1;
(statearr_24807_24847[(2)] = inst_24783);

(statearr_24807_24847[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (6))){
var inst_24725 = figwheel.client.heads_up.clear.call(null);
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24795__$1,(9),inst_24725);
} else {
if((state_val_24796 === (28))){
var inst_24774 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24795__$1 = state_24795;
if(cljs.core.truth_(inst_24774)){
var statearr_24808_24848 = state_24795__$1;
(statearr_24808_24848[(1)] = (31));

} else {
var statearr_24809_24849 = state_24795__$1;
(statearr_24809_24849[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (25))){
var inst_24761 = (state_24795[(2)]);
var inst_24762 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24763 = figwheel.client.heads_up.display_warning.call(null,inst_24762);
var state_24795__$1 = (function (){var statearr_24810 = state_24795;
(statearr_24810[(8)] = inst_24761);

return statearr_24810;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24795__$1,(26),inst_24763);
} else {
if((state_val_24796 === (34))){
var inst_24778 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24811_24850 = state_24795__$1;
(statearr_24811_24850[(2)] = inst_24778);

(statearr_24811_24850[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (17))){
var inst_24789 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24812_24851 = state_24795__$1;
(statearr_24812_24851[(2)] = inst_24789);

(statearr_24812_24851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (3))){
var inst_24731 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24795__$1 = state_24795;
if(cljs.core.truth_(inst_24731)){
var statearr_24813_24852 = state_24795__$1;
(statearr_24813_24852[(1)] = (10));

} else {
var statearr_24814_24853 = state_24795__$1;
(statearr_24814_24853[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (12))){
var inst_24791 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24815_24854 = state_24795__$1;
(statearr_24815_24854[(2)] = inst_24791);

(statearr_24815_24854[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (2))){
var inst_24719 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24795__$1 = state_24795;
if(cljs.core.truth_(inst_24719)){
var statearr_24816_24855 = state_24795__$1;
(statearr_24816_24855[(1)] = (5));

} else {
var statearr_24817_24856 = state_24795__$1;
(statearr_24817_24856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (23))){
var inst_24767 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24795__$1 = state_24795;
if(cljs.core.truth_(inst_24767)){
var statearr_24818_24857 = state_24795__$1;
(statearr_24818_24857[(1)] = (27));

} else {
var statearr_24819_24858 = state_24795__$1;
(statearr_24819_24858[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (19))){
var inst_24754 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24755 = figwheel.client.heads_up.append_message.call(null,inst_24754);
var state_24795__$1 = state_24795;
var statearr_24820_24859 = state_24795__$1;
(statearr_24820_24859[(2)] = inst_24755);

(statearr_24820_24859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (11))){
var inst_24743 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24795__$1 = state_24795;
if(cljs.core.truth_(inst_24743)){
var statearr_24821_24860 = state_24795__$1;
(statearr_24821_24860[(1)] = (15));

} else {
var statearr_24822_24861 = state_24795__$1;
(statearr_24822_24861[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (9))){
var inst_24727 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24823_24862 = state_24795__$1;
(statearr_24823_24862[(2)] = inst_24727);

(statearr_24823_24862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (5))){
var inst_24721 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24795__$1,(8),inst_24721);
} else {
if((state_val_24796 === (14))){
var inst_24741 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24824_24863 = state_24795__$1;
(statearr_24824_24863[(2)] = inst_24741);

(statearr_24824_24863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (26))){
var inst_24765 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24825_24864 = state_24795__$1;
(statearr_24825_24864[(2)] = inst_24765);

(statearr_24825_24864[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (16))){
var inst_24752 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24795__$1 = state_24795;
if(cljs.core.truth_(inst_24752)){
var statearr_24826_24865 = state_24795__$1;
(statearr_24826_24865[(1)] = (19));

} else {
var statearr_24827_24866 = state_24795__$1;
(statearr_24827_24866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (30))){
var inst_24772 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24828_24867 = state_24795__$1;
(statearr_24828_24867[(2)] = inst_24772);

(statearr_24828_24867[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (10))){
var inst_24733 = figwheel.client.heads_up.clear.call(null);
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24795__$1,(13),inst_24733);
} else {
if((state_val_24796 === (18))){
var inst_24750 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24829_24868 = state_24795__$1;
(statearr_24829_24868[(2)] = inst_24750);

(statearr_24829_24868[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24796 === (8))){
var inst_24723 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24830_24869 = state_24795__$1;
(statearr_24830_24869[(2)] = inst_24723);

(statearr_24830_24869[(1)] = (7));


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
});})(c__20007__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19942__auto__,c__20007__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19943__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19943__auto____0 = (function (){
var statearr_24834 = [null,null,null,null,null,null,null,null,null];
(statearr_24834[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19943__auto__);

(statearr_24834[(1)] = (1));

return statearr_24834;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19943__auto____1 = (function (state_24795){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_24795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e24835){if((e24835 instanceof Object)){
var ex__19946__auto__ = e24835;
var statearr_24836_24870 = state_24795;
(statearr_24836_24870[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24871 = state_24795;
state_24795 = G__24871;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19943__auto__ = function(state_24795){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19943__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19943__auto____1.call(this,state_24795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19943__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19943__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto__,msg_hist,msg_names,msg))
})();
var state__20009__auto__ = (function (){var statearr_24837 = f__20008__auto__.call(null);
(statearr_24837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_24837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__,msg_hist,msg_names,msg))
);

return c__20007__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20007__auto___24934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___24934,ch){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___24934,ch){
return (function (state_24917){
var state_val_24918 = (state_24917[(1)]);
if((state_val_24918 === (1))){
var state_24917__$1 = state_24917;
var statearr_24919_24935 = state_24917__$1;
(statearr_24919_24935[(2)] = null);

(statearr_24919_24935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24918 === (2))){
var state_24917__$1 = state_24917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24917__$1,(4),ch);
} else {
if((state_val_24918 === (3))){
var inst_24915 = (state_24917[(2)]);
var state_24917__$1 = state_24917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24917__$1,inst_24915);
} else {
if((state_val_24918 === (4))){
var inst_24905 = (state_24917[(7)]);
var inst_24905__$1 = (state_24917[(2)]);
var state_24917__$1 = (function (){var statearr_24920 = state_24917;
(statearr_24920[(7)] = inst_24905__$1);

return statearr_24920;
})();
if(cljs.core.truth_(inst_24905__$1)){
var statearr_24921_24936 = state_24917__$1;
(statearr_24921_24936[(1)] = (5));

} else {
var statearr_24922_24937 = state_24917__$1;
(statearr_24922_24937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24918 === (5))){
var inst_24905 = (state_24917[(7)]);
var inst_24907 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24905);
var state_24917__$1 = state_24917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24917__$1,(8),inst_24907);
} else {
if((state_val_24918 === (6))){
var state_24917__$1 = state_24917;
var statearr_24923_24938 = state_24917__$1;
(statearr_24923_24938[(2)] = null);

(statearr_24923_24938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24918 === (7))){
var inst_24913 = (state_24917[(2)]);
var state_24917__$1 = state_24917;
var statearr_24924_24939 = state_24917__$1;
(statearr_24924_24939[(2)] = inst_24913);

(statearr_24924_24939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24918 === (8))){
var inst_24909 = (state_24917[(2)]);
var state_24917__$1 = (function (){var statearr_24925 = state_24917;
(statearr_24925[(8)] = inst_24909);

return statearr_24925;
})();
var statearr_24926_24940 = state_24917__$1;
(statearr_24926_24940[(2)] = null);

(statearr_24926_24940[(1)] = (2));


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
});})(c__20007__auto___24934,ch))
;
return ((function (switch__19942__auto__,c__20007__auto___24934,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19943__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19943__auto____0 = (function (){
var statearr_24930 = [null,null,null,null,null,null,null,null,null];
(statearr_24930[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19943__auto__);

(statearr_24930[(1)] = (1));

return statearr_24930;
});
var figwheel$client$heads_up_plugin_$_state_machine__19943__auto____1 = (function (state_24917){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_24917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e24931){if((e24931 instanceof Object)){
var ex__19946__auto__ = e24931;
var statearr_24932_24941 = state_24917;
(statearr_24932_24941[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24942 = state_24917;
state_24917 = G__24942;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19943__auto__ = function(state_24917){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19943__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19943__auto____1.call(this,state_24917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19943__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19943__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___24934,ch))
})();
var state__20009__auto__ = (function (){var statearr_24933 = f__20008__auto__.call(null);
(statearr_24933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___24934);

return statearr_24933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___24934,ch))
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
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto__){
return (function (state_24963){
var state_val_24964 = (state_24963[(1)]);
if((state_val_24964 === (1))){
var inst_24958 = cljs.core.async.timeout.call(null,(3000));
var state_24963__$1 = state_24963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24963__$1,(2),inst_24958);
} else {
if((state_val_24964 === (2))){
var inst_24960 = (state_24963[(2)]);
var inst_24961 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24963__$1 = (function (){var statearr_24965 = state_24963;
(statearr_24965[(7)] = inst_24960);

return statearr_24965;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24963__$1,inst_24961);
} else {
return null;
}
}
});})(c__20007__auto__))
;
return ((function (switch__19942__auto__,c__20007__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19943__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19943__auto____0 = (function (){
var statearr_24969 = [null,null,null,null,null,null,null,null];
(statearr_24969[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19943__auto__);

(statearr_24969[(1)] = (1));

return statearr_24969;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19943__auto____1 = (function (state_24963){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_24963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e24970){if((e24970 instanceof Object)){
var ex__19946__auto__ = e24970;
var statearr_24971_24973 = state_24963;
(statearr_24971_24973[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24974 = state_24963;
state_24963 = G__24974;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19943__auto__ = function(state_24963){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19943__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19943__auto____1.call(this,state_24963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19943__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19943__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto__))
})();
var state__20009__auto__ = (function (){var statearr_24972 = f__20008__auto__.call(null);
(statearr_24972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_24972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__))
);

return c__20007__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24975){
var map__24982 = p__24975;
var map__24982__$1 = ((((!((map__24982 == null)))?((((map__24982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24982):map__24982);
var ed = map__24982__$1;
var formatted_exception = cljs.core.get.call(null,map__24982__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24982__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24982__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24984_24988 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24985_24989 = null;
var count__24986_24990 = (0);
var i__24987_24991 = (0);
while(true){
if((i__24987_24991 < count__24986_24990)){
var msg_24992 = cljs.core._nth.call(null,chunk__24985_24989,i__24987_24991);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24992);

var G__24993 = seq__24984_24988;
var G__24994 = chunk__24985_24989;
var G__24995 = count__24986_24990;
var G__24996 = (i__24987_24991 + (1));
seq__24984_24988 = G__24993;
chunk__24985_24989 = G__24994;
count__24986_24990 = G__24995;
i__24987_24991 = G__24996;
continue;
} else {
var temp__4425__auto___24997 = cljs.core.seq.call(null,seq__24984_24988);
if(temp__4425__auto___24997){
var seq__24984_24998__$1 = temp__4425__auto___24997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24984_24998__$1)){
var c__17320__auto___24999 = cljs.core.chunk_first.call(null,seq__24984_24998__$1);
var G__25000 = cljs.core.chunk_rest.call(null,seq__24984_24998__$1);
var G__25001 = c__17320__auto___24999;
var G__25002 = cljs.core.count.call(null,c__17320__auto___24999);
var G__25003 = (0);
seq__24984_24988 = G__25000;
chunk__24985_24989 = G__25001;
count__24986_24990 = G__25002;
i__24987_24991 = G__25003;
continue;
} else {
var msg_25004 = cljs.core.first.call(null,seq__24984_24998__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25004);

var G__25005 = cljs.core.next.call(null,seq__24984_24998__$1);
var G__25006 = null;
var G__25007 = (0);
var G__25008 = (0);
seq__24984_24988 = G__25005;
chunk__24985_24989 = G__25006;
count__24986_24990 = G__25007;
i__24987_24991 = G__25008;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25009){
var map__25012 = p__25009;
var map__25012__$1 = ((((!((map__25012 == null)))?((((map__25012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25012):map__25012);
var w = map__25012__$1;
var message = cljs.core.get.call(null,map__25012__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__25020 = cljs.core.seq.call(null,plugins);
var chunk__25021 = null;
var count__25022 = (0);
var i__25023 = (0);
while(true){
if((i__25023 < count__25022)){
var vec__25024 = cljs.core._nth.call(null,chunk__25021,i__25023);
var k = cljs.core.nth.call(null,vec__25024,(0),null);
var plugin = cljs.core.nth.call(null,vec__25024,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25026 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25020,chunk__25021,count__25022,i__25023,pl_25026,vec__25024,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25026.call(null,msg_hist);
});})(seq__25020,chunk__25021,count__25022,i__25023,pl_25026,vec__25024,k,plugin))
);
} else {
}

var G__25027 = seq__25020;
var G__25028 = chunk__25021;
var G__25029 = count__25022;
var G__25030 = (i__25023 + (1));
seq__25020 = G__25027;
chunk__25021 = G__25028;
count__25022 = G__25029;
i__25023 = G__25030;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25020);
if(temp__4425__auto__){
var seq__25020__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25020__$1)){
var c__17320__auto__ = cljs.core.chunk_first.call(null,seq__25020__$1);
var G__25031 = cljs.core.chunk_rest.call(null,seq__25020__$1);
var G__25032 = c__17320__auto__;
var G__25033 = cljs.core.count.call(null,c__17320__auto__);
var G__25034 = (0);
seq__25020 = G__25031;
chunk__25021 = G__25032;
count__25022 = G__25033;
i__25023 = G__25034;
continue;
} else {
var vec__25025 = cljs.core.first.call(null,seq__25020__$1);
var k = cljs.core.nth.call(null,vec__25025,(0),null);
var plugin = cljs.core.nth.call(null,vec__25025,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25035 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25020,chunk__25021,count__25022,i__25023,pl_25035,vec__25025,k,plugin,seq__25020__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25035.call(null,msg_hist);
});})(seq__25020,chunk__25021,count__25022,i__25023,pl_25035,vec__25025,k,plugin,seq__25020__$1,temp__4425__auto__))
);
} else {
}

var G__25036 = cljs.core.next.call(null,seq__25020__$1);
var G__25037 = null;
var G__25038 = (0);
var G__25039 = (0);
seq__25020 = G__25036;
chunk__25021 = G__25037;
count__25022 = G__25038;
i__25023 = G__25039;
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
var args25040 = [];
var len__17575__auto___25043 = arguments.length;
var i__17576__auto___25044 = (0);
while(true){
if((i__17576__auto___25044 < len__17575__auto___25043)){
args25040.push((arguments[i__17576__auto___25044]));

var G__25045 = (i__17576__auto___25044 + (1));
i__17576__auto___25044 = G__25045;
continue;
} else {
}
break;
}

var G__25042 = args25040.length;
switch (G__25042) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25040.length)].join('')));

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
var len__17575__auto___25051 = arguments.length;
var i__17576__auto___25052 = (0);
while(true){
if((i__17576__auto___25052 < len__17575__auto___25051)){
args__17582__auto__.push((arguments[i__17576__auto___25052]));

var G__25053 = (i__17576__auto___25052 + (1));
i__17576__auto___25052 = G__25053;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((0) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17583__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25048){
var map__25049 = p__25048;
var map__25049__$1 = ((((!((map__25049 == null)))?((((map__25049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25049):map__25049);
var opts = map__25049__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25047){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25047));
});

//# sourceMappingURL=client.js.map?rel=1441453637121