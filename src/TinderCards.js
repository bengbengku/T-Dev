import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from './firebase';
import './TinderCards.css';

function TinderCards(){
    const [people, setPeople] = useState([]); 

    // sepotong kode yg berjalan berdasarkan kondisi = useEffect
    useEffect (() => {
        // ini dimana code dijalankan..

        // ini akan berjalan sekali saat komponen dimuat, dan tidak akan pernah lagi
        const unsubscribe = database
        .collection("people")
        .onSnapshot((snapshot) => 
           setPeople(snapshot.docs.map((doc) => doc.data()))
        );

        return () => {
            unsubscribe();
        }
    }, []);

    //BAD
    // const people = [];
    // people.push('benget', 'napit')

    // GOOD (Push to an array in react)
    // setPeople([...people, 'benget', 'napit'])

    return (
        <div>
            <div className="tinderCards__cardContainer">        
                {people.map(person => (
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    >
                        <div 
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div> 
        </div>
    );
}

export default TinderCards