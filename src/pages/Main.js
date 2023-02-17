import { Button } from "../components/button";
import HummerImg from "../stuff/hammer.png";
import { Button2 } from "../components/button2";
import { HeroesCards } from "../components/heroesCards";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCharacters } from "../components/redux/actions/APIActions";

export function Main() {
  const characters = useSelector((state) => state.allData.characters);
  const dispatch = useDispatch();
  const url = `https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=d6775ea9d3780dae77be6c5829aaf0a0`;

  const fetchCharacters = async () => {
    const response = await axios.get(url).catch((err) => {
      console.log(("Err", err));
    });
    dispatch(setCharacters(response.data.data.results));
  };
  useEffect(() => {
    fetchCharacters();
  }, [url]);

  const [randomId, setRandomId] = useState(Math.floor(Math.random() * 100));
  return (
    <>
      <div className="wrapper">
        <div className="random-character-cont">
          <div className="random-character">
            <div className="random-character-padding">
              {!characters ? (
                <div className="loader"></div>
              ) : (
                <div className="random-character-description">
                  <div className="random-img">
                    <img
                      className="random-character-img"
                      src={`${characters[[randomId]].thumbnail.path}.${
                        characters[[randomId]].thumbnail.extension
                      }`}
                      alt=""
                    ></img>
                  </div>
                  <div className="random-character-information">
                    <p className="name">{characters[randomId].name}</p>
                    <h5>{characters[randomId].description}</h5>
                    <div className="button-cont">
                      <Button
                        title={"Homepage"}
                        action={characters[randomId].urls[0].url}
                      />

                      <Button2
                        title={"WIKI"}
                        action={characters[randomId].urls[1].url}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="get-random-character">
            <div className="get-random-character-text">
              <p className="white-bold">
                Random character for today! <br></br>
                Do you want to get to know him better?
              </p>
              <p className="white-bold2">Or choose another one</p>
              <Button
                clickFunc={(e) => {
                  e.preventDefault();
                  setRandomId(Math.floor(Math.random() * 100));
                }}
                title={"Try it"}
              />
            </div>
            <div>
              <img className="hammer" src={HummerImg}></img>
            </div>
          </div>
        </div>
        {!characters ? <div className="loader"></div> : <HeroesCards />}
      </div>
    </>
  );
}
