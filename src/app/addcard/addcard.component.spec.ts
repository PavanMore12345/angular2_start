/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddcardComponent } from './addcard.component';

describe('AddcardComponent', () => {
  let component: AddcardComponent;
  let fixture: ComponentFixture<AddcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
