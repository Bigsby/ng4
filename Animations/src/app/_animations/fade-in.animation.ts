import { Component } from "@angular/core";
import { trigger, state, animate, transition, style } from '@angular/animations';

export const FadeInAnimation =
    trigger('fadeInAnimation', [
        transition(':enter', [

            style({ opacity: 0, transform: 'scale(0,0)' }),

            animate('.5s', style({ opacity: 1, transform: 'scale(1)' }))
        ]),
        transition(':leave', [

            style({ opacity: 1, transform: 'scale(1,1)' }),

            animate('.5s', style({ opacity: 1, transform: 'scale(0)' }))
        ])
    ]);

export function FadeInComponent(name: string): Component {
    return {
        templateUrl: `../${name}/${name}.component.html`,
        styleUrls: [`../${name}/${name}.component.less`],
        animations: [FadeInAnimation],
        host: { '[@fadeInAnimation]': '' }
    };
}