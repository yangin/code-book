## 计算时间差
> 使用场景：性能调试时，用来计算中间的消耗时间

通过记录2次时间戳并计算时间差。

```javascript
const start = Date.now(); // 1645362340899
// do something
const end = Date.now();

// 精确到毫秒
const time = end - start;
// 精确到秒
const time2 = (end - start) / 1000;
```
