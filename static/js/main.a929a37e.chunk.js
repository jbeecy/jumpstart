(this.webpackJsonpjumpstart=this.webpackJsonpjumpstart||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(29),i=n.n(s),c=(n(72),n(67)),o=n(10),u=n(11),l=n(14),d=n(13),h=n(9),j=n(106),m=n(2),b=n(3),g=n(1),p=["user","component","render"],O=function(e){var t=e.user,n=e.component,a=e.render,r=Object(b.a)(e,p);return t&&a?Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},r),{},{render:a})):Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},r),{},{render:function(e){return t?Object(g.jsx)(n,Object(m.a)({},e)):Object(g.jsx)(h.a,{to:"/"})}}))},f=n(50),v=(n(81),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,r=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){r(s)}),300),Object(g.jsx)(f.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(f.a.Heading,{children:n}),Object(g.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(r.a.Component)),x=n(66),w=n(36),y=n(12),C=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(y.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(g.jsx)(y.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(g.jsx)(y.c,{to:"/inquiries",className:"nav-link",children:"Inquiries"}),Object(g.jsx)(y.c,{to:"/create-inquiries",className:"nav-link",children:"Create Inquiry"})]}),q=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(y.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(g.jsx)(y.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),S=Object(g.jsx)(a.Fragment,{children:Object(g.jsx)(y.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),A=function(e){var t=e.user;return Object(g.jsxs)(w.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(g.jsx)(w.a.Brand,{children:Object(g.jsx)(y.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"Welcome to Jumpstart!"})}),Object(g.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(x.a,{className:"ml-auto",children:[t&&Object(g.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),S,t?C:q]})})]})},k=n(6),I="https://infinite-everglades-04366.herokuapp.com",P="http://localhost:4741",U="localhost"===window.location.hostname?P:I,N=n(24),D=n.n(N),F=function(e){return D()({url:U+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},B=n(7),G=n(28),T=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props,r=n.msgAlert,s=n.history,i=n.setUser;(t=a.state,D()({method:"POST",url:U+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return F(a.state)})).then((function(e){return i(e.data.user)})).then((function(){return r({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),r({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",password:"",passwordConfirmation:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign Up"}),Object(g.jsxs)(B.a,{onSubmit:this.onSignUp,children:[Object(g.jsxs)(B.a.Group,{controlId:"email",children:[Object(g.jsx)(B.a.Label,{children:"Email address"}),Object(g.jsx)(B.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(B.a.Group,{controlId:"password",children:[Object(g.jsx)(B.a.Label,{children:"Password"}),Object(g.jsx)(B.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsxs)(B.a.Group,{controlId:"passwordConfirmation",children:[Object(g.jsx)(B.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(B.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(g.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),E=Object(h.f)(T),L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.setUser;F(a.state).then((function(e){return s(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign In"}),Object(g.jsxs)(B.a,{onSubmit:this.onSignIn,children:[Object(g.jsxs)(B.a.Group,{controlId:"email",children:[Object(g.jsx)(B.a.Label,{children:"Email address"}),Object(g.jsx)(B.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(B.a.Group,{controlId:"password",children:[Object(g.jsx)(B.a.Label,{children:"Password"}),Object(g.jsx)(B.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),z=Object(h.f)(L),H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return D()({url:U+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),n}(a.Component),_=Object(h.f)(H),M=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.user;(function(e,t){return D()({url:U+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,s).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Change Password"}),Object(g.jsxs)(B.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(B.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(B.a.Label,{children:"Old password"}),Object(g.jsx)(B.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(B.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(B.a.Label,{children:"New Password"}),Object(g.jsx)(B.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),W=Object(h.f)(M),J=function(e){return D()({url:U+"/inquiries",method:"get",headers:{Authorization:"Bearer ".concat(e.token)}})},Y=n(107),R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleDelete=function(e){var t=a.props,n=t.msgAlert,r=t.user,s=t.history;e.preventDefault(),function(e,t){return D()({url:U+"/inquiries/"+e,method:"delete",headers:{Authorization:"Bearer ".concat(t.token)}})}(e.target.attributes.getNamedItem("data-id").value,r).then((function(){return n({heading:"Inquiry deleted.",message:"Your inquiry has been successfully deleted.",variant:"success"})})).then((function(){return s.push("/inquiries")})).then((function(){return J(r).then((function(e){return a.setState({inquiries:e.data.inquiries})})).then((function(){return n({heading:"Success!",message:"Here are the inquiries again.",variant:"success"})}))})).catch((function(e){return n({heading:"Delete failed.",message:"Unable to delete. If you are not the owner you cannot delete this."+e.message,variant:"danger"})}))},a.state={inquiries:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.msgAlert,a=t.user;J(a).then((function(t){return e.setState({inquiries:t.data.inquiries})})).then((function(){return n({heading:"Success",message:"Here's the inquiries",variant:"success"})})).catch((function(e){return n({heading:"Index failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e=this,t=this.props.history,n=this.state.inquiries.map((function(n){return Object(g.jsx)(Y.a,{style:{width:"45rem"},children:Object(g.jsxs)(Y.a.Body,{children:[Object(g.jsx)(Y.a.Title,{children:n.subject}),Object(g.jsx)(Y.a.Text,{children:n.content}),Object(g.jsx)(G.a,{"data-id":n._id,style:{margin:"10px",alignItems:"center"},onClick:function(){return t.push("/inquiries/".concat(n._id))},children:"Update Inquiry"}),Object(g.jsx)(G.a,{variant:"btn btn-outline-danger",onClick:e.handleDelete,"data-id":n._id,className:"button",children:"Delete Inquiry"})]})},n._id)}));return Object(g.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexFlow:"row wrap"},children:[Object(g.jsx)("h4",{children:"Inquiries"}),Object(g.jsx)("ul",{children:n})]})}}]),n}(a.Component),K=Object(h.f)(R),Q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=a.props,r=n.user,s=n.msgAlert,i=n.history;(function(e,t){return D()({url:U+"/inquiries",method:"post",data:{inquiry:e},headers:{Authorization:"Bearer ".concat(t.token)}})})(t,r).then((function(e){return a.setState({inquiries:{subject:"",content:""}})})).then((function(){return s({heading:"Create successful",message:"Inquiry successfully posted.",variant:"success"})})).then((function(){return i.push("/inquiries")})).catch((function(e){return console.error(e)}))},a.state={subject:"",content:""},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Post your inquiry"}),Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("label",{children:"Subject"}),Object(g.jsx)("input",{value:this.state.subject,onChange:this.handleChange,name:"subject"}),Object(g.jsx)("label",{children:"content"}),Object(g.jsx)("input",{value:this.state.content,onChange:this.handleChange,name:"content"}),Object(g.jsx)("button",{type:"submit",children:"Create inquiry"})]})]})}}]),n}(a.Component),V=Object(h.f)(Q),X=function(e){var t=e.inquiry,n=e.handleSubmit,a=e.handleChange;return Object(g.jsxs)(B.a,{onSubmit:n,children:[Object(g.jsx)(B.a.Group,{controlId:"subject",children:Object(g.jsx)(B.a.Control,{as:"textarea",required:!0,name:"subject",value:t.subject,placeholder:"Updated Inquiry Subject",onChange:a})}),Object(g.jsx)(B.a.Group,{controlId:"content",as:"textarea",required:!0,name:"content",value:t.content,placeholder:"Update Inquiry Content",onChange:a}),Object(g.jsx)(G.a,{type:"submit",children:"Update Inquiry"})]})},Z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=Object(k.a)({},e.target.name,e.target.value);a.setState((function(e){return{inquiry:Object(m.a)(Object(m.a)({},e.inquiry),t)}}))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.user,r=t.msgAlert,s=t.history,i=t.match;(function(e,t,n){return D()({url:U+"/inquiries/"+t,method:"patch",data:{inquiry:e},headers:{Authorization:"Bearer ".concat(n.token)}})})(a.state.inquiry,i.params.id,n).then((function(){return r({heading:"Inquiry updated!",message:"Inquiry has been successfully updated!",variant:"success"})})).then((function(){return s.push("/inquiries")})).then((function(){return J(n).then((function(e){return a.setState({inquiries:e.data.inquiries})})).then((function(){return r({heading:"Success!",message:"Here are the inquiries again.",variant:"success"})}))})).catch((function(e){return r({heading:"Update failed.",message:"Something went wrong with your update: "+e.message,variant:"danger"})}))},a.state={inquiry:{subject:"",content:""}},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,a=t.user,r=t.msgAlert;(function(e,t){return D()({url:U+"/inquiries/"+e,method:"get",headers:{Authorization:"Bearer ".concat(t.token)}})})(n.params.id,a).then((function(t){return e.setState({inquiry:t.data.inquiry[0]})})).then((function(){return r({heading:"Update the inquiry",message:"Go ahead and update your inquiry now",variant:"success"})})).catch((function(e){return r({heading:"unable to retrieve inquiry",message:"something went wrong."+e.message,variant:"danger"})}))}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"Update your inquiry below"}),Object(g.jsx)(X,{inquiry:this.state.inquiry,handleSubmit:this.handleSubmit,handleChange:this.handleChange})]})}}]),n}(a.Component),$=Object(h.f)(Z),ee=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,r=e.variant,s=Object(j.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(c.a)(e.msgAlerts),[{heading:t,message:n,variant:r,id:s}])}}))},a.state={user:null,msgAlerts:[]},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,r=t.user;return Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(A,{user:r}),n.map((function(t){return Object(g.jsx)(v,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)(h.b,{path:"/sign-up",render:function(){return Object(g.jsx)(E,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(h.b,{path:"/sign-in",render:function(){return Object(g.jsx)(z,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(O,{user:r,path:"/sign-out",render:function(){return Object(g.jsx)(_,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:r})}}),Object(g.jsx)(O,{user:r,path:"/change-password",render:function(){return Object(g.jsx)(W,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(O,{user:r,exact:!0,path:"/inquiries",render:function(){return Object(g.jsx)(K,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(O,{user:r,path:"/create-inquiries",render:function(){return Object(g.jsx)(V,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(O,{user:r,exact:!0,path:"/inquiries/:id",render:function(){return Object(g.jsx)($,{msgAlert:e.msgAlert,user:r})}})]})]})}}]),n}(a.Component),te=Object(g.jsx)(y.a,{basename:"/jumpstart",children:Object(g.jsx)(ee,{})});i.a.render(te,document.getElementById("root"))},72:function(e,t,n){},81:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.a929a37e.chunk.js.map