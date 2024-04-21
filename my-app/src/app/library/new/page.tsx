"use client" 

import { Metadata } from "next";
import { CreateNewContentForm } from "./components/CreateNewContentForm"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"




export default function NewContent() {

  const form = CreateNewContentForm()

  return (
    <>
      <Card x-chunk="dashboard-07-chunk-0">
        <CardHeader>
          <CardTitle>Create new content</CardTitle>
          <CardDescription>
            Start with a new empty content block. Springbok provides a few &quot;blocks&quot; to choose from.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {form}
        </CardContent>
      </Card>
    </>
  );
}
