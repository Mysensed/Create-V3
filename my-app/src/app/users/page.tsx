import { Metadata } from 'next';
import IntroBlock from "@/components/ui/introBlock";
import getAllUsers from '@/lib/features/users/getAllUsers';
import Link from 'next/link';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { CardTitle, CardDescription, CardHeader, CardFooter, Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FC } from 'react';


export const metadata: Metadata = {
  title: 'Users',
}




export default  async function LibraryPage() {
  //server component
  const usersData: Promise<DemoUser[]> = getAllUsers()
  const users = await usersData

  const introContent = [
    { 
      title: 'Users', 
      body: 'demo page to fetch users from https://jsonplaceholder.typicode.com/users', 
    },
    { 
      preTitle: 'total users', 
      title: `${users.length}`,
    }
  ]

  const userRows = (
    <>
      {users.map(user => (
        <TableRow key={user.id} className="bg-accent">
          <TableCell>
            <div className="font-medium"> <Link href={`/users/${user.id}`}>{user.name}</Link></div>
            <div className="hidden text-sm text-muted-foreground md:inline">{user.email}</div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            <div className="font-medium">{user.company.name}</div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            <div className="font-medium">{user.website}</div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            <Badge className="text-xs" variant="secondary">
              {user.id}
            </Badge>
          </TableCell>
        </TableRow>
      ))}
    </>
  );  

  return (
    <>
      <IntroBlock content={introContent} />

      <Card x-chunk="users-01-chunk-3">
        <CardHeader className="px-7">
          <CardTitle>Users</CardTitle>
          <CardDescription>Loaded user list.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead className="hidden sm:table-cell">company</TableHead>
                <TableHead className="hidden sm:table-cell">website</TableHead>
                <TableHead className="hidden md:table-cell">id</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userRows}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
