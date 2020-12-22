const { environment } = require('@rails/webpacker')
const webpack = require("webpack")
environment.plugins.append("Provide", new webpack({
    $: 'jquery',
    jQuery: 'query',
    Popper: ['popper.js', 'default']
}))

module.exports = environment
