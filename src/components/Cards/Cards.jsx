import Card from "../Card/Card";
import styled from "styled-components";

const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function Cards({ characters, onClose }) {
  return (
    <DivCards>
      {characters.map(({ name, species, gender, image, id }) => (
        <Card
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={() => onClose(id)}
          key={id}
          id={id}
        />
      ))}
    </DivCards>
  );
}
