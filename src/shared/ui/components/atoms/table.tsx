import React from 'react';
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { cn } from '@/shared/lib/utils/styles';

export const Table = <TData,>({
  data,
  columns,
  className,
}: {
  data: TData[];
  columns: ColumnDef<TData>[];
  className?: string;
}) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={cn('w-full overflow-x-scroll', className)}>
      <table className="w-full table-fixed border-collapse">
        <thead className="text-left">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="pb-4">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {data.length ? (
          <tbody className="border-t border-[rgba(255,255,255,0.10)]">
            {table.getRowModel().rows.map((row, rowIndex) => (
              <React.Fragment key={row.id}>
                <tr>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="px-2 py-6">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
                {rowIndex < table.getRowModel().rows.length - 1 && (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="border-b border-[rgba(255,255,255,0.10)]"
                    />
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        ) : null}
      </table>
    </div>
  );
};
