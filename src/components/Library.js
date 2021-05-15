import { useState } from "react";
import Button from "./Button";
import ResearchItem from "./ResearchItem";

const Library = ({ research, onDelete, onFilter }) => {
  const [filter, setFilter] = useState("");

  const filterLibrary = () => {
    if (!filter) {
      alert("Fill in a filter value first!");
      return;
    }
    onFilter(filter);
  };
  return (
    <div className="body">
      <div className="library-header">
        <h2>Library overview</h2>
        <Button color="lightseagreen" text="new research" />
      </div>
      <div className="filtering">
        <div className="filter">
          <button className="btn-filter" onClick={filterLibrary}>
            Filter
          </button>
          <input
            type="text"
            placeholder="Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="library-progress">
          <label>Library capacity: {research.length}/10</label>
          <progress value={research.length} max={10}>
            {research.length}
          </progress>
        </div>
      </div>
      <div className="library-content">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>author</th>
              <th>url</th>
              <th colSpan="2">pages</th>
            </tr>
          </thead>
          <tbody>
            {research.map((item) => {
              return (
                <ResearchItem
                  key={item.id}
                  research={item}
                  onDelete={onDelete}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Library;
