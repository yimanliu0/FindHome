import React from "react";
import "./css/commentpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function CommentPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get("error");
  return (
    <div className="commentpage">
      <div className="container-fluid d-flex justify-content-center">
        <div className="usercard2">
          <div className="card-header">
            <h3>Write a comment!</h3>
          </div>
          <div className="card-body">
            <form id="send" action="/auth/addcomment" method="post">
              <div className="form-group">
                <label for="identi">Date/Time of Posting</label>
                <input
                  type="text"
                  id="identi"
                  name="identi"
                  className="form-control"
                  placeholder="2020-11-20 08:09"
                />
                <br />
                <label htmlFor="comment">Your Comment</label>
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  className="form-control"
                  placeholder="Write your thoughts here!"
                />
              </div>

              {error ? <div className="danger">{error}</div> : ""}
              <div className="submitButtons">
                <div className="form-group">
                  <input
                    type="submit"
                    className="buttons"
                    value="Submit Comment"
                  />
                </div>
              </div>
            </form>
            <div className="form-group">
              <Link to="/table">Cancel and return</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentPage;
