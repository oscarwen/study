import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.90, 3.5, '这是我的第一个商品，是我在学习Angular实战时创建的。', ['电子产品', '计算机编程']),
      new Product(2, '第二个商品', 3.90, 2.5, '这是我的第二个商品，是我在学习Angular实战时创建的。', ['少儿读物', '儿童丛书']),
      new Product(3, '第三个商品', 2.88, 4.5, '这是我的第三个商品，是我在学习Angular实战时创建的。', ['图书', '散文']),
      new Product(4, '第四个商品', 4.35, 4.0, '这是我的第四个商品，是我在学习Angular实战时创建的。', ['电子产品', '计算机编程']),
      new Product(5, '第五个商品', 3.80, 5.0, '这是我的第五个商品，是我在学习Angular实战时创建的。', ['计算机丛书', '硬件知识']),
      new Product(6, '第六个商品', 6.15, 3.5, '这是我的第六个商品，是我在学习Angular实战时创建的。', ['电子产品', '计算机编程'])
    ];
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categoreis: Array<string>
  ) {}
}
