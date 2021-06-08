### 1. position：absolute 居中

```css
position: absolute;    
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

### 2.垂直居中

```css
top: 50%;
transform: translate(-50%);
```

### 3.在父元素内 position: absolute

```css
.parent-element {
    position: relative;
}

.child-element {
    position: absolute;
}
```

### 4.铺满view窗口

```css
width: 100vw;
height: 100vw;
```

说明： 常配合 `position: absolute` 一起使用。
