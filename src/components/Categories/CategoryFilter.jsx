import { exploreCategories } from "../../data/exploreCategories.js" ;
import "./CategoryFilter.scss";

function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      {exploreCategories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            className={`category-filter__item ${
              isActive ? "category-filter__item--active" : ""
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            <span className="category-filter__icon">
              {category.icon}
            </span>

            <span className="category-filter__label">
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;