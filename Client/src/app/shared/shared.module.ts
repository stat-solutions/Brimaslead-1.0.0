import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutService } from './services/other-services/layout.service';
import { MenudropdownDirective } from './directives/menudropdown.directive';
import { DropzoneDirective } from './directives/dropzone.directive';

@NgModule({
  declarations: [
    MenudropdownDirective,
    DropzoneDirective,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    MenudropdownDirective
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        LayoutService,
      ]
    };
  }
}
