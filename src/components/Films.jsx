import React, { Component } from 'react'
import FilmCard from './FilmCard';

export default class Films extends Component {

    state = {
        films: []
    }

    componentDidMount() {

        fetch('http://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => this.setState({ films }))

    }

    render() {
        const { films } = this.state;

        return (
            <>
                <main className="container mt-5">
                    <section className="row justify-content-center">
                        {films?.map(film => {
                            return <FilmCard key={film.id} film={film} />
                        })}
                    </section>
                </main>
            </>)
    }
}
