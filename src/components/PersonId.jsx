import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PersonId extends Component {

    state = {
        person: null
    }

    componentDidMount() {
        fetch('http://ghibliapi.herokuapp.com/people/' + this.props.match.params.personid)
            .then(res => res.json())
            .then(person => this.setState({ person }))
    }
    render() {

        return (
            <>
                <div className="col-md-6">
                    <div className="card shadow mb-2">
                        <div className="card-body">
                            <h4 className="card-title text-primary mb-3">{this.state.person?.name}({this.state.person?.gender})</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Age {this.state.person?.age}</h6>
                            <a href={this.state.person?.url} target="_blank">Click here to see JSON</a>
                        </div>
                            <button className="btn btn-primary m-2 w-25"onClick={() => {this.props.history.goBack()}}>Go Back</button>
                    </div>
                </div>
            </>)
    }
}
