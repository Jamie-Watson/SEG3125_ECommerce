function SurveyJumbotron({ id }) {
  return (
    <div className="p-3">
        <div
      id={id}
      className="position-relative d-flex align-items-center justify-content-center whiteText surveyJumbotron"
    >
      <div className="text-center position-relative p-4" style={{ zIndex: 2 }}>
        <h1 className="display-3 fw-bold mb-3 darkBlueText">
          Help us help you
        </h1>
      </div>
    </div>
    </div>
  );
}

export default SurveyJumbotron;