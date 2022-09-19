import PropType from 'prop-types';
export const DefaultButton = ({ title }) => {
  return (
    <div className="flex rounded-sm justify-center items-center cursor-pointer">
      <div className="rounded-sm body-2 text-center bg-[#055d20] px-4 py-1 hover:bg-[#013d14] text-white font-bold border-[#013d14] border-[1px]">
        {title}
      </div>
    </div>
  );
};

DefaultButton.propTypes = {
  title: PropType.string,
};
