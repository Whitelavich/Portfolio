const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
        // Important: return the modified config
        config.module.rules.push({
            test: /\.txt/,
            type: 'asset/source',
        })
        config.plugins.push(new CopyPlugin({
            patterns:[
                {from: path.resolve(__dirname,"./public/logos") ,to:path.resolve(__dirname,"./public/logos/[name].txt")},
                {from: path.resolve(__dirname,"./public/other") ,to:path.resolve(__dirname,"./public/other")}
            ]
        }))
        return config
    },
}