import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Search, Github, RotateCw, Users, Book, Code } from 'angular-feather/icons';

const icons = {
  Search,
  Github,
  RotateCw,
  Users,
  Book,
  Code,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
