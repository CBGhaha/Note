/**
 * @param {Function} receiceDataFromApp -js回调函数
 * @param {String}   jsMethodName -js发起的事件名
 * @param {Object}   dataToApp -js传递的数据
 *
 */

function addJSFun(receiceDataFromApp, jsMethodName, dataToApp) {
  window.WebViewJavascriptBridge.registerHandler(
    jsMethodName,
    (data, responseCallback) => {
      receiceDataFromApp(data)
      responseCallback(dataToApp)
    }
  )
}

if (window.WebViewJavascriptBridge) {
  addJSFun(receiceDataFromApp, jsMethodName, dataToApp)
} else {
  document.addEventListener(
    'WebViewJavascriptBridgeReady',
    () => {
      addJSFun(receiceDataFromApp, jsMethodName, dataToApp)
    },
    false
  )
}
