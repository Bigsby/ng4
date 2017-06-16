import { Component } from "@angular/core";
import { trigger, state, animate, transition, style, AnimationTriggerMetadata } from '@angular/animations';

const FadeInAnimation =
    trigger('fadeInAnimation', [
        transition(':enter', [

            style({ opacity: 0 }),

            animate('.5s', style({ opacity: 1 }))
        ])
    ]);

export function FadeInComponent(name: string): Component {
    return {
        templateUrl: `./${name}/${name}.component.html`,
        styleUrls: [ `./${name}/${name}.component.less` ],
        animations: [FadeInAnimation],
        host: { '[@fadeInAnimation]': '' }
    };
}