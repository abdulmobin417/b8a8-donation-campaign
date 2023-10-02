import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const {
    id,
    picture,
    title,
    card_category,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
  } = category;
  // console.log(category);
  return (
    <div className="w-[312px]">
      <Link to={`/donationDetails/${id}`}>
        <div className="">
          <img
            className="rounded-t-lg h-[194px] w-full object-cover"
            src={picture}
            alt=""
          />
        </div>
        <div
          className="p-4 rounded-b-lg"
          style={{ backgroundColor: card_bg_color }}
        >
          <button
            className="px-3 py-1 rounded-md text-sm font-medium"
            style={{
              backgroundColor: category_bg_color,
              color: text_button_bg_color,
            }}
          >
            {card_category}
          </button>
          <p
            className="mt-2 text-xl font-semibold"
            style={{ color: text_button_bg_color }}
          >
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
