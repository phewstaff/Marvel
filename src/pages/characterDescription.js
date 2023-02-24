import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../components/banner";
import { useDispatch, useSelector } from "react-redux";
import { selectedCharacter } from "../components/redux/actions/APIActions";

export const CharacterDescription = () => {
  const character = useSelector((state) => state.allData.selectedCharacter);
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedCharacterFetch = async () => {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=2adaba2f57450a3da6528c7eaaae2128`
    );
    dispatch(selectedCharacter(response.data.data.results[0]));
  };
  useEffect(() => {
    selectedCharacterFetch();
  }, []);

  return (
    <>
      {!character ? (
        ""
      ) : (
        <>
          <Banner />
          <div className="hero-description-cont">
            <div className="hero-description">
              <div>
                <img
                  className="hero-description-img"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                ></img>
              </div>
              <div className="hero-description-text">
                <p className="name">{character.name}</p>
                <h5>{character.description}</h5>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
