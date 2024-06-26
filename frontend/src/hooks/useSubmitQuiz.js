import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { submitQuiz as submitQuizApi } from "../services/quiz";
import { useNavigate } from "react-router-dom";

export default function useSubmitQuiz() {
  
  const { mutate: submitQuiz, isLoading } = useMutation({
    mutationFn: submitQuizApi,
    onSuccess: () => {
      toast.success("Quiz Submitted Successfully");
    },
  });

  return { submitQuiz, isLoading };
}
