import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  title = 'MyAPP';

  constructor() {
    console.log(' constructor() is called.... parent');
  }
  ngOnDestroy(): void {
    console.log('from destroy of parent ....');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked from child.....');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterContentInit from parent.....');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked from parent.....');
  }
  ngAfterContentInit(): void {
    console.log('from ngAfterContentInit() ... parent');
  }
  ngDoCheck(): void {
    console.log(' ngDoCheck() called... from Parent');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(' ngOnChanges is called ..... Parent');
  }

  ngOnInit(): void {
    console.log(' ngOnInit() is called .....parent');
  }

  keyCapture(event: string) {
    this.title = event;
  }

  sendMessage() {
    console.warn('clik event fired .....');
  }

  // title = 'Anil Boppuri'; // {{}}
  // location = 'Trivandrum';
  // company = 'UST';

  // productId = 'AZ101#237';
  // description = 'DualCamera Dual Sim Megapic 256Gb memory';
  // qty = 200;
  // available = this.qty > 0;
  // instock = this.available;
  // orderqty = 0;
  // orderDate: Date = new Date();

  // isorderedQtyAvailable = this.qty > this.orderqty;
  // serviceTimings = ' Open from Moring 9:00 AM to 6:00 PM';
  // deliverColor = 'green';
  // evenColor = 'grey';
  // oddColor = 'cyan';

  // products = [
  //   { productId: '1234', description: 'Mobile', price: '75000' },
  //   { productId: '14334', description: 'Notebook', price: '175000' },
  //   { productId: '7876', description: 'Laptop Toch Screen', price: '125000' },
  //   { productId: '6545', description: 'iPhone15', price: '135000' },
  //   { productId: '90989', description: 'Television', price: '95000' },
  // ];

  // ngOnChanges(changes: SimpleChanges): void {
  //   for (const propName in changes) {
  //     const chng = changes[propName].currentValue;
  //     console.log(chng);
  //   }
  //   //throw new Error('Method not implemented.');
  // }
  // // event handler for place order button
  // printOrder(inputqty: any): void {
  //   console.log(inputqty, 'order placed ');
  // }
}
