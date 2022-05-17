import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "article",
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "article"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
