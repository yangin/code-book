# web引用第三方字体

主要通过css的 @font-face 来进行引用。

当预加载多个字体时，配置多个 @font-face 即可

@font-face 的 url 来在线拉取字体， local从本地获取字体， font-family为定义的别名， font-weight、 font-style来定义当符合该条件时采用本次定义的字体。

字体文件一般采用woff2格式（woff2进行了压缩），ttf格式有时候不好用

当未使用设置的字体时，则不拉取字体文件。

使用字体注意使用商用授权

商用侵权：

    1. 商用字体，需要授权，不能直接使用，需要购买授权，授权后才能使用。
    2. 商用授权字体，在未取得授权的情况下，只要支持下载该字体资源包，即为侵权。 

富文本编辑器处理字体的2种策略：

策略一：
    支持更换字体， 但字体随设备， 当设备支持该字体时，则展示效果，否则不展示字体效果，如微软雅黑在windows上可以展示效果，在mac上无变化。

策略二：
    只支持免费商用的字体（如方正黑体，方正仿宋等）， 并通过css的 @font-face 来进行引用。默认字体采用设备默认字体，如windows是微软雅黑，mac是苹方。


```html
<head>
    <title>Font</title>
    <style>
        @font-face {
            font-style: normal;
            font-family: 'AlibabaPuHui';
            font-weight: 400;
            src: url('/public/fonts/AlibabaPuHui/Regular.woff2') format('woff2');
        }

        @font-face {
            font-style: normal;
            font-family: 'SimSun';
            font-weight: 400;
            src: local( 'SimSun' ), 
            url('/public/fonts/FZShuSong/Regular.woff2') format('woff2');
        }
    </style>
</head>

<body>
    <div>
        <select id="fontFamily">
            <option value="AlibabaPuHui">AlibabaPuHui</option>
            <option value="SimSun">SimSun</option>
        </select>
    </div>
    <div>
        <span style="font-family: AlibabaPuHui;">显示的字体</span>
    </div>
</body>
<script>
    var fontFamily = document.getElementById('fontFamily');
    fontFamily.addEventListener('change', function () {
        document.querySelector('span').style.fontFamily = fontFamily.value;
    });
</script>
</html>
```

如上，其中 `/public/fonts/FZShuSong/Regular.woff2` 为自己上传的字体文件
