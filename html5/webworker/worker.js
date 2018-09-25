self.addEventListener('message',(e)=>{
  console.log('我在worker里');
  self.postMessage('worker:'+e.data)
  self.close()//worker 关闭
},false)
