import React from "react";
import "./NewsSummaryCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, author, details, image_url, rating, total_view } = news;

  // console.log(news);
  return (
    <div className=" mb-4 my-1">
      <Card className="">
        <Card.Header className="d-flex align-items-center justify-content-between align-items-center">
          <div className="d-flex align-items-center align-items-center">
            <div>
              <Image
                variant="top"
                src={author.img ? author.img : "not found"}
                className="author-img rounded-circle me-2 mb-3"
              />
            </div>
            <div>
              <h5 style={{ marginBottom: "-5px" }}>
                {author?.name ? author.name : "Not Found"}
              </h5>
              <p style={{ marginTop: "5px" }}>
                {author.published_date
                  ? author.published_date
                  : "date not found"}
              </p>
            </div>
          </div>
          <div className="mb-3">
            <FaRegBookmark
              style={{ cursor: "pointer" }}
              className="mx-1 fs-4 text-primary"
            />
            <FaShareAlt
              style={{ cursor: "pointer" }}
              className="mx-1 fs-4 text-primary"
            />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>read more</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className=" d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <FaStar className="text-warning me-2" />
            <span>{rating?.number}</span>
          </div>
          <div className="d-flex align-items-center">
            <FaEye className="me-2"></FaEye>
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
