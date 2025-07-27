import { supabase } from "../client"
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

const SummaryCM = () => {
    const [crewmates, setCrewmates] = useState(null)

    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data } = await supabase
                .from('cm-table')
                .select();

            setCrewmates(data);
        }

        fetchCrewmates().catch(console.error)
        
    }, [])

    return (
        <div className="main">

            <h1 className="summary-header"> ALL CREWMATES! ඞ </h1>
            <div className="split-right summary-cntr">
                {(Object.is(crewmates, null) || crewmates.length == 0) ? <h3> NO CREWMATES CREATED! :( </h3> : crewmates.map((obj) => (
                    <div className="summary-cards">
                        <p> {obj.name}'s Crewmate Stats!</p>
                        <p> - SPEED: {obj.speed} </p>
                        <p> - COLOR: {obj.color} </p>
                        <p className={`mogus mogus-${obj.color}`}> ඞ </p>
                        <Link to={`/${obj.id}`} className={`sum-buttons bg-${obj.color}`}> EDIT </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SummaryCM