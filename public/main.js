    document.addEventListener("DOMContentLoaded", function () {
        var form = document.getElementById("form");
        var loader = document.getElementById("loader");
        var submitBtn = document.getElementById("btn");

        form.addEventListener("submit", function (event) {
            // Impedir o envio padrão do formulário
           

            // Mostrar o loader
            loader.style.display = "block";

            // Desativar o botão de envio durante o processamento
            submitBtn.disabled = true;

            // Aqui você pode adicionar lógica para enviar o formulário para o servidor
            // ...

            // Simulando um atraso (substitua isso pela sua lógica de envio real)
            setTimeout(function () {
                // Esconder o loader
                loader.style.display = "none";

                // Ativar o botão de envio após o processamento
                submitBtn.disabled = false;

               
               
            }, 3000); 
        });
    });

