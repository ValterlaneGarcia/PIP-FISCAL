document.addEventListener("DOMContentLoaded", () => {
  const bn5 = document.getElementById("bn5");
  const arquivoACorrigir = document.getElementById("ArquivoACorrigir");
  const ArquivoComErro = document.getElementById("ArquivoComErro");

  bn5.disabled = true;

  const valores = (arquivoACorrigir,ArquivoComErro);

  valores.addEventListener("change", () => {
    const verificador = valores.value;

    if (verificador !== null && verificador !== '') {
      bn5.disabled = false;
      
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          },
          customClass: {
            title: 'my-toast-title'
          }
        });
      
        Toast.fire({
          icon: 'success',
          title: 'Arquivo importado com sucesso'
        });
    } else {
      bn5.disabled = true;
    } 
  });

  bn5.addEventListener("click", () => {
    if (!bn5.disabled) {
      window.location.href = "Correcao.html";
    } else {
      Swal.fire({
        title: 'Não foi encontrado arquivos para corrigir',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
          title: 'my-toast-title'
        }
      })
      
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const arquivoACorrigir = document.getElementById("ArquivoACorrigir");

  arquivoACorrigir.addEventListener("change", () => {
    const file = arquivoACorrigir.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      const content = event.target.result;

      localStorage.setItem("nomeArquivo", file.name);
      localStorage.setItem("conteudoArquivo", content);
    };

    reader.readAsText(file);
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const ArquivoComErro = document.getElementById("ArquivoComErro");

  ArquivoComErro.addEventListener("change", () => {
    const file = ArquivoComErro.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      const content = event.target.result;

      localStorage.setItem("conteudoArquivoErro", content);
    };

    reader.readAsText(file);
  });
});



