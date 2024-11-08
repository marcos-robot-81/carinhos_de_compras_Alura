let qtde = -1; // quantidade de itens.
let lsit = [['Fone de ouvido',100,""]
    ,['Celular',1400,""]
    ,['Oculus VR',5000,""]
];
let sqtde = [0,0,0]; //soma dos item no carrinho.
let carinho = document.getElementById("lista-produtos");
let carinhoT = document.getElementById("ftotal");
let text = ``;
let text2 = '';
limpar();
function adicionar() {
    let vazio;
    qtde = document.getElementById('quantidade').value;
    let v = document.getElementById('produto').value;



    if(qtde >= 1){
        cria(qtde,v)


    }else{
        window.alert("Por vafor degite quatidade")
    }
}
function limpar(){ // limpa o campo.
    carinho.innerHTML = ` <section class="carrinho__produtos__produto">
        <span class="texto-azul">0 </span>- produtos<span class="texto-azul"></span>
        </section>
        `; 
        carinhoT.innerHTML = ``;
        carinhoT.innerHTML = ''
        qtde = 0;
        sqtde = [0,0,0] 
    
} 
function cria(nomero,produto){ //(quatidade,indetificado da arry do produtor)
    sqtde[produto] = nomero;
    let total = (lsit[0][1]*sqtde[0])+(lsit[1][1]*sqtde[1])+(lsit[2][1]*sqtde[2]);
    //text = `<section class="carrinho__produtos__produto">`;
    text = ``;
    if(sqtde[0] > 0){
        text +=`
        <section class="carrinho__produtos__produto"><span class="texto-azul"> ${sqtde[0]}x </span>- ${lsit[0][0]} <span class="texto-azul"> </section> ${lsit[0][1]}</span>`
    }else{``};
    if(sqtde[1] > 0){
        text +=`
        <section class="carrinho__produtos__produto"><span class="texto-azul"> ${sqtde[1]}x </span>- ${lsit[1][0]} <span class="texto-azul"> </section> ${lsit[1][1]}</span>`
    }else{``};
    if(sqtde[2] > 0){
        text +=`
        <section class="carrinho__produtos__produto"><span class="texto-azul"> ${sqtde[2]}x </span>- ${lsit[2][0]} <span class="texto-azul"> </section> ${lsit[2][1]}</span>`
    }else{``};
    text += `</section>`;
    

    /**text = `
    <section class="carrinho__produtos__produto">
    <span class="texto-azul">${nomero}x </span>- ${lsit[produto][0]} <span class="texto-azul"> ${lsit[produto][1]}</span>
    </section>
    `; **/
    text2 = `Total: <span class="texto-azul" id="valor-total">${(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>`;
    carinho.innerHTML = text;
    carinhoT.innerHTML = text2;
}
function criaTesto(){

    
    return(` <span class="texto-azul">${nomero}x </span>- ${lsit[produto][0]} <span class="texto-azul"> ${lsit[produto][1]}</span>`);
};

