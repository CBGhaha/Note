import { Injectable } from "@nestjs/common";
import { LogService } from "./app.logService";

@Injectable() // 如果本服务需要依赖于其他服务
export class AppService{
  constructor(
    // 为依赖注入依赖
    private loger: LogService
  ){}
  getHello(){
    this.loger.log('sss');
    return 'hello'
  }
}