import { useMemo, useState } from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import CategoryFilter from "../components/Categories/CategoryFilter.jsx";
import IndiaMap from "../components/IndiaMap/IndiaMap.jsx";
import DiscoveryCard from "../components/DiscoverY_card/DiscoveryCard.jsx";
import { exploreStories } from "../data/exploreStories";

import "./styles/explore.scss";

function Explore() {
  const [activeCategory, setActiveCategory] = useState("stories");

  const [selectedStory, setSelectedStory] = useState(null);

  const filteredStories = useMemo(() => {
    if (activeCategory === "stories") {
      return exploreStories;
    }

    return exploreStories.filter(
      (story) => story.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="explore">
      <Navbar />

      <section className="explore__hero">
        <div className="explore__intro">
          <p className="explore__eyebrow">
            EXPLORE INDIA
          </p>

          <h1 className="explore__title">
            Choose what
            <br />
            you want to discover.
          </h1>

          <p className="explore__description">
            Stories aren't always found in monuments. Some live in hands,
            villages, traditions, and places quietly waiting to be noticed.
          </p>
        </div>

        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="explore__map">
          <IndiaMap
            stories={filteredStories}
            onStorySelect={setSelectedStory}
          />

          {selectedStory && (
            <DiscoveryCard
              story={selectedStory}
              position={{
                x: selectedStory.coordinates.x,
                y: selectedStory.coordinates.y,
              }}
              onOpen={setSelectedStory}
            />
          )}
        </div>
      </section>
    </main>
  );
}

export default Explore;