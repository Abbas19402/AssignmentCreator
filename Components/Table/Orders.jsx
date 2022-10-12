import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {

const orders = useSelector(state => state.order.myOrders)
const SSR = useSelector((state) => state.ssr.ssrData);

console.log(orders);



const { cat, subWithCat, company } = SSR;
const { data:PaginationData } = orders.data
const { data:OrderList } = PaginationData

console.log(orders);
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6 whitespace-nowrap">
              S. No.
            </th>
            <th scope="col" className="py-3 px-6">
              Description
            </th>
            <th scope="col" className="py-3 px-6">
              Category
            </th>
            <th scope="col" className="py-3 px-6">
              Subject
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Price
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Status
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Payment Status
            </th>
          </tr>
        </thead>
        <tbody>
          {OrderList.map((item , key)=>(
            <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-4 px-6 text-center">{key+1}</td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.description}</th>
                <td className="py-4 px-6 whitespace-nowrap">{cat.data.find((value , index)=> item.category_id == value.id).name}</td>
                <td className="py-4 px-6 whitespace-nowrap">{subWithCat.data.find((value , index)=> item.subject_id == value.id).name}</td>
                <td className="py-4 px-6 text-center whitespace-nowrap">${item.total}</td>
                <td className={`py-4 px-6 font-medium text-center ${item.status == 'Pending' ? 'text-orange-500' : 'text-green-500'}`}>{item.status}</td>
                <td className={`py-4 px-6 font-medium text-center ${item.status == 'Pending' ? 'text-orange-500' : 'text-green-500'}`}>{item.payment_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
