import { BookDeleteComponent } from './components/book/book-delete/book-delete.component';
import { BookUpdateComponent } from './components/book/book-update/book-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { BookCrudComponent } from "./views/book-crud/book-crud.component";
import { BookCreateComponent } from './components/book/book-create/book-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "books",
    component: BookCrudComponent
  },
  {
    path: "books/create",
    component: BookCreateComponent
  },
  {
    path: "books/update/:id",
    component: BookUpdateComponent
  },
  {
    path: "books/delete/:id",
    component: BookDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
