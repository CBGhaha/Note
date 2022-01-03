import { Type } from './type';

// 针对用字符串类型的Token 编写一个类来表示，每次将字符串传给构造函数 实例化 这样可以防止字符串token重名
export class InjectionToken{
  constructor(public injectionIdentifier: string){

  }
}
export type Token<T> = Type<T> | InjectionToken;

export interface BaseProvider<T>{
  provide: Token<T>
}

export interface ClassProvider<T> extends BaseProvider<T>{
  useClass: Type<T>
}
export interface ValueProvider<T> extends BaseProvider<T>{
  useValue: T
}
export interface FactoryProvider<T> extends BaseProvider<T>{
  useFactory: ()=>T
}
export type Provider<T> = ClassProvider<T> | ValueProvider<T> | FactoryProvider<T>;
