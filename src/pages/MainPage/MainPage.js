import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';


class MainPage extends Component {
    state ={
        favoriteMovie: [],
        movies: []
    }

    addFilmsToList=(objectFilm)=>{
        const currentFavoriteFilm = this.state.favoriteMovie;
        const copyFavoriteMovie = [...currentFavoriteFilm];
        if(currentFavoriteFilm.indexOf(objectFilm) === -1){
         copyFavoriteMovie.push(objectFilm);
        }
        this.setState({
            favoriteMovie:copyFavoriteMovie
        })
    }

    delFromList=(delIndex)=>{
        console.log(delIndex)
        const delArr =this.state.favoriteMovie
        const copyDelArr = [...delArr]
        copyDelArr.splice(delIndex,1)
        this.setState({
            favoriteMovie:copyDelArr
        })
    }

    search=(dataSearch)=>{
        this.setState({
            movies: dataSearch
        });
    }

    render() { 
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox search={this.search}/>
                        </div>
                        <div className="main-page__movies">
                            <Movies addFilmsToList={this.addFilmsToList} movies={this.state.movies} />
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites favorite={this.state.favoriteMovie} delFromList={this.delFromList}/>
                    </aside>
                </main>
            </div>
        );
    }
}
 
export default MainPage;