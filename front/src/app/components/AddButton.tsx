import { SquaresPlusIcon } from "@heroicons/react/24/solid";

const AddButton = () => {
    return (
      <button className="h-12 rounded-lg font-bold px-1 hover:bg-black hover:text-white">
        <SquaresPlusIcon className="w-10 h-10" />
      </button>
    );
  };
  export default AddButton;