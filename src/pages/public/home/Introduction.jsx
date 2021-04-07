import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as IconTeacher } from "@assets/images/components/home/chalkboardTeacher.svg";
import { ReactComponent as IconBook } from "@assets/images/components/home/book.svg";
import { ReactComponent as IconNotePencil } from "@assets/images/components/home/notePencil.svg";
import { ReactComponent as IconBird } from "@assets/images/components/home/bird.svg";
import index from "../404/Error";

const Introduction = () => {
  const sectionData = useSelector((state) => state.database.init.pages);
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
      color: "one",
    },
    {
      svg: <IconNotePencil />,
      title: "Polish tests",
      subtitle: "Do your remember what you have learn?",
      color: "two",
    },
    {
      svg: <IconBird />,
      title: "Polish culture",
      subtitle: "Learn more about the country and the people",
      color: "three",
    },
  ];

  return (
    <section className="introduction">
      <div className="introduction__welcome">
        <h2>{sectionData?.homepage[0].sections[1].header}</h2>
        <p>{sectionData?.homepage[0].sections[1].details}</p>
      </div>
      <div className="introduction__cards">
        {sectionData?.homepage[1].subsection.map((card, key) => {
          const { details, header, imgURL } = card;
          return (
            <div className="card" key={key}>
              <div className="text">
                <h2 className="">{header} </h2>
                <p className="">{details}</p>
              </div>
              <div className={`icon `}>
                <img src={imgURL} alt=""></img>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Introduction;
