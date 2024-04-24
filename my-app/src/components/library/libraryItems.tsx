"use client";
import { useGetLibraryQuery } from "@/lib/features/library/libraryApiSlice";
import { useState } from "react";
import LibraryItem from "./libraryItem";
import { Skeleton } from "@/components/ui/skeleton"

import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue,} from "@/components/ui/select"
const pageOptions = [1, 2, 3, 4];


interface LibraryItemsProps {
    page?: number;
}
export const LibraryItems: React.FC<LibraryItemsProps> = ({ page = 1 }) => {
    
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } =
  useGetLibraryQuery(page);

  if (isError) { return (<h3>There was an error.</h3>)}

  if (isLoading) { return (
    <>
        {[...Array(5)].map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
                <Skeleton className="h-[250px] w-[250px] rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-3 w-[200px]" />
                    <Skeleton className="h-3 w-[200px]" />
                </div>
            </div>
        ))}
    </>
  )}

  if (isSuccess) {
    return (
        <>
            {data.map((content: libraryItem) => (
                <LibraryItem
                    key={content.keys.id}
                    title={content.values.title || "no title"}
                    preTitle={content.values.brand || "no brand"}
                    subTitle={`version ${content.values.version}` || "version 1"}
                    image={content.values.previewimage || "https://www.place-hold.it/400?text=libraryPage"}
                    className="w-[250px]"
                />
            ))}
        </>  
    )
  }

  return null;
};


// <Select>
            //     <SelectTrigger className="w-[180px]">
            //         <SelectValue placeholder="Select page" />
            //     </SelectTrigger>
            //     <SelectContent>
            //         <SelectGroup>
            //             <SelectLabel>Page</SelectLabel>
            //             {pageOptions.map((option) => (
            //                 <SelectItem key={option} value={option.toString()}>{option}</SelectItem>
            //             ))}
            //         </SelectGroup>
            //     </SelectContent>
            // </Select> 
        



    //   <div className={styles.container}>
    //     <h3>Select the Quantity of Quotes to Fetch:</h3>
    //     <select
    //       className={styles.select}
    //       value={numberOfQuotes}
    //       onChange={(e) => {
    //         setNumberOfQuotes(Number(e.target.value));
    //       }}
    //     >
    //       {options.map((option) => (
    //         <option key={option} value={option}>
    //           {option}
    //         </option>
    //       ))}
    //     </select>
    
    //   </div>