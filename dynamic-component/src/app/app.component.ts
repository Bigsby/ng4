import { Component, Type, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { DynamicHostDirective } from "./dynamic-host.directive";
import { BaseComponent } from "./base-component";
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  components: ComponentRef[] = [
    {
      name: "Component One",
      component: OneComponent
    },
    {
      name: "Component Two",
      component: TwoComponent
    }
  ];
  @ViewChild(DynamicHostDirective) dynamicHost: DynamicHostDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver){

  }

  selectComponent(component: ComponentRef){
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.component);
    let viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<BaseComponent>componentRef.instance).name = "New Name";
  }


  ngAfterViewInit(): void {
    
  }
  
}

class ComponentRef
{
  name: string;
  component: Type<BaseComponent>;
}
