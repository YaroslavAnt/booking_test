(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{224:function(e,t,n){e.exports=n(398)},233:function(e,t,n){},234:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){},382:function(e,t,n){},383:function(e,t,n){},384:function(e,t,n){},389:function(e,t,n){},390:function(e,t,n){},392:function(e,t,n){},393:function(e,t,n){},394:function(e,t,n){},395:function(e,t,n){},396:function(e,t,n){},397:function(e,t,n){},398:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),c=n.n(o),l=n(23),i=n(26),s=n(40),u=n(148),m=(n(233),n(39)),d=(n(234),n(76),n(17)),h=n(18),p=n(20),f=n(19),g=n(21),b=n(37),E=n(2),v=n(35),y=(n(235),n(150)),O=n.n(y),S=(n(236),n(33)),k=n.n(S),C="http://ec2-35-175-143-145.compute-1.amazonaws.com:4000",j=function(e,t){return{type:"SIGNUP_SUCCESS",email:t,userId:e}},w=function(e){return{type:"SIGNIN_SUCCESS",token:e}},I=function(e){return{type:"AUTH_FAIL",err:e}},L=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.handleClose=function(){n.setState({open:!1})},n.handleOpen=function(){n.setState({open:!0})},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("token"),t=localStorage.getItem("email"),n=this.props.classes,a=r.a.createElement("div",null,r.a.createElement(l.b,{to:"/sign-in"},r.a.createElement(E.b,{variant:"contained",color:"secondary",className:n.margin},"Sign In")),r.a.createElement(l.b,{to:"/sign-up"},r.a.createElement(E.b,{variant:"contained",color:"secondary",className:n.margin},"Sign Up")));return e&&(a=r.a.createElement("div",null,r.a.createElement("div",{className:"controll"},r.a.createElement(E.b,{onClick:this.handleOpen},e&&r.a.createElement(E.j,{color:"secondary"},t),r.a.createElement(O.a,{color:"secondary"}))),r.a.createElement(E.g,{anchorOrigin:{vertical:"top",horizontal:"center"},open:this.state.open,onClose:this.handleClose,message:r.a.createElement(E.b,{href:"/",onClick:this.props.onLogOut,variant:"contained",color:"secondary"},"LogOut")}))),r.a.createElement("div",{className:"header"},r.a.createElement(l.c,{exact:!0,to:"/"},r.a.createElement(E.j,{variant:"h1"},"BOOKING-TEST")),a)}}]),t}(r.a.Component),N=Object(i.b)(function(e){return{token:e.auth.token}},function(e){return{onLogOut:function(){return e((localStorage.clear(),sessionStorage.clear(),{type:"LOGOUT"}))}}})(Object(v.withStyles)(function(e){return{margin:{margin:e.spacing.unit}}})(L)),T=(n(382),Object(v.withStyles)(function(e){return{margin:{margin:e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,r.a.createElement(l.b,{to:"/sign-in"},r.a.createElement(E.b,{variant:"contained",color:"secondary",className:t.margin},"Sign In")),r.a.createElement(l.b,{to:"/sign-up"},r.a.createElement(E.b,{variant:"contained",color:"secondary",className:t.margin},"Sign Up"))),r.a.createElement(E.j,{align:"right",color:"secondary"}," Made by Yaroslav Antonchyk "))})),A=function(e){return r.a.createElement("div",{className:"page"},r.a.createElement(N,null),r.a.createElement("div",{className:"page-content"},e.children),r.a.createElement(T,null))},D=(n(383),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",isVaild:!0},n.handleChange=function(e){return function(t){n.checkValid(),n.setState(Object(b.a)({},e,t.target.value))}},n.checkValid=function(){var e=n.state.email,t=/^[a-zA-Z0-9.!#$%&\u2019*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;console.log(t.test(e)),n.setState({isVaild:t.test(e)})},n.handleSubmit=function(e){e.preventDefault(),n.props.userRequest(n.state),n.setState({email:"",password:""})},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.formType,a=this.state,o=a.email,c=a.password,l=a.isVaild;return r.a.createElement(A,null,r.a.createElement("div",{className:t.login},r.a.createElement(E.f,null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:t.form},r.a.createElement(E.h,{error:!l,className:t.margin,name:"email",placeholder:"Email",value:o,onChange:this.handleChange("email")}),r.a.createElement("br",null),r.a.createElement(E.h,{className:t.margin,name:"password",type:"password",placeholder:"Password",value:c,onChange:this.handleChange("password")}),r.a.createElement("br",null),r.a.createElement(E.b,{variant:"contained",color:"secondary",type:"submit",className:t.button,disabled:!(o&&c&&l)},n)),r.a.createElement("div",{className:t.margin+" "+t.text},this.props.children))))}}]),t}(r.a.Component)),_=Object(v.withStyles)(function(){return{login:{display:"flex",alignItems:"center",justifyContent:"center"},margin:{margin:20},form:{height:260,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},text:{display:"flex",alignItems:"center"}}})(D),x=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1}),n.props.onClose()},n.handleRequest=function(e){var t=e.email;localStorage.setItem("email",t),n.props.onSubmit(e),console.log(e)},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,n=e.err;return t?r.a.createElement(m.a,{exact:!0,to:"/"}):n?(console.log(n),r.a.createElement(A,null,r.a.createElement(E.c,{open:!0,onClose:this.handleClose,"aria-labelledby":"simple-dialog-title"},r.a.createElement(E.d,{id:"simple-dialog-title"},n)))):r.a.createElement(_,{userRequest:this.handleRequest,formType:"Login"},r.a.createElement(E.j,{align:"center"}," Have no account?"),r.a.createElement(l.b,{to:"/sign-up"},r.a.createElement(E.b,{variant:"text",color:"secondary"},"Sign Up ")))}}]),t}(r.a.Component),M=Object(i.b)(function(e){return{isAuthenticated:!!localStorage.getItem("token"),err:e.auth.err}},function(e){return{onSubmit:function(t){return e(function(e){return function(t){k.a.post("".concat(C,"/signIn"),e).then(function(e){var n=e.data,a=n.token,r=n._id;localStorage.setItem("token",a),localStorage.setItem("userId",r),t(w(a))}).catch(function(e){t(I(e.message))})}}(t))},onClose:function(){return e(I(null))}}})(x),H=n(70),U=n.n(H),R=n(71),Y=n.n(R),B=n(73),F=n.n(B),G=n(72),P=n.n(G),z=n(38),q=n.n(z),K=(n(384),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).clickHandler=function(){var e=n.props,t=e.roomNumber,a=e.hall._id;localStorage.setItem("currentRoom",t),localStorage.setItem("currentHallId",a)},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.hall,t=e.title,n=e.description,a=e.imageURL,o=e._id;return r.a.createElement("div",{className:"room-listitem"},r.a.createElement(U.a,{className:"card"},r.a.createElement(l.b,{to:"/hall/".concat(o)},r.a.createElement(Y.a,{onClick:this.clickHandler},r.a.createElement(P.a,{className:"media",image:a,title:t}),r.a.createElement(F.a,null,r.a.createElement(q.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),r.a.createElement(q.a,{component:"p"},n))))))}}]),t}(r.a.Component)),V=(n(389),{headers:{Authorization:localStorage.getItem("token")}}),W=function(){return{type:"LOAD_HALLS_INIT"}},Z=function(e){return{type:"LOAD_HALLSLOAD_HALLS_SUCCES",halls:e}},$=function(e){return{type:"LOAD_HALLSLOAD_HALLS_FAIL",err:e}},J=(n(390),function(){return r.a.createElement("div",{className:"Loader"},"Loading...")}),Q=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0},n.handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onLoad()}},{key:"render",value:function(){var e=this.props,t=e.halls,n=e.err;return e.isLoading?r.a.createElement(A,null,r.a.createElement(J,null)):n?r.a.createElement(A,null,r.a.createElement(E.c,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"simple-dialog-title"},r.a.createElement(E.d,{id:"simple-dialog-title"},n))):r.a.createElement(A,null,r.a.createElement("div",{className:"dashboard"},t.map(function(e,t){return r.a.createElement(K,{hall:e,key:e._id,roomNumber:t})})))}}]),t}(r.a.Component),X=Object(i.b)(function(e){return{halls:e.halls.halls,err:e.halls.err,isLoading:e.halls.isLoading}},function(e){return{onLoad:function(){return e(function(e){e(W()),k.a.get("http://ec2-35-175-143-145.compute-1.amazonaws.com:4000/halls",V).then(function(t){var n=t.data.halls;e(Z(n))}).catch(function(t){e($(t.message))})})}}})(Q),ee=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1}),n.props.onClose()},n.handleRequest=function(e){n.props.onSubmit(e),console.log(e)},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isSignedUp,n=e.err;return t?r.a.createElement(A,null,r.a.createElement("div",{className:"flexbox col align-center justify-center"},r.a.createElement(E.j,{align:"center",variant:"h3"},"Account created please "),r.a.createElement("br",null),r.a.createElement(l.b,{to:"/sign-in"},r.a.createElement(E.b,{variant:"text",color:"secondary"},r.a.createElement(E.j,{align:"center",variant:"h3"},"Login"))))):n?(console.log(n),r.a.createElement(A,null,r.a.createElement(E.c,{open:!0,onClose:this.handleClose,"aria-labelledby":"simple-dialog-title"},r.a.createElement(E.d,{id:"simple-dialog-title"},n)))):r.a.createElement(_,{userRequest:this.handleRequest,formType:"Sign Up"},r.a.createElement(E.j,{align:"center"}," Have an account? "),r.a.createElement(l.b,{to:"/sign-in"},r.a.createElement(E.b,{variant:"text",color:"secondary"},"Login")))}}]),t}(r.a.Component),te=Object(i.b)(function(e){return{isSignedUp:null!==e.auth.userId,err:e.auth.err}},function(e){return{onSubmit:function(t){var n=t.email,a=t.password;return e(function(e,t){return function(n){var a={email:e,password:t};k.a.post("".concat(C,"/signUp"),a).then(function(e){var t=e.data,a=t.id,r=t.email;localStorage.setItem("email",r),n(j(a,r))}).catch(function(e){console.log(e.response),n(I(e.message))})}}(n,a))},onClose:function(){return e(I(null))}}})(ee),ne=n(24),ae=n(13),re=n.n(ae),oe=(n(392),n(393),n(394),function(e){return e.children}),ce=n(151),le=n.n(ce),ie=n(152),se=n.n(ie),ue=function(e){var t=e.hours,n=e.currentDate,a=e.tickets,o=e.hallId,c=n.date,l=localStorage.getItem("userId"),i=a.filter(function(e){return e.hall_id===o}),s=i.filter(function(e){return e.user_id===l}),u=i.find(function(e){return re()(c+"T"+t+":01").isBetween(e.from,e.to,"millisecond")}),m=s.find(function(e){return re()(c+"T"+t+":01").isBetween(e.from,e.to,"millisecond")});return r.a.createElement("div",{className:"cell"},r.a.createElement("div",{className:"hours"},t,":00- ",t+1,":00"),r.a.createElement("div",{className:"mark ".concat(u?"booked":"free"," "),onClick:function(){return console.log("*****")}},m&&r.a.createElement(oe,null,r.a.createElement(E.e,{onClick:function(){return null},"aria-label":"Correct"},r.a.createElement(le.a,null)),r.a.createElement(E.e,{color:"secondary",onClick:function(){return null},"aria-label":"Delete"},r.a.createElement(se.a,null)))))},me=function(e){return r.a.createElement("div",{className:"day-scedule"},new Array(8).fill(null).map(function(t,n){return r.a.createElement(ue,Object.assign({hours:10+n},e,{key:n}))}))},de="http://ec2-35-175-143-145.compute-1.amazonaws.com:4000/tickets",he={headers:{Authorization:localStorage.getItem("token")}},pe=function(){return function(e){e(fe()),k.a.get("".concat(de)).then(function(t){var n=t.data;e(ge(n))}).catch(function(t){e(be(t.message))})}},fe=function(){return{type:"GET_TICKETS_INIT"}},ge=function(e){return{type:"GET_TICKETS_SUCCESS",tickets:e}},be=function(e){return{type:"GET_TICKETS_FAIL",err:e}},Ee=(n(395),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={newDate:n.props.date,newStart:"10:00",newEnd:"11:00",open:!1},n.onChange=function(e){var t=e.target,a=t.name,r=t.value,o=n.state.newDate;"newStart"===a&&n.setState({newEnd:re()("".concat(o,"T").concat(r,":00")).add(1,"hours").format("HH:00")}),n.setState(Object(b.a)({},a,r)),sessionStorage.setItem([a],r)},n.handleOpen=function(){n.setState({newDate:n.props.date,newStart:"10:00",newEnd:"11:00",open:!0})},n.handleClose=function(){n.setState({open:!1})},n.onAdd=function(e){e.preventDefault();var t=n.props,a=t.date,r=t.start,o=t.end;n.props.postTicket({hall_id:localStorage.getItem("currentHallId"),user_id:localStorage.getItem("userId"),from:new Date(a+"T"+r).getTime()+1,to:new Date(a+"T"+o).getTime()-1,title:"AAAAAA"})},n.onCorrect=function(e){e.preventDefault();var t=n.props,a=t.tickets,r=t.correctTicket,o=t.date,c=t.start,l=n.state,i=l.newDate,s=l.newStart,u=l.newEnd,m=null;a.forEach(function(e){re()("".concat(o,"T").concat(c,":55")).isBetween(e.from,e.to,"millisecond")&&(m=e._id)}),r({hall_id:localStorage.getItem("currentHallId"),user_id:localStorage.getItem("userId"),from:new Date("".concat(i,"T").concat(s)).getTime()+1,to:new Date("".concat(i,"T").concat(u)).getTime()-1},m),n.setState({open:!1})},n.onDelete=function(e){e.preventDefault();var t=n.props,a=t.tickets,r=t.deleteTicket,o=t.date,c=t.start,l=null;a.forEach(function(e){re()("".concat(o,"T").concat(c,":55")).isBetween(e.from,e.to,"millisecond")&&(l=e._id)}),r(l)},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.tickets,a=e.isAuthenticated,o=e.date,c=e.start,l=e.hallId,i=this.state,s=i.newDate,u=i.newStart,m=i.newEnd,d=i.open;console.log(this.props);var h=localStorage.getItem("userId"),p=n.some(function(e){if(l===e.hall_id&&h===e.user_id)return re()("".concat(o,"T").concat(c,":05")).isBetween(e.from,e.to,"milliseconds")});return r.a.createElement("div",{className:t.root},r.a.createElement(E.i,{className:"edit-bar"},a?r.a.createElement(E.b,{type:"submit",className:t.margin,color:"primary",variant:"contained",onClick:this.onAdd},"Book the room"):r.a.createElement(E.j,null,r.a.createElement(E.b,{href:"/sign-in",variant:"text",className:t.margin,color:"secondary"},"Login"),"for book the room"),a&&r.a.createElement("div",{className:"danger"},r.a.createElement(E.b,{className:t.margin,color:"secondary",disabled:!p,variant:"contained",onClick:this.handleOpen},"Correct ticket"),"OR",r.a.createElement(E.b,{className:t.margin,color:"secondary",disabled:!p,variant:"contained",onClick:this.onDelete},"Delete ticket"))),r.a.createElement(E.c,{open:d,onClose:this.handleClose,"aria-labelledby":"simple-dialog-title"},r.a.createElement(E.d,{id:"simple-dialog-title"},"Input new date"),r.a.createElement("div",{className:"flexbox col pd-20"},r.a.createElement(E.h,{id:"date",label:"Book room for date",type:"date",name:"newDate",value:s,className:t.textField,inputProps:{min:re()().format("YYYY-MM-DD")},InputLabelProps:{shrink:!0},onChange:this.onChange}),r.a.createElement(E.h,{id:"time",label:"Start event",type:"time",name:"newStart",value:u,className:t.textField,InputLabelProps:{shrink:!0},inputProps:{min:"10:00",max:"18:00",step:"1"},onChange:this.onChange}),r.a.createElement(E.h,{id:"time",label:"End event",type:"time",name:"newEnd",value:m,className:"".concat(t.textField," ").concat(t.marginBottom),InputLabelProps:{shrink:!0},inputProps:{min:u,max:"18:00",step:"1"},onChange:this.onChange}),r.a.createElement(E.b,{onClick:this.onCorrect,variant:"contained",color:"primary",className:t.marginBottom},"Confirm"),r.a.createElement(E.b,{onClick:this.handleClose,variant:"contained",color:"secondary"},"Cancel"))))}}]),t}(r.a.Component)),ve=Object(i.b)(function(e){return{tickets:e.tickets.tickets}},function(e){return{postTicket:function(t){return e((n=t,function(e){e(fe());var t=n.from,a=n.to;(new Date).getTime()>t?e(be("This time is already past")):t>a?e(be("End must be later then start")):k.a.post(de,n,he).then(function(){e(pe())}).catch(function(t){console.log(t),e(be(t.message))})}));var n},correctTicket:function(t,n){return e(function(e,t){return function(n){n(fe());var a=e.from,r=e.to;(new Date).getTime()>a?n(be("This time is already past")):a>r?n(be("End must be later then start")):k.a.put("".concat("http://ec2-35-175-143-145.compute-1.amazonaws.com:4000/ticket","/").concat(t),{from:a,to:r,title:"event"},he).then(function(){n(pe())}).catch(function(e){n(be(e.message))})}}(t,n))},deleteTicket:function(t){return e(function(e){return function(t){k.a.delete("".concat(de,"/").concat(e),he).then(function(e){t(pe())}).catch(function(e){t(be(e.message))})}}(t))}}})(Object(v.withStyles)(function(e){return{root:{flexGrow:1,width:"100%"},margin:{margin:e.spacing.unit},marginBottom:{marginBottom:20},container:{color:"red"},textField:{color:"red"}}})(Ee)),ye=n(153),Oe=n.n(ye),Se=n(154),ke=n.n(Se),Ce=(n(396),n(397),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tickets,n=e.currentDay,a=localStorage.getItem("currentHallId"),o=t.filter(function(e){return e.hall_id===a});return r.a.createElement("div",{className:"preview"},new Array(8).fill(null).map(function(e,t){var a=o.some(function(e){return re()("".concat(re()(n).format("YYYY-MM-DD"),"T1").concat(t,":01")).isBetween(e.from,e.to,"milliseconds")});return r.a.createElement("span",{key:t,className:"mark ".concat(a&&"booked")})}))}}]),t}(a.Component)),je=Object(i.b)(function(e){return{tickets:e.tickets.tickets}})(Ce),we=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={currentMonth:re()(),selectedDate:re()()},n.onDateClick=function(e){var t=n.props.onChangeDay;n.setState({selectedDate:e}),t(re()(e).format("YYYY-MM-DD"))},n.nextMonth=function(){var e=n.state.currentMonth;n.setState({currentMonth:e.add(1,"month")})},n.prevMonth=function(){var e=n.state.currentMonth;n.setState({currentMonth:e.subtract(1,"month")})},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"renderHeader",value:function(){var e=this.state.currentMonth;return r.a.createElement("div",{className:"calendar-header flexbox align-center"},r.a.createElement(E.b,{onClick:this.prevMonth},r.a.createElement(Oe.a,null)),r.a.createElement("span",null,re()(e).format("MMMM YYYY")),r.a.createElement(E.b,{onClick:this.nextMonth},r.a.createElement(ke.a,null)))}},{key:"renderDays",value:function(){for(var e=[],t=re()().startOf("week"),n=0;n<7;n++)e.push(r.a.createElement("div",{className:"cell",key:n},t.add(1,"day").format("ddd")));return r.a.createElement("div",{className:"days flexbox"},e)}},{key:"renderCells",value:function(){for(var e=this,t=this.state,n=t.currentMonth,a=t.selectedDate,o=n.clone().startOf("month"),c=n.clone().endOf("month"),l=o.clone().startOf("isoWeek"),i=c.clone().endOf("isoWeek"),s=[],u=[],m=l,d="";m<=i;){for(var h=function(t){d=re()(m).format("DD");var o=re()(m),c=m;u.push(r.a.createElement("div",{className:"day ".concat(re()(c).isSame(n,"month")?re()(c).isSame(a,"day")?"selected":"":"disabled"),key:m,onClick:function(){return e.onDateClick(o)}},r.a.createElement(E.j,null,d),r.a.createElement(je,{currentDay:o}))),m=m.add(1,"day")},p=0;p<7;p++)h();s.push(r.a.createElement("div",{className:"week",key:m},u)),u=[]}return r.a.createElement("div",{className:"body"},s)}},{key:"render",value:function(){return r.a.createElement("div",{className:"calendar"},this.renderHeader(),this.renderDays(),this.renderCells())}}]),t}(r.a.Component),Ie=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={date:re()().format("YYYY-MM-DD"),start:"10:00",end:"11:00",open:!1},n.onChangeTime=function(e){var t=e.target,a=t.name,r=t.value,o=n.state.date;"start"===a&&n.setState({end:re()("".concat(o,"T").concat(r,":00")).add(1,"hours").format("HH:00")}),n.setState(Object(b.a)({},a,r)),sessionStorage.setItem([a],r)},n.onChangeDay=function(e){n.setState({date:e}),console.log(n.state)},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.date,a=t.start,o=t.end,c=!!localStorage.getItem("token");return console.log(this.props),r.a.createElement("div",null,r.a.createElement("form",{className:"roomscedule",noValidate:!0,onSubmit:this.onAdd},r.a.createElement("div",{className:"picker-container"},r.a.createElement(we,{onChangeDay:function(t){return e.onChangeDay(t)}}),c&&r.a.createElement(oe,null,r.a.createElement(E.h,{id:"time",label:"Start event",type:"time",name:"start",value:a,className:"textfield",InputLabelProps:{shrink:!0},inputProps:{min:"10:00",max:"17:00",step:"1"},onChange:this.onChangeTime}),r.a.createElement(E.h,{id:"time",label:"End event",type:"time",name:"end",value:o,className:"textfield",InputLabelProps:{shrink:!0},inputProps:{min:re()("".concat(n,"T").concat(a,":00")).add(1,"hours").format("HH:00"),max:"18:00",step:"1"},onChange:this.onChangeTime}))),r.a.createElement(ve,Object.assign({date:n,start:a,end:o,isAuthenticated:c},this.props)),r.a.createElement(E.j,{variant:"h4",align:"center"},"Scedule for ",n),r.a.createElement(me,Object.assign({currentDate:this.state},this.props))))}}]),t}(r.a.Component),Le=Object(v.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{width:400,marginBottom:20}}})(Ie),Ne=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0},n.handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1}),n.props.confirmErr(),n.handleOpen()},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.getTickets(),console.log(this.props.halls)}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.hall,a=e.hallsErr,o=e.tickets,c=e.ticketsErr,l=e.hallsLoading,i=e.ticketsLoading;if(l||i)return r.a.createElement(A,null,r.a.createElement(J,null));if(a||c){var s=a||c;return r.a.createElement(A,null,r.a.createElement(E.c,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"simple-dialog-title"},r.a.createElement(E.d,{id:"simple-dialog-title"},s)))}return r.a.createElement(A,null,n&&r.a.createElement(E.f,{className:t.root,elevation:1},r.a.createElement(E.j,{variant:"title",component:"h3"},n.title),r.a.createElement(E.a,{alt:n.title,src:n.imageURL,className:t.bigAvatar}),r.a.createElement(E.j,{variant:"subtitle1"},n.description),r.a.createElement(Le,{tickets:o,hallId:n._id})))}}]),t}(r.a.Component),Te=Object(i.b)(function(e,t){var n=t.match.params.hall_id;return{hallsErr:e.halls.err,tickets:e.tickets.tickets,ticketsErr:e.tickets.err,hallsLoading:e.halls.isLoading,ticketsLoading:e.tickets.isLoading,hall:e.halls.halls.find(function(e){return e._id===n})}},function(e){return{getTickets:function(){return e(pe())},confirmErr:function(){return e({type:"ERR_CONFIRM"})}}})(Object(v.withStyles)(function(e){return{root:Object(ne.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:4*e.spacing.unit,margin:20}),bigAvatar:{width:"100%",maxWidth:360,height:260,borderRadius:10,marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit}}})(Ne));var Ae=function(){var e=r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:X}),r.a.createElement(m.b,{path:"/sign-up",component:te}),r.a.createElement(m.b,{path:"/sign-in",component:M}),r.a.createElement(m.b,{path:"/hall/:hall_id",component:Te}));return r.a.createElement("div",null,e)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De={email:null,token:null,userId:null,err:null,loading:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP_SUCCESS":return Object(ne.a)({},e,{email:t.email,userId:t.userId,loading:!1});case"SIGNIN_SUCCESS":return Object(ne.a)({},e,{token:t.token,email:t.email,loading:!1});case"AUTH_FAIL":return Object(ne.a)({},e,{err:t.err,loading:!1});case"LOGOUT":return Object(ne.a)({},e,{token:null,userId:null});default:return e}},xe={halls:[],err:null,isLoading:!1},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_HALLS_INIT":return Object(ne.a)({},e,{isLoading:!0});case"LOAD_HALLSLOAD_HALLS_SUCCES":return Object(ne.a)({},e,{halls:t.halls,isLoading:!1});case"LOAD_HALLSLOAD_HALLS_FAIL":return Object(ne.a)({},e,{err:t.err,isLoading:!1});case"ERR_CONFIRM":return Object(ne.a)({},e,{err:null});default:return e}},He={tickets:[],err:null,isLoading:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TICKETS_INIT":return Object(ne.a)({},e,{isLoading:!0});case"GET_TICKETS_SUCCESS":return Object(ne.a)({},e,{tickets:t.tickets,isLoading:!1});case"GET_TICKETS_FAIL":return Object(ne.a)({},e,{err:t.err,isLoading:!1});case"ERR_CONFIRM":return Object(ne.a)({},e,{err:null});default:return e}},Re=Object(s.c)({auth:_e,halls:Me,tickets:Ue}),Ye=s.d,Be=Object(s.e)(Re,Ye(Object(s.a)(u.a))),Fe=r.a.createElement(i.a,{store:Be},r.a.createElement(l.a,{basename:"/booking_test"},r.a.createElement(Ae,null)));c.a.render(Fe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,n){}},[[224,1,2]]]);
//# sourceMappingURL=main.17545de9.chunk.js.map