$(document).ready(function () {
    $('#galbiButton').on('click', function() {
        Swal.fire({
            title: "Parabéns!",
            text: "Você é incrível!",
            imageUrl: "img/galbibd.png",
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: "Parabéns, Galbi!",
            confirmButtonText: "🎂",
            customClass: {
                confirmButton: 'buttonBd'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                confetti({
                    particleCount: 1000,
                    spread: 120,
                    origin: { y: 0.6 }
                });
            }
        });
    });
});
