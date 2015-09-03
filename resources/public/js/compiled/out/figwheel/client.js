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
var G__26473__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26474__i = 0, G__26474__a = new Array(arguments.length -  0);
while (G__26474__i < G__26474__a.length) {G__26474__a[G__26474__i] = arguments[G__26474__i + 0]; ++G__26474__i;}
  args = new cljs.core.IndexedSeq(G__26474__a,0);
} 
return G__26473__delegate.call(this,args);};
G__26473.cljs$lang$maxFixedArity = 0;
G__26473.cljs$lang$applyTo = (function (arglist__26475){
var args = cljs.core.seq(arglist__26475);
return G__26473__delegate(args);
});
G__26473.cljs$core$IFn$_invoke$arity$variadic = G__26473__delegate;
return G__26473;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26476){
var map__26479 = p__26476;
var map__26479__$1 = ((((!((map__26479 == null)))?((((map__26479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26479):map__26479);
var message = cljs.core.get.call(null,map__26479__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26479__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18644__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18644__auto__)){
return or__18644__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18632__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18632__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18632__auto__;
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
var c__22145__auto___26609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___26609,ch){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___26609,ch){
return (function (state_26583){
var state_val_26584 = (state_26583[(1)]);
if((state_val_26584 === (7))){
var inst_26579 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
var statearr_26585_26610 = state_26583__$1;
(statearr_26585_26610[(2)] = inst_26579);

(statearr_26585_26610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (1))){
var state_26583__$1 = state_26583;
var statearr_26586_26611 = state_26583__$1;
(statearr_26586_26611[(2)] = null);

(statearr_26586_26611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (4))){
var inst_26547 = (state_26583[(7)]);
var inst_26547__$1 = (state_26583[(2)]);
var state_26583__$1 = (function (){var statearr_26587 = state_26583;
(statearr_26587[(7)] = inst_26547__$1);

return statearr_26587;
})();
if(cljs.core.truth_(inst_26547__$1)){
var statearr_26588_26612 = state_26583__$1;
(statearr_26588_26612[(1)] = (5));

} else {
var statearr_26589_26613 = state_26583__$1;
(statearr_26589_26613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (13))){
var state_26583__$1 = state_26583;
var statearr_26590_26614 = state_26583__$1;
(statearr_26590_26614[(2)] = null);

(statearr_26590_26614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (6))){
var state_26583__$1 = state_26583;
var statearr_26591_26615 = state_26583__$1;
(statearr_26591_26615[(2)] = null);

(statearr_26591_26615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (3))){
var inst_26581 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26583__$1,inst_26581);
} else {
if((state_val_26584 === (12))){
var inst_26554 = (state_26583[(8)]);
var inst_26567 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26554);
var inst_26568 = cljs.core.first.call(null,inst_26567);
var inst_26569 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26568);
var inst_26570 = console.warn("Figwheel: Not loading code with warnings - ",inst_26569);
var state_26583__$1 = state_26583;
var statearr_26592_26616 = state_26583__$1;
(statearr_26592_26616[(2)] = inst_26570);

(statearr_26592_26616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (2))){
var state_26583__$1 = state_26583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26583__$1,(4),ch);
} else {
if((state_val_26584 === (11))){
var inst_26563 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
var statearr_26593_26617 = state_26583__$1;
(statearr_26593_26617[(2)] = inst_26563);

(statearr_26593_26617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (9))){
var inst_26553 = (state_26583[(9)]);
var inst_26565 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26553,opts);
var state_26583__$1 = state_26583;
if(cljs.core.truth_(inst_26565)){
var statearr_26594_26618 = state_26583__$1;
(statearr_26594_26618[(1)] = (12));

} else {
var statearr_26595_26619 = state_26583__$1;
(statearr_26595_26619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (5))){
var inst_26553 = (state_26583[(9)]);
var inst_26547 = (state_26583[(7)]);
var inst_26549 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26550 = (new cljs.core.PersistentArrayMap(null,2,inst_26549,null));
var inst_26551 = (new cljs.core.PersistentHashSet(null,inst_26550,null));
var inst_26552 = figwheel.client.focus_msgs.call(null,inst_26551,inst_26547);
var inst_26553__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26552);
var inst_26554 = cljs.core.first.call(null,inst_26552);
var inst_26555 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26553__$1,opts);
var state_26583__$1 = (function (){var statearr_26596 = state_26583;
(statearr_26596[(9)] = inst_26553__$1);

(statearr_26596[(8)] = inst_26554);

return statearr_26596;
})();
if(cljs.core.truth_(inst_26555)){
var statearr_26597_26620 = state_26583__$1;
(statearr_26597_26620[(1)] = (8));

} else {
var statearr_26598_26621 = state_26583__$1;
(statearr_26598_26621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (14))){
var inst_26573 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
var statearr_26599_26622 = state_26583__$1;
(statearr_26599_26622[(2)] = inst_26573);

(statearr_26599_26622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (10))){
var inst_26575 = (state_26583[(2)]);
var state_26583__$1 = (function (){var statearr_26600 = state_26583;
(statearr_26600[(10)] = inst_26575);

return statearr_26600;
})();
var statearr_26601_26623 = state_26583__$1;
(statearr_26601_26623[(2)] = null);

(statearr_26601_26623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (8))){
var inst_26554 = (state_26583[(8)]);
var inst_26557 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26558 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26554);
var inst_26559 = cljs.core.async.timeout.call(null,(1000));
var inst_26560 = [inst_26558,inst_26559];
var inst_26561 = (new cljs.core.PersistentVector(null,2,(5),inst_26557,inst_26560,null));
var state_26583__$1 = state_26583;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26583__$1,(11),inst_26561);
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
});})(c__22145__auto___26609,ch))
;
return ((function (switch__22080__auto__,c__22145__auto___26609,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22081__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22081__auto____0 = (function (){
var statearr_26605 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26605[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22081__auto__);

(statearr_26605[(1)] = (1));

return statearr_26605;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22081__auto____1 = (function (state_26583){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_26583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e26606){if((e26606 instanceof Object)){
var ex__22084__auto__ = e26606;
var statearr_26607_26624 = state_26583;
(statearr_26607_26624[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26625 = state_26583;
state_26583 = G__26625;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22081__auto__ = function(state_26583){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22081__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22081__auto____1.call(this,state_26583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22081__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22081__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___26609,ch))
})();
var state__22147__auto__ = (function (){var statearr_26608 = f__22146__auto__.call(null);
(statearr_26608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___26609);

return statearr_26608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___26609,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26626_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26626_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_26633 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26633){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_26631 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26632 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26631,_STAR_print_newline_STAR_26632,base_path_26633){
return (function() { 
var G__26634__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26635__i = 0, G__26635__a = new Array(arguments.length -  0);
while (G__26635__i < G__26635__a.length) {G__26635__a[G__26635__i] = arguments[G__26635__i + 0]; ++G__26635__i;}
  args = new cljs.core.IndexedSeq(G__26635__a,0);
} 
return G__26634__delegate.call(this,args);};
G__26634.cljs$lang$maxFixedArity = 0;
G__26634.cljs$lang$applyTo = (function (arglist__26636){
var args = cljs.core.seq(arglist__26636);
return G__26634__delegate(args);
});
G__26634.cljs$core$IFn$_invoke$arity$variadic = G__26634__delegate;
return G__26634;
})()
;})(_STAR_print_fn_STAR_26631,_STAR_print_newline_STAR_26632,base_path_26633))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26632;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26631;
}}catch (e26630){if((e26630 instanceof Error)){
var e = e26630;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26633], null));
} else {
var e = e26630;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26633))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26637){
var map__26644 = p__26637;
var map__26644__$1 = ((((!((map__26644 == null)))?((((map__26644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26644):map__26644);
var opts = map__26644__$1;
var build_id = cljs.core.get.call(null,map__26644__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26644,map__26644__$1,opts,build_id){
return (function (p__26646){
var vec__26647 = p__26646;
var map__26648 = cljs.core.nth.call(null,vec__26647,(0),null);
var map__26648__$1 = ((((!((map__26648 == null)))?((((map__26648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26648):map__26648);
var msg = map__26648__$1;
var msg_name = cljs.core.get.call(null,map__26648__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26647,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__26647,map__26648,map__26648__$1,msg,msg_name,_,map__26644,map__26644__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26647,map__26648,map__26648__$1,msg,msg_name,_,map__26644,map__26644__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26644,map__26644__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26654){
var vec__26655 = p__26654;
var map__26656 = cljs.core.nth.call(null,vec__26655,(0),null);
var map__26656__$1 = ((((!((map__26656 == null)))?((((map__26656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26656):map__26656);
var msg = map__26656__$1;
var msg_name = cljs.core.get.call(null,map__26656__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26655,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26658){
var map__26668 = p__26658;
var map__26668__$1 = ((((!((map__26668 == null)))?((((map__26668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26668):map__26668);
var on_compile_warning = cljs.core.get.call(null,map__26668__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26668__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26668,map__26668__$1,on_compile_warning,on_compile_fail){
return (function (p__26670){
var vec__26671 = p__26670;
var map__26672 = cljs.core.nth.call(null,vec__26671,(0),null);
var map__26672__$1 = ((((!((map__26672 == null)))?((((map__26672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26672):map__26672);
var msg = map__26672__$1;
var msg_name = cljs.core.get.call(null,map__26672__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26671,(1));
var pred__26674 = cljs.core._EQ_;
var expr__26675 = msg_name;
if(cljs.core.truth_(pred__26674.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26675))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26674.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26675))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26668,map__26668__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto__,msg_hist,msg_names,msg){
return (function (state_26876){
var state_val_26877 = (state_26876[(1)]);
if((state_val_26877 === (7))){
var inst_26810 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26878_26919 = state_26876__$1;
(statearr_26878_26919[(2)] = inst_26810);

(statearr_26878_26919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (20))){
var inst_26838 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26876__$1 = state_26876;
if(cljs.core.truth_(inst_26838)){
var statearr_26879_26920 = state_26876__$1;
(statearr_26879_26920[(1)] = (22));

} else {
var statearr_26880_26921 = state_26876__$1;
(statearr_26880_26921[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (27))){
var inst_26850 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26851 = figwheel.client.heads_up.display_warning.call(null,inst_26850);
var state_26876__$1 = state_26876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26876__$1,(30),inst_26851);
} else {
if((state_val_26877 === (1))){
var inst_26798 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26876__$1 = state_26876;
if(cljs.core.truth_(inst_26798)){
var statearr_26881_26922 = state_26876__$1;
(statearr_26881_26922[(1)] = (2));

} else {
var statearr_26882_26923 = state_26876__$1;
(statearr_26882_26923[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (24))){
var inst_26866 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26883_26924 = state_26876__$1;
(statearr_26883_26924[(2)] = inst_26866);

(statearr_26883_26924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (4))){
var inst_26874 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26876__$1,inst_26874);
} else {
if((state_val_26877 === (15))){
var inst_26826 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26827 = figwheel.client.format_messages.call(null,inst_26826);
var inst_26828 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26829 = figwheel.client.heads_up.display_error.call(null,inst_26827,inst_26828);
var state_26876__$1 = state_26876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26876__$1,(18),inst_26829);
} else {
if((state_val_26877 === (21))){
var inst_26868 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26884_26925 = state_26876__$1;
(statearr_26884_26925[(2)] = inst_26868);

(statearr_26884_26925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (31))){
var inst_26857 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26876__$1 = state_26876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26876__$1,(34),inst_26857);
} else {
if((state_val_26877 === (32))){
var state_26876__$1 = state_26876;
var statearr_26885_26926 = state_26876__$1;
(statearr_26885_26926[(2)] = null);

(statearr_26885_26926[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (33))){
var inst_26862 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26886_26927 = state_26876__$1;
(statearr_26886_26927[(2)] = inst_26862);

(statearr_26886_26927[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (13))){
var inst_26816 = (state_26876[(2)]);
var inst_26817 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26818 = figwheel.client.format_messages.call(null,inst_26817);
var inst_26819 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26820 = figwheel.client.heads_up.display_error.call(null,inst_26818,inst_26819);
var state_26876__$1 = (function (){var statearr_26887 = state_26876;
(statearr_26887[(7)] = inst_26816);

return statearr_26887;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26876__$1,(14),inst_26820);
} else {
if((state_val_26877 === (22))){
var inst_26840 = figwheel.client.heads_up.clear.call(null);
var state_26876__$1 = state_26876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26876__$1,(25),inst_26840);
} else {
if((state_val_26877 === (29))){
var inst_26864 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26888_26928 = state_26876__$1;
(statearr_26888_26928[(2)] = inst_26864);

(statearr_26888_26928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (6))){
var inst_26806 = figwheel.client.heads_up.clear.call(null);
var state_26876__$1 = state_26876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26876__$1,(9),inst_26806);
} else {
if((state_val_26877 === (28))){
var inst_26855 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26876__$1 = state_26876;
if(cljs.core.truth_(inst_26855)){
var statearr_26889_26929 = state_26876__$1;
(statearr_26889_26929[(1)] = (31));

} else {
var statearr_26890_26930 = state_26876__$1;
(statearr_26890_26930[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (25))){
var inst_26842 = (state_26876[(2)]);
var inst_26843 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26844 = figwheel.client.heads_up.display_warning.call(null,inst_26843);
var state_26876__$1 = (function (){var statearr_26891 = state_26876;
(statearr_26891[(8)] = inst_26842);

return statearr_26891;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26876__$1,(26),inst_26844);
} else {
if((state_val_26877 === (34))){
var inst_26859 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26892_26931 = state_26876__$1;
(statearr_26892_26931[(2)] = inst_26859);

(statearr_26892_26931[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (17))){
var inst_26870 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26893_26932 = state_26876__$1;
(statearr_26893_26932[(2)] = inst_26870);

(statearr_26893_26932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (3))){
var inst_26812 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26876__$1 = state_26876;
if(cljs.core.truth_(inst_26812)){
var statearr_26894_26933 = state_26876__$1;
(statearr_26894_26933[(1)] = (10));

} else {
var statearr_26895_26934 = state_26876__$1;
(statearr_26895_26934[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (12))){
var inst_26872 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26896_26935 = state_26876__$1;
(statearr_26896_26935[(2)] = inst_26872);

(statearr_26896_26935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (2))){
var inst_26800 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26876__$1 = state_26876;
if(cljs.core.truth_(inst_26800)){
var statearr_26897_26936 = state_26876__$1;
(statearr_26897_26936[(1)] = (5));

} else {
var statearr_26898_26937 = state_26876__$1;
(statearr_26898_26937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (23))){
var inst_26848 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26876__$1 = state_26876;
if(cljs.core.truth_(inst_26848)){
var statearr_26899_26938 = state_26876__$1;
(statearr_26899_26938[(1)] = (27));

} else {
var statearr_26900_26939 = state_26876__$1;
(statearr_26900_26939[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (19))){
var inst_26835 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26836 = figwheel.client.heads_up.append_message.call(null,inst_26835);
var state_26876__$1 = state_26876;
var statearr_26901_26940 = state_26876__$1;
(statearr_26901_26940[(2)] = inst_26836);

(statearr_26901_26940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (11))){
var inst_26824 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26876__$1 = state_26876;
if(cljs.core.truth_(inst_26824)){
var statearr_26902_26941 = state_26876__$1;
(statearr_26902_26941[(1)] = (15));

} else {
var statearr_26903_26942 = state_26876__$1;
(statearr_26903_26942[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (9))){
var inst_26808 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26904_26943 = state_26876__$1;
(statearr_26904_26943[(2)] = inst_26808);

(statearr_26904_26943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (5))){
var inst_26802 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26876__$1 = state_26876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26876__$1,(8),inst_26802);
} else {
if((state_val_26877 === (14))){
var inst_26822 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26905_26944 = state_26876__$1;
(statearr_26905_26944[(2)] = inst_26822);

(statearr_26905_26944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (26))){
var inst_26846 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26906_26945 = state_26876__$1;
(statearr_26906_26945[(2)] = inst_26846);

(statearr_26906_26945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (16))){
var inst_26833 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26876__$1 = state_26876;
if(cljs.core.truth_(inst_26833)){
var statearr_26907_26946 = state_26876__$1;
(statearr_26907_26946[(1)] = (19));

} else {
var statearr_26908_26947 = state_26876__$1;
(statearr_26908_26947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (30))){
var inst_26853 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26909_26948 = state_26876__$1;
(statearr_26909_26948[(2)] = inst_26853);

(statearr_26909_26948[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (10))){
var inst_26814 = figwheel.client.heads_up.clear.call(null);
var state_26876__$1 = state_26876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26876__$1,(13),inst_26814);
} else {
if((state_val_26877 === (18))){
var inst_26831 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26910_26949 = state_26876__$1;
(statearr_26910_26949[(2)] = inst_26831);

(statearr_26910_26949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26877 === (8))){
var inst_26804 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
var statearr_26911_26950 = state_26876__$1;
(statearr_26911_26950[(2)] = inst_26804);

(statearr_26911_26950[(1)] = (7));


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
});})(c__22145__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22080__auto__,c__22145__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22081__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22081__auto____0 = (function (){
var statearr_26915 = [null,null,null,null,null,null,null,null,null];
(statearr_26915[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22081__auto__);

(statearr_26915[(1)] = (1));

return statearr_26915;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22081__auto____1 = (function (state_26876){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_26876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e26916){if((e26916 instanceof Object)){
var ex__22084__auto__ = e26916;
var statearr_26917_26951 = state_26876;
(statearr_26917_26951[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26952 = state_26876;
state_26876 = G__26952;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22081__auto__ = function(state_26876){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22081__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22081__auto____1.call(this,state_26876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22081__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22081__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto__,msg_hist,msg_names,msg))
})();
var state__22147__auto__ = (function (){var statearr_26918 = f__22146__auto__.call(null);
(statearr_26918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto__);

return statearr_26918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto__,msg_hist,msg_names,msg))
);

return c__22145__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22145__auto___27015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___27015,ch){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___27015,ch){
return (function (state_26998){
var state_val_26999 = (state_26998[(1)]);
if((state_val_26999 === (1))){
var state_26998__$1 = state_26998;
var statearr_27000_27016 = state_26998__$1;
(statearr_27000_27016[(2)] = null);

(statearr_27000_27016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26999 === (2))){
var state_26998__$1 = state_26998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26998__$1,(4),ch);
} else {
if((state_val_26999 === (3))){
var inst_26996 = (state_26998[(2)]);
var state_26998__$1 = state_26998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26998__$1,inst_26996);
} else {
if((state_val_26999 === (4))){
var inst_26986 = (state_26998[(7)]);
var inst_26986__$1 = (state_26998[(2)]);
var state_26998__$1 = (function (){var statearr_27001 = state_26998;
(statearr_27001[(7)] = inst_26986__$1);

return statearr_27001;
})();
if(cljs.core.truth_(inst_26986__$1)){
var statearr_27002_27017 = state_26998__$1;
(statearr_27002_27017[(1)] = (5));

} else {
var statearr_27003_27018 = state_26998__$1;
(statearr_27003_27018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26999 === (5))){
var inst_26986 = (state_26998[(7)]);
var inst_26988 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26986);
var state_26998__$1 = state_26998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26998__$1,(8),inst_26988);
} else {
if((state_val_26999 === (6))){
var state_26998__$1 = state_26998;
var statearr_27004_27019 = state_26998__$1;
(statearr_27004_27019[(2)] = null);

(statearr_27004_27019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26999 === (7))){
var inst_26994 = (state_26998[(2)]);
var state_26998__$1 = state_26998;
var statearr_27005_27020 = state_26998__$1;
(statearr_27005_27020[(2)] = inst_26994);

(statearr_27005_27020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26999 === (8))){
var inst_26990 = (state_26998[(2)]);
var state_26998__$1 = (function (){var statearr_27006 = state_26998;
(statearr_27006[(8)] = inst_26990);

return statearr_27006;
})();
var statearr_27007_27021 = state_26998__$1;
(statearr_27007_27021[(2)] = null);

(statearr_27007_27021[(1)] = (2));


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
});})(c__22145__auto___27015,ch))
;
return ((function (switch__22080__auto__,c__22145__auto___27015,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22081__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22081__auto____0 = (function (){
var statearr_27011 = [null,null,null,null,null,null,null,null,null];
(statearr_27011[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22081__auto__);

(statearr_27011[(1)] = (1));

return statearr_27011;
});
var figwheel$client$heads_up_plugin_$_state_machine__22081__auto____1 = (function (state_26998){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_26998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e27012){if((e27012 instanceof Object)){
var ex__22084__auto__ = e27012;
var statearr_27013_27022 = state_26998;
(statearr_27013_27022[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27023 = state_26998;
state_26998 = G__27023;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22081__auto__ = function(state_26998){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22081__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22081__auto____1.call(this,state_26998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22081__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22081__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___27015,ch))
})();
var state__22147__auto__ = (function (){var statearr_27014 = f__22146__auto__.call(null);
(statearr_27014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___27015);

return statearr_27014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___27015,ch))
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
var c__22145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto__){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto__){
return (function (state_27044){
var state_val_27045 = (state_27044[(1)]);
if((state_val_27045 === (1))){
var inst_27039 = cljs.core.async.timeout.call(null,(3000));
var state_27044__$1 = state_27044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27044__$1,(2),inst_27039);
} else {
if((state_val_27045 === (2))){
var inst_27041 = (state_27044[(2)]);
var inst_27042 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27044__$1 = (function (){var statearr_27046 = state_27044;
(statearr_27046[(7)] = inst_27041);

return statearr_27046;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27044__$1,inst_27042);
} else {
return null;
}
}
});})(c__22145__auto__))
;
return ((function (switch__22080__auto__,c__22145__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22081__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22081__auto____0 = (function (){
var statearr_27050 = [null,null,null,null,null,null,null,null];
(statearr_27050[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22081__auto__);

(statearr_27050[(1)] = (1));

return statearr_27050;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22081__auto____1 = (function (state_27044){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_27044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e27051){if((e27051 instanceof Object)){
var ex__22084__auto__ = e27051;
var statearr_27052_27054 = state_27044;
(statearr_27052_27054[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27055 = state_27044;
state_27044 = G__27055;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22081__auto__ = function(state_27044){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22081__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22081__auto____1.call(this,state_27044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22081__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22081__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto__))
})();
var state__22147__auto__ = (function (){var statearr_27053 = f__22146__auto__.call(null);
(statearr_27053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto__);

return statearr_27053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto__))
);

return c__22145__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27056){
var map__27063 = p__27056;
var map__27063__$1 = ((((!((map__27063 == null)))?((((map__27063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27063):map__27063);
var ed = map__27063__$1;
var formatted_exception = cljs.core.get.call(null,map__27063__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27063__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27063__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27065_27069 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27066_27070 = null;
var count__27067_27071 = (0);
var i__27068_27072 = (0);
while(true){
if((i__27068_27072 < count__27067_27071)){
var msg_27073 = cljs.core._nth.call(null,chunk__27066_27070,i__27068_27072);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27073);

var G__27074 = seq__27065_27069;
var G__27075 = chunk__27066_27070;
var G__27076 = count__27067_27071;
var G__27077 = (i__27068_27072 + (1));
seq__27065_27069 = G__27074;
chunk__27066_27070 = G__27075;
count__27067_27071 = G__27076;
i__27068_27072 = G__27077;
continue;
} else {
var temp__4425__auto___27078 = cljs.core.seq.call(null,seq__27065_27069);
if(temp__4425__auto___27078){
var seq__27065_27079__$1 = temp__4425__auto___27078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27065_27079__$1)){
var c__19447__auto___27080 = cljs.core.chunk_first.call(null,seq__27065_27079__$1);
var G__27081 = cljs.core.chunk_rest.call(null,seq__27065_27079__$1);
var G__27082 = c__19447__auto___27080;
var G__27083 = cljs.core.count.call(null,c__19447__auto___27080);
var G__27084 = (0);
seq__27065_27069 = G__27081;
chunk__27066_27070 = G__27082;
count__27067_27071 = G__27083;
i__27068_27072 = G__27084;
continue;
} else {
var msg_27085 = cljs.core.first.call(null,seq__27065_27079__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27085);

var G__27086 = cljs.core.next.call(null,seq__27065_27079__$1);
var G__27087 = null;
var G__27088 = (0);
var G__27089 = (0);
seq__27065_27069 = G__27086;
chunk__27066_27070 = G__27087;
count__27067_27071 = G__27088;
i__27068_27072 = G__27089;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27090){
var map__27093 = p__27090;
var map__27093__$1 = ((((!((map__27093 == null)))?((((map__27093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27093):map__27093);
var w = map__27093__$1;
var message = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18632__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18632__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18632__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27101 = cljs.core.seq.call(null,plugins);
var chunk__27102 = null;
var count__27103 = (0);
var i__27104 = (0);
while(true){
if((i__27104 < count__27103)){
var vec__27105 = cljs.core._nth.call(null,chunk__27102,i__27104);
var k = cljs.core.nth.call(null,vec__27105,(0),null);
var plugin = cljs.core.nth.call(null,vec__27105,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27107 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27101,chunk__27102,count__27103,i__27104,pl_27107,vec__27105,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27107.call(null,msg_hist);
});})(seq__27101,chunk__27102,count__27103,i__27104,pl_27107,vec__27105,k,plugin))
);
} else {
}

var G__27108 = seq__27101;
var G__27109 = chunk__27102;
var G__27110 = count__27103;
var G__27111 = (i__27104 + (1));
seq__27101 = G__27108;
chunk__27102 = G__27109;
count__27103 = G__27110;
i__27104 = G__27111;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27101);
if(temp__4425__auto__){
var seq__27101__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27101__$1)){
var c__19447__auto__ = cljs.core.chunk_first.call(null,seq__27101__$1);
var G__27112 = cljs.core.chunk_rest.call(null,seq__27101__$1);
var G__27113 = c__19447__auto__;
var G__27114 = cljs.core.count.call(null,c__19447__auto__);
var G__27115 = (0);
seq__27101 = G__27112;
chunk__27102 = G__27113;
count__27103 = G__27114;
i__27104 = G__27115;
continue;
} else {
var vec__27106 = cljs.core.first.call(null,seq__27101__$1);
var k = cljs.core.nth.call(null,vec__27106,(0),null);
var plugin = cljs.core.nth.call(null,vec__27106,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27116 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27101,chunk__27102,count__27103,i__27104,pl_27116,vec__27106,k,plugin,seq__27101__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27116.call(null,msg_hist);
});})(seq__27101,chunk__27102,count__27103,i__27104,pl_27116,vec__27106,k,plugin,seq__27101__$1,temp__4425__auto__))
);
} else {
}

var G__27117 = cljs.core.next.call(null,seq__27101__$1);
var G__27118 = null;
var G__27119 = (0);
var G__27120 = (0);
seq__27101 = G__27117;
chunk__27102 = G__27118;
count__27103 = G__27119;
i__27104 = G__27120;
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
var args27121 = [];
var len__19702__auto___27124 = arguments.length;
var i__19703__auto___27125 = (0);
while(true){
if((i__19703__auto___27125 < len__19702__auto___27124)){
args27121.push((arguments[i__19703__auto___27125]));

var G__27126 = (i__19703__auto___27125 + (1));
i__19703__auto___27125 = G__27126;
continue;
} else {
}
break;
}

var G__27123 = args27121.length;
switch (G__27123) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27121.length)].join('')));

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
var args__19709__auto__ = [];
var len__19702__auto___27132 = arguments.length;
var i__19703__auto___27133 = (0);
while(true){
if((i__19703__auto___27133 < len__19702__auto___27132)){
args__19709__auto__.push((arguments[i__19703__auto___27133]));

var G__27134 = (i__19703__auto___27133 + (1));
i__19703__auto___27133 = G__27134;
continue;
} else {
}
break;
}

var argseq__19710__auto__ = ((((0) < args__19709__auto__.length))?(new cljs.core.IndexedSeq(args__19709__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19710__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27129){
var map__27130 = p__27129;
var map__27130__$1 = ((((!((map__27130 == null)))?((((map__27130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27130):map__27130);
var opts = map__27130__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27128){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27128));
});

//# sourceMappingURL=client.js.map?rel=1441303749829