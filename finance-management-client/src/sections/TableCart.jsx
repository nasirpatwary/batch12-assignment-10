import { RiDeleteBin6Line } from "react-icons/ri";
import { format } from "date-fns";
import { Link } from "react-router";
import useDeleteTran from "../hooks/useDeleteTran";
import toast from "react-hot-toast";
import MyModal from "./MyModal";
const TableCart = ({ transaction }) => {
  const { category, amount, condition, date, _id } = transaction;
  const [mutateAsync] = useDeleteTran();
  const handleDelete = (id) => {
    toast((t) => (
      <div className="space-y-4">
        <p>Are you sure you want to delete?</p>
        <div className="flex justify-between">
          <button
            onClick={async () => toast.dismiss(t.id)}
            className="border duration-500 border-green-600 cursor-pointer px-4 rounded font-semibold text-green-600"
            size={24}
          >
            No
          </button>
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              await mutateAsync(id);
            }}
            className="border duration-500 border-red-600 cursor-pointer px-4 rounded font-semibold text-red-600"
          >
            Yes
          </button>
        </div>
      </div>
    ));
  };

  return (
    <tr>
      <td className="text-nowrap text-base font-medium">{condition}</td>
      <td className="text-nowrap text-base font-medium">{category}</td>
      <td className="text-nowrap text-base font-medium">{amount}</td>
      <td className="text-nowrap text-base font-medium">
        {format(new Date(date), "MM/dd/yyyy")}
      </td>
      <td className="text-nowrap">
        <Link to={`/details/${_id}`} className="btn-primary">
          View Details
        </Link>
      </td>
      <td className="text-nowrap flex items-center gap-8">
        <MyModal {...transaction} />
        <button onClick={() => handleDelete(_id)}>
          <RiDeleteBin6Line className="cursor-pointer text-red-400" size={24} />
        </button>
      </td>
    </tr>
  );
};

export default TableCart;
