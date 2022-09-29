import PropType from 'prop-types';
export const PopupStatus = ({ title }) => {
  return (
    <span className="absolute -top-10 hidden px-2 group-hover:block caption text-white font-bold bg-gray-600 rounded-sm p-1 bottomArrow">
      {title && title}
    </span>
  );
};

PopupStatus.propTypes = {
  title: PropType.string,
};
