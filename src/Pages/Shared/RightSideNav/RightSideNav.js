import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaQuestionCircle,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const RightSideNav = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-3 rounded"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login via Google
        </Button>
        <Button className="mb-3 rounded" variant="outline-dark">
          <FaGithub></FaGithub> Login via GitHub
        </Button>
      </ButtonGroup>
      <div className="mt-3">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="shadow-sm rounded border-0 my-1 py-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="shadow-sm rounded border-0 my-1 py-2">
            <FaYoutube /> YouTube
          </ListGroup.Item>
          <ListGroup.Item className="shadow-sm rounded border-0 my-1 py-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="shadow-sm rounded border-0 my-1 py-2">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="shadow-sm rounded border-0 my-1 py-2">
            <FaDiscord /> Discord
          </ListGroup.Item>
          <ListGroup.Item className="shadow-sm rounded border-0 my-1 py-2">
            <FaTwitch /> Privacy Policy
          </ListGroup.Item>
          <ListGroup.Item className="shadow-sm rounded border-0 my-1 py-2">
            <FaQuestionCircle />
            Terms & condition
          </ListGroup.Item>
        </ListGroup>
      </div>
      <BrandCarousel></BrandCarousel>
    </div>
  );
};

export default RightSideNav;
