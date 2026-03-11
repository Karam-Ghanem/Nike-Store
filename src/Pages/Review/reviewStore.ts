import { create } from "zustand";
import type { ReviewType } from "./Review";
import ReviewList from "./ReviewList";

interface ReviewStore{
    reviews:ReviewType[],
    AddReview:(rev:ReviewType)=>void,
}

const useReviewStore = create<ReviewStore>(set=>({
    reviews:ReviewList,
    AddReview:(rev)=>set((store)=>({
        reviews:[...store.reviews,rev]
    }))

}))

export default useReviewStore;