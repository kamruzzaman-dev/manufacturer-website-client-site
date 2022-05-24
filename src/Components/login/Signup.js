import React from 'react';
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';

const onSubmit = async data => {
    console.log(data);
}

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl p-5">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input
                                type="name"
                                placeholder="Enter Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span
                                    className="label-text-alt text-red-500">
                                    {errors.name.message}
                                </span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: 'Enter Vaild Email Address'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span
                                    className="label-text-alt text-red-500">
                                    {errors.email.message}
                                </span>}
                                {errors.email?.type === 'pattern' && <span
                                    className="label-text-alt text-red-500">
                                    {errors.email.message}
                                </span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">password</span>
                            </label>

                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                className="input input-bordered w-full max-w-xs"
                                autoComplete='off'
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span
                                    className="label-text-alt text-red-500">
                                    {errors.password.message}
                                </span>}
                                {errors.password?.type === 'minLength' && <span
                                    className="label-text-alt text-red-500">
                                    {errors.password.message}
                                </span>}

                            </label>
                        </div>

                      

                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>Already Have a account?<Link to='/login' className='text-primary'>signup</Link></small></p>
                </div>
                <div className="divider">OR</div>
                <button className="btn btn-accent">CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Signup;