/**
 * 微信分享动作捕捉
 *
 * Created by Kit@muses.cc on 16/6/2.
 */
var wxshare = wxshare || {};

wxshare.urlEncoding = function(url){
    while (url.indexOf(":") > -1 || url.indexOf("/") > -1 ||
    url.indexOf("?") > -1 || url.indexOf("=") > -1 ||
    url.indexOf("&") > -1) {
        url = url.replace(":", "%3a");
        url = url.replace("/", "%2f");
        url = url.replace("?", "%3f");
        url = url.replace("=", "%3d");
        url = url.replace("&", "%26");
    }
    return url;
};

wxshare.config = {};

wxshare.isWeixin = function(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
};

wxshare.title = '';
wxshare.desc = '';
wxshare.link = '';
wxshare.logo = '';
wxshare.type = '';
wxshare.data_url = '';
wxshare.timeline_txt = '';
wxshare.success = function(){};
wxshare.cancel = function(){};

wxshare.init = function(title, desc, logo, timeline_txt, link, type, dataurl, success, cancel){
    wxshare.title = title;
    wxshare.desc = desc;
    wxshare.logo = logo!==undefined?logo:'';
    wxshare.link = link!==undefined?link:'';
    wxshare.type = type!==undefined?type:'';
    wxshare.timeline_txt = timeline_txt!==undefined?timeline_txt:'';
    wxshare.data_url = dataurl!==undefined?dataurl:'';
    wxshare.success = typeof(success) === "function" ? success : function(){};
    wxshare.cancel = typeof(cancel) === "function" ? success : function(){};

    if(wxshare.isWeixin()===true){
        var cur_page_url = window.location.href;
        $.ajax({
            url: "http://weixin.91zmt.com/jsapi/configjson?&appId="+config.app_id+"&webcode="+config.webcode+
            "&url=" + wxshare.urlEncoding(cur_page_url) + "&apis=onMenuShareTimeline,onMenuShareAppMessage,onMenuShareQQ"+
            ",onMenuShareWeibo,onMenuShareQZone&debug=false",
            type: "GET",//jsApiList
            dataType: "json",
            async: false,
            cache: false,
            success: function (data) {
                wx_config = data;
            },
            error: function () {
            }
        });
        wx.config(wx_config);
    }
}

wx.ready(function () {

    wx.onMenuShareAppMessage({
        title: wxshare.title, // 分享标题
        desc: wxshare.desc, // 分享描述
        link: wxshare.link, // 分享链接
        imgUrl: wxshare.logo, // 分享图标
        type: wxshare.type, // 分享类型,music、video或link，不填默认为link
        dataUrl: wxshare.data_url, // 如果type是music或video，则要提供数据链接，默认为空
        success: wxshare.success,
        cancel: wxshare.cancel
    });

    wx.onMenuShareTimeline({
        title: wxshare.timeline_txt, // 分享标题
        link: wxshare.link, // 分享链接
        imgUrl: wxshare.logo, // 分享图标
        success: wxshare.success,
        cancel: wxshare.cancel
    });

    wx.onMenuShareQQ({
        title: wxshare.title, // 分享标题
        desc: wxshare.desc, // 分享描述
        link: wxshare.link, // 分享链接
        imgUrl: wxshare.logo, // 分享图标
        success: wxshare.success,
        cancel: wxshare.cancel
    });

    wx.onMenuShareWeibo({
        title: wxshare.title, // 分享标题
        desc: wxshare.desc, // 分享描述
        link: wxshare.link, // 分享链接
        imgUrl: wxshare.logo, // 分享图标
        success: wxshare.success,
        cancel: wxshare.cancel
    });

    wx.onMenuShareQZone({
        title: wxshare.title, // 分享标题
        desc: wxshare.desc, // 分享描述
        link: wxshare.link, // 分享链接
        imgUrl: wxshare.logo, // 分享图标
        success: wxshare.success,
        cancel: wxshare.cancel
    });

})