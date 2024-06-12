import { Component, OnInit, Input } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [MaterialModule,MatListModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }
}

