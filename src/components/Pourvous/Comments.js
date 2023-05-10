import { Component } from "react";
import React from "react";

import { formatDistanceToNow } from "date-fns";

import { v4 as uuidv4 } from "uuid";

import CommentItem from "./CommentItem";

import "./Comments.css";
const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue",
];

// Write your code here
class Comments extends Component {
  state = {
    name: "",
    comment: "",
    arrayList: [],
    count: 0,
  };

  inputValue = (e) => {
    this.setState({ name: e.target.value });
  };

  textValue = (e) => {
    this.setState({ comment: e.target.value });
  };

  addComment = (e) => {
    e.preventDefault();
    const { name, comment } = this.state;
    const firstName = name.slice(0, 1);
    const date = formatDistanceToNow(new Date());
    const index =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)];
    const object = {
      id: uuidv4(),
      firstNames: firstName,
      names: name,
      comments: comment,
      dates: date,
      newClass: index,
      isFavorite: false,
    };
    this.setState((prevState) => ({
      arrayList: [...prevState.arrayList, object],
      name: "",
      comment: "",
      count: prevState.count + 1,
    }));
  };

  toggleFavorite = (id) => {
    this.setState((prevState) => ({
      arrayList: prevState.arrayList.map((eachData) => {
        if (eachData.id === id) {
          return { ...eachData, isFavorite: !eachData.isFavorite };
        }
        return eachData;
      }),
    }));
  };

  deleteComment = (id) => {
    const { arrayList } = this.state;
    const filteredList = arrayList.filter((eachValue) => eachValue.id !== id);
    this.setState((prevState) => ({
      arrayList: filteredList,
      count: prevState.count - 1,
    }));
  };

  render() {
    const { name, comment, arrayList, count } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-3"></div>
          <div
            className="container_pourvous  col-md-6"
            id="temoigner"
            style={{
              marginTop: "-8%",
              height: "auto",
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropfilter: "blur(30px); ",
            }}
          >
            <div className="main-container col-md-6">
              <div className="inner-holder">
                <div className="row g-0 align-items-center">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-5 mb-5 mb-lg-0 cascading-right">
                    {" "}
                    <img
                      src="../assets/images/comments-img.png"
                      className="w-100 rounded-4 "
                      alt=""
                      aria-controls="#picker-editor"
                    />{" "}
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-5 mb-5 mb-lg-0">
                    <div
                      className=""
                      style={{
                        background: "hsla(0, 0%, 100%, 0.55)",
                        backdropfilter: "blur(30px); ",
                        borderRadius: ".5rem",
                      }}
                    >
                      <div className="card-body px-4 pb-5 pt-md-0 px-md-5 shadow-5 ">
                        <h3 className="my-5  fw-bold ls-tight">
                          {" "}
                          <span></span> <br />{" "}
                          <span className="text-secondary">
                            Vos écrits restent
                          </span>{" "}
                        </h3>
                        <div className="element-holder">
                          <h2 className="para1">Temoignez</h2>
                          <form
                            className="element-holder"
                            onSubmit={this.addComment}
                          >
                            <input
                              style={{ borderRadius: ".5rem" }}
                              type="text"
                              className="name-field"
                              placeholder="Nom"
                              onChange={this.inputValue}
                              value={name}
                            />
                            <textarea
                              style={{ borderRadius: ".5rem" }}
                              className="comment-field"
                              placeholder="Ecris ton temoignage ici!"
                              onChange={this.textValue}
                              value={comment}
                            />
                            <button type="submit" className="btn">
                              Temoignez
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="container row">
                <div className="col-md-2"></div>
                <div className="col-md-6">
                  <p className="comments-count" style={{ height: "auto" }}>
                    <span className="number-count">{count}</span> temoignages
                    <ul className="comment-holder">
                      {arrayList.map((eachObject) => (
                        <CommentItem
                          key={eachObject.id}
                          arrayList={eachObject}
                          deleteComment={this.deleteComment}
                          toggleFavorite={this.toggleFavorite}
                        />
                      ))}
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Comments;
