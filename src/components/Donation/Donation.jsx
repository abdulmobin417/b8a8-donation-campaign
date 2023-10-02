import { getDonateList } from "../../utility/localStorage";
import DonatedProducts from "../DonatedProducts/DonatedProducts";
import { useEffect, useState } from "react";

const Donation = () => {
  const [dataLength, setDataLength] = useState(4);
  const [products, setProducts] = useState([]);
  const donateItems = getDonateList();

  useEffect(() => {
    fetch("donateCampioan.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = products
    ?.filter((product) => donateItems?.some(([id]) => id === product.id))
    ?.map((product) => {
      const [, quantity] = donateItems?.find(([id]) => id === product.id) || [];
      return { ...product, quantity };
    });

  const handleSeeAll = () => {
    setDataLength(filteredProducts.length);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="pt-[200px]"></div>
      <div>
        {filteredProducts.length && filteredProducts.length !== dataLength ? (
          <div className="grid xl:grid-cols-2 gap-6 justify-items-center">
            {filteredProducts.slice(0, 4).map((filteredProduct) => (
              <DonatedProducts
                key={filteredProduct.id}
                filteredProduct={filteredProduct}
              />
            ))}
          </div>
        ) : (
          <div className="grid xl:grid-cols-2 gap-6 justify-items-center">
            {filteredProducts.map((filteredProduct) => (
              <DonatedProducts
                key={filteredProduct.id}
                filteredProduct={filteredProduct}
              />
            ))}
          </div>
        )}
      </div>
      <div>
        {!filteredProducts.length && (
          <div className="text-center text-3xl mt-20 font-semibold">
            You have not donated yet
          </div>
        )}
      </div>
      <div>
        {filteredProducts.length > 4 &&
        filteredProducts.length !== dataLength ? (
          <div className="flex justify-center mt-10">
            <button
              className="bg-[#009444] text-[#FFF] font-semibold px-7 py-[14px] rounded-lg"
              onClick={handleSeeAll}
            >
              See All
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Donation;
