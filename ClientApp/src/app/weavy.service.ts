import { Injectable, OnDestroy } from '@angular/core';

// Weavy must be declared for usage
declare let Weavy: any;

@Injectable({
  providedIn: 'root'
})
export class WeavyService implements OnDestroy {

  initialized = false;

  jwt;
  weavy;

  constructor() {
    this.jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJsaWxseSIsIm5hbWUiOiJMaWxseSBEaWF6IiwiZXhwIjoyNTE2MjM5MDIyLCJpc3MiOiJzdGF0aWMtZm9yLWRlbW8iLCJjbGllbnRfaWQiOiJXZWF2eURlbW8iLCJkaXIiOiJjaGF0LWRlbW8tZGlyIiwiZW1haWwiOiJsaWxseS5kaWF6QGV4YW1wbGUuY29tIiwidXNlcm5hbWUiOiJsaWxseSJ9.rQvgplTyCAfJYYYPKxVgPX0JTswls9GZppUwYMxRMY0';
    this.weavy = new Weavy({ jwt: this.jwt, init: false });
  }

  init(): void {
    if (!this.initialized && !this.weavy.isInitialized) {
      this.weavy.init();
    }
    this.initialized = true;
  }

  space(selector: any) {
    this.init();
    return this.weavy.space(selector);
  }

  ngOnDestroy(): void {
    this.weavy.destroy();
  }
}
