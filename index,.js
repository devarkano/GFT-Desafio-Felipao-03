class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shurikuen';
                break;
            default:
                ataque = 'atacou com uma arma desconhecida';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const herois = [
    new Hero('Gandalf', 1000, 'mago'),
    new Hero('Aragorn', 87, 'guerreiro'),
    new Hero('Li Mu Bai', 30, 'monge'),
    new Hero('Naruto', 16, 'ninja')
];

herois.forEach(hero => hero.atacar());

const ataques = herois.map(hero => `${hero.tipo} atacou usando ${hero.tipo === 'mago' ? 'magia' : hero.tipo === 'guerreiro' ? 'espada' : hero.tipo === 'monge' ? 'artes marciais' : 'shurikuen'}`).join(', ');
console.log(ataques);
