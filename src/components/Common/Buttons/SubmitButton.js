import PropType from 'prop-types';
export const SubmitButton = ({ title }) => {
  return (
    <div className="flex rounded-sm justify-center items-center cursor-pointer w-full">
      <div className="w-full rounded-sm body-2 text-center bg-white px-4 py-1  text-black caption border-[#013d14] border-[1px]">
        {title}
      </div>
    </div>
  );
};

SubmitButton.propTypes = {
  title: PropType.string,
};
