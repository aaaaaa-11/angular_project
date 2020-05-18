import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecircle',
  templateUrl: './lifecircle.component.html',
  styleUrls: ['./lifecircle.component.scss']
})
export class LifecircleComponent implements OnInit {

  public userinfo:string = ''

  public olduserinfo:string = ''

  public msg:string = 'default msg'

  @Input('title') title:string

  constructor() {
    console.log('constructor');
   }

  ngOnChanges () {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck () {
    console.log('ngDoCheck');
    if (this.userinfo === this.olduserinfo) {
      console.log('数据没有改变');
    } else {
      console.log(`数据从${this.olduserinfo}变成了${this.userinfo}`);
    }
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked () {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit () {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked () {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy () {
    console.log('ngOnDestory');
  }

  changeMsg () {
    this.msg = 'new msg'
  }


}
