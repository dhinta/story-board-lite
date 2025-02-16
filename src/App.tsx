import Header from "@/components/header/header";
import StoryFilters from "@/components/story-filters/story-filters";
import { CheckCircle, Clock, Trash } from "lucide-react";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <StoryFilters />
      <div className="flex p-4">
        {/* To Do Column */}
        <div className="bg-gray-100 rounded-lg shadow-md p-4 w-1/3">
          <h2 className="font-bold text-lg mb-4">To Do</h2>
          <div className="bg-white rounded-lg p-4 mb-4 shadow">
            <h3 className="font-semibold">Task 1</h3>
            <p className="text-gray-600">Description of Task 1</p>
            <div className="flex justify-between mt-2">
              <CheckCircle className="text-green-500" />
              <Trash className="text-red-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 mb-4 shadow">
            <h3 className="font-semibold">Task 2</h3>
            <p className="text-gray-600">Description of Task 2</p>
            <div className="flex justify-between mt-2">
              <CheckCircle className="text-green-500" />
              <Trash className="text-red-500" />
            </div>
          </div>
        </div>

        {/* In Progress Column */}
        <div className="bg-gray-100 rounded-lg shadow-md p-4 w-1/3 ml-8">
          <h2 className="font-bold text-lg mb-4">In Progress</h2>
          <div className="bg-white rounded-lg p-4 mb-4 shadow">
            <h3 className="font-semibold">Task 3</h3>
            <p className="text-gray-600">Description of Task 3</p>
            <div className="flex justify-between mt-2">
              <Clock className="text-yellow-500" />
              <Trash className="text-red-500" />
            </div>
          </div>
        </div>

        {/* Done Column */}
        <div className="bg-gray-100 rounded-lg shadow-md p-4 w-1/3 ml-8">
          <h2 className="font-bold text-lg mb-4">Done</h2>
          <div className="bg-white rounded-lg p-4 mb-4 shadow">
            <h3 className="font-semibold">Task 4</h3>
            <p className="text-gray-600">Description of Task 4</p>
            <div className="flex justify-between mt-2">
              <CheckCircle className="text-green-500" />
              <Trash className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
