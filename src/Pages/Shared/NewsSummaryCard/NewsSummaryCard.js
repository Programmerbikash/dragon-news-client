import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import Image from "react-bootstrap/Image";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, author, details, rating, image_url, total_view } = news;
//   console.log(news);
  return (
    <div>
      <Card className="mb-5">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
              className="me-2"
              style={{ height: "60px" }}
              roundedCircle
              src={author.img}
            ></Image>
            <div>
              <p>{author.name}</p>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div className="d-flex">
            <FaRegBookmark className="me-2"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + "... "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
        </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                  <div>
                      <FaStar className="me-2 text-warning"></FaStar>
                      <span>{rating?.number}</span>
                  </div>
                  <div>
                      <FaEye className="me-2"></FaEye>
                      <span>{total_view}</span>
                  </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
