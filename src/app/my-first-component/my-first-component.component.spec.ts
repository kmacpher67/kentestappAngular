import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstComponentComponent } from './my-first-component.component';

describe('MyFirstComponentComponent given a page display HelloWorld', () => {
  let component: MyFirstComponentComponent;
  let fixture: ComponentFixture<MyFirstComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should say helloword', () => {

    const HELLO_RESULT = 'Hello kentest worldwide';
    const sayHello = new MyFirstComponentComponent;
    sayHello.firstName = 'kentest';
    sayHello.lastName = 'worldwide';

    expect(sayHello.sayHello()).toBe(HELLO_RESULT);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
