import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareContributorsComponent } from './compare-contributors.component';

describe('CompareContributorsComponent', () => {
  let component: CompareContributorsComponent;
  let fixture: ComponentFixture<CompareContributorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareContributorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
