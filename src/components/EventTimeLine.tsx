interface EventTimeLineType {
  event: String
};

const EventTimeLine:React.FC<EventTimeLineType> = ({ event }) => {
  return (
    <>
      <div className="pb-5 w-full border-l-2 border-gray-500 pl-8 relative before:absolute before:w-4 before:h-4 before:rounded-full before:-left-[9px] before:top-[10px] before:bg-gray-500 group">
        <p
          className="marker shadow bg-white rounded p-2 relative before:absolute
        before:w-5 before:h-5 before:bg-white before:-left-2 before:rotate-45 before:z-0 transition-transform cursor-pointer">
          <span className="relative z-10 text-[#242E4C]">{ event }</span>
        </p>
      </div>
    </>
  );
};

export default EventTimeLine;