import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../components/banner";
import axios from "axios";
import { selectedComic } from "../components/redux/actions/APIActions";
import { useDispatch, useSelector } from "react-redux";

export const ComicsDescription = () => {
  const comic = useSelector((state) => state.allData.selectedComic);
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetchSelected = async () => {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=2adaba2f57450a3da6528c7eaaae2128`
    );
    dispatch(selectedComic(response.data.data.results[0]));
  };
  useEffect(() => {
    fetchSelected();
  }, []);

  return (
    <>
      {!comic ? (
        ""
      ) : (
        <>
          <Banner />
          <div className="comics-description">
            <div>
              <img
                className="comics-description-img"
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              ></img>
            </div>
            <div className="comics-description-text">
              <p className="black-bold">{comic.title}</p>
              <h5>{comic.description}</h5>
              <h5>{comic.pageCount} pages</h5>
              <h5>language: en-us</h5>
              <p className="red-price">{comic.prices[0].price}$</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
