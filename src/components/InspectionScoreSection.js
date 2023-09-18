import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import FaqAccordion from './FaqAccordion';


const InspectionScoreSection = () => {
  return (
    <>
      <div id='inspections' className='bg-b8'>
        <div className='flex items-center flex-col py-10 lg:py-14 xl:py-20 maincontainer' >

          <div className='flex flex-col w-full' >
            <div className='flex flex-col gap-5 2xl:gap-10 w-full items-center' >
              <h4 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center' >Our 100-Point Quality Inspections Score</h4>
              <p className='text-center w-full font-normal xl:text-xl 2xl:text-2xl' >Quality matters. That’s why every product we sell is run through our extensive 100-point checklist. <br /> Every product you see meets perfect scores for Cosmetic Rating, quality, performance, and more</p>

              {/* CArd */}
              <div className='flex flex-col rounded-lg px-5 py-5 bg-white w-full md:w-2/3' >
                <h4 className='text-xl font-semibold' >Our Quality Control</h4>
                {/* Contaienr */}
                <div className='flex flex-col space-y-4 mt-4' >
                  {/* Inspection card long */}
                  <div className='flex items-center px-5 py-4 rounded-md bg-[rgba(61,139,187,0.08)]' >
                    <div className='flex items-center justify-between w-full text-sm font-bold' ><h4 className='font-bold' >Mechanical Test</h4><div className='flex items-center justify-end' ><div className='flex items-center space-x-3' ><AiOutlineCheckCircle className='text-b12 text-xl' /><h6 className='font-medium font-sm' >Passed</h6></div></div></div>
                  </div>
                  {/* Inspection card long */}
                  <div className='flex items-center px-5 py-4 rounded-md bg-[rgba(61,139,187,0.08)]' >
                    <div className='flex items-center justify-between w-full text-sm font-bold' ><h4 className='font-bold' >Cosmetic Inspection</h4><div className='flex items-center justify-end' ><div className='flex items-center space-x-3' ><AiOutlineCheckCircle className='text-b12 text-xl' /><h6 className='font-medium font-sm' >Passed</h6></div></div></div>
                  </div>
                  {/* Inspection card long */}
                  <div className='flex items-center px-5 py-4 rounded-md bg-[rgba(61,139,187,0.08)]' >
                    <div className='flex items-center justify-between w-full text-sm font-bold' ><h4 className='font-bold' >Mechanical Inspection</h4><div className='flex items-center justify-end' ><div className='flex items-center space-x-3' ><AiOutlineCheckCircle className='text-b12 text-xl' /><h6 className='font-medium font-sm' >Passed</h6></div></div></div>
                  </div>
                  <div className='flex items-center px-5 py-4 rounded-md bg-[rgba(61,139,187,0.08)]' >
                    <div className='flex items-center justify-between w-full text-sm font-bold' ><h4 className='font-bold' >Final QC Check</h4><div className='flex items-center justify-end' ><div className='flex items-center space-x-3' ><AiOutlineCheckCircle className='text-b12 text-xl' /><h6 className='font-medium font-sm' >Passed</h6></div></div></div>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Inspection Guide */}
          <FaqAccordion title="See our Inspection Checklists" parent='w-full md:w-2/3 mt-2 bg-b3 text-white bg- p-6 rounded-xl h-auto' icon='text-xl' textStyle='font-medium text-sm' child='[&>p]:text-sm mt-6' answer={<ul className='flex flex-col gap-2'><li className='flex gap-3 items-center'><img src="/tick.webp" className='w-4 h-4' alt="tick" /><p>Lorem ipsum dolor sit amet</p></li><li className='flex gap-3 items-center'><img src="/tick.webp" className='w-4 h-4' alt="tick" /><p>Lorem ipsum dolor sit amet</p></li><li className='flex gap-3 items-center'><img src="/tick.webp" className='w-4 h-4' alt="tick" /><p>Lorem ipsum dolor sit amet</p></li><li className='flex gap-3 items-center'><img src="/tick.webp" className='w-4 h-4' alt="tick" /><p>Lorem ipsum dolor sit amet</p></li></ul>} isExpand={true} />

        </div>
      </div>
    </>
  )
}

export default InspectionScoreSection