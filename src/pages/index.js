const files = require.context('.', true, /\.vue$/)

const pages = {}

files.keys().forEach(key => {
    console.log(key)

    pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default

})

export default pages
