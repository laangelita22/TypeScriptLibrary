import { enumType } from "./enumType";

export default 
interface ILibraryItem {
    id: number;
    name: string;
    description: string;
    available: boolean;
    type: enumType;    
}

