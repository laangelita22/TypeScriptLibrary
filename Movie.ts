import IMovie from "./IMovie";
import { enumType } from "./enumType";

export default 
class Movie implements IMovie {
    
    constructor(id:number, name:string, description:string, available:boolean, director:string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.available = available;
        this.director = director;
        this.type = enumType.movie;
        
    }
    
    id:number;
    name:string;
    description: string;
    available:boolean;
    director:string;
    type: enumType;    
    
}