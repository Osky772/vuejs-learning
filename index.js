new Vue({
    el: "#app",
    data: {
        name: "Oskar",
        website: "https://google.com",
        websiteTag: `<a href="https://google.com">My new link</a>`
    },
    methods: {
        greet() {
            return `Hello ${this.name}`
        }
    }
})