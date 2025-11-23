"use client";
import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export default function ThankYou() {
    const [registrationID, setRegistrationID] = useState(null);

    useEffect(() => {
        // Ensure this only runs on the client
        if (typeof window !== 'undefined') {
            const id = sessionStorage.getItem('registrationID');
            if (id) {
                setRegistrationID(id);
                // We keep it in session storage briefly or clear it as needed
                sessionStorage.removeItem('registrationID');
            }
        }
    }, []);

    const handleBack = () => {
        window.location.href = '/register';
    };

    return (
        <div className="flex-grow flex items-center justify-center py-8 px-4 min-h-screen bg-[#f5f5f5]">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center max-w-[500px] w-full animate-fade-in-up">
                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-10 h-10 text-green-600" strokeWidth={3} />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-[#1e293b] mb-4">Registration Successful!</h1>

                {/* Subtitle */}
                <p className="text-gray-500 mb-8 leading-relaxed">
                    Thank you for registering.
                </p>


                {/* ID Box */}
                {registrationID && (
                    <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-600">
                        Registration ID: <span className="font-bold text-[#1e293b]">{registrationID}</span>
                    </div>
                )}

                {/* Button */}
                <button
                    onClick={handleBack}
                    className="w-full bg-[#1e293b] text-white text-lg py-3 rounded-lg font-semibold hover:bg-[#0f172a] transition-all shadow-md active:scale-[0.98]"
                >
                    Register Another Student
                </button>
            </div>
        </div>
    );
}
