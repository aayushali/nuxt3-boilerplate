module.exports = {
    apps: [
        {
            name: 'epl',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
