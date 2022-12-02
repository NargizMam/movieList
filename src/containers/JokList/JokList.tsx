import React, {useEffect, useState} from 'react';
import {Jok} from "../../types";
import './JokList.css';


const url = 'https://api.chucknorris.io/jokes/random';

const JokList = () => {
    const [jok, setJok] = useState<Jok>({
        created_at: 0,
        id: '',
        lang: '',
        value: ''

    });
    const fetchData = async () => {
        const response = await fetch(url);
        if(response.ok){

            const jok: Jok = await response.json();
            setJok(jok);
        }}
    useEffect(() => {
        fetchData().catch(console.error)
    }, []);

    return (
        <div className='Joks'>
          <article className='JokDiv'>
              <h3>{jok.value}</h3>
              <p>{jok.created_at}</p>
          </article>
            <button onClick={fetchData} className='Delete'>New Jok</button>
        </div>
    );
};

export default JokList;