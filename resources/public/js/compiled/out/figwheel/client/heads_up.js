// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26342_26350 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26343_26351 = null;
var count__26344_26352 = (0);
var i__26345_26353 = (0);
while(true){
if((i__26345_26353 < count__26344_26352)){
var k_26354 = cljs.core._nth.call(null,chunk__26343_26351,i__26345_26353);
e.setAttribute(cljs.core.name.call(null,k_26354),cljs.core.get.call(null,attrs,k_26354));

var G__26355 = seq__26342_26350;
var G__26356 = chunk__26343_26351;
var G__26357 = count__26344_26352;
var G__26358 = (i__26345_26353 + (1));
seq__26342_26350 = G__26355;
chunk__26343_26351 = G__26356;
count__26344_26352 = G__26357;
i__26345_26353 = G__26358;
continue;
} else {
var temp__4126__auto___26359 = cljs.core.seq.call(null,seq__26342_26350);
if(temp__4126__auto___26359){
var seq__26342_26360__$1 = temp__4126__auto___26359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26342_26360__$1)){
var c__18906__auto___26361 = cljs.core.chunk_first.call(null,seq__26342_26360__$1);
var G__26362 = cljs.core.chunk_rest.call(null,seq__26342_26360__$1);
var G__26363 = c__18906__auto___26361;
var G__26364 = cljs.core.count.call(null,c__18906__auto___26361);
var G__26365 = (0);
seq__26342_26350 = G__26362;
chunk__26343_26351 = G__26363;
count__26344_26352 = G__26364;
i__26345_26353 = G__26365;
continue;
} else {
var k_26366 = cljs.core.first.call(null,seq__26342_26360__$1);
e.setAttribute(cljs.core.name.call(null,k_26366),cljs.core.get.call(null,attrs,k_26366));

var G__26367 = cljs.core.next.call(null,seq__26342_26360__$1);
var G__26368 = null;
var G__26369 = (0);
var G__26370 = (0);
seq__26342_26350 = G__26367;
chunk__26343_26351 = G__26368;
count__26344_26352 = G__26369;
i__26345_26353 = G__26370;
continue;
}
} else {
}
}
break;
}

