import {Component, OnInit, Input} from '@angular/core'; // 添加了Input功能
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // 对应hero.html文件中 <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  // input由父模块向子模块传递内容
  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {

  }

  ngOnInit() {
    this.getHero();
  }

  // Route parameters are always strings.
  // The JavaScript (+) operator converts the string to a number, which is what a hero id should be
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  // 返回
  goBack(): void {
    this.location.back();
  }

}
