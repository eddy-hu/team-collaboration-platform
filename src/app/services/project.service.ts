import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Project } from "../domain";
import { map,mergeMap, count, switchMap } from "rxjs/operators";
import { Observable, from  } from 'rxjs';

@Injectable()
export class PorjectService {
  private readonly domain = "projects";
  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private http: HttpClient,
    @Inject("BASE_CONFIG_URI") private configUri
  ) {}

  //POST
  add(project: Project): Observable<any> {
    project.id = null;
    const uri = `${this.configUri}/${this.domain}`;
    return this.http
    .post(uri, JSON.stringify(project), {
      headers: this.headers
    });
  }

  //PUT
  update(project: Project): Observable<any>  {
    const uri = `${this.configUri}/${this.domain}/${project.id}`;
    const toUpdate = {
        name: project.name,
        desc: project.desc,
        coverImg: project.coverImg
    }// patch: only updates few properties
    return this.http
    .patch(uri, JSON.stringify(toUpdate), {
      headers: this.headers
    });
  }

  
  //DELETE
  delete(project: Project): Observable<any> {
    const delTasks$ = from(project.taskLists)
    .pipe(mergeMap(listId => this.http.delete(`${this.configUri}/taskLists/${listId}`)));

    return delTasks$
    .pipe(switchMap(_ => this.http.delete(`${this.configUri}/${this.domain}/${project.id}`)))
    .pipe(map(_=> project));
  }

  //GET
  get(userId: string): Observable<any> {
    const uri = `${this.configUri}/${this.domain}`;
    return this.http
    .get(uri, {params: {'members_like': userId}});
  }
}
