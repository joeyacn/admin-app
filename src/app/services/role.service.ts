import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SelectItem } from 'primeng/primeng';
import { Role } from '../home/content/role/role';

import { ROLE, CODE } from '../home/content/role/mock-role';

import 'rxjs/add/observable/of';

@Injectable()
export class RoleService {
  // roles
  getRoles(): Observable<Role[]> {
    return Observable.of(ROLE);
  }

  // codes
  getCodes(): SelectItem[] {
    const codes: SelectItem[] = null;
    let i = 0;
    for (const code of CODE) {
      i++;
      codes[i].label = code;
      codes[i].value = code;
    }
    return codes;
  }
}
