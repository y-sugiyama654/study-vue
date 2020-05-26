new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: [],
    },
    methods: {
        addItem: function(event) {
            if (this.newItem.length == '') return;

            var todo = {
                item: this.newItem,
                isDone: false,
            };

            this.todos.push(todo);
            this.newItem = '';
        }
    }
})