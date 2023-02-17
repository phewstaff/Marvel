import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Banner } from "../components/banner";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setComics } from "../components/redux/actions/APIActions";

export const Comics = () => {
  const addMoreComics = (e) => {
    e.preventDefault();
    setLimit(limit + 8);
  };
  const [limit, setLimit] = useState(8);

  const comics = useSelector((state) => state.allData.comics);
  const dispatch = useDispatch();
  const url = `https://gateway.marvel.com:443/v1/public/comics?limit=100&apikey=d6775ea9d3780dae77be6c5829aaf0a0`;

  const fetchComics = async () => {
    const response = await axios.get(url).catch((err) => {
      console.log(("Err", err));
    });
    dispatch(setComics(response.data.data.results));
  };
  useEffect(() => {
    fetchComics();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Banner />
      <div className="comics">
        {comics
          ? comics.slice(0, limit).map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => navigate(`/${item.id}/comics`)}
                  className="comics-cards"
                >
                  <div className="comics-card">
                    <img
                      className="comics-card-img"
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    ></img>
                    <p className="comics-bold-uppercase">{item.title}</p>
                    <p className="price">{item.prices[0].price}$</p>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <div className="form-2">
        <Button
          clickFunc={(e) => addMoreComics(e)}
          title={"LOAD MORE"}
        ></Button>
      </div>
    </>
  );
};
