# CSS in Modules

在一些项目中，会对css、less文件进行编译，以避免css的名称重复导致的样式类名覆盖问题。
如 `editorWrapper` --> `editorWrapper___2UkCD`

在一些情况下，我们需要使用其未编译的名称，以来动态操作样式，此时，就需要使less、css文件中的指定类型不进行编译，保持原来的命名。具体操作方法如下：

## 常规

```css
:global(.ocssContainer) {
  .ui_column {
    padding-left: 0;
  }
}
```

会被编译成

```css
 .ErrorMessaging__alertContainer--1I-Cz .ocssContainer .ErrorMessaging__ui_column--3uMUS {
    padding-left: 0;
  }
```

或者

```css
:global(.ocssContainer) {
  :global(.ui_column) {
    padding-left: 0;
  }
}
```

会被编译成

```css
  .ErrorMessaging__alertContainer--1I-Cz .ocssContainer .ui_column {
    padding-left: 0;
  }
```

或者

```css
.editorWrapper {
  height: 100%;
  width: 100%;
  background-color: aquamarine;
  overflow: hidden;

  :global {
    .editor-fold {
      visibility: hidden;
      height: 0;
    }

    .editor-expand {
      visibility: visible;
      height: auto;
    }
  }
}
```

## 动画

使用 `:local` 关键字

```css
:global {
    .selector {
        & :local {
            animation: yourAnimation 1s ease;
        }
    }
}

@keyframes yourAnimation {
    0% {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
```
