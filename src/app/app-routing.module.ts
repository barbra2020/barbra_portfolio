import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
   {
    path: "achievements",
    component: AchievementsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
