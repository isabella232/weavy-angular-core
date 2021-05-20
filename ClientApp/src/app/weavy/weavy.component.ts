import {
  Component, OnInit, OnDestroy,
  Input,
  AfterViewInit, ViewChild, ElementRef
} from '@angular/core';

import { WeavyService } from '../weavy.service';

@Component({
  selector: 'app-weavy',
  template: '<div #weavyContainer class="weavy-container"></div>',
  styles: ['.weavy-container { display: contents; }']
})
export class WeavyComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() spaceKey!: string;
  @Input() spaceName!: string;

  @Input() appType!: string;
  @Input() appKey!: string;
  @Input() appName!: string;

  @ViewChild('weavyContainer', null) weavyContainer!: ElementRef;

  weavySpace: any;
  weavyApp: any;

  constructor(private weavy: WeavyService) { }

  ngOnInit(): void {
    this.weavySpace = this.weavy.space({
      key: this.spaceKey,
      name: this.spaceName,
    })
  }

  ngAfterViewInit(): void {
    // After the view is initialized and the weavyContainer is available
    this.weavyApp = this.weavySpace.app({
      type: this.appType,
      key: this.appKey,
      name: this.appName,
      container: this.weavyContainer.nativeElement
    });
  }

  ngOnDestroy(): void {
    this.weavyApp!.remove();
  }
}

