import { useQuery } from "@tanstack/react-query";
import React from "react";

import Lodding from "../Shared/Lodding/Lodding";
import AdvertisedCard from "./AdvertisedCard";

const AdvertisedItems = () => {
  const url = "https://resale-market-server-green.vercel.app/products";

  const { data: advertiseds = [], isLoading } = useQuery({
    queryKey: ["addCards"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Lodding></Lodding>;
  }
  return (
    <div>
      <h1 className="text-center text-4xl text-primary font-bold mt-8">
        Advertised Items
      </h1>

      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {advertiseds.map((advertised) => (
          
          <AdvertisedCard
            key={advertised}
            advertised={advertised}
          ></AdvertisedCard>
        ))}
      </div>
    </div>
  );
};

export default AdvertisedItems;
