import { Filter, Settings, Share } from "lucide-react";

export const FilterOptions: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center mr-4">
        <Share className="w-5 h-5 mr-1" />
        <span>Share</span>
      </div>
      <div className="flex items-center mr-4">
        <Filter className="w-5 h-5 mr-1" />
        <span>Filter</span>
      </div>
      <div className="flex items-center">
        <Settings className="w-5 h-5 mr-1" />
        <span>Customize Card</span>
      </div>
    </div>
  );
};
