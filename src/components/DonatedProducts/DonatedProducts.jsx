import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonatedProducts = ({ filteredProduct }) => {
  const {
    id,
    picture,
    card_bg_color,
    card_category,
    category_bg_color,
    text_button_bg_color,
    price,
    quantity,
    title,
  } = filteredProduct;
  const productPrice = parseInt(price.slice(1)) * parseInt(quantity);

  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap justify-center">
        <img
          className="w-full h-[300px] md:h-auto object-cover md:object-fit md:w-[220px] rounded-t-lg md:rounded-l-lg"
          src={picture}
          alt=""
        />
        <div
          className="p-6 w-full md:w-[430px] rounded-b-lg md:rounded-r-lg"
          style={{ backgroundColor: card_bg_color }}
        >
          <button
            className="px-3 py-1 rounded-md text-sm font-medium cursor-text"
            style={{
              backgroundColor: category_bg_color,
              color: text_button_bg_color,
            }}
          >
            {card_category}
          </button>
          <p className="mt-3 text-xl font-semibold">{title}</p>
          <p
            className="font-semibold mb-4 mt-2"
            style={{ color: text_button_bg_color }}
          >
            ${productPrice}
          </p>
          <Link
            to={`/donationDetails/${id}`}
            className="text-[#FFF] text-lg font-semibold px-4 py-2 rounded "
            style={{ backgroundColor: text_button_bg_color }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

DonatedProducts.propTypes = {
  filteredProduct: PropTypes.object,
};

export default DonatedProducts;
