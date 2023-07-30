"use client"

import { motion } from "framer-motion";
import { useState } from "react";

interface EventTimeLineType {
  event: String
}

const EventTimeLine:React.FC<EventTimeLineType> = ({ event }) => {
  return (
    <>
      <div className="pb-5 w-full border-l-2 border-gray-500 pl-8 relative before:absolute before:w-4 before:h-4 before:rounded-full before:-left-[9px] before:top-[10px] before:bg-gray-500 group">
        <motion.p
          //drag
          //dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          initial={{ y: 300 }}
          whileInView={{ y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true, amount: 0.8 }}
          className="marker shadow bg-white rounded p-2 relative before:absolute
        before:w-5 before:h-5 before:bg-white before:-left-2 before:rotate-45 before:z-0 transition-transform cursor-pointer">
          <span className="relative z-10 dark:text-[#242E4C]">{ event }</span>
        </motion.p>
      </div>
    </>
  )
}

export default EventTimeLine;