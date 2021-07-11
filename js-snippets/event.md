# 1、防抖函数

## 原理

在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

## 适用场景

* 按钮提交场景：防止多次提交按钮，只执行最后提交的一次；
* 服务端验证场景：表单验证需要服务端配合，只执行一段连续的输入事件的最后一次；
* 搜索联想词场景；

Code

```javascript
// 防抖  
const debounce = (fn,delay)=>{  
    let timer = null;  
    return (...args)=>{  
        clearTimeout(timer);  
        timer = setTimeout(()=>{  
            fn.apply(this,args)  
        },delay)  
    }  
}  
```

Example

```javascript
<body>  
    <input type="text" class="int" onkeydown="down()">  
</body>  
<script> function down() {  
        debounce(() => {  
            console.log('1')  
        }, 2000)()  
    }  
    const debounce = (fn, delay) => {  
        let timer = null;  
        return (...args) => {  
            clearTimeout(timer);  
            timer = setTimeout(() => {  
                fn.apply(this, args)  
            }, delay)  
        }  
    }</script>  
```

# 2、节流函数

## 原理

规定在一单位时间内。只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

## 适用场景

* 拖拽场景：固定时间只执行一次，防止超高频次触发位置变动;
* 缩放场景：监控浏览器resize;
* 动画场景：避免短时间内多次触发动画引起的性能问题。

Code

```javascript
// 节流函数  
const throttle = (fn, delay = 500) => {  
    let flag = true;  
    return (...args) => {  
        if (!flag) return;  
        flag = false;  
        setTimeout(() => {  
            fn.apply(this, args)  
        }, delay);  

    }  
}
```

Example

```javascript
// 节流函数  
const throttle = (fn, delay = 500) => {  
    let flag = true;  
    return (...args) => {  
        if (!flag) return;  
        flag = false;  
        setTimeout(() => {  
            fn.apply(this, args)  
        }, delay);  

    }  
} 

// 浏览器窗口缩放  
window.onresize=function(){  
    throttle(()=>{  
        console.log(1)  
    })()  
}
```
