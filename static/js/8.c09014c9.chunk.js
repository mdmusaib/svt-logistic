(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{717:function(e,t,a){"use strict";var n=a(1),r=a(110),c=a.n(r),i=a(159),s=a(664),l=(a(167),function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useRef)();return{invoke:function(e,t,a){return r(!0),new Promise(function(){var n=Object(i.a)(c.a.mark((function n(i,s){var d,j;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d=null,e&&t&&a&&(d=JSON.stringify({data:a})),n.prev=2,n.next=5,window.silentFetch(e,{method:t||"POST",body:d});case 5:return j=n.sent,n.next=8,j.json();case 8:l.current=n.sent,i(l.current),r(!1),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(e,t){return n.apply(this,arguments)}}())},result:l.current,inProgress:a}});t.a=function(e){var t=l();return{invoke:function(e){var a=e.endPoint,n=e.method,r=e.data;return t.invoke(a,n,r)},inProgress:t.inProgress}}},962:function(e,t,a){"use strict";a.r(t);var n=a(110),r=a.n(n),c=a(48),i=a(159),s=a(664),l=a(1),d=a.n(l),j=a(771),o=a(959),u=a(954),b=a(955),h=a(961),O=a(958),x=a(671),m=a(968),p=a(969),f=a(970),v=a(971),g=a(678),S=a.n(g),y=a(773),w=a(165),I=a(166),k=a(170),D=a(169),P=a(164),_=a(161),C=a(966),F=a(957),q=a(967),N=a(20),T=d.a.createContext(null),E=function(e){e.index;var t=Object(_.a)(e,["index"]),a=o.a.useForm(),n=Object(s.a)(a,1)[0];return Object(N.jsx)(o.a,{form:n,component:!1,children:Object(N.jsx)(T.Provider,{value:n,children:Object(N.jsx)("tr",Object(c.a)({},t))})})},A=function(e){var t=e.title,a=e.editable,n=e.children,d=e.dataIndex,j=e.record,u=e.handleSave,b=Object(_.a)(e,["title","editable","children","dataIndex","record","handleSave"]),O=Object(l.useState)(!1),x=Object(s.a)(O,2),m=x[0],p=x[1],f=Object(l.useRef)(null),v=Object(l.useContext)(T);Object(l.useEffect)((function(){m&&f.current.focus()}),[m]);var g=function(){p(!m),v.setFieldsValue(Object(P.a)({},d,j[d]))},S=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.validateFields();case 3:t=e.sent,g(),u(Object(c.a)(Object(c.a)({},j),t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Save failed:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),y=n;return a&&(y=m?Object(N.jsx)(o.a.Item,{style:{margin:0},name:d,rules:[{required:!0,message:"".concat(t," is required.")}],children:Object(N.jsx)(h.a,{ref:f,onPressEnter:S,onBlur:S})}):Object(N.jsx)("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:g,children:n})),Object(N.jsx)("td",Object(c.a)(Object(c.a)({},b),{},{children:y}))},M=function(e){Object(k.a)(a,e);var t=Object(D.a)(a);function a(e){var n;return Object(w.a)(this,a),(n=t.call(this,e)).handleDelete=function(e){var t=Object(y.a)(n.state.dataSource);n.setState({dataSource:t.filter((function(t){return t.key!==e}))})},n.handleAdd=function(){var e=n.state,t=e.count,a=e.dataSource,r={key:t,commodity:"0",weight:"0"};n.setState({dataSource:[].concat(Object(y.a)(a),[r]),count:t+1})},n.handleSave=function(e){var t=Object(y.a)(n.state.dataSource),a=t.findIndex((function(t){return e.key===t.key})),r=t[a];t.splice(a,1,Object(c.a)(Object(c.a)({},r),e)),n.setState({dataSource:t},(function(){return n.props.getTableData(n.state.dataSource)}))},n.columns=[{title:"* Commodity",dataIndex:"commodity",width:"50%",editable:!0},{title:"* Weight in KGs",width:"50%",dataIndex:"weight",editable:!0},{title:"",dataIndex:"operation",render:function(e,t){return n.state.dataSource.length>=1?Object(N.jsx)(C.a,{title:"Sure to delete?",onConfirm:function(){return n.handleDelete(t.key)},children:Object(N.jsx)(q.a,{})}):null}}],n.state={dataSource:[],count:2},n}return Object(I.a)(a,[{key:"componentDidUpdate",value:function(e,t){JSON.stringify(e.rowData)!==JSON.stringify(this.props.rowData)&&this.setState({dataSource:this.props.rowData})}},{key:"render",value:function(){var e=this,t=this.state.dataSource,a={body:{row:E,cell:A}},n=this.columns.map((function(t){return t.editable?Object(c.a)(Object(c.a)({},t),{},{onCell:function(a){return{record:a,editable:t.editable,dataIndex:t.dataIndex,title:t.title,handleSave:e.handleSave}}}):t}));return Object(N.jsxs)("div",{style:{width:"100%"},children:[Object(N.jsx)(x.a,{onClick:this.handleAdd,type:"primary",style:{marginBottom:16},children:"Add a row"}),Object(N.jsx)(F.a,{components:a,rowClassName:function(){return"editable-row"},bordered:!0,dataSource:t,columns:n,pagination:!1})]})}}]),a}(d.a.Component),R=d.a.createContext(null),V=function(e){e.index;var t=Object(_.a)(e,["index"]),a=o.a.useForm(),n=Object(s.a)(a,1)[0];return Object(N.jsx)(o.a,{form:n,component:!1,children:Object(N.jsx)(R.Provider,{value:n,children:Object(N.jsx)("tr",Object(c.a)({},t))})})},W=function(e){var t=e.title,a=e.editable,n=e.children,d=e.dataIndex,j=e.record,u=e.handleSave,b=Object(_.a)(e,["title","editable","children","dataIndex","record","handleSave"]),O=Object(l.useState)(!1),x=Object(s.a)(O,2),m=x[0],p=x[1],f=Object(l.useRef)(null),v=Object(l.useContext)(R);Object(l.useEffect)((function(){m&&f.current.focus()}),[m]);var g=function(){p(!m),v.setFieldsValue(Object(P.a)({},d,j[d]))},S=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.validateFields();case 3:t=e.sent,g(),u(Object(c.a)(Object(c.a)({},j),t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Save failed:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),y=n;return a&&(y=m?Object(N.jsx)(o.a.Item,{style:{margin:0},name:d,rules:[{required:!0,message:"".concat(t," is required.")}],children:Object(N.jsx)(h.a,{ref:f,onPressEnter:S,onBlur:S})}):Object(N.jsx)("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:g,children:n})),Object(N.jsx)("td",Object(c.a)(Object(c.a)({},b),{},{children:y}))},J=function(e){Object(k.a)(a,e);var t=Object(D.a)(a);function a(e){var n;return Object(w.a)(this,a),(n=t.call(this,e)).handleDelete=function(e){var t=Object(y.a)(n.state.dataSource);n.setState({dataSource:t.filter((function(t){return t.key!==e}))})},n.handleAdd=function(){var e=n.state,t=e.count,a=e.dataSource,r={key:t,vehicle_no:"0",from_loc:"0",to_loc:"0",material:"0",party_name:"0",rate:"0",scale:"0",total_amount:"0",expences:"0",driver_name:"0",profit:"0"};n.setState({dataSource:[].concat(Object(y.a)(a),[r]),count:t+1})},n.handleSave=function(e){var t=Object(y.a)(n.state.dataSource),a=t.findIndex((function(t){return e.key===t.key})),r=t[a];t.splice(a,1,Object(c.a)(Object(c.a)({},r),e)),n.setState({dataSource:t},(function(){return n.props.getTableData(n.state.dataSource)}))},n.columns=[{title:"* Vehicle No",dataIndex:"vehicle_no",editable:!0,width:"50%"},{title:"* From",dataIndex:"from_loc",editable:!0,width:"50%"},{title:"* To",dataIndex:"to_loc",editable:!0,width:"50%"},{title:"* Material",dataIndex:"material",editable:!0,width:"50%"},{title:"* Party Name",dataIndex:"party_name",editable:!0,width:"50%"},{title:"* Rate",dataIndex:"rate",editable:!0,width:"50%"},{title:"* Scale",dataIndex:"scale",editable:!0,width:"50%"},{title:"* Tot Amt",dataIndex:"total_amount",editable:!0},{title:"* Expences",dataIndex:"expences",editable:!0},{title:"* Driver Name",dataIndex:"driver_name",editable:!0},{title:"* Profit",dataIndex:"profit",editable:!0},{title:"",dataIndex:"operation",render:function(e,t){return n.state.dataSource.length>=1?Object(N.jsx)(C.a,{title:"Sure to delete?",onConfirm:function(){return n.handleDelete(t.key)},children:Object(N.jsx)(q.a,{})}):null}}],n.state={dataSource:[],count:2},n}return Object(I.a)(a,[{key:"componentDidUpdate",value:function(e,t){JSON.stringify(e.rowData)!==JSON.stringify(this.props.rowData)&&this.setState({dataSource:this.props.rowData})}},{key:"render",value:function(){var e=this,t=this.state.dataSource,a={body:{row:V,cell:W}},n=this.columns.map((function(t){return t.editable?Object(c.a)(Object(c.a)({},t),{},{onCell:function(a){return{record:a,editable:t.editable,dataIndex:t.dataIndex,title:t.title,handleSave:e.handleSave}}}):t}));return Object(N.jsxs)("div",{style:{width:"100%",overflowX:"scroll"},children:[Object(N.jsx)(x.a,{onClick:this.handleAdd,type:"primary",style:{marginBottom:16},children:"Add a row"}),Object(N.jsx)(F.a,{components:a,rowClassName:function(){return"editable-row"},bordered:!0,dataSource:t,columns:n,pagination:!1})]})}}]),a}(d.a.Component),Y=a(717),B=a(878),L=a.n(B),z=j.a.Option;t.default=function(e){var t=o.a.useForm(),a=Object(s.a)(t,1)[0],n=Object(l.useRef)(),d=Object(Y.a)(),g=Object(l.useState)([]),y=Object(s.a)(g,2),w=y[0],I=y[1],k=Object(l.useState)([]),D=Object(s.a)(k,2),P=D[0],_=D[1];Object(l.useEffect)((function(){window.matchMedia("(min-width: 768px)").matches&&(n.current.style.padding="20px 60px")}),[]);var C=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(c.a)(Object(c.a)({},t),{},{delivery_date:new Date(t.delivery_date).toLocaleDateString(),date:new Date(t.date).toLocaleDateString(),items:JSON.stringify(w),vehicle_details:JSON.stringify(P)}),e.next=3,d.invoke({endPoint:"https://svt-logictics.herokuapp.com/api/addBooking",method:"post",data:n});case 3:1===(i=e.sent).status?(a.resetFields(),I([]),_([])):alert("Something Went Wroung You Booking Couldn`t able to create!"),console.log("called",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=a.getFieldValue(),t=parseFloat(e.rate),n=parseFloat(e.tax),r=parseFloat(e.total_weight),c=t*r,i=c+c*n/100;t&&r&&a.setFieldsValue({total_amount:parseFloat(i)?i:0})};return Object(N.jsxs)("div",{ref:n,style:{padding:"20px 10px"},children:[Object(N.jsx)(u.a,{children:Object(N.jsx)("p",{style:{fontSize:"calc(10px + 1vmin)"},children:"Booking"})}),Object(N.jsx)("hr",{}),Object(N.jsxs)(o.a,{style:{paddingTop:20},form:a,onFinish:C,children:[Object(N.jsxs)(u.a,{children:[Object(N.jsxs)(b.a,{xl:12,children:[Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Select Coustmer Type *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"customer_type",rules:[{required:!0,message:"Please select customer type!"}],children:Object(N.jsxs)(j.a,{placeholder:"Select",children:[Object(N.jsx)(z,{value:"Accounted Coustmer",children:"Accounted Coustmer"}),Object(N.jsx)(z,{value:"Walkin Coustmer",children:"Walkin Coustmer"})]})})})]}),Object(N.jsx)(u.a,{children:Object(N.jsx)("p",{style:{fontSize:"calc(10px + 1vmin)"},children:"Sender Details.."})}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Email *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"sender_email",rules:[{type:"email",message:"Please Enter Valid Mail"},{required:!0,message:"Please enter your mail!"}],children:Object(N.jsx)(h.a,{placeholder:"Email",prefix:Object(N.jsx)(m.a,{})})})})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Mobile Number *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"sender_mobile",rules:[{required:!0,message:"Please enter your number!"}],children:Object(N.jsx)(h.a,{placeholder:"Mobile Number",maxLength:10,prefix:Object(N.jsx)(p.a,{})})})})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Origin *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"sender_origin",rules:[{required:!0,message:"Please enter your origin!"}],children:Object(N.jsx)(h.a,{placeholder:"Origin"})})})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Origin Service Location *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"originServiceLocation",rules:[{required:!0,message:"Please enter your origin service location!"}],children:Object(N.jsx)(h.a,{placeholder:"Origin Service Location"})})})]}),Object(N.jsx)(u.a,{children:Object(N.jsx)("p",{style:{fontSize:"calc(10px + 1vmin)"},children:"Receiver Details.."})}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Name *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"receiver_name",rules:[{required:!0,message:"Please enter your name!"}],children:Object(N.jsx)(h.a,{placeholder:"Name",prefix:Object(N.jsx)(f.a,{})})})})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Email *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"receiver_email",rules:[{type:"email",message:"Please Enter Valid Mail"},{required:!0,message:"Please enter your mail!"}],children:Object(N.jsx)(h.a,{placeholder:"Email",prefix:Object(N.jsx)(m.a,{})})})})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Mobile Number *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"receiver_mobile",rules:[{required:!0,message:"Please enter your number!"}],children:Object(N.jsx)(h.a,{placeholder:"Mobile Number",maxLength:10,prefix:Object(N.jsx)(p.a,{})})})})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Address *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"receiver_address",rules:[{required:!0,message:"Please enter receiver address"}],children:Object(N.jsx)(L.a,{placeholder:"Receiver Address"})})})]})]}),Object(N.jsxs)(b.a,{xl:12,children:[Object(N.jsx)(u.a,{children:Object(N.jsx)(M,{getTableData:function(e){if(e.length>0){var t=0;e.map((function(e){t+=parseInt(e.weight)})),I(e),a.setFieldsValue({total_weight:t}),F()}},rowData:w})}),Object(N.jsx)("hr",{}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Total Weight *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"total_weight",rules:[{required:!0,message:"Please enter total weight!"}],initialValue:0,children:Object(N.jsx)(h.a,{placeholder:"Total Weight",disabled:!0})})})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Rate/KG *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"rate",rules:[{required:!0,message:"Please enter rate/kg!"}],children:Object(N.jsx)(h.a,{placeholder:"Rate/Kg",onChange:F})})})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Date *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"date",rules:[{required:!0,message:"Please select date!"}],initialValue:S()(),children:Object(N.jsx)(O.a,{disabled:!0,style:{width:"100%"},format:"DD/MM/YYYY"})})})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Expected Delivery Date *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"delivery_date",rules:[{required:!0,message:"Please select expected date!"}],children:Object(N.jsx)(O.a,{style:{width:"100%"},format:"DD/MM/YYYY",disabledDate:function(e){return e&&e<new Date(Date.now()-864e5)}})})})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Service Tax *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"tax",rules:[{required:!0,message:"Please enter service tax!"}],initialValue:"12.5",children:Object(N.jsx)(h.a,{placeholder:"Service Tax",suffix:Object(N.jsx)(v.a,{})})})})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"Final Total Amount *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"total_amount",rules:[{required:!0,message:"Please enter Freight!"}],children:Object(N.jsx)(h.a,{placeholder:"Freight"})})})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)("label",{children:"GST *"})}),Object(N.jsx)(b.a,{span:11,children:Object(N.jsx)(o.a.Item,{name:"gst_type",rules:[{required:!0,message:"Please enter Freight!"}],children:Object(N.jsxs)(j.a,{placeholder:"Select",children:[Object(N.jsx)(z,{value:"With Tax",children:"With Tax"}),Object(N.jsx)(z,{value:"Without Tax",children:"Without Tax"})]})})})]})]})]}),Object(N.jsx)("hr",{}),Object(N.jsx)(J,{getTableData:function(e){_(e)},rowData:P}),Object(N.jsx)("hr",{}),Object(N.jsxs)(u.a,{gutter:16,children:[Object(N.jsx)(b.a,{children:Object(N.jsx)(o.a.Item,{children:Object(N.jsx)(x.a,{type:"primary",danger:!0,htmlType:"submit",children:"Submit"})})}),Object(N.jsx)(b.a,{children:Object(N.jsx)(x.a,{onClick:function(){a.resetFields(),I([])},children:"Reset"})})]})]})]})}}}]);
//# sourceMappingURL=8.c09014c9.chunk.js.map