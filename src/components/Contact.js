import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x3x5r8v', 'template_b2qhmas', form.current, 'jKegHot-Tw4E3CFMY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset();
    };

    return (
        <div class="bg-blue-200 min-h-screen">
            <div className="container mx-auto px-6 py-8">
                <h3 className="text-gray-700 text-3xl font-medium">Contact Me</h3>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                        <div>
                            <input type="text" name="name" id="name" placeholder=" Your Name" className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-lg mt-1 block w-full p-1"/>
                        </div>
                        <div>
                            <input type="email" name="email" id="email" placeholder=" Your Email Address" className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-lg mt-1 block w-full p-1"/>
                        </div>
                        <div>
                            <input type="text" name="subject" id="subject" placeholder=" Subject" className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-lg mt-1 block w-full p-1"/>
                        </div>
                        <div>
                            <textarea name="message" id="message" rows="4" placeholder=" Your Message" className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-lg mt-1 block w-full p-1"></textarea>
                        </div>
                        <div className="text-right col-span-2">
                            <button type="submit" value="Send Message" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none" > Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;