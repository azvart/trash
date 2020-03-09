const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry:'./src/app.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(sass|scss)$/,
                use: [{
                    loader:'style-loader'
                },{
                    loader:"css-loader"
                },{
                    loader:"sass-loader"
                }]
            }
        ]
    },
    pluguns:[
        new ExtractTextPlugin('style.css')
    ]
};