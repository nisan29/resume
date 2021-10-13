import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const materialModules: any[] = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules
  ]
})
export class MaterialModule { }
