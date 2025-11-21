"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ThankYou() {
    const [registrationID, setRegistrationID] = useState(null);

    useEffect(() => {
        const id = sessionStorage.getItem('registrationID');
        if (id) {
            setRegistrationID(id);
            // Optional: Clear it so it's not shown again on refresh? 
            // The original code did: sessionStorage.removeItem('registrationID');
            // I'll keep it for now or clear it on unmount if needed.
            sessionStorage.removeItem('registrationID');
        }
    }, []);

    return (
        <div className="flex-grow flex items-center justify-center py-8 px-[5%] min-h-[calc(100vh-72px)] pt-[72px]">
            <div className="bg-white rounded-[15px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-12 md:p-16 text-center max-w-[600px]">
                <h1 className="text-[2.5rem] text-[#6082b6] mb-6">Thank You!</h1>
                <p className="text-[1.1rem] text-[#555] mb-10">
                    Your event registration has been received. We've saved your spot and will send a confirmation email shortly. We look forward to seeing you there!
                </p>

                {registrationID && (
                    <div className="mt-8 mb-10 p-6 bg-[#f5f5f5] rounded-lg border border-dashed border-[#6082b6]">
                        <p className="mb-2 text-[1.1rem] text-[#2c4363]">Please save your unique Registration ID:</p>
                        <strong className="text-[#6082b6] text-[1.8rem] font-bold block tracking-wide select-all">
                            {registrationID}
                        </strong>
                    </div>
                )}

                <Link href="/" className="btn">Back to Homepage</Link>
            </div>
        </div>
    );
}
