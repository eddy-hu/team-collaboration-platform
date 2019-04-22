import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../domain';
import { map } from 'rxjs/operators';


@Injectable()
export class PorjectService {

    private readonly domain = 'projects';
    private headers = new HttpHeaders ({
        'Content-Type' : 'application/json'
    });

    constructor(
        private http: HttpClient,
        @Inject('BASE_CONFIG') private config
    ){

    }

    //POST
    add(project: Project){
        const uri = `${this.config.uri}/${this.domain}`;
        return this.http
        .post(uri,JSON.stringify(project),{headers: this.headers});
    }

}