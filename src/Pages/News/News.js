import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  const news = useLoaderData();
  const { title, details, category_id, image_url } = news;
//   console.log(news);

  return (
    <Card>
      <Card.Img variant="top" img={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All news in this category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;