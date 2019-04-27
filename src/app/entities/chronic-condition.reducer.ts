import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ChronicCondition } from './chronic-condition.model';
import { ChronicConditionActions, ChronicConditionActionTypes } from './chronic-condition.actions';

export interface State extends EntityState<ChronicCondition> {
  // additional entities state properties
}

export const adapter: EntityAdapter<ChronicCondition> = createEntityAdapter<ChronicCondition>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: ChronicConditionActions
): State {
  switch (action.type) {
    case ChronicConditionActionTypes.AddChronicCondition: {
      return adapter.addOne(action.payload.chronicCondition, state);
    }

    case ChronicConditionActionTypes.UpsertChronicCondition: {
      return adapter.upsertOne(action.payload.chronicCondition, state);
    }

    case ChronicConditionActionTypes.AddChronicConditions: {
      return adapter.addMany(action.payload.chronicConditions, state);
    }

    case ChronicConditionActionTypes.UpsertChronicConditions: {
      return adapter.upsertMany(action.payload.chronicConditions, state);
    }

    case ChronicConditionActionTypes.UpdateChronicCondition: {
      return adapter.updateOne(action.payload.chronicCondition, state);
    }

    case ChronicConditionActionTypes.UpdateChronicConditions: {
      return adapter.updateMany(action.payload.chronicConditions, state);
    }

    case ChronicConditionActionTypes.DeleteChronicCondition: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ChronicConditionActionTypes.DeleteChronicConditions: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ChronicConditionActionTypes.LoadChronicConditions: {
      return adapter.addAll(action.payload.chronicConditions, state);
    }

    case ChronicConditionActionTypes.ClearChronicConditions: {
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
