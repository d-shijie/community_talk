const path = require('path')
module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }

    }
}