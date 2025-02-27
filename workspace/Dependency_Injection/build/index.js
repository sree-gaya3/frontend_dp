"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const BookRepoImpl_1 = __importDefault(require("./BookRepoImpl"));
const BookService_1 = __importDefault(require("./BookService"));
const BookController_1 = __importDefault(require("./BookController"));
let container = new inversify_1.Container();
container.bind("bookRepo").to(BookRepoImpl_1.default).inSingletonScope();
container.bind("bookService").to(BookService_1.default).inSingletonScope();
let controller = container.get(BookController_1.default);
controller.print();
