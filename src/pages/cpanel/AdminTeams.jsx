import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function AdminTeams() {
  return (
    <div className='py-6'>
      <h1 className='text-xl font-sembibold mb-4'>Daftar Teams</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell className="font-medium">aa</TableCell>
                <TableCell>aaa</TableCell>
                <TableCell>aaaa</TableCell>
                <TableCell className="text-right">aaaaa</TableCell>
            </TableRow>
        </TableBody>
        </Table>
    </div>
  )
}
