import IAlbum from "./IAlbum";
import { enumType } from "./enumType";

export default
    class Album implements IAlbum {

    constructor(id: number, name: string, description: string, available: boolean, artist: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.available = available;
        this.artist = artist;
        this.type = enumType.album;
        
    }
    
    id: number;
    name: string;
    description: string;
    available: boolean;
    artist: string;
    type: enumType;    
}
