import IAlbum from "./IAlbum";
import IBook from "./IBook";
import IMovie from "./IMovie";
import ILibraryItem from "./ILibraryItem";
import { enumType } from "./enumType";


export default
    class Library {

    constructor() {  //albums:Album[], book:Book[], movie:Movie[]
        this.albums = [];
        this.books = [];
        this.movies = [];
    }

    private albums: IAlbum[];
    private books: IBook[];
    private movies: IMovie[];

    arrayType(item: ILibraryItem): ILibraryItem[] {
        if (item.type === enumType.album) {
            return this.albums;
        }
        else if (item.type === enumType.book) {
            return this.books;
        }
        else {
            return this.movies;
        }
    }

    findById(id: number, collection: ILibraryItem[]): ILibraryItem {

        let itemFound: ILibraryItem;

        collection.forEach(item => {
            if (id === item.id) {
                itemFound = item;
            };
        });
        return itemFound;
    };

    addItem(item: IAlbum);
    addItem(item: IBook);
    addItem(item: IMovie);
    addItem(item: ILibraryItem) {
        this.arrayType(item).push(item);
        console.log(`${item.name} was added to the library.`)
    }


    checkout(item: ILibraryItem): ILibraryItem {
        let foundItem: ILibraryItem = this.findById(item.id, this.arrayType(item));

        if (!foundItem) {
            console.log(`The requested item, ${item.name}, does not exist in the library.`);
        }
        else {
            foundItem.available = false;
            console.log(`${item.name} has been checked out.`);
            return foundItem;
        }
    }

    return(item: ILibraryItem) {
        let libraryReturn = this.findById(item.id, this.arrayType(item));
        if (!libraryReturn.available) {
            libraryReturn.available = true;
            console.log(`${item.name} was checked back in.`)
        }
        else {
            console.log(`The item ${item.name} has not previously checked out or is not propety of this library`);
        }
    }

    list(itemArray: ILibraryItem[]): void {
        itemArray.forEach(item => {
            console.log(`Inventory: ${item.type} \nID: ${item.id} \nName: ${item.name} \nDescription: ${item.description}`);

            if (item.type === enumType.album) {
                console.log(`Artist: ${item["artist"]}\n`);
            }
            else if (item.type === enumType.book) {
                console.log(`Author: ${item["author"]}\n`);
            }
            else {
                console.log(`Director: ${item["director"]}\n`);
            }
        });
    }

    listItems(): void {
        this.list(this.albums);
        this.list(this.books);
        this.list(this.movies);
    }


}
