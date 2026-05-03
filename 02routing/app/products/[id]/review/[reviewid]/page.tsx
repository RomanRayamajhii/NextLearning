import {notFound} from "next/navigation";

export default async function Page(
    { params }: { params: Promise<{ reviewid: string }> }
){
    const { reviewid } = await params;
    if(parseInt(reviewid)>=500){
        return notFound();
    }
    if(parseInt(reviewid)==100){
        throw new Error("Error found under this review");

    }
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className='text-3xl font-bold text-green-700 text-center p-4'>Review Id: {reviewid}</h1>
        </div>
    )

}