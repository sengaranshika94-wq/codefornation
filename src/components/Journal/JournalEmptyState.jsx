import { useNavigate } from "react-router";

function JournalEmptyState() {
  const navigate = useNavigate();

  return (
    <section className="journal-empty">
      <div className="journal-empty__mark">
        ✦
      </div>

      <div className="journal-empty__content">
        <span className="journal-empty__label">
          YOUR JOURNAL IS WAITING
        </span>

        <h2>
          Nothing here...
          <br />
          <em>yet.</em>
        </h2>

        <p>
          Every discovery becomes a page in your
          journal. Head back to Explore and find
          something worth remembering.
        </p>

        <button
          className="journal-empty__button"
          onClick={() => navigate("/explore")}
        >
          EXPLORE YOUR FIRST STORY
          <span>↗</span>
        </button>
      </div>

      <div className="journal-empty__stamp">
        <span>INDIA</span>
        <span>FIELD NOTES</span>
        <small>01</small>
      </div>
    </section>
  );
}

export default JournalEmptyState;