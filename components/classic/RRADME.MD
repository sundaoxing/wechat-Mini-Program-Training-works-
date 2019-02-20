### 关于多继承

#### 如下是组件中的语法
```javascript
Component({
    behaviors:[classicBeh,beh1,beh2],
    properties:{
    //    属性元素在classic-beh.js中
    }
})
```
#### 如下是父类中的写法
```javascript
let classicBeh = Behavior({
    properties:{
        img:String,
        content:String
    },
    data:{
    },
    method:{
    }
})

export {classicBeh}
```
//多继承的优点：当某些小组件需要更改时，不需要每个小组件都改动只需要在父级中改动就行
<br>
//多继承需要注意的地方  
1.如果组件的properties属性有自己的数据，便会覆盖父级中的属性  
2.如果组件的properties属性没有自己的数据，便会取多继承最靠右的那个父级