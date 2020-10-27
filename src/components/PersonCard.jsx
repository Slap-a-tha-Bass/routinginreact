import React from 'react'
import {Link} from 'react-router-dom';

const PersonCard = (props) => {

    return (
        <>
            <div className="col-md-6">
                <div className="card shadow mb-2">
                    <div className="card-body">
                        <h4 className="card-title text-primary mb-3"><Link to={`/people/${props.person.id}`}>{props.person.name}</Link> ({props.person.gender})</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Age {props.person.age}</h6>
                        <a href={props.person.url} target = "_blank">Click here to see JSON</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonCard