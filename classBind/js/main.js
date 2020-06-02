var app = new Vue({
    el: '#app',
    data: {
        // クラスのデータバインディング
        // isLarge: true,
        // hasError: true,

        // 配列構文に夜クラスのデータバインディング
        // largeClass: 'large',
        // dangerClass: 'text-danger',

        // オブジェクトデータによるクラスのデータバインディング
        // classObject: {
        //     large: true,
        //     'text-danger': true, // class名にハイフンが入ってるのでシングルクォートで囲ってる
        // }

        // クラスの条件分岐に参考演算子を使う
        // largeClass: {
        //     large: true,
        //     'bg-gray': true,
        // },
        // dangerClass: {
        //     'text-danger': true,
        // },
        // isLarge: false,

        // インラインスタイルのデータバインディング
        // color: 'blue',
        // fontSize: 36,

        styleObject: {
            color: 'pink',
            fontSize: '36px',
        }
    }
})