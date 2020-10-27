import React, { Component } from 'react'

export default class FilmId extends Component {

    state = {
        film: null
    }

    componentDidMount() {
        fetch('http://ghibliapi.herokuapp.com/films/' + this.props.match.params.filmid)
            .then(res => res.json())
            .then(film => this.setState({ film }))
    }
    render() {
        // const {films} = this.state
        return (
            <>
                <div className="col-md-6">
                    <div className="card shadow mb-2">
                        <div className="card-body">
                            <h4 className="card-title text-primary mb-3">{this.state.film?.title}({this.state.film?.release_date})</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Directed by {this.state.film?.director}</h6>
                            <p className="card-text text-info">{this.state.film?.description}</p>
                            <h6 className="card-subtitle mb-2 text-danger">Rotten Tomatoes {this.state.film?.rt_score}%</h6>
                        </div>
                        <button className="btn btn-primary m-2 w-25" onClick={() => {this.props.history.goBack()}}>Go Back</button>
                    </div>
                </div>
            </>)
    }
}
