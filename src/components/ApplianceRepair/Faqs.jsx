import React from 'react'
import FaqAccordion from '../../components/FaqAccordion';

const Faqs = () => {
    const faqs = [
        {
            title: 'Lorem Ipsum Dolor?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibul tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phaselluse eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula.',
        },
        {
            title: 'Lorem Ipsum Dolor?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibul tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phaselluse eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula.',
        },
        {
            title: 'Lorem Ipsum Dolor?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibul tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phaselluse eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula.',
        },
        {
            title: 'Lorem Ipsum Dolor?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibul tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phaselluse eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula.',
        },
        {
            title: 'Lorem Ipsum Dolor?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibul tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phaselluse eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula.',
        },
        {
            title: 'Lorem Ipsum Dolor?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibul tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phaselluse eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula.',
        },
    ]
    return (
        <div className='py-10 lg:py-16 xl:py-20 2xl:py-120px maincontainer'>
            <div className='max-w-[880px] mx-auto w-full flex flex-col gap-10 md:gap-14'>
                <h2 className='text-2xl xl:text-[32px] font-bold text-b18 text-center'>Common FAQs with Appliance Repair</h2>
                <div className='flex flex-col gap-3 sm:gap-4 w-full'>
                    {faqs.map((faq, index) => (
                        <FaqAccordion key={index} activeBg="!bg-b3" activeText="!text-white" title={faq.title} parent='gap-3 bg-[#F8FBFB] [&>div>h6]:maxmd:text-sm p-4 md:px-8 md:py-6 rounded-xl border-none text-b18 h-auto' icon='text-xl text-black' textStyle='font-bold text-md text-b18' child='[&>p]:text-sm text-b18 font-normal' answer={faq.answer} />
                    ))}
                </div>
                <p className='text-b18 xs:leading-8 text-base xs:text-xl'>
                    There are lots of appliance repairs to avoid and lots of appliance repairs that are worth it vs replacing the appliance. Knowing this difference usually comes from an honest appliance repairman. That's why we recommend the good ones above! Hope this helps!
                </p>
            </div>
        </div>
    )
}

export default Faqs