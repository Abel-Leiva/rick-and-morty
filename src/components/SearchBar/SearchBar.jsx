import { useState } from "react";

const styleInput = {
  border: "3px solid  rgba(6, 134, 6, 0.705)",
  marginRight: "15px",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "rgba(65, 177, 65, 0.466)",
  color: "#fdeefd",
  fontSize: "15px",
};

const styleButton = {
  backgroundColor: " rgba(65, 177, 65, 0.466)",
  color: "#fdeefd",
  border: "0px",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "18px",
  padding: "10px",
  margin: "25px 0px 25px 0px",
  marginRight: "15px",
};

export default function SearchBar(props) {
  const [character, setCharacter] = useState(0);

  const handleSearch = (event) => {
    let { value } = event.target;
    setCharacter(value);
  };

  return (
    <div>
      <input style={styleInput} type="search" onChange={handleSearch} />
      <button style={styleButton} onClick={() => props.onSearch(character)}>
        Agregar
      </button>
      <button style={styleButton} onClick={props.random}>
        Random Character
      </button>
    </div>
  );
}
