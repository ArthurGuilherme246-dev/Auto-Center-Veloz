const form = document.getElementById("trackingForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const code = document.getElementById("code").value.trim();

    if (code === "") {
        alert("Digite o código do atendimento.");
        return;
    }

    result.classList.remove("hidden");

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});