var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class Catalog {
    constructor() {
        this.products = [];
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let product = this.products.find((p) => p.id == id);
            yield product.getComments();
            return product;
        });
    }
    add(p) {
        this.products.push(p);
        return p;
    }
}
