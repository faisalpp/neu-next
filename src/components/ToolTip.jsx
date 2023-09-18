'use client'

import React from 'react'
import { Tooltip, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const ToolTip = ({ color, title, moreUrl, dimension }) => {
  return (
    <Tooltip placement="top" className="bg-white shadow-xl z-[999]" content={
      <div className="w-80 px-2 py-3">
        {title ? <Typography color="black" className="text-xs text-t2 font-medium">{title}</Typography> : <Typography color="black" className="text-xs text-t2 font-medium">All 3 star items are tested and confirmed to operate like new. We grade our scratch and dent appliances based on their cosmetic appearance. These scores refer to how the appliance looks not how they function.</Typography>}
        {moreUrl ? <Typography color="black" className="text-xs text-b3 font-semibold">Learn More</Typography> : null}
      </div>
    }>
      <InformationCircleIcon
        strokeWidth={2}
        className={`${dimension || 'w-5 h-5'} cursor-pointer hover:text-b3 ${color || 'text-b3'}`}
      />
    </Tooltip>

  )
}

export default ToolTip