import { useState } from 'react'
import { supabase } from '../client';

const CreateCM = () => {
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState(0);
    // color doesn't need a state var because it'll be collected when button is submitted
    // (you may be asking why... but i ask you this...... why not?) (i'm REALLY stupid and not sure how to do it any other way)

    const createCrewmate = async (e) => {
        e.preventDefault();

        // obtaining color from radio button
        const form = e.target;
        const formData = new FormData(form);
        const color = formData.get('colors'); // selected color

        console.log(name, speed, color); // <-- all attributes are ready here 

        await supabase
            .from('cm-table')
            .insert( {name: name, speed: speed, color: color} )
            .select();
        
        window.location = "/";
    }

    return (
        <div className="main">

            <div className="split-right create-cntr">
                <form onSubmit={createCrewmate} className="cm-form">

                    <h2> CREATE YOUR MOGUS! ඞ </h2>

                    <div className="cm-form-bits"> 
                        <h3> NAME </h3>
                        <p> <em>name your mogus character!</em> </p>
                        <input
                        type="text"
                        placeholder="enter a name!"
                        onChange={(inputName) => setName(inputName.target.value)}
                        value={name}
                        />
                    </div>

                    <div className="cm-form-bits"> 
                        <h3> SPEED </h3>
                        <p> <em>declare how fast your mogus character is!</em> </p>
                        <input
                            type="text"
                            placeholder="enter speed (in mph)"
                            onChange={(inputSpeed) => setSpeed(parseInt(inputSpeed.target.value))}
                            value={isNaN(speed) ? 0 : speed}
                            />
                    </div>
                    
                    <div className="cm-radios"> 
                        <h3> <center> COLOR </center></h3>
                        <p> <center> <em>decide what color your mogus character will be!</em></center></p>
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

                    
                    <button type="submit" className="create-btn"> create yo crewmate ඞ </button>

                </form>
            </div>
        </div>
    )
}

export default CreateCM