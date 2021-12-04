new Vue({
    el: "#app",
    data: {
        name: "Oskar"
    },
    methods: {
        greet() {
            return `Hello ${this.name}`
        }
    }
})