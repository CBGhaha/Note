import {NestFactory} from '@nestjs/core';
import {AppModule}  from './app.module';
async function bootstrap(){

  // 使用nest应用工厂， 创建一个nest实例
  const app = await NestFactory.create(AppModule);
  await app.listen(3000)
}

bootstrap();