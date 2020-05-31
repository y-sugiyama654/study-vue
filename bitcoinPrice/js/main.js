new Vue({
    el: '#app',
    data: {
        info: null,
    },
    mounted: function () {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(function(response){
                this.info = response.data.bpi;
            }.bind(this))
            .catch(function(error){
                console.log(error);
            })
    },
})