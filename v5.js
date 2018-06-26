(function(e){"use strict";e(function(){e(".tooltip-demo").tooltip({selector:'[data-toggle="tooltip"]',container:"body"});e('[data-toggle="popover"]').popover();e(".tooltip-test").tooltip();e(".popover-test").popover();e('.bd-example-indeterminate [type="checkbox"]').prop("indeterminate",true);e('.bd-content [href="#"]').click(function(e){e.preventDefault()});e("#exampleModal").on("show.bs.modal",function(t){var n=e(t.relatedTarget);var r=n.data("whatever");var i=e(this);i.find(".modal-title").text("New message to "+r);i.find(".modal-body input").val(r)});e(".bd-toggle-animated-progress").on("click",function(){e(this).siblings(".progress").find(".progress-bar-striped").toggleClass("progress-bar-animated")});e("figure.highlight, div.highlight").each(function(){var t='<div class="bd-clipboard"><button class="btn-clipboard" title="Copy to clipboard"><i style:"font-size: " class="fas fa-clipboard-list"></i></button></div>';e(this).before(t);e(".btn-clipboard").tooltip().on("mouseleave",function(){e(this).tooltip("hide")})});var t=new Clipboard(".btn-clipboard",{target:function(e){return e.parentNode.nextElementSibling}});t.on("success",function(t){e(t.trigger).attr("title","Copied!").tooltip("_fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("_fixTitle");t.clearSelection()});t.on("error",function(t){var n=/Mac/i.test(navigator.userAgent)?"⌘":"Ctrl-";var r="Press "+n+"C to copy";e(t.trigger).attr("title",r).tooltip("_fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("_fixTitle")});anchors.options={icon:"#"};anchors.add(".bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5");e(".bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5").wrapInner("<div></div>");if(window.docsearch){window.docsearch({apiKey:"48cb48b22351bc71ea5f12f4d1ede198",indexName:"bootstrap-v4",inputSelector:"#search-input",handleSelected:function(e,t,n){var r=n.url;r=n.isLvl1?r.split("#")[0]:r;window.location.href=r},transformData:function(e){return e.map(function(e){e.url=e.url.replace("https://v4-alpha.getbootstrap.com","/docs/4.0");return e})},debug:false})}Holder.addTheme("gray",{bg:"#777",fg:"rgba(255,255,255,.75)",font:"Helvetica",fontweight:"normal"})})})(jQuery);(function(){"use strict";function e(){var e=/MSIE ([0-9.]+)/.exec(window.navigator.userAgent);if(e===null){return null}var t=parseInt(e[1],10);var n=Math.floor(t);return n}function t(){var e=new Function("/*@cc_on return @_jscript_version; @*/")();if(typeof e==="undefined"){return 11}if(e<9){return 8}return e}var n=window.navigator.userAgent;if(n.indexOf("Opera")>-1||n.indexOf("Presto")>-1){return}var r=e();if(r===null){return}var i=t();if(r!==i){window.alert("WARNING: You appear to be using IE"+i+" in IE"+r+" emulation mode.\nIE emulation modes can behave significantly differently from ACTUAL older versions of IE.\nPLEASE DON'T FILE BOOTSTRAP BUGS based on testing in IE emulation modes!")}})();(function(){"use strict";if("serviceWorker"in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("/docs/4.1/sw.js").then(function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}).catch(function(e){console.log("ServiceWorker registration failed: ",e)})})}else{console.log("Service workers are not supported.")}})();
