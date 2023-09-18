import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import FaqAccordion from '../FaqAccordion'
import { getFaqTab, getFaqs } from '../../api/admin'
import MobileFaqs from './MobileFaqs';

const Faqs = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
    const [faqTabs, setFaqTabs] = useState([])
    const [faqs, setFaqs] = useState([])
    const [slug, setSlug] = useState('')
    const [activeTab, setActiveTab] = useState('');


    const handleTabClick = (tabId, device) => {
        if (tabId === activeTab) {
            if (device === 'mobile') {
                setActiveTab(null);
            }
        } else {
            setActiveTab(tabId);
        }
    };

    useEffect(() => {
        const GetFaqTabs = async () => {
            const res = await getFaqTab();
            console.log(res)
            if (res.status === 200) {
                setFaqTabs(res.data.faqTabs)
                setActiveTab(res.data.faqTabs[0]._id)
                setSlug(res.data.faqTabs[0].slug)
            } else {
                console.log(res)
            }
        }
        GetFaqTabs()
    }, [])

    useEffect(() => {
        const GetFaqs = async () => {
            try {
                const res = await getFaqs({ slug: slug });
                if (res.status === 200) {
                    setFaqs(res.data.faqs)
                }
            } catch (error) {
                setFaqs([])
                console.log(error)
            }
        }
        GetFaqs()
    }, [slug])

    // Mobile and Desktop Design
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 992);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className='py-12 lg:py-16 xl:py-20 maincontainer flex maxlg:flex-col gap-6 lg:gap-7 xl:gap-10'>
                {isDesktop ?
                    <>
                        <div className="tab-buttons maxlg:order-2 lg:w-[50%] flex flex-col gap-2">
                            {faqTabs.map((tab) => (
                                <button key={tab._id} className={`p-5 xl:p-6 xl:text-lg font-semibold flex justify-between items-center text-left border border-[rgba(0,0,0,0.15)] rounded-2xl ${activeTab === tab._id ? 'active text-white bg-b7' : 'text-b23'}`}
                                    onClick={() => { handleTabClick(tab._id); setSlug(tab.slug) }}>
                                    <span>{tab.title}</span>
                                    {activeTab === tab._id ? <FiChevronRight /> : ''}
                                </button>))}
                        </div>
                        <div className="tab-content w-full">
                            <div className='flex flex-col gap-3 sm:gap-4'>
                                {faqs.length > 0 ? faqs.map((faq) => (
                                    <FaqAccordion key={faq._id} title={faq.question} parent='gap-3 bg-[#F8FBFB] [&>div>h6]:maxmd:text-sm text-white p-4 md:px-8 md:py-6 rounded-xl border-none text-b18 h-auto' icon='text-xl text-black' textStyle='font-bold text-md text-b18' child='[&>p]:text-sm text-b18 font-normal' answer={faq.answer} />
                                )) : <div className='text-center' >No FAQ's Found!</div>}
                            </div>
                        </div>
                    </>
                    :
                    <>
                        {faqTabs.map((tab, index) => (
                            <MobileFaqs key={index} title={tab.title} tabfaqs={faqs} activeClass={tab._id === activeTab ? true : false} isOpen={tab._id === activeTab} onClick={() => { handleTabClick(tab._id, 'mobile'); setSlug(tab.slug) }} />
                        ))}
                    </>
                }
            </div>
        </>
    )
}

export default Faqs