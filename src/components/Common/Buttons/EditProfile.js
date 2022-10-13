import PropType from 'prop-types';
export const EditProfile = ({ title, action }) => {
  return (
    <div
      className="flex rounded-sm justify-center items-center cursor-pointer w-full"
      onClick={action}
    >
      <div className="  w-full rounded-sm body-2 text-center bg-white text-black px-4 py-2   caption border-[#013d14] border-[1px]">
        {title}
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  title: PropType.string,
  action: PropType.func,
};
