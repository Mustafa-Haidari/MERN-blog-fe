import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Post = ({ post }) => {
  const { title, cover, author, createdAt, _id } = post;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card">
        <Link to={`/post/${_id}`}>
          <img
            src={process.env.REACT_APP_API + cover}
            className="card-img-top"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>By{` ${author.firstname} ${author.lastname}`}</p>
          <p>{moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
          <Link to={`/post/${_id}`} className="btn btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
