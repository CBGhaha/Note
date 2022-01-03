import {Get, Controller, Inject} from '@nestjs/common';
import { AppService } from './app.service';
import { LogStringTokenService } from './app.logService';

@Controller('/')
export class AppController{
  // 只要在构造函数里声明依赖， IOC容器会自动帮你注入实例， 你直接调用就可以了不用自己创建实例
  constructor(
    private appSercice: AppService,
    @Inject('StringToken') 
    private stringTokenService: LogStringTokenService
  ){ }

  @Get('/hello')
  hello(){
    let message = this.appSercice.getHello();
    this.stringTokenService.log('访问了hello');
    return message;
  }
}