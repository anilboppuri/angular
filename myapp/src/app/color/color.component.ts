import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent
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
  @Input()
  title: string = 'hello';

  constructor() {
    console.log(' constructor() is called....Child  ..');
  }

  ngOnDestroy(): void {
    console.log('from ngOnDestroy() .. called from child...');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked from child.....');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterContentInit from child.....');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked from child.....');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()... child');
  }

  ngDoCheck(): void {
    console.log(' ngDoCheck() called... from Child');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(' ngOnChanges is called ..... Child component');
  }

  ngOnInit(): void {
    console.log(' ngOnInit() is called ..... Child component');
  }
}
