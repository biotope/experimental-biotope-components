import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slides = ['Slide 1'];
  sliderProps = null;
  selectedSlideIdx = 0;
  lastClickedSlide = '';

  onAddSlide() {
    this.slides = this.slides.concat(['Slide ' + (this.slides.length + 1)]);
  }

  onResetSlider() {
    this.selectedSlideIdx = 0;
    this.sliderProps = {selected: this.selectedSlideIdx};
  }

  onSlideChange(e) {
    this.selectedSlideIdx = e.detail;
  }

  onClickSlide(slide: string) {
    this.lastClickedSlide = slide;
  }
}
