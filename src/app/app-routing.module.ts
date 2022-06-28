import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { ListViewComponent } from './components/list-view/list-view.component';

const routes: Routes = [
  { path: '', component: ListViewComponent },
  {
    path: 'crear',
    component: CreateProductComponent,
  },

  { path: 'products/:productId', component: DetailProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
