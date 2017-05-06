import { bindable } from 'aurelia-framework';


export class AureliaElm {
  @bindable src;
  @bindable flags;
  @bindable ports;

  constructor() {
  }

  attached() {
    this.bootApp();
  }
  
  srcChanged(src, oldSrc) {
    if(src && oldSrc !== undefined)
      this.bootApp();
  }

  bootApp() {
    let { src, elemRef, flags, ports } = this;

    if(!elemRef) {
      console.error('DOM Element reference not found');
      return;
    }

    if(!src || (typeof src.embed !== 'function')) {
      console.error('Src does not look like an elm-like object', src)
      return;
    }

    const app = this.src.embed(elemRef, flags || undefined)

    if(typeof this.ports === 'function') {
      debugger;
      this.ports(app.ports)
    }

    return app;
  }
  
}
