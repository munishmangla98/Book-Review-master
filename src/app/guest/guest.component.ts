import { Component } from '@angular/core';
import { books } from '../data_type';
import { BooksService } from '../servives/books.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent {
    trending_book:undefined|books[]=[];
    constructor(private book:BooksService){
    }
    ngOnInit(data:books):void{
    this.book.trending_book(data).subscribe((result)=>{
      console.warn(result);
      this.trending_book=result;
    })
    }
  }



// @Component({
// 	selector: 'ngbd-carousel-pause',
// 	standalone: true,
// 	imports: [NgbCarouselModule, FormsModule],
// 	templateUrl: './carousel-pause.html',
// })
// export class NgbdCarouselPause {
// 	images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

// 	paused = false;
// 	unpauseOnArrow = false;
// 	pauseOnIndicator = false;
// 	pauseOnHover = true;
// 	pauseOnFocus = true;

// 	@ViewChild('carousel', { static: true }) carousel: NgbCarousel;

// 	togglePaused() {
// 		if (this.paused) {
// 			this.carousel.cycle();
// 		} else {
// 			this.carousel.pause();
// 		}
// 		this.paused = !this.paused;
// 	}

// 	onSlide(slideEvent: NgbSlideEvent) {
// 		if (
// 			this.unpauseOnArrow &&
// 			slideEvent.paused &&
// 			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
// 		) {
// 			this.togglePaused();
// 		}
// 		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
// 			this.togglePaused();
// 		}
// 	}
// }