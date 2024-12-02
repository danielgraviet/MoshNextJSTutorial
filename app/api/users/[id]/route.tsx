import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest,
    {params}: {params: {id: string}}) {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(params.id)}
        })
        // fetch data from a db
        // if not found, return 404 error
        // else return data

        if (!user) return NextResponse.json(
            {error: 'User not found'},
            {status: 404}
        )
        return NextResponse.json(user)
}

export async function PUT(request: NextRequest,  {params}: {params: {id: number}}) {
    // validate the request body
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        // if invalid, return 400
        return NextResponse.json(validation.error.errors, {status: 400})
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