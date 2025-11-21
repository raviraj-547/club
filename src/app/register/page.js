"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter();
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

        // Create FormData object for submission
        const submissionData = new FormData();
        Object.keys(formData).forEach(key => submissionData.append(key, formData[key]));
        submissionData.append('Registration ID', uniqueID);

        const googleScriptURL = 'https://script.google.com/macros/s/AKfycbyr-oIFTXiwkHl82Lx5QqCjXu4f_g8zD1SxzCTOkraUnZdMueId1N7dwCIR7YYXWyJn5Q/exec';
        const formSubmitURL = 'https://formsubmit.co/raviraj17a@gmail.com';

        try {
            // Send to Google Sheets (fire and forget)
            fetch(googleScriptURL, {
                method: 'POST',
                mode: 'no-cors',
                body: submissionData
            }).catch(err => console.log('Google Sheets request sent'));

            // Small delay
            await new Promise(resolve => setTimeout(resolve, 500));

            // Send to FormSubmit
            const emailResponse = await fetch(formSubmitURL, {
                method: 'POST',
                body: submissionData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (emailResponse.ok) {
                sessionStorage.setItem('registrationID', uniqueID);
                router.push('/thankyou');
            } else {
                throw new Error('Email submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage('There was an error submitting your registration. Please try again or contact us directly.');
        }
    };

    return (
        <section id="register" className="min-h-[calc(100vh-72px)] bg-[#f5f5f5]">
            <h2 className="section-title">Event Registration</h2>
            <div className="max-w-[800px] mx-auto mt-8 p-12 bg-white rounded-[15px] shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
                <p className="text-center text-[1.1rem] mb-8">
                    Register for one of our upcoming events! Fill out the form below to secure your spot.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-group">
                        <label htmlFor="event" className="block font-semibold mb-2 text-[#2c4363]">Select Event *</label>
                        <select
                            id="event"
                            name="event"
                            required
                            value={formData.event}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-2 focus:ring-[#6082b6]/20 transition-all"
                        >
                            <option value="" disabled>Choose an event</option>
                            <option value=" DevFest">DevFest </option>
                            <option value="Workshop Event">Workshop Event</option>
                            <option value="Tech Talk Series">Tech Talk Series</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name" className="block font-semibold mb-2 text-[#2c4363]">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-2 focus:ring-[#6082b6]/20 transition-all"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="roll_number" className="block font-semibold mb-2 text-[#2c4363]">Roll Number *</label>
                        <input
                            type="text"
                            id="roll_number"
                            name="roll_number"
                            required
                            value={formData.roll_number}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-2 focus:ring-[#6082b6]/20 transition-all"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="block font-semibold mb-2 text-[#2c4363]">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-2 focus:ring-[#6082b6]/20 transition-all"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile_number" className="block font-semibold mb-2 text-[#2c4363]">Mobile Number *</label>
                        <input
                            type="tel"
                            id="mobile_number"
                            name="mobile_number"
                            pattern="[0-9]{10}"
                            placeholder="10 digit mobile number"
                            required
                            value={formData.mobile_number}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-2 focus:ring-[#6082b6]/20 transition-all"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="branch" className="block font-semibold mb-2 text-[#2c4363]">Branch *</label>
                        <input
                            type="text"
                            id="branch"
                            name="branch"
                            placeholder="e.g., CSE, ME, ECE"
                            required
                            value={formData.branch}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-2 focus:ring-[#6082b6]/20 transition-all"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="college" className="block font-semibold mb-2 text-[#2c4363]">College *</label>
                        <select
                            id="college"
                            name="college"
                            required
                            value={formData.college}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-2 focus:ring-[#6082b6]/20 transition-all"
                        >
                            <option value="" disabled>Select your college</option>
                            <option value="CEC">CEC</option>
                            <option value="COE">COE</option>
                            <option value="CCT">CCT</option>
                            <option value="CBSA">CBSA</option>
                            <option value="CCP">CCP</option>
                            <option value="CCET">CCET</option>
                            <option value="CCHM">CCHM</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="year" className="block font-semibold mb-2 text-[#2c4363]">Year of Study *</label>
                        <select
                            id="year"
                            name="year"
                            required
                            value={formData.year}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-2 focus:ring-[#6082b6]/20 transition-all"
                        >
                            <option value="" disabled>Select year</option>
                            <option value="1st Year">1st Year</option>
                            <option value="2nd Year">2nd Year</option>
                            <option value="3rd Year">3rd Year</option>
                            <option value="4th Year">4th Year</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="block font-semibold mb-2 text-[#2c4363]">Any questions or comments? (Optional)</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-[#ccc] rounded-lg text-base focus:outline-none focus:border-[#6082b6] focus:ring-2 focus:ring-[#6082b6]/20 transition-all min-h-[120px]"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn w-full text-[1.1rem] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                        disabled={status === 'submitting'}
                    >
                        {status === 'submitting' ? 'Submitting...' : 'Register for Event'}
                    </button>

                    {status === 'error' && (
                        <p className="text-[#c0152f] text-[0.9rem] mt-2 text-center">{errorMessage}</p>
                    )}
                </form>
            </div>
        </section>
    );
}
