import React from "react";

function Search({ getItems, searchTerm, setSearchTerm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    getItems(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        aria-label="Search"
        name="search"
        placeholder="Search An Item"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
}

export default Search;
