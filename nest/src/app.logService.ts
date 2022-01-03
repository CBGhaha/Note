export class LogService{
  constructor(){
  }
  log(info:string):void{
      console.log(info)
  }
}

export class UseValueService{
  log(info:string):void{
    console.log(info)
  }
}
export class UseFactroryService{
  log(message:string){
    console.log(message);
  }
}
export class LogStringTokenService{
  constructor(){
  }
  log(info:string):void{
      console.log(info)
  }
}