const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    entry:'./src/app.js',
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
            rules:[{
                test:/.scss$/,
                use:[{loader:'style-loader'},{loader:'css-loader'}],
            }]
           
        },
    
    plugins:[
        new HtmlWebpackPlugin({
            title: "Webpack Output",
        }),
    ]
};