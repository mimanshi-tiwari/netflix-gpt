const ErrorMessage = ({ error }) =>
  error ? <p className="text-sm text-red-600 font-semibold">{error}</p> : null;

export default ErrorMessage;
