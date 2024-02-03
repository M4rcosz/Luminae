import http from "@/http";
import { NextResponse } from "next/server";

export const GET = async () => {
    const res = await http.get('/products');
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.data;

    // const data = await res.json();

    return NextResponse.json(data);
}