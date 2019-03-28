import { Component, OnInit } from "@angular/core";
import { NoteService } from "../../services/notes.service";
import { Note } from "../../entities/note";
import { ActivatedRoute } from "@angular/router";
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: "app-notes",
  templateUrl: "./notes.page.html",
  styleUrls: ["./notes.page.scss"]
})
export class NotesPage implements OnInit {
  entities: Note[] = [];
  items: Note[] = []; //filtered list to be displayed
  public searchControl: FormControl;
  searching = false;

  constructor(
    private noteService: NoteService,
    private activatedRoute: ActivatedRoute
  ) {
    this.searchControl = new FormControl();
  }

  onSearchInput(){
    this.searching = true;
  } 

  ngOnInit() {
    this.setFilteredItems("");
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.noteService.getAll(+id).subscribe(x => {
      console.log("found ", x) ;
      this.entities = x
      this.items = this.entities
    });

    this.searchControl.valueChanges
    .pipe(debounceTime(300),
    distinctUntilChanged(),
  )
    .subscribe(search => {
      this.searching = false;
      this.setFilteredItems(search);
    });
  }

  setFilteredItems(searchTerm) {
    if(searchTerm.trim() === ''){
      this.items = this.entities
    }
    //this.entities = this.dataService.filterItems(searchTerm);
    this.items = this.entities.filter((x:any) => 
      x.description
      .toLowerCase()
      .indexOf(searchTerm.toLowerCase()) > -1
      );
  }

  
}
