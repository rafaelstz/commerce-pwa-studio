"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[6504],{29234:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return d}});var o=n(87462),a=n(63366),s=(n(15007),n(64983)),i=n(91515),r=["components"],c={},p={_frontmatter:c},m=i.Z;function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,s.mdx)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"eventing-in-pwa-studio"},"Eventing in PWA Studio"),(0,s.mdx)("p",null,"PWA Studio 12.5.0 introduces an eventing framework for collecting user interactions with your site."),(0,s.mdx)("p",null,"A set of ",(0,s.mdx)("a",{parentName:"p",href:"/api/events/"},"default events")," are included within PWA Studio. These events cover the most common interactions most store owners would likely want to track: user log in/out, product clicks, cart operations, etc.\n",(0,s.mdx)("a",{parentName:"p",href:"/tutorials/events/custom-events/"},"Custom events")," can be written to cover your own specific needs."),(0,s.mdx)("p",null,"It is also possible to ",(0,s.mdx)("a",{parentName:"p",href:"/tutorials/events/custom-events/"},"subscribe")," to events so that event data can be sent to other analytics platforms."),(0,s.mdx)("p",null,"This event data can be collected and sent to analytics systems for processing."),(0,s.mdx)("p",null,"For Adobe Commerce users with an ",(0,s.mdx)("a",{parentName:"p",href:"https://business.adobe.com/products/experience-platform/adobe-experience-platform.html"},"Adobe Experience Platform")," subscription, an ",(0,s.mdx)("a",{parentName:"p",href:"/integrations/adobe-commerce/aep/"},"extension")," is available for PWA studio that connects to an Adobe Commerce backend."),(0,s.mdx)("p",null,"The Adobe Commerce backend can be ",(0,s.mdx)("a",{parentName:"p",href:"/integrations/adobe-commerce/aep/"},"configured")," to send event data to the Adobe Experience Platform."),(0,s.mdx)("h2",{id:"eventing-basics"},"Eventing basics"),(0,s.mdx)("p",null,"At the core of the eventing framework is an observable.\nWhen extensions subscribe to the observable the framework notifies it whenever the application publishes an event and sends the event data to the extension for handling."),(0,s.mdx)("p",null,"The framework allows extensions to subscribe to it and notifies those extensions when the application dispatches an event.\nIt also keeps track of all the events that have occurred since app initialization allowing extensions that subscribe later can still process events that have already occurred. The ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/context/eventing.js#L13-L54"},"EventingContextProvider")," component is the data provider for the eventing context."),(0,s.mdx)("p",null,"Developers can access the observable object and the API using the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/extensions/venia-sample-eventing/main.js#L29"},(0,s.mdx)("inlineCode",{parentName:"a"},"useEventingContext()"))," hook.\nThe observable object is used by extensions to subscribe to an event by passing in a callback function that is passed to the event object, containing the type and payload. See the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/extensions/venia-sample-eventing/main.js#L32-L59"},"venia-sample-eventing")," module and the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/extensions/experience-platform-connector/src/main.js#L83-L85"},"experience-platform-connector")," for working examples."),(0,s.mdx)("p",null,"The API contains a ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/extensions/experience-platform-connector/src/wrappers/wrapUseAutocomplete.js#L23-L35"},(0,s.mdx)("inlineCode",{parentName:"a"},"dispatch()"))," function that storefront components use to send events."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-general-concepts-eventing-index-md-fa264bc92a020c2fa970.js.map