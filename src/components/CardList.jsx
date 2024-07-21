import React, { useContext } from 'react'
import { mainContext } from '../context/mainProvider'
import CardItem from './CardItem';

const CardList = () => {
    const {cards} = useContext(mainContext)
    console.log(cards);

    const shuffle = () => {
        window.location.reload();
    }

    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }

  return (
    <>
        <section className='playground'>
        {cards.map((card) => {
            return(
                <CardItem key={card.id} link={card.link} number={card.number}/>
            )
        })}
        </section>
        <button onClick={shuffle}>New Game</button>
    </>
  )
}

export default CardList