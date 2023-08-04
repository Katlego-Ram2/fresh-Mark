import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CommunicationComponent } from './communication/communication.component';
import { MesssageSenderComponent } from './messsage-sender/messsage-sender.component';

const routes: Routes = [

  {
    path :'', pathMatch:"full", component:AppComponent
  },

  {
    path: "mainMenu", component: MainMenuComponent
  },

  {
    path: "communication", component: CommunicationComponent
  },
  {

    path:"message", component: MesssageSenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
