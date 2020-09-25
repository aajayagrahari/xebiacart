export class Users {
    username: string;
    password: string;
  }

export class Product {
    id: string;
    colour: colour[];
    brand:string;
    discount:number;
    rating:number;
    image:string;
    price: price[];
    title:string;

  }

  export class colour{
    color :string;
    title :string;
  }

  export class price{
    final_price :number;
  }

  export class filter{
    type :string;
    values: values[];
  }

  export class values{
      title:string;
      value:string;
      displayValue:string;
      key:string;
      color:string;
  }

 
