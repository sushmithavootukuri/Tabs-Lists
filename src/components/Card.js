import React from "react";
import 'font-awesome/css/font-awesome.min.css';

function Card({ post, setPosts, posts }) {
  function createMarkup(html) {
    return { __html: html };
  }

  return (
    <div className="card">
    
      <h4 dangerouslySetInnerHTML={createMarkup("Title : "+post.title)}></h4>
      <p className="card-id">{"Id : " + post.id}</p> 
   <hr/>
    
      <p dangerouslySetInnerHTML={createMarkup(post.body)}></p>
     
      <button
        className="close"
        onClick={() => {
          let newArray = [...posts];
          let index = newArray.findIndex((item) => item.id === post.id);
          newArray.splice(index, 1);
          setPosts(newArray);
          
        }}
      >
    <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
   
    </div>
  );
}

export default Card;
