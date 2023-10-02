import { Link } from "react-router-dom";
import emoji from '../../assets/Resources/sadEmoji.png'

const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img src={emoji} alt="" />
      <h1 className="text-7xl font-semibold mb-10">Oops! 404 error</h1>
      <p className="text-3xl font-medium">{`This page dosen't exist`}</p>
      <p className="mt-4 text-xl">
        Would you like to return in{" "}
        <Link className="text-[#FF444A] border-b-2 border-[#FF444A]" to="/">
          Home
        </Link>{" "}
        page
      </p>
    </div>
  );
};

export default Error;
