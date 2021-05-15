import { useState } from "react";

const AddResearchItem = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [pages, setPages] = useState(0);

  const [titleError, setTitleError] = useState("");
  const [authorError, setauthorError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [pagesError, setPagesError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (title && author && url && pages) {
      console.log("valid form");
      onAdd({ title, author, url, pages });
      resetForm();
      return;
    }
    if (!title) {
      setTitleError("Title is required");
    }
    if (!author) {
      setauthorError("Author is required");
    }
    if (!url) {
      setUrlError("Url is required");
    }
    if (!pages) {
      setPagesError("Nr of pages is required");
    }
    return;
  };

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setUrl("");
    setPages("");
    setPagesError("");
    setUrlError("");
    setauthorError("");
    setPagesError("");
  };

  return (
    <div className="add-research">
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className="error-text">{titleError}</span>
        </div>
        <div className="form-control">
          <label>Author</label>
          <input
            type="text"
            placeholder="Enter author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <span className="error-text">{authorError}</span>
        </div>
        <div className="form-control">
          <label>Url</label>
          <input
            type="text"
            placeholder="Enter url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <span className="error-text">{urlError}</span>
        </div>
        <div className="form-control">
          <label>Nr of pages</label>
          <input
            type="number"
            placeholder="Enter nr of pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
          <span className="error-text">{pagesError}</span>
        </div>
        <div className="form-control">
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddResearchItem;
