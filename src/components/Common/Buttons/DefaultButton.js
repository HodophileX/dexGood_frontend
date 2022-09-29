import PropType from 'prop-types';
export const DefaultButton = ({ title, backgroundColor }) => {
  return (
    <div className="flex rounded-sm justify-center  items-center cursor-pointer w-full">
      <div
        className={`w-full rounded-sm body-2 text-center ${
          backgroundColor ? backgroundColor : 'bg-black'
        } px-4 py-2  text-white body-2 border-[#000000] border-[1px]`}
      >
        {title}
      </div>
    </div>
  );
};

DefaultButton.propTypes = {
  title: PropType.string,
  backgroundColor: PropType.string,
};
