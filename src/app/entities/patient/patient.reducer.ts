import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Patient } from './patient.model';
import { PatientActions, PatientActionTypes } from './patient.actions';

export interface State extends EntityState<Patient> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Patient> = createEntityAdapter<Patient>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: PatientActions
): State {
  switch (action.type) {
    case PatientActionTypes.AddPatient: {
      return adapter.addOne(action.payload.patient, state);
    }

    case PatientActionTypes.UpsertPatient: {
      return adapter.upsertOne(action.payload.patient, state);
    }

    case PatientActionTypes.AddPatients: {
      return adapter.addMany(action.payload.patients, state);
    }

    case PatientActionTypes.UpsertPatients: {
      return adapter.upsertMany(action.payload.patients, state);
    }

    case PatientActionTypes.UpdatePatient: {
      return adapter.updateOne(action.payload.patient, state);
    }

    case PatientActionTypes.UpdatePatients: {
      return adapter.updateMany(action.payload.patients, state);
    }

    case PatientActionTypes.DeletePatient: {
      return adapter.removeOne(action.payload.id, state);
    }

    case PatientActionTypes.DeletePatients: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case PatientActionTypes.LoadPatients: {
      return adapter.addAll(action.payload.patients, state);
    }

    case PatientActionTypes.ClearPatients: {
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