var seq__26346_26371 = cljs.core.seq.call(null,children);
var chunk__26347_26372 = null;
var count__26348_26373 = (0);
var i__26349_26374 = (0);
while(true){
if((i__26349_26374 < count__26348_26373)){
var ch_26375 = cljs.core._nth.call(null,chunk__26347_26372,i__26349_26374);
e.appendChild(ch_26375);

var G__26376 = seq__26346_26371;
var G__26377 = chunk__26347_26372;
var G__26378 = count__26348_26373;
var G__26379 = (i__26349_26374 + (1));
seq__26346_26371 = G__26376;
chunk__26347_26372 = G__26377;
count__26348_26373 = G__26378;
i__26349_26374 = G__26379;
continue;
} else {
var temp__4126__auto___26380 = cljs.core.seq.call(null,seq__26346_26371);
if(temp__4126__auto___26380){
var seq__26346_26381__$1 = temp__4126__auto___26380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26346_26381__$1)){
var c__18906__auto___26382 = cljs.core.chunk_first.call(null,seq__26346_26381__$1);
var G__26383 = cljs.core.chunk_rest.call(null,seq__26346_26381__$1);
var G__26384 = c__18906__auto___26382;
var G__26385 = cljs.core.count.call(null,c__18906__auto___26382);
var G__26386 = (0);
seq__26346_26371 = G__26383;
chunk__26347_26372 = G__26384;
count__26348_26373 = G__26385;
i__26349_26374 = G__26386;
continue;
} else {
var ch_26387 = cljs.core.first.call(null,seq__26346_26381__$1);
e.appendChild(ch_26387);

var G__26388 = cljs.core.next.call(null,seq__26346_26381__$1);
var G__26389 = null;
var G__26390 = (0);
var G__26391 = (0);
seq__26346_26371 = G__26388;
chunk__26347_26372 = G__26389;
count__26348_26373 = G__26390;
i__26349_26374 = G__26391;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26339){
var G__26340 = cljs.core.first.call(null,seq26339);
var seq26339__$1 = cljs.core.next.call(null,seq26339);
var G__26341 = cljs.core.first.call(null,seq26339__$1);
var seq26339__$2 = cljs.core.next.call(null,seq26339__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26340,G__26341,seq26339__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__,hierarchy__19020__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__,hierarchy__19020__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
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
var el_26392 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26392.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26392.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_26392.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26392);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26393,st_map){
var map__26397 = p__26393;
var map__26397__$1 = ((cljs.core.seq_QMARK_.call(null,map__26397))?cljs.core.apply.call(null,cljs.core.hash_map,map__26397):map__26397);
var container_el = cljs.core.get.call(null,map__26397__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26397,map__26397__$1,container_el){
return (function (p__26398){
var vec__26399 = p__26398;
var k = cljs.core.nth.call(null,vec__26399,(0),null);
var v = cljs.core.nth.call(null,vec__26399,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26397,map__26397__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26400,dom_str){
var map__26402 = p__26400;
var map__26402__$1 = ((cljs.core.seq_QMARK_.call(null,map__26402))?cljs.core.apply.call(null,cljs.core.hash_map,map__26402):map__26402);
var c = map__26402__$1;
var content_area_el = cljs.core.get.call(null,map__26402__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26403){
var map__26405 = p__26403;
var map__26405__$1 = ((cljs.core.seq_QMARK_.call(null,map__26405))?cljs.core.apply.call(null,cljs.core.hash_map,map__26405):map__26405);
var content_area_el = cljs.core.get.call(null,map__26405__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto__){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto__){
return (function (state_26447){
var state_val_26448 = (state_26447[(1)]);
if((state_val_26448 === (2))){
var inst_26432 = (state_26447[(7)]);
var inst_26441 = (state_26447[(2)]);
var inst_26442 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26443 = ["auto"];
var inst_26444 = cljs.core.PersistentHashMap.fromArrays(inst_26442,inst_26443);
var inst_26445 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26432,inst_26444);
var state_26447__$1 = (function (){var statearr_26449 = state_26447;
(statearr_26449[(8)] = inst_26441);

return statearr_26449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26447__$1,inst_26445);
} else {
if((state_val_26448 === (1))){
var inst_26432 = (state_26447[(7)]);
var inst_26432__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26433 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26434 = ["10px","10px","100%","68px","1.0"];
var inst_26435 = cljs.core.PersistentHashMap.fromArrays(inst_26433,inst_26434);
var inst_26436 = cljs.core.merge.call(null,inst_26435,style);
var inst_26437 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26432__$1,inst_26436);
var inst_26438 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26432__$1,msg);
var inst_26439 = cljs.core.async.timeout.call(null,(300));
var state_26447__$1 = (function (){var statearr_26450 = state_26447;
(statearr_26450[(9)] = inst_26437);

(statearr_26450[(10)] = inst_26438);

(statearr_26450[(7)] = inst_26432__$1);

return statearr_26450;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26447__$1,(2),inst_26439);
} else {
return null;
}
}
});})(c__21529__auto__))
;
return ((function (switch__21467__auto__,c__21529__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21468__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21468__auto____0 = (function (){
var statearr_26454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26454[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21468__auto__);

(statearr_26454[(1)] = (1));

return statearr_26454;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21468__auto____1 = (function (state_26447){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_26447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e26455){if((e26455 instanceof Object)){
var ex__21471__auto__ = e26455;
var statearr_26456_26458 = state_26447;
(statearr_26456_26458[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26459 = state_26447;
state_26447 = G__26459;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21468__auto__ = function(state_26447){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21468__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21468__auto____1.call(this,state_26447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21468__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21468__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto__))
})();
var state__21531__auto__ = (function (){var statearr_26457 = f__21530__auto__.call(null);
(statearr_26457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto__);

return statearr_26457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto__))
);

return c__21529__auto__;
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
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__26461 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__26461,(0),null);
var ln = cljs.core.nth.call(null,vec__26461,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26464 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26464,(0),null);
var file_line = cljs.core.nth.call(null,vec__26464,(1),null);
var file_column = cljs.core.nth.call(null,vec__26464,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26464,file_name,file_line,file_column){
return (function (p1__26462_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__26462_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__26464,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18121__auto__ = file_line;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
var and__18109__auto__ = cause;
if(cljs.core.truth_(and__18109__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18109__auto__;
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
var map__26466 = figwheel.client.heads_up.ensure_container.call(null);
var map__26466__$1 = ((cljs.core.seq_QMARK_.call(null,map__26466))?cljs.core.apply.call(null,cljs.core.hash_map,map__26466):map__26466);
var content_area_el = cljs.core.get.call(null,map__26466__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto__){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto__){
return (function (state_26513){
var state_val_26514 = (state_26513[(1)]);
if((state_val_26514 === (3))){
var inst_26496 = (state_26513[(7)]);
var inst_26510 = (state_26513[(2)]);
var inst_26511 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26496,"");
var state_26513__$1 = (function (){var statearr_26515 = state_26513;
(statearr_26515[(8)] = inst_26510);

return statearr_26515;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26513__$1,inst_26511);
} else {
if((state_val_26514 === (2))){
var inst_26496 = (state_26513[(7)]);
var inst_26503 = (state_26513[(2)]);
var inst_26504 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26505 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26506 = cljs.core.PersistentHashMap.fromArrays(inst_26504,inst_26505);
var inst_26507 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26496,inst_26506);
var inst_26508 = cljs.core.async.timeout.call(null,(200));
var state_26513__$1 = (function (){var statearr_26516 = state_26513;
(statearr_26516[(9)] = inst_26503);

(statearr_26516[(10)] = inst_26507);

return statearr_26516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(3),inst_26508);
} else {
if((state_val_26514 === (1))){
var inst_26496 = (state_26513[(7)]);
var inst_26496__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26497 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26498 = ["0.0"];
var inst_26499 = cljs.core.PersistentHashMap.fromArrays(inst_26497,inst_26498);
var inst_26500 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26496__$1,inst_26499);
var inst_26501 = cljs.core.async.timeout.call(null,(300));
var state_26513__$1 = (function (){var statearr_26517 = state_26513;
(statearr_26517[(7)] = inst_26496__$1);

(statearr_26517[(11)] = inst_26500);

return statearr_26517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(2),inst_26501);
} else {
return null;
}
}
}
});})(c__21529__auto__))
;
return ((function (switch__21467__auto__,c__21529__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21468__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21468__auto____0 = (function (){
var statearr_26521 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26521[(0)] = figwheel$client$heads_up$clear_$_state_machine__21468__auto__);

(statearr_26521[(1)] = (1));

return statearr_26521;
});
var figwheel$client$heads_up$clear_$_state_machine__21468__auto____1 = (function (state_26513){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_26513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e26522){if((e26522 instanceof Object)){
var ex__21471__auto__ = e26522;
var statearr_26523_26525 = state_26513;
(statearr_26523_26525[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26526 = state_26513;
state_26513 = G__26526;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21468__auto__ = function(state_26513){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21468__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21468__auto____1.call(this,state_26513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21468__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21468__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto__))
})();
var state__21531__auto__ = (function (){var statearr_26524 = f__21530__auto__.call(null);
(statearr_26524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto__);

return statearr_26524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto__))
);

return c__21529__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto__){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto__){
return (function (state_26558){
var state_val_26559 = (state_26558[(1)]);
if((state_val_26559 === (4))){
var inst_26556 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26558__$1,inst_26556);
} else {
if((state_val_26559 === (3))){
var inst_26553 = (state_26558[(2)]);
var inst_26554 = figwheel.client.heads_up.clear.call(null);
var state_26558__$1 = (function (){var statearr_26560 = state_26558;
(statearr_26560[(7)] = inst_26553);

return statearr_26560;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26558__$1,(4),inst_26554);
} else {
if((state_val_26559 === (2))){
var inst_26550 = (state_26558[(2)]);
var inst_26551 = cljs.core.async.timeout.call(null,(400));
var state_26558__$1 = (function (){var statearr_26561 = state_26558;
(statearr_26561[(8)] = inst_26550);

return statearr_26561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26558__$1,(3),inst_26551);
} else {
if((state_val_26559 === (1))){
var inst_26548 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26558__$1 = state_26558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26558__$1,(2),inst_26548);
} else {
return null;
}
}
}
}
});})(c__21529__auto__))
;
return ((function (switch__21467__auto__,c__21529__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21468__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21468__auto____0 = (function (){
var statearr_26565 = [null,null,null,null,null,null,null,null,null];
(statearr_26565[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21468__auto__);

(statearr_26565[(1)] = (1));

return statearr_26565;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21468__auto____1 = (function (state_26558){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_26558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e26566){if((e26566 instanceof Object)){
var ex__21471__auto__ = e26566;
var statearr_26567_26569 = state_26558;
(statearr_26567_26569[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26570 = state_26558;
state_26558 = G__26570;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21468__auto__ = function(state_26558){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21468__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21468__auto____1.call(this,state_26558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21468__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21468__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto__))
})();
var state__21531__auto__ = (function (){var statearr_26568 = f__21530__auto__.call(null);
(statearr_26568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto__);

return statearr_26568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto__))
);

return c__21529__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1440697837812