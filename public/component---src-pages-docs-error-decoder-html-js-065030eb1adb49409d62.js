(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1Zsq":function(e,t,n){"use strict";(function(e){n("91GP");var r=n("VbXa"),i=n.n(r),a=n("aAma"),o=n("q1tI"),c=n("C9Pi"),s=n("zDcZ"),l=n("S9yB"),u=function(t){function n(e){var n;return(n=t.call(this,e)||this)._openNavMenu=function(){n.setState({open:!n.state.open})},n._closeNavMenu=function(){n.setState({open:!1})},n.state={open:!1},n}return i()(n,t),n.prototype.render=function(){var t,n,r,i,o=this.state.open,u={top:0,left:0,bottom:0,right:0,position:"fixed",backgroundColor:s.a.white,zIndex:2,height:"100vh",overflowY:"auto",WebkitOverflowScrolling:"touch",pointerEvents:o?"auto":"none"},d=o?8:-4,m=o?1:0,f=o?0:40;return e.createElement("div",null,e.createElement("div",{style:{opacity:m,transition:"opacity 0.5s ease"},css:(t={},t[s.c.lessThan("small")]=u,t[s.c.greaterThan("medium")]={marginRight:-999,paddingRight:999,backgroundColor:"#f7f7f7"},t[s.c.between("medium","sidebarFixed",!0)]={position:"fixed",zIndex:2,height:"100%"},t[s.c.greaterThan("small")]={position:"fixed",zIndex:2,height:"calc(100vh - 60px)",overflowY:"auto",WebkitOverflowScrolling:"touch",marginRight:-999,paddingRight:999,backgroundColor:"#f7f7f7",opacity:"1 !important"},t[s.c.size("small")]={height:"calc(100vh - 40px)"},t[s.c.between("medium","large")]={height:"calc(100vh - 50px)"},t[s.c.greaterThan("sidebarFixed")]={borderLeft:"1px solid #ececec"},t)},e.createElement("div",{style:{transform:"translate(0px, "+f+"px)",transition:"transform 0.5s ease"},css:(n={marginTop:60},n[s.c.size("xsmall")]={marginTop:40},n[s.c.between("small","medium")]={marginTop:0},n[s.c.between("medium","large")]={marginTop:50},n[s.c.greaterThan("small")]={transform:"none !important"},n)},e.createElement(c.a,Object.assign({closeParentMenu:this._closeNavMenu},this.props)))),e.createElement("div",{css:(r={backgroundColor:s.a.darker,bottom:44,color:s.a.brand,display:"none",cursor:"pointer",position:"fixed",right:20,zIndex:3,borderRadius:"50%",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 0 20px rgba(0, 0, 0, 0.3)"},r[s.c.lessThan("small")]={display:"inline-block"},r),onClick:this._openNavMenu,role:"button",tabIndex:0},e.createElement(a.a,null,e.createElement("div",{css:(i={display:"flex",flexDirection:"row",alignItems:"center",height:60},i[s.c.between("medium","large")]={height:50},i[s.c.lessThan("small")]={height:60,overflow:"hidden",alignItems:"flex-start"},i)},e.createElement("div",{css:{width:20,height:20,alignSelf:"center",display:"flex",flexDirection:"column",color:s.a.brand}},e.createElement(l.a,{size:15,cssProps:{transform:"translate(2px, "+d+"px) rotate(180deg)",transition:"transform 0.2s ease"}}),e.createElement(l.a,{size:15,cssProps:{transform:"translate(2px, "+(0-d)+"px)",transition:"transform 0.2s ease"}}))))))},n}(o.Component);t.a=u}).call(this,n("iMUK"))},"3FW5":function(e,t,n){"use strict";n("KKXr"),n("Z2Ku"),n("L9s1");var r=n("m7xX");t.a=function(e,t){if(e.hash){if(t.href)return e.hash===function(e){void 0===e&&(e="");var t=e.indexOf("#");return t>=0?e.substr(t):""}(t.href)}else if(t.id.includes("html"))return e.pathname.includes(t.id);return e.pathname.split("/").slice(-1)[0]===Object(r.a)(t.id)}},"7ihd":function(e,t,n){"use strict";(function(e){n("91GP");var r=n("6HPj"),i=(n("q1tI"),n("zDcZ"));t.a=function(t){var n,a=t.title;return e.createElement(r.a,{type:"header",halign:"space-between",valign:"baseline"},e.createElement("h1",{css:Object.assign({color:i.a.dark,marginBottom:0,marginTop:40},i.b.header,(n={},n[i.c.size("medium")]={marginTop:60},n[i.c.greaterThan("large")]={marginTop:80},n))},a))}}).call(this,n("iMUK"))},"8E9e":function(e,t,n){"use strict";var r=n("1Zsq");t.a=r.a},C9Pi:function(e,t,n){"use strict";var r=n("pMlg");t.a=r.a},Dkiq:function(e,t,n){"use strict";var r=n("JdQi");t.a=r.a},El1w:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"pageQuery",(function(){return g}));var r=n("aAma"),i=n("Dkiq"),a=n("6HPj"),o=n("4cO6"),c=n.n(o),s=n("XGt2"),l=(n("q1tI"),n("Zttt")),u=n("8E9e"),d=n("Gjfi"),m=n("zDcZ"),f=n("QQGI"),h=n("UIfT"),p=n("xVeM"),g="2962012927";t.default=function(t){var n=t.data,o=t.location;return e.createElement(l.a,{location:o},e.createElement(a.a,{direction:"column",grow:"1",shrink:"0",halign:"stretch",css:{width:"100%",flex:"1 0 auto",position:"relative",zIndex:0}},e.createElement(r.a,null,e.createElement("div",{css:m.d.articleLayout.container},e.createElement(a.a,{type:"article",direction:"column",grow:"1",halign:"stretch",css:{minHeight:"calc(100vh - 40px)"}},e.createElement(s.a,{path:n.markdownRemark.fields.path,title:n.markdownRemark.frontmatter.title}),e.createElement(d.a,{title:"React - "+n.markdownRemark.frontmatter.title}),e.createElement("div",{css:m.d.articleLayout.content},e.createElement("div",{css:m.d.markdown,dangerouslySetInnerHTML:{__html:n.markdownRemark.html}}),e.createElement("div",{css:[m.d.markdown,{marginTop:30,"& code":{display:"block",marginTop:30,padding:"1rem",borderRadius:"0.5rem",backgroundColor:c()(m.a.error,.1),color:m.a.error}}]},e.createElement(i.a,{errorCodesString:n.errorCodesJson.internal.contentDigest,location:o})))),e.createElement("div",{css:m.d.articleLayout.sidebar},e.createElement(u.a,{createLink:f.c,defaultActiveSection:Object(h.a)(o.pathname,p.b),location:o,sectionList:p.b,title:n.markdownRemark.frontmatter.title}))))))}}.call(this,n("iMUK"))},"JH+7":function(e,t,n){"use strict";(function(e){n("91GP"),n("dRSK");var r=n("PJYZ"),i=n.n(r),a=n("VbXa"),o=n.n(a),c=n("q1tI"),s=n("fzju"),l=function(t){function n(e,n){var r;return(r=t.call(this,e,n)||this).state={activeItemId:"",itemTopOffsets:[]},r.calculateItemTopOffsets=r.calculateItemTopOffsets.bind(i()(r)),r.handleResize=r.handleResize.bind(i()(r)),r.handleScroll=r.handleScroll.bind(i()(r)),r}o()(n,t);var r=n.prototype;return r.componentDidMount=function(){this.calculateItemTopOffsets(),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)},r.calculateItemTopOffsets=function(){var e=this.props.section,t=u(e.items);this.setState({itemTopOffsets:d(t)})},r.handleResize=function(){this.calculateItemTopOffsets(),this.handleScroll()},r.handleScroll=function(){var e=this.state.itemTopOffsets,t=e.find((function(t,n){var r=e[n+1];return r?window.scrollY>=t.offsetTop&&window.scrollY<r.offsetTop:window.scrollY>=t.offsetTop}));this.setState({activeItemId:t?t.id:""})},r.render=function(){var t=this.state.activeItemId;return e.createElement(s.a,Object.assign({isScrollSync:!0,activeItemId:t},this.props))},n}(c.Component),u=function(e){return e.map((function(e){var t=[];return e.subitems&&(t=e.subitems.map((function(e){return e.id}))),[e.id].concat(t)})).reduce((function(e,t){return e.concat(t)}))},d=function(e){return e.map((function(e){var t=document.getElementById(e);return t?{id:e,offsetTop:t.offsetTop}:null})).filter((function(e){return e}))};t.a=l}).call(this,n("iMUK"))},JdQi:function(e,t,n){"use strict";(function(e){n("OG14"),n("KKXr"),n("pIFo"),n("q1tI");function r(t){var n=t.code,r=t.msg;return n?e.createElement("div",null,e.createElement("p",null,e.createElement("b",null,"The full text of the error you just encountered is:")),e.createElement("code",null,e.createElement("b",null,r.split(/(https:\/\/fb\.me\/[a-z\-]+)/g).map((function(t,n){return n%2==1?e.createElement("a",{key:n,target:"_blank",rel:"noopener",href:t},t):t}))))):e.createElement("p",null,"When you encounter an error, you'll receive a link to this page for that specific error and we'll show you the full error text.")}t.a=function(t){var n=null,i="",a=JSON.parse(t.errorCodesString),o=function(e){var t=e.substring(1);if(!t)return null;for(var n="",r=[],i=t.split("&"),a=0;a<i.length;a++){var o=decodeURIComponent(i[a]);0===o.indexOf("invariant=")?n=o.slice(10):0===o.indexOf("args[")&&r.push(o.slice(o.indexOf("]=")+2))}return{args:r,code:n}}(t.location.search||"");return null!=o&&(i=function(e,t){var n=0;return e.replace(/%s/g,(function(){var e=t[n++];return void 0===e?"[missing argument]":e}))}(a[n=o.code],o.args)),e.createElement(r,{code:n,msg:i})}}).call(this,n("iMUK"))},NmYn:function(e,t,n){var r;n("Oyvg"),n("KKXr"),n("DNiP"),n("Tze0"),n("pIFo"),r=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),t=JSON.parse('{"vi":{"Đ":"D","đ":"d"}}');function n(n,r){if("string"!=typeof n)throw new Error("slugify: string argument expected");var i=t[(r="string"==typeof r?{replacement:r}:r||{}).locale]||{},a=r.replacement||"-",o=n.split("").reduce((function(t,n){return t+(i[n]||e[n]||n)}),"").replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"").trim().replace(new RegExp("[\\s"+a+"]+","g"),a);return r.lower&&(o=o.toLowerCase()),r.strict&&(o=o.replace(new RegExp("[^a-zA-Z0-9"+a+"]","g"),"")),o}return n.extend=function(t){for(var n in t)e[n]=t[n]},n},e.exports=r(),e.exports.default=r()},QQGI:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return d}));var r,i=n("Wbzz"),a=(n("q1tI"),n("3Jrg")),o=n("m7xX"),c=n("zDcZ"),s=function(t){var n=t.isActive,r=t.item;t.section;return e.createElement(i.Link,{css:[h,n&&m],to:r.id},n&&e.createElement("span",{css:f}),r.title)},l=function(t){var n=t.isActive,r=t.item,i=t.section;return r.href?e.createElement("a",{css:[h],href:r.href,target:"_blank",rel:"noopener"},r.title,e.createElement(a.a,{cssProps:{verticalAlign:-2,display:"inline-block",marginLeft:5,color:c.a.subtle}})):u({isActive:n,item:r,section:i})},u=function(t){var n=t.isActive,r=t.item,a=t.section;return e.createElement(i.Link,{css:[h,n&&m],to:Object(o.a)(r.id,a.directory)},n&&e.createElement("span",{css:f}),r.title)},d=function(t){var n=t.isActive,r=t.item,a=t.onLinkClick;t.section;return e.createElement(i.Link,{css:[h,n&&m],onClick:a,to:r.href},n&&e.createElement("span",{css:f}),r.title)},m={fontWeight:700},f=((r={width:4,height:25,borderLeft:"4px solid "+c.a.brand,paddingLeft:16,position:"absolute",left:0,marginTop:-3})[c.c.greaterThan("largerSidebar")]={left:15},r),h={color:c.a.text,display:"inline-block",borderBottom:"1px solid transparent",transition:"border 0.2s ease",marginTop:5,"&:hover":{color:c.a.subtle}}}).call(this,n("iMUK"))},S9yB:function(e,t,n){"use strict";(function(e){n("q1tI");t.a=function(t){var n=t.size,r=void 0===n?10:n,i=t.cssProps,a=void 0===i?{}:i;return e.createElement("svg",{css:a,viewBox:"0 0 926.23699 573.74994",version:"1.1",x:"0px",y:"0px",width:r,height:r},e.createElement("g",{transform:"translate(904.92214,-879.1482)"},e.createElement("path",{d:"\n          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n          -174.68583 0.6895,0 26.281,25.03215 56.8701,\n          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n          -104.0616 -231.873,-231.248 z\n        ",fill:"currentColor"})))}}).call(this,n("iMUK"))},UIfT:function(e,t,n){"use strict";n("KKXr");var r=n("m7xX");t.a=function(e,t){var n,i=e.split("/").slice(-1)[0];return t.forEach((function(e){e.items.some((function(e){return i===Object(r.a)(e.id)||e.subitems&&e.subitems.some((function(e){return i===Object(r.a)(e.id)}))}))&&(n=e)})),n}},XGt2:function(e,t,n){"use strict";var r=n("7ihd");t.a=r.a},fzju:function(e,t,n){"use strict";(function(e){n("91GP"),n("pIFo");var r=n("VbXa"),i=n.n(r),a=n("q1tI"),o=n.n(a),c=n("zDcZ"),s=n("3FW5"),l=n("GR0Y"),u=n("S9yB"),d=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).state={uid:(""+Math.random()).replace(/\D/g,"")},e}return i()(n,t),n.prototype.render=function(){var t,n,r,i=this.props,a=i.activeItemId,o=i.createLink,d=i.isActive,m=i.isScrollSync,f=i.location,h=i.onLinkClick,p=i.onSectionTitleClick,g=i.section,v="section_"+this.state.uid;return e.createElement("div",null,e.createElement("button",{"aria-expanded":d,"aria-controls":v,css:{cursor:"pointer",backgroundColor:"transparent",border:0,marginTop:10},onClick:p},e.createElement(l.a,{cssProps:(t={},t[c.c.greaterThan("small")]={color:d?c.a.text:c.a.subtle,":hover":{color:c.a.text}},t)},g.title,e.createElement(u.a,{cssProps:(n={marginLeft:7,transform:d?"rotateX(180deg)":"rotateX(0deg)",transition:"transform 0.2s ease"},n[c.c.lessThan("small")]={display:"none"},n)}))),e.createElement("ul",{id:v,css:(r={fontFeatureSettings:"'tnum'",marginBottom:10},r[c.c.greaterThan("small")]={display:d?"block":"none"},r)},g.items.map((function(t,n){return e.createElement("li",{key:t.id,css:{marginTop:5}},o({isActive:m?a===t.id:Object(s.a)(f,t),item:g.isOrdered?Object.assign({},t,{title:n+1+". "+t.title}):t,location:f,onLinkClick:h,section:g}),t.subitems&&e.createElement("ul",{css:{marginLeft:20}},t.subitems.map((function(t){return e.createElement("li",{key:t.id},o({isActive:m?a===t.id:Object(s.a)(f,t),item:t,location:f,onLinkClick:h,section:g}))}))))}))))},n}(o.a.Component);t.a=d}).call(this,n("iMUK"))},m7xX:function(e,t,n){"use strict";var r=n("NmYn"),i=n.n(r);t.a=function(e,t){var n=i()(e)+".html";return t?"/"+t+"/"+n:n}},pMlg:function(e,t,n){"use strict";(function(e){var r=n("VbXa"),i=n.n(r),a=n("q1tI"),o=n("6HPj"),c=n("fzju"),s=n("JH+7"),l=n("zDcZ"),u=function(t){function n(e,n){var r;return(r=t.call(this,e,n)||this).state={activeSection:e.defaultActiveSection},r}i()(n,t);var r=n.prototype;return r.render=function(){var t,n=this,r=this.props,i=r.closeParentMenu,a=r.createLink,u=r.enableScrollSync,d=r.location,m=r.sectionList,f=this.state.activeSection,h=u?s.a:c.a;return e.createElement(o.a,{type:"nav",direction:"column",halign:"stretch",css:(t={width:"100%",paddingLeft:20,position:"relative"},t[l.c.greaterThan("largerSidebar")]={paddingLeft:40},t[l.c.lessThan("small")]={paddingBottom:100},t)},m.map((function(t,r){return e.createElement(h,{createLink:a,isActive:f===t||1===m.length,key:r,location:d,onLinkClick:i,onSectionTitleClick:function(){return n._toggleSection(t)},section:t})})))},r._toggleSection=function(e){this.setState((function(t){return{activeSection:t.activeSection===e?null:e}}))},n}(a.Component);t.a=u}).call(this,n("iMUK"))}}]);
//# sourceMappingURL=component---src-pages-docs-error-decoder-html-js-065030eb1adb49409d62.js.map