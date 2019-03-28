import { ActivatedRoute } from "@angular/router";
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


export abstract class BaseListPage<T> {
  entities: T[] = [];
  items: T[] = []; //filtered list to be displayed
  public searchControl: FormControl;
  searching = false;

  constructor(
    protected noteService: any,
    protected activatedRoute: ActivatedRoute
  ) {
    this.searchControl = new FormControl();
  }

  onSearchInput() {
    this.searching = true;
  }

  ngOnInit() {
    this.setFilteredItems("");
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.noteService.getAll(+id).subscribe(x => {
      this.entities = x;
      this.items = this.entities;
    });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
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
      this.searchFunction(x)
      .toLowerCase()
      .indexOf(searchTerm.toLowerCase()) > -1
      );
  }

  searchFunction(x){
    return JSON.stringify(x);
  }
}
