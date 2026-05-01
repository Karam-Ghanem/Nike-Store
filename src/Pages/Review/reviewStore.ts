import { create } from "zustand";
import type { ReviewType } from "./Review";
import ReviewList from "./ReviewList";
import type { CheckBoxItem, RadioItem } from "./ReviewWithSelect";

interface ReviewStore {
  reviews: ReviewType[];

  checkEvalutes: CheckBoxItem[][];
  radioEvalutes: RadioItem[][];

  addCheckBoxEvalute: (checkBoxEv: CheckBoxItem[]) => void;
  addRadioEvalute: (radioEv: RadioItem[]) => void;

  AddReview: (rev: ReviewType) => void;
}

const useReviewStore = create<ReviewStore>((set) => ({
  reviews: ReviewList,

  checkEvalutes: [],
  radioEvalutes: [],

  AddReview: (rev) =>
    set((store) => ({
      reviews: [...store.reviews, rev],
    })),

  addCheckBoxEvalute: (checkBoxEv) =>
    set((store) => ({
      checkEvalutes: [...store.checkEvalutes, checkBoxEv],
    })),

  addRadioEvalute: (radioEv) =>
    set((store) => ({
      radioEvalutes: [...store.radioEvalutes, radioEv],
    })),
}));

export default useReviewStore;
