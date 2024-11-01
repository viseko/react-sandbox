import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

export default function useRedirect(condition, path, replace = true) {
  const navigate = useNavigate();

  useEffect(() => {
    if (condition) {
      navigate(path, {replace});
    }
  }, [navigate, condition, path, replace]);
}