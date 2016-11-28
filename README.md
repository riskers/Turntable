# Turntable
转盘抽奖

## Install

### npm

```
npm install @q/Turntable
```

### script

```html
<script src="lib/Turntable.min.js"></script>
```

## Usage

### init

* container: @String 容器
* config: @Object
    - turnsCount: 奖品个数
    - pointer: 指针，如果传入，则指针转动，否则是转盘转动

```js
var turntable = new Turntable('#container', {
    pointer: '#pointer',
    turnsCount: turnsCount
})
```

### API

* `run()` 转盘开始转动
* `reset()` 重置转盘
* `done(index, fn)` 完成抽奖之后的回调
    * index: 奖品索引
    * fn: 回调