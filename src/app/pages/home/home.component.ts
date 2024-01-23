import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    );

    this.setComponentValues(this.id);
  }

  setComponentValues(id: string | null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0];
    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }
}