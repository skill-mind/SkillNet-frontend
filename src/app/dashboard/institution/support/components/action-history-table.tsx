import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ActionHistoryItem {
  id: number;
  date: string;
  ticketId: string;
  issueCategory: string;
  status: "Resolved" | "Pending" | "Completed";
  lastUpdate: string;
}

interface ActionHistoryTableProps {
  items: ActionHistoryItem[];
}

export function ActionHistoryTable({ items }: ActionHistoryTableProps) {
  //   const getStatusColor = (status: string) => {
  //     switch (status) {
  //       case "Resolved":
  //         return "text-green-400";
  //       case "Pending":
  //         return "text-yellow-400";
  //       case "Completed":
  //         return "text-blue-400";
  //       default:
  //         return "text-gray-400";
  //     }
  //   };

  return (
    <div className="w-full rounded-lg text-white">
      <h2 className="p-6 text-xl font-semibold">Action History Table</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-none bg-zinc-900 py-5 hover:bg-zinc-900">
              <TableHead className="text-gray-400">SN</TableHead>
              <TableHead className="text-gray-400">Date & Time</TableHead>
              <TableHead className="text-gray-400">Ticket ID</TableHead>
              <TableHead className="text-gray-400">Issue Category</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Last Update</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.id}
                className="border-zinc-800 hover:bg-zinc-900 text-[10px] md:text-xs "
              >
                <TableCell className="py-2 md:py-4 lg:py-5 xl:py-7">{item.id}</TableCell>
                <TableCell className="py-2 md:py-4 lg:py-5 xl:py-7">{item.date}</TableCell>
                <TableCell className="py-2 md:py-4 lg:py-5 xl:py-7">{item.ticketId}</TableCell>
                <TableCell className="py-2 md:py-4 lg:py-5 xl:py-7">{item.issueCategory}</TableCell>
                <TableCell className="py-2 md:py-4 lg:py-5 xl:py-7 text-zinc-700">
                  {item.status}
                </TableCell>
                <TableCell className="py-2 md:py-4 lg:py-5 xl:py-7">{item.lastUpdate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
