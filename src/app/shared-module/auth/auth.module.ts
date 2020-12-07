import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent],
  entryComponents: [AuthFormComponent]
})
export class AuthModule {}

