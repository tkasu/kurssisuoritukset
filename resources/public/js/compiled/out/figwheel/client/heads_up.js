// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.clojure_symbol_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17582__auto__ = [];
var len__17575__auto___25943 = arguments.length;
var i__17576__auto___25944 = (0);
while(true){
if((i__17576__auto___25944 < len__17575__auto___25943)){
args__17582__auto__.push((arguments[i__17576__auto___25944]));

var G__25945 = (i__17576__auto___25944 + (1));
i__17576__auto___25944 = G__25945;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((2) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17583__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25935_25946 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25936_25947 = null;
var count__25937_25948 = (0);
var i__25938_25949 = (0);
while(true){
if((i__25938_25949 < count__25937_25948)){
var k_25950 = cljs.core._nth.call(null,chunk__25936_25947,i__25938_25949);
e.setAttribute(cljs.core.name.call(null,k_25950),cljs.core.get.call(null,attrs,k_25950));

var G__25951 = seq__25935_25946;
var G__25952 = chunk__25936_25947;
var G__25953 = count__25937_25948;
var G__25954 = (i__25938_25949 + (1));
seq__25935_25946 = G__25951;
chunk__25936_25947 = G__25952;
count__25937_25948 = G__25953;
i__25938_25949 = G__25954;
continue;
} else {
var temp__4425__auto___25955 = cljs.core.seq.call(null,seq__25935_25946);
if(temp__4425__auto___25955){
var seq__25935_25956__$1 = temp__4425__auto___25955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25935_25956__$1)){
var c__17320__auto___25957 = cljs.core.chunk_first.call(null,seq__25935_25956__$1);
var G__25958 = cljs.core.chunk_rest.call(null,seq__25935_25956__$1);
var G__25959 = c__17320__auto___25957;
var G__25960 = cljs.core.count.call(null,c__17320__auto___25957);
var G__25961 = (0);
seq__25935_25946 = G__25958;
chunk__25936_25947 = G__25959;
count__25937_25948 = G__25960;
i__25938_25949 = G__25961;
continue;
} else {
var k_25962 = cljs.core.first.call(null,seq__25935_25956__$1);
e.setAttribute(cljs.core.name.call(null,k_25962),cljs.core.get.call(null,attrs,k_25962));

var G__25963 = cljs.core.next.call(null,seq__25935_25956__$1);
var G__25964 = null;
var G__25965 = (0);
var G__25966 = (0);
seq__25935_25946 = G__25963;
chunk__25936_25947 = G__25964;
count__25937_25948 = G__25965;
i__25938_25949 = G__25966;
continue;
}
} else {
}
}
break;
}

var seq__25939_25967 = cljs.core.seq.call(null,children);
var chunk__25940_25968 = null;
var count__25941_25969 = (0);
var i__25942_25970 = (0);
while(true){
if((i__25942_25970 < count__25941_25969)){
var ch_25971 = cljs.core._nth.call(null,chunk__25940_25968,i__25942_25970);
e.appendChild(ch_25971);

var G__25972 = seq__25939_25967;
var G__25973 = chunk__25940_25968;
var G__25974 = count__25941_25969;
var G__25975 = (i__25942_25970 + (1));
seq__25939_25967 = G__25972;
chunk__25940_25968 = G__25973;
count__25941_25969 = G__25974;
i__25942_25970 = G__25975;
continue;
} else {
var temp__4425__auto___25976 = cljs.core.seq.call(null,seq__25939_25967);
if(temp__4425__auto___25976){
var seq__25939_25977__$1 = temp__4425__auto___25976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25939_25977__$1)){
var c__17320__auto___25978 = cljs.core.chunk_first.call(null,seq__25939_25977__$1);
var G__25979 = cljs.core.chunk_rest.call(null,seq__25939_25977__$1);
var G__25980 = c__17320__auto___25978;
var G__25981 = cljs.core.count.call(null,c__17320__auto___25978);
var G__25982 = (0);
seq__25939_25967 = G__25979;
chunk__25940_25968 = G__25980;
count__25941_25969 = G__25981;
i__25942_25970 = G__25982;
continue;
} else {
var ch_25983 = cljs.core.first.call(null,seq__25939_25977__$1);
e.appendChild(ch_25983);

var G__25984 = cljs.core.next.call(null,seq__25939_25977__$1);
var G__25985 = null;
var G__25986 = (0);
var G__25987 = (0);
seq__25939_25967 = G__25984;
chunk__25940_25968 = G__25985;
count__25941_25969 = G__25986;
i__25942_25970 = G__25987;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25932){
var G__25933 = cljs.core.first.call(null,seq25932);
var seq25932__$1 = cljs.core.next.call(null,seq25932);
var G__25934 = cljs.core.first.call(null,seq25932__$1);
var seq25932__$2 = cljs.core.next.call(null,seq25932__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25933,G__25934,seq25932__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17430__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17431__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17432__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17433__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17434__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17430__auto__,prefer_table__17431__auto__,method_cache__17432__auto__,cached_hierarchy__17433__auto__,hierarchy__17434__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17430__auto__,prefer_table__17431__auto__,method_cache__17432__auto__,cached_hierarchy__17433__auto__,hierarchy__17434__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17434__auto__,method_table__17430__auto__,prefer_table__17431__auto__,method_cache__17432__auto__,cached_hierarchy__17433__auto__));
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
var el_25988 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25988.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25988.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_25988.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25988);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25989,st_map){
var map__25994 = p__25989;
var map__25994__$1 = ((((!((map__25994 == null)))?((((map__25994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25994):map__25994);
var container_el = cljs.core.get.call(null,map__25994__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25994,map__25994__$1,container_el){
return (function (p__25996){
var vec__25997 = p__25996;
var k = cljs.core.nth.call(null,vec__25997,(0),null);
var v = cljs.core.nth.call(null,vec__25997,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25994,map__25994__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25998,dom_str){
var map__26001 = p__25998;
var map__26001__$1 = ((((!((map__26001 == null)))?((((map__26001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26001):map__26001);
var c = map__26001__$1;
var content_area_el = cljs.core.get.call(null,map__26001__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26003){
var map__26006 = p__26003;
var map__26006__$1 = ((((!((map__26006 == null)))?((((map__26006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26006):map__26006);
var content_area_el = cljs.core.get.call(null,map__26006__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto__){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto__){
return (function (state_26049){
var state_val_26050 = (state_26049[(1)]);
if((state_val_26050 === (1))){
var inst_26034 = (state_26049[(7)]);
var inst_26034__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26035 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26036 = ["10px","10px","100%","68px","1.0"];
var inst_26037 = cljs.core.PersistentHashMap.fromArrays(inst_26035,inst_26036);
var inst_26038 = cljs.core.merge.call(null,inst_26037,style);
var inst_26039 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26034__$1,inst_26038);
var inst_26040 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26034__$1,msg);
var inst_26041 = cljs.core.async.timeout.call(null,(300));
var state_26049__$1 = (function (){var statearr_26051 = state_26049;
(statearr_26051[(8)] = inst_26040);

(statearr_26051[(9)] = inst_26039);

(statearr_26051[(7)] = inst_26034__$1);

return statearr_26051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26049__$1,(2),inst_26041);
} else {
if((state_val_26050 === (2))){
var inst_26034 = (state_26049[(7)]);
var inst_26043 = (state_26049[(2)]);
var inst_26044 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26045 = ["auto"];
var inst_26046 = cljs.core.PersistentHashMap.fromArrays(inst_26044,inst_26045);
var inst_26047 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26034,inst_26046);
var state_26049__$1 = (function (){var statearr_26052 = state_26049;
(statearr_26052[(10)] = inst_26043);

return statearr_26052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26049__$1,inst_26047);
} else {
return null;
}
}
});})(c__20309__auto__))
;
return ((function (switch__20244__auto__,c__20309__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20245__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20245__auto____0 = (function (){
var statearr_26056 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26056[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20245__auto__);

(statearr_26056[(1)] = (1));

return statearr_26056;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20245__auto____1 = (function (state_26049){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_26049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e26057){if((e26057 instanceof Object)){
var ex__20248__auto__ = e26057;
var statearr_26058_26060 = state_26049;
(statearr_26058_26060[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26061 = state_26049;
state_26049 = G__26061;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20245__auto__ = function(state_26049){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20245__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20245__auto____1.call(this,state_26049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20245__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20245__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto__))
})();
var state__20311__auto__ = (function (){var statearr_26059 = f__20310__auto__.call(null);
(statearr_26059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto__);

return statearr_26059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto__))
);

return c__20309__auto__;
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
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__26063 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__26063,(0),null);
var ln = cljs.core.nth.call(null,vec__26063,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26066 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26066,(0),null);
var file_line = cljs.core.nth.call(null,vec__26066,(1),null);
var file_column = cljs.core.nth.call(null,vec__26066,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26066,file_name,file_line,file_column){
return (function (p1__26064_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__26064_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__26066,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16517__auto__ = file_line;
if(cljs.core.truth_(or__16517__auto__)){
return or__16517__auto__;
} else {
var and__16505__auto__ = cause;
if(cljs.core.truth_(and__16505__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16505__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26069 = figwheel.client.heads_up.ensure_container.call(null);
var map__26069__$1 = ((((!((map__26069 == null)))?((((map__26069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26069):map__26069);
var content_area_el = cljs.core.get.call(null,map__26069__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto__){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto__){
return (function (state_26117){
var state_val_26118 = (state_26117[(1)]);
if((state_val_26118 === (1))){
var inst_26100 = (state_26117[(7)]);
var inst_26100__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26101 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26102 = ["0.0"];
var inst_26103 = cljs.core.PersistentHashMap.fromArrays(inst_26101,inst_26102);
var inst_26104 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26100__$1,inst_26103);
var inst_26105 = cljs.core.async.timeout.call(null,(300));
var state_26117__$1 = (function (){var statearr_26119 = state_26117;
(statearr_26119[(8)] = inst_26104);

(statearr_26119[(7)] = inst_26100__$1);

return statearr_26119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26117__$1,(2),inst_26105);
} else {
if((state_val_26118 === (2))){
var inst_26100 = (state_26117[(7)]);
var inst_26107 = (state_26117[(2)]);
var inst_26108 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26109 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26110 = cljs.core.PersistentHashMap.fromArrays(inst_26108,inst_26109);
var inst_26111 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26100,inst_26110);
var inst_26112 = cljs.core.async.timeout.call(null,(200));
var state_26117__$1 = (function (){var statearr_26120 = state_26117;
(statearr_26120[(9)] = inst_26111);

(statearr_26120[(10)] = inst_26107);

return statearr_26120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26117__$1,(3),inst_26112);
} else {
if((state_val_26118 === (3))){
var inst_26100 = (state_26117[(7)]);
var inst_26114 = (state_26117[(2)]);
var inst_26115 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26100,"");
var state_26117__$1 = (function (){var statearr_26121 = state_26117;
(statearr_26121[(11)] = inst_26114);

return statearr_26121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26117__$1,inst_26115);
} else {
return null;
}
}
}
});})(c__20309__auto__))
;
return ((function (switch__20244__auto__,c__20309__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20245__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20245__auto____0 = (function (){
var statearr_26125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26125[(0)] = figwheel$client$heads_up$clear_$_state_machine__20245__auto__);

(statearr_26125[(1)] = (1));

return statearr_26125;
});
var figwheel$client$heads_up$clear_$_state_machine__20245__auto____1 = (function (state_26117){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_26117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e26126){if((e26126 instanceof Object)){
var ex__20248__auto__ = e26126;
var statearr_26127_26129 = state_26117;
(statearr_26127_26129[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26130 = state_26117;
state_26117 = G__26130;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20245__auto__ = function(state_26117){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20245__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20245__auto____1.call(this,state_26117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20245__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20245__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto__))
})();
var state__20311__auto__ = (function (){var statearr_26128 = f__20310__auto__.call(null);
(statearr_26128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto__);

return statearr_26128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto__))
);

return c__20309__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto__){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto__){
return (function (state_26162){
var state_val_26163 = (state_26162[(1)]);
if((state_val_26163 === (1))){
var inst_26152 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26162__$1,(2),inst_26152);
} else {
if((state_val_26163 === (2))){
var inst_26154 = (state_26162[(2)]);
var inst_26155 = cljs.core.async.timeout.call(null,(400));
var state_26162__$1 = (function (){var statearr_26164 = state_26162;
(statearr_26164[(7)] = inst_26154);

return statearr_26164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26162__$1,(3),inst_26155);
} else {
if((state_val_26163 === (3))){
var inst_26157 = (state_26162[(2)]);
var inst_26158 = figwheel.client.heads_up.clear.call(null);
var state_26162__$1 = (function (){var statearr_26165 = state_26162;
(statearr_26165[(8)] = inst_26157);

return statearr_26165;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26162__$1,(4),inst_26158);
} else {
if((state_val_26163 === (4))){
var inst_26160 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26162__$1,inst_26160);
} else {
return null;
}
}
}
}
});})(c__20309__auto__))
;
return ((function (switch__20244__auto__,c__20309__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20245__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20245__auto____0 = (function (){
var statearr_26169 = [null,null,null,null,null,null,null,null,null];
(statearr_26169[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20245__auto__);

(statearr_26169[(1)] = (1));

return statearr_26169;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20245__auto____1 = (function (state_26162){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_26162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e26170){if((e26170 instanceof Object)){
var ex__20248__auto__ = e26170;
var statearr_26171_26173 = state_26162;
(statearr_26171_26173[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26174 = state_26162;
state_26162 = G__26174;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20245__auto__ = function(state_26162){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20245__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20245__auto____1.call(this,state_26162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20245__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20245__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto__))
})();
var state__20311__auto__ = (function (){var statearr_26172 = f__20310__auto__.call(null);
(statearr_26172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto__);

return statearr_26172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto__))
);

return c__20309__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1441561823168