import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TodoPage } from './todo.page';

import { TodoPageRoutingModule } from './todo-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TodoPageRoutingModule],
  declarations: [TodoPage],
})
export class TodoPageModule {}
