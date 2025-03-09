document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const openConfirmButton = document.getElementById("openModal");
    const openBankButton = document.getElementById("openBankModal");
    const closeModal = document.querySelector(".close");
    const copyButton = document.getElementById("copyButton");
    const copyMessage = document.getElementById("copyMessage");

    // Verifica si los elementos existen
    if (!modal || !modalTitle || !modalText || !openConfirmButton || !openBankButton || !closeModal || !copyButton || !copyMessage) {
        console.error("Uno o más elementos no se encuentran en el DOM.");
        return;  // Detener la ejecución si faltan elementos
    }

    // Datos bancarios (fijos para ambos casos)
    const datosBancarios = `CBU: 4530000800015133660948<br>ALIAS: bodafloryjere<br>Titular: Jeremias Camara`;

    // Función para abrir el modal con el título correspondiente
    function openModal(title) {
        modalTitle.innerHTML = title;
        modalText.innerHTML = datosBancarios;
        modal.style.display = "flex";
    }

    // Evento para abrir el modal con el título "Confirmación de Asistencia"
    openConfirmButton.addEventListener("click", (e) => {
        e.preventDefault();
        openModal("CONFIRMAR ASISTENCIA");
    });

    // Evento para abrir el modal con el título "Si quieres colaborar con nuestro viaje :)"
    openBankButton.addEventListener("click", (e) => {
        e.preventDefault();
        openModal("SI QUERÉS COLABORAR CON NUESTRO VIAJE 😊");
    });

    // Evento para cerrar el modal al hacer clic en la "X"
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        copyMessage.style.opacity = "0";
    });

    // Cerrar el modal si el usuario hace clic fuera de él
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            copyMessage.style.opacity = "0";
        }
    });

    // Copiar datos bancarios al portapapeles
    copyButton.addEventListener("click", () => {
        const datos = `4530000800015133660948`;
        navigator.clipboard.writeText(datos).then(() => {
            copyMessage.innerHTML = "CBU Copiado ✅";
            copyMessage.style.opacity = "1";
        });
    });

    // Asegurar que el modal esté oculto al inicio
    modal.style.display = "none";
});
