// Função para rolar suavemente até a seção desejada
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

// Adiciona o evento onclick ao botão "Tenho interesse" da primeira seção
const interesseButton = document.querySelector(".button-primary");
interesseButton.addEventListener("click", () => {
  scrollToSection("#page-5"); // Substitua "#page-3" pelo ID da seção de interesse
});
