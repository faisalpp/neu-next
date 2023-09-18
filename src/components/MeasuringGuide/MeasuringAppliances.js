import React from 'react'
import MeasuringCard from './MeasuringCard'

const MeasuringAppliances = () => {
    return (
        <div className='bg-b8'>
            <div className='flex flex-col gap-14 py-16 xl:py-20 2xl:py-120px maincontainer'>
                <h2 className='text-2xl xl:text-[32px] font-bold text-b18 text-center'>
                    Measuring Washers and Dryers
                </h2>
                <div className='grid lg:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-6'>
                        <MeasuringCard bgcolor="bg-white" title="Measuring Available Depth, Width and Height For Your Refrigerator" description={[`When measuring your available space make sure to take measurements left to right (Width), front to back (Depth) and top to bottom (Height). You will want to consider any trim pieces or anything intruding inside of that space your appliance will go.`]} />

                        <MeasuringCard bgcolor="bg-white" title="Refrigerator Width With Doors Open" description={[`Vented dryers will require a dryer vent tube to be installed to your ventilation duct. We recommend reserving 4 - 6 inches in your depth measurements to accommodate for this. Restricting, bending, or lengthening the ventilation can increase the drying time of a cycle drastically and is a fire hazard. We stock one type of dryer ventilation: standard 5 foot long by 4' diameter ventilation tube that meets most installation requirements. It is not commonly recommended to exceed 5 feet of dryer ventilation. We do not install or sell any dryer ventilations that was not purchased from us. Feel free to have our delivery team look while on site for some advice if needed.`]} />
                    </div>
                    <div className='flex flex-col gap-6'>
                        <MeasuringCard bgcolor="bg-white" title="Washing Machine Hoses" description={[`Washing machines typically have two water fill hoses (hot and cold) and a drain hose. We recommend reserving 2 - 4 inches in depth to account for these. Most washing machine drain pumps are only rated for the drain hose length that comes with the washer. We do not recommend lengthening the drain hose as this can impede the function of the drain, cause clogs or cause damage to the appliance.
                Our appliances include measurements on the listing. Feel free to use these as reference!`]} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeasuringAppliances