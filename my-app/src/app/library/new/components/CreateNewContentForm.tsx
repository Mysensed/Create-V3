'useClient'

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button, buttonVariants } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Tag, TagInput } from "@/components/ui/tag-input";


import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,SelectGroup,SelectLabel } from "@/components/ui/select"
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,} from "@/components/ui/command"
import {Popover,PopoverContent,PopoverTrigger,  } from "@/components/ui/popover"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { brandData } from "@/lib/data/brandData"
import { categoryData } from "@/lib/data/categoryData"
import { blocksData } from "@/lib/data/blocksData"
import { tagsData } from "@/lib/data/tagsData"

//set-up from structure
const FormSchema = z.object({
    title: z.string().min(2).max(50),
    description: z.string(),
    brand: z.string({
        required_error: "Please select an brand to use",
    }),
    category: z.string(),
    contentModule: z.string(),
    previewImage: z.string(),
    version: z.number().min(1),
    tags: z.array(z.object({
        id: z.string(),
        text: z.string()
    })),

})

//check what options should be shown in the dropdown
const brandOptions = brandData.map(brand => {
    return (<SelectItem key={`brandOption_${brand.brand}`} value={brand.brand}>{brand.brand}</SelectItem>)
})
const categoryOptions = categoryData.map(category => {
    return (<SelectItem key={`categoryOption_${category}`} value={category}>{category}</SelectItem>)
})
const blocksOptions = blocksData.map(blocks => {
    return (<SelectItem key={`blocksOption_${blocks}`} value={blocks}>{blocks}</SelectItem>)
})

const tagsListLabels = tagsData.flatMap(item => 
    item.tags.map(tag => ({
      id: tag.label,
      text: tag.label
    }))
);

const tagOptions = tagsData.map(tagGroup => {
    return (
        <SelectGroup key={tagGroup.label}>
            <SelectLabel>{tagGroup.label}</SelectLabel>
            {tagGroup.tags.map(tag => {               
                return(
                    <SelectItem key={tag.label} value={tag.label}>
                        {tag.label} - {tag.subTtile}
                    </SelectItem>
                )
            })}
        </SelectGroup>
    )
})





export function CreateNewContentForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    //create localstate for tag manager
    const [tags, setTags] = useState<Tag[]>([]);
    const { setValue } = form;



    // 2. Define a submit handler.
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("submit")
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        });
    }


    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-8"
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>title</FormLabel>
                        <FormControl>
                            <Input placeholder="your content name here" {...field} />
                        </FormControl>
                        <FormDescription>
                            Use a unique name that can be used to find your content in the future
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Content description</FormLabel>
                        <FormControl>
                            <Textarea
                                placeholder="Tell us a little bit about the content"
                                className="resize-none"
                                {...field}
                            />
                        </FormControl>
                        {/* <FormDescription>You can <span>@mention</span> other users and organizations.</FormDescription> */}
                        <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Select brand</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a brand to use" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>{brandOptions}</SelectContent>
                        </Select>
                        {/* <FormDescription>placeholder</FormDescription> */}
                        <FormMessage />
                    </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="contentModule"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Select block template</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a template to use" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>{blocksOptions}</SelectContent>
                        </Select>
                        {/* <FormDescription>placeholder</FormDescription> */}
                        <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="previewImage"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Preview image</FormLabel>
                        <FormControl>
                            <Input placeholder="upload an image" type="text" {...field} />
                            {/* <Input placeholder="upload an image" type="file" {...field} /> */}
                        </FormControl>
                        <FormDescription>
                            Image will only be used to preview the content-module
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start">
                      <FormLabel className="text-left">Tags</FormLabel>
                      <FormControl>
                        <TagInput
                            {...field}
                            placeholder="type to create a tag"
                            tags={tags}
                            className="sm:min-w-[450px]"
                            setTags={(newTags) => {
                                setTags(newTags);
                                setValue("tags", newTags as [Tag, ...Tag[]]);
                            }}
                            autocompleteOptions={tagsListLabels}
                            enableAutocomplete={true}
                            restrictTagsToAutocompleteOptions={false}


                        />
                      </FormControl>
                      <FormDescription>
                        These are the topics that your content relates to
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Select category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a category to use" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>{categoryOptions}</SelectContent>
                        </Select>
                        {/* <FormDescription>placeholder</FormDescription> */}
                        <FormMessage />
                    </FormItem>
                    )}
                />



                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )

}


    



    

