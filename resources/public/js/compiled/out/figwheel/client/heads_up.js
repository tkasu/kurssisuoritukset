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
var seq__26348_26356 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26349_26357 = null;
var count__26350_26358 = (0);
var i__26351_26359 = (0);
while(true){
if((i__26351_26359 < count__26350_26358)){
var k_26360 = cljs.core._nth.call(null,chunk__26349_26357,i__26351_26359);
e.setAttribute(cljs.core.name.call(null,k_26360),cljs.core.get.call(null,attrs,k_26360));

var G__26361 = seq__26348_26356;
var G__26362 = chunk__26349_26357;
var G__26363 = count__26350_26358;
var G__26364 = (i__26351_26359 + (1));
seq__26348_26356 = G__26361;
chunk__26349_26357 = G__26362;
count__26350_26358 = G__26363;
i__26351_26359 = G__26364;
continue;
} else {
var temp__4126__auto___26365 = cljs.core.seq.call(null,seq__26348_26356);
if(temp__4126__auto___26365){
var seq__26348_26366__$1 = temp__4126__auto___26365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26348_26366__$1)){
var c__18906__auto___26367 = cljs.core.chunk_first.call(null,seq__26348_26366__$1);
var G__26368 = cljs.core.chunk_rest.call(null,seq__26348_26366__$1);
var G__26369 = c__18906__auto___26367;
var G__26370 = cljs.core.count.call(null,c__18906__auto___26367);
var G__26371 = (0);
seq__26348_26356 = G__26368;
chunk__26349_26357 = G__26369;
count__26350_26358 = G__26370;
i__26351_26359 = G__26371;
continue;
} else {
var k_26372 = cljs.core.first.call(null,seq__26348_26366__$1);
e.setAttribute(cljs.core.name.call(null,k_26372),cljs.core.get.call(null,attrs,k_26372));

var G__26373 = cljs.core.next.call(null,seq__26348_26366__$1);
var G__26374 = null;
var G__26375 = (0);
var G__26376 = (0);
seq__26348_26356 = G__26373;
chunk__26349_26357 = G__26374;
count__26350_26358 = G__26375;
i__26351_26359 = G__26376;
continue;
}
} else {
}
}
break;
}

