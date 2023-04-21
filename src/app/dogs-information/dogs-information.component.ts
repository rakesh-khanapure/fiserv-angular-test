import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DogsInformationService } from './services/dogs-information.service';
import { DogBreed } from './models/dog-breed.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dogs-information',
  templateUrl: './dogs-information.component.html',
  styleUrls: ['./dogs-information.component.scss']
})
export class DogsInformationComponent implements OnInit, OnDestroy {

  dogsInformation = new MatTableDataSource<DogBreed>([]);
  
  matColumns = ['breed', 'regions'];
  dogImage = '';
  imageTitle = '';
  
  private destroy$ = new Subject<boolean>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dogsInfoService: DogsInformationService) { }

  ngOnInit(): void {
    this.dogsInfoService.getAllBreeds()
    .pipe(takeUntil(this.destroy$))
    .subscribe(response => {
        this.dogsInformation = new MatTableDataSource<DogBreed>(response);
        this.dogsInformation.paginator = this.paginator;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  showDogImage(breed: string, region: string){
    this.imageTitle = `${region} ${breed}`;
    this.dogsInfoService.getDogImage(breed, region)
    .pipe(takeUntil(this.destroy$))
    .subscribe(imageUrl => {
      this.dogImage = imageUrl;
    })
  }

}
