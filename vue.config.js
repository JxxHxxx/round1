const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // lint 오류 시 경고만 표기
  lintOnSave: 'warning'
})
