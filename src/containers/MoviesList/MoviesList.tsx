import React, {Component} from 'react';
import {Movie} from "../../types";
import AddMovie from "../../components/AddMovie/AddMovie";
import OneMovie from "../../components/Movie/OneMovie";


interface State {
    movies: Movie[];
    newMovie: {};
    disables: boolean;

}
class WatchList extends React.Component<{},  State> {
    state: State = {
        movies: [{movieName: '', id: ''}],
        newMovie: {},
        disables: true,
    };

    shouldComponentUpdate(nextState: Readonly<State> ) {
        return nextState.movies !== this.state.movies;
    };

    componentDidUpdate() {
        console.log('[WatchList]: did update');
    };

    addMovie = (newMovie: Movie) => {
        this.setState(prev => ({
            movies: [...prev.movies, newMovie]
        }));
    };
    editMovie = (id: string, name: string) => {
        let editName = this.state.movies.map(movie => {
            if(id === movie.id){
                this.setState(prev => ({...prev, movie: name}));

        };
        this.setState(prev => ({...prev,  editName}))
    })};
    deleteMovie = (id: string) => {
        this.setState({movies: this.state.movies.filter(movie => movie.id !== id)});
    };
    render() {

        let movieList = this.state.movies.map(movie => (
            <div className='Movie'
                 key = {movie.id}
            >
                <OneMovie movieName = {movie.movieName}
                          id = {movie.id}
                       editMovieName = {() => this.editMovie(movie.id, movie.movieName)}
                       deleteMovie = {() =>this.deleteMovie(movie.id)}
                />
            </div>

        ));
        return (
            <>
                {this.props ?
                    <div className='WatchList'>
                        <AddMovie onSubmit = {(movie) => this.addMovie(movie)}
                        />
                        {movieList}
                    </div> : null
                }

            </>


        );
    }
}

export default WatchList;