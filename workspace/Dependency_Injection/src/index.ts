import { Container } from "inversify";
import BookRepoImpl from "./BookRepoImpl";
import BookService from "./BookService";
import BookController from "./BookController";

let container = new Container();

container.bind("bookRepo").to(BookRepoImpl).inSingletonScope();
container.bind("bookService").to(BookService).inSingletonScope();


let controller = container.get<BookController>(BookController);

controller.print();