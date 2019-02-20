// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      like:{
        type:Boolean,
        // value:false,
        // value为属性的初始值
        // observer:function(){} 
      },
      count:{
        type:Number
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //数据绑定
    //三元表达式
    //封装性 开放型
    //哪些封装在内部，哪些开放
      count:9,
      like:false,
      yesSrc:'images/like.png',
      noSrc:'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onLike:function(e){
        let like = this.properties.like
        let count = this.properties.count

        count = like?count-1:count+1
        this.setData({
          count:count,
          like:!like
        })
        // 激活事件
        let behavior = this.properties.like?'like':'cancel'
        this.triggerEvent('like',{
          behavior:behavior
        },{})
      }
  }
})
