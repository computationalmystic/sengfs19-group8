import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareIssuesComponent } from './compare-issues.component';

describe('CompareIssuesComponent', () => {
  let component: CompareIssuesComponent;
  let fixture: ComponentFixture<CompareIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
