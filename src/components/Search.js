import { useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";

function Search({ setSearchData, data, search, setSearch }) {
  function inputHandler() {
    const newArr = data
      .filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.body.toLowerCase().includes(search.toLowerCase())
      )
      .map((item) => {
        let newTitle = item.title.replace(
          new RegExp(search, "gi"),
          (match) =>
            `<mark style="background: rgb(0, 204, 255); ">${match}</mark>`
        );
        let newBody = item.body.replace(
          new RegExp(search, "gi"),
          (match) =>
            `<mark style="background: rgb(0, 204, 255);">${match}</mark>`
        );
        return {
          ...item,
          title: newTitle,
          body: newBody
        };
      });

    setSearchData(newArr);
  }

  useEffect(() => {
    inputHandler();
  }, [search]);

  return (
    <div>
      <i className="fa fa-search search-icon" aria-hidden="true"></i>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
