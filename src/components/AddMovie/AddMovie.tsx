import React from 'react';
import './AddMovie.css';
import {Movie} from "../../types";

interface Props {
    onSubmit: (movie: Movie)=> void;
}
interface State {
    movieName: string
}

class AddMovie extends React.Component<Props, State> {
    state = {
        movieName: ''
    }



    shouldComponentUpdate(nextProps: Readonly<Props>) {
        return nextProps !== this.props;
    }

    componentDidUpdate() {
        console.log('[AddMovie] did update');
    };


    onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

       this.props.onSubmit(
            {
                ...this.state,
                id: Math.random().toString(),
            }
        );
        this.setState({movieName: ''})
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label>
                    Enter the name of the movie you want to watch <br/>
                    <input type="text"
                           className='InputMovie'
                           onChange={(event) => this.setState({movieName: event.target.value}) }
                    />
                </label>
                <button type='submit' className='Delete'
                >Add movie</button>
            </form>
        );
    }
}

export default AddMovie;