import { Component, OnInit } from '@angular/core';
import { BaseListPage } from '../../base/base-list-page';
import { Script } from '../../entities/script.model';
import { ScriptService } from '../../services/scripts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.page.html',
  styleUrls: ['./scripts.page.scss'],
})
export class ScriptsPage extends BaseListPage<Script> implements OnInit {

  constructor(
    protected service: ScriptService,
    protected activatedRoute: ActivatedRoute
  ) {
    super(service, activatedRoute )
  }

}
