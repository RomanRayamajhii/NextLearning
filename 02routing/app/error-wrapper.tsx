'use client'
import {useState} from 'react';
interface WrapperProps{
    children: React.ReactNode;

}
const ErrorSimulator=({
    message="An error has occurred in the global wrapper!",
}:{
    message?: string;
})=>{
    const [hasError, setHasError] = useState(false);
    if(hasError){
        throw new Error(message);
    }
    return (
        <div className="p-4 bg-yellow-100 border border-yellow-400 rounded mb-4">
            <h2 className="text-yellow-800 font-bold">Global Wrapper</h2>
            <p className="text-yellow-700">This component simulates an error when the button is clicked.</p>
            <button
                onClick={() => setHasError(true)}
                className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded"
            >
                Simulate Error
            </button>
            <hr />

        </div>
    );
}
const GlobalWrapper = ({children}:WrapperProps) => {
    return (
        <div>
            <ErrorSimulator />
            {children}
        </div>
    );
}
export default GlobalWrapper;
