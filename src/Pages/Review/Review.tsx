import MainHead from "../../components/PublicCompontents/MainHead";
// import ReviewWithStars from "./ReviewWithStars";
import TextReview from "./TextReview";
import TextReviewForm from "./TextReviewForm";
import ReviewWithSelect from "./ReviewWithSelect";
export interface ReviewType {
  name: string;
  img: string | undefined;
  description: string;
}

const Review = () => {

  return (
    <>
      <MainHead head="CUSTOMER'S REVIEW" />

      <ReviewWithSelect/>

      {/* <ReviewWithStars /> */}

      <TextReviewForm />

      <TextReview  />
    </>
  );
};

export default Review;