var seq__26352_26377 = cljs.core.seq.call(null,children);
var chunk__26353_26378 = null;
var count__26354_26379 = (0);
var i__26355_26380 = (0);
while(true){
if((i__26355_26380 < count__26354_26379)){
var ch_26381 = cljs.core._nth.call(null,chunk__26353_26378,i__26355_26380);
e.appendChild(ch_26381);

var G__26382 = seq__26352_26377;
var G__26383 = chunk__26353_26378;
var G__26384 = count__26354_26379;
var G__26385 = (i__26355_26380 + (1));
seq__26352_26377 = G__26382;
chunk__26353_26378 = G__26383;
count__26354_26379 = G__26384;
i__26355_26380 = G__26385;
continue;
} else {
var temp__4126__auto___26386 = cljs.core.seq.call(null,seq__26352_26377);
if(temp__4126__auto___26386){
var seq__26352_26387__$1 = temp__4126__auto___26386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26352_26387__$1)){
var c__18906__auto___26388 = cljs.core.chunk_first.call(null,seq__26352_26387__$1);
var G__26389 = cljs.core.chunk_rest.call(null,seq__26352_26387__$1);
var G__26390 = c__18906__auto___26388;
var G__26391 = cljs.core.count.call(null,c__18906__auto___26388);
var G__26392 = (0);
seq__26352_26377 = G__26389;
chunk__26353_26378 = G__26390;
count__26354_26379 = G__26391;
i__26355_26380 = G__26392;
continue;
} else {
var ch_26393 = cljs.core.first.call(null,seq__26352_26387__$1);
e.appendChild(ch_26393);

var G__26394 = cljs.core.next.call(null,seq__26352_26387__$1);
var G__26395 = null;
var G__26396 = (0);
var G__26397 = (0);
seq__26352_26377 = G__26394;
chunk__26353_26378 = G__26395;
count__26354_26379 = G__26396;
i__26355_26380 = G__26397;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26345){
var G__26346 = cljs.core.first.call(null,seq26345);
var seq26345__$1 = cljs.core.next.call(null,seq26345);
var G__26347 = cljs.core.first.call(null,seq26345__$1);
var seq26345__$2 = cljs.core.next.call(null,seq26345__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26346,G__26347,seq26345__$2);
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
var el_26398 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26398.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26398.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_26398.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26398);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26399,st_map){
var map__26403 = p__26399;
var map__26403__$1 = ((cljs.core.seq_QMARK_.call(null,map__26403))?cljs.core.apply.call(null,cljs.core.hash_map,map__26403):map__26403);
var container_el = cljs.core.get.call(null,map__26403__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26403,map__26403__$1,container_el){
return (function (p__26404){
var vec__26405 = p__26404;
var k = cljs.core.nth.call(null,vec__26405,(0),null);
var v = cljs.core.nth.call(null,vec__26405,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26403,map__26403__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26406,dom_str){
var map__26408 = p__26406;
var map__26408__$1 = ((cljs.core.seq_QMARK_.call(null,map__26408))?cljs.core.apply.call(null,cljs.core.hash_map,map__26408):map__26408);
var c = map__26408__$1;
var content_area_el = cljs.core.get.call(null,map__26408__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26409){
var map__26411 = p__26409;
var map__26411__$1 = ((cljs.core.seq_QMARK_.call(null,map__26411))?cljs.core.apply.call(null,cljs.core.hash_map,map__26411):map__26411);
var content_area_el = cljs.core.get.call(null,map__26411__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto__){
return (function (state_26453){
var state_val_26454 = (state_26453[(1)]);
if((state_val_26454 === (2))){
var inst_26438 = (state_26453[(7)]);
var inst_26447 = (state_26453[(2)]);
var inst_26448 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26449 = ["auto"];
var inst_26450 = cljs.core.PersistentHashMap.fromArrays(inst_26448,inst_26449);
var inst_26451 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26438,inst_26450);
var state_26453__$1 = (function (){var statearr_26455 = state_26453;
(statearr_26455[(8)] = inst_26447);

return statearr_26455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26453__$1,inst_26451);
} else {
if((state_val_26454 === (1))){
var inst_26438 = (state_26453[(7)]);
var inst_26438__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26439 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26440 = ["10px","10px","100%","68px","1.0"];
var inst_26441 = cljs.core.PersistentHashMap.fromArrays(inst_26439,inst_26440);
var inst_26442 = cljs.core.merge.call(null,inst_26441,style);
var inst_26443 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26438__$1,inst_26442);
var inst_26444 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26438__$1,msg);
var inst_26445 = cljs.core.async.timeout.call(null,(300));
var state_26453__$1 = (function (){var statearr_26456 = state_26453;
(statearr_26456[(7)] = inst_26438__$1);

(statearr_26456[(9)] = inst_26444);

(statearr_26456[(10)] = inst_26443);

return statearr_26456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26453__$1,(2),inst_26445);
} else {
return null;
}
}
});})(c__21535__auto__))
;
return ((function (switch__21473__auto__,c__21535__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21474__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21474__auto____0 = (function (){
var statearr_26460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26460[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21474__auto__);

(statearr_26460[(1)] = (1));

return statearr_26460;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21474__auto____1 = (function (state_26453){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_26453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e26461){if((e26461 instanceof Object)){
var ex__21477__auto__ = e26461;
var statearr_26462_26464 = state_26453;
(statearr_26462_26464[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26465 = state_26453;
state_26453 = G__26465;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21474__auto__ = function(state_26453){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21474__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21474__auto____1.call(this,state_26453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21474__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21474__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto__))
})();
var state__21537__auto__ = (function (){var statearr_26463 = f__21536__auto__.call(null);
(statearr_26463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto__);

return statearr_26463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__))
);

return c__21535__auto__;
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
var vec__26467 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__26467,(0),null);
var ln = cljs.core.nth.call(null,vec__26467,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26470 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26470,(0),null);
var file_line = cljs.core.nth.call(null,vec__26470,(1),null);
var file_column = cljs.core.nth.call(null,vec__26470,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26470,file_name,file_line,file_column){
return (function (p1__26468_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__26468_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__26470,file_name,file_line,file_column))
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
var map__26472 = figwheel.client.heads_up.ensure_container.call(null);
var map__26472__$1 = ((cljs.core.seq_QMARK_.call(null,map__26472))?cljs.core.apply.call(null,cljs.core.hash_map,map__26472):map__26472);
var content_area_el = cljs.core.get.call(null,map__26472__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto__){
return (function (state_26519){
var state_val_26520 = (state_26519[(1)]);
if((state_val_26520 === (3))){
var inst_26502 = (state_26519[(7)]);
var inst_26516 = (state_26519[(2)]);
var inst_26517 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26502,"");
var state_26519__$1 = (function (){var statearr_26521 = state_26519;
(statearr_26521[(8)] = inst_26516);

return statearr_26521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26519__$1,inst_26517);
} else {
if((state_val_26520 === (2))){
var inst_26502 = (state_26519[(7)]);
var inst_26509 = (state_26519[(2)]);
var inst_26510 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26511 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26512 = cljs.core.PersistentHashMap.fromArrays(inst_26510,inst_26511);
var inst_26513 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26502,inst_26512);
var inst_26514 = cljs.core.async.timeout.call(null,(200));
var state_26519__$1 = (function (){var statearr_26522 = state_26519;
(statearr_26522[(9)] = inst_26513);

(statearr_26522[(10)] = inst_26509);

return statearr_26522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26519__$1,(3),inst_26514);
} else {
if((state_val_26520 === (1))){
var inst_26502 = (state_26519[(7)]);
var inst_26502__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26503 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26504 = ["0.0"];
var inst_26505 = cljs.core.PersistentHashMap.fromArrays(inst_26503,inst_26504);
var inst_26506 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26502__$1,inst_26505);
var inst_26507 = cljs.core.async.timeout.call(null,(300));
var state_26519__$1 = (function (){var statearr_26523 = state_26519;
(statearr_26523[(11)] = inst_26506);

(statearr_26523[(7)] = inst_26502__$1);

return statearr_26523;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26519__$1,(2),inst_26507);
} else {
return null;
}
}
}
});})(c__21535__auto__))
;
return ((function (switch__21473__auto__,c__21535__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21474__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21474__auto____0 = (function (){
var statearr_26527 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26527[(0)] = figwheel$client$heads_up$clear_$_state_machine__21474__auto__);

(statearr_26527[(1)] = (1));

return statearr_26527;
});
var figwheel$client$heads_up$clear_$_state_machine__21474__auto____1 = (function (state_26519){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_26519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e26528){if((e26528 instanceof Object)){
var ex__21477__auto__ = e26528;
var statearr_26529_26531 = state_26519;
(statearr_26529_26531[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26532 = state_26519;
state_26519 = G__26532;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21474__auto__ = function(state_26519){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21474__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21474__auto____1.call(this,state_26519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21474__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21474__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto__))
})();
var state__21537__auto__ = (function (){var statearr_26530 = f__21536__auto__.call(null);
(statearr_26530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto__);

return statearr_26530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__))
);

return c__21535__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto__){
return (function (state_26564){
var state_val_26565 = (state_26564[(1)]);
if((state_val_26565 === (4))){
var inst_26562 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26564__$1,inst_26562);
} else {
if((state_val_26565 === (3))){
var inst_26559 = (state_26564[(2)]);
var inst_26560 = figwheel.client.heads_up.clear.call(null);
var state_26564__$1 = (function (){var statearr_26566 = state_26564;
(statearr_26566[(7)] = inst_26559);

return statearr_26566;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26564__$1,(4),inst_26560);
} else {
if((state_val_26565 === (2))){
var inst_26556 = (state_26564[(2)]);
var inst_26557 = cljs.core.async.timeout.call(null,(400));
var state_26564__$1 = (function (){var statearr_26567 = state_26564;
(statearr_26567[(8)] = inst_26556);

return statearr_26567;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26564__$1,(3),inst_26557);
} else {
if((state_val_26565 === (1))){
var inst_26554 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26564__$1 = state_26564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26564__$1,(2),inst_26554);
} else {
return null;
}
}
}
}
});})(c__21535__auto__))
;
return ((function (switch__21473__auto__,c__21535__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21474__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21474__auto____0 = (function (){
var statearr_26571 = [null,null,null,null,null,null,null,null,null];
(statearr_26571[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21474__auto__);

(statearr_26571[(1)] = (1));

return statearr_26571;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21474__auto____1 = (function (state_26564){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_26564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e26572){if((e26572 instanceof Object)){
var ex__21477__auto__ = e26572;
var statearr_26573_26575 = state_26564;
(statearr_26573_26575[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26576 = state_26564;
state_26564 = G__26576;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21474__auto__ = function(state_26564){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21474__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21474__auto____1.call(this,state_26564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21474__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21474__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto__))
})();
var state__21537__auto__ = (function (){var statearr_26574 = f__21536__auto__.call(null);
(statearr_26574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto__);

return statearr_26574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__))
);

return c__21535__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1440626241456