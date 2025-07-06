import { Link } from "react-router-dom";

function HomeJumbotron({ id }) {
  return (
    <div className="p-3">
        <div
      id={id}
      className="position-relative d-flex align-items-center justify-content-center whiteText homeJumbotron"
    >
      <div className="text-center position-relative p-4" style={{ zIndex: 2 }}>
        <h1 className="display-4 fw-bold mb-3">
          Your dream room is just a deal away
        </h1>
        <Link to="/search?sale=true" className="text-decoration-none">
          <h1
            className="display-6 mb-3 whiteText"
            style={{ cursor: "pointer" }}
          >
             Browse furniture deals now
          </h1>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default HomeJumbotron;