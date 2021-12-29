### 1. 隐藏滚动条

支持ie 10+

```css
.container {
  overflow: auto;
  /* firefox */
  scrollbar-width: none;
  /* IE 10+ */
  -ms-overflow-style: none;
}
/* Chrome Safari */
.containier::-webkit-scrollbar {
  display: none;
}
```
