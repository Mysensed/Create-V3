import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { format } from 'date-fns'
import ISFMC_SDK from '@/app/api/sfmc-sdk/sfmc-sdk' 
import { limiter } from "@/app/api/config/limiter";


type Props = {
    params: {
        id: string,
    }
}

export async function GET(request: Request, { params: { id }}:Props) {

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
        const id = request.url.slice(request.url.lastIndexOf('/') + 1)
        const res = await ISFMC_SDK.rest.get(`/data/v1/customobjectdata/key/${process.env.SFMC_DE_LIBRARY_KEY}/rowset?$filter=id%20eq%20'${id}'`);

        // Return this JSON
        if (res.items) {
            return NextResponse.json(res.items[0], { status: 201 });
        } else {
            return NextResponse.json(`Not found ${id}`, { status: 400 });
        }

        return NextResponse.json(res.items);
    } catch (error) {
        console.error('Error:', error);
        // Return an error response
        return NextResponse.json(`Internal Server Error`, { status: 500 });
    } 
   
}

export async function PUT(request: Request, { params: { id }}:Props) {
    try {
        const id = request.url.slice(request.url.lastIndexOf('/') + 1)
        const requestData: Partial<libraryItem> = await request.json()

        if (!requestData) {
            return NextResponse.json("missing payload", { status: 400 });
        }

        // Prepare the JSON payload to PUT to SFMC
        // to do, validate payload agains type libraryItem
        const jsonPayload = {
            "items": [
                {
                    "id": id,
                    ...requestData
                }
            ]
        };

        const res = await ISFMC_SDK.rest.put(`/data/v1/async/dataextensions/key:${process.env.SFMC_DE_LIBRARY_KEY}/rows`,jsonPayload)


        // Return this JSON
        if (res) {
            return NextResponse.json(res, { status: 201 });
        } else {
            return NextResponse.json(`Not found ${id}`, { status: 400 });
        }

        return NextResponse.json(res.items);
    } catch (error) {
        console.error('Error:', error);
        // Return an error response
        return NextResponse.json('Internal Server Error', { status: 500 });
    } 
}

export async function POST(request: Request, { params: { id }}:Props) {
    try {
        const id = request.url.slice(request.url.lastIndexOf('/') + 1)
        const requestData: Partial<libraryItem> = await request.json()

        if (!requestData) {
            return NextResponse.json("missing payload", { status: 400 });
        }

        // Prepare the JSON payload to PUT to SFMC
        // to do, validate payload agains type libraryItem
        const jsonPayload = {
            "items": [
                {
                    "id": id,
                    ...requestData,
                }
            ]
        };

        const res = await ISFMC_SDK.rest.post(`/data/v1/async/dataextensions/key:${process.env.SFMC_DE_LIBRARY_KEY}/rows`,jsonPayload)


        // Return this JSON
        if (res) {
            return NextResponse.json(res, { status: 201 });
        } else {
            return NextResponse.json(`Not found ${id}`, { status: 400 });
        }

    } catch (error) {
        console.error('Error:', error);
        // Return an error response
        return NextResponse.json('Internal Server Error', { status: 500 });
    } 
}

export async function DELETE(request: Request, { params: { id }}:Props) {
    try {
        const id = request.url.slice(request.url.lastIndexOf('/') + 1)
        const soapDelete = await ISFMC_SDK.soap.delete('DataExtensionObject', {
            CustomerKey: process.env.SFMC_DE_LIBRARY_KEY,
            Keys: {
                Key: {
                    Name: 'id',
                    Value: id,
                }
            }
        }, {});      

        return NextResponse.json(soapDelete, { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        // Return an error response
        return NextResponse.json('Internal Server Error', { status: 500 });
    } 
}








