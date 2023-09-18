import React from 'react'
import { Link } from 'react-router-dom'
import { BiLinkExternal, BiPlayCircle } from 'react-icons/bi'
import SolutionSvg from '../../svgs/SolutionSvg'

const ApplianceParts = () => {
    return (
        <div className='bg-[rgba(248,211,87,0.08)] px-3 maxcosm:py-5 xs:p-10 2xl:p-7 3xl:p-10 rounded-3xl flex flex-col gap-6'>
            <a href='https://www.neuapplianceparts.com/' target='_new'>
                <img src="/nueappliancesparts.webp" alt="nueappliancesparts" className='h-16' />
            </a>
            <div className='flex flex-col gap-3 text-b18'>
                <h3 className='font-bold text-2xl'>Neu Appliance Parts</h3>
                <p className='leading-6'>
                    Replacing an appliance part can be difficult and expensive. Correctly identifying which part you need and limited applianceion rates make finding Affordable In-Stock parts nearly impossible.
                </p>
            </div>
            <div className='flex flex-col justify-between h-full'>
                <div className='text-b18 flex flex-col gap-3'>
                    <p className='font-bold'>
                        Neu Appliance Parts provides the solution you are looking for:
                    </p>
                    <div className='text-b18 flex flex-col gap-3'>
                        <p>
                            Our Website's Tools For Success include:
                        </p>
                        <ul className='flex flex-col gap-2'>
                            {ToolLists.map((item, index) => (
                                <li key={index} className='flex items-start gap-3 py-[15px]'>
                                    <div className='w-10 h-10'>
                                        <SolutionSvg />
                                    </div>
                                    <p className='text-sm font-medium'>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='inline-flex flex-col sm:flex-row gap-2 pt-6'>
                    <Link to="http://neuapplianceparts.com" target='_blank' className='bg-b4 px-4 py-3 rounded-lg text-xs text-b16 flex justify-center gap-1 items-center font-medium'><span>Go to Neu Appliance Parts</span><BiLinkExternal className="text-b18 text-sm" /></Link>
                    <Link to="https://youtu.be/GliOcJH2pSM" target='_blank' className='border border-[#071822] px-4 py-3 rounded-lg text-xs text-[#071822] flex justify-center gap-1 items-center font-medium whitespace-nowrap'><BiPlayCircle className="text-[#071822] text-sm" /><span>Watch Video</span></Link>
                </div>
            </div>
        </div>
    )
}

export default ApplianceParts

const ToolLists = ['Revolutionary Appliance Parts store specializing in providing deeply discounted In-Stock appliance parts.', 'Specializing in Open Box and Like/New Appliance parts to save our customers money, our appliance processing center uninstalls tens of thousands of Like New appliance parts from new scratch and dent appliances every year.', 'Offering the public and appliance repair professionals an affordable solution for otherwise hard to source or expensive appliance parts.']