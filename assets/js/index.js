const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("#enviarCorreo").on("click", function () {
    alert("El correo fue enviado correctamente...");
});

$("h5").on("dblclick", function () {
    $(this).css({
        "color": "red"
    })
});

$(".card-title").on("click", function () {
    $(".card-img-top, .card-text").toggle();

});


