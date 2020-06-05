// コンポーネントの定義 グローバル
// Vue.component('hello-component', {
//     template: '<p>Hello component</p>'
// })

// コンポーネントの定義 ローカル
// var helloComponent = {
//     template: '<p>Hello component</p>'
// }

// コンポーネントのオプション
Vue.component('button-counter', {
    data: function() {
        return {
            count: 0,
        }
    },
    template: '<button v-on:click="count++">{{ count }}</button>'
})

var app = new Vue({
    el: '#app',
    // components: {
    //     'hello-component': helloComponent
    // },
})