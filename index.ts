import fetchCEP from "./src/services/viacep";

async function main() {
  try {
    const response = await fetchCEP("16400-515");
    console.log(response);
  } catch (err) {
    // TODO: throw specific error
    console.log("[ERRO] ", err);
  }
}

main();
