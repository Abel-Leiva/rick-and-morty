import { Link } from "react-router-dom";
import styled from "styled-components";
import "animate.css";
import { add_favorite, delete_favorite } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
const DivCard = styled.div`
  display: inline-block;
  background-color: rgba(65, 177, 65, 0.466);
  border-radius: 10px;
  color: #fdeefd;
  overflow: hidden;
  margin: 25px 0px 25px 0px;
`;

const Button = styled.button`
  position: relative;
  right: -120px;
  top: 10px;
  background-color: rgba(12, 138, 12, 0.733);
  color: #fdeefd;
  border: 0px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
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

// const styleName = {
//   position: 'relative',
//   bottom: '-280px',
//   backgroundColor: 'rgb(0,0,0,0.5)',
//   padding: '5px',
//   display: 'inline-block',
// }

export default function Card({ name, species, gender, id, image, onClose }) {
  const [isFav, setIsFav] = useState(false);
  const dispactch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispactch(delete_favorite(id));
    }
    if (!isFav) {
      setIsFav(true);
      dispactch(add_favorite({ name, species, gender, id, image, onClose }));
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <DivCard>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <Button onClick={onClose}>X</Button>{" "}
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2 style={styleSpecie}>{species}</h2>
      <h2 style={styleGender}>{gender}</h2>
      <img style={{ display: "block" }} src={image} alt="" />
    </DivCard>
  );
}
// function mapDispatchToProps(dispatch) {
//   return {
//     add_favorite: () => {
//       dispatch(add_favorite());
//     },
//     delete_favorite: () => {
//       dispatch(delete_favorite());
//     },
//   };
// }
