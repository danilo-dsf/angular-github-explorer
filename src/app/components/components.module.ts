import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IconsModule],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
})
export class ComponentsModule {}
