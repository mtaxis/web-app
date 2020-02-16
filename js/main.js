const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Promise que aguarda um valor cada vez que um evento atacar o input de busca
const searchStates = async searchText => {
    const res = await fetch('http://dt3temp-com.umbler.net/contacts/');
    const states = await res.json();
    const s = states.contatos;

    let matches = s.filter((state) => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex);
    });

    if(searchText.length === 0) {
        matches = [];
        matchList.innerHTML =  '';
    }

    outputHtml(matches);
};

// Mostra resultados em html
const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches
            .map(
                match => `
                <div class="card card-body mb-0">
                    <div class="avatar-card">
                        <img src="img/avatar.png" alt="Agenda Dt3 Sports">                    
                    </div>
                    <div class="info-card">
                        <h4>${match.name}</h4>
                        <span class="text-primary">(${match.ddd}) ${match.telefone}</span>                    
                    </div>
                </div>
        `).join('');

        matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => searchStates(search.value));