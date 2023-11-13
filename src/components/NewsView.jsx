import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsNavbar from "./NewsNavbar";
import { Link } from "react-router-dom";

const NewsView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://anishpdm.github.io/testapi/news.json")
      .then((response) => {
        changeData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NewsNavbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              {data.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 card-group">
                    <div class="card text-center border shadow border-primary">
                      <h5 class="card-header">{value.title}</h5>
                      <p>{value.author}</p>
                      <div class="card-body">
                        <h5 class="card-title">{value.description}</h5>
                        <p class="card-text">{value.content}</p>
                        <a href={value.urlToImage} class="btn btn-primary m-1">
                          See Image
                        </a>
                        <a href={value.url} class="btn btn-primary">
                          See News
                        </a>
                      </div>
                      <div className="card-footer">
                        <p>Source: {value.source.name}</p>
                        <p class="">Published At: {value.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsView;
