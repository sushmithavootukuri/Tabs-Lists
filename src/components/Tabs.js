import { useState } from "react";
import Card from "./Card";
import "../App.css";

function Tabs({ data,setPosts }) {
  const [toggleState, setToggleState] = useState(1);

  let thirdPosts = data.filter((post) => post.category === "thirds");
  let fifthPosts = data.filter((post) => post.category === "fifths");
  let magicPosts = data.filter((post) => post.category === "magic");

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Thirds
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Fifths
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Magic
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Third category posts</h2>
          <div className="posts">
            {thirdPosts.map((post) => (
              <Card post={post} posts={data} setPosts={setPosts}></Card>
            ))}
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Fifth category posts</h2>
          <div className="posts">
            {fifthPosts.map((post) => (
              <Card post={post} posts={data} setPosts={setPosts}></Card>
            ))}
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Magic category posts</h2>

          <div className="posts">
            {magicPosts.map((post) => (
              <Card post={post} posts={data} setPosts={setPosts}></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
