/** 
 * js接收android发起的事件和携带的数据
 * android
 * window.WebViewJavascriptBridge.callHandler(
    "eventName",
    params,
    callback
  );
 * 

 * @param {Function} receiceDataFromApp -js回调函数
 * @param {String}   jsMethodName -js监听的事件名
 * @param {Object}   dataToApp -js传递的事件参数
 *
 */
const callAppMethod = (
  receiceDataFromApp,
  methodNameInJava = 'functionInJava',
  params = '来自js的参数'
) => {
  window.WebViewJavascriptBridge.callHandler(
    methodNameInJava,
    params,
    responseData => {
      receiceDataFromApp(responseData)
    }
  )
}

if (window.WebViewJavascriptBridge) {
  callAppMethod(receiceDataFromApp, methodNameInJava, params)
} else {
  document.addEventListener(
    'WebViewJavascriptBridgeReady',
    () => {
      callAppMethod(receiceDataFromApp, methodNameInJava, params)
    },
    false
  )
}
