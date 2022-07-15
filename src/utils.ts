const CEP_SIZE = 8;

function validateLength(rawCEP: string): Boolean {
  if (rawCEP.length <= CEP_SIZE) {
    return true;
  } else {
    return false;
  }
}

function removeSpecialCharacters(rawCEP: string): string {
  return rawCEP.replace(/\D+/g, "");
}

export { validateLength, removeSpecialCharacters };
