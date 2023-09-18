import React from 'react'
import { Radio, Typography } from "@material-tailwind/react";
import RadioSvg from '../../../svgs/RadioSvg';
import { FaLock } from 'react-icons/fa';
import CustomInput from '../../Reusable/CustomInput';

const PaymentRadio = ({ id, title, labelImage, checked, name, customStyle }) => {
    return (
        <div className='flex justify-between w-full gap-3 p-4'>
            <Radio id={id} icon={<RadioSvg className="w-[18px] h-[18px]" />} className='border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]' ripple={false} name={name} label={
                <div>
                    <Typography className="font-medium tracking-032 flex items-center gap-1 text-sm text-b16">
                        {
                            labelImage ?
                                <img src={'/payment/' + labelImage} className='h-[23px] object-contain' alt={title} />
                                : null
                        }
                        <span className={customStyle}>
                            {title}
                        </span>
                    </Typography>
                </div>
            } defaultChecked={checked} />
        </div>
    )
}

const PaymentMethod = () => {

    return (
        <div>
            {/* Payment */}
            <div className='space-y-14px mt-8'>
                <h3 className='text-lg font-medium text-b16'>Payment</h3>
                <p className='flex gap-1 items-center text-sm text-b32 font-medium'>
                    <FaLock className='text-b3 text-xs' /> All transactions are secure and encrypted.
                </p>
                <div className='[&>*]:border-b [&>*]:border-b31 [&>*:last-child]:border-0 border border-b31 rounded-md'>
                    <PaymentRadio customStyle="font-medium" name="payment_method" id="credit_card" title="Credit card" checked={true} />
                    <div className='p-4 bg-[#F9F9F9] grid grid-cols-1 gap-14px'>
                        <CustomInput colorStyle="border-b31 placeholder:text-b25 placeholder:text-sm !text-sm" placeholder="Card number" icon="lock.webp" />
                        <CustomInput colorStyle="border-b31 placeholder:text-b25 placeholder:text-sm !text-sm" placeholder="Name on card" />
                        <div className='grid grid-cols-2 gap-14px'>
                            <CustomInput colorStyle="border-b31 placeholder:text-b25 placeholder:text-sm !text-sm" placeholder="Expiration date (MM / YY)" />
                            <CustomInput colorStyle="border-b31 placeholder:text-b25 placeholder:text-sm !text-sm" placeholder="Security code" icon="question-fill.webp" />
                        </div>
                    </div>
                    <PaymentRadio name="payment_method" labelImage="pay_paypal.webp" id="paypal" />
                    <PaymentRadio name="payment_method" id="affirm" labelImage="affirm.webp" />
                </div>
            </div>
            {/* Billing Address */}
            <div className='mt-8'>
                <h3 className='text-lg font-medium text-b16'>Billing address</h3>
                <p className='flex gap-1 items-center text-sm text-b32'>
                    Select the address that matches your card of payment method.
                </p>
                <div className='mt-14px [&>*]:border-b [&>*]:border-b31 [&>*:last-child]:border-0 border border-b31 rounded-md'>
                    <PaymentRadio name="billing_address" id="shipping_address" title="Same as shipping address" checked={true} />
                    <PaymentRadio name="billing_address" id="billing_address" title="Use a different billing address" />
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod