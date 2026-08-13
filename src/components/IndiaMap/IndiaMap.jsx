import { useState } from "react";
import indiaMap from "../../assets/images/india_map.svg";
import "./IndiaMap.scss";

function IndiaMap({ stories = [], onStorySelect }) {
  const [activeStory, setActiveStory] = useState(null);

  const handlePinClick = (event, story) => {
    event.stopPropagation();

    setActiveStory(story);
    onStorySelect?.(story);
  };

  const handleMapClick = (event) => {
    if (event.target.closest(".story-pin")) {
      return;
    }

    setActiveStory(null);
    onStorySelect?.(null);
  };

  return (
    <div className="india-map" onClick={handleMapClick}>
      <div className="india-map__atmosphere" />

      <div className="india-map__canvas">
        <img
          src={indiaMap}
          alt="Map of India"
          className="india-map__image"
          draggable="false"
        />

        <div className="india-map__pins">
          {stories.map((story) => {
            const isActive = activeStory?.id === story.id;

            return (
              <button
                key={story.id}
                type="button"
                className={`story-pin ${
                  isActive ? "story-pin--active" : ""
                }`}
                style={{
                  left: `${story.coordinates.x}%`,
                  top: `${story.coordinates.y}%`,
                }}
                onClick={(event) =>
                  handlePinClick(event, story)
                }
                aria-label={`Explore ${story.title}`}
                aria-pressed={isActive}
              >
                <span className="story-pin__halo" />
                <span className="story-pin__pulse" />
                <span className="story-pin__dot" />
              </button>
            );
          })}
        </div>
      </div>

      <div className="india-map__caption">
        <span>FIELD JOURNAL</span>
        <span>•</span>
        <span>{stories.length} STORIES ACROSS INDIA</span>
      </div>
    </div>
  );
}

export default IndiaMap;