import React from 'react';


const Table= ({ columns, data }) => {
  return (
    <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 font-medium border-b">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="py-3 px-6"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='text-gray-600 divide-y'>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap"
                >
                  {column.cell ? column.cell({row, value: row[column.accessor]}) : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
