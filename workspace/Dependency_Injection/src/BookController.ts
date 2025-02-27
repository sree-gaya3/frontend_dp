import { inject } from "inversify";
import BookService from "./BookService";

export default class BookController {
    @inject("bookService")
    bookService!: BookService;

    print() {
        this.bookService.getBooks().forEach((book: any) => {console.log(book);});
    }
}