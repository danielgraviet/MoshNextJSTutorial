// GET - getting data
// POST - creating data
// PUT - updating data 

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    // fetch users from a data base. 
    return NextResponse.json(
        [
            {id: 1, name: "Mosh"},
            {id: 2, name: "Dan"},
            {id: 3, name: "Scott"}
        ]
    );
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body)
    if(!validation.success) return NextResponse.json(validation.error.errors, {status:400})
    return NextResponse.json({id: 1, name:body.name}, {status: 201});
}