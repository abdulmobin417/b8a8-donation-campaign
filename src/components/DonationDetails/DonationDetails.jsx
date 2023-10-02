import { useLoaderData, useParams } from "react-router-dom";
import { saveDonateList } from "../../utility/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetails = () => {
  const products = useLoaderData().products;
  const { Id } = useParams();
  const getData = products.find((product) => product.id == parseInt(Id));
  const { id, picture, title, description, text_button_bg_color, price } =
    getData;

  const handleDonate = () => {
    saveDonateList(id, 1);
    toast.success("Thank You for your Donation", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="pt-[200px]"></div>
      <div>
        <div className="relative h-[500px] md:h-[600px] xl:h-[770px] mb-14">
          <img
            className="w-full h-full object-cover rounded-lg absolute "
            src={picture}
            alt=""
          />
          <div className="z-20 absolute bottom-0 bg-[#0b0b0b80] w-full px-9 py-9 rounded-lg">
            <button
              type="button"
              className="px-[26px] py-4 rounded text-[#FFF] text-xl font-semibold"
              style={{ backgroundColor: text_button_bg_color }}
              onClick={handleDonate}
            >
              Donate {price}
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-[#0B0B0B] text-[40px] font-bold mb-4">{title}</h1>
          <p className="leading-[30px] text-[#0b0b0bb3] text-justify">
            {description}
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default DonationDetails;
