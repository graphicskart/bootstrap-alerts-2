(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(71)},45:function(e,t,a){},46:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(8),c=a.n(s),i=(a(45),a(15)),r=a(16),l=a(20),u=a(17),h=a(19),p=(a(46),a(73)),m=a(72),d=a(75),f=a(74),w=function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e,a))).handleClose=function(){n.setState({show:!1})},n.handleShow=function(){n.setState({show:!0})},n.state={show:!1},n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(f.a,{show:this.state.show,onHide:this.handleClose,className:"".concat(this.props.type," ").concat(this.props.type," text-center"),size:"md",centered:!0},o.a.createElement(f.a.Body,null,o.a.createElement(m.a,{xs:12},o.a.createElement("h4",{className:"title"},this.props.title),o.a.createElement(m.a,{xs:12,className:"text-center"},o.a.createElement("hr",{className:"separator"})),o.a.createElement("p",{className:"modal-contents"},this.props.description),o.a.createElement("p",{className:"icon"},this.props.icon)),o.a.createElement(m.a,{sm:12,xs:12,className:"modal-footer-area "},o.a.createElement(d.a,{variant:"outline-secondary",onClick:this.handleClose},"Continue shopping"),o.a.createElement(d.a,{variant:this.props.type,onClick:this.handleClose},this.props.buttonTitle))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).openModal=function(e,t,n,o,s){a.setState({type:e,title:t,description:n,buttonTitle:o,icon:s}),a.modal.handleShow()},a.state={type:"",description:"",title:"",buttonTitle:"",icon:""},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(p.a,{className:"App"},o.a.createElement(m.a,{xs:12},o.a.createElement(d.a,{variant:"outline-success",onClick:function(){return e.openModal("success","Success!","We are delighted to inform you that we received your payment.","Print receipt",o.a.createElement("i",{class:"fas fa-check-circle text-success"}))}},"Success"),"\xa0",o.a.createElement(d.a,{variant:"outline-danger",onClick:function(){return e.openModal("danger","Error!","Unfortunately we have an issue with your payment, try again later","Try once again",o.a.createElement("i",{class:"fas fa-times-circle text-danger"}))}},"Danger")),o.a.createElement(w,{ref:function(t){return e.modal=t},type:this.state.type,description:this.state.description,title:this.state.title,buttonTitle:this.state.buttonTitle,icon:this.state.icon}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.830fadc6.chunk.js.map