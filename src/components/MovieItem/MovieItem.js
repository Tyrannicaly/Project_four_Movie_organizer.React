import React, { Component } from 'react';
import './MovieItem.css';

class MovieItem extends Component {
    addFilmsTolist=()=> {
        const { Title, Year, Poster } = this.props;
        const objectFilm ={ Title, Year, Poster }
        this.props.send(objectFilm)

    }

    render() {
        const { Title, Year, Poster } = this.props;
        
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={this.addFilmsTolist}>Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;