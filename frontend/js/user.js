document.querySelectorAll('[user-data]').forEach(link => {
    const conteudo = document.getElementById('user-content');

    link.onclick = function(e) {
        e.preventDefault();
        fetch(link.href)
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    }
})