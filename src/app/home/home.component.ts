import { Component, OnInit,Input } from '@angular/core';
import { StorageSevice } from '../appService/storage.service';
import { AppService } from '../appService/app.service';
import{MySharedService} from '../appservice/MySharedService.service'
import { Router} from '@angular/router';
import { Product,filter,values} from '../model/user.model'

@Component({
  selector: 'app-home',
  providers: [AppService,StorageSevice,MySharedService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userName :string;
  public productlist: Product[] = [];
  public filterlist: filter[] = [];
  

  public brandlist: filter[] = [];
  public colorlist: filter[] = [];
  public pricelist: filter[] = [];

  public valuebrandlist: values[] = [];

  @Input() products: any = [];
  public cartProductCount: number = 0;
  public singleProduct;
  public isAdded;
  

  constructor(private _appservice: AppService,public _storageservice: StorageSevice,protected _route: Router,public _shareservice:MySharedService) { }

  ngOnInit(): void {
    this.userName= this._storageservice.get("UserName");
    this.GetProductsList();
    this.GetFilter();
    this.isAdded = new Array(this.products.length);
    this.isAdded.fill(false, 0, this.products.length);

    this._shareservice.getProducts().subscribe(data => {
      this.cartProductCount = data.length;
    })
   

    // this._shareservice.getProducts().subscribe(data => {

    //   if (data && data.length > 0) {

    //   } else {
    //     this.products.map((item, index) => {
    //       this.isAdded[index] = false;
    //     });
    //   }

    // });
  }

  logout(){
    this._storageservice.remove("Login");
    this._storageservice.remove("UserName");
    this._route.navigate(['/login']);
  }

  GetProductsList(){
    try {
      this._appservice.GetProducts().subscribe((lstproduct) => {
        if (lstproduct.ErrorCode != undefined) {
        } else {
          this.productlist = lstproduct as Product[];
          console.log(this.productlist);
        }
      });
    } catch (Error) {
    }
  }

  GetFilter(){
    try {
      this._appservice.GetFilter().subscribe((lstproduct) => {
        if (lstproduct.ErrorCode != undefined) {
        } else {
          this.filterlist = lstproduct as filter[];
          this.brandlist = this.filterlist.filter(x=> x.type=='BRAND');
          this.valuebrandlist = this.brandlist[0].values; 
          this.colorlist = this.filterlist.filter(x=> x.type=='COLOUR');
          this.pricelist = this.filterlist.filter(x=> x.type=='PRICE');
          console.log(this.brandlist);
          console.log(this.valuebrandlist);
        }
      });
    } catch (Error) {
    }
  }

  changeCheckbox(tags) {
    // if (tags) {
    //   this.tags[i].checked = !this.tags[i].checked;
    // }
  }

 
  
  productcount(){
    this._shareservice.getProducts().subscribe(data => {
      this.cartProductCount = data.length;
    })
  }

  addToCart(event, productId) {
    
    // If Item is already added then display alert message
    if (event.target.classList.contains('btn-success')) {
      alert('This product is already added into cart.');
      return false;
    }

    // Change button color to green
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.isAdded[index] = true;
      }
    })

    this.singleProduct = this.productlist.filter(product => {
      return product.id === productId;
    });

    // this.cartItems.push(this.singleProduct[0]);

    this._shareservice.addProductToCart(this.singleProduct[0]);
  }

}
