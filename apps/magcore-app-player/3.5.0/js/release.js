!function(e) {
    function t(i) {
        if(n[i])return n[i].exports;
        var a=n[i]= {
            exports: {}
            ,
            id: i, loaded: !1
        }
        ;
        return e[i].call(a.exports, a, a.exports, t),
        a.loaded=!0,
        a.exports
    }
    var n= {}
    ;
    return t.m=e,
    t.c=n,
    t.p="",
    t(0)
}

([function(e, t, n) {
    "use strict";
    var i=n(1);
    window.log=function(e, t) {}
    , n(13), i.once("load", function() {
        n(14).load( {
            name: core.environment.language||"en"
        }
        , function(e) {
            n(16);
            try {}
            catch(e) {}
            i.timeshift=core.plugins.timeshift||!1, i.pages= {
                main: n(20), clear: n(54), settings: n(58)
            }
            , i.route(i.pages.main), i.playerPanel.focus()
        }
        )
    }
    )
}

, function(e, t, n) {
    "use strict";
    var i=n(2);
    e.exports=i
}

, function(e, t, n) {
    "use strict";
    var i=n(3), a=n(7);
    window.core=window.parent.getCoreInstance(window, i), n(8), n(9), n(11)("sdk"), n(12), n(11)("app"), i.platform="mag", i.ready=function() {
        window.core.call("app:ready")
    }
    , i.exit=function() {
        i.events["exit"]&&i.emit("exit"), core.call("exit")
    }
    , a.load=function(e) {
        document.body.setAttribute("platform", i.platform), core.ready?i.events["load"]&&i.emit("load", {}
        ):core.once("load", function() {
            i.events[e.type]&&i.emit(e.type, e)
        }
        )
    }
    , Object.keys(a).forEach(function(e) {
        window.addEventListener(e, a[e])
    }
    ), e.exports=i
}

, function(e, t, n) {
    "use strict";
    function i(e, t) {
        return!(!e||e.active)&&(e.$node.classList.add("active"), e.active=!0, o.activePage=e, e.events["show"]&&e.emit("show", {
            page: e, data: t
        }
        ), !0)
    }
    function a(e) {
        return!(!e||!e.active)&&(e.$node.classList.remove("active"), e.active=!1, o.activePage=null, e.events["hide"]&&e.emit("hide", {
            page: e
        }
        ), !0)
    }
    var r=n(4), s=n(5).parse, o=new r;
    o.query=s(document.location.search.substring(1)), o.config=n(6), o.activePage=null, o.route=function(e, t) {
        var n=o.activePage;
        return!(!e||e.active)&&(a(o.activePage), i(e, t), this.events["route"]&&this.emit("route", {
            from: n, to: e
        }
        ), !0)
    }
    , e.exports=o
}

, function(e, t, n) {
    "use strict";
    function i() {
        this.events= {}
    }
    i.prototype= {
        addListener:function(e, t) {
            this.events[e]=this.events[e]||[], this.events[e].push(t)
        }
        , once:function(e, t) {
            var n=this;
            this.events[e]=this.events[e]||[], this.events[e].push(function i() {
                n.removeListener(e, i), t.apply(n, arguments)
            }
            )
        }
        , addListeners:function(e) {
            var t;
            for(t in e)e.hasOwnProperty(t)&&this.addListener(t, e[t])
        }
        , removeListener:function(e, t) {
            this.events[e]&&(this.events[e]=this.events[e].filter(function(e) {
                return e!==t
            }
            ), 0===this.events[e].length&&(this.events[e]=void 0))
        }
        , emit:function(e) {
            var t, n=this.events[e];
            if(n)for(t=0;
            t<n.length;
            t++)n[t].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }
    , i.prototype.constructor=i, e.exports=i
}

, function(e, t) {
    "use strict";
    e.exports= {
        parse:function(e) {
            var t= {}
            ;
            return e.split("&").forEach(function(e) {
                e=e.split("="), 2===e.length&&(t[e[0]]=decodeURIComponent(e[1]))
            }
            ), t
        }
        , stringify:function(e) {
            var t=[];
            return Object.keys(e).forEach(function(n) {
                t.push(n+"="+encodeURIComponent(e[n]))
            }
            ), t.join("&")
        }
    }
}

, function(e, t) {
    "use strict";
    e.exports= {
        debug: !1, preventMultiplePlayer: ["MAG275"], disableSoundOptions: ["emulator_stb"]
    }
}

, function(e, t, n) {
    "use strict";
    var i=n(3);
    e.exports= {
        DOMContentLoaded:function(e) {
            i.events["dom"]&&i.emit("dom", e)
        }
        , load:function(e) {
            i.events[e.type]&&i.emit(e.type, e)
        }
        , unload:function(e) {
            i.events[e.type]&&i.emit(e.type, e)
        }
        , error:function(e) {}
        , keydown:function(e) {
            var t, n=i.activePage, a= {
                code: e.keyCode, stop: !1
            }
            ;
            e.ctrlKey&&(a.code+="c"), e.altKey&&(a.code+="a"), e.shiftKey&&(a.code+="s"), t=n.activeComponent, t&&t!==n&&(t.events[e.type]&&t.emit(e.type, a, e), !a.stop&&t.propagate&&t.parent&&t.parent.events[e.type]&&t.parent.emit(e.type, a, e)), a.stop||(n.events[e.type]&&n.emit(e.type, a, e), e.stop||i.events[e.type]&&i.emit(e.type, a, e))
        }
        , keypress:function(e) {
            var t=i.activePage;
            t.activeComponent&&t.activeComponent!==t&&t.activeComponent.events[e.type]&&t.activeComponent.emit(e.type, e)
        }
        , contextmenu:function(e) {
            e.preventDefault()
        }
        , mousewheel:function(e) {
            var t=i.activePage;
            t.activeComponent&&t.activeComponent!==t&&t.activeComponent.events[e.type]&&t.activeComponent.emit(e.type, e), e.stop||t.events[e.type]&&t.emit(e.type, e)
        }
    }
}

, function(e, t) {
    "use strict";
    if(!document.documentElement.classList) {
        var n=Array.prototype, i=n.indexOf, a=n.slice, r=n.push, s=n.splice, o=n.join;
        window.DOMTokenList=function(e) {
            if(this._element=e, e.className!==this._classCache) {
                if(this._classCache=e.className, !this._classCache)return;
                var t, n=this._classCache.replace(/^\s+|\s+$/g, "").split(/\s+/);
                for(t=0;
                t<n.length;
                t++)r.call(this, n[t])
            }
        }
        , window.DOMTokenList.prototype= {
            add:function(e) {
                this.contains(e)||(r.call(this, e), this._element.className=a.call(this, 0).join(" "))
            }
            , contains:function(e) {
                return i.call(this, e)!==-1
            }
            , item:function(e) {
                return this[e]||null
            }
            , remove:function(e) {
                var t=i.call(this, e);
                t!==-1&&(s.call(this, t, 1), this._element.className=a.call(this, 0).join(" "))
            }
            , toString:function() {
                return o.call(this, " ")
            }
            , toggle:function(e) {
                return this.contains(e)?this.remove(e): this.add(e), this.contains(e)
            }
        }
        , Object.defineProperty(Element.prototype, "classList", {
            get:function() {
                return new window.DOMTokenList(this)
            }
        }
        )
    }
}

, function(e, t, n) {
    "use strict";
    var i=n(3), a=n(10);
    i.metrics=a[i.query.screenHeight]||a[screen.height]||a[720], i.metrics.availHeight=i.metrics.height-(i.metrics.availTop+i.metrics.availBottom), i.metrics.availWidth=i.metrics.width-(i.metrics.availLeft+i.metrics.availRight)
}

, function(e, t) {
    "use strict";
    e.exports= {
        480: {
            height: 480, width: 720, availTop: 24, availBottom: 24, availRight: 32, availLeft: 48
        }
        , 576: {
            height: 576, width: 720, availTop: 24, availBottom: 24, availRight: 26, availLeft: 54
        }
        , 720: {
            height: 720, width: 1280, availTop: 30, availBottom: 30, availRight: 40, availLeft: 40
        }
        , 1080: {
            height: 1080, width: 1920, availTop: 45, availBottom: 45, availRight: 60, availLeft: 60
        }
    }
}

, function(e, t, n) {
    "use strict";
    var i=n(3);
    e.exports=function(e) {
        var t=document.createElement("link");
        t.rel="stylesheet", t.href="css/release."+e+"."+i.metrics.height+".css", document.head.appendChild(t)
    }
}

, function(e, t, n) {
    "use strict";
    var i, a=n(3);
    i=document.createElement("link"), i.rel="stylesheet", i.href=window.core.theme.path+a.metrics.height+".css", document.head.appendChild(i), e.exports=i
}

, function(e, t, n) {
    "use strict";
    n(1).log=function(e) {
        n(6).debug
    }
}

, function(e, t, n) {
    "use strict";
    function i(e) {
        var t=new r(e);
        return window.gettext=window._=t.gettext, window.pgettext=t.pgettext, window.ngettext=t.ngettext, t
    }
    var a=n(4), r=n(15), s=new a;
    s.defaultLanguage="en", s.load=function(e, t) {
        var n;
        return e.ext=e.ext||"json", e.path=e.path||"lang", e.name===s.defaultLanguage?(i(), t(null), !1):(n=new XMLHttpRequest, n.onload=function() {
            var e;
            try {
                e=JSON.parse(n.responseText), i(e), t(null), s.events["load"]&&s.emit("load")
            }
            catch(e) {
                n.onerror(e)
            }
        }
        , n.ontimeout=n.onerror=function(e) {
            i(), t(e), s.events["error"]&&s.emit("error", e)
        }
        , n.open("GET", e.path+"/"+e.name+"."+e.ext, !0), n.send(null), !0)
    }
    , e.exports=s
}

, function(module, exports, __webpack_require__) {
    "use strict";
    function Gettext(config) {
        var data, meta;
        config=config|| {}
        , data=config.data|| {}
        , data[""]=data[""]|| {}
        , meta=config.meta, this.gettext=function(e) {
            return data[""][e]||e
        }
        , this.pgettext=function(e, t) {
            return data[e]&&data[e][t]||t
        }
        , this.ngettext=function(msgId, plural, value) {
            var n;
            return data&&meta?data[""][msgId][eval("n = "+value+"; "+meta.plural)]: 1===value?msgId: plural
        }
    }
    Gettext.prototype.constructor=Gettext, module.exports=Gettext
}

, function(e, t, n) {
    "use strict";
    var i, a=n(1);
    a.playerManager=n(17), a.audioManager=n(19), i= {
        platform: "MAG", playerCount: a.playerManager.list.length
    }
    , e.exports=i
}

, function(e, t, n) {
    "use strict";
    function i() {
        try {
            d.audioTracks=JSON.parse(p.GetAudioPIDsEx().replace(/pid: /g, '"pid":').replace(/lang: /g, '"lang":').replace(/type: /g, '"type":').replace(/title: /g, '"title":').replace(/'/g,'"').replace(/,""/g,""))}catch(e){d.audioTracks=[]}try{d.subtitlesTracks=JSON.parse(p.GetSubtitlePIDs().replace(/pid:/g,'"pid":').replace(/lang:/g,'"lang":').replace(/,""/g,""))}catch(e){d.subtitlesTracks=[]}try{d.metadataInfo=JSON.parse(p.GetMetadataInfo())}catch(e){d.metadataInfo=null}}function a(){try{d.videoInfo=JSON.parse(p.GetVideoInfo().replace(/frameRate:/g,'"frameRate":').replace(/pictureWidth:/g,'"width":').replace(/pictureHeight:/g,'"height":').replace(/hPAR:/g,'"hPAR":').replace(/vPAR:/g,'"vPAR":'))}catch(e){d.videoInfo=null}}var r,s,o,l,c,u,d={},p=window.parent.gSTB,h=n(18),m=0,f=!1,v=16777215,y="UTF-8",g="",b=0,T=20,P=0,I={height:screen.height,width:screen.width,x:0,y:0},w={height:0,save:!1,width:0,x:0,y:0},x=!0,k=!1,B=!1,S=!1,$=!0,C=!0,L=0,E={x:0,y:0,width:0,height:0},D=0,N=!1,z=!0,A={},M={};window.parent.stbPlayerManager?e.exports=window.parent.stbPlayerManager:(window.parent.stbEvent.addListener("media",function(e){switch(e.code){case 1:d.state=0,d.onPlayEnd&&d.onPlayEnd();break;case 2:i(),d.onTracksInfo&&d.onTracksInfo();break;case 4:d.state=2,d.onPlayStart&&d.onPlayStart();break;case 5:d.state=0,d.onPlayError&&d.onPlayError();break;case 6:d.onDualMono&&d.onDualMono();break;case 7:a(),d.onContentInfo&&d.onContentInfo();break;case 8:d.onTracksError&&d.onTracksError();break;case 9:d.onTracksUpdate&&d.onTracksUpdate();break;case 129:d.onRTPBreak&&d.onRTPBreak()}}),d={surface:{moveTop:function(){p.SetTopWin(1)},moveDown:function(){p.SetTopWin(0)}},clearStatistics:function(){this.statistics={continuityErrors:0,decodingErrors:0,rtpErrors:0}},audioTracks:[],subtitlesTracks:[],drawSubtitle:function(e,t,n){p.ShowSubtitle(t,n,e)},loadExternalSubtitles:p.LoadExternalSubtitles,state:0,HLSInfo:null,metadataInfo:null,videoInfo:null,setViewport:function(e,t){t=t||{x:0,y:0,width:screen.width,height:screen.height},p.SetViewportEx(e.width,e.height,e.x,e.y,t.width,t.height,t.x,t.y),I={width:e.width,height:e.height,x:e.x,y:e.y}},play:function(e){p.Play((e.solution||"auto")+" "+e.uri,e.proxy),d.state=1},stop:function(){p.Stop()},pause:function(){p.Pause(),d.state=3},resume:function(){p.Continue(),d.state=2},rotate:function(e){p.Rotate(e)},onPlayEnd:function(){},onTracksInfo:function(){},onContentInfo:function(){},onPlayStart:function(){},onPlayError:function(){},onTracksError:function(){},onDualMono:function(){},onTracksUpdate:function(){},onRTPBreak:function(){},onTimeShift:function(e,t){},teletextTracks:[],setTeletextViewport:function(e){p.setTeletextViewport(e.width,e.height,e.x,e.y),E={width:e.width||E.width,height:e.height||E.height,x:e.x||E.x,y:e.y||E.y}},teletextCommand:function(e){p.TeletextCommand(e)},defaultTeletextSubtitlesCharset:p.DefaultTtxSubCharset,forceTeletextSubtitlesCharset:p.ForceTtxSubCharset,timeShiftState:0,timeShiftStart:function(){},timeShiftStop:function(e,t,n){}},Object.defineProperties(d,{capabilities:{value:{audio:!0,autoFrameRate:!0,subtitles:!0,teletext:!0,video:!0}},statistics:{value:{continuityErrors:0,decodingErrors:0,rtpErrors:0}},mute:{get:function(){return p.GetMute()},set:function(e){p.SetMute(!!e)}},volume:{get:function(){return p.GetVolume()},set:function(e){p.SetVolume(+e)}},audioPID:{get:function(){return p.GetAudioPID()},set:function(e){p.SetAudioPID(e)}},dolbyDigitalAudioMode:{set:function(e){p.SetAudioOperationalMode(+e),m=+e},get:function(){return m}},enableSubtitles:{get:function(){return f},set:function(e){p.SetSubtitles(!!e),f=!!e}},subtitlesPID:{get:function(){return p.GetSubtitlePID()},set:function(e){p.SetSubtitlePID(e)}},subtitlesColor:{get:function(){return v},set:function(e){p.SetSubtitlesColor(e),v=e}},subtitlesEncoding:{get:function(){return y},set:function(e){p.SetSubtitlesEncoding(e),y=e}},subtitlesFont:{get:function(){return g},set:function(e){p.SetSubtitlesFont(e),g=e}},subtitlesOffset:{get:function(){return b},set:function(e){p.SetSubtitlesOffs(e),b=e}},subtitlesSize:{get:function(){return T},set:function(e){p.SetSubtitlesSize(+e),T=+e}},bufferLoad:{get:function(){return p.GetBufferLoad()}},duration:{get:function(){return p.GetMediaLen()}},durationMs:{get:function(){return p.GetMediaLenEx()}},position:{get:function(){return p.GetPosTime()},set:function(e){p.SetPosTime(e)}},positionMs:{get:function(){return p.GetPosTimeEx()},set:function(e){p.SetPosTimeEx(e)}},positionPercent:{get:function(){return p.GetPosPercent()},set:function(e){p.SetPosPercent(e)}},loop:{get:function(){return S},set:function(e){p.SetLoop(e)}},speed:{get:function(){return p.GetSpeed()},set:function(e){p.SetSpeed(e)}},aspectConversion:{get:function(){return P},set:function(e){var t="0x"+e+"0";p.SetAspect(t),P=e}},viewport:{get:function(){return I}},clip:{get:function(){return w}},fullscreen:{get:function(){return x},set:function(e){e===!0&&(p.SetPIG(1,0,0,0),x=!0,I={x:0,y:0,width:h.list[0].width,height:h.list[0].height})}},enableTeletext:{get:function(){return k},set:function(e){p.SetTeletext(e),k=e}},teletextVisible:{get:function(){return B},set:function(e){p.TeletextShow(e),B=e}},enablePopup:{get:function(){return $},set:function(e){e=!!e,e?p.SetVideoControl(0):p.SetVideoControl(1),$=e}},visible:{get:function(){return C},set:function(e){e=!!e,C=e,p.SetVideoState(e)}},teletextOpacity:{get:function(){return L},set:function(e){e=+e,e>=0&&e<=255&&(p.TeletextTransparency(e),L=e)}},teletextPID:{get:function(){return p.GetTeletextPID()},set:function(e){p.SetTeletextPID(e)}},teletextViewport:{get:function(){return E}},timeShiftFolder:{get:function(){return s},set:function(e){timeShift.SetTimeShiftFolder(e),s=e}},timeShiftMaxDuration:{get:function(){return D},set:function(e){timeShift.SetMaxDuration(e),D=e}},timeShiftSlidingMode:{get:function(){return N},set:function(e){e=!!e,timeShift.SetSlidingMode(e),N=e}},speeds:{get:function(){return[0,.5,.25,1,2,4,8,12,16,32,64]}},audioPrimaryLanguage:{get:function(){return o},set:function(e){p.SetAudioLangs(e,l),o=e}},audioSecondaryLanguage:{get:function(){return l},set:function(e){p.SetAudioLangs(o,e),l=e}},subtitlesPrimaryLanguage:{get:function(){return u},set:function(e){p.SetSubtitleLangs(e,c),u=e}},subtitlesSecondaryLanguage:{get:function(){return c},set:function(e){p.SetSubtitleLangs(u,e),c=e}}}),r={list:[d],reset:function(){},swap:function(e,t){},autoFrameRateSource:d,autoFrameRate:{fr24:!1,fr50:!1,fr60:!1},setAutoFrameRate:function(e){var t=(e.fr60?"1":"0")+(e.fr50?"1":"0")+(e.fr24?"1":"0");e=e||{},this.autoFrameRate.fr24=e.fr24||!1,this.autoFrameRate.fr50=e.fr24||!1,this.autoFrameRate.fr60=e.fr24||!1,p.SetAutoFrameRate(parseInt(t,2))},"3DConversionModeSource":d,multicastProxy:"",setMulticastProxy:function(e){p.SetMulticastProxyURL(e),this.multicastProxy=e,p.EnableMulticastProxy(!0)},resetMulticastProxy:function(){p.EnableMulticastProxy(!1)},activateCAS:function(){var e,t=["serverAddress","serverPort","companyName","opID","errorLevel","softDescrambling","iniFile"],n={};A.serverAddress&&p.SetCASParam(A.serverAddress,A.serverPort,A.companyName,A.opID,A.errorLevel),p.SetCASDescrambling(A.softDescrambling?1:0),A.iniFile&&p.LoadCASIniFile(A.iniFile);for(e in A)t.indexOf(e)<0&&(n[e]=A[e]);Object.keys(n).forEach(function(e){p.SetAdditionalCasParam(e,n[e])}),p.SetCASType(A.type)},setCASParams:function(e){var t;e=e||{};for(t in e)A[t]=e[t]},activateWebCAS:function(){p.SetWebCASLogging(M.logging),p.SetupWebCAS(M.serverAddress,M.companyName)},setWebCASParams:function(e){e=e||{},M.serverAddress=e.serverAddress,M.companyName=e.companyName,M.logging=e.logging},RTSP:{endByAnnounce:!1,endByGetParameter:!1,endByRTP:!1,endByTimeout:!1,keepAlive:!0,type:0,useUDP:!1},setRTSP:function(e){var t,n;e=e||{},n=(e.useUDP?"1":"0")+(e.endByRTP?"1":"0")+(e.endByTimeout?"1":"0")+(e.endByGetParameter?"1":"0")+(e.endByAnnounce?"1":"0")+(e.keepAlive?"1":"0"),n=parseInt(n,2),t=e.type||0,p.SetupRTSP(t,n)},setBufferSize:p.SetBufferSize},Object.defineProperties(r,{"3DConversionMode":{get:function(){return p.Get3DConversionMode()},set:function(e){p.Set3DConversionMode(e)}},checkSSLCertificate:{get:function(){return z},set:function(e){e=!!e,p.SetCheckSSLCertificate(e?1:0),z=e}}}),e.exports=r)},function(e,t){"use strict";var n,i,a,r;if(window.parent.stbDisplayManager)e.exports=window.parent.stbDisplayManager;else{switch(n=window.parent.gSTB.RDir("vmode")){case"1080i":case"1080i60":case"1080p":case"1080p60":a=1920,r=1080}i={width:screen.width,height:screen.height},e.exports={list:[i]}}},function(e,t){"use strict";var n,i=window.parent.gSTB;window.parent.stbAudioManager?e.exports=window.parent.stbAudioManager:(n={list:[],add:function(e){},remove:function(e){},clear:function(){}},Object.defineProperties(n,{mute:{get:function(){return!!i.GetMute()},set:function(e){i.SetMute(!!e)}},volume:{get:function(){return i.GetVolume()},set:function(e){i.SetVolume(+e)}}}),e.exports={list:[n]})},function(e,t,n){"use strict";function i(){var e,t,n="",i=j.primary.position;Q.currentTime=j.primary.position,Q.timeshift.active?(t=j.primary.position,j.primary.position>j.primary.duration&&(t=0),i=t-Q.timeshift.duration):Q.tv.archive.active&&Q.tv.archive.active.realProgram&&(e=Q.tv.epg.array[Q.tv.archive.currentIndex],i=parseInt(+new Date/1e3-e.start,10)),D.playerPanel.progressBar.set(i),i=A.parseTime(i),D.playerPanel.$leftText.innerText=n+i.hour+": "+i.min+": "+i.sec}function a(){var e=parseInt(+new Date/1e3,10),t=e-Q.tv.epg.array[Q.tv.archive.currentIndex].start;D.playerPanel.bufferBar.set(t)}function r(){D.playerPanel.bufferBar.set(Q.timeshift.duration++)}function s(e,t){if(!e.data)return void t(!0,null);if(ne=!1,x(e),U.innerText="",clearTimeout(J.localTimeShiftAutoStart),clearInterval(J.serverTimeShiftRequest),Q.contentType=null,S={},Q.audioTracks.list=[],Q.subtitles.list=[],Q.capabilities={timeshift:!1},Q.audioTracks.current=null,D.currentPlayIntent=e,Q.tv.archive.active=!1,Q.tv.archive.realProgram=!1,Q.tv.archive.currentState=0,Q.timeshift.active=!1,X.timeshift.classList.remove("visible"),D.currentIntent=e,clearTimeout(J.serverEpgUpdateCurrentProgram),!e.context&&e.data.uri&&("content/video"===e.mime||document.body.classList.remove("transparent")),e.data.tvChannel?Q.capabilities.timeshift=e.data.tvChannel["local_timeshift"]:D.timeshift&&D.timeshift.checkAbility&&D.timeshift.ALLOW_MANUAL&&(Q.capabilities.timeshift=D.timeshift.checkAbility(e.data)),D.timeshift.enable&&D.playback.capabilities.timeshift&&(S.solution="extTimeShift",e.once("start",function(){D.timeshift.enable&&D.timeshift.delay&&(J.localTimeShiftAutoStart=setTimeout(g,D.timeshift.delay))})),"content/video"===D.currentPlayIntent.mime?(Q.contentType="content/video",document.body.classList.add("transparent")):"content/audio"===D.currentPlayIntent.mime&&(Q.contentType="content/audio",document.body.classList.remove("transparent")),e.context||(D.activePage!==E&&D.route(E),$.focus()),e.data.headless?e.context&&D.currentPlayIntent||(D.route(D.pages.clear),D.pages.clear.panel.focus()):D.route(D.pages.main),G.innerText=e.data.title||e.data.uri,e.once("start",function(){var t,n=j.primary.duration;"content/audio"===Q.contentType&&q.show(),n?(ee.forward=!(Q.capabilities.timeshift&&D.timeshift&&D.timeshift.enable&&!Q.timeshift.active),ee.rewind=!(Q.capabilities.timeshift&&D.timeshift&&D.timeshift.enable&&!Q.timeshift.active),ee.play=!0,D.playerPanel.initButtons(ee),D.playerPanel.buttons.focusIndex(3),Q.capabilities.timeshift||(t=j.primary.position,Q.currentTime=t,t=A.parseTime(t),D.playerPanel.$leftText.innerText=t.hour+": "+t.min+": "+t.sec),Q.rewind.isActive||Q.capabilities.timeshift||l()):(D.playerPanel.progressBar.hide(),Q.duration=null),e.data.tvChannel&&e.data.tvChannel.getEpg(!1,o)}),e.addListener("playback:stop",function(){H(),j.primary.stop()}),e.addListener("start",function(){var e,t=j.primary.duration;D.playback.tv.archive.active&&D.playback.tv.archive.realProgram&&Q.startProgressTimer(),q.active&&q.show(),t&&(e=j.primary.position,Q.currentTime=e,Q.retryOnError.currentInterval=0,e=A.parseTime(e),Q.capabilities.timeshift||(D.playerPanel.$leftText.innerText=e.hour+": "+e.min+": "+e.sec),!Q.rewind.isActive&&(Q.capabilities.timeshift&&Q.timeshift.active||!Q.capabilities.timeshift)&&(Q.duration=t,Q.startProgressTimer(),t=A.parseTime(t),D.playerPanel.$leftText.innerText=e.hour+": "+e.min+": "+e.sec))}),e.addListener("content:info",function(){j.primary.videoInfo&&j.primary.videoInfo.width?"content/audio"===e.mime?Q.contentType="content/audio":(document.body.classList.add("transparent"),Q.contentType="content/video"):Q.contentType||(document.body.classList.remove("transparent"),Q.contentType="content/audio"),"content/audio"!==Q.contentType||q.active||q.show()}),e.events.end&&e.events.end.length||e.once("end",function(){e.close()}),e.once("media: info",c),e.addListener("end",function(){Q.stopProgressTimer(),q.active&&q.hide()}),e.addListener("exit",k),e.addListener("content: dualMono",n(42).showDualMono),e.once("start",function(){B(te)}),e.addListener("error",function(){core.notify({title:_("Error playing content")+": "+(e.data.title||e.data.uri),icon:"alert",type:"error",timeout:3e3}),q.active&&q.hide()}),e.data.retryOnError&&e.addListener("error",function(){clearTimeout(Q.retryOnError.timeoutId),Q.retryOnError.timeoutId=setTimeout(function(){e.data.tvChannel?e.data.tvChannel.getUrl(function(n,i){!n&&i&&i.url&&(e.data.uri=i.url,j.intent(e,t,S))}):j.intent(e,t,S)},Q.retryOnError.intervals[Q.retryOnError.currentInterval]),Q.retryOnError.currentInterval<Q.retryOnError.intervals.length-1&&Q.retryOnError.currentInterval++}),e.data.uri&&(ee.rewind=!1,ee.forward=!1,ee.play=!1,ee.prev=e.events.prev&&e.events.prev.length&&e.events.prev[0],ee.next=e.events.next&&e.events.next.length&&e.events.next[0],ee.prevChannel=e.events.prevChannel&&e.events.prevChannel.length&&e.events.prevChannel[0],ee.nextChannel=e.events.nextChannel&&e.events.nextChannel.length&&e.events.nextChannel[0],D.playerPanel.initButtons(ee),D.playerPanel.buttons.$focusItem.data.disable))if(ee.play)D.playerPanel.buttons.focusItem(D.playerPanel.buttons.$links.playPause);else if(D.playerPanel.buttons.enabledCount){var i;for(i=0;i<D.playerPanel.buttons.data[0].length;i++)D.playerPanel.buttons.data[0][i].disable||D.playerPanel.buttons.focusItem(D.playerPanel.buttons.map[0][i])}e.data.modalMenu&&e.data.modalMenu.length?(Z.init(e.data.modalMenu),Z.record=!0):Z.record=!1,j.intent(e,t,S)}function o(e,t){function n(e){var t=!1;return e.end>a&&e.start<a&&(t=!0),t}var i,a=+new Date/1e3;!e&&t&&t.length&&(Q.tv.epg.array=t,i=z(Q.tv.epg.array,n),i>=0&&(Q.tv.epg.currentIndex=i,U.innerText=Q.tv.epg.array[Q.tv.epg.currentIndex].title,clearTimeout(J.serverEpgUpdateCurrentProgram),D.lastPrimaryIntent.data.tvChannel.archive&&(ee.play=!0,D.playerPanel.initButtons(ee),E.activeComponent!==D.playerPanel.buttons&&D.playerPanel.buttons.focusIndex(3)),J.serverEpgUpdateCurrentProgram=setTimeout(function e(){var t,i=z(Q.tv.epg.array,n),a=+new Date/1e3;i&&(Q.tv.epg.currentIndex=i,U.innerText=Q.tv.epg.array[Q.tv.epg.currentIndex].title,t=1e3*(a-Q.tv.epg.array[Q.tv.epg.currentIndex].end+15),J.serverEpgUpdateCurrentProgram=setTimeout(e,t))},1e3*(a-Q.tv.epg.array[Q.tv.epg.currentIndex].end+15))))}function l(){var e=j.primary.duration;e&&(D.playerPanel.progressBar.show(),D.playerPanel.progressBar.init({max:e}),Q.duration=e,Q.startProgressTimer(),e=A.parseTime(e),D.playerPanel.$rightText.innerText=e.hour+": "+e.min+": "+e.sec)}function c(e){var t,n,i,a=j.primary.audioPID;e.audioTracks&&e.audioTracks.length&&e.audioTracks.forEach(function(e){e.pid===a&&(t=e)}),Q.audioTracks.list=e.audioTracks,Q.audioTracks.current=t,K.codec.src="",K.lang.innerText="",t&&(K.codec.src=A.getCodecImageName(t.type),t.lang&&t.lang[0]&&(i=t.lang[0]),i&&"und"!==i?(i=M["1"][i]||M["2T"][i]||M["2B"][i]||[""],K.lang.innerText=i[0]):K.lang.innerText=""),clearTimeout(J.contentInfo),J.contentInfo=setTimeout(function(){K.codec.src="",K.lang.innerText=""},5e3),e.subtitlesTracks&&e.subtitlesTracks.length?(ie=F({subtitles:!0},D.lastPrimaryIntent),$.init({data:ie.data,size:ie.data.length,focusIndex:ie.focusIndex}),Q.subtitles.list=e.subtitlesTracks,Q.subtitles.currentPID=j.primary.subtitlesPID,j.primary.enableSubtitles&&(n=h(Q.subtitles.currentPID),Q.subtitles.current=n.track,Q.subtitles.index=n.index)):(Q.subtitles.current=null,Q.subtitles.currentPID=null,Q.subtitles.list=[])}function u(){D.currentPlayIntent.data.modalMenu&&D.currentPlayIntent.data.modalMenu.length&&!Z.visible&&(D.lastFocus=D.activePage.activeComponent||D.activePage,Z.show())}function d(e,t){var n,i,a=0,r=!1,s="",o=Q.duration;if(Q.duration||Q.tv.archive.active){for(Q.tv.archive.active&&Q.tv.archive.realProgram&&(o=D.playerPanel.bufferBar.value),Q.stopProgressTimer(),t=t||Q.rewind.timeoutDuration,Q.rewind.isActive||(D.activePage===D.pages.clear&&(D.route(D.pages.main),Q.rewind.remote=!0),Q.tv.archive.active&&Q.tv.archive.realProgram&&(Q.currentTime=D.playerPanel.progressBar.value),D.playerPanel.$progressbar.classList.add("active"),Q.rewind.isActive=!0,Q.rewind.startTime=Q.currentTime,Q.rewind.time=Q.currentTime),Q.rewind.direction===e?(Q.rewind.intervals.splice(0,1),Q.rewind.intervals[Q.rewind.intervals.length]=Q.rewind.intervals[Q.rewind.intervals.length-1]+10):(Q.rewind.intervals=[0,0,10],Q.rewind.direction=e),Q.rewind.remote&&(D.playerPanel.buttons.focus(),e?D.playerPanel.buttons.focusIndex(4):D.playerPanel.buttons.focusIndex(2)),i=0;i<Q.rewind.intervals.length;i++)a+=(e?1:-1)*Q.rewind.intervals[i];a>1800&&(a=1800),a<-1800&&(a=-1800),Q.rewind.time+=a,Q.rewind.time>=o&&(Q.rewind.time=o,r=!0),Q.rewind.time<0&&(Q.rewind.time=3),n=Q.rewind.time,D.playerPanel.progressBar.set(Q.rewind.time),Q.timeshift.active&&(n=j.primary.duration-Q.rewind.time,s="- "),n=A.parseTime(n),D.playerPanel.$leftText.innerText=s+n.hour+":"+n.min+":"+n.sec,clearTimeout(Q.rewind.timeout),Q.rewind.timeout=setTimeout(function(){function e(e){Q.rewind.isActive=!1,e?(D.lastPrimaryIntent.data.uri=Q.tv.archive.realProgramUrl,D.lastPrimaryIntent.data.position=Q.rewind.time,Q.tv.archive.currentState=Q.tv.archive.state.PLAYING_FILE,j.intent(D.lastPrimaryIntent)):(j.primary.position=Q.rewind.time,Q.capabilities.timeshift&&Q.timeshift.active&&3===j.primary.state?(Q.startProgressTimer(),j.primary.position=Q.rewind.time):r?(j.primary.stop(),D.lastPrimaryIntent.emit("end")):j.primary.position=Q.rewind.time),Q.currentTime=Q.rewind.time,D.playerPanel.$progressbar.classList.remove("active"),Q.rewind.mode=null,Q.rewind.intervals=[0,0,10],Q.rewind.remote&&(B(1),Q.rewind.remote=!1)}Q.tv.archive.active&&Q.tv.archive.realProgram&&Q.tv.archive.currentState===Q.tv.archive.state.PAUSED_GET_LINK?e(!0):e()},t),q.active&&q.pause()}}function p(){var e=j.primary.aspect;e<5?e++:e=0,j.primary.aspect=e,V({text:W.aspects[e],icon:"H"})}function h(e){var t,n;for(t=0;t<Q.subtitles.list.length;t++)if(n=Q.subtitles.list[t],n.pid===e)return{track:n,index:t};return null}function m(e){e=e||e,ee.play&&(D.activePage!==E&&(D.route(D.pages.main),D.playerPanel.buttons.focusIndex(2)),D.lastPrimaryIntent.data.tvChannel&&D.lastPrimaryIntent.data.tvChannel.archive&&Q.tv.epg.array.length&&!Q.timeshift.active?y():D.timeshift&&D.timeshift.enable&&Q.capabilities.timeshift?b():v(e))}function f(){j.primary.duration&&(H(),j.primary.stop(),document.body.classList.remove("transparent"),Q.stopProgressTimer(),D.playerPanel.$rightText.innerText="00:00:00",D.playerPanel.$leftText.innerText="00:00:00",D.playerPanel.progressBar.set(0),D.currentPlayIntent&&D.currentPlayIntent.emit("stop",{manual:!0}))}function v(e){e=e||{},e.forcePause?(D.playerPanel.setPlayButton(!0),j.primary.pause()):e.forceResume?(D.playerPanel.setPlayButton(!1),j.primary.resume(),"content/audio"===Q.contentType&&q.show()):2===j.primary.state?(D.playerPanel.setPlayButton(!0),j.primary.pause(),q.active&&q.pause()):3===j.primary.state&&(D.playerPanel.setPlayButton(!1),j.primary.resume(),"content/audio"===Q.contentType&&q.show())}function y(){var e;switch(Q.tv.archive.currentState){case Q.tv.archive.state.NOT_ACTIVE:if(clearTimeout(J.serverEpgUpdateCurrentProgram),Q.tv.archive.currentIndex=Q.tv.epg.currentIndex,e=Q.tv.epg.array[Q.tv.archive.currentIndex],!e)return;e.getLink(function(t,n){var i;n&&n.url&&!t?(j.primary.pause(),Q.tv.archive.active=!0,Q.tv.archive.realProgramUrl=n.url,Q.tv.archive.realProgram=!0,Q.tv.archive.currentState=Q.tv.archive.state.PAUSED_GET_LINK,D.playerPanel.progressBar.init({max:e.end-e.start,value:parseInt(+new Date/1e3-e.start,10)}),D.playerPanel.bufferBar.init({max:e.end-e.start,value:parseInt(+new Date/1e3-e.start,10)}),D.playerPanel.progressBar.show(),D.playerPanel.bufferBar.show(),Q.tv.epg.array[Q.tv.archive.currentIndex-1]&&Q.tv.epg.array[Q.tv.archive.currentIndex-1].archive&&(ee.prev=!0),ee.rewind=ee.forward=!0,D.playerPanel.initButtons(ee),D.playerPanel.setPlayButton(!0),J.serverTimeShiftBufferProgress=setInterval(a,1e3),i=A.parseTime(e.end-e.start),D.playerPanel.$rightText.innerText=i.hour+": "+i.min+": "+i.sec,i=A.parseTime(parseInt(+new Date/1e3-e.start,10)),D.playerPanel.$leftText.innerText=i.hour+": "+i.min+": "+i.sec):(D.playerPanel.setPlayButton(!1),Q.tv.archive.currentState=Q.tv.archive.state.PAUSED_GET_LINK_ERROR,core.notify({title:_("Can not get current epg link"),icon:"alert",type:"error",timeout:2e3}))});break;case Q.tv.archive.state.PAUSED_GET_LINK:D.playerPanel.setPlayButton(!1),D.lastPrimaryIntent.data.uri=Q.tv.archive.realProgramUrl,D.lastPrimaryIntent.data.position=D.playerPanel.progressBar.value-10,D.lastPrimaryIntent.data.solution="ffmpeg",j.intent(D.lastPrimaryIntent),Q.tv.archive.currentState=Q.tv.archive.state.PLAYING_FILE;break;case Q.tv.archive.state.PLAYING_FILE:v(),3===j.primary.state?Q.stopProgressTimer():Q.startProgressTimer()}}function g(e){var t;return e=e||{},D.timeshift.path?A.checkUsb(D.timeshift.mountUsb)?(Q.timeshift.active=!0,X.timeshift.classList.add("visible"),t=A.parseTime(D.timeshift.length),D.playerPanel.$rightText.innerText=t.hour+":"+t.min+":"+t.sec,Q.timeshift.duration=0,D.playerPanel.progressBar.init({max:parseInt(D.timeshift.length,10)}),D.playerPanel.progressBar.show(),D.playerPanel.bufferBar.init({max:parseInt(D.timeshift.length,10)}),D.playerPanel.bufferBar.show(),Q.startProgressTimer(),clearInterval(J.localTimeShiftBufferProgress),J.localTimeShiftBufferProgress=setInterval(r,1e3),ee.rewind=!0,ee.forward=!0,Q.duration=D.timeshift.length,D.playerPanel.initButtons(ee),!0):(core.notify({title:_("Mount usb device!"),icon:"alert",timeout:3e3}),!1):(e.manual&&core.notify({title:_("Mount usb device!"),icon:"alert",timeout:3e3}),!1)}function b(){Q.timeshift.active?v():g({manual:!0})&&(v(),j.primary.position=1)}function T(e){var t=+new Date/1e3;return e.start<t&&e.end>t}function P(e){e?!Q.tv.epg.array[Q.tv.archive.currentIndex+1]||!Q.tv.epg.array[Q.tv.archive.currentIndex+1].archive&&T(Q.tv.epg.array[Q.tv.archive.currentIndex+1])?D.lastPrimaryIntent.data.tvChannel.getUrl(function(e,t){t&&t.url&&!e?(U.innerText="",D.lastPrimaryIntent.data.uri=t.url,D.lastPrimaryIntent.data.solution=t.solution,D.lastPrimaryIntent.once("start",function(){D.lastPrimaryIntent.data.tvChannel.getEpg(!1,o)}),Q.tv.archive.active=!1,Q.tv.archive.currentState=0,ee.next=!1,ee.prev=!1,ee.rewind=!1,ee.forward=!1,D.playerPanel.initButtons(ee),j.intent(D.lastPrimaryIntent)):core.notify({title:"Error playing content: "+(D.lastPrimaryIntent.data.title||D.lastPrimaryIntent.data.uri),icon:"alert",type:"error",timeout:3e3})}):(Q.tv.archive.currentIndex++,Q.tv.epg.array[Q.tv.archive.currentIndex].getLink(function(e,t){t&&t.url&&!e?(U.innerText=Q.tv.epg.array[Q.tv.archive.currentIndex].title,D.lastPrimaryIntent.data.uri=t.url,D.lastPrimaryIntent.data.solution=t.solution,D.lastPrimaryIntent.once("start",l),j.intent(D.lastPrimaryIntent),Q.tv.archive.realProgram=!1,Q.tv.archive.currentState=Q.tv.archive.state.PLAYING_FILE):core.notify({title:_("Can not get current epg link"),icon:"alert",type:"error",timeout:2e3})})):(Q.tv.archive.currentIndex--,Q.tv.epg.array[Q.tv.archive.currentIndex].getLink(function(e,t){t&&t.url&&!e?(U.innerText=Q.tv.epg.array[Q.tv.archive.currentIndex].title,D.lastPrimaryIntent.data.uri=t.url,D.lastPrimaryIntent.data.solution="ffmpeg",D.lastPrimaryIntent.once("start",l),j.intent(D.lastPrimaryIntent),Q.tv.archive.realProgram=!1,Q.tv.archive.currentState=Q.tv.archive.state.PLAYING_FILE,Q.tv.epg.array[Q.tv.archive.currentIndex-1]&&Q.tv.epg.array[Q.tv.archive.currentIndex-1].archive?ee.prev=!0:ee.prev=!1,ee.next=!0,D.playerPanel.initButtons(ee)):core.notify({title:_("Can not get current epg link"),icon:"alert",type:"error",timeout:2e3})}))}function I(e){(!D.currentPlayIntent||D.currentPlayIntent.events.next||D.currentPlayIntent.events.prev||Q.tv.archive.active)&&(H(),Q.stopProgressTimer(),
 j.primary.stop(), x(), q.active&&q.hide(), document.body.classList.remove("transparent"), Q.tv.archive.active?P(e): (H(), j.primary.stop(), x(), e&&D.currentPlayIntent.events.next?D.currentPlayIntent.emit("next"): !e&&D.currentPlayIntent.events.prev&&D.currentPlayIntent.emit("prev")))
        }
        function w(e) {
            H(), Q.stopProgressTimer(), j.primary.stop(), x(), q.active&&q.hide(), document.body.classList.remove("transparent"), e&&D.currentPlayIntent.events.nextChannel?D.currentPlayIntent.emit("nextChannel"): !e&&D.currentPlayIntent.events.prevChannel&&D.currentPlayIntent.emit("prevChannel")
        }
        function x(e) {
            ie=F(null, e), clearTimeout(Q.rewind.timeout), Q.rewind.isActive=!1, $.init( {
                data: ie.data, size: ie.data.length, focusIndex: ie.focusIndex
            }
            ), Q.duration=null, Q.currentTime=0, Q.retryOnError.currentInterval=0, clearTimeout(Q.retryOnError.timeoutId), D.playerPanel.setPlayButton(!1), D.playerPanel.$rightText.innerText="", D.playerPanel.$leftText.innerText="", D.playerPanel.progressBar.set(0), D.playerPanel.bufferBar.set(0), D.playerPanel.progressBar.hide(), D.playerPanel.bufferBar.hide(), K.codec.src="", K.lang.innerText=""
        }
        function k() {
            Z.hide(), H(), j.primary.stop(), q.hide(), x(), Q.stopProgressTimer(), D.pipPlayer&&D.pipPlayer.state&&j.setAudioSource(D.pipPlayer)
        }
        function B(e) {
            e=e||5, clearTimeout(J.panelHide), J.panelHide=setTimeout(function() {
                D.route(D.pages.clear)
            }
            , 1e3*e)
        }
        var S, $, C="pMain", L=n(21), E=new L( {
            $node: document.getElementById(C)
        }
        ), D=n(1), N=n(24), z=n(26), A=n(27), M=window.langs=n(28), O=n(30), R=n(35), j=n(39), G=document.getElementById("contentTitle"), U=document.getElementById("contentProgramTitle"), V=n(42).displayInfo, Y=(document.getElementById("spinner"), n(43)), F=n(46), H=n(40), K= {
            codec: document.getElementById("codecInfo"), lang: document.getElementById("langInfo")
        }
        , X= {
            timeshift: document.getElementById("iconTS")
        }
        , q=n(45), W=n(47), Z=n(48), J= {
            progress: null, contentInfo: null, panelHide: null, serverTimeShiftRequest: null, serverTimeShiftBufferProgress: null, serverEpgUpdateCurrentProgram: null, localTimeShiftBufferProgress: null, localTimeShiftAutoStart: null
        }
        , Q= {
            duration:0, currentTime:0, contentType:null, capabilities: {
                timeshift: !1
            }
            , rewind: {
                isActive: !1, startTime: 0, time: 0, timeout: null, timeoutDuration: 800, intervals: [0, 0, 10], mode: null, remote: !1, remoteTimer: null
            }
            , subtitles: {
                index: null, currentIndex: null, currentPID: null, list: []
            }
            , audioTracks: {
                list: [], current: null
            }
            , retryOnError: {
                timeoutId: null, intervals: [5e3, 5e3, 1e4, 15e3, 3e4], currentInterval: 0
            }
            , startProgressTimer:function() {
                clearInterval(J.progress), J.progress=setInterval(i, 1e3)
            }
            , stopProgressTimer:function() {
                clearInterval(J.progress)
            }
            , tv: {
                epg: {
                    array: [], currentIndex: 0
                }
                , archive: {
                    state: {
                        NOT_ACTIVE: 0, PAUSED_NO_LINK: 1, PAUSED_GET_LINK: 2, PAUSED_GET_LINK_ERROR: 3, PLAYING_FILE: 4, PAUSE_FILE: 5
                    }
                    , active:!1, currentState:0, array:[], currentIndex:0, realProgram:!1, inited:!1, realProgramUrl:"", realProgramInited:!1, realProgramPaused:!1
                }
            }
            , timeshift: {
                active: !1, duration: 0
            }
        }
        , ee= {
            play: !1, rewind: !1, forward: !1, next: !1, prev: !1, nextChannel: !1, prevChannel: !1
        }
        , te=5, ne=!1, ie=F();
        D.timeshift&&n(53), D.playback=Q, E.add($=D.mainMenu=new O( {
            $node:document.getElementById("pMainMenu"), focusIndex:ie.focusIndex, size:ie.data.length, propagate:!1, data:ie.data, events: {
                keydown:function(e) {
                    O.prototype.defaultEvents.keydown.call(this, e), e.code===N.up&&D.playerPanel.buttons.enabledCount&&D.playerPanel.focus()
                }
            }
        }
        )), E.add(D.playerPanel=new R( {
            $node:document.getElementById("pMainPlayerPanel"), onPlay:m, onRewind:function(e) {
                e.direction===N.right?d(!0, 2500): e.direction===N.left&&d(!1, 2500)
            }
            , onPrevNext:function(e) {
                switch(e.direction) {
                    case N.right: I(!0);
                    break;
                    case N.left: I(!1)
                }
            }
            , onChannels:function(e) {
                switch(e.direction) {
                    case N.right: w(!0);
                    break;
                    case N.left: w(!1)
                }
            }
            , events: {
                keydown:function(e) {
                    e.code===N.down&&$.focus()
                }
            }
        }
        )), x(), D.playerPanel.initButtons(ee), core.addListener("intent", function(e, t) {
            switch(e.action) {
                case"play": s(e, t)
            }
        }
        ), E.addListener("keydown", function(e) {
            if(clearTimeout(J.panelHide), Q.rewind.remote)switch(e.code) {
                case N.right: d(!0);
                break;
                case N.left: d(!1)
            }
            else switch(e.code) {
                case N.back: D.route(D.pages.clear);
                break;
                case N.info: D.route(D.pages.clear)
            }
        }
        ), D.addListener("keydown", function(e) {
            switch(e.code) {
                case N.stop: f();
                break;
                case N.forward: d(!0);
                break;
                case N.rewind: d(!1);
                break;
                case N.playPause: case 32: m();
                break;
                case N.play:m( {
                    forceResume: !0
                }
                );
                break;
                case N.pause:m( {
                    forcePause: !0
                }
                );
                break;
                case N.channelNext:D.currentPlayIntent&&D.currentPlayIntent.events.nextChannel&&w(!0);
                break;
                case N.channelPrev:D.currentPlayIntent&&D.currentPlayIntent.events.prevChannel&&w(!1);
                break;
                case N.pageDown:I(!0);
                break;
                case N.pageUp:I(!1);
                break;
                case N.exit:break;
                case N.info:D.currentPlayIntent.events.onInfoPress&&D.currentPlayIntent.emit("onInfoPress");
                break;
                case N.frame:p();
                break;
                case N.refresh:D.pipIntent||Y();
                break;
                case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:D.currentPlayIntent.events.onNumberPress&&D.currentPlayIntent.emit("onNumberPress", {
                    number: String.fromCharCode(e.code)
                }
                );
                break;
                case N.menu:u()
            }
        }
        ), D.rewind=d, D.nextPrevContent=function(e) {
            D.currentPlayIntent.events.next||D.currentPlayIntent.events.prev?I(e): (D.currentPlayIntent.events.nextChannel||D.currentPlayIntent.events.prevChannel)&&w(e)
        }
        , D.addListener("close", function() {
            Q.stopProgressTimer(), clearTimeout(J.localTimeShiftAutoStart), q.active&&q.hide(), D.pipIntent||j.reset()
        }
        ), D.addListener("hide", function() {}
        ), core.addListener("hide", function(e) {
            e.source!==core.SOURCES.INTENT&&e.source!==core.SOURCES.SYSTEM&&(D.activePage===D.pages.settings&&D.route(D.pages.clear), D.lastPrimaryIntent&&D.lastPrimaryIntent.emit("hide"), k())
        }
        ), e.exports=E
    }
    , function(e, t, n) {
        "use strict";
        e.exports=n(22), e.exports.prototype.name="stb-component-page"
    }
    , function(e, t, n) {
        "use strict";
        function i(e) {
            e=e|| {}
            , this.active=!1, this.activeComponent=null, a.call(this, e), this.active=this.$node.classList.contains("active"), null===this.$node.parentNode&&document.body.appendChild(this.$node), this.page=this
        }
        var a=n(23);
        i.prototype=Object.create(a.prototype), i.prototype.constructor=i, i.prototype.name="spa-component-page", e.exports=i
    }
    , function(e, t, n) {
        "use strict";
        function i(e) {
            var t, n=this;
            if(e=e|| {}
            , this.visible=!0, this.focusable=!0, this.$node=null, this.$body=null, this.parent=null, this.children=[], this.propagate=!!e.propagate, r.call(this), this.$node=e.$node||document.createElement("div"), this.$body=e.$body||this.$node, this.$node.className=this.name+" "+(e.className||""), this.id=e.id||this.$node.id||"cid"+s++, e.parent&&e.parent.add(this), e.visible===!1&&this.hide(), e.focusable===!1&&(this.focusable=!1), this.defaultEvents) {
                e.events=e.events|| {}
                ;
                for(t in this.defaultEvents)e.events[t]=e.events[t]||this.defaultEvents[t]
            }
            e.events&&Object.keys(e.events).forEach(function(t) {
                n.addListener(t, e.events[t])
            }
            ), e.children&&this.add.apply(this, e.children), this.$node.addEventListener("click", function(e) {
                n.focus(), n.events["click"]&&n.emit("click", e), e.stopPropagation()
            }
            )
        }
        var a=n(3), r=n(4), s=0;
        i.prototype=Object.create(r.prototype), i.prototype.constructor=i, i.prototype.defaultEvents=null, i.prototype.add=function(e) {
            var t;
            for(t=0;
            t<arguments.length;
            t++)e=arguments[t], this.children.push(e), e.parent=this, e.$node&&null===e.$node.parentNode&&this.$body.appendChild(e.$node), this.events["add"]&&this.emit("add", {
                item: e
            }
            )
        }
        , i.prototype.remove=function() {
            this.parent&&(a.activePage.activeComponent===this&&(this.blur(), this.parent.focus()), this.parent.children.splice(this.parent.children.indexOf(this), 1)), this.children.forEach(function(e) {
                e.remove()
            }
            ), this.events= {}
            , this.$node.parentNode.removeChild(this.$node), this.events["remove"]&&this.emit("remove")
        }
        , i.prototype.focus=function(e) {
            var t=a.activePage, n=t.activeComponent;
            return!(!this.focusable||this===n)&&(n&&n.blur(), t.activeComponent=n=this, n.$node.classList.add("focus"), n.events["focus"]&&n.emit("focus", e), !0)
        }
        , i.prototype.blur=function() {
            var e=a.activePage, t=e.activeComponent;
            return this.$node.classList.remove("focus"), this===t&&(e.activeComponent=null, this.events["blur"]&&this.emit("blur"), !0)
        }
        , i.prototype.show=function(e) {
            return!!this.visible||(this.$node.classList.remove("hidden"), this.visible=!0, this.events["show"]&&this.emit("show", e), !0)
        }
        , i.prototype.hide=function() {
            return!this.visible||(this.$node.classList.add("hidden"), this.visible=!1, this.events["hide"]&&this.emit("hide"), !0)
        }
        , e.exports=i
    }
    , function(e, t, n) {
        "use strict";
        var i=n(25);
        i.back=i.backspace, i.channelNext=i.tab, i.channelPrev=i.tab+"s", i.ok=i.enter, i.exit=i.escape, i.volumeUp=107, i.volumeDown=109, i.f1="112c", i.f2="113c", i.f3="114c", i.f4="115c", i.refresh="116c", i.frame="117c", i.phone="119c", i.set="120c", i.tv="121c", i.menu="122c", i.app="123c", i.rewind="66a", i.forward="70a", i.audio="71a", i.standby="74a", i.keyboard="76a", i.usbMounted="80a", i.usbUnmounted="81a", i.playPause="82a", i.play=-1, i.pause=-1, i.stop="83a", i.power="85a", i.record="87a", i.info="89a", i.mute="192a", i.digit0=48, i.digit1=49, i.digit2=50, i.digit3=51, i.digit4=52, i.digit5=53, i.digit6=54, i.digit7=55, i.digit8=56, i.digit9=57, e.exports=i
    }
    , function(e, t) {
        "use strict";
        e.exports= {
            backspace: 8, tab: 9, enter: 13, escape: 27, pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40, insert: 45, del: 46
        }
    }
    , function(e, t) {
        "use strict";
        e.exports=function(e, t, n) {
            if("function"==typeof Array.prototype.findIndex)return e.findIndex(t, n);
            if("function"!=typeof t)throw new TypeError("predicate must be a function");
            var i=Object(e), a=i.length;
            if(0===a)return-1;
            for(var r=0;
            r<a;
            r++)if(t.call(n, i[r], r, i))return r;
            return-1
        }
    }
    , function(e, t, n) {
        "use strict";
        var i=n(1), a= {}
        , r=document.createElement("a"), s= {
            "480i": {
                width: 720, height: 480
            }
            , "480p": {
                width: 720, height: 480
            }
            , "576i": {
                width: 720, height: 576
            }
            , "576p": {
                width: 720, height: 576
            }
            , "720p": {
                width: 1280, height: 720
            }
            , "720p60": {
                width: 1280, height: 720
            }
            , "1080i": {
                width: 1920, height: 1080
            }
            , "1080i60": {
                width: 1920, height: 1080
            }
            , "1080p": {
                width: 1920, height: 1080
            }
            , "1080p60": {
                width: 1920, height: 1080
            }
            , "3840x2160p30": {
                width: 3840, height: 2160
            }
            , "3840x2160p25": {
                width: 3840, height: 2160
            }
            , "3840x2160p50": {
                width: 3840, height: 2160
            }
            , "3840x2160p60": {
                width: 3840, height: 2160
            }
        }
        ;
        a.parseTime=function(e) {
            var t, n, i;
            return e>=0?(t=Math.floor(e/3600), n=Math.floor((e-3600*t)/60), i=e-3600*t-60*n, t<10&&(t="0"+t), i<10&&(i="0"+i), n<10&&(n="0"+n)):(e=Math.abs(e), t=Math.floor(e/3600), n=Math.floor((e-3600*t)/60), i=e-3600*t-60*n, t<10&&(t="0"+t), i<10&&(i="0"+i), n<10&&(n="0"+n), t="-"+t), {
                hour: t, min: n, sec: i
            }
        }
        , a.checkUsb=function(e) {
            var t, e, n=JSON.parse(top.gSTB.GetStorageInfo("{}")).result||[];
            for(t=0;
            t<n.length;
            t++)if(e===n[t].mountPath&&0===n[t].isReadOnly)return!0;
            return!1
        }
        , a.getCodecImageName=function(e) {
            var t="./img/", n=480===i.metrics.height?576:i.metrics.height, a= {
                1: "mpeg2.png", 2: "mp3.png", 3: "dolby.png", 4: "dolby.png", 5: "pcm.png", 6: "ogg.png", 7: "dts.png", 8: "dolby.png"
            }
            ;
            return e&&a[e]?t+=n+"/codec/"+a[e]:t="", t
        }
        , a.getRealViewPort=function(e) {
            var t=top.gSTB.RDir("vmode"), n=s[t]|| {
                width: screen.width, height: screen.height
            }
            , i= {
                height: screen.height, width: screen.width
            }
            , a= {}
            ;
            return a.x=Math.round(e.x*n.width/i.width), a.width=Math.round(e.width*n.width/i.width), a.y=Math.round(e.y*n.height/i.height), a.height=Math.round(e.height*n.height/i.height), a
        }
        , a.parseUriString=function(e) {
            return r.href=e, {
                protocol: r.protocol, port: r.port, host: r.hostname
            }
        }
        , a.useSingleModeByDeviceModel=function() {
            var e=n(6).preventMultiplePlayer||[];
            return e.indexOf(core.device.model)>-1
        }
        , e.exports=a
    }
    , function(e, t, n) {
        "use strict";
        var i, a, r, s=n(29), o= {
            1: {}
            , "2T": {}
            , "2B": {}
        }
        ;
        for(i=0, a=s.length;
        i<a;
        i++)r=s[i], o["1"][r["1"]]=o["2T"][r["2T"]]=o["2B"][r["2B"]]=[r.name, r.local];
        s=null, e.exports=o
    }
    , function(e, t) {
        e.exports=[ {
            name: "Abkhaz", local: "Аҧсуа", 1: "ab", 2: "abk", "2T": "abk", "2B": "abk", 3: "abk"
        }
        , {
            name: "Afar", local: "Afaraf", 1: "aa", 2: "aar", "2T": "aar", "2B": "aar", 3: "aar"
        }
        , {
            name: "Afrikaans", local: "Afrikaans", 1: "af", 2: "afr", "2T": "afr", "2B": "afr", 3: "afr"
        }
        , {
            name: "Akan", local: "Akan", 1: "ak", 2: "aka", "2T": "aka", "2B": "aka", 3: "aka"
        }
        , {
            name: "Albanian", local: "Shqip", 1: "sq", 2: "sqi", "2T": "sqi", "2B": "alb", 3: "sqi"
        }
        , {
            name: "Amharic", local: "አማርኛ", 1: "am", 2: "amh", "2T": "amh", "2B": "amh", 3: "amh"
        }
        , {
            name: "Arabic", local: "العربية", 1: "ar", 2: "ara", "2T": "ara", "2B": "ara", 3: "ara"
        }
        , {
            name: "Aragonese", local: "Aragonés", 1: "an", 2: "arg", "2T": "arg", "2B": "arg", 3: "arg"
        }
        , {
            name: "Armenian", local: "Հայերեն", 1: "hy", 2: "hye", "2T": "hye", "2B": "arm", 3: "hye"
        }
        , {
            name: "Assamese", local: "অসমীয়া", 1: "as", 2: "asm", "2T": "asm", "2B": "asm", 3: "asm"
        }
        , {
            name: "Avaric", local: "Авар", 1: "av", 2: "ava", "2T": "ava", "2B": "ava", 3: "ava"
        }
        , {
            name: "Avestan", local: "avesta", 1: "ae", 2: "ave", "2T": "ave", "2B": "ave", 3: "ave"
        }
        , {
            name: "Aymara", local: "Aymar", 1: "ay", 2: "aym", "2T": "aym", "2B": "aym", 3: "aym"
        }
        , {
            name: "Azerbaijani", local: "Azərbaycanca", 1: "az", 2: "aze", "2T": "aze", "2B": "aze", 3: "aze"
        }
        , {
            name: "Bambara", local: "Bamanankan", 1: "bm", 2: "bam", "2T": "bam", "2B": "bam", 3: "bam"
        }
        , {
            name: "Bashkir", local: "Башҡортса", 1: "ba", 2: "bak", "2T": "bak", "2B": "bak", 3: "bak"
        }
        , {
            name: "Basque", local: "Euskara", 1: "eu", 2: "eus", "2T": "eus", "2B": "baq", 3: "eus"
        }
        , {
            name: "Belarusian", local: "Беларуская", 1: "be", 2: "bel", "2T": "bel", "2B": "bel", 3: "bel"
        }
        , {
            name: "Bengali", local: "বাংলা", 1: "bn", 2: "ben", "2T": "ben", "2B": "ben", 3: "ben"
        }
        , {
            name: "Bihari", local: "भोजपुरी", 1: "bh", 2: "bih", "2T": "bih", "2B": "bih", 3: "bih"
        }
        , {
            name: "Bislama", local: "Bislama", 1: "bi", 2: "bis", "2T": "bis", "2B": "bis", 3: "bis"
        }
        , {
            name: "Bosnian", local: "Bosanski", 1: "bs", 2: "bos", "2T": "bos", "2B": "bos", 3: "bos"
        }
        , {
            name: "Breton", local: "Brezhoneg", 1: "br", 2: "bre", "2T": "bre", "2B": "bre", 3: "bre"
        }
        , {
            name: "Bulgarian", local: "Български", 1: "bg", 2: "bul", "2T": "bul", "2B": "bul", 3: "bul"
        }
        , {
            name: "Burmese", local: "မြန်မာဘာသာ", 1: "my", 2: "mya", "2T": "mya", "2B": "bur", 3: "mya"
        }
        , {
            name: "Catalan", local: "Català", 1: "ca", 2: "cat", "2T": "cat", "2B": "cat", 3: "cat"
        }
        , {
            name: "Chamorro", local: "Chamoru", 1: "ch", 2: "cha", "2T": "cha", "2B": "cha", 3: "cha"
        }
        , {
            name: "Chechen", local: "Нохчийн", 1: "ce", 2: "che", "2T": "che", "2B": "che", 3: "che"
        }
        , {
            name: "Chichewa", local: "Chichewa", 1: "ny", 2: "nya", "2T": "nya", "2B": "nya", 3: "nya"
        }
        , {
            name: "Chinese", local: "中文", 1: "zh", 2: "zho", "2T": "zho", "2B": "chi", 3: "zho"
        }
        , {
            name: "Chuvash", local: "Чӑвашла", 1: "cv", 2: "chv", "2T": "chv", "2B": "chv", 3: "chv"
        }
        , {
            name: "Cornish", local: "Kernewek", 1: "kw", 2: "cor", "2T": "cor", "2B": "cor", 3: "cor"
        }
        , {
            name: "Corsican", local: "Corsu", 1: "co", 2: "cos", "2T": "cos", "2B": "cos", 3: "cos"
        }
        , {
            name: "Cree", local: "ᓀᐦᐃᔭᐍᐏᐣ", 1: "cr", 2: "cre", "2T": "cre", "2B": "cre", 3: "cre"
        }
        , {
            name: "Croatian", local: "Hrvatski", 1: "hr", 2: "hrv", "2T": "hrv", "2B": "hrv", 3: "hrv"
        }
        , {
            name: "Czech", local: "Čeština", 1: "cs", 2: "ces", "2T": "ces", "2B": "cze", 3: "ces"
        }
        , {
            name: "Danish", local: "Dansk", 1: "da", 2: "dan", "2T": "dan", "2B": "dan", 3: "dan"
        }
        , {
            name: "Divehi", local: "Divehi", 1: "dv", 2: "div", "2T": "div", "2B": "div", 3: "div"
        }
        , {
            name: "Dutch", local: "Nederlands", 1: "nl", 2: "nld", "2T": "nld", "2B": "dut", 3: "nld"
        }
        , {
            name: "Dzongkha", local: "རྫོང་ཁ", 1: "dz", 2: "dzo", "2T": "dzo", "2B": "dzo", 3: "dzo"
        }
        , {
            name: "English", local: "English", 1: "en", 2: "eng", "2T": "eng", "2B": "eng", 3: "eng"
        }, {
            name: "Brazilian Portuguese", local: "Porutuguês do Brasil", 1: "br", 2: "bra", "2T": "bra", "2B": "bra", 3: "bra"
        }
        , {
            name: "Esperanto", local: "Esperanto", 1: "eo", 2: "epo", "2T": "epo", "2B": "epo", 3: "epo"
        }
        , {
            name: "Estonian", local: "Eesti", 1: "et", 2: "est", "2T": "est", "2B": "est", 3: "est"
        }
        , {
            name: "Ewe", local: "Eʋegbe", 1: "ee", 2: "ewe", "2T": "ewe", "2B": "ewe", 3: "ewe"
        }
        , {
            name: "Faroese", local: "Føroyskt", 1: "fo", 2: "fao", "2T": "fao", "2B": "fao", 3: "fao"
        }
        , {
            name: "Fijian", local: "Na Vosa Vaka-Viti", 1: "fj", 2: "fij", "2T": "fij", "2B": "fij", 3: "fij"
        }
        , {
            name: "Finnish", local: "Suomi", 1: "fi", 2: "fin", "2T": "fin", "2B": "fin", 3: "fin"
        }
        , {
            name: "French", local: "Français", 1: "fr", 2: "fra", "2T": "fra", "2B": "fre", 3: "fra"
        }
        , {
            name: "Fula", local: "Fulfulde", 1: "ff", 2: "ful", "2T": "ful", "2B": "ful", 3: "ful"
        }
        , {
            name: "Galician", local: "Galego", 1: "gl", 2: "glg", "2T": "glg", "2B": "glg", 3: "glg"
        }
        , {
            name: "Georgian", local: "ქართული", 1: "ka", 2: "kat", "2T": "kat", "2B": "geo", 3: "kat"
        }
        , {
            name: "German", local: "Deutsch", 1: "de", 2: "deu", "2T": "deu", "2B": "ger", 3: "deu"
        }
        , {
            name: "Greek", local: "Ελληνικά", 1: "el", 2: "ell", "2T": "ell", "2B": "gre", 3: "ell"
        }
        , {
            name: "Guaraní", local: "Avañe'ẽ", 1: "gn", 2: "grn", "2T": "grn", "2B": "grn", 3: "grn"
        }
        , {
            name: "Gujarati", local: "ગુજરાતી", 1: "gu", 2: "guj", "2T": "guj", "2B": "guj", 3: "guj"
        }
        , {
            name: "Haitian", local: "Kreyòl Ayisyen", 1: "ht", 2: "hat", "2T": "hat", "2B": "hat", 3: "hat"
        }
        , {
            name: "Hausa", local: "هَوُسَ", 1: "ha", 2: "hau", "2T": "hau", "2B": "hau", 3: "hau"
        }
        , {
            name: "Hebrew", local: "עברית", 1: "he", 2: "heb", "2T": "heb", "2B": "heb", 3: "heb"
        }
        , {
            name: "Herero", local: "Otjiherero", 1: "hz", 2: "her", "2T": "her", "2B": "her", 3: "her"
        }
        , {
            name: "Hindi", local: "हिन्दी", 1: "hi", 2: "hin", "2T": "hin", "2B": "hin", 3: "hin"
        }
        , {
            name: "Hiri Motu", local: "Hiri Motu", 1: "ho", 2: "hmo", "2T": "hmo", "2B": "hmo", 3: "hmo"
        }
        , {
            name: "Hungarian", local: "Magyar", 1: "hu", 2: "hun", "2T": "hun", "2B": "hun", 3: "hun"
        }
        , {
            name: "Interlingua", local: "Interlingua", 1: "ia", 2: "ina", "2T": "ina", "2B": "ina", 3: "ina"
        }
        , {
            name: "Indonesian", local: "Bahasa Indonesia", 1: "id", 2: "ind", "2T": "ind", "2B": "ind", 3: "ind"
        }
        , {
            name: "Interlingue", local: "Interlingue", 1: "ie", 2: "ile", "2T": "ile", "2B": "ile", 3: "ile"
        }
        , {
            name: "Irish", local: "Gaeilge", 1: "ga", 2: "gle", "2T": "gle", "2B": "gle", 3: "gle"
        }
        , {
            name: "Igbo", local: "Igbo", 1: "ig", 2: "ibo", "2T": "ibo", "2B": "ibo", 3: "ibo"
        }
        , {
            name: "Inupiaq", local: "Iñupiak", 1: "ik", 2: "ipk", "2T": "ipk", "2B": "ipk", 3: "ipk"
        }
        , {
            name: "Ido", local: "Ido", 1: "io", 2: "ido", "2T": "ido", "2B": "ido", 3: "ido"
        }
        , {
            name: "Icelandic", local: "Íslenska", 1: "is", 2: "isl", "2T": "isl", "2B": "ice", 3: "isl"
        }
        , {
            name: "Italian", local: "Italiano", 1: "it", 2: "ita", "2T": "ita", "2B": "ita", 3: "ita"
        }
        , {
            name: "Inuktitut", local: "ᐃᓄᒃᑎᑐᑦ", 1: "iu", 2: "iku", "2T": "iku", "2B": "iku", 3: "iku"
        }
        , {
            name: "Japanese", local: "日本語", 1: "ja", 2: "jpn", "2T": "jpn", "2B": "jpn", 3: "jpn"
        }
        , {
            name: "Javanese", local: "Basa Jawa", 1: "jv", 2: "jav", "2T": "jav", "2B": "jav", 3: "jav"
        }
        , {
            name: "Kalaallisut", local: "Kalaallisut", 1: "kl", 2: "kal", "2T": "kal", "2B": "kal", 3: "kal"
        }
        , {
            name: "Kannada", local: "ಕನ್ನಡ", 1: "kn", 2: "kan", "2T": "kan", "2B": "kan", 3: "kan"
        }
        , {
            name: "Kanuri", local: "Kanuri", 1: "kr", 2: "kau", "2T": "kau", "2B": "kau", 3: "kau"
        }
        , {
            name: "Kashmiri", local: "كشميري", 1: "ks", 2: "kas", "2T": "kas", "2B": "kas", 3: "kas"
        }
        , {
            name: "Kazakh", local: "Қазақша", 1: "kk", 2: "kaz", "2T": "kaz", "2B": "kaz", 3: "kaz"
        }
        , {
            name: "Khmer", local: "ភាសាខ្មែរ", 1: "km", 2: "khm", "2T": "khm", "2B": "khm", 3: "khm"
        }
        , {
            name: "Kikuyu", local: "Gĩkũyũ", 1: "ki", 2: "kik", "2T": "kik", "2B": "kik", 3: "kik"
        }
        , {
            name: "Kinyarwanda", local: "Kinyarwanda", 1: "rw", 2: "kin", "2T": "kin", "2B": "kin", 3: "kin"
        }
        , {
            name: "Kyrgyz", local: "Кыргызча", 1: "ky", 2: "kir", "2T": "kir", "2B": "kir", 3: "kir"
        }
        , {
            name: "Komi", local: "Коми", 1: "kv", 2: "kom", "2T": "kom", "2B": "kom", 3: "kom"
        }
        , {
            name: "Kongo", local: "Kongo", 1: "kg", 2: "kon", "2T": "kon", "2B": "kon", 3: "kon"
        }
        , {
            name: "Korean", local: "한국어", 1: "ko", 2: "kor", "2T": "kor", "2B": "kor", 3: "kor"
        }
        , {
            name: "Kurdish", local: "Kurdî", 1: "ku", 2: "kur", "2T": "kur", "2B": "kur", 3: "kur"
        }
        , {
            name: "Kwanyama", local: "Kuanyama", 1: "kj", 2: "kua", "2T": "kua", "2B": "kua", 3: "kua"
        }
        , {
            name: "Latin", local: "Latina", 1: "la", 2: "lat", "2T": "lat", "2B": "lat", 3: "lat"
        }
        , {
            name: "Luxembourgish", local: "Lëtzebuergesch", 1: "lb", 2: "ltz", "2T": "ltz", "2B": "ltz", 3: "ltz"
        }
        , {
            name: "Ganda", local: "Luganda", 1: "lg", 2: "lug", "2T": "lug", "2B": "lug", 3: "lug"
        }
        , {
            name: "Limburgish", local: "Limburgs", 1: "li", 2: "lim", "2T": "lim", "2B": "lim", 3: "lim"
        }
        , {
            name: "Lingala", local: "Lingála", 1: "ln", 2: "lin", "2T": "lin", "2B": "lin", 3: "lin"
        }
        , {
            name: "Lao", local: "ພາສາລາວ", 1: "lo", 2: "lao", "2T": "lao", "2B": "lao", 3: "lao"
        }
        , {
            name: "Lithuanian", local: "Lietuvių", 1: "lt", 2: "lit", "2T": "lit", "2B": "lit", 3: "lit"
        }
        , {
            name: "Luba-Katanga", local: "Tshiluba", 1: "lu", 2: "lub", "2T": "lub", "2B": "lub", 3: "lub"
        }
        , {
            name: "Latvian", local: "Latviešu", 1: "lv", 2: "lav", "2T": "lav", "2B": "lav", 3: "lav"
        }
        , {
            name: "Manx", local: "Gaelg", 1: "gv", 2: "glv", "2T": "glv", "2B": "glv", 3: "glv"
        }
        , {
            name: "Macedonian", local: "Македонски", 1: "mk", 2: "mkd", "2T": "mkd", "2B": "mac", 3: "mkd"
        }
        , {
            name: "Malagasy", local: "Malagasy", 1: "mg", 2: "mlg", "2T": "mlg", "2B": "mlg", 3: "mlg"
        }
        , {
            name: "Malay", local: "Bahasa Melayu", 1: "ms", 2: "msa", "2T": "msa", "2B": "may", 3: "msa"
        }
        , {
            name: "Malayalam", local: "മലയാളം", 1: "ml", 2: "mal", "2T": "mal", "2B": "mal", 3: "mal"
        }
        , {
            name: "Maltese", local: "Malti", 1: "mt", 2: "mlt", "2T": "mlt", "2B": "mlt", 3: "mlt"
        }
        , {
            name: "Māori", local: "Māori", 1: "mi", 2: "mri", "2T": "mri", "2B": "mao", 3: "mri"
        }
        , {
            name: "Marathi", local: "मराठी", 1: "mr", 2: "mar", "2T": "mar", "2B": "mar", 3: "mar"
        }
        , {
            name: "Marshallese", local: "Kajin M̧ajeļ", 1: "mh", 2: "mah", "2T": "mah", "2B": "mah", 3: "mah"
        }
        , {
            name: "Mongolian", local: "Монгол", 1: "mn", 2: "mon", "2T": "mon", "2B": "mon", 3: "mon"
        }
        , {
            name: "Nauru", local: "Dorerin Naoero", 1: "na", 2: "nau", "2T": "nau", "2B": "nau", 3: "nau"
        }
        , {
            name: "Navajo", local: "Diné Bizaad", 1: "nv", 2: "nav", "2T": "nav", "2B": "nav", 3: "nav"
        }
        , {
            name: "Northern Ndebele", local: "isiNdebele", 1: "nd", 2: "nde", "2T": "nde", "2B": "nde", 3: "nde"
        }
        , {
            name: "Nepali", local: "नेपाली", 1: "ne", 2: "nep", "2T": "nep", "2B": "nep", 3: "nep"
        }
        , {
            name: "Ndonga", local: "Owambo", 1: "ng", 2: "ndo", "2T": "ndo", "2B": "ndo", 3: "ndo"
        }
        , {
            name: "Norwegian Bokmål", local: "Norsk (Bokmål)", 1: "nb", 2: "nob", "2T": "nob", "2B": "nob", 3: "nob"
        }
        , {
            name: "Norwegian Nynorsk", local: "Norsk (Nynorsk)", 1: "nn", 2: "nno", "2T": "nno", "2B": "nno", 3: "nno"
        }
        , {
            name: "Norwegian", local: "Norsk", 1: "no", 2: "nor", "2T": "nor", "2B": "nor", 3: "nor"
        }
        , {
            name: "Nuosu", local: "ꆈꌠ꒿ Nuosuhxop", 1: "ii", 2: "iii", "2T": "iii", "2B": "iii", 3: "iii"
        }
        , {
            name: "Southern Ndebele", local: "isiNdebele", 1: "nr", 2: "nbl", "2T": "nbl", "2B": "nbl", 3: "nbl"
        }
        , {
            name: "Occitan", local: "Occitan", 1: "oc", 2: "oci", "2T": "oci", "2B": "oci", 3: "oci"
        }
        , {
            name: "Ojibwe", local: "ᐊᓂᔑᓈᐯᒧᐎᓐ", 1: "oj", 2: "oji", "2T": "oji", "2B": "oji", 3: "oji"
        }
        , {
            name: "Old Church Slavonic", local: "Словѣ́ньскъ", 1: "cu", 2: "chu", "2T": "chu", "2B": "chu", 3: "chu"
        }
        , {
            name: "Oromo", local: "Afaan Oromoo", 1: "om", 2: "orm", "2T": "orm", "2B": "orm", 3: "orm"
        }
        , {
            name: "Oriya", local: "ଓଡି଼ଆ", 1: "or", 2: "ori", "2T": "ori", "2B": "ori", 3: "ori"
        }
        , {
            name: "Ossetian", local: "Ирон æвзаг", 1: "os", 2: "oss", "2T": "oss", "2B": "oss", 3: "oss"
        }
        , {
            name: "Panjabi", local: "ਪੰਜਾਬੀ", 1: "pa", 2: "pan", "2T": "pan", "2B": "pan", 3: "pan"
        }
        , {
            name: "Pāli", local: "पाऴि", 1: "pi", 2: "pli", "2T": "pli", "2B": "pli", 3: "pli"
        }
        , {
            name: "Persian", local: "فارسی", 1: "fa", 2: "fas", "2T": "fas", "2B": "per", 3: "fas"
        }
        , {
            name: "Polish", local: "Polski", 1: "pl", 2: "pol", "2T": "pol", "2B": "pol", 3: "pol"
        }
        , {
            name: "Pashto", local: "پښتو", 1: "ps", 2: "pus", "2T": "pus", "2B": "pus", 3: "pus"
        }
        , {
            name: "Portuguese", local: "Português", 1: "pt", 2: "por", "2T": "por", "2B": "por", 3: "por"
        }
        , {
            name: "Quechua", local: "Runa Simi", 1: "qu", 2: "que", "2T": "que", "2B": "que", 3: "que"
        }
        , {
            name: "Romansh", local: "Rumantsch", 1: "rm", 2: "roh", "2T": "roh", "2B": "roh", 3: "roh"
        }
        , {
            name: "Kirundi", local: "Kirundi", 1: "rn", 2: "run", "2T": "run", "2B": "run", 3: "run"
        }
        , {
            name: "Romanian", local: "Română", 1: "ro", 2: "ron", "2T": "ron", "2B": "rum", 3: "ron"
        }
        , {
            name: "Russian", local: "Русский", 1: "ru", 2: "rus", "2T": "rus", "2B": "rus", 3: "rus"
        }
        , {
            name: "Sanskrit", local: "संस्कृतम्", 1: "sa", 2: "san", "2T": "san", "2B": "san", 3: "san"
        }
        , {
            name: "Sardinian", local: "Sardu", 1: "sc", 2: "srd", "2T": "srd", "2B": "srd", 3: "srd"
        }
        , {
            name: "Sindhi", local: "سنڌي‎", 1: "sd", 2: "snd", "2T": "snd", "2B": "snd", 3: "snd"
        }
        , {
            name: "Northern Sami", local: "Sámegiella", 1: "se", 2: "sme", "2T": "sme", "2B": "sme", 3: "sme"
        }
        , {
            name: "Samoan", local: "Gagana Sāmoa", 1: "sm", 2: "smo", "2T": "smo", "2B": "smo", 3: "smo"
        }
        , {
            name: "Sango", local: "Sängö", 1: "sg", 2: "sag", "2T": "sag", "2B": "sag", 3: "sag"
        }
        , {
            name: "Serbian", local: "Српски", 1: "sr", 2: "srp", "2T": "srp", "2B": "srp", 3: "srp"
        }
        , {
            name: "Gaelic", local: "Gàidhlig", 1: "gd", 2: "gla", "2T": "gla", "2B": "gla", 3: "gla"
        }
        , {
            name: "Shona", local: "ChiShona", 1: "sn", 2: "sna", "2T": "sna", "2B": "sna", 3: "sna"
        }
        , {
            name: "Sinhala", local: "සිංහල", 1: "si", 2: "sin", "2T": "sin", "2B": "sin", 3: "sin"
        }
        , {
            name: "Slovak", local: "Slovenčina", 1: "sk", 2: "slk", "2T": "slk", "2B": "slo", 3: "slk"
        }
        , {
            name: "Slovene", local: "Slovenščina", 1: "sl", 2: "slv", "2T": "slv", "2B": "slv", 3: "slv"
        }
        , {
            name: "Somali", local: "Soomaaliga", 1: "so", 2: "som", "2T": "som", "2B": "som", 3: "som"
        }
        , {
            name: "Southern Sotho", local: "Sesotho", 1: "st", 2: "sot", "2T": "sot", "2B": "sot", 3: "sot"
        }
        , {
            name: "Spanish", local: "Español", 1: "es", 2: "spa", "2T": "spa", "2B": "spa", 3: "spa"
        }
        , {
            name: "Sundanese", local: "Basa Sunda", 1: "su", 2: "sun", "2T": "sun", "2B": "sun", 3: "sun"
        }
        , {
            name: "Swahili", local: "Kiswahili", 1: "sw", 2: "swa", "2T": "swa", "2B": "swa", 3: "swa"
        }
        , {
            name: "Swati", local: "SiSwati", 1: "ss", 2: "ssw", "2T": "ssw", "2B": "ssw", 3: "ssw"
        }
        , {
            name: "Swedish", local: "Svenska", 1: "sv", 2: "swe", "2T": "swe", "2B": "swe", 3: "swe"
        }
        , {
            name: "Tamil", local: "தமிழ்", 1: "ta", 2: "tam", "2T": "tam", "2B": "tam", 3: "tam"
        }
        , {
            name: "Telugu", local: "తెలుగు", 1: "te", 2: "tel", "2T": "tel", "2B": "tel", 3: "tel"
        }
        , {
            name: "Tajik", local: "Тоҷикӣ", 1: "tg", 2: "tgk", "2T": "tgk", "2B": "tgk", 3: "tgk"
        }
        , {
            name: "Thai", local: "ภาษาไทย", 1: "th", 2: "tha", "2T": "tha", "2B": "tha", 3: "tha"
        }
        , {
            name: "Tigrinya", local: "ትግርኛ", 1: "ti", 2: "tir", "2T": "tir", "2B": "tir", 3: "tir"
        }
        , {
            name: "Tibetan Standard", local: "བོད་ཡིག", 1: "bo", 2: "bod", "2T": "bod", "2B": "tib", 3: "bod"
        }
        , {
            name: "Turkmen", local: "Türkmençe", 1: "tk", 2: "tuk", "2T": "tuk", "2B": "tuk", 3: "tuk"
        }
        , {
            name: "Tagalog", local: "Tagalog", 1: "tl", 2: "tgl", "2T": "tgl", "2B": "tgl", 3: "tgl"
        }
        , {
            name: "Tswana", local: "Setswana", 1: "tn", 2: "tsn", "2T": "tsn", "2B": "tsn", 3: "tsn"
        }
        , {
            name: "Tonga", local: "faka Tonga", 1: "to", 2: "ton", "2T": "ton", "2B": "ton", 3: "ton"
        }
        , {
            name: "Turkish", local: "Türkçe", 1: "tr", 2: "tur", "2T": "tur", "2B": "tur", 3: "tur"
        }
        , {
            name: "Tsonga", local: "Xitsonga", 1: "ts", 2: "tso", "2T": "tso", "2B": "tso", 3: "tso"
        }
        , {
            name: "Tatar", local: "Татарча", 1: "tt", 2: "tat", "2T": "tat", "2B": "tat", 3: "tat"
        }
        , {
            name: "Twi", local: "Twi", 1: "tw", 2: "twi", "2T": "twi", "2B": "twi", 3: "twi"
        }
        , {
            name: "Tahitian", local: "Reo Mā’ohi", 1: "ty", 2: "tah", "2T": "tah", "2B": "tah", 3: "tah"
        }
        , {
            name: "Uyghur", local: "ئۇيغۇرچه", 1: "ug", 2: "uig", "2T": "uig", "2B": "uig", 3: "uig"
        }
        , {
            name: "Ukrainian", local: "Українська", 1: "uk", 2: "ukr", "2T": "ukr", "2B": "ukr", 3: "ukr"
        }
        , {
            name: "Urdu", local: "اردو", 1: "ur", 2: "urd", "2T": "urd", "2B": "urd", 3: "urd"
        }
        , {
            name: "Uzbek", local: "O‘zbek", 1: "uz", 2: "uzb", "2T": "uzb", "2B": "uzb", 3: "uzb"
        }
        , {
            name: "Venda", local: "Tshivenḓa", 1: "ve", 2: "ven", "2T": "ven", "2B": "ven", 3: "ven"
        }
        , {
            name: "Vietnamese", local: "Tiếng Việt", 1: "vi", 2: "vie", "2T": "vie", "2B": "vie", 3: "vie"
        }
        , {
            name: "Volapük", local: "Volapük", 1: "vo", 2: "vol", "2T": "vol", "2B": "vol", 3: "vol"
        }
        , {
            name: "Walloon", local: "Walon", 1: "wa", 2: "wln", "2T": "wln", "2B": "wln", 3: "wln"
        }
        , {
            name: "Welsh", local: "Cymraeg", 1: "cy", 2: "cym", "2T": "cym", "2B": "wel", 3: "cym"
        }
        , {
            name: "Wolof", local: "Wolof", 1: "wo", 2: "wol", "2T": "wol", "2B": "wol", 3: "wol"
        }
        , {
            name: "Western Frisian", local: "Frysk", 1: "fy", 2: "fry", "2T": "fry", "2B": "fry", 3: "fry"
        }
        , {
            name: "Xhosa", local: "isiXhosa", 1: "xh", 2: "xho", "2T": "xho", "2B": "xho", 3: "xho"
        }
        , {
            name: "Yiddish", local: "ייִדיש", 1: "yi", 2: "yid", "2T": "yid", "2B": "yid", 3: "yid"
        }
        , {
            name: "Yoruba", local: "Yorùbá", 1: "yo", 2: "yor", "2T": "yor", "2B": "yor", 3: "yor"
        }
        , {
            name: "Zhuang", local: "Cuengh", 1: "za", 2: "zha", "2T": "zha", "2B": "zha", 3: "zha"
        }
        , {
            name: "Zulu", local: "isiZulu", 1: "zu", 2: "zul", "2T": "zul", "2B": "zul", 3: "zul"
        }
        ]
    }
    , function(e, t, n) {
        "use strict";
        function i(e) {
            var t, n=[];
            for(t=0;
            t<e.length;
            t++)n.push( {
                click:e[t].click, items:[ {
                    className: e[t].icon
                }
                , {
                    className: "title", value: e[t].title
                }
                ]
            }
            );
            return n
        }
        function a(e) {
            e=e|| {}
            , e.type=r.prototype.TYPE_HORIZONTAL, e.data=i(e.data), e.className="horizontalMenu "+(e.className||""), r.call(this, e)
        }
        var r=n(31);
        a.prototype=Object.create(r.prototype), a.prototype.constructor=a, a.prototype.init=function(e) {
            e=e|| {}
            , e.data=i(e.data), r.prototype.init.call(this, e)
        }
        , e.exports=a
    }
    , function(e, t, n) {
        "use strict";
        function i(e) {
            var t=this;
            e=e|| {}
            , this.handlers= {}
            , this.$noData=null, e.propagate=void 0===e.propagate||e.propagate, this.fixedData=e.fixedData||!1, e.$body=document.createElement("div"), e.$body.className="body", this.$noData=document.createElement("div"), this.$noData.className="noData hidden", a.call(this, e), this.$node.appendChild(this.$body), this.$node.appendChild(this.$noData), this.addListener("click:item", function(e) {
                e.$item.layout.children.length&&!e.inner&&e.$item.layout.children[e.$item.layout.focusIndex].focus(), e.inner&&(t.focus(), t.focusItem(e.$item)), t.handlers[e.$item.index]&&t.handlers[e.$item.index](e.$item)
            }
            )
        }
        var a=n(32), r=n(34);
        i.prototype=Object.create(a.prototype), i.prototype.constructor=i, i.prototype.name="mag-component-layout-list", i.prototype.renderItemDefault=function(e, t) {
            var n, i, a, s;
            if(e.ready&&this.fixedData)for(s=0;
            s<t.items.length;
            s++)a=t.items[s], "string"!=typeof a.value&&void 0!==a.value||(i=e.layout.$node.childNodes[s], i.innerText=a.value||"", i.className=a.className||"");
            else {
                for(;
                e.firstChild;
                )e.removeChild(e.firstChild);
                n=new r( {
                    focusable: !1, data: t.items, className: t.className
                }
                ), e.appendChild(n.$node), e.layout=n, n.parent=this, n.$parentItem=e, n.addListener("click", function() {
                    n.parent.emit("click:item", {
                        $item: e, inner: !0
                    }
                    )
                }
                ), t.click&&(this.handlers[e.index]=t.click), e.ready=!0
            }
            e.value=t.value|| {}
        }
        , i.prototype.setData=function(e) {
            a.prototype.setData.call(this, e), e.data&&e.data.length?this.$noData.classList.add("hidden"): this.$noData.classList.remove("hidden")
        }
        , i.prototype.init=function(e) {
            var t;
            a.prototype.init.call(this, e), e.noData&&(this.$noData.innerHTML="", e.noData instanceof Element?this.$noData.appendChild(e.noData): "string"==typeof e.noData&&(t=document.createElement("div"), t.innerText=e.noData, this.$noData.appendChild(t))), e.data&&e.data.length?this.$noData.classList.add("hidden"): this.$noData.classList.remove("hidden")
        }
        , i.prototype.renderItem=i.prototype.renderItemDefault, e.exports=i
    }
    , function(e, t, n) {
        "use strict";
        function i(e) {
            e=e|| {}
            , this.$focusItem=null, this.viewIndex=null, this.data=[], this.type=this.TYPE_VERTICAL, this.size=5, this.cycle=!1, this.scroll=null, e.type&&(this.type=e.type), this.provider=null, e.className=e.className||"", this.type===this.TYPE_HORIZONTAL&&(e.className+=" horizontal"), r.call(this, e), this.init(e)
        }
        function a(e) {
            var t, n;
            for(t=0;
            t<e.length;
            t++)n=e[t], "object"!=typeof n&&(n=e[t]= {
                value: e[t]
            }
            );
            return e
        }
        var r=n(33), s=n(24);
        i.prototype=Object.create(r.prototype), i.prototype.constructor=i, i.prototype.name="mag-component-list", i.prototype.TYPE_VERTICAL=1, i.prototype.TYPE_HORIZONTAL=2, i.prototype.renderItemDefault=function(e, t) {
            e.innerText=t.value
        }
        , i.prototype.renderItem=i.prototype.renderItemDefault, i.prototype.defaultEvents= {
            mousewheel:function(e) {
                this.type===this.TYPE_VERTICAL&&e.wheelDeltaY&&this.move(e.wheelDeltaY>0?s.up: s.down), this.type===this.TYPE_HORIZONTAL&&e.wheelDeltaX&&this.move(e.wheelDeltaX>0?s.left: s.right)
            }
            , keydown:function(e) {
                switch(e.code) {
                    case s.up: case s.down: case s.right: case s.left: case s.pageUp: case s.pageDown: case s.home: case s.end: this.move(e.code);
                    break;
                    case s.enter:this.events["click:item"]&&this.$focusItem&&this.emit("click:item", {
                        $item: this.$focusItem, event: e
                    }
                    )
                }
            }
        }
        , i.prototype.init=function(e) {
            var t, n, i=this, a=this.$body.children.length, r=function(e) {
                this.data&&(i.focusItem(this), i.events["click:item"]&&i.emit("click:item", {
                    $item: this, event: e
                }
                ))
            }
            ;
            if(void 0!==e.cycle&&(this.cycle=e.cycle), e.scroll&&(this.scroll=e.scroll), e.provider&&(this.provider=e.provider), e.render&&(this.renderItem=e.render), e.size&&(this.size=e.size), e.events&&Object.keys(e.events).forEach(function(t) {
                i.events[t]=null, i.addListener(t, e.events[t])
            }
            ), this.size!==a)for(a>0&&(this.$body.innerText=null), n=0;
            n<this.size;
            n++)t=document.createElement("div"), t.index=n, t.className="item", t.addEventListener("click", r), this.$body.appendChild(t);
            this.provider?this.provider.get(null, function(t, n) {
                t?i.events["data:error"]&&i.emit("data:error", t):(n&&(e.data=n, i.setData(e), i.scroll&&i.scroll.init( {
                    realSize: i.provider.maxCount, viewSize: i.provider.size, value: i.provider.head+i.provider.pos
                }
                )), i.events["data:get"]&&i.emit("data:get"))
            }
            ):e.data&&this.setData(e)
        }
        , i.prototype.setData=function(e) {
            e.data&&(this.data=a(e.data)), this.viewIndex=null, this.$focusItem&&this.blurItem(this.$focusItem), this.scroll&&(this.provider?this.scroll.realSize!==this.provider.maxCount&&this.scroll.init( {
                realSize: this.provider.maxCount, viewSize: this.provider.size, value: this.provider.head+this.provider.pos
            }
            ):this.scroll.init( {
                realSize: this.data.length, viewSize: this.size, value: e.viewIndex||0
            }
            )), void 0!==e.focusIndex&&this.data.length?this.focusIndex(e.focusIndex):this.renderView(e.viewIndex||0)
        }
        , i.prototype.renderView=function(e) {
            var t, n, i, a, r;
            if(this.viewIndex!==e) {
                for(a=this.viewIndex, this.viewIndex=r=e, n=0;
                n<this.size;
                n++)t=this.$body.children[n], i=this.data[e], i?(t.data=i, t.index=e, this.renderItem(t, i), i.mark?t.classList.add("mark"): t.classList.remove("mark")): (t.data=t.index=void 0, t.innerHTML="&nbsp;", t.ready=!1), e++;
                return this.events["move:view"]&&this.emit("move:view", {
                    prevIndex: a, currIndex: r
                }
                ), this.events["select:item"]&&this.emit("select:item", {
                    $item: t
                }
                ), this.scroll&&this.scroll.scrollTo(this.provider?this.provider.head+this.provider.pos:this.viewIndex), !0
            }
            return!1
        }
        , i.prototype.move=function(e) {
            var t=this, n=!1;
            if(this.data.length)switch(e) {
                case s.left: if(this.type!==this.TYPE_HORIZONTAL)break;
                n=!0;
                case s.up:(n||this.type===this.TYPE_VERTICAL)&&(this.$focusItem&&this.$focusItem.index>0?this.$focusItem===this.$body.firstChild?this.renderView(this.viewIndex-1):this.focusItem(this.$focusItem.previousSibling):this.provider?this.provider.get(e, function(e, n, i) {
                    e?t.events["data:error"]&&t.emit("data:error", e):n&&t.setData( {
                        data: n, focusIndex: i||0===i?i: t.$focusItem.index
                    }
                    )
                }
                ):(this.cycle&&this.move(s.end), this.events["overflow"]&&this.emit("overflow", {
                    direction: e, cycle: this.cycle
                }
                )));
                break;
                case s.right:if(this.type!==this.TYPE_HORIZONTAL)break;
                n=!0;
                case s.down:(n||this.type===this.TYPE_VERTICAL)&&(this.$focusItem&&this.$focusItem.index<this.data.length-1?this.$focusItem===this.$body.lastChild?this.renderView(this.viewIndex+1):this.focusItem(this.$focusItem.nextSibling):this.provider?this.provider.get(e, function(e, n, i) {
                    e?t.events["data:error"]&&t.emit("data:error", e):n&&t.setData( {
                        data: n, focusIndex: i||0===i?i: t.$focusItem.index
                    }
                    )
                }
                ):(this.cycle&&this.move(s.home), this.events["overflow"]&&this.emit("overflow", {
                    direction: e, cycle: this.cycle
                }
                )));
                break;
                case s.pageUp:if(this.provider)return void this.provider.get(e, function(e, n, i) {
                    e?t.events["data:error"]&&t.emit("data:error", e):n&&t.setData( {
                        data: n, focusIndex: i?i: 0
                    }
                    )
                }
                );
                this.viewIndex<this.size?this.renderView(0):this.renderView(this.viewIndex-this.size+1), this.focusItem(this.$body.firstChild);
                break;
                case s.pageDown:if(this.provider) {
                    this.provider.get(e, function(e, n, i) {
                        e?t.events["data:error"]&&t.emit("data:error", e):n&&t.setData( {
                            data: n, focusIndex: i||0===i?i: n.length<t.size?n.length-1: t.size-1
                        }
                        )
                    }
                    );
                    break
                }
                this.data.length>this.size?(this.viewIndex>this.data.length-2*this.size?this.renderView(this.data.length-this.size):this.renderView(this.viewIndex+this.size-1), this.focusItem(this.$body.lastChild)):this.focusItem(this.$body.children[this.data.length-1]);
                break;
                case s.home:if(this.provider) {
                    this.provider.get(e, function(e, n, i) {
                        e?t.events["data:error"]&&t.emit("data:error", e):n&&t.setData( {
                            data: n, focusIndex: i?i: 0
                        }
                        )
                    }
                    );
                    break
                }
                this.renderView(0), this.focusItem(this.$body.firstChild);
                break;
                case s.end:if(this.provider) {
                    this.provider.get(e, function(e, n, i) {
                        e?t.events["data:error"]&&t.emit("data:error", e):n&&t.setData( {
                            data: n, focusIndex: i||0===i?i: n.length<t.size?n.length-1: t.size-1
                        }
                        )
                    }
                    );
                    break
                }
                this.data.length>this.size?(this.renderView(this.data.length-this.size), this.focusItem(this.$body.lastChild)):this.focusItem(this.$body.children[this.data.length-1])
            }
        }
        , i.prototype.focusItem=function(e) {
            var t=this.$focusItem;
            return!(!e||t===e)&&(null!==t&&(t.classList.remove("focus"), this.events["blur:item"]&&this.emit("blur:item", {
                $item: t
            }
            )), this.$focusItem=e, this.$focusItem.data=this.data[this.$focusItem.index], e.classList.add("focus"), this.events["focus:item"]&&this.emit("focus:item", {
                $prev: t, $curr: e
            }
            ), this.events["select:item"]&&this.emit("select:item", {
                $item: e
            }
            ), !0)
        }
        , i.prototype.blurItem=function(e) {
            return!!e&&(e===this.$focusItem&&(this.$focusItem=null), e.classList.remove("focus"), this.events["blur:item"]&&this.emit("blur:item", {
                $item: e
            }
            ), !0)
        }
        , i.prototype.focusIndex=function(e) {
            var t=this.viewIndex||0;
            e>=t+this.size?(e=e<this.data.length-1?e: this.data.length-1, this.renderView(e-this.size+1), this.focusItem(this.$body.lastChild)): e<t?(e=e>0?e: 0, this.renderView(e), this.focusItem(this.$body.firstChild)): (null===this.viewIndex&&this.renderView(0), this.focusItem(this.$body.children[e-t]))
        }
        , i.prototype.markItem=function(e, t) {
            t?e.classList.add("mark"): e.classList.remove("mark"), e.data.mark=t
        }
        , e.exports=i
    }
    , function(e, t, n) {
        "use strict";
        e.exports=n(23)
    }
    , function(e, t, n) {
        "use strict";
        function i(e) {
            e=e|| {}
            , this.focusIndex=0, this.data=[], r.call(this, e), this.init(e), this.addListener("keydown", function(e) {
                switch(e.code) {
                    case s.right: this.children.length&&this.focusIndex<this.children.length-1&&this.children[++this.focusIndex].focus();
                    break;
                    case s.left: this.children.length&&this.focusIndex>0&&this.children[--this.focusIndex].focus();
                    break;
                    case s.back: this.parent.focus(), this.parent&&this.$parentItem&&this.parent.focusItem(this.$parentItem)
                }
            }
            )
        }
        function a(e) {
            var t, n;
            for(t=0;
            t<e.length;
            t++)n=e[t], "object"!=typeof n?e[t]= {
                value: e[t], wrap: !0
            }
            :n instanceof r||n instanceof HTMLElement?e[t]= {
                value: n, wrap: !1
            }
            :e[t].wrap=!0;
            return e
        }
        var r=n(33), s=n(24);
        i.prototype=Object.create(r.prototype), i.prototype.constructor=i, i.prototype.name="mag-component-layout", i.prototype.init=function(e) {
            for(var t, n, i, s=this, o=a(e.data);
            this.$node.firstChild;
            )this.$node.removeChild(this.$node.firstChild);
            for(this.data=o, i=0;
            i<o.length;
            i++)t=o[i], "string"==typeof t.value?(n=document.createElement("div"), n.textContent=t.value, t.className&&(n.className=t.className), this.$node.appendChild(n)):t.value instanceof HTMLElement?t.wrap?(n=document.createElement("div"), t.className&&(n.className=t.className), n.appendChild(t.value), this.$node.appendChild(n)):this.$node.appendChild(t.value):t.value instanceof r?(t.value.propagate=!0, t.value.index=this.children.length, t.value.addListener("click", function() {
                s.focusIndex=this.index
            }
            ), t.wrap?(n=document.createElement("div"), t.className&&(n.className=t.className), n.appendChild(t.value.$node), this.$node.appendChild(n), this.children.push(t.value), t.value.parent=this):this.add(t.value)):(n=document.createElement("div"), t.className&&(n.className=t.className), this.$node.appendChild(n))
        }
        , e.exports=i
    }
    , function(e, t, n) {
        "use strict";
        function i(e) {
            var t, n=this;
            e=e|| {}
            , e.className="playerPanel "+(e.className||""), e.$body=document.createElement("div"), e.$body.className="body", s.call(this, e), this.$node.appendChild(this.$bufferBar=document.createElement("div")), this.$bufferBar.className="bufferBar", this.$node.appendChild(this.$progressbar=document.createElement("div")), this.$progressbar.className="progressBar", this.$node.appendChild(this.$body), this.$body.appendChild(this.$leftText=document.createElement("div")), this.$leftText.className="leftText", this.progressBar=new l( {
                $node: this.$progressbar
            }
            ), this.bufferBar=new l( {
                $node: this.$bufferBar
            }
            ), this.$body.appendChild(t=document.createElement("div")), t.className="buttonsWrapper", this.buttons=new c( {
                propagate:!0, data:[[""]], parent:this, className:"playerButtons", events: {
                    "click:item":function(e) {
                        e.$item.data&&e.$item.data.click&&e.$item.data.click()
                    }
                }
            }
            ), this.buttons.focusIndex=function(e) {
                return n.buttons.focusItem(n.buttons.map[0][e])
            }
            , this.buttons.$links= {}
            , t.appendChild(this.buttons.$node), this.$body.appendChild(this.$rightText=document.createElement("div")), this.$rightText.className="rightText", this.init(e)
        }
        function a(e, t) {
            var n, i, a="#";
            for(e=String(e).replace(/[^0-9a-f]/gi, ""), e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]), t=t||0, i=0;
            i<3;
            i++)n=parseInt(e.substr(2*i, 2), 16), n=Math.round(Math.min(Math.max(0, n+n*t), 255)).toString(16), a+=("00"+n).substr(n.length);
            return a
        }
        var r, s=n(33), o=n(24), l=n(36), c=n(37), u=n(38);
        i.prototype=Object.create(s.prototype), i.prototype.constructor=i, i.prototype.init=function(e) {
            r= {
                chM: {
                    icon:"ch-", click:function() {
                        e.onChannels&&e.onChannels( {
                            direction: o.left
                        }
                        )
                    }
                }
                , prev: {
                    icon:"prev", click:function() {
                        e.onPrevNext&&e.onPrevNext( {
                            direction: o.left
                        }
                        )
                    }
                }
                , rewind: {
                    icon:"rewind", click:function() {
                        e.onRewind&&e.onRewind( {
                            direction: o.left
                        }
                        )
                    }
                }
                , play: {
                    icon:"playPause", click:function() {
                        e.onPlay&&e.onPlay()
                    }
                }
                , forward: {
                    icon:"forward", click:function() {
                        e.onRewind&&e.onRewind( {
                            direction: o.right
                        }
                        )
                    }
                }
                , next: {
                    icon:"next", click:function() {
                        e.onPrevNext&&e.onPrevNext( {
                            direction: o.right
                        }
                        )
                    }
                }
                , chP: {
                    icon:"ch+", click:function() {
                        e.onChannels&&e.onChannels( {
                            direction: o.right
                        }
                        )
                    }
                }
            }
            , this.buttons.init( {
                propagate: !0, data: [[r.chM, r.prev, r.rewind, r.play, r.forward, r.next, r.chP]], render: u
            }
            ), e.progressBar?this.progressBar.show():this.progressBar.hide()
        }
        , i.prototype.focus=function() {
            this.buttons.focus()
        }
        , i.prototype.initButtons=function(e) {
            var t;
            e=e|| {}
            , this.buttons.enabledCount=0, r.chM.disable=!e.prevChannel, r.prev.disable=!e.prev, r.rewind.disable=!e.rewind, r.play.disable=!e.play, r.forward.disable=!e.forward, r.next.disable=!e.next, r.chP.disable=!e.nextChannel, t=[r.chM, r.prev, r.rewind, r.play, r.forward, r.next, r.chP], t.forEach(function(e) {
                e.focus=!1
            }
            ), this.buttons.$focusItem&&void 0!==this.buttons.$focusItem.x&&!t[this.buttons.$focusItem.x].disable&&(t[this.buttons.$focusItem.x].focus=!0), this.buttons.init( {
                propagate: !0, data: [t]
            }
            )
        }
        , i.prototype.setPlayButton=function(e) {
            var t=this.buttons.$links.playPause.$icon;
            e?(t.classList.remove("theme-icon-pause"), t.classList.add("theme-icon-play")): (t.classList.add("theme-icon-pause"), t.classList.remove("theme-icon-play"))
        }
        , i.prototype.ui= {
            DEFAULT_COLOR: "#165ACA"
        }
        , i.prototype.colorize=function(e) {
            e=e||this.ui.DEFAULT_COLOR, this.$body.style.backgroundColor=e, this.progressBar.$value.style.backgroundColor=a(e, 2.6)
        }
        , e.exports=i
    }
    , function(e, t, n) {
        "use strict";
        function i(e) {
            e=e|| {}
            , this.max=100, this.min=0, this.value=0, this.step=1, e.focusable=e.focusable||!1, a.call(this, e), this.$value=this.$body.appendChild(document.createElement("div")), this.$value.className="value", this.init(e)
        }
        var a=n(23);
        i.prototype=Object.create(a.prototype), i.prototype.constructor=i, i.prototype.name="spa-component-progress-bar", i.prototype.set=function(e) {
            var t=this.value;
            return this.value!==e&&e<=this.max&&e>=this.min&&(this.value=e, e=Math.abs(this.value-this.min)/this.step, 100===e&&this.events["done"]&&this.emit("done"), this.$value.style.width=e+"%", this.events["change"]&&this.emit("change", {
                curr: this.value, prev: t
            }
            ), !0)
        }
        , i.prototype.init=function(e) {
            void 0!==e.max&&(this.max=e.max), void 0!==e.min&&(this.min=e.min), void 0!==e.value&&(this.value=e.value), this.step=Math.abs(this.max-this.min)/100, this.$value.style.width=Math.abs(this.min-this.value)/this.step+"%"
        }
        , e.exports=i
    }
    , function(e, t, n) {
        "use strict";
        function i(e) {
            e=e|| {}
            , this.map=[], this.$focusItem=null, this.data=[], this.cycleX=!0, this.cycleY=!0, this.focusX=0, this.focusY=0, o.call(this, e), this.init(e)
        }
        function a(e) {
            var t, n, i;
            for(t=0;
            t<e.length;
            t++)for(n=0;
            n<e[t].length;
            n++)i=e[t][n], "object"==typeof i?(i.colSpan=i.colSpan||1, i.rowSpan=i.rowSpan||1):i=e[t][n]= {
                value: e[t][n], colSpan: 1, rowSpan: 1
            }
            ;
            return e
        }
        function r(e, t, n, i, a, r) {
            var s, o;
            for(s=n;
            s<n+a;
            s++) {
                for(e.length<s+1&&e.push([]);
                void 0!==e[s][t];
                )t++;
                for(o=t;
                o<t+i;
                o++)e[s].length<o+1&&e[s].push(), e[s][o]=r, void 0===r.x&&(r.x=o), void 0===r.y&&(r.y=s)
            }
        }
        function s(e) {
            var t, n, i, a=[];
            for(t=0;
            t<e.length;
            t++)for(n=0;
            n<e[t].length;
            n++)i=e[t][n], r(a, n, t, i.colSpan, i.rowSpan, i.$item), delete i.$item;
            return a
        }
        var o=n(23), l=n(25);
        i.prototype=Object.create(o.prototype), i.prototype.constructor=i, i.prototype.name="spa-component-grid", i.prototype.renderItemDefault=function(e, t) {
            e.innerText=t.value
        }
        , i.prototype.renderItem=i.prototype.renderItemDefault, i.prototype.defaultEvents= {
            mousewheel:function(e) {
                e.wheelDeltaY&&this.move(e.wheelDeltaY>0?l.up: l.down), e.wheelDeltaX&&this.move(e.wheelDeltaX>0?l.left: l.right)
            }
            , keydown:function(e) {
                switch(e.code) {
                    case l.up: case l.down: case l.right: case l.left: this.move(e.code);
                    break;
                    case l.enter:this.events["click:item"]&&this.emit("click:item", {
                        $item: this.$focusItem, event: e
                    }
                    )
                }
            }
        }
        , i.prototype.init=function(e) {
            var t, n, i, r, o, l, c, u, d=this, p=!1, h=function(e) {
                this.data.disable!==!0&&(d.focusItem(this), d.events["click:item"]&&d.emit("click:item", {
                    $item: this, event: e
                }
                ))
            }
            , m=function(u) {
                if(u&&d.data!==u&&(d.data=u, p=!0), e.render&&d.renderItem!==e.render&&(d.renderItem=e.render, p=!0), p) {
                    for(d.$table=document.createElement("table"), o=document.createElement("tbody"), d.data=a(d.data), t=0;
                    t<d.data.length;
                    t++) {
                        for(i=o.insertRow(), n=0;
                        n<d.data[t].length;
                        n++)r=i.insertCell(-1), r.className="item", c=d.data[t][n], c.$item=r, r.colSpan=c.colSpan, r.rowSpan=c.rowSpan, c.focus&&(l=r), c.disable&&r.classList.add("disable"), c.mark&&r.classList.add("mark"), d.renderItem(r, c), r.data=c, r.addEventListener("click", h);
                        o.appendChild(i)
                    }
                    d.map=s(d.data), d.$body.innerText=null, d.$table.appendChild(o), d.$body.appendChild(d.$table), l?d.focusItem(l):d.focusItem(d.map[0][0])
                }
            }
            ;
            void 0!==e.cycleX&&(this.cycleX=e.cycleX), void 0!==e.cycleY&&(this.cycleY=e.cycleY), e.provider&&(this.provider=e.provider, this.sizeX=e.sizeX, this.sizeY=e.sizeY), e.translate&&(this.translate=e.translate), e.provider?(u=this.provider.get(null, function(e, t) {
                e&&d.events["data:error"]&&d.emit("data:error", e), m(d.translate(t)), d.events["data:ready"]&&d.emit("data:ready")
            }
            ), this.events["data:get"]&&this.emit("data:get", {
                fresh: u
            }
            )):m(e.data)
        }
        , i.prototype.defaultTranslate=function(e) {
            var t, n, i, a=[];
            for(t=0;
            t<this.sizeY;
            t++) {
                for(i=[], n=0;
                n<this.sizeX;
                n++)i[n]=e[t*this.sizeX+n];
                a[t]=i
            }
            return a
        }
        , i.prototype.translate=i.prototype.defaultTranslate, i.prototype.move=function(e) {
            for(var t, n=this.focusX, i=this.focusY, a=!0, r=!1, s=!1;
            a;
            ) {
                switch(e) {
                    case l.up: i>0?i--: (this.cycleY&&(i=this.map.length-1, s=!0), r=!0);
                    break;
                    case l.down: i<this.map.length-1?i++: (this.cycleY&&(i=0, s=!0), r=!0);
                    break;
                    case l.right: n<this.map[i].length-1?n++: (this.cycleX&&(n=0, s=!0), r=!0);
                    break;
                    case l.left: n>0?n--: (this.cycleX&&(n=this.map[i].length-1, s=!0), r=!0)
                }
                n===this.focusX&&i===this.focusY&&(a=!1), this.map[i][n]!==this.map[this.focusY][this.focusX]&&this.map[i][n].data.disable!==!0&&(a=!1), r&&(a=!1, this.map[i][n].data.disable===!0&&(n=this.focusX, i=this.focusY))
            }
            this.focusItem(this.map[i][n]), this.focusX=n, this.focusY=i, r&&(this.provider&&(t=this.provider.get(e, function(e, t) {
                var n, i;
                if(e&&self.events["data:error"])return void self.emit("data:error", e);
                if(t) {
                    for(self.data=self.translate(t), n=0;
                    n<self.sizeY-1;
                    n++)for(i=0;
                    i<self.sizeX;
                    i++)self.renderItem(self.map[n][i], self.data[n][i]);
                    self.events["data:ready"]&&self.emit("data:ready")
                }
            }
            ), this.events["data:get"]&&this.emit("data:get", {
                fresh: t
            }
            )), this.events["overflow"]&&this.emit("overflow", {
                direction: e, cycle: s
            }
            ))
        }
        , i.prototype.focusItem=function(e) {
            var t=this.$focusItem;
            return!(!e||t===e||e.data.disable===!0)&&(null!==t&&(t.classList.remove("focus"), this.events["blur:item"]&&this.emit("blur:item", {
                $item: t
            }
            )), this.focusX=e.x, this.focusY=e.y, this.$focusItem=e, e.classList.add("focus"), this.events["focus:item"]&&this.emit("focus:item", {
                $prev: t, $curr: e
            }
            ), !0)
        }
        , i.prototype.markItem=function(e, t) {
            t?e.classList.add("mark"): e.classList.remove("mark"), e.data.mark=t
        }
        , e.exports=i
    }
    , function(e, t) {
        "use strict";
        var n= {
            "ch-": "theme-icon-channel-minus channels", "ch+": "theme-icon-channel-plus channels", prev: "theme-icon-previous", rewind: "theme-icon-rewind", playPause: "theme-icon-pause", forward: "theme-icon-forward", next: "theme-icon-next"
        }
        ;
        e.exports=function(e, t) {
            var i=document.createElement("div"), a=document.createElement("div");
            e.innerHTML="", i.className="button", a.className="theme-icon "+(n[t.icon]||""), i.appendChild(a), e.appendChild(i), e.$icon=a, this.$links&&(this.$links[t.icon]=e), t.disable||this.enabledCount++, e.data=t
        }
    }
    , function(e, t, n) {
        "use strict";
        function i() {
            f.lastPrimaryIntent&&f.lastPrimaryIntent.emit("media:info", {
                audioTracks: I.audioTracks, subtitlesTracks: I.subtitlesTracks
            }
            )
        }
        function a() {
            f.lastPrimaryIntent&&f.lastPrimaryIntent.emit("content:info", {
                videoInfo: I.videoInfo
            }
            )
        }
        function r() {
            f.lastPrimaryIntent&&f.lastPrimaryIntent.emit("end", {}
            )
        }
        function s() {
            f.lastPrimaryIntent&&f.lastPrimaryIntent.emit("start", {}
            )
        }
        function o() {
            f.lastPrimaryIntent&&f.lastPrimaryIntent.emit("error", {
                code: 5
            }
            )
        }
        function l() {
            f.lastPrimaryIntent&&f.lastPrimaryIntent.emit("content:dualMono", {}
            )
        }
        function c(e) {
            e.onPlayStart=s, e.onPlayEnd=r, e.onPlayError=o, e.onTracksInfo=i, e.onContentInfo=a, e.onDualMono=l
        }
        function u(e) {
            e.onPlayStart=function() {}
            , e.onPlayEnd=function() {}
            , e.onPlayError=function() {}
            , e.onTracksInfo=function() {}
            , e.onContentInfo=function() {}
            , e.onDualMono=function() {}
        }
        function d(e) {
            f.log("set audio to player #"+e.id), f.audioManager.list[0].add(e)
        }
        var p, h, m=n(4), f=n(1), v=n(40), y=n(27), g=new m, b= {}
        , T=f.playerManager, P=f.playerManager.list, I=f.playerManager.list[0], w=0, x=top.system&&top.system.queryParameters&&top.system.queryParameters.proxy?top.system.queryParameters.proxy:"", k=1===f.playerManager.list.length||y.useSingleModeByDeviceModel();
        g.intent=function(e, t, n) {
            e&&e.action&&b[e.action]&&b[e.action](e, t, n)
        }
        , c(I), d(I), g.setAudioSource=d, g.primary= {
            stop:function() {
                I&&(v(), I.stop())
            }
            , pause:function() {
                I.pause()
            }
            , resume:function() {
                I.resume()
            }
            , rewind:function(e) {
                I.position+=+e
            }
            , setAudioPid:function() {}
            , play:function(e) {
                I.play( {
                    uri: e.uri, solution: e.solution||"", position: e.position||0
                }
                )
            }
            , loadExternalSubtitles:function(e) {
                I.loadExternalSubtitles(e), g.primary.enableSubtitles=!0
            }
        }
        , g.reset=function() {
            I=T.list[0], w=0, f.lastPrimaryIntent=null, f.pipPlayer=null, c(I), d(I), I.fullscreen=!0
        }
        , Object.defineProperties(g.primary, {
            duration: {
                get:function() {
                    return I.duration
                }
                , set:function(e) {
                    I.duration=e
                }
            }
            , position: {
                get:function() {
                    return I.position
                }
                , set:function(e) {
                    I.position=e
                }
            }
            , state: {
                get:function() {
                    return I.state
                }
            }
            , aspect: {
                get:function() {
                    return I.aspectConversion
                }
                , set:function(e) {
                    I.aspectConversion=e
                }
            }
            , audioPID: {
                get:function() {
                    return I.audioPID
                }
                , set:function(e) {
                    I.audioPID=e
                }
            }
            , audioTracks: {
                get:function() {
                    return I.audioTracks
                }
            }
            , subtitlesPID: {
                get:function() {
                    return I.subtitlesPID
                }
                , set:function(e) {
                    I.subtitlesPID=e, I.enableSubtitles=!!e
                }
            }
            , subtitlesTracks: {
                get:function() {
                    return I.subtitlesTracks
                }
                , set:function() {}
            }
            , enableSubtitles: {
                get:function() {
                    return I.enableSubtitles
                }
                , set:function(e) {
                    I.enableSubtitles=!!e
                }
            }
            , videoInfo: {
                get:function() {
                    return I.videoInfo
                }
            }
            , volume: {
                get:function() {
                    return I.volume
                }
                , set:function(e) {
                    I.volume=+e
                }
            }
        }
        ), T.list.length>1, b.play=function(e, t, n) {
            var i, a, r, s, o= {}
            ;
            return e.context?(a=P[e.context.playerId], i=e.context):(a=I, i= {
                playerId: w
            }
            ), a===I&&(f.lastPrimaryIntent=e), k?f.pipPlayer&&(I=f.pipPlayer, a=I, I.fullscreen=!0, f.pipPlayer.surface.moveDown(), f.pipPlayer=null, f.log("emit exit event to pip intent"), h.emit("exit")):f.pipPlayer&&d(I), Object.defineProperties(o, {
                position: {
                    get:function() {
                        return I.position
                    }
                }
                , duration: {
                    get:function() {
                        return I.duration
                    }
                }
                , audioLang: {
                    get:function() {
                        var e, t=[];
                        for(e=0;
                        e<I.audioTracks.length;
                        e++)I.audioTracks[e].pid===I.audioPID&&(t=I.audioTracks[e].lang, t.indexOf("und")>-1&&(t=[]));
                        return t
                    }
                }
            }
            ), e.addListener("set:viewport", function(e) {
                a.setViewport(y.getRealViewPort(e))
            }
            ), e.addListener("set:fullscreen", function() {
                a.fullscreen=!0
            }
            ), e.data.viewport?a.setViewport(y.getRealViewPort(e.data.viewport)):a.fullscreen=!0, e.data.uri&&(f.lastPlayUri=e.data.uri, r=e.data.solution, n&&n.solution&&(r=n.solution), e.data.extra&&e.data.extra.length?(s=r+" "+e.data.uri, e.data.position&&(s+=" position:"+e.data.position), s+=" "+e.data.extra, a.play( {
                playStr: s, proxy: x
            }
            )):a.play( {
                uri: e.data.uri, solution: r, position: e.data.position||0, proxy: x
            }
            )), f.log("player #"+a.id+" start play"), i.metadata=o, t&&(window.lastCtx=i, t(!1, i)), {
                error: !1, context: i
            }
        }
        , b.pip=function(e) {
            var t, n, i= {}
            ;
            f.log("pip"), k?(f.pipPlayer=I, f.pipPlayer.surface.moveTop(), p=f.lastPrimaryIntent, I=null):f.pipPlayer?(T.swap(f.pipPlayer, I), f.pipPlayer.stop(), t=f.pipPlayer, f.pipPlayer=I, I=t, p=f.lastPrimaryIntent, f.lastPrimaryIntent=null, w=0, d(f.pipPlayer), f.pipPlayer.surface.moveTop(), u(f.pipPlayer), c(I)):(n=I.id, f.pipPlayer=I, n?(I=P[0], w=0): (I=P[1], w=1), f.log("pip player is #"+f.pipPlayer.id), f.pipPlayer.surface.moveTop(), u(f.pipPlayer), c(I), p=f.lastPrimaryIntent, f.lastPrimaryIntent=null), Object.defineProperties(i, {
                position: {
                    enumerable:!0, get:function() {
                        return!!f.pipPlayer&&f.pipPlayer.position
                    }
                }
                , duration: {
                    enumerable:!0, get:function() {
                        return!!f.pipPlayer&&f.pipPlayer.duration
                    }
                }
            }
            ), i.title=p.data.title||p.data.uri||"", h=core.intent( {
                action:"pip", mime:e.mime, data:i, events: {
                    viewport:function(e) {
                        f.pipPlayer.setViewport(e)
                    }
                    , pause:function() {
                        f.pipPlayer.pause()
                    }
                    , resume:function() {
                        f.pipPlayer.resume()
                    }
                    , maximize:function() {
                        k?(I=f.pipPlayer, f.lastPrimaryIntent=p, I.fullscreen=!0, I.surface.moveDown(), f.pipPlayer=null): (f.log("maximize pip window"), f.log("primary player was #"+I.id), v(), I.stop(), I=f.pipPlayer, w=0, f.pipPlayer=null, f.lastPrimaryIntent&&f.lastPrimaryIntent.close(), f.lastPrimaryIntent=p, I.fullscreen=!0, I.surface.moveDown(), d(I), c(I), f.log("primary player now is #"+I.id)), e.events.maximize&&e.events.maximize()
                    }
                    , swap:function() {
                        var t, n;
                        k||(0!==I.state&&(t=f.pipPlayer, f.pipPlayer=I, I=t, T.swap(f.pipPlayer, I), n=f.lastPrimaryIntent, f.lastPrimaryIntent=p, p=n, u(f.pipPlayer), c(I), d(I)), e.events.swap&&e.events.swap())
                    }
                    , stop:function() {
                        f.log("pip event stop"), f.pipPlayer.stop(), f.log("player #"+f.pipPlayer.id+" stop"), f.pipPlayer.fullscreen=!0, f.pipPlayer.surface.moveDown(), f.pipPlayer=null, k?I=P[0]: I.state||(I=P[0]), d(I), c(I), f.pipIntent=null
                    }
                }
            }
            , function(e, t) {}
            )
        }
        , n(41)(g), e.exports=g
    }
    , function(e, t, n) {
        "use strict";
        function i(e) {
            return e=e||"", e.replace(/\ //g,"-").replace(/\>/g,"-").replace(/</g,"-").replace(/\|/g,"-").replace(/\?/g,"-").replace(/\*/g,"-").replace(/\\/g,"-").replace(/\:/g,"-")}var a=n(1);e.exports=function(){var e,t,n,r=new Date,s=r.getDate(),o=r.getMonth()+1,l=r.getFullYear(),c=r.getMinutes(),u=r.getHours(),d=r.getSeconds();if(a.playback.timeshift.active)switch(a.lastPrimaryIntent&&a.lastPrimaryIntent.data?e=a.lastPrimaryIntent.data.title||a.lastPrimaryIntent.data.uri:a.currentPlayIntent&&a.currentPlayIntent.data&&(e=a.currentPlayIntent.data.title||a.currentPlayIntent.data.uri),e=i(e),a.timeshift.onExit){case a.timeshift.EXIT_NOT_SAVE:a.timeshift.exit();break;case a.timeshift.EXIT_SAVE:t=a.timeshift.path+"/"+e+"/"+l+"-"+(o>9?o:"0"+o)+"-"+(s>9?s:"0"+s)+"/",n=(u>9?u:"0"+u)+"-"+(c>9?c:"0"+c)+"-"+(d>9?d:"0"+d),a.timeshift.path&&e?a.timeshift.exit({save:{path:t,name:n}}):a.timeshift.exit();break;case a.timeshift.EXIT_REQUEST_SAVE:}}},function(e,t,n){"use strict";var i=n(1),a=!1,r={timer:null,paused:!1};window.gSTB=window.parent.gSTB,window.top.gSTB.SetTopWin(0),e.exports=function(e){window.parent.stbEvent.addListener("media",function(t){33===t.code&&core.environment.hdmi_event_delay?(clearTimeout(r.timer),r.timer=setTimeout(function(){i.pipIntent&&i.pipIntent.emit("stop"),2===e.primary.state?(e.primary.pause(),r.paused=!0):r.paused=!1},1e3*core.environment.hdmi_event_delay)):32===t.code&&(clearTimeout(r.timer),r.paused&&(r.paused=!1,e.primary.resume()))}),core.plugins.standby.addListener("standbyOn",function(){2===e.primary.state&&(e.primary.pause(),a=!0)}),core.plugins.standby.addListener("standbyOff",function(){i.pipIntent&&i.pipIntent.emit("stop"),a&&(e.primary.play({uri:i.lastPlayUri}),a=!1)})}},function(e,t,n){"use strict";var i,a,r=n(1),s=document.getElementById("info"),o=document.getElementById("infoText"),l=document.getElementById("infoIcon"),c=document.getElementById("dualMono"),u=!1,d=5e3;c.src="img/"+(1080===r.metrics.height?1080:720)+"/dualmono.png",r.addListener("route",function(e){e.to===r.pages.main&&u?s.classList.remove("bg"):e.to===r.pages.clear&&u&&s.classList.add("bg")}),e.exports={displayInfo:function(e){r.activePage===r.pages.main?s.classList.remove("bg"):s.classList.add("bg"),s.classList.add("visible"),u=!0,o.innerText=e.text||"",l.innerText=e.icon||"",clearTimeout(i),i=setTimeout(function(){s.classList.remove("visible"),o.innerText="",l.innerText="",u=!1},d)},showDualMono:function(){clearTimeout(a),c.classList.add("active"),a=setTimeout(function(){c.classList.remove("active")},d)}}},function(e,t,n){"use strict";function i(){return!!core.findIntentHandlers({action:"pip"}).length}var a,r=n(1),s=n(27),o=document.getElementById("contentTitle"),l=n(44),c=n(39),u=n(45);e.exports=function(){i()&&(r.currentIntent.show(r.currentIntent.creator,{reasonPip:!0}),r.pipIntent=r.currentPlayIntent,c.intent(new l({action:"pip",mime:r.playback.contentType,events:{maximize:function(){var e,t;r.currentPlayIntent=r.pipIntent,r.pipIntent=null,r.currentIntent=r.currentPlayIntent,o.innerText=r.currentPlayIntent.data.title||r.currentPlayIntent.data.uri,r.playback.stopProgressTimer(),t=c.primary.duration,"content/video"===r.currentPlayIntent.mime?document.body.classList.add("transparent"):"content/audio"===r.currentPlayIntent.mime&&(document.body.classList.remove("transparent"),u.show()),!t||r.currentPlayIntent.data&&r.currentPlayIntent.data.tvChannel?(r.playerPanel.setPlayButton(!1),r.playerPanel.$rightText.innerText="",r.playerPanel.$leftText.innerText="",r.playerPanel.progressBar.set(0),r.playerPanel.progressBar.hide()):(r.playerPanel.progressBar.show(),r.playerPanel.duration=t,r.playerPanel.progressBar.init({max:t}),r.playback.startProgressTimer(),t=s.parseTime(t),r.playerPanel.$rightText.innerText=t.hour+":"+t.min+":"+t.sec),r.playback.subtitles.list=c.primary.subtitlesTracks,a=n(46),e=a({subtitles:r.playback.subtitles.list.length},r.currentPlayIntent),r.mainMenu.init({data:e.data,size:e.data.length,focusIndex:e.focusIndex})},swap:function(){var e,t,i;i=r.pipIntent,r.pipIntent=r.currentPlayIntent,r.currentPlayIntent=i,r.currentIntent=r.currentPlayIntent,o.innerText=r.currentPlayIntent.data.title||r.currentPlayIntent.data.uri,r.playback.stopProgressTimer(),e=c.primary.duration,"content/video"===r.currentPlayIntent.mime?document.body.classList.add("transparent"):"content/audio"===r.currentPlayIntent.mime&&document.body.classList.remove("transparent"),e?(r.playback.duration=e,r.playerPanel.progressBar.init({max:e}),r.playerPanel.progressBar.show(),r.playback.startProgressTimer(),e=s.parseTime(e),r.playerPanel.$rightText.innerText=e.hour+":"+e.min+":"+e.sec):(r.playerPanel.$rightText.innerText="",r.playerPanel.$leftText.innerText="",r.playerPanel.progressBar.set(0),r.playerPanel.progressBar.hide()),r.playback.subtitles.list=c.primary.subtitlesTracks,a=n(46),t=a({subtitles:r.playback.subtitles.list.length}),r.mainMenu.init({data:t.data,size:t.data.length,focusIndex:t.focusIndex})}}})),r.emit("close"),r.pipIntent.emit("onPip"))}},function(e,t,n){"use strict";function i(e){e=e||{},this.action=e.action,this.data=e.data,this.context=e.context,this.mime=e.mime,a.call(this,e),this.events=e.events}var a=n(4);i.prototype=Object.create(a.prototype),i.prototype.constructor=i,e.exports=i},function(e,t){"use strict";e.exports={$node:document.getElementById("equalizer"),slideIndex:0,timer:null,active:!1,show:function(){var e=this;clearTimeout(this.timeout),this.active=!0,this.$node.style.display="block",this.$node.children[this.slideIndex].style.display="block",this.timeout=setTimeout(function t(){e.$node.children[e.slideIndex].style.display="none",e.slideIndex<3?e.slideIndex++:e.slideIndex=0,e.$node.children[e.slideIndex].style.display="block",e.timeout=setTimeout(t,85)},85)},hide:function(){clearTimeout(this.timeout),this.$node.style.display="none",this.$node.children[this.slideIndex].style.display="none",this.active=!1},pause:function(){clearTimeout(this.timeout)}}},function(e,t,n){"use strict";function i(){var e=d.primary.aspect;e<5?e++:e=0,d.primary.aspect=e,h({text:f[e],icon:"H"})}function a(){var e;u.playback.subtitles.list.length&&(d.primary.enableSubtitles?u.playback.subtitles.index>=u.playback.subtitles.list.length-1?(u.playback.subtitles.index=null,u.playback.subtitles.current=null,d.primary.subtitlesPID=null,h({text:"Subtitles off",icon:"u"})):(u.playback.subtitles.index++,u.playback.subtitles.current=u.playback.subtitles.list[u.playback.subtitles.index],u.playback.subtitles.currentPID=u.playback.subtitles.current.pid,e="Subtitles ",e+=u.playback.subtitles.current&&u.playback.subtitles.current.lang?u.playback.subtitles.current.lang[0]||"":"track "+u.playback.subtitles.current.pid||_("external"),h({text:e,icon:"u"}),d.primary.subtitlesPID=u.playback.subtitles.currentPID):u.playback.subtitles.currentPID&&null===u.playback.subtitles.index&&(u.playback.subtitles.index=0,u.playback.subtitles.current=u.playback.subtitles.list[0],u.playback.subtitles.currentPID=u.playback.subtitles.list[0].pid,e="Subtitles ",e+=u.playback.subtitles.current&&u.playback.subtitles.current.lang?u.playback.subtitles.current.lang[0]||"":"track "+u.playback.subtitles.current.pid||_("external"),h({text:e,icon:"u"}),d.primary.subtitlesPID=u.playback.subtitles.currentPID))}var r,s,o,l,c,u=n(1),d=n(39),p=n(43),h=n(42).displayInfo,m=n(40),f={0:"Original",1:"Letter box",2:"Pan&Scan",3:"combined",4:"enlarged",5:"optimal"};r={icon:"theme-icon theme-icon-pip",title:_("PiP"),click:p},s={icon:"theme-icon theme-icon-aspect",title:_("Aspect"),click:i},o={icon:"theme-icon theme-icon-settings",title:_("Settings"),click:function(){u.route(u.pages.settings)}},c={icon:"theme-icon theme-icon-menu",title:_("List"),click:function(){u.currentIntent.data.persistent?u.currentIntent.show(u.currentIntent.creator,{reasonToggleView:!0}):(u.currentIntent.close(),u.emit("close"),m(),d.primary.stop())}},l={icon:"theme-icon theme-icon-subtitles",title:_("Subtitles"),click:a},e.exports=function(e,t){var n=[],i=2;return e=e||{},t&&t.data&&t.data.controls?(t.data.controls.pip!==!1&&n.push(r),t.data.controls.aspect!==!1&&n.push(s),n.push(c),t.data.controls.settings!==!1&&n.push(o)):n=[r,s,c,o],(e.subtitles||t&&t.data.controls&&t.data.controls.subtitles!==!1)&&(i=3,n.push(l)),n.indexOf(c)>-1&&(i=n.indexOf(c)),{data:n,focusIndex:i}}},function(e,t){"use strict";e.exports={AUDIO_TYPES:{1:"mp2a",2:"mp3",3:"AC3",4:"AAC",5:"PCM",6:"OGG",7:"DTS"},LANGUAGES:{rus:"Russian",eng:"Brazilian Portuguese\n",und:" "},aspects:{0:"Original",1:"Letter box",2:"Pan&Scan",3:"combined",4:"enlarged",5:"optimal"}}},function(e,t,n){"use strict";var i,a=n(49),r=n(50),s=n(31),o=n(24),l=n(1),c=[],u=new a({$node:document.getElementById("modalIntentWidget"),events:{show:function(){i.focus()},hide:function(){l.lastFocus&&l.lastFocus.focus()}}});u.add(i=new r({visible:!0,title:_("Actions"),children:[u.list=new s({data:[],size:0,events:{"click:item":function(){u.hide()},keydown:function(e){e.code===o.back||e.code===o.menu?(e.stop=!0,u.hide()):s.prototype.defaultEvents.keydown.call(this,e)}}})]})),u.init=function(e){var t=[];c=e,e.forEach(function(e){t.push({items:[{className:"theme-icon theme-icon-rc-"+(e.icon||""),value:""},{className:"title",value:e.title}],click:e.handler})}),u.list.init({data:t,size:t.length,focusIndex:0})},l.addListener("keydown",function(e){e.code===o.f1&&u.record&&c[0].handler&&(c[0].handler(),u.hide())}),e.exports=u},function(e,t,n){"use strict";function i(e){e=e||{},e.focusable=e.focusable||!1,e.visible=e.visible||!1,a.call(this,e)}var a=n(23);i.prototype=Object.create(a.prototype),i.prototype.constructor=i,i.prototype.name="spa-component-widget",e.exports=i},function(e,t,n){"use strict";function i(e){var t,n,i,r=this;e=e||{},e.events=e.events||{},e.focusable=e.focusable||!1,e.visible=e.visible||!1,e.events.click=e.events.click||function(){r.hide()},i=e.events.keydown,e.events.keydown=function(e){i&&i.call(this,e),e.code!==s.back&&e.code!==s.menu||(e.stop=!0,r.hide())},a.call(this,e),this.$node.appendChild(document.createElement("div")),this.$node.firstChild.classList.add("alignBox"),this.$node.firstChild.appendChild(document.createElement("div")),this.$header=document.createElement("div"),this.$header.className="header",this.$text=this.$header.appendChild(document.createElement("div")),this.$text.classList.add("text"),this.$text.innerText=e.title||"",e.icon&&(this.$icon=this.$header.appendChild(document.createElement("div")),this.$icon.className="icon "+e.icon),t=document.createElement("div"),t.className="overlay",n=this.$body.parentNode.removeChild(this.$body),this.$node.firstChild.firstChild.appendChild(this.$header),this.$node.firstChild.firstChild.appendChild(n),this.$node.firstChild.firstChild.appendChild(t)}var a=n(51),r=n(33),s=n(24);i.prototype=Object.create(a.prototype),i.prototype.constructor=i,i.prototype.name="mag-component-modal",i.prototype.focus=function(){this.$node.classList.add("active"),a.prototype.focus.call(this),this.children[0]&&this.children[0]instanceof r&&this.children[0].focus()},i.prototype.blur=function(){this.$node.classList.remove("active"),a.prototype.blur.call(this)},e.exports=i},function(e,t,n){"use strict";e.exports=n(52),e.exports.prototype.name="stb-component-modal"},function(e,t,n){"use strict";function i(e){e=e||{},e.$body=document.createElement("div"),e.$body.className="body",a.call(this,e),this.$node.appendChild(document.createElement("div").appendChild(this.$body).parentNode)}var a=n(23);i.prototype=Object.create(a.prototype),i.prototype.constructor=i,i.prototype.name="spa-component-modal",e.exports=i},function(e,t,n){"use strict";var i=n(1),a=n(39);i.timeshift.addListener("buffer:pause:full",function(){a.primary.position=12,a.primary.resume()}),i.timeshift.addListener("buffer:full",function(){var e;i.timeshift.cyclic&&(e=a.primary.position,a.primary.position=e,core.notify({title:_("Timeshift buffer is full"),icon:"alert",timeout:3e3}))}),i.timeshift.addListener("buffer:almost:full",function(){core.notify({title:_("1 minute before timeshift buffer turns full"),
            icon: "alert", timeout: 3e3
        }
        )
    }
    ), i.timeshift.addListener("storage:unavailable", function() {
        core.notify( {
            title: _("USB storage unavailable"), icon: "alert", timeout: 3e3
        }
        )
    }
    ), i.timeshift.addListener("storage:full", function() {
        core.notify( {
            title: _("USB storage is full"), icon: "alert", timeout: 3e3
        }
        )
    }
    )
}

, function(e, t, n) {
    "use strict";
    var i, a="pClear", r=n(21), s=new r( {
        $node: document.getElementById(a)
    }
    ), o=n(39), l=n(55), c=n(1), u=n(24), d=n(40), p=n(57)(s);
    i=new l( {
        focusable: !0
    }
    ), s.panel=i, s.add(i), s.addListener("keydown", function(e) {
        switch(e.code) {
            case u.ok: c.route(c.pages.main);
            break;
            case u.back:c.currentIntent.data.exitWithConfirm?p(function(e) {
                e&&(c.currentIntent.close(!0), c.emit("close"), d(), o.primary.stop())
            }
            ):c.currentIntent.data.persistent?c.currentIntent.show(c.currentIntent.creator, {
                reasonToggleView: !0
            }
            ):(c.currentIntent.close(), c.emit("close"), d(), o.primary.stop());
            break;
            case u.left:c.rewind(!1);
            break;
            case u.right:c.rewind(!0);
            break;
            case u.up:c.nextPrevContent(!0);
            break;
            case u.down:c.nextPrevContent(!1)
        }
    }
    ), s.addListener("show", function() {
        i.focus()
    }
    ), e.exports=s
}

, function(e, t, n) {
    "use strict";
    e.exports=n(56), e.exports.prototype.name="stb-component-panel"
}

, function(e, t, n) {
    "use strict";
    function i(e) {
        e=e|| {}
        , e.focusable=e.focusable||!1, a.call(this, e)
    }
    var a=n(23);
    i.prototype=Object.create(a.prototype), i.prototype.constructor=i, i.prototype.name="spa-component-panel", e.exports=i
}

, function(e, t, n) {
    "use strict";
    var i, a, r, s=n(1), o=n(50), l=n(31);
    r=new o( {
        title:_("Exit"), events: {
            show:function() {
                this.children[0].focus()
            }
            , hide:function() {
                a.focus()
            }
            , keydown:function(e) {
                e.stop=!0
            }
        }
        , children:[new l( {
            className:"padded", focusIndex:0, size:2, data:[ {
                items:[ {
                    value: _("Yes")
                }
                ], click:function() {
                    i(!0), r.hide()
                }
            }
            , {
                items:[ {
                    value: _("No")
                }
                ], click:function() {
                    i(!1), r.hide()
                }
            }
            ]
        }
        )]
    }
    ), core.addListener("hide", function() {
        r.hide()
    }
    ), e.exports=function(e) {
        return e.add(r), function(e) {
            s.activePage&&s.activePage.activeComponent&&(a=s.activePage.activeComponent), i=e, r.show()
        }
    }
}

, function(e, t, n) {
    "use strict";
    function i(e, t) {
        return"function"==typeof t&&(t=t()), [ {
            className: e
        }
        , {
            value: t
        }
        ]
    }
    var a, r, s, o, l, c="pSettings", u=n(21), d=new u( {
        $node: document.getElementById(c)
    }
    ), p=n(1), h=n(24), m=n(59), f=n(60), v=n(31), y=n(61), g=(n(39), n(62)(d));
    a=[ {
        items: i("theme-icon theme-icon-volume", _("Sound")), options: n(64), title: _("Sound")
    }
    , {
        items: i("theme-icon theme-icon-display", _("Display")), options: n(65), title: _("Display")
    }
    ], r=new m( {
        panels:[new f( {
            title:_("Settings"), children:[s=new v( {
                data: a
            }
            )]
        }
        ), new f( {
            title: _("Sound"), main: !0, children: [o=new v]
        }
        ), new f( {
            title:_("Info"), children:[l=new y( {
                propagate: !0
            }
            )]
        }
        )]
    }
    ), d.add(r), o.emit("focus:item", {
        $curr: o.$focusItem
    }
    ), s.addListener("focus:item", function(e) {
        r.panels[1].$title.$node.childNodes[0].innerText=e.$curr.layout.data[1].value, "function"==typeof e.$curr.data.options?o.setData( {
            data: e.$curr.data.options(), focusIndex: 0
        }
        ):o.setData( {
            data: e.$curr.data.options, focusIndex: 0
        }
        ), o.emit("focus:item", {
            $curr: o.$focusItem
        }
        )
    }
    ), o.addListener("focus:item", function(e) {
        l.$body.innerText=e.$curr.data.description||"", l.init()
    }
    ), o.addListener("click:item", function(e) {
        var t=e.$item.data;
        g( {
            title: t.items[1].value, data: t.options, getOptions: t.getOptions, getFocusIndex: t.getFocusIndex, handler: t.handler
        }
        )
    }
    ), d.addListener("keydown", function(e) {
        switch(e.code) {
            case h.back: p.route(p.pages.main);
            break;
            case 48: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: e.stop=!0
        }
    }
    ), d.addListener("show", function() {
        r.panels[0].focus(), s.focusIndex(0)
    }
    ), e.exports=d
}

, function(e, t, n) {
    "use strict";
    function i(e) {
        function t(e) {
            switch(e.code) {
                case r.left: i.focusIndex>0&&i.panels[i.focusIndex-1].focus();
                break;
                case r.right: i.focusIndex<i.panels.length-1&&i.panels[i.focusIndex+1].focus()
            }
        }
        var n, i=this;
        for(e=e|| {}
        , e.focusable=e.focusable||!1, a.call(this, e), this.panels=e.panels, this.focusIndex=0, e.panels&&!e.panels[0].main&&(e.panels[0].$node.classList.add("left"), e.panels[0].$node.classList.add("expand")), e.panels&&e.panels[1]&&e.panels[1].main&&e.panels[1].$node.classList.add("position-right"), e.panels&&e.panels[2]&&e.panels[1].main&&e.panels[2].$node.classList.add("right"), e.panels&&this.add.apply(this, e.panels), n=0;
        n<this.panels.length;
        n++)this.panels[n].addListeners( {
            keydown: t
        }
        ), this.panels[n].index=n
    }
    var a=n(33), r=n(24);
    i.prototype=Object.create(a.prototype), i.prototype.constructor=i, i.prototype.name="mag-component-panel-set", i.prototype.focus=function() {
        a.prototype.focus.call(this), this.panels[this.focusIndex].focus()
    }
    , i.prototype.blur=function() {
        this.panels[this.focusIndex].blur()
    }
    , e.exports=i
}

, function(e, t, n) {
    "use strict";
    function i(e) {
        var t;
        e=e|| {}
        , this.size=1, this.main=!1, this.index=0, e.$body=document.createElement("div"), e.$body.className="body", a.call(this, e), e.size&&(this.size=e.size, this.$node.classList.add("size"+e.size)), e.main&&(this.main=!0, this.$node.classList.add("main")), this.$shadow= {
            left: document.createElement("div"), right: document.createElement("div")
        }
        , this.$shadow.left.className="shadow left", this.$node.appendChild(this.$shadow.left), this.$shadow.right.className="shadow right", this.$node.appendChild(this.$shadow.right), e.title&&(Array.isArray(e.title)||(e.title=[e.title]), this.$title=new r( {
            className: "title", data: e.title, focusable: !1
        }
        ), this.$node.appendChild(this.$title.$node)), this.$node.appendChild(this.$body), t=document.createElement("div"), t.className="overlay", this.$node.appendChild(t)
    }
    var a=n(33), r=n(34);
    i.prototype=Object.create(a.prototype), i.prototype.constructor=i, i.prototype.name="mag-component-panel", i.prototype.defaultEvents= {
        focus:function() {
            this.children.length&&this.children[0].focus()
        }
    }
    , i.prototype.focus=function() {
        this.focusable&&(this.parent.panels[this.parent.focusIndex].$node.classList.remove("active"), this.parent.panels[this.parent.focusIndex].$node.classList.remove("top"), a.prototype.focus.call(this), this.parent.focusIndex=this.index, this.$node.classList.add("active"), this.$node.classList.add("top"), 0===this.index&&this.parent.panels[1]&&this.parent.panels[1].main?(this.parent.panels[1].$node.classList.remove("position-left"), this.parent.panels[1].$node.classList.add("position-right"), this.parent.panels[2]&&this.parent.panels[2].$node.classList.remove("expand"), this.$node.classList.add("expand")): 2===this.index&&this.parent.panels[1].main&&(this.parent.panels[1].$node.classList.remove("position-right"), this.parent.panels[1].$node.classList.add("position-left"), this.parent.panels[0].$node.classList.remove("expand"), this.$node.classList.add("expand")))
    }
    , i.prototype.blur=function() {
        this.parent.panels[this.parent.focusIndex].$node.classList.remove("active"), a.prototype.blur.call(this)
    }
    , e.exports=i
}

, function(e, t, n) {
    "use strict";
    function i(e) {
        e=e|| {}
        , e.$body=document.createElement("div"), e.$body.className="body", this.step=5, this.realHeight=0, this.viewHeight=0, this.topPosition=0, this.scroll=null, a.call(this, e), this.$node.appendChild(this.$body), this.init(e)
    }
    var a=n(23), r=n(24);
    i.prototype=Object.create(a.prototype), i.prototype.constructor=i, i.prototype.name="mag-component-scroll-area", i.prototype.defaultEvents= {
        keydown:function(e) {
            switch(e.code) {
                case r.up: case r.down: this.move(e.code)
            }
        }
        , mousewheel:function(e) {
            this.move(e.wheelDeltaY>0?r.up: r.down)
        }
    }
    , i.prototype.move=function(e) {
        var t=screen.height, n=this.viewHeight-this.realHeight;
        if(n<0)switch(e) {
            case r.down:if(this.topPosition-this.step*t/100<n)return this.scroll.scrollTo(-n), this.$body.style.top=n+"px", void this.emit("overflow", {
                direction: e
            }
            );
            this.topPosition-=Math.ceil(this.step*t/100), this.scroll&&this.scroll.scrollTo(-this.topPosition), this.$body.style.top=this.topPosition+"px";
            break;
            case r.up:if(this.topPosition+this.step*t/100>0)return this.scroll.scrollTo(0), this.$body.style.top="0px", void this.emit("overflow", {
                direction: e
            }
            );
            this.topPosition+=Math.ceil(this.step*t/100), this.scroll&&this.scroll.scrollTo(-this.topPosition), this.$body.style.top=this.topPosition+"px"
        }
    }
    , i.prototype.init=function(e) {
        e=e|| {}
        , this.realHeight=this.$body.offsetHeight, this.viewHeight=this.$node.offsetHeight, this.topPosition=0, this.$body.style.top=this.topPosition+"px", e.scroll&&(this.scroll=e.scroll), e.step&&(this.step=e.step), this.scroll&&this.scroll.init( {
            realSize: this.realHeight, viewSize: this.viewHeight, value: this.topPosition
        }
        )
    }
    , e.exports=i
}

, function(e, t, n) {
    "use strict";
    function i(e) {
        var t, n=0;
        e=e|| {}
        , e.data?t=e.data:e.getOptions&&(t=e.getOptions()), e.getFocusIndex&&(n=e.getFocusIndex()), p.$text.innerText=e.title, d.clickHandler=e.handler, d.init( {
            data:t.map(function(e) {
                return {
                    items:[ {
                        value: e.title
                    }
                    ], value:e.value
                }
            }
            ), scroll:u, size:t.length>5?5:t.length, focusIndex:n
        }
        ), p.show()
    }
    var a, r=n(1), s=n(24), o=n(50), l=n(31), c=n(63), u=new c, d=new l( {
        data:[], size:0, className:"padded", cycle:!0, scroll:u, events: {
            keydown:function(e) {
                l.prototype.defaultEvents.keydown.call(this, e), e.code!==s.back&&e.code!==s.menu||(p.hide(), e.stop=!0)
            }
            , "click:item":function(e) {
                d.clickHandler(e.$item.data.value), p.hide()
            }
        }
    }
    ), p=new o( {
        className:"modalPopUp", children:[d], title:"asd", events: {
            show:function() {
                a=r.activePage.activeComponent, d.focus()
            }
            , hide:function() {
                a.focus()
            }
        }
    }
    );
    p.$body.appendChild(u.$node), e.exports=function(e) {
        return e.add(p), e.addListener("hide", function() {
            p.hide()
        }
        ), i
    }
}

, function(e, t, n) {
    "use strict";
    function i(e) {
        e=e|| {}
        , this.viewSize=10, this.realSize=100, this.value=0, this.type=this.TYPE_VERTICAL, this.thumbRect=null, this.trackRect=null, e.focusable=e.focusable||!1, e.type&&(this.type=e.type), this.type===this.TYPE_HORIZONTAL&&(e.className+=" horizontal"), a.call(this, e), this.$thumb=this.$body.appendChild(document.createElement("div")), this.$thumb.className="thumb", this.init(e)
    }
    var a=n(23);
    i.prototype=Object.create(a.prototype), i.prototype.constructor=i, i.prototype.name="spa-component-scrollbar", i.prototype.TYPE_VERTICAL=1, i.prototype.TYPE_HORIZONTAL=2, i.prototype.init=function(e) {
        e=e|| {}
        , void 0!==e.realSize&&(this.realSize=e.realSize), void 0!==e.viewSize&&(this.viewSize=e.viewSize), this.viewSize>=this.realSize?this.$thumb.classList.add("hidden"): this.$thumb.classList.remove("hidden"), void 0!==e.value&&this.scrollTo(e.value), this.type===this.TYPE_VERTICAL?this.$thumb.style.height=this.viewSize/this.realSize*100+"%": this.$thumb.style.width=this.viewSize/this.realSize*100+"%", this.thumbRect=this.$thumb.getBoundingClientRect(), this.trackRect=this.$node.getBoundingClientRect()
    }
    , i.prototype.scrollTo=function(e) {
        return this.value!==e&&(0!==this.thumbRect.height&&0!==this.thumbRect.width||(this.trackRect=this.$node.getBoundingClientRect(), this.thumbRect=this.$thumb.getBoundingClientRect()), this.type===this.TYPE_VERTICAL?this.$thumb.style.marginTop=(this.trackRect.height-this.thumbRect.height)*e/(this.realSize-this.viewSize)+"px":this.$thumb.style.marginLeft=(this.trackRect.width-this.thumbRect.width)*e/(this.realSize-this.viewSize)+"px", this.events["change"]&&this.emit("change", {
            curr: e, prev: this.value
        }
        ), e>=this.realSize&&(e=this.realSize, this.events["done"]&&this.emit("done")), this.value=e, !0)
    }
    , e.exports=i
}

, function(e, t, n) {
    "use strict";
    function i(e, t) {
        return[ {
            className: e
        }
        , {
            value: t
        }
        ]
    }
    function a(e) {
        core.plugins.settingsAudio&&(core.plugins.settingsAudio.mute=e)
    }
    function r(e) {
        core.plugins.settingsAudio&&(core.plugins.settingsAudio.volume=e)
    }
    function s(e) {
        l.primary.audioPID=e
    }
    var o=n(1), l=n(39), c=n(28), u=[];
    o.config.disableSoundOptions.indexOf(core.device.model)<0&&(u.push( {
        items:i("theme-icon theme-icon-volume", _("Mute")), options:[ {
            title: _("Mute On"), value: !0
        }
        , {
            title: _("Mute off"), value: !1
        }
        ], handler:a, description:_("Mute all sound")
    }
    ), u.push( {
        items:i("theme-icon theme-icon-volume", _("Volume level")), options:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(e) {
            return {
                value: 10*e, title: (10*e).toString()
            }
        }
        ), getFocusIndex:function() {
            return parseInt(o.audioManager.list[0].volume/10, 10)
        }
        , handler:r, description:_("Change volume level")
    }
    )), u.push( {
        items:i("theme-icon theme-icon-subtitles", _("Sound track")), description:_("Change audio track language"), getFocusIndex:function() {
            var e, t=l.primary.audioPID;
            if(l.primary.audioTracks.length<1)return 0;
            for(e=0;
            e<l.primary.audioTracks.length;
            e++)if(l.primary.audioTracks[e].pid===t)return e;
            return 0
        }
        , getOptions:function() {
            var e=[];
            return l.primary.audioTracks.forEach(function(t) {
                var n;
                t.lang&&t.lang.length&&"und"!==t.lang[0]?(n=t.lang[0], n=c["1"][n]||c["2T"][n]||c["2B"][n]||[""], n=n[0]):n=_("Track")+" "+t.pid, e.push( {
                    value: t.pid, title: n
                }
                )
            }
            ), e
        }
        , handler:s
    }
    ), e.exports=u
}

