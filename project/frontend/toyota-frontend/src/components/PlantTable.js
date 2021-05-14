import React from 'react'
import { useTable, useSortBy } from "react-table";

const PlantTable = ({ columns, data }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);
  const firstPageRows = rows.slice(0, 20);
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
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
    </>
  )
}

export default PlantTable;