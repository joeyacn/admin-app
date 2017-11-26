import { NgModule } from '@angular/core';
import { AccordionModule, TabViewModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule, SharedModule, DialogModule, MultiSelectModule, DropdownModule } from 'primeng/primeng';

// Home主控件
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// Layout控件
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
// 子功能控件
import { UserAdminComponent } from './user/userAdmin/userAdmin.component';
import { UserInfoComponent } from './user/userInfo/userInfo.component';
import { RoleComponent } from './role/role.component';
// Service
import { RoleService } from './services/role.service';
import { TabService } from './services/tab.service';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    UserAdminComponent,
    UserInfoComponent,
    RoleComponent,
  ],
  imports: [
    CommonModule, FormsModule,
    DataTableModule, SharedModule, DialogModule, MultiSelectModule, DropdownModule,
    TabViewModule,
    HomeRoutingModule,
  ],
  providers: [
    RoleService,
    TabService,
  ],
})
export class HomeModule { }
