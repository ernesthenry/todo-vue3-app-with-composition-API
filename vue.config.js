// vue.config.js
module.exports = {
    // publicPath: ‘/todo-vue3-app-with-composition-API/’
    publicPath: process.env.NODE_ENV === "production" ? "/todo-vue3-app-with-composition-API/" : "/",

    }