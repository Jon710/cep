import axios, { AxiosResponse } from "axios";
import {
  validateLength,
  removeSpecialCharacters,
  getArgsFromCLI,
} from "../utils";

const viacep = axios.create({
  baseURL: "https://viacep.com.br",
});

export default async function fetchCEP(): Promise<any> {
  const cep = getArgsFromCLI();

  const cepWithoutSpecialChars = removeSpecialCharacters(cep);

  const isValidCEP = validateLength(cepWithoutSpecialChars);

  if (isValidCEP) {
    try {
      const response = await viacep.get(`/ws/${cep}/json`);
      return response;
    } catch (error) {
      console.log("Erro na requisição!", error);
    }
  } else {
    // TODO: throw specific error
    throw new Error("Erro de validação!");
  }
}
