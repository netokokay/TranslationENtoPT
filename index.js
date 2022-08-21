const axios = require("axios");

async function iniciar() {
  try {
    const url = "https://api.adviceslip.com/advice";
    const resposta = await axios.get(url);
    const conselho = resposta.data.slip.advice;
    console.log(`Conselho em Inglês: ${conselho}`);
    const urlTraducao = `https://api.mymemory.translated.net/get?q=${conselho}&langpair=en-GB|pt-BR`;
    const respostaTrad = await axios.get(urlTraducao);
    const traduzido = respostaTrad.data.responseData.translatedText;
    console.log(`Conselho em Português: ${traduzido}`);
  } catch (error) {
    console.log(error)
    console.log("Erro ao buscar informações");
  }
}


iniciar();


