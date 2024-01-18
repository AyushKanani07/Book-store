import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSelectModule, NgIf, FormsModule,
  ]
})
export class MaterialModule { }
