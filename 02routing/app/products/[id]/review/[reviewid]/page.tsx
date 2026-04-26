export default async function Page(
    {params}:{params:{reviewid:string} }
){
    const {reviewid} = await params;
    return(
         <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className='text-3xl font-bold text-green-700 text-center p-4'> This is product page with id: {reviewid}</h1>
        </div>
    )

}