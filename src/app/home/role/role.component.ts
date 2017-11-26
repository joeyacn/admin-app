import { Component, OnInit } from '@angular/core';
import { Role } from '../services/role';
import { SelectItem } from 'primeng/primeng';
import { RoleService } from '../services/role.service';

@Component({
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  providers: [RoleService]
})
export class RoleComponent implements OnInit {
  // if add/modify dialog show
  displayDialog: boolean;
  // all role from database
  roles: Role[];
  // all codes from database
  codes: SelectItem[];
  // if add a role
  isAddRole: boolean;
  // Role property codes
  selectedCodes: string[];
  // click selected role to modify or delete
  selectedRole: Role;
  role: Role;

  constructor(private roleService: RoleService) {
    this.codes = [
      {label: 'code001', value: 'code001'},
      {label: 'code002', value: 'code002'},
      {label: 'code003', value: 'code003'},
      {label: 'code004', value: 'code004'},
    ];
  }

  ngOnInit() {
    // init get all roles datas
    this.roleService.getRoles().subscribe((roles) => (this.roles = roles));
  }

  showDialogToAdd() {
    this.isAddRole = true;
    this.role = new NewRole();
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.isAddRole = false;
    this.role = this.cloneRole(event.data);
    this.displayDialog = true;
  }

  // edit role
  cloneRole(r: Role): Role {
    const role = new NewRole();
    for (const prop in r) {
      role[prop] = r[prop];
    }
    return role;
  }

  // delete role
  delete() {
    const deleteIndex = this.findSelectedRoleIndex();
    this.roles = this.roles.filter((value, i) => (i !== deleteIndex));
    this.role = null;
    this.displayDialog = false;
  }
  // modify save
  save() {
    const roles = [...this.roles];
    if (this.isAddRole) {
      roles.push(this.role);
    } else {
      roles[this.findSelectedRoleIndex()] = this.role;
    }
    this.roles = roles;
    this.role = null;
    this.displayDialog = false;
  }

  findSelectedRoleIndex() {
    return this.roles.indexOf(this.selectedRole);
  }
}

class NewRole implements Role {
  constructor(public id?, public code?, public name?, public description?, public parentId?) {}
}

