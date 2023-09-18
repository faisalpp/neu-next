import React from 'react'
import OrderRow from './OrderRow'


const OrderTable = ({sections,categoryTitle}) => {
  return (
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead
            className="border-b border-l border-b3 bg-b3 font-medium text-white">
            <tr>
              <th scope="col" className=" px-6 py-4">Order&nbsp;#</th>
              <th scope="col" className=" px-6 py-4">Date</th>
              <th scope="col" className=" px-6 py-4">Status</th>
              <th scope="col" className=" px-6 py-4">Total</th>
              <th scope="col" className=" px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <OrderRow orderNo='12345' date='July 13, 2023' status='Pending' id='1' />
            <OrderRow orderNo='12345' date='July 13, 2023' status='Processing' id='1' />
            <OrderRow orderNo='12345' date='July 13, 2023' status='Completed' id='1' />
            <OrderRow orderNo='12345' date='July 13, 2023' status='Rejected' id='1' />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default OrderTable