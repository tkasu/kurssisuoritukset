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
var G__25584__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25585__i = 0, G__25585__a = new Array(arguments.length -  0);
while (G__25585__i < G__25585__a.length) {G__25585__a[G__25585__i] = arguments[G__25585__i + 0]; ++G__25585__i;}
  args = new cljs.core.IndexedSeq(G__25585__a,0);
} 
return G__25584__delegate.call(this,args);};
G__25584.cljs$lang$maxFixedArity = 0;
G__25584.cljs$lang$applyTo = (function (arglist__25586){
var args = cljs.core.seq(arglist__25586);
return G__25584__delegate(args);
});
G__25584.cljs$core$IFn$_invoke$arity$variadic = G__25584__delegate;
return G__25584;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25587){
var map__25589 = p__25587;
var map__25589__$1 = ((cljs.core.seq_QMARK_.call(null,map__25589))?cljs.core.apply.call(null,cljs.core.hash_map,map__25589):map__25589);
var class$ = cljs.core.get.call(null,map__25589__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__25589__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__21535__auto___25718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___25718,ch){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___25718,ch){
return (function (state_25692){
var state_val_25693 = (state_25692[(1)]);
if((state_val_25693 === (7))){
var inst_25688 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25694_25719 = state_25692__$1;
(statearr_25694_25719[(2)] = inst_25688);

(statearr_25694_25719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (1))){
var state_25692__$1 = state_25692;
var statearr_25695_25720 = state_25692__$1;
(statearr_25695_25720[(2)] = null);

(statearr_25695_25720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (4))){
var inst_25656 = (state_25692[(7)]);
var inst_25656__$1 = (state_25692[(2)]);
var state_25692__$1 = (function (){var statearr_25696 = state_25692;
(statearr_25696[(7)] = inst_25656__$1);

return statearr_25696;
})();
if(cljs.core.truth_(inst_25656__$1)){
var statearr_25697_25721 = state_25692__$1;
(statearr_25697_25721[(1)] = (5));

} else {
var statearr_25698_25722 = state_25692__$1;
(statearr_25698_25722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (13))){
var state_25692__$1 = state_25692;
var statearr_25699_25723 = state_25692__$1;
(statearr_25699_25723[(2)] = null);

(statearr_25699_25723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (6))){
var state_25692__$1 = state_25692;
var statearr_25700_25724 = state_25692__$1;
(statearr_25700_25724[(2)] = null);

(statearr_25700_25724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (3))){
var inst_25690 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25692__$1,inst_25690);
} else {
if((state_val_25693 === (12))){
var inst_25663 = (state_25692[(8)]);
var inst_25676 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25663);
var inst_25677 = cljs.core.first.call(null,inst_25676);
var inst_25678 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25677);
var inst_25679 = console.warn("Figwheel: Not loading code with warnings - ",inst_25678);
var state_25692__$1 = state_25692;
var statearr_25701_25725 = state_25692__$1;
(statearr_25701_25725[(2)] = inst_25679);

(statearr_25701_25725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (2))){
var state_25692__$1 = state_25692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25692__$1,(4),ch);
} else {
if((state_val_25693 === (11))){
var inst_25672 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25702_25726 = state_25692__$1;
(statearr_25702_25726[(2)] = inst_25672);

(statearr_25702_25726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (9))){
var inst_25662 = (state_25692[(9)]);
var inst_25674 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25662,opts);
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25674)){
var statearr_25703_25727 = state_25692__$1;
(statearr_25703_25727[(1)] = (12));

} else {
var statearr_25704_25728 = state_25692__$1;
(statearr_25704_25728[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (5))){
var inst_25662 = (state_25692[(9)]);
var inst_25656 = (state_25692[(7)]);
var inst_25658 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25659 = (new cljs.core.PersistentArrayMap(null,2,inst_25658,null));
var inst_25660 = (new cljs.core.PersistentHashSet(null,inst_25659,null));
var inst_25661 = figwheel.client.focus_msgs.call(null,inst_25660,inst_25656);
var inst_25662__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25661);
var inst_25663 = cljs.core.first.call(null,inst_25661);
var inst_25664 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25662__$1,opts);
var state_25692__$1 = (function (){var statearr_25705 = state_25692;
(statearr_25705[(9)] = inst_25662__$1);

(statearr_25705[(8)] = inst_25663);

return statearr_25705;
})();
if(cljs.core.truth_(inst_25664)){
var statearr_25706_25729 = state_25692__$1;
(statearr_25706_25729[(1)] = (8));

} else {
var statearr_25707_25730 = state_25692__$1;
(statearr_25707_25730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (14))){
var inst_25682 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25708_25731 = state_25692__$1;
(statearr_25708_25731[(2)] = inst_25682);

(statearr_25708_25731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (10))){
var inst_25684 = (state_25692[(2)]);
var state_25692__$1 = (function (){var statearr_25709 = state_25692;
(statearr_25709[(10)] = inst_25684);

return statearr_25709;
})();
var statearr_25710_25732 = state_25692__$1;
(statearr_25710_25732[(2)] = null);

(statearr_25710_25732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25693 === (8))){
var inst_25663 = (state_25692[(8)]);
var inst_25666 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25667 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25663);
var inst_25668 = cljs.core.async.timeout.call(null,(1000));
var inst_25669 = [inst_25667,inst_25668];
var inst_25670 = (new cljs.core.PersistentVector(null,2,(5),inst_25666,inst_25669,null));
var state_25692__$1 = state_25692;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25692__$1,(11),inst_25670);
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
});})(c__21535__auto___25718,ch))
;
return ((function (switch__21473__auto__,c__21535__auto___25718,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21474__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21474__auto____0 = (function (){
var statearr_25714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25714[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21474__auto__);

(statearr_25714[(1)] = (1));

return statearr_25714;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21474__auto____1 = (function (state_25692){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_25692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e25715){if((e25715 instanceof Object)){
var ex__21477__auto__ = e25715;
var statearr_25716_25733 = state_25692;
(statearr_25716_25733[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25734 = state_25692;
state_25692 = G__25734;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21474__auto__ = function(state_25692){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21474__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21474__auto____1.call(this,state_25692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21474__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21474__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___25718,ch))
})();
var state__21537__auto__ = (function (){var statearr_25717 = f__21536__auto__.call(null);
(statearr_25717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___25718);

return statearr_25717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___25718,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25735_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25735_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_25742 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25742){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_25740 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25741 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25740,_STAR_print_newline_STAR_25741,base_path_25742){
return (function() { 
var G__25743__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25744__i = 0, G__25744__a = new Array(arguments.length -  0);
while (G__25744__i < G__25744__a.length) {G__25744__a[G__25744__i] = arguments[G__25744__i + 0]; ++G__25744__i;}
  args = new cljs.core.IndexedSeq(G__25744__a,0);
} 
return G__25743__delegate.call(this,args);};
G__25743.cljs$lang$maxFixedArity = 0;
G__25743.cljs$lang$applyTo = (function (arglist__25745){
var args = cljs.core.seq(arglist__25745);
return G__25743__delegate(args);
});
G__25743.cljs$core$IFn$_invoke$arity$variadic = G__25743__delegate;
return G__25743;
})()
;})(_STAR_print_fn_STAR_25740,_STAR_print_newline_STAR_25741,base_path_25742))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25741;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25740;
}}catch (e25739){if((e25739 instanceof Error)){
var e = e25739;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25742], null));
} else {
var e = e25739;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25742))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25746){
var map__25751 = p__25746;
var map__25751__$1 = ((cljs.core.seq_QMARK_.call(null,map__25751))?cljs.core.apply.call(null,cljs.core.hash_map,map__25751):map__25751);
var opts = map__25751__$1;
var build_id = cljs.core.get.call(null,map__25751__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25751,map__25751__$1,opts,build_id){
return (function (p__25752){
var vec__25753 = p__25752;
var map__25754 = cljs.core.nth.call(null,vec__25753,(0),null);
var map__25754__$1 = ((cljs.core.seq_QMARK_.call(null,map__25754))?cljs.core.apply.call(null,cljs.core.hash_map,map__25754):map__25754);
var msg = map__25754__$1;
var msg_name = cljs.core.get.call(null,map__25754__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25753,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__25753,map__25754,map__25754__$1,msg,msg_name,_,map__25751,map__25751__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25753,map__25754,map__25754__$1,msg,msg_name,_,map__25751,map__25751__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25751,map__25751__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25758){
var vec__25759 = p__25758;
var map__25760 = cljs.core.nth.call(null,vec__25759,(0),null);
var map__25760__$1 = ((cljs.core.seq_QMARK_.call(null,map__25760))?cljs.core.apply.call(null,cljs.core.hash_map,map__25760):map__25760);
var msg = map__25760__$1;
var msg_name = cljs.core.get.call(null,map__25760__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25759,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25761){
var map__25769 = p__25761;
var map__25769__$1 = ((cljs.core.seq_QMARK_.call(null,map__25769))?cljs.core.apply.call(null,cljs.core.hash_map,map__25769):map__25769);
var on_compile_fail = cljs.core.get.call(null,map__25769__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__25769__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__25769,map__25769__$1,on_compile_fail,on_compile_warning){
return (function (p__25770){
var vec__25771 = p__25770;
var map__25772 = cljs.core.nth.call(null,vec__25771,(0),null);
var map__25772__$1 = ((cljs.core.seq_QMARK_.call(null,map__25772))?cljs.core.apply.call(null,cljs.core.hash_map,map__25772):map__25772);
var msg = map__25772__$1;
var msg_name = cljs.core.get.call(null,map__25772__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25771,(1));
var pred__25773 = cljs.core._EQ_;
var expr__25774 = msg_name;
if(cljs.core.truth_(pred__25773.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25774))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25773.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25774))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25769,map__25769__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto__,msg_hist,msg_names,msg){
return (function (state_25975){
var state_val_25976 = (state_25975[(1)]);
if((state_val_25976 === (7))){
var inst_25909 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_25977_26018 = state_25975__$1;
(statearr_25977_26018[(2)] = inst_25909);

(statearr_25977_26018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (20))){
var inst_25937 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25975__$1 = state_25975;
if(cljs.core.truth_(inst_25937)){
var statearr_25978_26019 = state_25975__$1;
(statearr_25978_26019[(1)] = (22));

} else {
var statearr_25979_26020 = state_25975__$1;
(statearr_25979_26020[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (27))){
var inst_25949 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25950 = figwheel.client.heads_up.display_warning.call(null,inst_25949);
var state_25975__$1 = state_25975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25975__$1,(30),inst_25950);
} else {
if((state_val_25976 === (1))){
var inst_25897 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25975__$1 = state_25975;
if(cljs.core.truth_(inst_25897)){
var statearr_25980_26021 = state_25975__$1;
(statearr_25980_26021[(1)] = (2));

} else {
var statearr_25981_26022 = state_25975__$1;
(statearr_25981_26022[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (24))){
var inst_25965 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_25982_26023 = state_25975__$1;
(statearr_25982_26023[(2)] = inst_25965);

(statearr_25982_26023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (4))){
var inst_25973 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25975__$1,inst_25973);
} else {
if((state_val_25976 === (15))){
var inst_25925 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25926 = figwheel.client.format_messages.call(null,inst_25925);
var inst_25927 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25928 = figwheel.client.heads_up.display_error.call(null,inst_25926,inst_25927);
var state_25975__$1 = state_25975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25975__$1,(18),inst_25928);
} else {
if((state_val_25976 === (21))){
var inst_25967 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_25983_26024 = state_25975__$1;
(statearr_25983_26024[(2)] = inst_25967);

(statearr_25983_26024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (31))){
var inst_25956 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25975__$1 = state_25975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25975__$1,(34),inst_25956);
} else {
if((state_val_25976 === (32))){
var state_25975__$1 = state_25975;
var statearr_25984_26025 = state_25975__$1;
(statearr_25984_26025[(2)] = null);

(statearr_25984_26025[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (33))){
var inst_25961 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_25985_26026 = state_25975__$1;
(statearr_25985_26026[(2)] = inst_25961);

(statearr_25985_26026[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (13))){
var inst_25915 = (state_25975[(2)]);
var inst_25916 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25917 = figwheel.client.format_messages.call(null,inst_25916);
var inst_25918 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25919 = figwheel.client.heads_up.display_error.call(null,inst_25917,inst_25918);
var state_25975__$1 = (function (){var statearr_25986 = state_25975;
(statearr_25986[(7)] = inst_25915);

return statearr_25986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25975__$1,(14),inst_25919);
} else {
if((state_val_25976 === (22))){
var inst_25939 = figwheel.client.heads_up.clear.call(null);
var state_25975__$1 = state_25975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25975__$1,(25),inst_25939);
} else {
if((state_val_25976 === (29))){
var inst_25963 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_25987_26027 = state_25975__$1;
(statearr_25987_26027[(2)] = inst_25963);

(statearr_25987_26027[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (6))){
var inst_25905 = figwheel.client.heads_up.clear.call(null);
var state_25975__$1 = state_25975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25975__$1,(9),inst_25905);
} else {
if((state_val_25976 === (28))){
var inst_25954 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25975__$1 = state_25975;
if(cljs.core.truth_(inst_25954)){
var statearr_25988_26028 = state_25975__$1;
(statearr_25988_26028[(1)] = (31));

} else {
var statearr_25989_26029 = state_25975__$1;
(statearr_25989_26029[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (25))){
var inst_25941 = (state_25975[(2)]);
var inst_25942 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25943 = figwheel.client.heads_up.display_warning.call(null,inst_25942);
var state_25975__$1 = (function (){var statearr_25990 = state_25975;
(statearr_25990[(8)] = inst_25941);

return statearr_25990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25975__$1,(26),inst_25943);
} else {
if((state_val_25976 === (34))){
var inst_25958 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_25991_26030 = state_25975__$1;
(statearr_25991_26030[(2)] = inst_25958);

(statearr_25991_26030[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (17))){
var inst_25969 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_25992_26031 = state_25975__$1;
(statearr_25992_26031[(2)] = inst_25969);

(statearr_25992_26031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (3))){
var inst_25911 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25975__$1 = state_25975;
if(cljs.core.truth_(inst_25911)){
var statearr_25993_26032 = state_25975__$1;
(statearr_25993_26032[(1)] = (10));

} else {
var statearr_25994_26033 = state_25975__$1;
(statearr_25994_26033[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (12))){
var inst_25971 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_25995_26034 = state_25975__$1;
(statearr_25995_26034[(2)] = inst_25971);

(statearr_25995_26034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (2))){
var inst_25899 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25975__$1 = state_25975;
if(cljs.core.truth_(inst_25899)){
var statearr_25996_26035 = state_25975__$1;
(statearr_25996_26035[(1)] = (5));

} else {
var statearr_25997_26036 = state_25975__$1;
(statearr_25997_26036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (23))){
var inst_25947 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25975__$1 = state_25975;
if(cljs.core.truth_(inst_25947)){
var statearr_25998_26037 = state_25975__$1;
(statearr_25998_26037[(1)] = (27));

} else {
var statearr_25999_26038 = state_25975__$1;
(statearr_25999_26038[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (19))){
var inst_25934 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25935 = figwheel.client.heads_up.append_message.call(null,inst_25934);
var state_25975__$1 = state_25975;
var statearr_26000_26039 = state_25975__$1;
(statearr_26000_26039[(2)] = inst_25935);

(statearr_26000_26039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (11))){
var inst_25923 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25975__$1 = state_25975;
if(cljs.core.truth_(inst_25923)){
var statearr_26001_26040 = state_25975__$1;
(statearr_26001_26040[(1)] = (15));

} else {
var statearr_26002_26041 = state_25975__$1;
(statearr_26002_26041[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (9))){
var inst_25907 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_26003_26042 = state_25975__$1;
(statearr_26003_26042[(2)] = inst_25907);

(statearr_26003_26042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (5))){
var inst_25901 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25975__$1 = state_25975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25975__$1,(8),inst_25901);
} else {
if((state_val_25976 === (14))){
var inst_25921 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_26004_26043 = state_25975__$1;
(statearr_26004_26043[(2)] = inst_25921);

(statearr_26004_26043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (26))){
var inst_25945 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_26005_26044 = state_25975__$1;
(statearr_26005_26044[(2)] = inst_25945);

(statearr_26005_26044[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (16))){
var inst_25932 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25975__$1 = state_25975;
if(cljs.core.truth_(inst_25932)){
var statearr_26006_26045 = state_25975__$1;
(statearr_26006_26045[(1)] = (19));

} else {
var statearr_26007_26046 = state_25975__$1;
(statearr_26007_26046[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (30))){
var inst_25952 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_26008_26047 = state_25975__$1;
(statearr_26008_26047[(2)] = inst_25952);

(statearr_26008_26047[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (10))){
var inst_25913 = figwheel.client.heads_up.clear.call(null);
var state_25975__$1 = state_25975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25975__$1,(13),inst_25913);
} else {
if((state_val_25976 === (18))){
var inst_25930 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_26009_26048 = state_25975__$1;
(statearr_26009_26048[(2)] = inst_25930);

(statearr_26009_26048[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25976 === (8))){
var inst_25903 = (state_25975[(2)]);
var state_25975__$1 = state_25975;
var statearr_26010_26049 = state_25975__$1;
(statearr_26010_26049[(2)] = inst_25903);

(statearr_26010_26049[(1)] = (7));


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
});})(c__21535__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21473__auto__,c__21535__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21474__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21474__auto____0 = (function (){
var statearr_26014 = [null,null,null,null,null,null,null,null,null];
(statearr_26014[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21474__auto__);

(statearr_26014[(1)] = (1));

return statearr_26014;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21474__auto____1 = (function (state_25975){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_25975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e26015){if((e26015 instanceof Object)){
var ex__21477__auto__ = e26015;
var statearr_26016_26050 = state_25975;
(statearr_26016_26050[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26051 = state_25975;
state_25975 = G__26051;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21474__auto__ = function(state_25975){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21474__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21474__auto____1.call(this,state_25975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21474__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21474__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto__,msg_hist,msg_names,msg))
})();
var state__21537__auto__ = (function (){var statearr_26017 = f__21536__auto__.call(null);
(statearr_26017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto__);

return statearr_26017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__,msg_hist,msg_names,msg))
);

return c__21535__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21535__auto___26114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___26114,ch){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___26114,ch){
return (function (state_26097){
var state_val_26098 = (state_26097[(1)]);
if((state_val_26098 === (8))){
var inst_26089 = (state_26097[(2)]);
var state_26097__$1 = (function (){var statearr_26099 = state_26097;
(statearr_26099[(7)] = inst_26089);

return statearr_26099;
})();
var statearr_26100_26115 = state_26097__$1;
(statearr_26100_26115[(2)] = null);

(statearr_26100_26115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26098 === (7))){
var inst_26093 = (state_26097[(2)]);
var state_26097__$1 = state_26097;
var statearr_26101_26116 = state_26097__$1;
(statearr_26101_26116[(2)] = inst_26093);

(statearr_26101_26116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26098 === (6))){
var state_26097__$1 = state_26097;
var statearr_26102_26117 = state_26097__$1;
(statearr_26102_26117[(2)] = null);

(statearr_26102_26117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26098 === (5))){
var inst_26085 = (state_26097[(8)]);
var inst_26087 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26085);
var state_26097__$1 = state_26097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26097__$1,(8),inst_26087);
} else {
if((state_val_26098 === (4))){
var inst_26085 = (state_26097[(8)]);
var inst_26085__$1 = (state_26097[(2)]);
var state_26097__$1 = (function (){var statearr_26103 = state_26097;
(statearr_26103[(8)] = inst_26085__$1);

return statearr_26103;
})();
if(cljs.core.truth_(inst_26085__$1)){
var statearr_26104_26118 = state_26097__$1;
(statearr_26104_26118[(1)] = (5));

} else {
var statearr_26105_26119 = state_26097__$1;
(statearr_26105_26119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26098 === (3))){
var inst_26095 = (state_26097[(2)]);
var state_26097__$1 = state_26097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26097__$1,inst_26095);
} else {
if((state_val_26098 === (2))){
var state_26097__$1 = state_26097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26097__$1,(4),ch);
} else {
if((state_val_26098 === (1))){
var state_26097__$1 = state_26097;
var statearr_26106_26120 = state_26097__$1;
(statearr_26106_26120[(2)] = null);

(statearr_26106_26120[(1)] = (2));


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
});})(c__21535__auto___26114,ch))
;
return ((function (switch__21473__auto__,c__21535__auto___26114,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21474__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21474__auto____0 = (function (){
var statearr_26110 = [null,null,null,null,null,null,null,null,null];
(statearr_26110[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21474__auto__);

(statearr_26110[(1)] = (1));

return statearr_26110;
});
var figwheel$client$heads_up_plugin_$_state_machine__21474__auto____1 = (function (state_26097){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_26097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e26111){if((e26111 instanceof Object)){
var ex__21477__auto__ = e26111;
var statearr_26112_26121 = state_26097;
(statearr_26112_26121[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26122 = state_26097;
state_26097 = G__26122;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21474__auto__ = function(state_26097){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21474__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21474__auto____1.call(this,state_26097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21474__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21474__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___26114,ch))
})();
var state__21537__auto__ = (function (){var statearr_26113 = f__21536__auto__.call(null);
(statearr_26113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___26114);

return statearr_26113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___26114,ch))
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
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto__){
return (function (state_26143){
var state_val_26144 = (state_26143[(1)]);
if((state_val_26144 === (2))){
var inst_26140 = (state_26143[(2)]);
var inst_26141 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26143__$1 = (function (){var statearr_26145 = state_26143;
(statearr_26145[(7)] = inst_26140);

return statearr_26145;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26143__$1,inst_26141);
} else {
if((state_val_26144 === (1))){
var inst_26138 = cljs.core.async.timeout.call(null,(3000));
var state_26143__$1 = state_26143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26143__$1,(2),inst_26138);
} else {
return null;
}
}
});})(c__21535__auto__))
;
return ((function (switch__21473__auto__,c__21535__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21474__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21474__auto____0 = (function (){
var statearr_26149 = [null,null,null,null,null,null,null,null];
(statearr_26149[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21474__auto__);

(statearr_26149[(1)] = (1));

return statearr_26149;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21474__auto____1 = (function (state_26143){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_26143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e26150){if((e26150 instanceof Object)){
var ex__21477__auto__ = e26150;
var statearr_26151_26153 = state_26143;
(statearr_26151_26153[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26154 = state_26143;
state_26143 = G__26154;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21474__auto__ = function(state_26143){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21474__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21474__auto____1.call(this,state_26143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21474__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21474__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto__))
})();
var state__21537__auto__ = (function (){var statearr_26152 = f__21536__auto__.call(null);
(statearr_26152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto__);

return statearr_26152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__))
);

return c__21535__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26155){
var map__26161 = p__26155;
var map__26161__$1 = ((cljs.core.seq_QMARK_.call(null,map__26161))?cljs.core.apply.call(null,cljs.core.hash_map,map__26161):map__26161);
var ed = map__26161__$1;
var cause = cljs.core.get.call(null,map__26161__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__26161__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__26161__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26162_26166 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26163_26167 = null;
var count__26164_26168 = (0);
var i__26165_26169 = (0);
while(true){
if((i__26165_26169 < count__26164_26168)){
var msg_26170 = cljs.core._nth.call(null,chunk__26163_26167,i__26165_26169);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26170);

var G__26171 = seq__26162_26166;
var G__26172 = chunk__26163_26167;
var G__26173 = count__26164_26168;
var G__26174 = (i__26165_26169 + (1));
seq__26162_26166 = G__26171;
chunk__26163_26167 = G__26172;
count__26164_26168 = G__26173;
i__26165_26169 = G__26174;
continue;
} else {
var temp__4126__auto___26175 = cljs.core.seq.call(null,seq__26162_26166);
if(temp__4126__auto___26175){
var seq__26162_26176__$1 = temp__4126__auto___26175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26162_26176__$1)){
var c__18906__auto___26177 = cljs.core.chunk_first.call(null,seq__26162_26176__$1);
var G__26178 = cljs.core.chunk_rest.call(null,seq__26162_26176__$1);
var G__26179 = c__18906__auto___26177;
var G__26180 = cljs.core.count.call(null,c__18906__auto___26177);
var G__26181 = (0);
seq__26162_26166 = G__26178;
chunk__26163_26167 = G__26179;
count__26164_26168 = G__26180;
i__26165_26169 = G__26181;
continue;
} else {
var msg_26182 = cljs.core.first.call(null,seq__26162_26176__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26182);

var G__26183 = cljs.core.next.call(null,seq__26162_26176__$1);
var G__26184 = null;
var G__26185 = (0);
var G__26186 = (0);
seq__26162_26166 = G__26183;
chunk__26163_26167 = G__26184;
count__26164_26168 = G__26185;
i__26165_26169 = G__26186;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26187){
var map__26189 = p__26187;
var map__26189__$1 = ((cljs.core.seq_QMARK_.call(null,map__26189))?cljs.core.apply.call(null,cljs.core.hash_map,map__26189):map__26189);
var w = map__26189__$1;
var message = cljs.core.get.call(null,map__26189__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__26196 = cljs.core.seq.call(null,plugins);
var chunk__26197 = null;
var count__26198 = (0);
var i__26199 = (0);
while(true){
if((i__26199 < count__26198)){
var vec__26200 = cljs.core._nth.call(null,chunk__26197,i__26199);
var k = cljs.core.nth.call(null,vec__26200,(0),null);
var plugin = cljs.core.nth.call(null,vec__26200,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26202 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26196,chunk__26197,count__26198,i__26199,pl_26202,vec__26200,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26202.call(null,msg_hist);
});})(seq__26196,chunk__26197,count__26198,i__26199,pl_26202,vec__26200,k,plugin))
);
} else {
}

var G__26203 = seq__26196;
var G__26204 = chunk__26197;
var G__26205 = count__26198;
var G__26206 = (i__26199 + (1));
seq__26196 = G__26203;
chunk__26197 = G__26204;
count__26198 = G__26205;
i__26199 = G__26206;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26196);
if(temp__4126__auto__){
var seq__26196__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26196__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__26196__$1);
var G__26207 = cljs.core.chunk_rest.call(null,seq__26196__$1);
var G__26208 = c__18906__auto__;
var G__26209 = cljs.core.count.call(null,c__18906__auto__);
var G__26210 = (0);
seq__26196 = G__26207;
chunk__26197 = G__26208;
count__26198 = G__26209;
i__26199 = G__26210;
continue;
} else {
var vec__26201 = cljs.core.first.call(null,seq__26196__$1);
var k = cljs.core.nth.call(null,vec__26201,(0),null);
var plugin = cljs.core.nth.call(null,vec__26201,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26211 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26196,chunk__26197,count__26198,i__26199,pl_26211,vec__26201,k,plugin,seq__26196__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26211.call(null,msg_hist);
});})(seq__26196,chunk__26197,count__26198,i__26199,pl_26211,vec__26201,k,plugin,seq__26196__$1,temp__4126__auto__))
);
} else {
}

var G__26212 = cljs.core.next.call(null,seq__26196__$1);
var G__26213 = null;
var G__26214 = (0);
var G__26215 = (0);
seq__26196 = G__26212;
chunk__26197 = G__26213;
count__26198 = G__26214;
i__26199 = G__26215;
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
var G__26217 = arguments.length;
switch (G__26217) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26220){
var map__26221 = p__26220;
var map__26221__$1 = ((cljs.core.seq_QMARK_.call(null,map__26221))?cljs.core.apply.call(null,cljs.core.hash_map,map__26221):map__26221);
var opts = map__26221__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26219){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26219));
});

//# sourceMappingURL=client.js.map?rel=1440626240666