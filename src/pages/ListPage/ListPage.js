import React, { Component } from 'react';
import './ListPage.css';

class ListPage extends Component {
    state = {
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ]
    }
    componentDidMount() {
        console.log(this.props)
        const { id } = this.props.match.params;
        console.log(id);
        fetch("http://www.omdbapi.com/?s=godfather&apikey=3ba9ced8")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            const copyMovies =[...this.state.movies, data]
            this.setState({
                movies: copyMovies
            });
        });

    }
    render() { 
        console.log(this.state)
        
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href="https://www.imdb.com/title/tt0068646/" target="_blank">{item.title} ({item.year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;