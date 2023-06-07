"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[121],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),m=i,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={},o="Courier Service Interface",c={unversionedId:"CourierService",id:"CourierService",title:"Courier Service Interface",description:"Courier provides the functionalities like Send, Receive, Subscribe, Unsubscribe through a service interface. This is similar to how we make HTTP calls using Retrofit.",source:"@site/docs/CourierService.md",sourceDirName:".",slug:"/CourierService",permalink:"/courier-android/docs/CourierService",draft:!1,editUrl:"https://github.com/gojek/courier-android/edit/main/docs/docs/CourierService.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MQTT Client Configuration",permalink:"/courier-android/docs/MqttConfiguration"},next:{title:"Subscribe & Unsubscribe topics",permalink:"/courier-android/docs/SubscribeUnsubscribe"}},s={},u=[{value:"Usage",id:"usage",level:3}],p={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"courier-service-interface"},"Courier Service Interface"),(0,i.kt)("p",null,"Courier provides the functionalities like Send, Receive, Subscribe, Unsubscribe through a service interface. This is similar to how we make HTTP calls using Retrofit."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Declare a service interface for various actions like Send, Receive, Subscribe, Unsubscribe."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'interface MessageService {\n    @Receive(topic = "topic/{id}/receive")\n    fun receive(@Path("id") identifier: String): Observable<Message>\n    \n    @Send(topic = "topic/{id}/send", qos = QoS.TWO)\n    fun send(@Path("id") identifier: String, @Data message: Message)\n    \n    @Subscribe(topic = "topic/{id}/receive", qos = QoS.ONE)\n    fun subscribe(@Path("id") identifier: String): Observable<Message>\n    \n    @Unsubscribe(topics = ["topic/{id}/receive"])\n    fun unsubscribe(@Path("id") identifier: String)\n}\n')),(0,i.kt)("p",null,"Use Courier to create an implementation of service interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val courierConfiguration = Courier.Configuration(\n    client = mqttClient,\n    streamAdapterFactories = listOf(RxJava2StreamAdapterFactory()),\n    messageAdapterFactories = listOf(GsonMessageAdapter.Factory())\n)\n\nval courier = Courier(courierConfiguration)\n\nval messageService = courier.create<MessageService>()\n")),(0,i.kt)("p",null,"Following annotations are supported for service interface."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"@Send")," : A method annotation used for sending messages over the MQTT connection.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"@Receive")," : A method annotation used for receiving messages over the MQTT connection. Note: The topic needs to be subscribed for receiving messages.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"@Subscribe")," : A method annotation used for subscribing a single topic over the MQTT connection.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"@SubscribeMultiple")," : A method annotation used for subscribing multiple topic over the MQTT connection.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"@Unsubscribe")," : A method annotation used for unsubscribing a single topic over the MQTT connection.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"@Path")," : A parameter annotation used for specifying a path variable in an MQTT topic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"@Data")," : A parameter annotation used for specifying the message object while sending a message over the MQTT connection.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"@TopicMap")," : A parameter annotation used for specifying a topic map. It is always used while subscribing multiple topics."))))}d.isMDXComponent=!0}}]);