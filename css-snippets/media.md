# 1. 移动端尺寸适配临界点

此处的 min-aspect-ratio 为 width/height

编写时一般写 `min-`的属性，并从小到大，下面的覆盖上面的

```css
    /* other通用 0.42 */
    @media screen and (min-aspect-ratio: 280/653) {}

    /* iphoneX 0.46 */
    @media screen and (min-aspect-ratio: 375/812) {}

    /* iphone6/7/8 Plugs、iphone6/7/8、iphone5/SE  0.56 */
    @media screen and (min-aspect-ratio: 375/667) {}

    /* ipad/ipad pro/surface 0.75 */
    @media screen and (min-aspect-ratio: 1024/1366) {}
```
