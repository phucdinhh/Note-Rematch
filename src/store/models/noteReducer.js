const noteReducer = {
  state: {
    allNotes: [],
  },
  reducers: {
    addNewNote: (state, payload) => {
      const generateID = new Date().getTime();
      return {
        allNotes: [...state.allNotes, { id: generateID, content: payload }],
      };
    },
    editNote: (state, { id, content }) => {
      const indexOfEditNote = state.allNotes.findIndex(
        (note) => note.id === id,
      );
      if (indexOfEditNote !== -1) state[indexOfEditNote].content = content;
      return state;
    },
    removeNote: (state, payload) => {
      const idRemove = payload;
      const notes = state.allNotes.filter((note) => note.id !== idRemove);
      return {
        allNotes: [...notes],
      };
    },
  },
};

export default noteReducer;
