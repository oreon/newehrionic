import { ActivatedRoute } from "@angular/router";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

export abstract class BaseListPage<T> {
  entities: T[] = [];
  items: T[] = []; //filtered list to be displayed
  public searchControl: FormControl;
  searching = false;

  searchOnserver = false;

  constructor(
    protected service: any,
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
    this.service.getAll(+id).subscribe(x => {
      this.entities = x;
      this.items = this.entities;
    });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(search => {
        console.log(search)
        this.searching = false;
        this.setFilteredItems(search);
      });
  }

  setFilteredItems(searchTerm) {
    //debugger;
    if (searchTerm.trim() === "") {
      this.items = this.entities;
    }

    if (this.searchOnserver){
      this.service.searchData(searchTerm).subscribe( x => this.items = x);
    }   
    else
      this.items = this.entities.filter(
        (x: any) =>
          this.searchFunction(x)
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) > -1
      );
  }

  searchFunction(x) {
    return JSON.stringify(x);
  }
}
