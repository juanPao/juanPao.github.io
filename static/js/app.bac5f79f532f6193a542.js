webpackJsonp([1],{NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper green"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("\n            Employee Manager")])],1)])])},staticRenderFns:[]},i={name:"App",components:{NavBar:o("VU/8")(null,n,!1,null,null,null).exports}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("NavBar"),this._v(" "),t("router-view")],1)},staticRenderFns:[]},s=o("VU/8")(i,a,!1,null,null,null).exports,p=o("/ocq"),r=o("kxiW"),m=o.n(r),d=(o("881v"),m.a.initializeApp({apiKey:"AIzaSyBbQvCUQWG4WSxpZaDeKrAHHQwqImcKsJs",authDomain:"employee-manager-9445c.firebaseapp.com",databaseURL:"https://employee-manager-9445c.firebaseio.com",projectId:"employee-manager-9445c",storageBucket:"employee-manager-9445c.appspot.com",messagingSenderId:"1015186717032",appId:"1:1015186717032:web:02dfd73dc7b30168fd7edd"}).firestore()),c={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;d.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){e.employees.push(t.data())})})}},u={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"dashboard"}},[o("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return o("li",{key:t.employee_id,staticClass:"collection-item"},[o("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v("\n            "+e._s(t.employee_id)+":"+e._s(t.name)+"\n            "),o("router-link",{attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[o("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),o("div",{staticClass:"fixed-action-btn"},[o("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[o("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Employees")])])}]},v=o("VU/8")(c,u,!1,null,null,null).exports,y={name:"new-employee",data:function(){return{employee:{employee_id:null,dept:null,position:null,name:null}}},methods:{saveEmployee:function(){var e=this;d.collection("employees").add(this.employee).then(function(t){e.$router.push("/")}).catch(function(e){return console.log(e)})}}},_={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"new-employee"}},[o("h3",[e._v("New Employee")]),e._v(" "),o("div",{staticClass:"row"},[o("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.employee_id,expression:"employee.employee_id"}],attrs:{type:"text",id:"employee_id"},domProps:{value:e.employee.employee_id},on:{input:function(t){t.target.composing||e.$set(e.employee,"employee_id",t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"employee_id"}},[e._v("Employee ID")])])]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.name,expression:"employee.name"}],attrs:{type:"text",id:"name"},domProps:{value:e.employee.name},on:{input:function(t){t.target.composing||e.$set(e.employee,"name",t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"name"}},[e._v("Employee Name")])])]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.dept,expression:"employee.dept"}],attrs:{type:"text",id:"dept"},domProps:{value:e.employee.dept},on:{input:function(t){t.target.composing||e.$set(e.employee,"dept",t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"dept"}},[e._v("Employee Department")])])]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.position,expression:"employee.position"}],attrs:{type:"text",id:"position"},domProps:{value:e.employee.position},on:{input:function(t){t.target.composing||e.$set(e.employee,"position",t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"position"}},[e._v("Employee position")])])]),e._v(" "),o("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")]),e._v(" "),o("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Save")])],1)])])},staticRenderFns:[]},f=o("VU/8")(y,_,!1,null,null,null).exports,h={name:"view-employee",data:function(){return{employee:{id:null,employee_id:null,name:null,position:null,dept:null}}},beforeRouteEnter:function(e,t,o){d.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){o(function(t){t.employee=e.data()})})})},methods:{deleteEmployee:function(e){var t=this;console.log(e),confirm("Are you sure do you want to delete this employee?")&&d.collection("employees").where("employee_id","==",e).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})}}},g={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"view-employee"}},[o("ul",{staticClass:"collection with-header"},[o("li",{staticClass:"collection-header"},[o("h4",[e._v("Name: "+e._s(e.employee.name))])]),e._v(" "),o("li",{staticClass:"collection-item"},[e._v("\n            Employee ID: "+e._s(e.employee.employee_id)+"\n        ")]),e._v(" "),o("li",{staticClass:"collection-item"},[e._v("\n            Dept: "+e._s(e.employee.dept)+"\n        ")]),e._v(" "),o("li",{staticClass:"collection-item"},[e._v("\n            Position: "+e._s(e.employee.position)+"\n        ")])]),e._v(" "),o("router-link",{attrs:{to:"/"}},[e._v("Back")]),e._v(" "),o("button",{staticClass:"btn red",on:{click:function(t){return e.deleteEmployee(e.employee.employee_id)}}},[e._v("Delete")]),e._v(" "),o("div",{staticClass:"fixed-action-btn"},[o("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee.employee_id}}}},[o("i",{staticClass:"fa fa-edit"})])],1)],1)},staticRenderFns:[]},C=o("VU/8")(h,g,!1,null,null,null).exports,w={name:"edit-employee",data:function(){return{employee:{employee_id:null,dept:null,position:null,name:null}}},beforeRouteEnter:function(e,t,o){d.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){o(function(t){t.employee=e.data()})})})},methods:{updateEmployee:function(){var e=this;d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update(e.employee).then(function(t){e.$router.push({name:"view-employee",params:{employee_id:e.employee.employee_id}})})})})}}},b={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"edit-employee"}},[o("h3",[e._v("Edit Employee")]),e._v(" "),o("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.employee_id,expression:"employee.employee_id"}],attrs:{type:"text",id:"employee_id",disabled:""},domProps:{value:e.employee.employee_id},on:{input:function(t){t.target.composing||e.$set(e.employee,"employee_id",t.target.value)}}}),e._v(" "),o("label",[e._v("Employee ID")])])]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.name,expression:"employee.name"}],attrs:{type:"text",id:"name"},domProps:{value:e.employee.name},on:{input:function(t){t.target.composing||e.$set(e.employee,"name",t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"name"}},[e._v("Employee Name")])])]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.dept,expression:"employee.dept"}],attrs:{type:"text",id:"dept"},domProps:{value:e.employee.dept},on:{input:function(t){t.target.composing||e.$set(e.employee,"dept",t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"dept"}},[e._v("Employee Department")])])]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.position,expression:"employee.position"}],attrs:{type:"text",id:"position"},domProps:{value:e.employee.position},on:{input:function(t){t.target.composing||e.$set(e.employee,"position",t.target.value)}}}),e._v(" "),o("label",{attrs:{for:"position"}},[e._v("Employee position")])])]),e._v(" "),o("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")]),e._v(" "),o("button",{staticClass:"btn orange",attrs:{type:"submit"}},[e._v("Update")])],1)])},staticRenderFns:[]},E=o("VU/8")(w,b,!1,null,null,null).exports;l.a.use(p.a);var x=new p.a({routes:[{path:"/",name:"dashboard",component:v},{path:"/new",name:"new-employee",component:f},{path:"/edit/:employee_id",name:"edit-employee",component:E},{path:"/:employee_id",name:"view-employee",component:C}]});l.a.config.productionTip=!1,new l.a({el:"#app",router:x,components:{App:s},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.bac5f79f532f6193a542.js.map