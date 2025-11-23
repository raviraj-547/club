"use client";
import React, { useState, useEffect } from 'react';
import { Check, Calendar, User, Hash, Mail, Phone, BookOpen, School, Clock, MessageSquare, AlertCircle } from 'lucide-react';

// --- Components ---

const ThankYou = ({ onBack }) => {
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
                    onClick={onBack} 
                    className="w-full bg-[#1e293b] text-white text-lg py-3 rounded-lg font-semibold hover:bg-[#0f172a] transition-all shadow-md active:scale-[0.98]"
                >
                    Register Another Student
                </button>
            </div>
        </div>
    );
};

const RegisterForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        event: "",
        name: "",
        roll_number: "",
        email: "",
        mobile_number: "",
        branch: "",
        college: "",
        year: "",
        message: ""
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const uniqueID = `TAC-${Date.now().toString(36)}`;

        // NOTE: In a real app, these are your endpoints. 
        // For this demo, we will simulate a successful request to show the UI flow.
        const googleScriptURL = 'https://script.google.com/macros/s/AKfycbyr-oIFTXiwkHl82Lx5QqCjXu4f_g8zD1SxzCTOkraUnZdMueId1N7dwCIR7YYXWyJn5Q/exec';
        const formSubmitURL = 'https://formsubmit.co/raviraj17a@gmail.com';

        const submissionData = new FormData();
        Object.keys(formData).forEach(key => submissionData.append(key, formData[key]));
        submissionData.append('Registration ID', uniqueID);

        try {
            // --- SIMULATION START ---
            // Simulating network delay for 1.5 seconds to show loading state
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // In production, you would uncomment the fetch calls below:
            /*
            fetch(googleScriptURL, {
                method: 'POST',
                mode: 'no-cors',
                body: submissionData
            }).catch(err => console.log('Google Sheets request sent'));

            const emailResponse = await fetch(formSubmitURL, {
                method: 'POST',
                body: submissionData,
                headers: { 'Accept': 'application/json' }
            });
            
            if (!emailResponse.ok) throw new Error('Email submission failed');
            */
            // --- SIMULATION END ---

            // Success handling
            sessionStorage.setItem('registrationID', uniqueID);
            onSuccess();

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage('There was an error submitting your registration. Please try again or contact us directly.');
        }
    };

    return (
        <section id="register" className="min-h-screen bg-[#f5f5f5] py-12 px-4">
            <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-[#2c4363] mb-4">Event Registration</h2>
                    <p className="text-[1.1rem] text-gray-600 max-w-2xl mx-auto">
                        Register for one of our upcoming events! Fill out the form below to secure your spot.
                    </p>
                </div>

                <div className="bg-white rounded-[15px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden">
                    <div className="h-2 bg-[#2c4363]"></div>
                    <div className="p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Event Selection */}
                            <div className="form-group">
                                <label htmlFor="event" className="flex items-center gap-2 font-semibold mb-2 text-[#2c4363]">
                                    <Calendar className="w-4 h-4" /> Select Event <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="event"
                                        name="event"
                                        required
                                        value={formData.event}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-[#ccc] rounded-lg text-base bg-white focus:outline-none focus:border-[#6082b6] focus:ring-4 focus:ring-[#6082b6]/10 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Choose an event</option>
                                        <option value="DevFest">DevFest</option>
                                        <option value="Workshop Event">Workshop Event</option>
                                        <option value="Tech Talk Series">Tech Talk Series</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="form-group">
                                    <label htmlFor="name" className="flex items-center gap-2 font-semibold mb-2 text-[#2c4363]">
                                        <User className="w-4 h-4" /> Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-4 focus:ring-[#6082b6]/10 transition-all"
                                        placeholder="Name"
                                    />
                                </div>

                                {/* Roll Number */}
                                <div className="form-group">
                                    <label htmlFor="roll_number" className="flex items-center gap-2 font-semibold mb-2 text-[#2c4363]">
                                        <Hash className="w-4 h-4" /> Roll Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="roll_number"
                                        name="roll_number"
                                        required
                                        value={formData.roll_number}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-4 focus:ring-[#6082b6]/10 transition-all"
                                        placeholder="e.g. 2101234"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Email */}
                                <div className="form-group">
                                    <label htmlFor="email" className="flex items-center gap-2 font-semibold mb-2 text-[#2c4363]">
                                        <Mail className="w-4 h-4" /> Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-4 focus:ring-[#6082b6]/10 transition-all"
                                        placeholder="abc@gmail.com"
                                    />
                                </div>

                                {/* Mobile */}
                                <div className="form-group">
                                    <label htmlFor="mobile_number" className="flex items-center gap-2 font-semibold mb-2 text-[#2c4363]">
                                        <Phone className="w-4 h-4" /> Mobile Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="mobile_number"
                                        name="mobile_number"
                                        pattern="[0-9]{10}"
                                        required
                                        value={formData.mobile_number}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-4 focus:ring-[#6082b6]/10 transition-all"
                                        placeholder="10 digit number"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Branch */}
                                <div className="form-group">
                                    <label htmlFor="branch" className="flex items-center gap-2 font-semibold mb-2 text-[#2c4363]">
                                        <BookOpen className="w-4 h-4" /> Branch <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="branch"
                                        name="branch"
                                        required
                                        value={formData.branch}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-4 focus:ring-[#6082b6]/10 transition-all"
                                        placeholder="e.g. CSE"
                                    />
                                </div>

                                {/* College */}
                                <div className="form-group">
                                    <label htmlFor="college" className="flex items-center gap-2 font-semibold mb-2 text-[#2c4363]">
                                        <School className="w-4 h-4" /> College <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="college"
                                            name="college"
                                            required
                                            value={formData.college}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-[#ccc] rounded-lg text-base bg-white focus:outline-none focus:border-[#6082b6] focus:ring-4 focus:ring-[#6082b6]/10 transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>Select</option>
                                            <option value="CEC">CEC</option>
                                            <option value="COE">COE</option>
                                            <option value="CCT">CCT</option>
                                            <option value="CBSA">CBSA</option>
                                            <option value="CCP">CCP</option>
                                            <option value="CCET">CCE</option>
                                            <option value="CCHM">CCHM</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                                    </div>
                                </div>

                                {/* Year */}
                                <div className="form-group">
                                    <label htmlFor="year" className="flex items-center gap-2 font-semibold mb-2 text-[#2c4363]">
                                        <Clock className="w-4 h-4" /> Year <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="year"
                                            name="year"
                                            required
                                            value={formData.year}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-[#ccc] rounded-lg text-base bg-white focus:outline-none focus:border-[#6082b6] focus:ring-4 focus:ring-[#6082b6]/10 transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>Select</option>
                                            <option value="1st Year">1st</option>
                                            <option value="2nd Year">2nd</option>
                                            <option value="3rd Year">3rd</option>
                                            <option value="4th Year">4th</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="form-group">
                                <label htmlFor="message" className="flex items-center gap-2 font-semibold mb-2 text-[#2c4363]">
                                    <MessageSquare className="w-2 h-2" /> Any questions or comments? <span className="font-normal text-gray-500">(Optional)</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-4 focus:ring-[#6082b6]/10 transition-all min-h-[120px]"
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full text-[1.1rem] bg-[#2c4363] text-white py-4 rounded-lg font-bold shadow-lg hover:bg-[#1a2c45] hover:shadow-xl transform active:scale-[0.98] transition-all disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center justify-center gap-2"
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                        Submitting...
                                    </>
                                ) : (
                                    'Register for Event'
                                )}
                            </button>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-[#c0152f] text-sm bg-red-50 p-3 rounded-lg border border-red-100 animate-pulse">
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    <p>{errorMessage}</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                
                <p className="text-center text-gray-400 text-sm mt-8 pb-8">
                    &copy; {new Date().getFullYear()} Event Organization Committee
                </p>
            </div>
        </section>
    );
};

export default function App() {
    // Simple state-based routing for the single file component
    const [view, setView] = useState('register');

    useEffect(() => {
        // Check if previously registered in this session
        // Wrap in browser check just in case, though useEffect runs client-side anyway
        if (typeof window !== 'undefined' && sessionStorage.getItem('registrationID')) {
             // setView('thankyou');
        }
    }, []);

    const handleSuccess = () => {
        window.scrollTo(0, 0);
        setView('thankyou');
    };

    const handleBack = () => {
        // Reset and go back to form
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem('registrationID');
        }
        setView('register');
    };

    return (
        <div className="font-sans">
            {view === 'register' ? (
                <RegisterForm onSuccess={handleSuccess} />
            ) : (
                <ThankYou onBack={handleBack} />
            )}
        </div>
    );
}
