import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';

// The @Injectable() decorator tells Angular that this service might itself have injected dependencies.
// It doesn't have dependencies now but it will soon. Whether it does or it doesn't, it's good practice to keep the decorator.
@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  // getter模拟返回数据HEROES的方法
  // 真实情况下，数据是由服务器返回的
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  // 根据id 获取heroes数组中的hero
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`heroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
