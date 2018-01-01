import {Component, OnInit, Input} from '@angular/core'; // 添加了Input功能
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // 对应html文件中 <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  // input由父模块向子模块传递内容
  @Input() hero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

}
