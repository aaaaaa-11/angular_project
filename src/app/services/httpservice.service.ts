import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }

  axiosGet (api) {
    return new Promise((resolve, reject) => {
      axios.get(api)
        .then(res => {
          // handle success
          resolve(res)
        })
        .catch(err => {
          // handle error
          console.log(err);
          reject(err)
        })
    })
    // .then(() => {
    //   // always executed
    // })
  }
}
