import React from "react";
import { FilterOptions } from "../filter-options/filter-options";
import { Searchbox } from "../searchbox/searchbox";

const StoryFilters: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <Searchbox />
      <FilterOptions />
    </div>
  );
};

export default StoryFilters;
