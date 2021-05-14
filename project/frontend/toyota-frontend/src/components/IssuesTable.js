import React from 'react'
import { useTable, useSortBy, useFilters } from "react-table";

const PlantTable = ({ columns, data }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useFilters, useSortBy);
  const firstPageRows = rows.slice(0, 50);

  return (
    <>
      <table
        className="text-center table table-sm table table-striped table table-bordered"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (

                <th {...column.getHeaderProps(column.getSortByToggleProps())} >
                  
                  {/* <div style={{width : 20}}>{column.canFilter ? column.render("Filter") : null}</div> */}
                  {column.render("Header")}
                  {column.Header !== "Actions" ? (
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <i className="fa fa-sort-down" />
                        ) : (
                          <i className="fa fa-sort-up" />
                        )
                      ) : (
                        <i className="fa fa-sort" />
                      )}
                    </span>
                  ) : (
                    <>
                      <br></br>
                      <h7 className="col">View</h7>
                      <h7 className="col">Edit</h7>
                      <h7 className="col">Delete</h7>
                      <h7 className="col">Status</h7>
                    </>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr  {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    cell.column.Header === 'Impact' ? (
                      cell.value === 1 ? <td>High</td> : cell.value === 2 ? <td>Medium</td> : <td>Low</td>
                    ) : (
                      <td onClick={() => console.log(cell.column.Header, cell.value)} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    )
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 50 results of {rows.length} rows</div>
    </>
  )
}

export default PlantTable;