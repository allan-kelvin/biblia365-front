import { Component, OnInit  } from '@angular/core';
import { BibleService } from '../bible/bible.service';

@Component({
  selector: 'app-leitura-biblia',
  standalone: true,
  imports: [],
  templateUrl: './leitura-biblia.component.html',
  styleUrl: './leitura-biblia.component.css'
})
export class LeituraBibliaComponent {
  books: any[];

  constructor(private bibleService: BibleService) {}

  ngOnInit() {
    this.bibleService.getBooks().subscribe(response => {
      this.books = response;
    });
  }

}
