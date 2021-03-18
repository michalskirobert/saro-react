import React from "react";

import { ReactComponent as IconTeacher } from "../../../assets/images/components/home/chalkboardTeacher.svg";
import { ReactComponent as IconBook } from "../../../assets/images/components/home/book.svg";
import { ReactComponent as IconNotePencil } from "../../../assets/images/components/home/notePencil.svg";
import { ReactComponent as IconBird } from "../../../assets/images/components/home/bird.svg";

const Introduction = () => {
  const cardsData = [
    {
      svg: <IconTeacher />,
      title: "Polish lessons",
      subtitle: "From beginner to intermediate",
    },
    {
      svg: <IconBook />,
      title: "Polish Practices",
      subtitle: "Grammar. Vocabulary. Pronounciation.",
      color: "#2F6E6D",
    },
    {
      svg: <IconNotePencil />,
      title: "Polish tests",
      subtitle: "Do your remember what you have learn?",
      color: "#322f6e",
    },
    {
      svg: <IconBird />,
      title: "Polish culture",
      subtitle: "Learn more about the country and the people",
      color: "#346778",
    },
  ];

  return (
    <section className="introduction">
      <div className="introduction__welcome">
        <h2>WELCOME TO SARO</h2>
        <p>
          The project was created as a result of a desire to help people
          studying the Polish language. SARO was created from combining the name
          “Saki” in Japanese 沙季 and the name Robert. Saki and Robert are
          Polish-Japanese couple trying to share their knowledge with others.
        </p>
      </div>
      <div className="introduction__cards">
        {cardsData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <div className="text">
                <h2 style={{ color: card.color }}>{card.title} </h2>
                <p style={{ color: card.color }}>{card.subtitle}</p>
              </div>
              <div className="icon" style={{ backgroundColor: card.color }}>
                {card.svg}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Introduction;
