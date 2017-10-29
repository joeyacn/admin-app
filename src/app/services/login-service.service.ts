import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServiceService {
  login_date : Date;
  username : string;

  constructor(private http : Http) { }

  //获取系统时间
  getSysDate() : Date{
    this.login_date = new Date();
    return  this.login_date;
  }

  getUsername() : string{
    return this.username;
  }

  //Http请求，验证用户名和密码
  RequestLogin(name, password) : boolean{
    //console.log(name + "" + password);
    this.username = name;
    return true;
  }
}
