import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule, TabViewModule, MenuItem } from 'primeng/primeng';

//HOME操作界面
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './home/header/header.component';
import { MenuComponent } from './home/menu/menu.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContentComponent } from './home/content/content.component';

//登录界面
import { LoginMainFrameComponent } from './login/login-main-frame/login-main-frame.component';

//app-root
import { AppComponent } from './app.component';

//Service & Routes & HTTP
import { LoginServiceService } from './services/login-service.service';
import { TabService } from './services/tab.service';
import { routing } from './routes/app.routes';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    LoginMainFrameComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [
    LoginServiceService,
    TabService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
