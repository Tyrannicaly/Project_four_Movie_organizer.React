import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

class Movies extends Component {

    send=(data)=>{
        console.log(data)
        this.props.addFilmsToList(data)
    }

    render() { 
        console.log(this.props)
        return ( 
            <ul className="movies">
                
                {this.props.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem 
                            {...movie} 
                            send={this.props.addFilmsToList}/>
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Movies;