(window.webpackJsonpreminder=window.webpackJsonpreminder||[]).push([[0],{28:function(e,t,n){e.exports=n(64)},34:function(e,t,n){e.exports=n(63)},39:function(e,t,n){},4:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i}));var r="ADD_REMINDER",a="DELETE_REMINDER",i="CLEAR_REMINDERS"},63:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(7),c=n.n(i),u=(n(39),n(23)),d=n(24),o=n(32),l=n(25),s=n(33),m=n(8),f=n(4),p=(n(45),function(e,t){return{type:f.a,text:e,dueDate:t}}),b=function(e){return{type:f.c,id:e}},E=function(){return{type:f.b}},v=n(2),R=n(27),h=n.n(R),D=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={text:"",dueDate:""},n}return Object(s.a)(t,e),Object(d.a)(t,[{key:"addReminder",value:function(){this.props.addReminder(this.state.text,this.state.dueDate)}},{key:"deleteReminder",value:function(e){this.props.deleteReminder(e)}},{key:"clearReminders",value:function(){this.props.clearReminders()}},{key:"renderReminders",value:function(){var e=this,t=this.props.reminders;return a.a.createElement("ul",{className:"list-group col-sm-8 mr-2"},t.map((function(t){return a.a.createElement("li",{className:"list-group-item",key:t.id},a.a.createElement("div",{className:"list-item"},a.a.createElement("div",null,t.text),a.a.createElement("div",null,h()(new Date(t.dueDate)).fromNow()),a.a.createElement("div",{className:"list-item delete-button",onClick:function(){return e.deleteReminder(t.id)}},"\u2715")))})))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"title"},"Reminder Pro"),a.a.createElement("div",{className:"form-inline"},a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{type:"text",className:"form-control mr-2",placeholder:"I have...",onChange:function(t){e.setState({text:t.target.value})}}),a.a.createElement("input",{type:"datetime-local",className:"form-control",onChange:function(t){e.setState({dueDate:t.target.value})}}),a.a.createElement("button",{onClick:function(){return e.addReminder()},className:"btn btn-success"},"Add Reminder"))),this.renderReminders(),a.a.createElement("div",{onClick:function(){return e.clearReminders()},className:"btn btn-danger"},"CLEAR ALL ITEMS"))}}]),t}(r.Component),k=Object(m.b)((function(e){return{reminders:e.reminder}}),(function(e){return Object(v.b)({addReminder:p,deleteReminder:b,clearReminders:E},e)}))(D),N=n(28),j=n.n(N)()();c.a.render(a.a.createElement(m.a,{store:j},a.a.createElement(k,null)),document.getElementById("root"))},64:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(31),i=n(4),c=n(6),u=function(e){return{text:e.text,dueDate:e.dueDate,id:Math.random()}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(c.read_cookie)("reminderData")||[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="";switch(t.type){case i.a:return n=[].concat(Object(a.a)(e),[u(t)]),Object(c.bake_cookie)("reminderData",n),n;case i.c:return n=e.filter((function(e){return e.id!==t.id})),Object(c.bake_cookie)("reminderData",n),n;case i.b:return n=[],Object(c.delete_cookie)("reminderData"),n;default:return e}},o=Object(r.c)({reminder:d}),l=n(29),s=n(30);t.default=function(e){return Object(r.d)(o,e,Object(r.a)(l.a,s.a))}}},[[34,1,2]]]);
//# sourceMappingURL=main.e5ab8f4e.chunk.js.map