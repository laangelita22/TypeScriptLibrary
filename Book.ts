import IBook from "./IBook";
import { enumType } from "./enumType";

export default 
class Book implements IBook {
    
    constructor(id:number, name:string, description:string, available:boolean, author:string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.available = available;        
        this.author = author;
        this.type = enumType.book;        
    }
    
    id:number;
    name:string;
    description: string;
    available:boolean;    
    author:string;
    type: enumType;    
    
}