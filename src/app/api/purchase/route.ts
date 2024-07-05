import { NextRequest } from "next/server";



export const POST = async (req:NextRequest) => {

    const obj = await req.json();
    const buyUrl = 'http://localhost:8007/store/' + `${obj.item.id}`  + '/buy/' + `${obj.data.employee.id}`
    console.log("=================")
    console.log(buyUrl)
    const res = await fetch(buyUrl, {
        headers: {
            "Content-Type":"application/json",
            "Authorization": "Basic cm5yOnJucg=="
        }
    })
    const resp = await res.json()
    console.log(resp)
}