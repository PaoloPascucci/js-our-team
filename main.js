const team = [{
    nome: 'Marco',
    ruolo: 'Centravanti',
    image: 'https://picsum.photos/images'
},
    {
        nome: 'Alessia',
        ruolo: 'Terzino',
        image: 'https://picsum.photos/images'
    },
    {
        nome: 'Andrea',
        ruolo: 'Punta',
        image: 'https://picsum.photos/images'
    },
    {
        nome: 'Chiara',
        ruolo: 'Portiere',
        image: 'https://picsum.photos/images'
    }
];


for (let i = 0; i < team.length; i++) {
    const member = team[i]
    console.log("nome", member.nome);
    console.log("ruolo", member.ruolo);
    console.log("image", member.image);
}