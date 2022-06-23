class Combo {
    constructor(lanche, bebida, batata, fruta) {
        this.lanche = lanche;
        this.bebida = bebida;
        this.batata = batata;
        this.fruta = fruta;
    }
}

class Lanche {
    constructor(hamburguer, carne, frango, alface, queijo, molho, cebola, picles, pao) {
        this.hamburguer = hamburguer;
        this.carne = carne;
        this.frango = frango;
        this.alface = alface;
        this.queijo = queijo;
        this.molho = molho;
        this.cebola = cebola;
        this.picles = picles;
        this.pao = pao;

    }
}

const McLanche = new Lanche("simples", true, false, false, true,false, false, false, true)
const BigLanche = new Lanche("duplo", true, false, true, true, true, true, true, true)
const McHen = new Lanche("frango", false, true, true, true, false, false, true, true)

const McLancheCombo = new Combo(McLanche, false, "pequena", true)
const BigLancheCombo = new Combo(BigLanche, true, "media", false)
const McHenCombo = new Combo(McHen, true, "media", false)
