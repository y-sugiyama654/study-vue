var app = new Vue({
    el: '#app',
    data: {
        items: null,
        keywords: '',
        message: '',
    },
    watch: {
        keywords: function(newKeyword, oldKeyword) {
            this.message = 'Waitting for you to stop typing....';
            this.debouncedGetAnswer()

        }
    },
    created: function() {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000);
    },
    methods: {
        getAnswer: function() {
            if(this.keywords === '') {
                this.items = null
                this.message = ''
                return
            }
            this.message = 'Loading....';
            var vm = this
            var params = { page : 1, per_page: 20, query: this.keywords }
            axios.get('https://qiita.com/api/v2/items', { params })
                .then(function(response) {
                    console.log(response)
                    vm.items = response.data
                })
                .catch(function(error) {
                    console.log('error')
                    vm.message = 'Error!' + error
                })
                .finally(function() {
                    vm.message = ''
                })
        }
    }
})