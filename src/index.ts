import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2bSidebarComponent } from './ng2b-sidebar.component';

@NgModule({
  declarations: [Ng2bSidebarComponent],
  imports: [CommonModule],
  exports: [Ng2bSidebarComponent]
})
export class SidebarModule {}
