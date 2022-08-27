import { useState } from "react";

export default function useToogle() {
    const [openCast, setOpenCast] = useState(false);
    const [openReviews, setOpenReviews] = useState(false);
    const [disabledCast, setDisabledOpenCast] = useState(false);
    const [disabledReviews, setDisabledOpenReviews] = useState(false);

    const toggleCast = () => {
      openCast === true
        ? setOpenCast(false) || setDisabledOpenReviews(false)
        : setOpenCast(true) || setDisabledOpenReviews(true);
      return;
    };

    const toggleReviews = () => {
      openReviews === true
        ? setOpenReviews(false) || setDisabledOpenCast(false)
        : setOpenReviews(true) || setDisabledOpenCast(true);

      return;
    };
   
   
   
   
   return { openCast,openReviews, disabledCast, disabledReviews, toggleCast, toggleReviews };
}