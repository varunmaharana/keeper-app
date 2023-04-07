import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

	const [{title, content}, setItem] = useState({ title : "", content : "" });
	const [active, setActive] = useState(false);

	function handleChange(event) {
		const { value, name } = event.target;

		if (name === "title") {
			setItem({title : value, content : content});
		} else if (name === "content") {
			setItem({ title : title, content : value })
		}
	}

	function handleClick(event) {
		props.addItem(title, content);
		setItem({title : "", content : ""});
		event.preventDefault();
	}

	function activate(event) {
		if (event.target.name === "content") {
			setActive(true);
		}
	}

  	return (
		<div>
      		<form className="create-note">
        		{active && <input onChange={handleChange} name="title" placeholder="Title" value={title} />}
        		<textarea onChange={handleChange} onClick={activate} name="content" placeholder="Take a note..." rows={active ? "3" : "1"} value={content} />
				<Zoom in={active}>
					<Fab onClick={handleClick}>
						<AddIcon />
					</Fab>
				</Zoom>
      		</form>
    	</div>
  	);
}

export default CreateArea;
