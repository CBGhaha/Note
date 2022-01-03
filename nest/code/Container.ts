
import { Provider, Token } from "./provider";

export class Container{
  public providers = new Map<Token<any>, Provider<any>>();
  // 注册提供者
  addProvider<T>(provider:Provider<T>){
    // provide就是token或者说是标志符
    this.providers.set(provider.provide, provider)
  }
  inject(token:Token<any>){
    let provider = this.providers.get(token);
    if('useValue' in provider){
      return provider.useValue; 
    }else if('useClass' in provider){
      return new provider.useClass();
    }else if('useFactory' in provider){
      return provider.useFactory();
    }
  }
}