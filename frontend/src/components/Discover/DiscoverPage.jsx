import React, { useState, useEffect } from "react";
import reviewService from "../../services/reviewService";
import tagService from "../../services/tagService";

import Jumbotron from "react-bootstrap/Jumbotron";

import Gallery from "./Gallery";
import FoodTags from "../common/FoodTags";
import Navigation from "../Navigation";

function DiscoverPage() {
  const [reviews, setReviews] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setReviews(await reviewService.getAllReviews());
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setTags(await tagService.getAllTags());
    };
    fetchData();
  }, []);

  const handleTagSelect = (value, event) => {
    console.log(value);
    setSelectedTags(value);
    event.preventDefault();
  };

  return (
    <>
      <Navigation />
      <Jumbotron>
        <h1 className="header">Snackchat!</h1>
      </Jumbotron>

      <hr />

      <FoodTags onTagSelect={handleTagSelect} tags={tags} />
      <Gallery selectedTags={selectedTags} reviews={reviews} />
    </>
  );
}

export default DiscoverPage;