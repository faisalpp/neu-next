import React from 'react'
import MeasuringCard from './MeasuringCard'

const MeasuringRefrigrator = () => {
    return (
        <div className='flex flex-col gap-5 md:gap-14 pb-16 xl:pb-20 2xl:pb-120px pt-10 maincontainer'>
            <h2 className='text-2xl xl:text-[32px] font-bold text-b18 text-center'>
                Measuring Refrigerators
            </h2>
            <div className='grid lg:grid-cols-2 gap-6'>
                <div className='flex flex-col gap-6'>
                    <MeasuringCard bgcolor="bg-b21" title="Measuring Available Depth, Width and Height For Your Refrigerator" description={[`When measuring your available space make sure to take measurements left to right (Width), front to back (Depth) and top to bottom (Height). You will want to consider any trim pieces or anything intruding inside of the space where the appliance will be installed.`]} />

                    <MeasuringCard bgcolor="bg-b21" title="Refrigerator Width With Doors Open" description={[`An important measurement commonly overlooked on refrigerators is the added additional width from the door swing. When you open the door of your new fridge, the door and hinge might "pivot in place" or "swing out" as it is opened. This may create a larger width requirement.`, `Consider, if the door of the refrigerator will protrude past your cabinets or sits flush or behind with the cabinets. If the refrigerator door sits flush or behind the cabinets, it may require a smaller width refrigerator to fully open the doors properly.`, `If there is a wall on one or both sides of the refrigerator this may also limit the door swing and requires a smaller width refrigerator to access your refrigerator contents. Many refrigerators doors need to be open up to 120 degrees or more to open bins or pullout crisper shelving. We see this measurement play an important role on counter depth refrigerators. If the refrigerator door is behind or flush with the cabinetry then, it will limit the available width to open the doors depending on the door swing. Sometimes this results in the need to pull the refrigerator out past the countertop to open the doors and may remove the desired appearance of having a counter depth refrigerator.`]} />
                </div>
                <div className='flex flex-col gap-6'>
                    <MeasuringCard bgcolor="bg-b21" title="Refrigerator Door Swing Depth" description={[`The depth of the refrigerator’s door swing is also an important measurement. If you have an island or narrow walkway in front of your refrigerator take these into account. Measure the depth from the back wall of the fridge to the counter (Or island) on the opposite side. You can match this measurement by measuring the back of the refrigerator to the end of the door of the refrigerator with the door open at the deepest point (roughly 90 degrees)`]} />

                    <MeasuringCard bgcolor="bg-b21" title="Don't Forget Ventilation" description={[`Refrigerators need to ventilate or expel heat to function properly. If a refrigerator is boxed in with restricted ventilation this may affect its ability to cool or can harm the appliance. A built-In style refrigerator or freezer are mechanically designed to ventilate and accommodate these tight installations.`]} note="Make sure to leave at least 1 inch of space on the back and top of a refrigerator for it to function as designed." />

                    <MeasuringCard bgcolor="bg-b21" title="Delivery Path" description={[`Measuring the delivery path for your refrigerator is crucial. Measure all pathways from the entry door to the installation location to ensure the appliance will fit.Some (not all) refrigerators have doors or handles that can be removed to get through a door way or a narrow hallway. Make sure the delivery path is clear from obstacles. Ask a Neu Appliances Associate for more info!`]} />

                </div>
            </div>
        </div>
    )
}

export default MeasuringRefrigrator