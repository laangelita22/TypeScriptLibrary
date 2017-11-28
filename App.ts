import Library from "./Library";
import Album from "./Album";
import Book from "./Book";
import Movie from "./Movie";

import ILibraryItem from "./ILibraryItem";
import IAlbum from "./IAlbum";
import IBook from "./IBook";
import IMovie from "./IMovie";


let library = new Library();

let cansion = new Album(2002, "Sin Bandera", "Charting, award-winning Latin pop duo comprised of singers, songwriters, and musicians Leonel García and Noel Schajris. ", true, "Leonel Garcia, Noel Schajris");
let libro = new Book(2000, "Because of Winn-Dixie", "She misses her friends, her home, and her mother who left her when she was a little girl. Life is pretty rotten. Enter Winn-Dixie, a mangy stray dog that Opal befriends as he ransacks a Winn-Dixie grocery store. The lovable mutt falls in love with Opal and the preacher, they fall in love with him, and voila", true, "Kate DiCamillo");
let pelicula = new Movie(1985, "The Goonies", "However Mikey, stumbles upon a mysterious map to a treasure of a famed pirate 'One-Eyed' Willie. So, The Goonies embark on an adventure to find the treasure and save their neighborhood. ... So, The Goonies have to stay one step head of the Fratellis and find the treasure while avoiding a system of traps.", true, "Richard Donner");


library.addItem(cansion);
library.addItem(libro);
library.addItem(pelicula);

library.checkout(cansion);

library.return(cansion);
library.return(pelicula);

library.listItems();
