import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Script } from './script.model';
import { ScriptActions, ScriptActionTypes } from './script.actions';

export interface State extends EntityState<Script> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Script> = createEntityAdapter<Script>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: ScriptActions
): State {
  switch (action.type) {
    case ScriptActionTypes.AddScript: {
      return adapter.addOne(action.payload.script, state);
    }

    case ScriptActionTypes.UpsertScript: {
      return adapter.upsertOne(action.payload.script, state);
    }

    case ScriptActionTypes.AddScripts: {
      return adapter.addMany(action.payload.scripts, state);
    }

    case ScriptActionTypes.UpsertScripts: {
      return adapter.upsertMany(action.payload.scripts, state);
    }

    case ScriptActionTypes.UpdateScript: {
      return adapter.updateOne(action.payload.script, state);
    }

    case ScriptActionTypes.UpdateScripts: {
      return adapter.updateMany(action.payload.scripts, state);
    }

    case ScriptActionTypes.DeleteScript: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ScriptActionTypes.DeleteScripts: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ScriptActionTypes.LoadScripts: {
      return adapter.addAll(action.payload.scripts, state);
    }

    case ScriptActionTypes.ClearScripts: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
