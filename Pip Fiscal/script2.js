document.addEventListener("DOMContentLoaded", () => {
    const nomeEmpresa = document.getElementById("NomeDaEmpresa");
  
    const nomeArquivo = localStorage.getItem("nomeArquivo");
  
    if (nomeArquivo !== null && nomeArquivo !== '') {
      nomeEmpresa.textContent = nomeArquivo;
    }
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const Exibir = document.getElementById("ErAqui");
    const conteudoArquivoErro = localStorage.getItem("conteudoArquivoErro");
  
    if (conteudoArquivoErro) {
      Exibir.textContent = conteudoArquivoErro;
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const conteudoArquivo = localStorage.getItem("conteudoArquivo");
    const errosEncontrados = localStorage.getItem("conteudoArquivoErro");
  
    if (conteudoArquivo && errosEncontrados) {
      const linhasArquivo = conteudoArquivo.split('\n');
      const linhasErro = errosEncontrados.split('\n');
  
      for (let i = 0; i < linhasErro.length; i++) {
        const linhaErro = linhasErro[i].trim();
  
        const padrao = /^(\d+)\s+Município do participante inválido \(\/\d+\)\. Campo (\d+)\. Registro PAR\./;
        if (padrao.test(linhaErro)) {
          const match = linhaErro.match(padrao);
          const numeroLinha = parseInt(match[1]);
          const campoAlterar = parseInt(match[2]);
  
          const linhaArquivo = linhasArquivo[numeroLinha - 1];
          if (linhaArquivo !== undefined) {
            const campos = linhaArquivo.split("|");
            campos[campoAlterar - 1] = "";
            const linhaFinal = campos.join("|");
  
            linhasArquivo[numeroLinha - 1] = linhaFinal;
          }
        }
      }
  
      const arquivoCorrigido = linhasArquivo.join('\n');
  
      const blob = new Blob([arquivoCorrigido], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
  
      const link = document.createElement("a");
      link.href = url;
      link.download = "FT237A01.FS";
      link.click();
    }
  });
  
  
  

  

  
  
  
  
  
  
  
  
  
  

  