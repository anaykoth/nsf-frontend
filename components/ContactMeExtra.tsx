import { MapPinIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

interface IInputs {
    firstName: string;
    lastName: string;
    email: string;
    occupation: string;
    feedback: string;
}

const ContactMe: FC = () => {
    const { register, handleSubmit } = useForm<IInputs>();

    const onSubmit: SubmitHandler<IInputs> = async (formData: IInputs) => {
        console.log(formData);  // Log the form data
        try {
            const response = await axios.post('http://127.0.0.1:8000/customer/', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                occupation: formData.occupation,
                feedback: formData.feedback,
            });

            if (response.status === 201) {
                console.log('Form submitted successfully:', response.data);
            } else {
                console.error('Form submission failed:', response.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-black text-2xl">
                Contact
            </h3>
            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl text-black font-semibold text-center">
                    So... what do you think?{' '}
                    <span className="decoration-[#f7ab0a]/50 underline">Let us know</span> down below!
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#f7ab0a] h-7	w-7	animate-pulse" />
                        <p className="text-2xl text-black">New Brunswick, NJ</p>
                    </div>
                </div>
                <form
                    className="flex flex-col space-y-2 w-fit mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex space-x-2">
                        <input
                            className="contactInput bg-black placeholder-white"
                            type="text"
                            {...register('firstName')}
                            placeholder="Name"
                        />
                        <input
                            className="contactInput bg-black placeholder-white"
                            type="text"
                            {...register('lastName')}
                            placeholder="Last Name"
                        />
                        <input
                            className="contactInput bg-black placeholder-white"
                            type="text"
                            {...register('email')}
                            placeholder="Email"
                        />
                    </div>
                    <input
                        className="contactInput bg-black placeholder-white"
                        type="text"
                        {...register('occupation')}
                        placeholder="Occupation"
                    />
                    <textarea
                        className="contactInput bg-black placeholder-white"
                        {...register('feedback')}
                        placeholder="Feedback"
                    />
                    <button
                        className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
                        type="button"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Submit
                    </button>

                </form>

            </div>
        </div>
    );
};

export default ContactMe;
