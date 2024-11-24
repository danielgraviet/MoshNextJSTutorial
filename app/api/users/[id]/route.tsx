import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest,
    {params}: {params: {id: number}}) {
        // fetch data from a db
        // if not found, return 404 error
        // else return data

        if (params.id > 10) return NextResponse.json(
            {error: 'User not found'},
            {status: 404}
        )
        return NextResponse.json({id: 1, name: "danny"})
}

export async function PUT(request: NextRequest,  {params}: {params: {id: number}}) {
    // validate the request body
    const body = await request.json();
    if (!body.name) {
        // if invalid, return 400
        return NextResponse.json({error: "Name is required"}, {status: 400})
    }
    
    // fetch the user with the given id
    if (params.id > 10) {
        // if doesn't exist, return 404
        return NextResponse.json({error: "User is required"}, {status: 404})
    }

    return NextResponse.json({id: 1, name: body.name})
    //  update the user
    // return the updated user 
}

export function DELETE(
    request: NextRequest,
    {params}: {params: {id: number}}
) {
    if (params.id > 10){
        return NextResponse.json({error: "User not found"}, {status: 404})
    }

    return NextResponse.json({});
    // fetch user from data base
    // if not found, return 404 error
    // if found, delete user
    // return 200.
}