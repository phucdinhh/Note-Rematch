import { init } from '@rematch/core';
import noteReducer from './models/noteReducer';

const store = init({
  models: {
    notes: noteReducer,
  },
});

export default store;
