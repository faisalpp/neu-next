import React from 'react'
import CustomerRow from './CustomerRow'

const CustomerTable = () => {
  return (
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead
            className="border-b border-l border-r border-b3 bg-b3 font-medium text-white">
            <tr>
              <th scope="col" className=" px-6 py-4">Name</th>
              <th scope="col" className=" px-6 py-4">Last&nbsp;Active</th>
              <th scope="col" className=" px-6 py-4">Date Registered</th>
              <th scope="col" className=" px-6 py-4">Email</th>
              <th scope="col" className=" px-6 py-4">Orders</th>
              <th scope="col" className=" px-6 py-4">Total Spend</th>
              <th scope="col" className=" px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <CustomerRow name='jhon Doe' lastActive='July 13, 2023' dateReg='July 13, 2023' email='gagan@gmail.com' orders={1} totalSpend={360.00} />
            <CustomerRow name='jhon Doe' lastActive='July 13, 2023' dateReg='July 13, 2023' email='gagan@gmail.com' orders={1} totalSpend={360.00} />
            <CustomerRow name='jhon Doe' lastActive='July 13, 2023' dateReg='July 13, 2023' email='gagan@gmail.com' orders={1} totalSpend={360.00} />
            <CustomerRow name='jhon Doe' lastActive='July 13, 2023' dateReg='July 13, 2023' email='gagan@gmail.com' orders={1} totalSpend={360.00} />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default CustomerTable