import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const MyCard = ({Movies }) => {
  // ____________
  function goformoviepage(id) {
    MyNavigate(`./moviePage/${id}`);
  }
  let { path } = useLocation();
  let MyNavigate = useNavigate(path);

  // __________
  return (
    <div className="cards">
      {Movies &&
        Movies.map((e) => {
          return (
            <Card
              className="bg-dark text-white mycard "
              style={{ width: "270px", height: "350px" }}
              onClick={()=>goformoviepage(e.id)}
            >
              <Card.Img
                src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                alt="Card image"
              />
              <Card.ImgOverlay className="cardovar text-center">
                <span className="MovieName my-2">MovieName is :{e.name ?e.name :e.title} </span>
                <span className="Release Date my-2">
                  Release Date is : {e.first_air_date ?e.first_air_date:e.release_date}
                </span>
                <span className="Number of residents my-2">
                  Number of residents is :{e.vote_average}
                </span>
                <span className="Evaluation my-2">
                  Evaluation is :{e.vote_count}
                </span>
              </Card.ImgOverlay>
            </Card>
          );
        })}
    </div>
  );
};

export default MyCard;
