(function(e){function t(t){for(var s,r,o=t[0],u=t[1],a=t[2],b=0,d=[];b<o.length;b++)r=o[b],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],s=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(s=!1)}s&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},i={app:0},c=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"17d9":function(e,t,n){},4625:function(e,t,n){"use strict";n("55c2")},4704:function(e,t,n){"use strict";n("8e45")},"54ac":function(e,t,n){},"55c2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23"),i=Object(s["f"])("header",null,[Object(s["f"])("div",{class:"title"},[Object(s["g"])("stack"),Object(s["f"])("b",null,"overflow")]),Object(s["f"])("div",{class:"question"},"Can you guess the accepted answer?")],-1),c={key:1,class:"loading"},r=Object(s["f"])("h1",null,"Loading Questions...",-1),o=[r];function u(e,t,n,r,u,a){var l=Object(s["m"])("question-list");return Object(s["i"])(),Object(s["e"])(s["a"],null,[i,u.result.length>0?(Object(s["i"])(),Object(s["c"])(l,{key:0,QuestionArray:u.result},null,8,["QuestionArray"])):(Object(s["i"])(),Object(s["e"])("div",c,o))],64)}n("d3b7");Object(s["k"])("data-v-1fdbbe9b");var a={class:"questionList"};function l(e,t,n,i,c,r){var o=Object(s["m"])("question-list-item"),u=Object(s["m"])("question-details");return Object(s["i"])(),Object(s["e"])("div",a,[(Object(s["i"])(!0),Object(s["e"])(s["a"],null,Object(s["l"])(n.QuestionArray,(function(e){return Object(s["o"])((Object(s["i"])(),Object(s["c"])(o,{Question:e,key:e.question_id,onShowQDetails:r.showQDetails},null,8,["Question","onShowQDetails"])),[[s["n"],!c.showQuestionDetails]])})),128)),c.showQuestionDetails?(Object(s["i"])(),Object(s["c"])(u,{Question:c.selectedQuestion,key:c.selectedQuestion.question_id,onHideQDetails:r.hideQDetails},null,8,["Question","onHideQDetails"])):Object(s["d"])("",!0)])}Object(s["j"])(),Object(s["k"])("data-v-4563a1c8");var b={class:"questionListItem"},d=Object(s["g"])("Q: "),f=["innerHTML"],h=Object(s["g"])();function j(e,t,n,i,c,r){return Object(s["i"])(),Object(s["e"])("div",b,[Object(s["f"])("h2",null,[d,Object(s["f"])("span",{innerHTML:n.Question.title},null,8,f),h,Object(s["f"])("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("showQDetails",n.Question)}),type:"button"},"View")])])}Object(s["j"])();var O={name:"QuestionListItem",props:{Question:{}},emits:["showQDetails"]};n("7038");O.render=j,O.__scopeId="data-v-4563a1c8";var p=O;Object(s["k"])("data-v-3326e58a");var w={class:"questionListItem"},v=Object(s["g"])(" Q: "),Q=["innerHTML"],m=["innerHTML"],A={class:"user-info"},y=["src"],k=["innerHTML"],g=Object(s["f"])("h3",null,"Answers - Which one was accepted?",-1),L={key:0},_={key:0},D={key:1};function M(e,t,n,i,c,r){var o=Object(s["m"])("answer-list-item");return Object(s["i"])(),Object(s["e"])("div",w,[Object(s["f"])("h2",null,[Object(s["f"])("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("hideQDetails")}),title:"Back",type:"button"},"<"),v,Object(s["f"])("span",{innerHTML:n.Question.title},null,8,Q)]),Object(s["f"])("p",{class:"QuestionBody",innerHTML:n.Question.body},null,8,m),Object(s["f"])("p",A,[Object(s["f"])("img",{src:n.Question.owner.profile_image},null,8,y),Object(s["f"])("span",{class:"user-name",innerHTML:n.Question.owner.display_name},null,8,k)]),Object(s["o"])(Object(s["f"])("button",{onClick:t[1]||(t[1]=function(e){return c.showAnswers=!0})},"Try to Guess",512),[[s["n"],!c.showAnswers&&!c.showResults]]),Object(s["o"])(Object(s["f"])("div",null,[g,(Object(s["i"])(!0),Object(s["e"])(s["a"],null,Object(s["l"])(n.Question.answers,(function(e){return Object(s["i"])(),Object(s["c"])(o,{Answer:e,key:e.answer_id,onIsAcceptedAnswer:r.isAcceptedAnswer,showChoice:""},null,8,["Answer","onIsAcceptedAnswer"])})),128))],512),[[s["n"],c.showAnswers]]),c.showResults?(Object(s["i"])(),Object(s["e"])("div",L,[c.correctChoice?(Object(s["i"])(),Object(s["e"])("h1",_,"Correct!")):(Object(s["i"])(),Object(s["e"])("h1",D,"Incorrect - the accepted answer is:")),Object(s["h"])(o,{Answer:c.acceptedAnswer},null,8,["Answer"])])):Object(s["d"])("",!0)])}Object(s["j"])();n("4e82");Object(s["k"])("data-v-6797d1d2");var T={class:"answerListItem"},H={class:"AnswerBody"},I=["innerHTML"],C=["src"],q=["innerHTML"],x={key:0};function S(e,t,n,i,c,r){return Object(s["i"])(),Object(s["e"])("div",T,[Object(s["f"])("p",H,[Object(s["f"])("span",{innerHTML:n.Answer.body},null,8,I)]),Object(s["f"])("p",null,[Object(s["f"])("img",{src:n.Answer.owner.profile_image},null,8,C),Object(s["f"])("span",{class:"user-name",innerHTML:n.Answer.owner.display_name},null,8,q)]),n.showChoice?(Object(s["i"])(),Object(s["e"])("p",x,[Object(s["f"])("button",{type:"button",onClick:t[0]||(t[0]=function(t){return e.$emit("isAcceptedAnswer",n.Answer)})},"I choose this one")])):Object(s["d"])("",!0)])}Object(s["j"])();var P={name:"AnswerListItem",props:{Answer:{},showChoice:Boolean},emits:["isAcceptedAnswer"]};n("4704");P.render=S,P.__scopeId="data-v-6797d1d2";var B=P,R={components:{AnswerListItem:B},name:"QuestionDetails",props:{Question:Object},emits:["hideQDetails"],data:function(){return{showAnswers:!1,acceptedAnswer:{},showResults:!1,correctChoice:!1}},methods:{shuffleAnswerArray:function(e){e.sort((function(){return Math.random()-.5}))},isAcceptedAnswer:function(e){e.answer_id===this.acceptedAnswer.answer_id?this.correctChoice=!0:this.correctChoice=!1,this.showResults=!0,this.showAnswers=!1}},created:function(){this.shuffleAnswerArray(this.Question.answers);for(var e=0;e<this.Question.answers.length;e++)if(this.Question.answers[e].is_accepted){this.acceptedAnswer=this.Question.answers[e];break}}};n("d44b");R.render=M,R.__scopeId="data-v-3326e58a";var $=R,J={components:{QuestionListItem:p,QuestionDetails:$},name:"QuestionList",props:{QuestionArray:[Object]},created:function(){this.selectedQuestion=this.QuestionArray[0]},data:function(){return{selectedQuestion:null,showQuestionDetails:!1}},methods:{showQDetails:function(e){this.selectedQuestion=e,this.showQuestionDetails=!0},hideQDetails:function(){this.showQuestionDetails=!1}}};n("b7a9");J.render=l,J.__scopeId="data-v-1fdbbe9b";var G=J,U={name:"App",components:{QuestionList:G},mounted:function(){var e=this;this.$nextTick((function(){e.fetchQuestions()}))},data:function(){return{result:[],responseAvailable:!1}},methods:{fetchQuestions:function(){var e=this;this.responseAvailable=!1,fetch("https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=creation&accepted=True&answers=2&site=stackoverflow&filter=!*MZqiH2nLJUkb))*").then((function(e){if(e.ok)return e.json();alert("Server returned "+e.status+" : "+e.statusText)})).then((function(t){e.result=t.items,e.responseAvailable=!0})).catch((function(e){console.log(e)}))}}};n("4625");U.render=u;var V=U;Object(s["b"])(V).mount("#app")},"5d76":function(e,t,n){},7038:function(e,t,n){"use strict";n("54ac")},"8e45":function(e,t,n){},b7a9:function(e,t,n){"use strict";n("5d76")},d44b:function(e,t,n){"use strict";n("17d9")}});
//# sourceMappingURL=app.3ffcd240.js.map