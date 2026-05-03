"use client";
import { startTransition} from "react";

import {useRouter} from "next/navigation";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    
    const router = useRouter();
     const handleReset = () => {
        startTransition(() => {
            router.refresh();
            reset();
        });
    }; 
    
  return (
    <div className="p-4 text-center">
      <h2 className="text-red-600 font-bold">Something went wrong!</h2>
      <p className="mt-2 text-gray-700">{error.message}</p>

      <button
        onClick={() => handleReset()}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
