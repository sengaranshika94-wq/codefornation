import { useNavigate } from "react-router";
import { useDiscovery } from "../../context/DiscoveryContext.jsx";

import "./DiscoveryDetail.scss";

function DiscoveryDetail({ story, onClose }) {
  const navigate = useNavigate();

  const { addDiscovery } = useDiscovery();

  if (!story) return null;

  const handleSaveToJournal = () => {
    addDiscovery(story.id);
    navigate("/journal");
  };

  return (
    <div
      className="discovery-detail-overlay"
      onClick={onClose}
    >
      <article
        className="discovery-detail"
        onClick={(event) => event.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          className="discovery-detail__close"
          onClick={onClose}
          aria-label="Close story"
        >
          ×
        </button>


        {/* IMAGE */}
        <div className="discovery-detail__image">

          <img
            src={story.image}
            alt={story.title}
          />

          <div className="discovery-detail__image-caption">
            <span>{story.state}</span>
            <span>·</span>
            <span>{story.category}</span>
          </div>

        </div>


        {/* CONTENT */}
        <div className="discovery-detail__content">

          <p className="discovery-detail__eyebrow">
            A STORY FROM INDIA
          </p>


          <h1 className="discovery-detail__title">
            {story.title}
          </h1>


          <p className="discovery-detail__intro">
            {story.excerpt}
          </p>


          {/* STORY */}
          {story.description && (
            <section className="discovery-detail__section">

              <p className="discovery-detail__label">
                THE STORY
              </p>

              <p className="discovery-detail__text">
                {story.description}
              </p>

            </section>
          )}


          {/* WHY IT MATTERS */}
          {story.significance && (
            <section className="discovery-detail__section">

              <p className="discovery-detail__label">
                WHY IT MATTERS
              </p>

              <p className="discovery-detail__text">
                {story.significance}
              </p>

            </section>
          )}


          {/* INFORMATION */}
          <div className="discovery-detail__info">

            <div>
              <span>LOCATION</span>

              <strong>
                {story.location || story.state}
              </strong>
            </div>


            <div>
              <span>CATEGORY</span>

              <strong>
                {story.category}
              </strong>
            </div>

          </div>


          {/* ACTION BUTTONS */}
          <div className="discovery-detail__actions">

            <button
              className="
                discovery-detail__button
                discovery-detail__button--primary
              "
              onClick={handleSaveToJournal}
            >
              SAVE TO JOURNAL

              <span>↗</span>
            </button>


            <button
              className="discovery-detail__button"
              onClick={onClose}
            >
              BACK TO DISCOVERIES

              <span>→</span>
            </button>

          </div>

        </div>

      </article>
    </div>
  );
}

export default DiscoveryDetail;