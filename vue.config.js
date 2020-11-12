module.exports = {
    outputDir:'docs',
    publicPath: process.env.NODE_ENV === 'production'
    ? '/ekf-vue-testapp/'
    : '/'
  }