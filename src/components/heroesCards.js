import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import invisorImg from "../stuff/inviser.png";
import { useSelector } from "react-redux";
import { useState } from "react";

export function HeroesCards({}) {
  const [limit, setLimit] = useState(9);
  let navigate = useNavigate();
  const characters = useSelector((state) => state.allData.characters);
  const addMoreCharacters = (e) => {
    e.preventDefault();
    setLimit(limit + 6);
  };
  return (
    <>
      <main>
        <div className="heroes-cards-wrapper">
          {characters
            ? characters.slice(0, limit).map((item) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/${item.id}`)}
                    className="heroes-cards"
                  >
                    <div className="hero-card">
                      <img
                        className="hero-card-img"
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      ></img>
                    </div>
                    <p className="white-bold-uppercase">{item.name}</p>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="selected-hero-and-invisor">
          {" "}
          <div className="selected-hero-cont">
            <p className="last">Please select a character to see information</p>
            <div className="empty-blocks">
              <div className="circle-box">
                <div className="circle"></div>
                <div className="box"></div>
              </div>
              <div className="three-box">
                <div className="mrgb"></div>
                <div className="mrgb"></div>
                <div className="mrg-o"></div>
              </div>
            </div>
          </div>
          <img className="invisor" src={invisorImg}></img>
        </div>
      </main>
      <div className="form">
        <Button
          clickFunc={(e) => addMoreCharacters(e)}
          title={"LOAD MORE"}
        ></Button>
      </div>
    </>
  );
}
