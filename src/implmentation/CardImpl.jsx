import React, { useState } from "react";
import {
  isObjectValid,
  replaceNullWithUndefined,
} from "../utility/ObjectValidator";

import Card from "../components/Card";
import defaultPicture from "../assets/default-profile.jpg";
import animatedPicture1 from "../assets/star-wars.png";
import animatedPicture2 from "../assets/bat-ignite.png";

function CardImpl() {
  const [data, setData] = useState(
    [
      {},
      {
        id: null,
        image: null,
        title: null,
        description: null,
      },
      {
        id: undefined,
        image: undefined,
        title: undefined,
        description: undefined,
      },
      {
        id: 1,
        image: defaultPicture,
      },
      {
        id: 2,
        title: "Kunal Vartak",
      },
      {
        id: 3,
        description: "I'm a backend developer.",
      },
      {
        id: 4,
        image: animatedPicture1,
        title: "Kunal Vartak",
        description: "I'm a backend developer.",
      },
      {
        id: 5,
        image: null,
        title: "Kunal Vartak",
        description: "I'm a backend developer.",
      },
      {
        id: 6,
        image: animatedPicture2,
        title: null,
        description: "I'm a backend developer.",
      },
      {
        id: 7,
        image: defaultPicture,
        title: "Kunal Vartak",
        description: null,
      },
      {
        id: 8,
        image: null,
        title: "The quick brown fox jumps over the lazy dog",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 9,
        image: null,
        title: "John Snow",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 10,
        image: null,
        title: "Liechtenstein Pneumonoultramicroscopicsilicovolcanoconiosis",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ]
      .filter(isObjectValid)
      .map(replaceNullWithUndefined)
  );

  function handleOnRemove(index) {
    if (typeof index === "number") {
      setData(data.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <fieldset>
        <legend>Card.jsx</legend>
        {data.map((obj, index) => {
          return (
            <Card
              key={obj.id}
              image={obj.image}
              title={obj.title}
              description={obj.description}
              draggable={true}
              onRemove={() => handleOnRemove(index)}
            />
          );
        })}
      </fieldset>
    </>
  );
}

export default CardImpl;
