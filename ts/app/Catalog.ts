import Product from "./Product";
import ProductListInterface from "./ProductListInterface";

enum SortEnum {
  'asc' = 'asc',
  'desc' = 'desc'
}

interface SortBy {
  key: string,
  sortType: SortEnum
}

export default class Catalog implements ProductListInterface {
  products: Product[] = []
  sorting = {
    key: 'id' as keyof Product,
    sortType: 'asc'
  }

  async findComments(id: number): Promise<Product> {

    let product: Product = this.findById(id);

    await product.getComments();

    return product;
  }

  findById(id: number): Product {
    let product = this.products.find( (p: Product) => p.id == id ) as Product;
    return product;
  }

  add(p: Product): void {
    this.products.push(p);
  }
  
  sortList(a: Product, b: Product, key: keyof Product) {
    if (a[key] > b[key]) return 1
    if (a[key] < b[key]) return -1
    else return 0
  }

  sortByKey(key: string, sorting: string) {

    this.sorting = {key : key as keyof Product, sortType: sorting}

    if (sorting == SortEnum.asc) {
      return this.products.sort((a, b)=>{
        return this.sortList(a, b, this.sorting.key)
      })
    } else if (sorting == SortEnum.desc) {
      return this.products.sort((a, b)=> {
        return this.sortList(b, a, this.sorting.key)
      })
    }
  }

  // sortProducts(sortBy: SortBy) {
  //   this.sorting = sortBy
    
  //   let sortingKeys: Array<keyof SortBy> = Object.keys(this.sorting) as Array<keyof SortBy>

  //   sortingKeys.forEach(type =>{
  //     this.products = this.sortByKey(type, this.sorting[type]!)
  //   })
  // }
}
