import React from "react";

// Interface
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export default function FoodTags({ selectedTags, onTagSelect, tags }) {
  return (
    <ToggleButtonGroup
      className="mb-3 d-flex horizontal-scroll"
      type="checkbox"
      value={selectedTags}
      onChange={onTagSelect}
    >
      {tags.map(tag => (
        <ToggleButton
          key={tag._id}
          className="m-1"
          variant="outline-dark"
          value={tag}
        >
          {tag.name}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
