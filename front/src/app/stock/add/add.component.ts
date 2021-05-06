import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('Tournevis', [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    qty: new FormControl(1, [Validators.required, Validators.min(1)]),
  });

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submit(): void {
    console.log('submit');
    this.articleService.add(this.f.value as Article);
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
