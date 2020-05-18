import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  // 同步
  getData () {
    return 'this is service data'
  }

  getCallbackData (callback) {
    setTimeout(() => {
      let data = '张三'
      // return '张三' // 不能直接获取异步数据
      callback(data)
    }, 1000);
  }

  getPromiseData () {
    return new Promise((resolve) => {
      setTimeout(() => {
        let username = '张三 -- Promise'
        resolve(username)
      }, 1500);
    })
  }

  getRxjsData () {
    return new Observable((observer) => {
      setTimeout(() => {
        let data = '张三 -- rxjs'
        observer.next(data)
        // observer.error(data)
      }, 3000);
    })
  }

  // 多次执行
  getPromiseIntervalData () {
    return new Promise((resolve) => {
      setInterval(() => {
        let username = "张三 --promise interval"
        resolve(username)
      }, 2000)
    })
  }

  getRxjsIntervalData () {
    return new Observable((observer) => {
      let count = 0,
          timer = null
      timer = setInterval(() => {
        observer.next('张三 -- rejx interval')
        count ++
        if (count === 5) {
          clearInterval(timer)
        }
      }, 1000)
    })
  }

  getRxjsIntervalNum () {
    let count = 0, timer = null
    return new Observable<any>((observer) => {
      timer = setInterval(() => {
        count ++
        observer.next(count)
        if (count === 5) {
          clearInterval(timer)
        }
      }, 1000)
    })
  }
}
