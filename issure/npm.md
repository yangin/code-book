### 1. package-lock.json 中包的 resolved url protocol 被修改了，如 https --> http

```shell
--- a/package-lock.json
+++ b/package-lock.json
@@ -660,7 +660,7 @@
         },
         "cacache": {
           "version": "10.0.4",
-          "resolved": "https://registry.npmjs.org/cacache/-/cacache-10.0.4.tgz",
+          "resolved": "http://registry.npmjs.org/cacache/-/cacache-10.0.4.tgz",
           "integrity": "sha512-Dph0MzuH+rTQzGPNT9fAnrPmMmjKfST6trxJeK7NQuHRaVw24VzPRWTmg9MpcwOVQZO0E1FBICUlFeNaKPIfHA==",
           "dev": true,
           "requires": {
```

### 原因

本地的npm镜像源与package-lock.json中的镜像源地址不匹配，或者某次更改了镜像源后，执行了npm i,导致node_modules里的资源包镜像地址发生了变化。在随后的每次npm i 时，会优先检查node_modules里的已存在的包的源地址，而非采用本地npm的镜像源的地址。所以就会导致出现上述的情况。

### 解决办法

```shell
rm -rf node_modules/ && npm ci
```

先移除已存在的node_moudules， 再执行 npm ci。 npm ci命令是根据package-lock.json来进行安装。npm install 是根据镜像源来安装。
