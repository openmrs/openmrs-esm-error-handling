import { showToast } from "@openmrs/esm-styleguide";
import "./set-public-path";

export function handleApiError() {
  return incomingResponseErr => {
    setTimeout(() => {
      throw incomingResponseErr;
    });
  };
}

window.onerror = function() {
  showToast({ description: "Oops! An unexpected error occurred." });

  return false;
};
