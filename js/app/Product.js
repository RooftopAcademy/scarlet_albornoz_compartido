var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class Product {
    constructor() {
        this.id = 0;
        this.name = "";
        this.price = 0;
        this.description = "";
        this.img = "";
        this.comments = [];
        this.qty = 0;
    }
    getComments() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch("https://jsonplaceholder.typicode.com/comments");
            let json = yield res.json();
            this.comments = json.filter((item) => item.postId == this.id);
            return this;
        });
    }
}
