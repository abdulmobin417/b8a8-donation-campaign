import banner from "../../assets/Resources/banner.jpeg";
import "./Home.css";
import Category from "../Category/Category";
import { useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    fetch("donateCampioan.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.products));
  }, []);
  useEffect(() => {
    setShowData(categories);
  }, [categories]);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchValue = event.target.search.value;
    if (!searchValue) {
      setShowData(categories);
    } else {
      const newData = categories.filter(
        (category) => category.card_category === searchValue
      );
      setShowData(newData);
    }
  };

  return (
    <div className="">
      <div
        className="bg-cover bg-center bg-no-repeat h-[450px] md:h-[600px] w-full top-0 relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full h-full flex justify-center items-center bg-white opacity-90">
          <div className="absolute top-1/2 -translate-y-1/2">
            <h1 className="text-[#0B0B0B] text-4xl md:text-5xl font-bold mb-10 text-center mt-20 md:mt-0">
              I Grow By Helping People In Need
            </h1>
            <div>
              <form className="flex justify-center" onSubmit={handleSearch}>
                <input
                  className="md:w-[470px] h-[50px] border-l border-y border[#DEDEDE] rounded-lg placeholder:text-[#0b0b0b66] placeholder-style"
                  type="text"
                  name="search"
                  placeholder="Search here...."
                />
                <input
                  className="px-7 py-[13px] bg-[#FF444A] font-semibold text-[#FFF] -ml-1 rounded-r-lg cursor-pointer"
                  type="submit"
                  value="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-[100px] container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center px-2">
        {showData?.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
