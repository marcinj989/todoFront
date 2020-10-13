import { TodoAttr } from "./TodoAttr";

export class TodoDto {
    Header: string;
    Content: string;
    Id: string;

    constructor(private attr: Partial<TodoAttr>){
        this.Content = attr.content;
        this.Header = attr.header;
        this.Id = attr.id;
    }
}
