"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface CandidateData {
  sn: number;
  address: string;
  date: string;
  certification: string;
  status: "Eligible" | "Unverified";
}

const NewCandidates = () => {
  const data: CandidateData[] = [
    {
      sn: 1,
      address: "Web3 Test",
      date: "12th Dec, 2025",
      certification: "N/A",
      status: "Eligible",
    },
    {
      sn: 2,
      address: "Web3 Test",
      date: "12th Dec, 2025",
      certification: "N/A",
      status: "Unverified",
    },
  ];

  

  return (
    <div className="text-gray-300 w-full">
    <div className="rounded-md border border-[#31283A] overflow-x-auto max-h-96">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#161716] border-b border-[#31283A]">
            <TableHead className="text-sm font-medium text-gray-300 p-3">SN</TableHead>
            <TableHead className="text-sm font-medium text-gray-300 p-3">Address</TableHead>
            <TableHead className="text-sm font-medium text-gray-300 p-3">Date</TableHead>
            <TableHead className="text-sm font-medium text-gray-300 p-3">Certification</TableHead>
            <TableHead className="text-sm font-medium text-gray-300 p-3">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.sn} className="border-b border-[#31283A]">
              <TableCell className="text-sm font-medium text-gray-400 p-3">
                {row.sn}
              </TableCell>
              <TableCell className="text-sm font-medium text-gray-400 p-3">
                {row.address}
              </TableCell>
              <TableCell className="text-sm font-medium text-gray-400 p-3">
                {row.date}
              </TableCell>
              <TableCell className="text-sm font-medium text-gray-400 p-3">
                {row.certification}
              </TableCell>
              <TableCell 
                className={`p-3 text-sm font-medium ${
                  row.status === "Eligible" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
  );
};

export default NewCandidates;
