import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from './material.module';
;



@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatCardModule, ToolbarComponent, FooterComponent, AuthorsComponent, NotFoundComponent, MaterialModule,
  ],
  exports: [ToolbarComponent, FooterComponent, AuthorsComponent]
})

export class SharedModule { }
