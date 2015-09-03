// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.clojure_symbol_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19709__auto__ = [];
var len__19702__auto___27272 = arguments.length;
var i__19703__auto___27273 = (0);
while(true){
if((i__19703__auto___27273 < len__19702__auto___27272)){
args__19709__auto__.push((arguments[i__19703__auto___27273]));

var G__27274 = (i__19703__auto___27273 + (1));
i__19703__auto___27273 = G__27274;
continue;
} else {
}
break;
}

var argseq__19710__auto__ = ((((2) < args__19709__auto__.length))?(new cljs.core.IndexedSeq(args__19709__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19710__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27264_27275 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27265_27276 = null;
var count__27266_27277 = (0);
var i__27267_27278 = (0);
while(true){
if((i__27267_27278 < count__27266_27277)){
var k_27279 = cljs.core._nth.call(null,chunk__27265_27276,i__27267_27278);
e.setAttribute(cljs.core.name.call(null,k_27279),cljs.core.get.call(null,attrs,k_27279));

var G__27280 = seq__27264_27275;
var G__27281 = chunk__27265_27276;
var G__27282 = count__27266_27277;
var G__27283 = (i__27267_27278 + (1));
seq__27264_27275 = G__27280;
chunk__27265_27276 = G__27281;
count__27266_27277 = G__27282;
i__27267_27278 = G__27283;
continue;
} else {
var temp__4425__auto___27284 = cljs.core.seq.call(null,seq__27264_27275);
if(temp__4425__auto___27284){
var seq__27264_27285__$1 = temp__4425__auto___27284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27264_27285__$1)){
var c__19447__auto___27286 = cljs.core.chunk_first.call(null,seq__27264_27285__$1);
var G__27287 = cljs.core.chunk_rest.call(null,seq__27264_27285__$1);
var G__27288 = c__19447__auto___27286;
var G__27289 = cljs.core.count.call(null,c__19447__auto___27286);
var G__27290 = (0);
seq__27264_27275 = G__27287;
chunk__27265_27276 = G__27288;
count__27266_27277 = G__27289;
i__27267_27278 = G__27290;
continue;
} else {
var k_27291 = cljs.core.first.call(null,seq__27264_27285__$1);
e.setAttribute(cljs.core.name.call(null,k_27291),cljs.core.get.call(null,attrs,k_27291));

var G__27292 = cljs.core.next.call(null,seq__27264_27285__$1);
var G__27293 = null;
var G__27294 = (0);
var G__27295 = (0);
seq__27264_27275 = G__27292;
chunk__27265_27276 = G__27293;
count__27266_27277 = G__27294;
i__27267_27278 = G__27295;
continue;
}
} else {
}
}
break;
}

var seq__27268_27296 = cljs.core.seq.call(null,children);
var chunk__27269_27297 = null;
var count__27270_27298 = (0);
var i__27271_27299 = (0);
while(true){
if((i__27271_27299 < count__27270_27298)){
var ch_27300 = cljs.core._nth.call(null,chunk__27269_27297,i__27271_27299);
e.appendChild(ch_27300);

var G__27301 = seq__27268_27296;
var G__27302 = chunk__27269_27297;
var G__27303 = count__27270_27298;
var G__27304 = (i__27271_27299 + (1));
seq__27268_27296 = G__27301;
chunk__27269_27297 = G__27302;
count__27270_27298 = G__27303;
i__27271_27299 = G__27304;
continue;
} else {
var temp__4425__auto___27305 = cljs.core.seq.call(null,seq__27268_27296);
if(temp__4425__auto___27305){
var seq__27268_27306__$1 = temp__4425__auto___27305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27268_27306__$1)){
var c__19447__auto___27307 = cljs.core.chunk_first.call(null,seq__27268_27306__$1);
var G__27308 = cljs.core.chunk_rest.call(null,seq__27268_27306__$1);
var G__27309 = c__19447__auto___27307;
var G__27310 = cljs.core.count.call(null,c__19447__auto___27307);
var G__27311 = (0);
seq__27268_27296 = G__27308;
chunk__27269_27297 = G__27309;
count__27270_27298 = G__27310;
i__27271_27299 = G__27311;
continue;
} else {
var ch_27312 = cljs.core.first.call(null,seq__27268_27306__$1);
e.appendChild(ch_27312);

var G__27313 = cljs.core.next.call(null,seq__27268_27306__$1);
var G__27314 = null;
var G__27315 = (0);
var G__27316 = (0);
seq__27268_27296 = G__27313;
chunk__27269_27297 = G__27314;
count__27270_27298 = G__27315;
i__27271_27299 = G__27316;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27261){
var G__27262 = cljs.core.first.call(null,seq27261);
var seq27261__$1 = cljs.core.next.call(null,seq27261);
var G__27263 = cljs.core.first.call(null,seq27261__$1);
var seq27261__$2 = cljs.core.next.call(null,seq27261__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27262,G__27263,seq27261__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19557__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19558__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19559__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19560__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19561__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19557__auto__,prefer_table__19558__auto__,method_cache__19559__auto__,cached_hierarchy__19560__auto__,hierarchy__19561__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19557__auto__,prefer_table__19558__auto__,method_cache__19559__auto__,cached_hierarchy__19560__auto__,hierarchy__19561__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19561__auto__,method_table__19557__auto__,prefer_table__19558__auto__,method_cache__19559__auto__,cached_hierarchy__19560__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27317 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27317.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27317.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_27317.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27317);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27318,st_map){
var map__27323 = p__27318;
var map__27323__$1 = ((((!((map__27323 == null)))?((((map__27323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27323):map__27323);
var container_el = cljs.core.get.call(null,map__27323__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27323,map__27323__$1,container_el){
return (function (p__27325){
var vec__27326 = p__27325;
var k = cljs.core.nth.call(null,vec__27326,(0),null);
var v = cljs.core.nth.call(null,vec__27326,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27323,map__27323__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27327,dom_str){
var map__27330 = p__27327;
var map__27330__$1 = ((((!((map__27330 == null)))?((((map__27330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27330):map__27330);
var c = map__27330__$1;
var content_area_el = cljs.core.get.call(null,map__27330__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27332){
var map__27335 = p__27332;
var map__27335__$1 = ((((!((map__27335 == null)))?((((map__27335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27335):map__27335);
var content_area_el = cljs.core.get.call(null,map__27335__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto__){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto__){
return (function (state_27378){
var state_val_27379 = (state_27378[(1)]);
if((state_val_27379 === (1))){
var inst_27363 = (state_27378[(7)]);
var inst_27363__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27364 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27365 = ["10px","10px","100%","68px","1.0"];
var inst_27366 = cljs.core.PersistentHashMap.fromArrays(inst_27364,inst_27365);
var inst_27367 = cljs.core.merge.call(null,inst_27366,style);
var inst_27368 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27363__$1,inst_27367);
var inst_27369 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27363__$1,msg);
var inst_27370 = cljs.core.async.timeout.call(null,(300));
var state_27378__$1 = (function (){var statearr_27380 = state_27378;
(statearr_27380[(7)] = inst_27363__$1);

(statearr_27380[(8)] = inst_27368);

(statearr_27380[(9)] = inst_27369);

return statearr_27380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27378__$1,(2),inst_27370);
} else {
if((state_val_27379 === (2))){
var inst_27363 = (state_27378[(7)]);
var inst_27372 = (state_27378[(2)]);
var inst_27373 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27374 = ["auto"];
var inst_27375 = cljs.core.PersistentHashMap.fromArrays(inst_27373,inst_27374);
var inst_27376 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27363,inst_27375);
var state_27378__$1 = (function (){var statearr_27381 = state_27378;
(statearr_27381[(10)] = inst_27372);

return statearr_27381;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27378__$1,inst_27376);
} else {
return null;
}
}
});})(c__22145__auto__))
;
return ((function (switch__22080__auto__,c__22145__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22081__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22081__auto____0 = (function (){
var statearr_27385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27385[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22081__auto__);

(statearr_27385[(1)] = (1));

return statearr_27385;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22081__auto____1 = (function (state_27378){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_27378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e27386){if((e27386 instanceof Object)){
var ex__22084__auto__ = e27386;
var statearr_27387_27389 = state_27378;
(statearr_27387_27389[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27390 = state_27378;
state_27378 = G__27390;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22081__auto__ = function(state_27378){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22081__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22081__auto____1.call(this,state_27378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22081__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22081__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto__))
})();
var state__22147__auto__ = (function (){var statearr_27388 = f__22146__auto__.call(null);
(statearr_27388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto__);

return statearr_27388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto__))
);

return c__22145__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__27392 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__27392,(0),null);
var ln = cljs.core.nth.call(null,vec__27392,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27395 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27395,(0),null);
var file_line = cljs.core.nth.call(null,vec__27395,(1),null);
var file_column = cljs.core.nth.call(null,vec__27395,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27395,file_name,file_line,file_column){
return (function (p1__27393_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__27393_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__27395,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18644__auto__ = file_line;
if(cljs.core.truth_(or__18644__auto__)){
return or__18644__auto__;
} else {
var and__18632__auto__ = cause;
if(cljs.core.truth_(and__18632__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18632__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27398 = figwheel.client.heads_up.ensure_container.call(null);
var map__27398__$1 = ((((!((map__27398 == null)))?((((map__27398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27398):map__27398);
var content_area_el = cljs.core.get.call(null,map__27398__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto__){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto__){
return (function (state_27446){
var state_val_27447 = (state_27446[(1)]);
if((state_val_27447 === (1))){
var inst_27429 = (state_27446[(7)]);
var inst_27429__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27430 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27431 = ["0.0"];
var inst_27432 = cljs.core.PersistentHashMap.fromArrays(inst_27430,inst_27431);
var inst_27433 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27429__$1,inst_27432);
var inst_27434 = cljs.core.async.timeout.call(null,(300));
var state_27446__$1 = (function (){var statearr_27448 = state_27446;
(statearr_27448[(8)] = inst_27433);

(statearr_27448[(7)] = inst_27429__$1);

return statearr_27448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27446__$1,(2),inst_27434);
} else {
if((state_val_27447 === (2))){
var inst_27429 = (state_27446[(7)]);
var inst_27436 = (state_27446[(2)]);
var inst_27437 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27438 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27439 = cljs.core.PersistentHashMap.fromArrays(inst_27437,inst_27438);
var inst_27440 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27429,inst_27439);
var inst_27441 = cljs.core.async.timeout.call(null,(200));
var state_27446__$1 = (function (){var statearr_27449 = state_27446;
(statearr_27449[(9)] = inst_27440);

(statearr_27449[(10)] = inst_27436);

return statearr_27449;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27446__$1,(3),inst_27441);
} else {
if((state_val_27447 === (3))){
var inst_27429 = (state_27446[(7)]);
var inst_27443 = (state_27446[(2)]);
var inst_27444 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27429,"");
var state_27446__$1 = (function (){var statearr_27450 = state_27446;
(statearr_27450[(11)] = inst_27443);

return statearr_27450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27446__$1,inst_27444);
} else {
return null;
}
}
}
});})(c__22145__auto__))
;
return ((function (switch__22080__auto__,c__22145__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22081__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22081__auto____0 = (function (){
var statearr_27454 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27454[(0)] = figwheel$client$heads_up$clear_$_state_machine__22081__auto__);

(statearr_27454[(1)] = (1));

return statearr_27454;
});
var figwheel$client$heads_up$clear_$_state_machine__22081__auto____1 = (function (state_27446){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_27446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e27455){if((e27455 instanceof Object)){
var ex__22084__auto__ = e27455;
var statearr_27456_27458 = state_27446;
(statearr_27456_27458[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27459 = state_27446;
state_27446 = G__27459;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22081__auto__ = function(state_27446){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22081__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22081__auto____1.call(this,state_27446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22081__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22081__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto__))
})();
var state__22147__auto__ = (function (){var statearr_27457 = f__22146__auto__.call(null);
(statearr_27457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto__);

return statearr_27457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto__))
);

return c__22145__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto__){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto__){
return (function (state_27491){
var state_val_27492 = (state_27491[(1)]);
if((state_val_27492 === (1))){
var inst_27481 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27491__$1 = state_27491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27491__$1,(2),inst_27481);
} else {
if((state_val_27492 === (2))){
var inst_27483 = (state_27491[(2)]);
var inst_27484 = cljs.core.async.timeout.call(null,(400));
var state_27491__$1 = (function (){var statearr_27493 = state_27491;
(statearr_27493[(7)] = inst_27483);

return statearr_27493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27491__$1,(3),inst_27484);
} else {
if((state_val_27492 === (3))){
var inst_27486 = (state_27491[(2)]);
var inst_27487 = figwheel.client.heads_up.clear.call(null);
var state_27491__$1 = (function (){var statearr_27494 = state_27491;
(statearr_27494[(8)] = inst_27486);

return statearr_27494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27491__$1,(4),inst_27487);
} else {
if((state_val_27492 === (4))){
var inst_27489 = (state_27491[(2)]);
var state_27491__$1 = state_27491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27491__$1,inst_27489);
} else {
return null;
}
}
}
}
});})(c__22145__auto__))
;
return ((function (switch__22080__auto__,c__22145__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22081__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22081__auto____0 = (function (){
var statearr_27498 = [null,null,null,null,null,null,null,null,null];
(statearr_27498[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22081__auto__);

(statearr_27498[(1)] = (1));

return statearr_27498;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22081__auto____1 = (function (state_27491){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_27491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e27499){if((e27499 instanceof Object)){
var ex__22084__auto__ = e27499;
var statearr_27500_27502 = state_27491;
(statearr_27500_27502[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27503 = state_27491;
state_27491 = G__27503;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22081__auto__ = function(state_27491){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22081__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22081__auto____1.call(this,state_27491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22081__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22081__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto__))
})();
var state__22147__auto__ = (function (){var statearr_27501 = f__22146__auto__.call(null);
(statearr_27501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto__);

return statearr_27501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto__))
);

return c__22145__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1441303750927