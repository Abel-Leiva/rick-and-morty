import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
const DivCard = styled.div`
  display: inline-block;
  background-color: rgba(65, 177, 65, 0.466);
  border-radius: 10px;
  color: #fdeefd;
  overflow: hidden;
  margin: 25px 0px 25px 0px;
`;

const styleSpecie = {
  display: "inline-block",
  fontSize: "16px",
  color: "white",
  marginRight: "15px",
  marginTop: "-10px",
};

const styleGender = {
  display: "inline-block",
  fontSize: "16px",
  color: "white",
  marginTop: "-10px",
};

export default function Favorites() {
  const { myFavorites } = useSelector((state) => state);
  return (
    <div>
      {myFavorites.map((fav) => {
        return (
          <DivCard>
            <Link to={`/detail/${fav.id}`}>
              <h2>{fav.name}</h2>
            </Link>
            <h2 style={styleSpecie}>{fav.species}</h2>
            <h2 style={styleGender}>{fav.gender}</h2>
            <img style={{ display: "block" }} src={fav.image} alt="" />
          </DivCard>
        );
      })}
    </div>
  );
}
