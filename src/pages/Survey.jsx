import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Send, CheckCircle } from 'lucide-react';
import SurveyJumbotron from '../components/SurveyJumbotron';

function Survey() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comments, setComments] = useState('');
  const [experience, setExperience] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleRatingClick = (value) => {
    setRating(value);
    if (errors.rating) {
      setErrors(prev => ({ ...prev, rating: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (rating === 0) {
      newErrors.rating = 'Please provide a rating';
    }
    if (!comments.trim()) {
      newErrors.comments = 'Please share your comments';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitted(true);
  };

  const handleCommentChange = (value) => {
    setComments(value);
    if (errors.comments) {
      setErrors(prev => ({ ...prev, comments: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header text-center orderSummary">
                <h3 className="mb-0">
                  <CheckCircle className="me-2" size={24} />
                  Thank You!
                </h3>
              </div>
              <div className="card-body text-center">
                <p className="darkBlueText mb-4">
                  Your feedback has been submitted successfully. We appreciate you taking the time to share your experience with us!
                </p>
                <div className="d-grid gap-2">
                  <button 
                    className="btn searchAddToCartButton btn-lg"
                    onClick={() => navigate('/')}
                  >
                    Back to Home
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid p-3">
      <SurveyJumbotron id="surveyJumbotron" />
      <div className="row justify-content-center">
        <div className="col-lg-12 px-4">
          <div className="card">
            <div className="card-header itemTotalBox">
              <h4 className="mb-0 infoText">
                How Did We Do?
              </h4>
            </div>
            <div className="card-body">
              <p className="darkBlueText mb-4">
                We'd love to hear about your experience with our furniture store. Your feedback helps us improve and serve you better!
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label darkBlueText">
                    <strong>Overall Rating *</strong>
                  </label>
                  <div className="d-flex align-items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={32}
                        className={`me-1 cursor-pointer ${
                          star <= (hoverRating || rating) 
                            ? 'infoText' 
                            : 'text-muted'
                        }`}
                        fill={star <= (hoverRating || rating) ? 'currentColor' : 'none'}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => handleRatingClick(star)}
                        style={{ cursor: 'pointer' }}
                      />
                    ))}
                    <span className="ms-2 darkBlueText">
                      {rating > 0 && (
                        <>
                          {rating} star{rating !== 1 ? 's' : ''} - 
                          {rating === 1 && ' Poor'}
                          {rating === 2 && ' Fair'}
                          {rating === 3 && ' Good'}
                          {rating === 4 && ' Very Good'}
                          {rating === 5 && ' Excellent'}
                        </>
                      )}
                    </span>
                  </div>
                  {errors.rating && (
                    <div className="text-danger small">{errors.rating}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label darkBlueText">
                    <strong>What best describes your experience?</strong>
                  </label>
                  <select
                    className="form-select"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="browsing">Just browsing the website</option>
                    <option value="searching">Searching for specific items</option>
                    <option value="purchasing">Made a purchase</option>
                    <option value="comparing">Comparing products</option>
                    <option value="return_visit">Returning customer</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label darkBlueText">
                    <strong>Tell us about your experience *</strong>
                  </label>
                  <textarea
                    className={`form-control ${errors.comments ? 'is-invalid' : ''}`}
                    rows="5"
                    value={comments}
                    onChange={(e) => handleCommentChange(e.target.value)}
                    placeholder="Share your thoughts about our website, products, shopping experience, or any suggestions for improvement..."
                    maxLength="1000"
                  />
                  <div className="d-flex justify-content-between mt-1">
                    <div>
                      {errors.comments && (
                        <div className="text-danger small">{errors.comments}</div>
                      )}
                    </div>
                    <small className="text-muted">
                      {comments.length}/1000 characters
                    </small>
                  </div>
                </div>

                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn searchAddToCartButton btn-lg"
                  >
                    <Send className="me-2" size={16} />
                    Submit Feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey;