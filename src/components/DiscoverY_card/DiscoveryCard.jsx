import "./Discoverycard.scss";

function DiscoveryCard({ story, position, onOpen }) {
  if (!story || !position) return null;

  const isBottom = position.y > 65;
  const isRight = position.x > 65;
  const isLeft = position.x < 30;

  let positionClass = "";

  if (isBottom) {
    positionClass = "discovery-card--top";
  } else if (isRight) {
    positionClass = "discovery-card--left";
  } else if (isLeft) {
    positionClass = "discovery-card--right";
  } else {
    positionClass = "discovery-card--top";
  }

  return (
    <article
      className={`discovery-card ${positionClass}`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      onClick={() => onOpen?.(story)}
    >
      <div className="discovery-card__image">
        <img
          src={story.image}
          alt={story.title}
        />
      </div>

      <div className="discovery-card__content">
        <p className="discovery-card__meta">
          {story.state} · {story.category}
        </p>

        <h3 className="discovery-card__title">
          {story.title}
        </h3>

        <p className="discovery-card__excerpt">
          {story.excerpt}
        </p>

        <span className="discovery-card__link">
          READ STORY →
        </span>
      </div>
    </article>
  );
}

export default DiscoveryCard;