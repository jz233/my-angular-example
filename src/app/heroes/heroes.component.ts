import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero = 'Windstorm';
  // 定义变量hero，类型为Hero，属性分别赋值
  // hero: Hero = {
  // 	id: 1,
  // 	name: 'Windstorm'
  // };

  // 定义变量heroes， 赋值数组
  // heroes = HEROES;

  // 定义但不赋值，通过getHeroes()方法赋值
  heroes: Hero[];


  // 变量名selectHero, 为Hero类型，先不赋值，通过onSelect选中英雄后赋值
  selectedHero: Hero;

  // 构造方法中注入私有的HeroService类型的heroService参数
  // 以单例形式注入
  constructor(private heroService: HeroService) {
  }


  ngOnInit() {
    // 初始化时调用
    this.getHeroes();
  }


  // 返回void的方法onSelect，参数为Hero类型的hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // 定义方法，调用的是HeroService中的getHeroes方法
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }


}
