import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }

  getLists(): Observable<any> {
    return this.webRequestService.get('lists');
  }

  createList(title: string): Observable<any> {
    // Enviar uma requisição web para criar a lista
    return this.webRequestService.post('lists', { title });
  }

  getTasks(listId: string): Observable<any> {
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }

  createTask(title: string, listId: string): Observable<any> {
    // Enviar uma requisição web para criar a tarefa
    return this.webRequestService.post(`lists/${listId}/tasks`, { title });
  }

  completed(task: Task): Observable<any> {
    return this.webRequestService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    });
  }

}
