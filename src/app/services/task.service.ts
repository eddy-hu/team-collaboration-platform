import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TaskList, Task } from "../domain";
import { map, mergeMap, count, switchMap, reduce } from "rxjs/operators";
import { Observable, from, of, concat } from "rxjs";

@Injectable()
export class TaskService {
  private readonly domain = "tasks";
  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private http: HttpClient,
    @Inject("BASE_CONFIG_URI") private configUri
  ) {}

  //POST
  add(task: Task): Observable<any> {
    task.id = null;
    const uri = `${this.configUri}/${this.domain}`;
    return this.http.post(uri, JSON.stringify(task), {
      headers: this.headers
    });
  }

  //PUT
  update(task: Task): Observable<any> {
    const uri = `${this.configUri}/${this.domain}/${task.id}`;
    const toUpdate = {
      desc: task.desc,
      priority: task.priority,
      durDate: task.dueDate,
      reminder: task.reminder,
      ownerId: task.ownerId,
      participantIds: task.participantIds,
      remark: task.remark
    }; // patch: only updates few properties
    return this.http.patch(uri, JSON.stringify(toUpdate), {
      headers: this.headers
    });
  }

  //DELETE
  delete(task: Task): Observable<any> {
    const uri = `${this.configUri}/tasks/${task.id}`;
    return this.http.delete(uri).pipe(map(_ => task));
  }

  //GET
  get(taskListId: string): Observable<any> {
    const uri = `${this.configUri}/${this.domain}`;
    return this.http.get(uri, { params: { taskListId: taskListId } });
  }

  getByLists(lists: TaskList[]): Observable<any> {
    return from(lists)
      .pipe(mergeMap(list => this.http.get(list.id)))
      .pipe(reduce((tasks: Task[], t: Task[]) => [...tasks, ...t], []));
  }

  complete(task: Task): Observable<any> {
    const uri = `${this.configUri}/${this.domain}/${task.id}`;
    return this.http.patch(
      uri,
      JSON.stringify({ completed: !task.completed }),
      {
        headers: this.headers
      }
    );
  }

  move(taskId: string, taskListId: string): Observable<any> {
    const uri = `${this.configUri}/${this.domain}/${taskId}`;
    return this.http.patch(
      uri,
      JSON.stringify({ taskListId: taskListId }),
      {
        headers: this.headers
      }
    );
  }


}
