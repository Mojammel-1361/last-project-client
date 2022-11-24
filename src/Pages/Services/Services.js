import React from 'react';
import ServicesCard from './ServicesCard';
import buy from '../../assets/buy.jpg'
import sell from '../../assets/sell.jpg'
import exchange from "../../assets/exchange.jpg";

const Services = () => {

  const servicesData = [
    {
      id: 1,
      name: "Buy Product",
      img: buy,
      description:
        "The Company shall be solely responsible for the ensuring the display, and supply of the Products, and the sellers listing the Products on the Channels shall be responsible for the design, development, production, and performance of its Products and the protection of its trade names. The Company’s aggregate liability towards the Affiliate under this Agreement.",
    },
    {
      id: 2,
      name: "Sell Product",
      img: sell,
      description:
        "Sell Company shall be solely responsible for the ensuring the display, and supply of the Products, and the sellers listing the Products on the Channels shall be responsible for the design, development, production, and performance of its Products and the protection of its trade names. The Company’s aggregate liability towards the Affiliate under this Agreement......",
    },
    {
      id: 3,
      name: "Exchange Product",
      img: exchange,
      description:
        "This Agreement constitutes the complete and exclusive statement of the agreement of both the Parties with respect to the subject matter of this Agreement, and supersedes all prior oral and written commitments, understandings, and communications between the Parties regarding such matter. The Company may, at its sole discretion, amend the Agreement, from time to time",
    },
  ];

  return (
    <div className="mt-16 mb-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary uppercase">
          Our Services
        </h1>
        <h1 className="text-3xl">Services We providers </h1>
      </div>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {servicesData.map((services) => (
          <ServicesCard key={services.id} services={services}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;