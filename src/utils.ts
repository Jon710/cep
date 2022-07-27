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

function getArgsFromCLI() {
  let args = process.argv;
  args = args.slice(2);
  if (args.length === 0) {
    throw new Error("É obrigatório digitar o CEP!");
  }

  return args[0];
}

export { validateLength, removeSpecialCharacters, getArgsFromCLI };
