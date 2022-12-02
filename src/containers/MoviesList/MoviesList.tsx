import React from 'react';
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
        this.setState(prev => ({
            ...prev,
            movies: prev.movies.map(item => item.id === id ? {
                ...item,
                movieName: name
            } : item)
        }))};
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
                       editMovieName = {(id: string, name: string) => this.editMovie(name, id)}
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