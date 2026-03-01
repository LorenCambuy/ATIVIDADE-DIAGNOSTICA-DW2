function toggleComentario(botao) {
    const post = botao.closest(".post");
    const area = post.querySelector(".area_comentario");

    if (area.style.display === "none" || area.style.display === "") {
        area.style.display = "block";
    } else {
        area.style.display = "none";
    }
}