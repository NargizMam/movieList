import React, {useState} from 'react';
import MoviesList from "./containers/MoviesList/MoviesList";
import JokList from "./containers/JokList/JokList";
import './App.css';

function App() {
  const [show2, setShow2] = useState(false);
  const [show1, setShow1] = useState(false);

  const openFirstPage = () => {
    setShow1(true);
  };
  const openSecondPage = () => {
    setShow2(true);
  };

  return (
      <>
        <div className="container">
          <button className="button "
                  onClick={openFirstPage}
          >Уровень 1</button>
          <button className="button"
                  onClick={openSecondPage}
          >Уровень 2</button>
        </div>
        <div>
          {show1 ? <MoviesList /> : null}
        </div>
        <JokList show={show2} />

      </>
  );
}

export default App;
