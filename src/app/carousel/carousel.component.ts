import { Component, Input } from '@angular/core';
import { style, animate, animation, trigger, transition, useAnimation } from "@angular/animations";

// =========================
// Fade
// =========================
const fadeIn = animation([
  style({ opacity: 0 }), // start state
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 1 })
  )
]);

const fadeOut = animation([
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 0 })
  )
]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger("slideAnimation", [

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),
    ])
  ]
})
export class CarouselComponent {
  @Input() slides: Slide[] = [
    {src: '../../assets/DELTA1.avif'},
    {src: '../../assets/DELTA2.avif'},
    {src: '../../assets/DONALDSON.avif'},
    {src: '../../assets/PHOENIX.avif'},
    {src: '../../assets/SIEMENS.avif'},
    {src: '../../assets/TECNOLITE.avif'}
  ]
  @Input() animationType = 'fade';

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides!.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides!.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnInit() {
    this.preloadImages(); // for the demo
  }

  preloadImages() {
    for (const slide of this.slides!) {
      new Image().src = slide.src;
    }
  }
}


export interface Slide {
  headline?: string;
  src: string;
}