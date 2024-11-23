// GET - getting data
// POST - creating data
// PUT - updating data 

import { NextRequest, NextResponse } from "next/server";

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
    if(!body.name) return NextResponse.json({error: "name is required"}, {status:400})
    return NextResponse.json({id: 1, name:body.name}, {status: 201});
}