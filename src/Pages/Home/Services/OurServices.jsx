import React, { useContext } from "react";
import ServiceCard from "./ServiceCard";
import { ServicesContext } from "../../../Layouts/Main";
import { Link } from "react-router-dom";

const OurServices = () => {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  const services = useContext(ServicesContext);
  console.log(services);
  return (
    <div>
      <div className="relative">
        <h2 className=" text-center text-8xl font-bold uppercase text-lightGray">
          What we do
        </h2>
        <h3 className="absolute top-1/2  right-1/2 translate-x-16  text-xl font-bold text-dark ">
          Our Services
        </h3>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-16">
        {services.slice(0, 3).map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center mt-16">
        <button className="bg-orange px-6  py-3 rounded-md text-white font-semibold">
          <Link to="/services/"> See All</Link>
        </button>
      </div>
    </div>
  );
};

export default OurServices;
