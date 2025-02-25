import React from 'react'

function IssuedCertificates() {

  const tableData = [
    {
      id: 1,
      email: 'web3 Test',
      date: '12th Dec, 2025',
      certification: 'N/A',
      status: 'Eligible'
    },
    {
      id: 2,
      email: 'web3 Test',
      date: '12th Dec, 2025',
      certification: 'N/A',
      status: 'Unverified'
    }
  ]
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className='bg-[#161716]'>
          <tr className=" text-white border-b border-[#31283A]">
            <th className="px-6 py-3 text-left text-md font-medium  ">SN</th>
            <th className="px-6 py-3 text-left text-md font-medium  ">Email</th>
            <th className="px-6 py-3 text-left text-md font-medium  ">Date</th>
            <th className="px-6 py-3 text-left text-md font-medium">Certification</th>
            <th className="px-6 py-3 text-left text-md font-medium">Status</th>
          </tr>
        </thead>
        <tbody >
          {tableData.map((item, index) => (
            <tr key={index} className="border-b border-[#31283A] hover:bg-[#161716]">
              <td className="px-6 py-5 text-sm text-white">{item.id}</td>
              <td className="px-6 py-5 text-sm text-white">{item.email}</td>
              <td className="px-6 py-5 text-sm text-white">{item.date}</td>
              <td className="px-6 py-5 text-sm text-white">{item.certification}</td>
              <td className="px-6 py-5 text-sm text-[#4B4B4B]">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IssuedCertificates
