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

solved:

```shell
$ rm -rf node_modules/
$ npm cache clean --force
(Revert the changes in your package-lock.json file)
$ npm i
```
