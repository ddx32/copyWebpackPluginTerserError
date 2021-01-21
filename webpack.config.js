const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: 'assets/**',
                to: path.join(__dirname, 'dist')
            }]
        })
    ]
}