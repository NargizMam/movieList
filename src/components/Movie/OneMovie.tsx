import React from 'react';
import './OneMovie.css';

interface Props {
    movieName: string;
    id: string;
    deleteMovie: (id: string) => void;
    editMovieName: (e: string, id: string) => void;
}

class OneMovie extends React.Component<Props> {
    shouldComponentUpdate(nextProps: Readonly<Props>) {
        return nextProps.movieName !== this.props.movieName;
    }
    componentDidUpdate() {
        console.log('[OneMovie] did update');
    }
    render() {
        return (
            <div className='MovieDiv'>
                <input type="text"
                       className='EditMovie'
                       onChange={(e) =>
                           this.props.editMovieName(e.target.value, this.props.id)}
                       value={this.props.movieName}

                />
                <button type='button'
                        onClick={() => this.props.deleteMovie(this.props.id)}
                        className='Delete'
                >&times;</button>
            </div>
        );
    }
}

export default OneMovie;