import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private storageInitialised = false;

  constructor(private storage: Storage) {}

  async getTodos(): Promise<Todo[]> {
    if (!this.storageInitialised) await this.storage.create();

    return (await this.storage.get('todos')) || [];
  }

  async saveTodos(todos: Todo[]) {
    if (!this.storageInitialised) await this.storage.create();

    return this.storage.set('todos', todos);
  }
}
