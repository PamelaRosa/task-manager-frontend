import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }

  createList(title: string): Observable<any> {
    // Enviar uma requisição web para criar a lista
    return this.webRequestService.post('lists', { title });
  }

  getLists(): Observable<any> {
    return this.webRequestService.get('lists');
  }

  getTasks(listId: string): Observable<any> {
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }

}
