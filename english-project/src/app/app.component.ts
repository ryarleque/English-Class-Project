import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('navBarAnimation', [
      state('collapsable', style({
        width: '1rem',
      })),
      state('expandable', style({
        width: '15rem',
      })),
      transition('collapsable <=> expandable', animate('300ms ease-in')),
    ]),
  ]
})

export class AppComponent {
  title = 'app';

  state: string = 'collapsable';

  animateMe() {
    this.state = (this.state =='collapsable' ? 'expandable' : 'collapsable');
    
  }

}