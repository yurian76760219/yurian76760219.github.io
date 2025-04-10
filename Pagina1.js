// Obtener elementos
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const closeModal = document.querySelector(".close-btn");
const liButtons = document.querySelectorAll(".show-modal"); // Selecciona solo los elementos con clase 'show-modal'

// Agregar evento a cada <li> con clase 'show-modal'
liButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Obtiene el título y el mensaje de los atributos de datos
        const title = button.getAttribute("data-title");
        const message = button.getAttribute("data-message");

        // Establece el contenido en el modal
        modalTitle.textContent = title;
        modalMessage.textContent = message;

        // Muestra el modal
        modal.style.display = "flex";
    });
});

// Cerrar el modal al hacer clic en la X
/*closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});*/

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

//MODO OSCURO
document.getElementById("toggle-dark-mode").addEventListener("click", function(event) {
    event.preventDefault();
    document.body.classList.toggle("dark-mode");
});
