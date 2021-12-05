new Vue({
    el: "#app",
    data: {
        count: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase(value) {
            this.count += value
        },
        decrease(value) {
            this.count -= value
        },
        updateXY(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})