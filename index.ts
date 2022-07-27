import fetchCEP from "./src/services/viacep";

async function main() {
  try {
    const response = await fetchCEP();
    console.log(response.data);
  } catch (err) {
    // TODO: throw specific error
    console.log("[ERRO] ", err);
  }
}

main();
