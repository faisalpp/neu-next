import React from 'react'
import { Link } from 'react-router-dom'
import CdSvg from '../../svgs/CdSvg'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const GetScoop = () => {
    return (
        <div className='py-10 lg:py-16 xl:py-20 2xl:py-120px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px'>
            <div className='w-full max-w-[960px] mx-auto'>
                <Link to="/helpful-appliances-tips" className='flex lg:hidden mb-10 items-center gap-2 text-sm text-b3 font-semibold'><AiOutlineArrowLeft />Back</Link>
                <div className='mb-8 md:mb-10 inline-flex items-center maxmd:w-16 maxmd:h-16 justify-center p-2 rounded-2xl bg-b3'>
                    <CdSvg />
                </div>
                <div className='flex flex-col gap-10 md:gap-16 xl:gap-20 w-full'>
                    <h1 className='font-bold text-b18 coxs:leading-[48px] text-28px coxs:text-32px sm:text-4xl lg:text-40px'>
                        Tips for Refrigerators & Freezers
                    </h1>
                    <div className='flex flex-col gap-4 sm:gap-6 w-full'>
                        <h2 className='text-2xl font-bold'>1. Wait 4 Hours To Plug In Your Refrigerator After Delivery</h2>
                        <p className='leading-7 sm:leading-8 tracking-[-0.32px]'>
                            Refrigerators have oil and refrigerant in the same sealed system. When a refrigerator is moved sometimes the oil in the compressor can work its way up inside the lines. Leaving your refrigerator stationary for 4 hours gives the oil time to return back to the compressor. This is also why you should never lay a refrigerator down or on its side.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 sm:gap-6 w-full'>
                        <h2 className='text-2xl font-bold'>2. Double Check The Refrigerator Ice Maker Is Turned On</h2>
                        <p className='leading-7 sm:leading-8 tracking-[-0.32px]'>
                            On most refrigerators there is a switch located on the ice maker or on a display to turn the ice maker on / off. If you choose not to use the ice maker turn it off here even if the water is turned off. If you want to use the ice maker make sure this switch stays on. Some refrigerators have an ice level bar that switches the ice maker off, move this to the off position if you do not want to use your ice maker.
                        </p>
                    </div>
                    <div>
                        <img src="refrigrator&freeezer.webp" className='h-auto sm:h-[502.857px] w-full' alt="" />
                    </div>
                    <div className='flex flex-col gap-4 sm:gap-6 w-full'>
                        <h2 className='text-2xl font-bold'>3. Double Check The Refrigerator Ice Maker Is Turned On</h2>
                        <div className='[&>*]:leading-7 [&>*]:sm:leading-8 [&>*]:tracking-[-0.32px]'>
                            <p className='mb-5'>
                                Single Evaporator Refrigerators:
                            </p>
                            <p>
                                Always, Always, Always leave your refrigerator on “Factory Settings”. A majority of refrigerators display near the controls what the “Factory Settings” is. If your refrigerator does not, set right the temperature to the middle setting if it is a analog dial. If your refrigerator is digital set to 0 degrees in the freezer and 32 in the refrigerator. With a single evaporator refrigerator, the evaporator coil that produces the cold air is generated in the freezer and sent to the refrigerator with a series of fans, vents or damper doors (openings). Changing the settings will adjust the cooling cycle duration and the ventilation openings. If your refrigerator and freezer are set too far apart (one low and one high), when the different temperature airs meet in the air passage way they will form condensation. That condensation will freeze and build up ice and eventually block air from pass through. Avoid this by setting your appliance to the factory settings.
                            </p>
                            <p className='mt-16 mb-5'>
                                Dual Evaporator Refrigerators:
                            </p>
                            <p>
                                You have a little more leniency on varying settings on the dual evaporator refrigerators. There typically aren't shared air passageways that are shared between the freezer or fridge to freeze over. However your refrigerator is designed to perform at the factory settings.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 sm:gap-6 w-full'>
                        <h2 className='text-2xl font-bold'>4. Clean The Condenser Coils</h2>
                        <p className='leading-7 sm:leading-8 tracking-[-0.32px]'>
                            Condenser coils are the coils on the back or bottom of the refrigerator outside of the refrigerator. (Evaporator coils are located inside.) Refrigerators need clean condenser coils to expel heat properly. When these coils get dusty or dirty it makes it difficult for your refrigerator to cool properly. It will have to work harder for the same result or sometimes it can hinder the cooling ability of the fridge completely. Cleaning these coils yearly will help keep your refrigerator cooling properly. In most refrigerators the condenser coils are located towards the bottom on the back of the refrigerator. Unplug your refrigerator and simply vacuum or brush off the dirt or dust gently.
                        </p>
                    </div>
                    <div>
                        <img src="cleanthecondenser.webp" className='h-auto sm:h-[502.857px] w-full' alt="" />
                    </div>
                    <div className='flex flex-col gap-4 sm:gap-6 w-full'>
                        <h2 className='text-2xl font-bold'>5. Purge Your Water System Before Use</h2>
                        <p className='leading-7 sm:leading-8 tracking-[-0.32px]'>
                            Dump the first batch of ice and dump 1 gallon of water through the refrigerator water dispenser before regular use. This will clean out your water lines.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 sm:gap-6 w-full'>
                        <h2 className='text-2xl font-bold'>6. We Recommend Purchasing A New Water Filter</h2>
                        <p className='leading-7 sm:leading-8 tracking-[-0.32px]'>
                            Amazon is a great place to purchase water filters. Make sure to match the model number of your refrigerator to the water filter as filters vary between different models. If you want to purchase locally try our friends at <Link to="" className='font-bold underline'>Marcone Appliance Parts</Link> on Kramer Lane.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 sm:gap-6 w-full'>
                        <h2 className='text-2xl font-bold'>7. Never Plug A Refrigerator Or Freezer Into A GFI Plug</h2>
                        <p className='leading-7 sm:leading-8 tracking-[-0.32px]'>
                            There is nothing worse than coming home to a warm fridge because of a tripped GFI outlet. GFI outlets work by monitoring the amount of current flowing from hot to neutral. If there is an imbalance, it trips the circuit. Many refrigerators can consume a small amount of electricity naturally which can cause these to trip. Never plug a freezer or a refrigerator into a GFI Outlet!
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 sm:gap-6 w-full'>
                        <h2 className='text-2xl font-bold'>8. Don’t Block Ventilation</h2>
                        <p className='leading-7 sm:leading-8 tracking-[-0.32px]'>
                            Inside of your Neu refrigerator there are ventilation pathways that let air travel between the refrigerator and freezer. Blocking these can hinder its ability to cool
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetScoop