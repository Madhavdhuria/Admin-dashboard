import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
  usePagination,
} from "react-table";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
function TableHOC<T extends object>(
  columns: Column<T>[],
  data: T[],
  heading: string,
  ContainerClassname: string,
  ShowPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,
      },
    };
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      nextPage,
      canNextPage,
      previousPage,
      canPreviousPage,
      pageCount,
      state: { pageIndex },
    } = useTable(options, useSortBy, usePagination);
    return (
      <div className={ContainerClassname}>
        <h2 className="heading">{heading}</h2>
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted && (
                      <span>
                        {" "}
                        {column.isSortedDesc ? (
                          <AiOutlineSortDescending />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {ShowPagination && (
          <div className="table-pagination">
            <button onClick={previousPage} disabled={!canPreviousPage}>
              Previous
            </button>
            <span>{` ${pageIndex+1} page of ${pageCount} `}</span>
            <button onClick={nextPage} disabled={!canNextPage}>
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHOC;
