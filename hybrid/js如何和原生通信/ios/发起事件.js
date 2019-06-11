/**
 *  callback,
 *
 *    jsMethodName = 'functionInJs',   paramsFromJs = { key: 'js模拟参数' }
 *
 *
 */

window.setupWebViewJavascriptBridge(bridge => {
  bridge.registerHandler(jsMethodName, (data, responseCallback) => {
    callback(data)
    responseCallback(paramsFromJs)
  })
})
