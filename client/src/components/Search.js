import React from "react";

function Search(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getItems(props.searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-inline my-2 my-lg-0"
    >
      <input
        className="form-control mr-sm-2"
        type="search"
        aria-label="Search"
        name="search"
        placeholder="Search An Item"
        value={props.searchTerm}
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
    </form>
  );
}

export default Search;
