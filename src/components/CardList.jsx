import React, { useContext } from "react";
import { mainContext } from "../context/mainProvider";
import CardItem from "./CardItem";

const CardList = () => {
  const { data } = useContext(mainContext);
  const cards = data.map((d) => ({
    ...d,
    opened: false,
  }));

  const openedNotMatched = null;

  const handleFlip = (cardId) => {
    // Wenn Karte mit cardID schon gematched ist, dann beenden.
    if (cardId.matched == true) {
      return;
    }

    // Karte mit cardID opened = true
    cards.map((c) => {
      if (c.id == cardId) {
        ({
          ...c,
          opened: true,
        });
      } else c;
    });

    // Wenn openedNotMatched leer ist,
    //      cardID number einfügen
    // Ansonsten
    //      Wenn openedNotMatched != null und cardID number = zweiter cardID number ist
    //          openedNotMatched = null
    //          matched = true für beide
    //      Ansonsten
    //          openedNotMatched = null
    //          opened = false für beide
  };

  const shuffle = () => {
    window.location.reload();
  };

  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }

  return (
    <>
      <section className="playground">
        {cards.map((card) => {
          return (
            <CardItem key={card.id} link={card.link} number={card.number} />
          );
        })}
      </section>
      <button onClick={shuffle}>New Game</button>
    </>
  );
};

export default CardList;
