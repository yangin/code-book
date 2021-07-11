## nvm

node 版本管理工具，支持机器上同时存在多个node版本，可通过 nvm use 自由切换当前使用版本

## nrm

node 的 registry 管理工具，方便多个registry来回切换， nrm --help 查看命令

## npx

node 的 cli 使用工具，用完即走的模式，本地无需存储node_module/.bin，在需要时 执行即可

```shell
npx <package-name> <cli>
```

当本地不存在对应的node_modules 及 cli 时，会从 registry 上 拉取对应的package，存储在缓存中，当执行完这个 package 的 cli 后，再从缓存中删除，用完即走，不留痕迹。 对于不常用的 npm package cli 工具很实用，如在尝试

```shell
npx create-react-app myapp
```
