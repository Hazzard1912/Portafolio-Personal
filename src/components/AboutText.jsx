import { useState } from "react";
import "../styles/About.css";

export const AboutText = ({ text, id }) => {
  const [expandedIds, setExpandedIds] = useState({});

  const isExpanded = !!expandedIds[id];
  const shortText = text.slice(0, 100) + "...";
  const fullText = text;

  const handleToggle = () => {
    setExpandedIds({
      ...expandedIds,
      [id]: !isExpanded,
    });
  };

  return (
    <p className={`about__paragraph ${isExpanded ? "expanded" : ""}`}>
      {isExpanded ? fullText : shortText}
      <button className="about__btn" onClick={handleToggle}>
        {isExpanded ? "Ver menos" : "Ver más"}
      </button>
    </p>
  );
};
