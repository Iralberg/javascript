/*
Filter(Filtrar o array)
    -Cria um novo array filtrando os valores desejados do array original
    -Você tem acesso a 3 dados:
        - Item por item do Array
        -Posição atual do array
        -Array Completo
*/
const produtos = [
    { id: 1, nome: "Mouse Gamer", preco: 99.90, temDesconto: true, quantidade: 12 },
    { id: 2, nome: "Teclado Mecânico", preco: 249.50, temDesconto: false, quantidade: 7 },
    { id: 3, nome: "Headset USB", preco: 149.99, temDesconto: true, quantidade: 20 },
    { id: 4, nome: "Monitor 24\"", preco: 899.00, temDesconto: false, quantidade: 5 },
    { id: 5, nome: "Cabo HDMI", preco: 29.90, temDesconto: true, quantidade: 50 },
    { id: 6, nome: "Webcam Full HD", preco: 199.00, temDesconto: false, quantidade: 9 },
    { id: 7, nome: "Mousepad Grande", preco: 39.90, temDesconto: false, quantidade: 30 },
    { id: 8, nome: "SSD 480GB", preco: 229.99, temDesconto: true, quantidade: 14 },
    { id: 9, nome: "Smartwatch XPTO", preco: 399.90, temDesconto: true, quantidade: 6 },
    { id: 10, nome: "Caixa de Som Bluetooth", preco: 159.90, temDesconto: false, quantidade: 18 }
];
const produtosPromoçao= produtos.filter(item => item.temDesconto)
console.log(produtosPromoçao)