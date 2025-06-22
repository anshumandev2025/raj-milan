"use client";
import RecentMatchesCard from "@/components/card/RecentMatchesCard";
import SearchFilters from "@/components/SearchFilters";
import { profiles } from "@/constants/layoutContant";
import React from "react";

const page = () => {
  // const onFilterApply = () => {};
  return (
    <div className="flex flex-col gap-5">
      {/* <WelcomeCard />
      <StateCard /> */}
      {/* <SearchFilters onFilterApply={onFilterApply} /> */}
      <RecentMatchesCard profiles={profiles} />
    </div>
  );
};

export default page;
