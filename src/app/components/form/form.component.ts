import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleInfo:any = {
    username: 'ss',
    gender: 'male',
    cities: ['北京', '上海', '深圳'],
    city: '',
    hobby: [{
      title: '吃饭',
      checked: false
    }, {
      title: '睡觉',
      checked: false
    }, {
      title: '玩游戏',
      checked: false
    }],
    remarks: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  getFormData () {
    console.log(this.peopleInfo);
  }

}
