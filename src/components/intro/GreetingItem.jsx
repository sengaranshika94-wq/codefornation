function GreetingItem({ greeting, itemRef }) {
  return (
    <div
      ref={itemRef}
      className="greeting-item"
    >
      <span className="greeting-item__text">
        {greeting.text}
      </span>

      <span className="greeting-item__language">
        {greeting.language}
      </span>
    </div>
  );
}

export default GreetingItem;