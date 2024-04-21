"use client"

import { useState, FormEvent} from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/components/ui/use-toast"



//set-up from structure
const FormSchema = z.object({
    search: z.string().min(1).max(50),
})

export default function Search() {
    //router function
    const router = useRouter()


    // 1. Define your form.
     const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    // 2. Define a submit handler.
    function onSubmit(data: z.infer<typeof FormSchema>) {

        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        });


        router.push(`/wikiSearch/${data.search}/`)
    }




    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-8"
            >
                <FormField
                    control={form.control}
                    name="search"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>title</FormLabel>
                        <FormControl>
                            <Input placeholder="Search" {...field} />
                        </FormControl>
                        <FormDescription>
                            Search wikipedia
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
