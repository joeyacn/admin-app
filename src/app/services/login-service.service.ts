import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { transition } from '@angular/core/src/animation/dsl';

@Injectable()
export class LoginService {
  sysDate: Date;
  userID: string;

  constructor(private http: Http) { }

  // 获取系统时间
  getSysDate(): Date {
    this.sysDate = new Date();
    return  this.sysDate;
  }

  getUsername(): string {
    return this.userID;
  }

  requestLogin(id, pwd): boolean {
    let myHeaders: Headers = new Headers();
    let userID: string;
    let userPwd: string;
    myHeaders.append('username', id);
    myHeaders.append('userpasswd', pwd);

    userID = '';
    userPwd = '';
    // 远程服务
    // this.http.get('/',{headers:myHeaders})
    // .map(response => response.json())
    // .subscribe(data =>{
    //   if(data.key == '200'){
    //     return true;
    //   }
    // });

    // 本地JSON
    return true;
  }
}
