import React, { Component } from 'react'

export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: -1
        }
    }

    componentDidMount() {
        let url = 'https://randomuser.me/api/?results=50';
        fetch(url)
            .then(resp => resp.json()).then(json => {
                this.setState({
                    userData: json.results
                })
            })
            .catch(error => {
                alert('Przepraszamy, nie udało się pobrać danych! :(');
                console.log(error);
            })
    }
    render() {
        // var userData = this.state.userData || '';
        return (
            <section id="people-container">
                {/*
                    userData.forEach(el => {
                    return (
                        <p><strong>{el.name.first} {el.name.last}</strong>
                        <img src={el.picture.thumbnail} alt={el.name.first}{el.name.last} />
                        </p>
                    )
                });
            */}
            
            </section>
        )
    }
}
