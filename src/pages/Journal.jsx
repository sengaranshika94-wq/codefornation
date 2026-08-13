import JournalHeader from "../components/Journal/JournalHeader.jsx";
import JournalEmptyState from "../components/Journal/JournalEmptyState";
import JournalCategoryGrid from "../components/Journal/JournalCategoryGrid";
import { useState } from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import "./styles/journal.scss";

function Journal() {
  const [hasDiscoveries, setHasDiscoveries] = useState(true);

  return (
    <main className="journal">
      <Navbar />

      <JournalHeader />

      {hasDiscoveries ? (
        <JournalCategoryGrid />
      ) : (
        <JournalEmptyState />
      )}

      <button
        className="journal-test-toggle"
        onClick={() =>
          setHasDiscoveries((prev) => !prev)
        }
      >
        Preview{" "}
        {hasDiscoveries
          ? "Empty Journal"
          : "Discoveries"}
      </button>
    </main>
  );
}

export default Journal;