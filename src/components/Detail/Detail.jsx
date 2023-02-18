import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Detail() {
  console.log(useParams());
  const { detailID } = useParams();
  const [character, setCharacter] = useState({});
  console.log(detailID);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailID}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailID]);

  return (
    <div
      style={{
        backgroundColor: "rgba(65, 177, 65, 0.466)",
        display: "inline-block",
      }}
    >
      <h1>{character?.name}</h1>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      <img src={character?.image} alt="" />
    </div>
  );
}
