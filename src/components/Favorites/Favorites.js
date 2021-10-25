import React, { Component } from 'react';
import './Favorites.css';


class Favorites extends Component {
    state = {
        title: 'Новый список',
        movies: [
            // { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ]
    }
    render() { 
        
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                
                <ul className="favorites__list">
                    {this.props.favorite.map((item,index) => {
                        return <li key={item.id}className="li">
                            <p>{item.Title} ({item.Year})</p>
                            <button onClick={()=>this.props.delFromList(index)}>X</button>
                        </li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
 
export default Favorites;