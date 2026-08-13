import { exploreCategories } from "../../data/exploreCategories";
import { exploreStories } from "../../data/exploreStories";

import JournalCategoryCard from "./JournalCategoryCard";

function JournalCategoryGrid() {

  /*
    TEMPORARY

    These are only for testing the UI.

    Later your friend's Discovery page
    will control which stories are saved
    to the Journal.
  */

  const discoveredStoryIds = [
    "blue-pottery-jaipur",
    "black-rice-manipur",
    "whistling-village-kongthong",
  ];

  return (
    <section className="journal-categories">

      <div className="journal-categories__heading">
        <div>
          <span>YOUR COLLECTION</span>

          <h2>
            Every category
            <br />
            holds a story.
          </h2>
        </div>

        <p>
          Discover something from each
          corner of India.
        </p>
      </div>

      <div className="journal-categories__grid">

        {exploreCategories.map((category) => {

          const discoveredStory =
            exploreStories.find(
              (story) =>
                story.category === category.id &&
                discoveredStoryIds.includes(story.id)
            );

          return (
            <JournalCategoryCard
              key={category.id}
              category={category}
              story={discoveredStory}
            />
          );
        })}

      </div>
    
    </section>
  );
}

export default JournalCategoryGrid;