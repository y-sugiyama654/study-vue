var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        message: '',
    },
    methods: {
        // インラインメソッドハンドラ(メソッドの使用)
        // clickHandler: function() {
        //     this.counter++
        //
        // },

        // イベントオブジェクトの参照
        // clickHandler: function(e){
        //     this.counter++
        //     console.log(e.target.tagName);
        //     console.log(e.target.innerHTML);
        //     console.log(e.target.type);
        // }

        // イベントハンドラに引数を渡す
        // clickHandler: function(message) {
        //     this.message = message
        // }

        // $event
        // clickHandler: function($event, message) {
        //     this.message = message
        //     console.log($event.target.tagName)
        //     console.log($event.target.innerHTML)
        //     console.log($event.target.type)
        // }

        // イベント修飾子の使用例.once
        // clickHandler: function() {
        //     this.message = new Date().toLocaleTimeString();
        // }

        // キー修飾子
        // clear: function() {
        //     this.message = '';
        // }

        // システム修飾子1
        // clear: function() {
        //     this.message = '';
        // }

        // システム修飾子2
        // clickHandler: function() {
        //     alert('Shift + Click!');
        // }

        // v-on省略記法
        clickHandler: function() {
            alert('Clicked!!');
        }


    }
})