export default function NotFoundReview() {
    return (
        <div className="p-4 bg-gray-100 min-h-screen flex  flex-col items-center justify-center">
            <h1 className='text-3xl font-bold text-red-500 text-center p-4'> Review Not Found</h1>
                <p className='text-lg text-gray-700 text-center'>
                    The review you are looking for does not exist.
                </p>
        </div>
    )
}