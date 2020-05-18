import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(public request:RequestService) { }

  ngOnInit(): void {

    // 同步方法
    let data = this.request.getData()
    console.log(data);

    // callback获取异步数据
    this.request.getCallbackData((data) => {
      let callbackData:any = data
      console.log(callbackData);
    })

    // Promise获取异步数据
    let promiseData:any = this.request.getPromiseData()
    promiseData.then(res => {
      console.log(res);
    })

    // Rxjs获取异步数据
    // let rxjsData:any = this.request.getRxjsData()
    // rxjsData.subscribe((data) => {
    //   console.log(data);
    // })

    // 过1s撤回Rxjs操作
    let streem:any = this.request.getRxjsData()
    let d = streem.subscribe((data) => {
      console.log(data);
    })

    setTimeout(() => {
      d.unsubscribe() // 取消订阅
    }, 1000);

    // 多次执行
    let pinterval:any = this.request.getPromiseIntervalData()
    pinterval.then(data => {
      console.log(data);
    })

    // let rinterval:any = this.request.getRxjsIntervalData()
    // rinterval.subscribe((data) => {
    //   console.log(data);
    // })

    // 用工具方法对返回的数据进行处理
    let streemNum = this.request.getRxjsIntervalNum()
    streemNum.pipe(
      // 可同时使用，map接收的是上面filter处理后的数据
      filter(val => {
        if (val % 2 === 0) {
          return true
        }
      }),
      map(val => {
        return val * val
      })
    )
    .subscribe((data) => {
      console.log(data);
    })
  }

}