, function(e, t, n) {
    "use strict";
    function i(e, t) {
        return[ {
            className: e
        }
        , {
            value: t
        }
        ]
    }
    function a(e) {
        l.primary.aspect=e
    }
    function r(e) {
        "number"==typeof e||null===e?(l.primary.subtitlesPID=e, o.playback.subtitles.current= {
            pid: e, lang: []
        }
        , s=null):e&&e.getUri?(s=e, e.getUri(function(e) {
            l.primary.loadExternalSubtitles(e)
        }
        )):e&&e.uri&&(s=e, l.primary.loadExternalSubtitles(e.uri))
    }
    var s, o=n(1), l=n(39), c=n(26), u=n(28);
    e.exports=[ {
        items:i("theme-icon theme-icon-aspect", _("Aspect")), options:[ {
            title: _("Original"), value: 0
        }
        , {
            title: _("Letter box"), value: 1
        }
        , {
            title: _("Pan&Scan"), value: 2
        }
        , {
            title: _("combined"), value: 3
        }
        , {
            title: _("enlarged"), value: 4
        }
        , {
            title: _("optimal"), value: 5
        }
        ], handler:a, getFocusIndex:function() {
            return l.primary.aspect
        }
        , description:_("Change video conversation mode")
    }
    , {
        items:i("theme-icon theme-icon-subtitles", _("Subtitles")), description:_("Enable/disable or change subtitles for current content playback"), handler:r, getOptions:function() {
            var e=[ {
                value: null, title: _("Off")
            }
            ];
            return o.playback.subtitles.list.forEach(function(t) {
                var n;
                t.lang&&t.lang.length&&"und"!==t.lang[0]?(n=t.lang[0], n=u["1"][n]||u["2T"][n]||u["2B"][n]||[_("Track")+" "+t.lang[0]], n=n[0]):n=_("Track")+" "+t.pid, e.push( {
                    title: n, value: t.pid
                }
                )
            }
            ), o.lastPrimaryIntent&&o.lastPrimaryIntent.data.subtitles&&o.lastPrimaryIntent.data.subtitles.forEach(function(t) {
                var n;
                n=t.lang||"", n=u["1"][n]||u["2T"][n]||u["2B"][n]||[""], n=n[0], e.push( {
                    title: t.title||n||_("External track"), value: t, external: !0
                }
                )
            }
            ), e
        }
        , getFocusIndex:function() {
            var e, t, n=0;
            return t=c(l.primary.subtitlesTracks, function(e) {
                return e.pid===l.primary.subtitlesPID
            }
            ), s&&o.lastPrimaryIntent&&o.lastPrimaryIntent.data.subtitles&&(e=c(o.lastPrimaryIntent.data.subtitles, function(e) {
                return e===s
            }
            ), e>-1&&(t+=e)), t>=0&&(n=t+1), l.primary.enableSubtitles||(n=0), n
        }
    }
    ]
}

]);
//# sourceMappingURL=release.map