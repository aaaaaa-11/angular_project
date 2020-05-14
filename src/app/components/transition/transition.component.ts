import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  public classFlag:number = 0

  constructor() { }

  @ViewChild('tcontent') tcontent:any
  @ViewChild('taside') taside:any

  ngOnInit(): void {
  }

  changeAside () {
    if (this.classFlag) {
      this.tcontent.nativeElement.className = "content-wrapper t-cleft"
      this.taside.nativeElement.className = "aside-wrapper t-aright"
    } else {
      this.taside.nativeElement.className = "aside-wrapper t-aleft"
      this.tcontent.nativeElement.className = "content-wrapper t-cright"
    }
    this.classFlag = this.classFlag ? 0 : 1
  }

}
