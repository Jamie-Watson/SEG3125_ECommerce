function SearchJumbotron({ id }) {
  return (
    <div className="p-3">
        <div
      id={id}
      className="position-relative d-flex align-items-center justify-content-center whiteText searchJumbotron"
    >
      <div className="text-center position-relative p-4" style={{ zIndex: 2 }}>
        <h1 className="display-3 fw-bold mb-3 darkBlueText">
          Explore our furniture collection
        </h1>
      </div>
    </div>
    </div>
  );
}

export default SearchJumbotron;