import Header from "./components/Header";
import Library from "./components/Library";
import { useState } from "react";
import AddResearchItem from "./components/AddResearchItem";

function App() {
  const [research, setResearch] = useState([
    {
      id: 1,
      title: "Gebuisd",
      author: "Jefke Vermeulen",
      url: "https://url.com",
      pages: 754,
    },
    {
      id: 2,
      title: "Stoelendans",
      author: "Bob Blooming",
      url: "https://url.com",
      pages: 258,
    },
    {
      id: 3,
      title: "De nieuwe kracht",
      author: "Thiery Tangela",
      url: "https://url.com",
      pages: 178,
    },
    {
      id: 4,
      title: "Het record",
      author: "Gaston Gastels",
      url: "https://url.com",
      pages: 354,
    },
    {
      id: 5,
      title: "April vissers",
      author: "Koko flanel",
      url: "https://url.com",
      pages: 495,
    },
  ]);

  //Add research
  const AddResearch = (newresearch) => {
    const id = research.length + 1;
    const item = { id, ...newresearch };
    setResearch([...research, item]);
  };

  //Delete researc
  const deleteResearch = (id) => {
    setResearch(research.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <Header title="Research library!!" />
      {research.length > 0 ? (
        <Library research={research} onDelete={deleteResearch} />
      ) : (
        <p className="empty-library">No research works available!</p>
      )}
      <AddResearchItem onAdd={AddResearch} />
    </div>
  );
}

export default App;
