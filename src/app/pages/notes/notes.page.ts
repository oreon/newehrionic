import { Component, OnInit } from "@angular/core";
import { NoteService } from "../../services/notes.service";
import { Note } from "../../entities/note";
import { ActivatedRoute } from "@angular/router";
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BaseListPage } from '../../base/base-list-page';

@Component({
  selector: "app-notes",
  templateUrl: "./notes.page.html",
  styleUrls: ["./notes.page.scss"]
})
export class NotesPage extends BaseListPage<Note> implements OnInit {

  constructor(
    protected noteService: NoteService,
    protected activatedRoute: ActivatedRoute
  ) {
    super(noteService, activatedRoute )
  }

  searchFunction(x){
    return x.description;
  }
  

  
}
