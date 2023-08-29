import PropTypes from "prop-types";

export default function Error({ message }) {
  return (
    <div className="bg-red-800 p-3 text-center uppercase text-white mb-5 font-bold rounded-lg">
      <p>{message}</p>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};
