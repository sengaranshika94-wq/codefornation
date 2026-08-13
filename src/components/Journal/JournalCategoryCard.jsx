function JournalCategoryCard({ category, story }) {
  const isDiscovered = Boolean(story);

  return (
    <article
      className={`journal-category-card ${
        isDiscovered
          ? "journal-category-card--discovered"
          : "journal-category-card--empty"
      }`}
    >
      {isDiscovered ? (
        <>
          <div className="journal-category-card__image">
            <img
              src={story.image}
              alt={story.title}
            />

            <span className="journal-category-card__stamp">
              DISCOVERED
            </span>
          </div>

          <div className="journal-category-card__content">

            <div className="journal-category-card__category">
              <span>{category.icon}</span>
              {category.label}
            </div>

            <h3>{story.title}</h3>

            <div className="journal-category-card__location">
              <span>⌖</span>
              {story.state}
            </div>

          </div>
        </>
      ) : (
        <div className="journal-category-card__placeholder">

          <div className="journal-category-card__placeholder-icon">
            {category.icon}
          </div>

          <span className="journal-category-card__placeholder-category">
            {category.label}
          </span>

          <p>
            Waiting to be discovered
          </p>

          <span className="journal-category-card__arrow">
            ↗
          </span>

        </div>
      )}
    </article>
  );
}

export default JournalCategoryCard;