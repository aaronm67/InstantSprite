(function(window, undefined) {


//     Underscore.js 1.5.1
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.1";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(j.has(n,a)&&t.call(e,n[a],a,n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=F(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(null==t?j.identity:t);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};j.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)})},j.countBy=function(n,t,r){return k(n,t,r,function(n,t){j.has(n,t)||(n[t]=0),n[t]++})},j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var R=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return R(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var M=function(){};j.bind=function(n,t){var r,e;if(w&&n.bind===w)return w.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));M.prototype=n.prototype;var u=new M;M.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u=null;return function(){var i=this,a=arguments,o=function(){u=null,r||(e=n.apply(i,a))},c=r&&!u;return clearTimeout(u),u=setTimeout(o,t),c&&(e=n.apply(i,a)),e}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push(n[r]);return t},j.pairs=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push([r,n[r]]);return t},j.invert=function(n){var t={};for(var r in n)j.has(n,r)&&(t[n[r]]=r);return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this);

var sprite = window.sprite = { };
var document = window.document;
var elements = sprite.elements = {
	fileInput: '#fileInput',
	fileInputShortcut: '#fileInputShortcut',
	fileSamples: '#fileSamples',
	dropbox: '#source',
	spriteContainer: '#sprite',
	fileContainer: '#files',
	addedFiles: '#added-files',
	fileWarnings: '#file-warnings',
	imageload: '#imageload',
	exportCss: '#exportCss',
	exportHtml: '#exportHtml',
	exportImageNewWindow: '#openInNewWindow',
	exportBase64: '#base64Image',
	preview: '#preview',
	result: '#result',
	cssTemplateInputs: '#css-template input',
	classPrefix: '#class-prefix',
	spriteClassName: '#sprite-classname',
	filenameMatch: '#filename-match',
	classSuffix: '#class-suffix',
	cssPrefix: '#css-prefix',
	options: '#options',
	optionOffset: '#offset',
	optionDirection: ':radio[name=direction]',
	optionExport: ':radio[name=export]',
	sections: 'section',
	app: '#app',
	noapp: '#noapp',
	progress: '#progress',
	intro: '#intro'
};

var settings = sprite.settings = {
	enabled: (function() {
		return FileReaderJS.enabled;
	})(),
	thumbnailWidth: 20,
	thumbnailHeight: 20,
	maxImageSize: 512000,
	canExportGif: (function() {
		var c = document.createElement("canvas");
		try {
			c.width = 1;
			c.height = 1;
			c.toDataURL("image/gif");
			return true;
		} catch(e) { }
		return false;
	})(),
	canImportTiff: (function() {
		return !$.browser.mozilla;
	})(),
	sampleImages: [
		{ src: 'styles/icons/comments.png', extra: { nameNoExtension: 'comments', prettySize: '557.00 bytes' }, name: 'comments.png', type: 'image/png' },
		{ src: 'styles/icons/group.png', extra: { nameNoExtension: 'group', prettySize: '753.00 bytes' }, name: 'group.png', type: 'image/png' },
		{ src: 'styles/icons/help.png', extra: { nameNoExtension: 'help', prettySize: '786.00 bytes' }, name: 'help.png', type: 'image/png' },
		{ src: 'styles/icons/delete.png', extra: { nameNoExtension: 'delete', prettySize: '715.00 bytes' }, name: 'delete.png', type: 'image/png' },
		{ src: 'styles/icons/github.png', extra: { nameNoExtension: 'github', prettySize: '389.00 bytes' }, name: 'github.png', type: 'image/png' },
		{ src: 'styles/icons/computer_add.png', extra: { nameNoExtension: 'computer_add', prettySize: '781.00 bytes' }, name: 'computer_add.png', type: 'image/png' }
	]
};

var resultCanvas = document.createElement("canvas"),
	resultBase64,
	loadingfiles = 0;

var templates = {
	'loadedImage': '<li class="clearfix"><div class="controls"><span class="remove">✖</span></div><canvas></canvas><span class="name">${name}</span><input class="hide" value="${extra.nameNoExtension}" /> <span class="details"><strong>type:</strong> ${type} | <strong>size:</strong> ${extra.prettySize}</span>',
	'fileNotImage': '<li><div class="controls"><span class="remove">✖</span></div>The file "${name}" is not identified as an image.  It\'s type is: ${type || "unknown"}.  Skipping the file.  If you think this is in error, please leave <a href="feedback/" target="_blank" class="normal">feedback</a> telling me what happened.</li>',
	'fileLoadError': '<li><div class="controls"><span class="remove">✖</span></div>Error loading file</li>',
	'fileTooBig': '<li><div class="controls"><span class="remove">✖</span></div>The file "${name}" is too big (${extra.prettySize}).  Spriting work best with small images (like icons or buttons).</li>',
	'duplicate': 'You have two images with the same name (${name}).  The class names are automatically generated based on your file name (but you can change them later).  It will be easier if you get rid of any duplicate images.'
};

var templateHelpers = {
	loadedImage: function(canvas, file) {
		var tmpl = $.tmpl( "loadedImage", file );

		// generate thumbnail, show in list
        var ratio = 1,
        	maxWidth = settings.thumbnailWidth,
        	maxHeight = settings.thumbnailHeight;
        	thumbnailCanvas = tmpl.find("canvas")[0],
        	thumbnailContext = thumbnailCanvas.getContext("2d");

        if(canvas.width > settings.thumbnailWidth) {
            ratio = maxWidth / canvas.width;
        }
        else if(canvas.height > maxHeight) {
            ratio = maxHeight / canvas.height;
		}

		// only allow letters, numbers, dashes, and underscores in the selector
		// should this come through in the FileReaderJS extra prop?
		canvas.fileName = file.extra.nameNoExtension.replace(/[^_a-zA-Z0-9-]/g, '');
		thumbnailCanvas.originalCanvas = canvas;
        thumbnailCanvas.width = canvas.width * ratio;
        thumbnailCanvas.height = canvas.height * ratio;

        thumbnailContext.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, thumbnailCanvas.width, thumbnailCanvas.height);

        return tmpl;
	}
};

sprite.shrinkdropbox = function() {
	elements.dropbox.removeClass("full").removeAttr("style");
	elements.spriteContainer.addClass("active");
	elements.intro.slideUp();
};

sprite.loadimage = function(src, file) {
	var img = document.createElement("img");

	img.onload = function() {
		var canvas = document.createElement("canvas"),
	    	ctx = canvas.getContext('2d');

	    canvas.width = img.width;
	    canvas.height = img.height;
	    ctx.drawImage(img, 0, 0);

	    elements.addedFiles.append(templateHelpers.loadedImage(canvas, file));

	    $(img).remove();

	    delay(sprite.sortthumbnails, 100);
	    delay(sprite.mergefiles, 100);
	};

	sprite.shrinkdropbox();
	img.src = src;
	elements.imageload.append(img);
};

sprite.fileReaderOpts = {
	dragClass: 'drag',
	on: {
		load: function(e, file) {
			sprite.loadimage(e.target.result, file);
		},
		loadstart: function(e, file) {
			loadingfiles++;
		},
		loadend: function(e, file) {
			loadingfiles--;
		},
		beforestart: function(file) {

			var cantLoad = !settings.canImportTiff && file.type == 'image/tiff';
			if (cantLoad) {
				alert("Your browser does not support loading files of type: " + file.type);
			}

			if (!file.type.match(new RegExp("image/*")) || cantLoad) {
				elements.fileWarnings.append($.tmpl( "fileNotImage", file ));
				return false;
			}
			if (file.size > settings.maxImageSize) {
				elements.fileWarnings.append($.tmpl( "fileTooBig", file ));
				return false;
			}
		},
		progress: function(e) {
			//log("progress", e)
		},
		error: function(e) {
			elements.fileWarnings.append($.tmpl( "fileLoadError", e ));
		},
		skip: function(file) {

		},
		groupstart: function(files, groupID) {
			sprite.shrinkdropbox();
			elements.progress.show();
		},
		groupend: function(files, groupID) {
			elements.progress.hide();
		}
	}

};

sprite.gen = {
	rulebackground: function(url, width, height) {
		var backgroundAttr = "background: url('"+url+"') no-repeat top left; ",
			widthAttr = (width) ? 'width: ' + width + 'px; ' : '',
			heightAttr = (height) ? 'height: ' + height + 'px; ' : '';
		return ' { ' + backgroundAttr + widthAttr + heightAttr + ' } ';
	},
	demoelement: function(classname) {
		return "<div class='" + classname + "'></div>";
	},
	ruleindividual: function(selector, posX, posY, width, height) {
		var posAttr = 'background-position: ' + posX + 'px ' + posY + 'px; ',
			widthAttr = (width) ? 'width: ' + width + 'px; ' : '',
			heightAttr = (height) ? 'height: ' + height + 'px; ' : '';
		return selector + ' { ' + posAttr + widthAttr + heightAttr + ' } ';
	}
};

sprite.dimensionfrequency = function() {

	var heights = { }, widths = { };
	sprite.eachcanvas(function(canvas) {
		heights[canvas.height] = !heights[canvas.height] ? 1 : heights[canvas.height] + 1;
		widths[canvas.width] = !widths[canvas.width] ? 1 : widths[canvas.width] + 1;
	});

	var numberOfHeights = mostFrequentHeight = heightCount = 0;
	for (var h in heights) {
		numberOfHeights++;
		if (heightCount < heights[h]) {
			heightCount = heights[h];
			mostFrequentHeight = parseInt(h, 10);
		}
	}

	var numberOfWidths = mostFrequentWidth = widthCount = 0;
	for (var w in widths) {
		numberOfWidths++;
		if (widthCount < widths[w]) {
			widthCount = widths[w];
			mostFrequentWidth = parseInt(w, 10);
		}
	}

	return {
		mostFrequentWidth: mostFrequentWidth,
		mostFrequentHeight: mostFrequentHeight,
		numberOfWidths: numberOfWidths,
		numberOfHeights: numberOfHeights
	}
};

sprite.setrules = function() {
	var cssRules = [],
		htmlRules = [],
		cssprefix = $.trim(elements.cssPrefix.val()) + ' ',
		classprefix = $.trim(elements.classPrefix.val()),
		classsuffix = $.trim(elements.classSuffix.val()),
		spriteClassName = $.trim(elements.spriteClassName.val()) || 'sprite',
		mainSelector = $.trim(cssprefix + "." + spriteClassName),
		filenameMatch = $.trim(elements.filenameMatch.val()) || ".*",
		filenameMatchReg,
		filename = spriteClassName + '.' + sprite.getopts().exportAs,
		dimensionFrequency = sprite.dimensionfrequency(),
		defineDimensionsGlobally = (
			dimensionFrequency.numberOfWidths == 1 &&
			dimensionFrequency.numberOfHeights == 1
		);

	try { elements.filenameMatch.removeClass("error"); filenameMatchReg = new RegExp(filenameMatch) }
	catch (e) { elements.filenameMatch.addClass("error"); filenameMatchReg = new RegExp('.*'); }

	// Each canvas needs its own rule
	sprite.eachcanvas(function(canvas) {
		var matchedArr = filenameMatchReg.exec(canvas.fileName),
			matchedFilename = matchedArr ? matchedArr[matchedArr.length-1] : canvas.fileName,
			canvasClassName = $.trim(classprefix + matchedFilename + classsuffix),
			canvasSelector = $.trim(mainSelector + '.' + canvasClassName);
			width = defineDimensionsGlobally ? false : canvas.width,
			height = defineDimensionsGlobally ? false : canvas.height;

		cssRules.push(sprite.gen.ruleindividual(canvasSelector, canvas.storeX, canvas.storeY, width, height));
		htmlRules.push(sprite.gen.demoelement(spriteClassName + ' ' + canvasClassName));
	});


	var outputWidth = defineDimensionsGlobally ? dimensionFrequency.mostFrequentWidth : false,
		outputHeight = defineDimensionsGlobally ? dimensionFrequency.mostFrequentHeight : false,
		outputRule = mainSelector + sprite.gen.rulebackground(filename, outputWidth, outputHeight) + "\n",
		outputCss = outputRule + cssRules.join('\n'),
		outputHtml = htmlRules.join('\n'),
		demoRule = mainSelector + sprite.gen.rulebackground(resultBase64, outputWidth, outputHeight) + "\n",
		demoCss = demoRule + cssRules.join('\n'),
		demoStyleTag = "<style type='text/css'>" + demoCss + "</style>";

	elements.exportHtml.val(outputHtml).attr('rows', htmlRules.length);
	elements.exportCss.val(outputCss).attr('rows', cssRules.length + 1);
	elements.preview.contents().find("body").html(demoStyleTag + outputHtml);
};

sprite.sortthumbnails = function() {
	elements.addedFiles.sortable({
		update: function() {
			sprite.mergefiles();
		}
	});
};

sprite.getopts = function() {
	var direction = elements.optionDirection.filter(":checked").val();
	return {
		spacing: parseInt(elements.optionOffset.val(), 10) || 0,
		direction: direction,
		exportAs: elements.optionExport.filter(":checked").val(),
		vertical: (direction == "vertical"),
		horizontal: (direction == "horizontal"),
		diagonal: (direction == "diagonal"),
		packed: (direction === "packed")
	}
};

sprite.getcanvases = function() {
	return elements.addedFiles.children().map(function(i, el) {
		return $(this).find("canvas")[0];
	});
};

sprite.eachcanvas = function(cb) {
	var canvases = sprite.getcanvases();
	for (var i = 0, len = canvases.length; i < len; i++) {
		cb(canvases[i].originalCanvas, i, (i == (len - 1)));
	}
};

sprite.mergefiles = function() {

	var opts = sprite.getopts(),
		len = sprite.getcanvases().length,
		totalSpacing = len * opts.offset,
		isVertical = opts.vertical,
		isHorizontal = opts.horizontal,
		isDiagonal = opts.diagonal,
		isPacked = opts.packed,
		totalWidth = 0,
		totalHeight = 0,
		resultContext = resultCanvas.getContext("2d");

	// Generate final canvas size and locations

	if (isPacked) {
		var canvases = sprite.getcanvases().map(function(idx, c) {
			return {
				w : c.originalCanvas.width,
				h : c.originalCanvas.height,
				canvas : c.originalCanvas,
				idx : idx
			};
		});

		canvases = _.sortBy(canvases, function(c) { 
			return -c.w * c.h;
		});

		var packer = new GrowingPacker();
		packer.fit(canvases);

		var i = 0;
		sprite.eachcanvas(function(c) {
			var obj = _.find(canvases, function(o) { return o.idx === i });
			c.storeX = obj.fit.x;
			c.storeY = obj.fit.y;
			i++;
		})

		totalWidth = resultCanvas.width = packer.root.w;
		totalHeight = resultCanvas.height = packer.root.h;
	}
	else {
		sprite.eachcanvas(function(canvas, i, islast) {

			var spacing = islast ? 0 : opts.spacing;
			canvas.storeX = canvas.storeY = 0;

			if (isDiagonal) {

				canvas.storeX = totalWidth;
				canvas.storeY = totalHeight;

				totalWidth += canvas.width + spacing;
				totalHeight += canvas.height + spacing;

			}
			else if (isVertical) {

				canvas.storeY = totalHeight;

				totalWidth = Math.max(canvas.width, totalWidth);
				totalHeight += canvas.height + spacing;

			}
			else if (isHorizontal) {

				canvas.storeX = totalWidth;

				totalHeight = Math.max(canvas.height, totalHeight);
				totalWidth += canvas.width + spacing;

			}
		});

		resultCanvas.width = totalWidth
		resultCanvas.height = totalHeight;
	}

	sprite.eachcanvas(function(canvas) {
		if (isDiagonal) {
			// need to set the reset the storeX now since we want it opposite
			// (starting at top right instead of top left)
			canvas.storeX = totalWidth - canvas.storeX - canvas.width;
		}

		resultContext.drawImage(canvas, canvas.storeX, canvas.storeY);

		// Need to be inverted now for background-position
		canvas.storeX = -canvas.storeX;
		canvas.storeY = -canvas.storeY;
	});
	

	if (totalWidth != 0) {
		resultBase64 = resultCanvas.toDataURL("image/" + opts.exportAs);
		elements.result.html("<img src='"+resultBase64+"'>");
		elements.exportImageNewWindow.removeClass('disabled');
		elements.exportBase64.removeClass('disabled');
		elements.exportBase64.attr("data-clipboard-text", resultBase64);
	}
	else {
		elements.result.html("");
		elements.exportImageNewWindow.addClass('disabled');
	}
	sprite.setrules();
};

sprite.init = function() {

	for (var i in sprite.elements) {
		sprite.elements[i] = $(sprite.elements[i]);
	}
	for (var i in templates) {
		$.template(i, templates[i]);
	}

	if (!settings.enabled) {
		// Show an error message, since the browser doesn't support necessary features
		// Using short circuit return to cut back on indentation for rest of app
		elements.app.hide();
		elements.noapp.show();
		return;
	}

	elements.fileInput.fileReaderJS(sprite.fileReaderOpts);
	$(document.body).fileReaderJS(sprite.fileReaderOpts);

	elements.exportCss.val("");
	elements.fileInputShortcut.click(function() { elements.fileInput.click(); return false; });
	elements.cssTemplateInputs.fitInputToWidth().keyup(sprite.setrules);
	elements.options.change(sprite.mergefiles).submit(false);
	elements.optionOffset.bind("keyup", function() {
		var val = $(this).val();
		if ($(this).data('old') != val) {
			$(this).data('old', val);
			sprite.mergefiles();
		}
	});
	elements.fileContainer.delegate(".remove", "click", function(e) {
		var isImage = $(this).closest("ul")[0] == elements.addedFiles[0];
		$(this).closest("li").remove();
		if (isImage) {
			sprite.mergefiles();
		}
	});

	var clip = new ZeroClipboard(elements.exportBase64[0]);

	clip.on('mouseover', function(c) {
		elements.exportBase64.tinytooltip({
			message: 'Copy image as base64',
			hover: false
		});

		elements.exportBase64.trigger('showtooltip');
	});

	clip.on('complete', function(c) {
		elements.exportBase64.trigger('destroy');
		elements.exportBase64.tinytooltip({
			message: 'Copied',
			hover: false
		});
		elements.exportBase64.trigger('showtooltip');
	});

	clip.on('mouseout', function(c) {
		elements.exportBase64.trigger('destroy');
	});

	elements.exportImageNewWindow.click(function() {
		if (!$(this).hasClass("disabled")) {
			window.open(resultBase64);
		}
		return false;
	});

	elements.fileSamples.click(function() {
		for (var i = 0; i < settings.sampleImages.length; i++) {
			sprite.loadimage(settings.sampleImages[i].src, settings.sampleImages[i]);
		}
		return false;
	});

	if (!settings.canExportGif) {
		// Firefox doesn't allow exporting as gif yet.  Chrome's gif export is pretty bad
		elements.optionExport.filter("[value=gif]").attr("disabled", "disabled").closest("label").attr("title", "Your browser does not support exporting to gif");
	}

	if ($.browser.mozilla) {
		// Firefox doesn't like clicking a link to file input, so just show the real thing
		elements.fileInput.removeClass('offscreen').before(elements.fileInputShortcut.text() + ":&nbsp;");
		elements.fileInputShortcut.hide();
	}

	fitDropboxToScreen();
	$(window).resize(fitDropboxToScreen);
	$("#initialload").remove();
	elements.dropbox.find("ul").removeClass("hide");
};


// ==============
// Utilities
// ==============

function fitDropboxToScreen() {
	if (elements.dropbox.hasClass("full")) {
		var height = Math.max(200, $(window).height() - elements.dropbox.offset().top - 60);
		elements.dropbox.height(height);
	}
}



})(window);
