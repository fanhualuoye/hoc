import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


// 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
  created: function () {
    const myOption = this.$options.myOption
    if (myOption) {
      // console.log('myOption', myOption)
    }
  }
})

//自定义选项合并策略
Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
  // 返回合并后的值
  // console.log('toVal', toVal)
  // console.log('fromVal', fromVal)
  return fromVal + ',123'
}

new Vue({
  router,
  render: h => h(App),
  myOption: 'hello!'
}).$mount('#app')
