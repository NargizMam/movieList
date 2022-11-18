import React, {useEffect, useState} from 'react';
import {Jok} from "../../types";

const url = 'https://api.chucknorris.io/jokes/random';

const JokList = () => {
    console.log('[Jok] render');

    const [jok, setJok] = useState<Jok>({
        created_at: 0,
        id: '',
        lang: '',
        value: ''

    });
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            console.log(response);
            if(response.ok){

                const jok: Jok = await response.json();
                setJok(jok);
            }}
            fetchData().catch(console.error)
    }, [])
    return (
        <>
          <article>
              <p>{jok.value}</p>
              <p>{jok.created_at}</p>
          </article>
        </>
    );
};

export default JokList;