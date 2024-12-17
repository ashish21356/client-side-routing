import { useRouteError } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Error = () => {
  const err = useRouteError();
  console.error(err); 

  return (
    <div className="container text-center mt-5">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Something went wrong!</h4>
        <p>
          <strong>Status:</strong> {err.status}
        </p>
        <p>
          <strong>Status Text:</strong> {err.statusText}
        </p>
        <p>
          <strong>Message:</strong> {err.error?.message || 'An unknown error occurred'}
        </p>
        <hr />
        <p className="mb-0">
          Please try again later.
        </p>
      </div>
    </div>
  );
};

export default Error;
