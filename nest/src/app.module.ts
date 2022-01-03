
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogService, UseValueService, UseFactroryService, LogStringTokenService } from './app.logService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService, // 依赖注入

    // 也可以使用下面的方式引入
    {
      provide: LogService, // Token类型 标志
      useClass: LogService // 注册的是一个类
    },
    {
      provide: UseValueService,
      useValue: new UseValueService()
    },
    {
      provide: UseFactroryService,
      useFactory: ()=> new UseFactroryService()
    },
    {
      provide: 'StringToken',
      useValue: new LogStringTokenService()
    }
  ],
})
export class AppModule {}