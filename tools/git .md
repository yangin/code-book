## 同步本地与线上的tag

```shell
git fetch origin --prune --tags
```

## git stash

```
git stash --keep-index 
```

暂存工作区(workspace)与暂存区（index）所有change，并保留暂存区的所有内容（即git status可以看到）,不存在只stash某一部分change（排除未跟踪的，如新增的文件）

要实现stash某一部分change，需要先把这部分change git add到 index 中，然后 git stash --keep-index  存一个所有change 到stash list中，此时，再通过git status ，可以看到当前index中会保留我们想要stash的部分change（即 keep-index），然后再stash 这部分stash，就会得到我们想要的stash。

## Git log 通过 author 查找

```shell
git log --author='yangjin'
```

## Github Search 排序，关键词后添加  sort:stars，如

```
react style guide sort:stars
```
