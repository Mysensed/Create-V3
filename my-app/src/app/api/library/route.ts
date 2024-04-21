import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";





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