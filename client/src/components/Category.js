import React, { useState } from "react";

function Category(props) {
  const [searchCategory, setSearchCategory] = useState("");

  const inputs = (e) => {
    setSearchCategory(e.target.value);
  };

  const onSubmit = () => {
    props.searchCategory(searchCategory);
  };

  return (
    <div>
      <label> Category </label>
      <input type="text" onChange={inputs} />
      <button value="submit" onClick={onSubmit} />
    </div>
  );
}

export default Category;
