// import { showToast } from '@openmrs/esm-styleguide'

export function handleApiError() {
  return incomingResponseErr => {
    setTimeout(() => {
      throw incomingResponseErr;
    });
  };
}

window.addEventListener("error", info => {
  // call "showToast()" or similar inside of openmrs-esm-styleguide
});
