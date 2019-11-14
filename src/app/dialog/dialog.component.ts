import { Component, 
  OnDestroy, 
  AfterViewInit, 
  Type,
  ComponentFactoryResolver, 
  ViewChild,
  ComponentRef,
  ChangeDetectorRef,
  Input} from '@angular/core';
import { InsertionDirective } from './insertion.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit, 
OnDestroy {

  private readonly _onClose = new Subject<any>()

  childComponentType: Type<any>
  public componentRef: ComponentRef<any>
  public onClose = this._onClose.asObservable()

  @ViewChild(InsertionDirective, {static: true})
  insertionPoint: InsertionDirective


  constructor(private componentFactoryResolver: ComponentFactoryResolver, 
    private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
  this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation()
  }

  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
}
}
