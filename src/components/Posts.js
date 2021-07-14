import { useState, useEffect } from "react";
import Tabs from "./Tabs";
import Search from "./Search";
function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const rawData = await res.json();
      const categorisedData = setCategory(rawData);
      setData(categorisedData);
      setIsLoading(false);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  function setCategory(rawData) {
    rawData.map((post) => {
      if (post.id % 3 === 0 && post.id % 5 === 0) post.category = "magic";
      else if (post.id % 3 === 0) post.category = "thirds";
      else if (post.id % 5 === 0) post.category = "fifths";
      else post.category = "";

      return post;
    });

    return rawData;
  }

  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/posts");
  }, []);

  return (
    <div>
      {!isLoading && (
        <button
          className="reset"
          onClick={() => {
            fetchData("https://jsonplaceholder.typicode.com/posts");
          }}
        >
          Reset
        </button>
      )}
      <br />
      <Search
        data={data}
        setSearchData={setSearchData}
        search={search}
        setSearch={setSearch}
        setIsLoading={setIsLoading}
      />

      {isLoading ? (
        <h1 className="loader">Loading...<i className="fa fa-spinner fa-spin"></i></h1>
      ) : search.length > 0 && searchData.length === 0 ? (
        <h1>No records found</h1>
      ) : searchData.length > 0 ? (
        <Tabs data={searchData} setPosts={setSearchData} />
      ) : (
        <Tabs data={data} setPosts={setData} />
      )}
    </div>
  );
}

export default Posts;
