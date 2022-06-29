import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { EditComponent } from './components/edit/edit.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: ListViewComponent },
  {
    path: 'crear',
    component: CreateProductComponent,
  },

  { path: 'productos/:productId', component: DetailProductComponent },
  { path: 'editar/:productId', component: EditComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
