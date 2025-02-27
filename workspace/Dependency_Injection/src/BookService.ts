import { inject, injectable } from "inversify";
import BookRepo from "./BookRepo";

@injectable()
export default class BookService {
    @inject("bookRepo")
    bookRepo!: BookRepo;

    getBooks() {
        return this.bookRepo.getBooks();
    }
}