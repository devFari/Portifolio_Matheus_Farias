// Seleciona todos os <h2> com a classe "tituloRedirecionar"
document.querySelectorAll(".tituloRedirecionar").forEach(titulo => {
    titulo.addEventListener("click", function() {
        // Obtém a URL do atributo data-url
        const url = this.getAttribute("data-url");
        if (url) {
            window.location.href = url; // Redireciona para a URL especificada
        }
    });
});

document.body.addEventListener("click", async (e) => {  
    const elemento = e.target.closest(".tituloRedirecionar");  
    if (elemento) {  
        elemento.style.opacity = "0.5"; /* Feedback visual */  
        await new Promise(resolve => setTimeout(resolve, 300));  
        window.location.href = elemento.dataset.url;  
    }  
});  

window.onload = () => document.body.style.opacity = "1";

container.innerHTML += `  
  <div class="repo-card">  
      <h3>${repo.name}</h3>  
      <p>${repo.description || "Sem descrição"}</p>  
      <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>  
  </div>  
`;  
