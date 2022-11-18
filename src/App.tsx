import React, {useState} from 'react';
import MoviesList from "./containers/MoviesList/MoviesList";
import JokList from "./containers/JokList/JokList";
import './App.css';

function App() {
  const [show2, setShow2] = useState(false);
  const [show1, setShow1] = useState(false);

  const openFirstPage = () => {
    setShow1(true);
    setShow2(false)
  };
  const openSecondPage = () => {
    setShow2(true);
    setShow1(false);
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
          {show2 ? <JokList /> : null}
      </>
  );
}

export default App;
