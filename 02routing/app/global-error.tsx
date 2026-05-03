'use client';
export default function GlobalError() {
   
    return (
        <div className="p-4 text-center">
            <h2 className="text-red-600 font-bold">A global error occurred!</h2>
            

            <button
                onClick={() => window.location.reload()}
                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Try again
            </button>
        </div>
    );
}