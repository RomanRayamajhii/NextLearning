import { log } from "console";
import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(
    request:NextRequest
){
    const requestHeader=new Headers(request.headers);
    console.log(requestHeader.get("Authorization"));
    const headerList=await headers();
    console.log(headerList.get("Authorization"));
    const cookieStore=await cookies();
    cookieStore.set("name","roman");
    console.log(cookieStore.getAll());
    return new Response(
        "<h1> Profile API data</h1>",{
            headers:{
                "Content-Type":"text/html",
                "set-cookie":"theme=dark",

            },
            status:200,

        }
    )


}