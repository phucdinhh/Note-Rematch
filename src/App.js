import React from "react";
import "./App.css";

import ShowNote from "./components_rm/ShowNote";
import AddNote from "./components_rm/AddNote";

function App() {
	return (
		<div className="row" style={{ marginTop: "3%" }}>
			<AddNote />
			<ShowNote />
      {/* {props.note.map((note, index) => {
				return <ShowNote noteData={note} key={note.id} />;
			})} */}
		</div>
	);
}

export default App;
