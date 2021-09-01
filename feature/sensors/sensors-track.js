/**
 *  神策埋点配置文件（神策数据分析：https://www.sensorsdata.cn/）
 *  文件包含自动生成deviceId， 埋点配置初始化， 全埋点
 *  将该文件部署到CDN上，直接通过 <script> 标签引用即可, 如<script src='/sensors-track.js'></script>
 */

/**
 * 产生deviceId, 每个设备唯一
*/
(function(window) {
  var cookieTool = {};
  cookieTool = {
    config: {
      expires: null,
      prefix: '',
      domain: null,
      path: '/'
    },
    set: function(name, value, expires, path, domain, prefix) {
      var cookieStr = "";
      prefix = prefix || cookieTool.config.prefix;
      name = cookieTool.config.prefix + name;
      cookieStr += name + "=" + encodeURIComponent(value);
      // domain = domain || cookieTool.config.domain;
      // if (domain) {
      //   cookieStr += ";domain=" + domain
      // }
      path = path || cookieTool.config.path;
      if (path) {
        cookieStr += ";path=" + path
      }
      expires = expires || cookieTool.config.expires;
      if (expires) {
        var exp = new Date();
        if (exp) {
          exp.setTime(exp.getTime() + parseInt(expires) * 1000);
          cookieStr += ";expires=" + exp.toGMTString()
        }
      }
      document.cookie = cookieStr
    },
    get: function(name) {
      var arr = document.cookie.split(";");
      var strCookie = "";
      for (var i = 0; i < arr.length; i++) {
        var cindex = arr[i].indexOf(name);
        if (cindex != -1) {
          strCookie = arr[i].substring(cindex + name.length + 1, arr[i].length);
          break
        }
      }
      return strCookie
    }
  };
  
  recordCache = function(type, val) {
    if (type != "visit") {
      return
    }
    var cookie_name = "ws_visit_id";
    var host = window.location.host;
    var re = /(.*)\.([^\.]+)\.([^\.]+)$/g;
    var main_host = host.replace(re, "$2.$3");
    var expires = 60 * 24 * 3600;
    cookieTool.set(cookie_name, val, expires, '/', main_host);
    return val
  };
  
  getVisitId = function() {
    var old_visit_id = cookieTool.get("ws_visit_id");
    if (old_visit_id && old_visit_id != "") {
      return old_visit_id
    }
    var date = new Date();
    var y = date.getFullYear().toString().substr(2, 2);
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var i = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    var _random = Math.round(Math.random() * Math.random() * 10000);
    var random_len = _random.toString().length;
    if (random_len == 1) {
      _random = _random + '000'
    } else if (random_len == 2) {
      _random = _random + '00'
    } else if (random_len == 3) {
      _random = _random + '0'
    }
    var visit_id = "2_" + y;
    visit_id += m < 10 ? '0' + m: m;
    visit_id += d < 10 ? '0' + d: d;
    visit_id += h < 10 ? '0' + h: h;
    visit_id += i < 10 ? '0' + i: i;
    visit_id += s < 10 ? '0' + s: s;
    if (ms < 10) {
      visit_id += '00' + ms
    } else if (ms < 100) {
      visit_id += '0' + ms
    } else {
      visit_id += ms
    }
    visit_id += '_' + _random;
    recordCache("visit", visit_id);
    return visit_id
  };
})(window)


/**
 * 初始化神策埋点
 * 可参考集成方式：https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_web_use-27724227.html
*/
function initTrack (para){
  var p = para.sdk_url; var n = para.name; var w = window; var d = document; var s = 'script'; var x = null; var y = null
  if (typeof (w[ 'sensorsDataAnalytic201505' ]) !== 'undefined') {
    return false
  }
  w[ 'sensorsDataAnalytic201505' ] = n
  w[ n ] = w[ n ] || function (a) { return function () { (w[ n ]._q = w[ n ]._q || []).push([ a, arguments ]) } }
  var ifs = [ 'track', 'quick', 'register', 'registerPage', 'registerOnce', 'clearAllRegister', 'trackSignup', 'trackAbtest', 'setProfile', 'setOnceProfile', 'appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify', 'login', 'logout', 'trackLink' ]
  for (var i = 0; i < ifs.length; i++) {
    w[ n ][ ifs[ i ] ] = w[ n ].call(null, ifs[ i ])
  }
  if (!w[ n ]._t) {
    x = d.createElement(s), y = d.getElementsByTagName(s)[ 0 ]
    x.async = 1
    x.src = p
    x.setAttribute('charset', 'UTF-8')
    w[ n ].para = para
    y.parentNode.insertBefore(x, y)
  }
}

// 请求数据
fetch('/event_track').then(function(response){
  return response.json()
}).then(function(res){
  var wisd = res.data.wsid
  var lang = res.data.lang
  var isMB = /^([a-z0-9]+\.)*yangjin\.cc$/.test(location.host)
  var isDev = /\.dev\.yangjin\.cc$/.test(location.host)
  var isMBOnline = isMB && !isDev
  var projectName = isMBOnline ? 'UA_Yangjin_Web' : 'UA_Yangjin_Web_test'

  initTrack({
    // sdk_url: 'https://cdn.jsdelivr.net/npm/sa-sdk-javascript@1.18.5/sensorsdata.min.js',
    sdk_url: location.origin + '/js/sensorsdata.min.js',  // 改为从本地获取，保证稳定性
    name: 'sensors',
    server_url: 'https://analytics.yangjin.com:3000/sa?project=' + projectName,
    is_track_single_page: true, // 单页面配置，默认开启，若页面中有锚点设计，需要将该配置删除，否则触发锚点会多触发 $pageview 事件
    use_client_time: true,
    show_log: false,
    send_type: 'beacon',
    heatmap: {
      // 是否开启点击图，default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭。
      clickmap: 'default',
      // 是否开启触达注意力图，not_collect 表示关闭，不会自动采集 $WebStay 事件，可以设置 'default' 表示开启。
      scroll_notice_map: 'not_collect'
    }
  })

  sensors.identify(getVisitId(), true)

  /**
   * 添加公共属性
  */
  sensors.registerPage({
    tid: 'UA-Yangjin-Web',
    uid: wisd,
    pver: 'v1.0.0',
    oszone: new Date().getTimezoneOffset(),
    pbrand: 'yangjin',
    plang: lang
  })

  sensors.quick('autoTrack')
})
