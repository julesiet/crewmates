import { useParams } from "react-router"
import { supabase } from "../client";
import { useState } from 'react'

const UpdateCM = () => {
    const { id } = useParams();
    const [newName, setNewName] = useState('');
    const [newSpeed, setNewSpeed] = useState(0);

    const updateCrewmate = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newColor = formData.get('colors');

        await supabase
            .from('cm-table')
            .update( { name: newName, speed: newSpeed, color: newColor })
            .eq('id', id);
        
        window.location = "/";
    }

    const deleteCrewmate = async (e) => {
        e.preventDefault();

        await supabase
            .from('cm-table')
            .delete()
            .eq('id', id);

        window.location = "/";
    }

    return (
        <div className="main">

            <div className="split-right create-cntr">
                <form onSubmit={updateCrewmate} className="cm-form">

                    <h2> UPDATE YOUR MOGUS! ඞ </h2>

                    <div className="cm-form-bits"> 
                        <h3> RENAME </h3>
                        <p> <em>rename your mogus character!</em> </p>
                        <input
                        type="text"
                        placeholder="enter a name!"
                        onChange={(inputName) => setNewName(inputName.target.value)}
                        value={newName}
                        />
                    </div>

                    <div className="cm-form-bits"> 
                        <h3> CHANGE SPEED </h3>
                        <p> <em>change how fast your mogus character is!</em> </p>
                        <input
                            type="text"
                            placeholder="enter speed (in mph)"
                            onChange={(inputSpeed) => setNewSpeed(parseInt(inputSpeed.target.value))}
                            value={isNaN(newSpeed) ? 0 : newSpeed}
                            />
                    </div>
                    
                    <div className="cm-radios"> 
                        <h3> <center> RECOLOR </center></h3>
                        <p> <center> <em>change what color your mogus character will be!</em> </center></p>
                    {['red', 'orange', 'yellow', 'green', 'blue', 'purple'].map((currColor) => (
                        <div key={currColor}>
                            <input
                                type="radio"
                                id={currColor}
                                name="colors"
                                value={currColor}
                                />
                                <label for={currColor}> {currColor} </label>
                        </div>
                    ))}
                    </div>

                    <div className="btn-cntr">
                        <button type="submit" className="create-btn"> update yo crewmate ඞ </button>
                        <button onClick={deleteCrewmate} className="delete-btn"> DELETE! </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default UpdateCM