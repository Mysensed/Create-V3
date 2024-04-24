import { NextResponse } from "next/server";
import ISFMC_SDK from '@/app/api/sfmc-sdk/sfmc-sdk'
import { limiter } from "@/app/api/config/limiter";

export async function GET(request: Request) {

    const origin = request.headers.get('origin')

    const remaining = await limiter.removeTokens(1)
    
    //spam protection
    if ( remaining < 0 ){
        return NextResponse.json(null, { 
            status: 429, 
            statusText: "too many requests",
            headers: {
                'Access-Controll-Allow-Origin' : origin || '*',
                'Content-Type' : 'text/plain',
            }
        });
    }

    try {
        const { searchParams } = new URL(request.url)
        const page: number = parseInt(searchParams.get('page') || '1', 10) || 1;
        const pagesize: number = parseInt(searchParams.get('page') || '1', 10) || 100;
        const offset: number = parseInt(searchParams.get('page') || '1', 10) || 0;

        // Make API call (page, pagesize not working yet)
        //const res = await ISFMC_SDK.rest.get(`/data/v1/customobjectdata/key/${process.env.SFMC_DE_LIBRARY_KEY}/rowset?page=${page}&pageSize=${pagesize}&offset=${offset}`,jsonPayload);
        const res = await ISFMC_SDK.rest.get(`/data/v1/customobjectdata/key/${process.env.SFMC_DE_LIBRARY_KEY}/rowset?page=${page}&pageSize=${pagesize}&offset=${offset}`);

        // Return the response as JSON
        return NextResponse.json(res.items, { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        // Return an error response
        return NextResponse.json('Internal Server Error', { status: 500 });
    }

    
   
}











// const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
// export async function GET() {
//     const res = await fetch(DATA_SOURCE_URL)
//     const todos: DemoToDo[] = await res.json()

//     return NextResponse.json(todos)
// }



// // example route handler for dynamic data
// export async function GET(request: Request){
//     const { searchParams } = new URL(request.url)

//     // //get the name / lastname parameter
//     // const name = searchParams.get('name')
//     // const lastname = searchParams.get('name')
//     // //return values
//     // return NextResponse.json({ name, lastname })

//     //create a new object based on the searchparams received
//     const obj = Object.fromEntries(searchParams.entries())
//     return NextResponse.json(obj)
// }


// 'static route handlers' to serve static data
// export async function GET(){
//     return NextResponse.json({"message":'hello from library next.js'})
// }