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
var G__25578__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25579__i = 0, G__25579__a = new Array(arguments.length -  0);
while (G__25579__i < G__25579__a.length) {G__25579__a[G__25579__i] = arguments[G__25579__i + 0]; ++G__25579__i;}
  args = new cljs.core.IndexedSeq(G__25579__a,0);
} 
return G__25578__delegate.call(this,args);};
G__25578.cljs$lang$maxFixedArity = 0;
G__25578.cljs$lang$applyTo = (function (arglist__25580){
var args = cljs.core.seq(arglist__25580);
return G__25578__delegate(args);
});
G__25578.cljs$core$IFn$_invoke$arity$variadic = G__25578__delegate;
return G__25578;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25581){
var map__25583 = p__25581;
var map__25583__$1 = ((cljs.core.seq_QMARK_.call(null,map__25583))?cljs.core.apply.call(null,cljs.core.hash_map,map__25583):map__25583);
var class$ = cljs.core.get.call(null,map__25583__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__25583__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__21529__auto___25712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___25712,ch){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___25712,ch){
return (function (state_25686){
var state_val_25687 = (state_25686[(1)]);
if((state_val_25687 === (7))){
var inst_25682 = (state_25686[(2)]);
var state_25686__$1 = state_25686;
var statearr_25688_25713 = state_25686__$1;
(statearr_25688_25713[(2)] = inst_25682);

(statearr_25688_25713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (1))){
var state_25686__$1 = state_25686;
var statearr_25689_25714 = state_25686__$1;
(statearr_25689_25714[(2)] = null);

(statearr_25689_25714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (4))){
var inst_25650 = (state_25686[(7)]);
var inst_25650__$1 = (state_25686[(2)]);
var state_25686__$1 = (function (){var statearr_25690 = state_25686;
(statearr_25690[(7)] = inst_25650__$1);

return statearr_25690;
})();
if(cljs.core.truth_(inst_25650__$1)){
var statearr_25691_25715 = state_25686__$1;
(statearr_25691_25715[(1)] = (5));

} else {
var statearr_25692_25716 = state_25686__$1;
(statearr_25692_25716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (13))){
var state_25686__$1 = state_25686;
var statearr_25693_25717 = state_25686__$1;
(statearr_25693_25717[(2)] = null);

(statearr_25693_25717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (6))){
var state_25686__$1 = state_25686;
var statearr_25694_25718 = state_25686__$1;
(statearr_25694_25718[(2)] = null);

(statearr_25694_25718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (3))){
var inst_25684 = (state_25686[(2)]);
var state_25686__$1 = state_25686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25686__$1,inst_25684);
} else {
if((state_val_25687 === (12))){
var inst_25657 = (state_25686[(8)]);
var inst_25670 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25657);
var inst_25671 = cljs.core.first.call(null,inst_25670);
var inst_25672 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25671);
var inst_25673 = console.warn("Figwheel: Not loading code with warnings - ",inst_25672);
var state_25686__$1 = state_25686;
var statearr_25695_25719 = state_25686__$1;
(statearr_25695_25719[(2)] = inst_25673);

(statearr_25695_25719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (2))){
var state_25686__$1 = state_25686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25686__$1,(4),ch);
} else {
if((state_val_25687 === (11))){
var inst_25666 = (state_25686[(2)]);
var state_25686__$1 = state_25686;
var statearr_25696_25720 = state_25686__$1;
(statearr_25696_25720[(2)] = inst_25666);

(statearr_25696_25720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (9))){
var inst_25656 = (state_25686[(9)]);
var inst_25668 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25656,opts);
var state_25686__$1 = state_25686;
if(cljs.core.truth_(inst_25668)){
var statearr_25697_25721 = state_25686__$1;
(statearr_25697_25721[(1)] = (12));

} else {
var statearr_25698_25722 = state_25686__$1;
(statearr_25698_25722[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (5))){
var inst_25650 = (state_25686[(7)]);
var inst_25656 = (state_25686[(9)]);
var inst_25652 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25653 = (new cljs.core.PersistentArrayMap(null,2,inst_25652,null));
var inst_25654 = (new cljs.core.PersistentHashSet(null,inst_25653,null));
var inst_25655 = figwheel.client.focus_msgs.call(null,inst_25654,inst_25650);
var inst_25656__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25655);
var inst_25657 = cljs.core.first.call(null,inst_25655);
var inst_25658 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25656__$1,opts);
var state_25686__$1 = (function (){var statearr_25699 = state_25686;
(statearr_25699[(8)] = inst_25657);

(statearr_25699[(9)] = inst_25656__$1);

return statearr_25699;
})();
if(cljs.core.truth_(inst_25658)){
var statearr_25700_25723 = state_25686__$1;
(statearr_25700_25723[(1)] = (8));

} else {
var statearr_25701_25724 = state_25686__$1;
(statearr_25701_25724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (14))){
var inst_25676 = (state_25686[(2)]);
var state_25686__$1 = state_25686;
var statearr_25702_25725 = state_25686__$1;
(statearr_25702_25725[(2)] = inst_25676);

(statearr_25702_25725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (10))){
var inst_25678 = (state_25686[(2)]);
var state_25686__$1 = (function (){var statearr_25703 = state_25686;
(statearr_25703[(10)] = inst_25678);

return statearr_25703;
})();
var statearr_25704_25726 = state_25686__$1;
(statearr_25704_25726[(2)] = null);

(statearr_25704_25726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (8))){
var inst_25657 = (state_25686[(8)]);
var inst_25660 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25661 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25657);
var inst_25662 = cljs.core.async.timeout.call(null,(1000));
var inst_25663 = [inst_25661,inst_25662];
var inst_25664 = (new cljs.core.PersistentVector(null,2,(5),inst_25660,inst_25663,null));
var state_25686__$1 = state_25686;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25686__$1,(11),inst_25664);
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
});})(c__21529__auto___25712,ch))
;
return ((function (switch__21467__auto__,c__21529__auto___25712,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21468__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21468__auto____0 = (function (){
var statearr_25708 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25708[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21468__auto__);

(statearr_25708[(1)] = (1));

return statearr_25708;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21468__auto____1 = (function (state_25686){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_25686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e25709){if((e25709 instanceof Object)){
var ex__21471__auto__ = e25709;
var statearr_25710_25727 = state_25686;
(statearr_25710_25727[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25728 = state_25686;
state_25686 = G__25728;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21468__auto__ = function(state_25686){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21468__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21468__auto____1.call(this,state_25686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21468__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21468__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___25712,ch))
})();
var state__21531__auto__ = (function (){var statearr_25711 = f__21530__auto__.call(null);
(statearr_25711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___25712);

return statearr_25711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___25712,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25729_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25729_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_25736 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25736){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_25734 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25735 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25734,_STAR_print_newline_STAR_25735,base_path_25736){
return (function() { 
var G__25737__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25737 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25738__i = 0, G__25738__a = new Array(arguments.length -  0);
while (G__25738__i < G__25738__a.length) {G__25738__a[G__25738__i] = arguments[G__25738__i + 0]; ++G__25738__i;}
  args = new cljs.core.IndexedSeq(G__25738__a,0);
} 
return G__25737__delegate.call(this,args);};
G__25737.cljs$lang$maxFixedArity = 0;
G__25737.cljs$lang$applyTo = (function (arglist__25739){
var args = cljs.core.seq(arglist__25739);
return G__25737__delegate(args);
});
G__25737.cljs$core$IFn$_invoke$arity$variadic = G__25737__delegate;
return G__25737;
})()
;})(_STAR_print_fn_STAR_25734,_STAR_print_newline_STAR_25735,base_path_25736))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25735;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25734;
}}catch (e25733){if((e25733 instanceof Error)){
var e = e25733;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25736], null));
} else {
var e = e25733;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25736))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25740){
var map__25745 = p__25740;
var map__25745__$1 = ((cljs.core.seq_QMARK_.call(null,map__25745))?cljs.core.apply.call(null,cljs.core.hash_map,map__25745):map__25745);
var opts = map__25745__$1;
var build_id = cljs.core.get.call(null,map__25745__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25745,map__25745__$1,opts,build_id){
return (function (p__25746){
var vec__25747 = p__25746;
var map__25748 = cljs.core.nth.call(null,vec__25747,(0),null);
var map__25748__$1 = ((cljs.core.seq_QMARK_.call(null,map__25748))?cljs.core.apply.call(null,cljs.core.hash_map,map__25748):map__25748);
var msg = map__25748__$1;
var msg_name = cljs.core.get.call(null,map__25748__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25747,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__25747,map__25748,map__25748__$1,msg,msg_name,_,map__25745,map__25745__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25747,map__25748,map__25748__$1,msg,msg_name,_,map__25745,map__25745__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25745,map__25745__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25752){
var vec__25753 = p__25752;
var map__25754 = cljs.core.nth.call(null,vec__25753,(0),null);
var map__25754__$1 = ((cljs.core.seq_QMARK_.call(null,map__25754))?cljs.core.apply.call(null,cljs.core.hash_map,map__25754):map__25754);
var msg = map__25754__$1;
var msg_name = cljs.core.get.call(null,map__25754__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25753,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25755){
var map__25763 = p__25755;
var map__25763__$1 = ((cljs.core.seq_QMARK_.call(null,map__25763))?cljs.core.apply.call(null,cljs.core.hash_map,map__25763):map__25763);
var on_compile_fail = cljs.core.get.call(null,map__25763__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__25763__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__25763,map__25763__$1,on_compile_fail,on_compile_warning){
return (function (p__25764){
var vec__25765 = p__25764;
var map__25766 = cljs.core.nth.call(null,vec__25765,(0),null);
var map__25766__$1 = ((cljs.core.seq_QMARK_.call(null,map__25766))?cljs.core.apply.call(null,cljs.core.hash_map,map__25766):map__25766);
var msg = map__25766__$1;
var msg_name = cljs.core.get.call(null,map__25766__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25765,(1));
var pred__25767 = cljs.core._EQ_;
var expr__25768 = msg_name;
if(cljs.core.truth_(pred__25767.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25768))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25767.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25768))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25763,map__25763__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto__,msg_hist,msg_names,msg){
return (function (state_25969){
var state_val_25970 = (state_25969[(1)]);
if((state_val_25970 === (7))){
var inst_25903 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25971_26012 = state_25969__$1;
(statearr_25971_26012[(2)] = inst_25903);

(statearr_25971_26012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (20))){
var inst_25931 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25969__$1 = state_25969;
if(cljs.core.truth_(inst_25931)){
var statearr_25972_26013 = state_25969__$1;
(statearr_25972_26013[(1)] = (22));

} else {
var statearr_25973_26014 = state_25969__$1;
(statearr_25973_26014[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (27))){
var inst_25943 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25944 = figwheel.client.heads_up.display_warning.call(null,inst_25943);
var state_25969__$1 = state_25969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25969__$1,(30),inst_25944);
} else {
if((state_val_25970 === (1))){
var inst_25891 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25969__$1 = state_25969;
if(cljs.core.truth_(inst_25891)){
var statearr_25974_26015 = state_25969__$1;
(statearr_25974_26015[(1)] = (2));

} else {
var statearr_25975_26016 = state_25969__$1;
(statearr_25975_26016[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (24))){
var inst_25959 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25976_26017 = state_25969__$1;
(statearr_25976_26017[(2)] = inst_25959);

(statearr_25976_26017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (4))){
var inst_25967 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25969__$1,inst_25967);
} else {
if((state_val_25970 === (15))){
var inst_25919 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25920 = figwheel.client.format_messages.call(null,inst_25919);
var inst_25921 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25922 = figwheel.client.heads_up.display_error.call(null,inst_25920,inst_25921);
var state_25969__$1 = state_25969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25969__$1,(18),inst_25922);
} else {
if((state_val_25970 === (21))){
var inst_25961 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25977_26018 = state_25969__$1;
(statearr_25977_26018[(2)] = inst_25961);

(statearr_25977_26018[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (31))){
var inst_25950 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25969__$1 = state_25969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25969__$1,(34),inst_25950);
} else {
if((state_val_25970 === (32))){
var state_25969__$1 = state_25969;
var statearr_25978_26019 = state_25969__$1;
(statearr_25978_26019[(2)] = null);

(statearr_25978_26019[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (33))){
var inst_25955 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25979_26020 = state_25969__$1;
(statearr_25979_26020[(2)] = inst_25955);

(statearr_25979_26020[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (13))){
var inst_25909 = (state_25969[(2)]);
var inst_25910 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25911 = figwheel.client.format_messages.call(null,inst_25910);
var inst_25912 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25913 = figwheel.client.heads_up.display_error.call(null,inst_25911,inst_25912);
var state_25969__$1 = (function (){var statearr_25980 = state_25969;
(statearr_25980[(7)] = inst_25909);

return statearr_25980;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25969__$1,(14),inst_25913);
} else {
if((state_val_25970 === (22))){
var inst_25933 = figwheel.client.heads_up.clear.call(null);
var state_25969__$1 = state_25969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25969__$1,(25),inst_25933);
} else {
if((state_val_25970 === (29))){
var inst_25957 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25981_26021 = state_25969__$1;
(statearr_25981_26021[(2)] = inst_25957);

(statearr_25981_26021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (6))){
var inst_25899 = figwheel.client.heads_up.clear.call(null);
var state_25969__$1 = state_25969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25969__$1,(9),inst_25899);
} else {
if((state_val_25970 === (28))){
var inst_25948 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25969__$1 = state_25969;
if(cljs.core.truth_(inst_25948)){
var statearr_25982_26022 = state_25969__$1;
(statearr_25982_26022[(1)] = (31));

} else {
var statearr_25983_26023 = state_25969__$1;
(statearr_25983_26023[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (25))){
var inst_25935 = (state_25969[(2)]);
var inst_25936 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25937 = figwheel.client.heads_up.display_warning.call(null,inst_25936);
var state_25969__$1 = (function (){var statearr_25984 = state_25969;
(statearr_25984[(8)] = inst_25935);

return statearr_25984;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25969__$1,(26),inst_25937);
} else {
if((state_val_25970 === (34))){
var inst_25952 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25985_26024 = state_25969__$1;
(statearr_25985_26024[(2)] = inst_25952);

(statearr_25985_26024[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (17))){
var inst_25963 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25986_26025 = state_25969__$1;
(statearr_25986_26025[(2)] = inst_25963);

(statearr_25986_26025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (3))){
var inst_25905 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25969__$1 = state_25969;
if(cljs.core.truth_(inst_25905)){
var statearr_25987_26026 = state_25969__$1;
(statearr_25987_26026[(1)] = (10));

} else {
var statearr_25988_26027 = state_25969__$1;
(statearr_25988_26027[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (12))){
var inst_25965 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25989_26028 = state_25969__$1;
(statearr_25989_26028[(2)] = inst_25965);

(statearr_25989_26028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (2))){
var inst_25893 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25969__$1 = state_25969;
if(cljs.core.truth_(inst_25893)){
var statearr_25990_26029 = state_25969__$1;
(statearr_25990_26029[(1)] = (5));

} else {
var statearr_25991_26030 = state_25969__$1;
(statearr_25991_26030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (23))){
var inst_25941 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25969__$1 = state_25969;
if(cljs.core.truth_(inst_25941)){
var statearr_25992_26031 = state_25969__$1;
(statearr_25992_26031[(1)] = (27));

} else {
var statearr_25993_26032 = state_25969__$1;
(statearr_25993_26032[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (19))){
var inst_25928 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25929 = figwheel.client.heads_up.append_message.call(null,inst_25928);
var state_25969__$1 = state_25969;
var statearr_25994_26033 = state_25969__$1;
(statearr_25994_26033[(2)] = inst_25929);

(statearr_25994_26033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (11))){
var inst_25917 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25969__$1 = state_25969;
if(cljs.core.truth_(inst_25917)){
var statearr_25995_26034 = state_25969__$1;
(statearr_25995_26034[(1)] = (15));

} else {
var statearr_25996_26035 = state_25969__$1;
(statearr_25996_26035[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (9))){
var inst_25901 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25997_26036 = state_25969__$1;
(statearr_25997_26036[(2)] = inst_25901);

(statearr_25997_26036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (5))){
var inst_25895 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25969__$1 = state_25969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25969__$1,(8),inst_25895);
} else {
if((state_val_25970 === (14))){
var inst_25915 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25998_26037 = state_25969__$1;
(statearr_25998_26037[(2)] = inst_25915);

(statearr_25998_26037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (26))){
var inst_25939 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_25999_26038 = state_25969__$1;
(statearr_25999_26038[(2)] = inst_25939);

(statearr_25999_26038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (16))){
var inst_25926 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25969__$1 = state_25969;
if(cljs.core.truth_(inst_25926)){
var statearr_26000_26039 = state_25969__$1;
(statearr_26000_26039[(1)] = (19));

} else {
var statearr_26001_26040 = state_25969__$1;
(statearr_26001_26040[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (30))){
var inst_25946 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_26002_26041 = state_25969__$1;
(statearr_26002_26041[(2)] = inst_25946);

(statearr_26002_26041[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (10))){
var inst_25907 = figwheel.client.heads_up.clear.call(null);
var state_25969__$1 = state_25969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25969__$1,(13),inst_25907);
} else {
if((state_val_25970 === (18))){
var inst_25924 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_26003_26042 = state_25969__$1;
(statearr_26003_26042[(2)] = inst_25924);

(statearr_26003_26042[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25970 === (8))){
var inst_25897 = (state_25969[(2)]);
var state_25969__$1 = state_25969;
var statearr_26004_26043 = state_25969__$1;
(statearr_26004_26043[(2)] = inst_25897);

(statearr_26004_26043[(1)] = (7));


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
});})(c__21529__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21467__auto__,c__21529__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21468__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21468__auto____0 = (function (){
var statearr_26008 = [null,null,null,null,null,null,null,null,null];
(statearr_26008[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21468__auto__);

(statearr_26008[(1)] = (1));

return statearr_26008;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21468__auto____1 = (function (state_25969){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_25969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e26009){if((e26009 instanceof Object)){
var ex__21471__auto__ = e26009;
var statearr_26010_26044 = state_25969;
(statearr_26010_26044[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26045 = state_25969;
state_25969 = G__26045;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21468__auto__ = function(state_25969){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21468__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21468__auto____1.call(this,state_25969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21468__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21468__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto__,msg_hist,msg_names,msg))
})();
var state__21531__auto__ = (function (){var statearr_26011 = f__21530__auto__.call(null);
(statearr_26011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto__);

return statearr_26011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto__,msg_hist,msg_names,msg))
);

return c__21529__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21529__auto___26108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___26108,ch){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___26108,ch){
return (function (state_26091){
var state_val_26092 = (state_26091[(1)]);
if((state_val_26092 === (8))){
var inst_26083 = (state_26091[(2)]);
var state_26091__$1 = (function (){var statearr_26093 = state_26091;
(statearr_26093[(7)] = inst_26083);

return statearr_26093;
})();
var statearr_26094_26109 = state_26091__$1;
(statearr_26094_26109[(2)] = null);

(statearr_26094_26109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (7))){
var inst_26087 = (state_26091[(2)]);
var state_26091__$1 = state_26091;
var statearr_26095_26110 = state_26091__$1;
(statearr_26095_26110[(2)] = inst_26087);

(statearr_26095_26110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (6))){
var state_26091__$1 = state_26091;
var statearr_26096_26111 = state_26091__$1;
(statearr_26096_26111[(2)] = null);

(statearr_26096_26111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (5))){
var inst_26079 = (state_26091[(8)]);
var inst_26081 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26079);
var state_26091__$1 = state_26091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26091__$1,(8),inst_26081);
} else {
if((state_val_26092 === (4))){
var inst_26079 = (state_26091[(8)]);
var inst_26079__$1 = (state_26091[(2)]);
var state_26091__$1 = (function (){var statearr_26097 = state_26091;
(statearr_26097[(8)] = inst_26079__$1);

return statearr_26097;
})();
if(cljs.core.truth_(inst_26079__$1)){
var statearr_26098_26112 = state_26091__$1;
(statearr_26098_26112[(1)] = (5));

} else {
var statearr_26099_26113 = state_26091__$1;
(statearr_26099_26113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (3))){
var inst_26089 = (state_26091[(2)]);
var state_26091__$1 = state_26091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26091__$1,inst_26089);
} else {
if((state_val_26092 === (2))){
var state_26091__$1 = state_26091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26091__$1,(4),ch);
} else {
if((state_val_26092 === (1))){
var state_26091__$1 = state_26091;
var statearr_26100_26114 = state_26091__$1;
(statearr_26100_26114[(2)] = null);

(statearr_26100_26114[(1)] = (2));


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
});})(c__21529__auto___26108,ch))
;
return ((function (switch__21467__auto__,c__21529__auto___26108,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21468__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21468__auto____0 = (function (){
var statearr_26104 = [null,null,null,null,null,null,null,null,null];
(statearr_26104[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21468__auto__);

(statearr_26104[(1)] = (1));

return statearr_26104;
});
var figwheel$client$heads_up_plugin_$_state_machine__21468__auto____1 = (function (state_26091){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_26091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e26105){if((e26105 instanceof Object)){
var ex__21471__auto__ = e26105;
var statearr_26106_26115 = state_26091;
(statearr_26106_26115[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26116 = state_26091;
state_26091 = G__26116;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21468__auto__ = function(state_26091){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21468__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21468__auto____1.call(this,state_26091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21468__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21468__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___26108,ch))
})();
var state__21531__auto__ = (function (){var statearr_26107 = f__21530__auto__.call(null);
(statearr_26107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___26108);

return statearr_26107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___26108,ch))
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
var c__21529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto__){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto__){
return (function (state_26137){
var state_val_26138 = (state_26137[(1)]);
if((state_val_26138 === (2))){
var inst_26134 = (state_26137[(2)]);
var inst_26135 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26137__$1 = (function (){var statearr_26139 = state_26137;
(statearr_26139[(7)] = inst_26134);

return statearr_26139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26137__$1,inst_26135);
} else {
if((state_val_26138 === (1))){
var inst_26132 = cljs.core.async.timeout.call(null,(3000));
var state_26137__$1 = state_26137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26137__$1,(2),inst_26132);
} else {
return null;
}
}
});})(c__21529__auto__))
;
return ((function (switch__21467__auto__,c__21529__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21468__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21468__auto____0 = (function (){
var statearr_26143 = [null,null,null,null,null,null,null,null];
(statearr_26143[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21468__auto__);

(statearr_26143[(1)] = (1));

return statearr_26143;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21468__auto____1 = (function (state_26137){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_26137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e26144){if((e26144 instanceof Object)){
var ex__21471__auto__ = e26144;
var statearr_26145_26147 = state_26137;
(statearr_26145_26147[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26148 = state_26137;
state_26137 = G__26148;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21468__auto__ = function(state_26137){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21468__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21468__auto____1.call(this,state_26137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21468__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21468__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto__))
})();
var state__21531__auto__ = (function (){var statearr_26146 = f__21530__auto__.call(null);
(statearr_26146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto__);

return statearr_26146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto__))
);

return c__21529__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26149){
var map__26155 = p__26149;
var map__26155__$1 = ((cljs.core.seq_QMARK_.call(null,map__26155))?cljs.core.apply.call(null,cljs.core.hash_map,map__26155):map__26155);
var ed = map__26155__$1;
var cause = cljs.core.get.call(null,map__26155__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__26155__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__26155__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26156_26160 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26157_26161 = null;
var count__26158_26162 = (0);
var i__26159_26163 = (0);
while(true){
if((i__26159_26163 < count__26158_26162)){
var msg_26164 = cljs.core._nth.call(null,chunk__26157_26161,i__26159_26163);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26164);

var G__26165 = seq__26156_26160;
var G__26166 = chunk__26157_26161;
var G__26167 = count__26158_26162;
var G__26168 = (i__26159_26163 + (1));
seq__26156_26160 = G__26165;
chunk__26157_26161 = G__26166;
count__26158_26162 = G__26167;
i__26159_26163 = G__26168;
continue;
} else {
var temp__4126__auto___26169 = cljs.core.seq.call(null,seq__26156_26160);
if(temp__4126__auto___26169){
var seq__26156_26170__$1 = temp__4126__auto___26169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26156_26170__$1)){
var c__18906__auto___26171 = cljs.core.chunk_first.call(null,seq__26156_26170__$1);
var G__26172 = cljs.core.chunk_rest.call(null,seq__26156_26170__$1);
var G__26173 = c__18906__auto___26171;
var G__26174 = cljs.core.count.call(null,c__18906__auto___26171);
var G__26175 = (0);
seq__26156_26160 = G__26172;
chunk__26157_26161 = G__26173;
count__26158_26162 = G__26174;
i__26159_26163 = G__26175;
continue;
} else {
var msg_26176 = cljs.core.first.call(null,seq__26156_26170__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26176);

var G__26177 = cljs.core.next.call(null,seq__26156_26170__$1);
var G__26178 = null;
var G__26179 = (0);
var G__26180 = (0);
seq__26156_26160 = G__26177;
chunk__26157_26161 = G__26178;
count__26158_26162 = G__26179;
i__26159_26163 = G__26180;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26181){
var map__26183 = p__26181;
var map__26183__$1 = ((cljs.core.seq_QMARK_.call(null,map__26183))?cljs.core.apply.call(null,cljs.core.hash_map,map__26183):map__26183);
var w = map__26183__$1;
var message = cljs.core.get.call(null,map__26183__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__26190 = cljs.core.seq.call(null,plugins);
var chunk__26191 = null;
var count__26192 = (0);
var i__26193 = (0);
while(true){
if((i__26193 < count__26192)){
var vec__26194 = cljs.core._nth.call(null,chunk__26191,i__26193);
var k = cljs.core.nth.call(null,vec__26194,(0),null);
var plugin = cljs.core.nth.call(null,vec__26194,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26196 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26190,chunk__26191,count__26192,i__26193,pl_26196,vec__26194,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26196.call(null,msg_hist);
});})(seq__26190,chunk__26191,count__26192,i__26193,pl_26196,vec__26194,k,plugin))
);
} else {
}

var G__26197 = seq__26190;
var G__26198 = chunk__26191;
var G__26199 = count__26192;
var G__26200 = (i__26193 + (1));
seq__26190 = G__26197;
chunk__26191 = G__26198;
count__26192 = G__26199;
i__26193 = G__26200;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26190);
if(temp__4126__auto__){
var seq__26190__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26190__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__26190__$1);
var G__26201 = cljs.core.chunk_rest.call(null,seq__26190__$1);
var G__26202 = c__18906__auto__;
var G__26203 = cljs.core.count.call(null,c__18906__auto__);
var G__26204 = (0);
seq__26190 = G__26201;
chunk__26191 = G__26202;
count__26192 = G__26203;
i__26193 = G__26204;
continue;
} else {
var vec__26195 = cljs.core.first.call(null,seq__26190__$1);
var k = cljs.core.nth.call(null,vec__26195,(0),null);
var plugin = cljs.core.nth.call(null,vec__26195,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26205 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26190,chunk__26191,count__26192,i__26193,pl_26205,vec__26195,k,plugin,seq__26190__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26205.call(null,msg_hist);
});})(seq__26190,chunk__26191,count__26192,i__26193,pl_26205,vec__26195,k,plugin,seq__26190__$1,temp__4126__auto__))
);
} else {
}

var G__26206 = cljs.core.next.call(null,seq__26190__$1);
var G__26207 = null;
var G__26208 = (0);
var G__26209 = (0);
seq__26190 = G__26206;
chunk__26191 = G__26207;
count__26192 = G__26208;
i__26193 = G__26209;
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
var G__26211 = arguments.length;
switch (G__26211) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26214){
var map__26215 = p__26214;
var map__26215__$1 = ((cljs.core.seq_QMARK_.call(null,map__26215))?cljs.core.apply.call(null,cljs.core.hash_map,map__26215):map__26215);
var opts = map__26215__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26213){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26213));
});

//# sourceMappingURL=client.js.map?rel=1440697836631