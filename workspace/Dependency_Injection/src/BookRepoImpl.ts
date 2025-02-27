import BookRepo from "./BookRepo";
import { injectable } from "inversify";

@injectable()
export default class BookRepoImpl implements BookRepo {
    getBooks() {
        return [
            { id: 1, title: "The Great Gatsby"},
            { id: 2, title: "Of Mice" },
        ];
    }
}
