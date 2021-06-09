# 1. animation 属性

`animation-duration`【常用】

设置动画一个周期的时长。

`animation-name`【常用】

指定由@keyframes描述的关键帧名称

`animation-timing-function`【常用】

设置动画速度， 即通过建立加速度曲线，设置动画在关键帧之间是如何变化。

说明：[常用值](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/CSS/easing-function)  包括: linear、ease、 ease-in、ease-in-out、 ease-out、step-start、step-end。一般采用 `linear` 表示始终采用匀速变化。

`animation-fill-mode`【常用】

指定动画执行前后如何为目标元素应用样式。

说明：[常用值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode) 包括：none、forwards、backwards、 both。 一般采用 `forwards` 表示最终停留在动画结束时的状态。

<details>
    <summary>其他属性</summary>

`animation-delay`

设置延时，即从元素加载完成之后到动画序列开始执行的这段时间。

`animation-direction`

设置动画在每次运行完后是反向运行还是重新回到开始位置重复运行。

`animation-iteration-count`

设置动画重复次数， 可以指定infinite无限次重复动画

`animation-play-state`

允许暂停和恢复动画。

</details>

# 2. 用法

通过 `@keyframes` 定义动画内容, 通过 `animation` 设置动画属性。一般采用 animation 简写来定义。

```
 animation: name duration timing-function delay iteration-count direction fill-mode;
```

注意：简写时，属性顺序一般是可以调整的，但需要保证 duration 在 delay 前。

```css
.banner {
    position: fixed;
    width: 100%;
    height: 500px;
    background: #ff0;
    bottom: 0;
    left: 0;
    animation: in-banner 1s;
    animation-fill-mode: backwards;
}

.banner-close {
    animation: out-banner 0.5s forwards linear;
}

/* 平行移动关闭或打开 */
@keyframes out-banner {
    0% {
        bottom: 0;
    }

    100% {
        bottom: -500px;
    }
}

/* 由点展开或关闭 */
@keyframes out-banner2 {
    0% {
        width: 100%;
        height: 500px;
        bottom: 0px;
    }

    100% {
        width: 0;
        height: 0;
        bottom: 100px;
        display: none;
    }
}
```
