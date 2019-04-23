import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TaskList, Task } from "../domain";
import { map,mergeMap, count, switchMap, reduce } from "rxjs/operators";
import { Observable, from , of,concat  } from 'rxjs';


@Injectable()
export class TaskListService {
  private readonly domain = "taskLists";
  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private http: HttpClient,
    @Inject("BASE_CONFIG_URI") private configUri
  ) {}

  //POST
  add(taskList: TaskList): Observable<any> {
    taskList.id = null;
    const uri = `${this.configUri}/${this.domain}`;
    return this.http
    .post(uri, JSON.stringify(taskList), {
      headers: this.headers
    });
  }

  //PUT
  update(taskList: TaskList): Observable<any>  {
    const uri = `${this.configUri}/${this.domain}/${taskList.id}`;
    const toUpdate = {
        name: taskList.name
    }// patch: only updates few properties
    return this.http
    .patch(uri, JSON.stringify(toUpdate), {
      headers: this.headers
    });
  }

  
  //DELETE
  delete(taskList: TaskList): Observable<any> {
    const uri = `${this.configUri}/taskLists/${taskList.id}`;
    return this.http.delete(uri)
    .pipe(map(_=> taskList));
  }

  //GET
  get(projectId: string): Observable<any> {
    const uri = `${this.configUri}/${this.domain}`;
    return this.http
    .get(uri, {params: {'projectId': projectId}});
  }

  swapOrder(src: TaskList, target: TaskList): Observable<any> {
    const dragUri =  `${this.configUri}/${this.domain}/${src.id}`;
    const dropUri =  `${this.configUri}/${this.domain}/${target.id}`;
    const drag$ = this.http
    .patch(dragUri, JSON.stringify({order: target.order}), { headers: this.headers});

    const drop$ = this.http
    .patch(dropUri, JSON.stringify({order: src.order}), { headers: this.headers});

    return concat(drag$, drop$).pipe(reduce((arr, list) => [...arr, list],[]));

  }
}
