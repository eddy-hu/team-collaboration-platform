export interface Project{
    id?: string;
    name: string;
    desc?: string;
    coverImg: string;
    taskLists?: string[];//tasklist id
    members?: string[];// members id

}