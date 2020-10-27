import React, { Component } from 'react';
import PersonCard from './PersonCard';

export default class People extends Component {

    state = {
        people: []
    }
    componentDidMount(){
        fetch('http://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(people => this.setState({ people }))
    }
    render() {
        const { people } = this.state;
        return (
            <>
                <main className="container mt-5">
                    <section className="row justify-content-center">
                        {people?.map(person => {
                            return <PersonCard key={person.id} person={person} />
                        })}
                    </section>
                </main>
            </>
        )
    }
}
