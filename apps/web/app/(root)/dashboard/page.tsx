import RecentMatchesCard from "@/components/card/RecentMatchesCard";
import StateCard from "@/components/card/StatsCard";
import WelcomeCard from "@/components/card/WelcomeCard";
import { profiles } from "@/constants/layoutContant";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <WelcomeCard />
      <StateCard />
      <RecentMatchesCard profiles={profiles} />
    </div>
  );
};

export default page;
