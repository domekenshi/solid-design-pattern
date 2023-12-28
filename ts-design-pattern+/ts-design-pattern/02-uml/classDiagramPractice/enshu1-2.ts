// ## 演習1
// 次のクラス図をTypeScriptで実装してください

// ![演習1](practice1.png)

// メソッドの仕様
// - workメソッドは"働きます"とログ出力します
// - getSalaryメソッドはフィールドのsalaryを返却します
// - setSalaryメソッドは引数のsarlaryをフィールドのsalaryに代入します

class Employee2 {
  private id: number;
  private name: string;
  private salary: number;

  // ★publicは省略可
  public work() {
    console.log("働きます");
  }
  // ★型宣言必要
  protected getSalary() {
    return this.salary;
  }
  // ★型宣言必要
  protected setSalary(salary) {
    this.salary = salary;
  }
}
// 解答との比較
// class Employee {
//     private id: number;
//     private name: string;
//     private salary: number;

//     work() {
//         console.log('働きます');
//     }

//     protected getSalary():number {
//         return this.salary;
//     }

//     protected setSalary(salary: number) {
//         this.salary = salary;
//     }
// }
// ## 演習2
// 次のクラスをTypeScriptで実装してください
// ![演習2](practice2.png)

// メソッドの仕様
// - Rectangleの面積はwidthとheightの掛け算で算出します
// - Circleの面積はradius * radius * Math.PIで算出します

// practice2.pngを見ながら実装していくことに時間がかかった
// 特に◇→をどのように実装するかに時間がかかってしまった
class Client2 {
  private shape: Shape2;
}

interface Shape2 {
  calcArea(): number;
}

class Rectangle2 implements Shape2 {
  private width: number;
  private height: number;

  calcArea(): number {
    return this.width * this.height;
  }
}
class Circle2 implements Shape2 {
  private radius: number;
  calcArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

// クラス図 演習2

// interface Shape {
//   calcArea(): number;
// }

// class Rectangle implements Shape {
//   private width: number;
//   private height: number;

//   calcArea(): number {
//       return this.width * this.height;
//   }
// }

// class Circle implements Shape {
//   private radius: number;

//   calcArea(): number {
//       return this.radius * this.radius * Math.PI;
//   }
// }

// class Client {
//   private shape: Shape;
// }
