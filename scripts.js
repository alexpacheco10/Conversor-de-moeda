




// trocando a foto e o paragrafo da esquerda quando o valor do seletor-1 for escolhido

const seletor1 = document.querySelector(".select-1")
const imagemEsquerda = document.querySelector(".imgEsquerda")
const paragrafoEsquerda = document.querySelector(".paragrafoEsquerda")
const valorEsquerda = document.querySelector(".paragrafoEsquerdaValor")
const valorDireita = document.querySelector(".paragrafoDireitaValor")



function trocaImgParagrafoEsquerda() {




    if (seletor1.value == "real") {

        imagemEsquerda.src = "./img/real-logo.png"

        paragrafoEsquerda.innerHTML = "Real brasileiro"

        valorEsquerda.innerHTML = "0,00"



    }


    if (seletor1.value == "dolar") {

        imagemEsquerda.src = "./img/dolar-logo.png"

        paragrafoEsquerda.innerHTML = "Dólar americano"

        valorEsquerda.innerHTML = "0,00"

    }


    if (seletor1.value == "euro") {

        imagemEsquerda.src = "./img/euro.png"

        paragrafoEsquerda.innerHTML = "Euro"

        valorEsquerda.innerHTML = "0,00"

    }


    if (seletor1.value == "libra") {

        imagemEsquerda.src = "./img/libra.png"

        paragrafoEsquerda.innerHTML = "Libra"

        valorEsquerda.innerHTML = "0,00"

    }


    if (seletor1.value == "bitcoin") {

        imagemEsquerda.src = "./img/bitcoin.png"

        paragrafoEsquerda.innerHTML = "Bitcoin"

        valorEsquerda.innerHTML = "0,00"

    }



}
















// trocando a foto e o paragrafo da direira quando o valor do seletor-2 for escolhido


const seletor2 = document.querySelector(".select-2")
const ParagrafoDireita = document.querySelector(".paragrafoDireita")
const ImagemDireita = document.querySelector(".imgDireita")






function trocaImgParagrafoDireita() {

    if (seletor2.value == "real") {
        ImagemDireita.src = "./img/real-logo.png"
        ParagrafoDireita.innerHTML = "Real brasileiro"
        valorDireita.innerHTML = "0,00"
    }


    if (seletor2.value == "dolar") {
        ImagemDireita.src = "./img/dolar-logo.png"
        ParagrafoDireita.innerHTML = "Dólar americano"
        valorDireita.innerHTML = "0,00"
    }


    if (seletor2.value == "euro") {
        ImagemDireita.src = "./img/euro.png"
        ParagrafoDireita.innerHTML = "Euro"
        valorDireita.innerHTML = "0,00"
    }


    if (seletor2.value == "libra") {
        ImagemDireita.src = "./img/libra.png"
        ParagrafoDireita.innerHTML = "Libra"
        valorDireita.innerHTML = "0,00"
    }


    if (seletor2.value == "bitcoin") {
        ImagemDireita.src = "./img/bitcoin.png"
        ParagrafoDireita.innerHTML = "Bitcoin"
        valorDireita.innerHTML = "0,00"
    }

}
























// Fazer a conversão quando o botão for clicado

const botaoConverter = document.querySelector(".botaoconverter")
const input = document.querySelector(".valorDoInput").value




function converterValores() {


    const valorEsquerda = document.querySelector(".paragrafoEsquerdaValor")
    const valorDireita = document.querySelector(".paragrafoDireitaValor")
    const input = document.querySelector(".valorDoInput").value

    const valorDolarHoje = 5.7
    const valorEuroHoje = 6.2
    const valorLibraHoje = 7.17
    const valorBitcoinHoje = 563.908

    const dolar = input * valorDolarHoje
    const euro = input * valorEuroHoje
    const libra = input * valorLibraHoje
    const bitcoin = input * valorBitcoinHoje


    if (seletor1.value === "real" && seletor2.value === "dolar") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("pt-br",
            {
                style: "currency",
                currency: "BRL"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(input / valorDolarHoje)
    }



    
    if (seletor1.value === "real" && seletor2.value === "euro") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("pt-br",
            {
                style: "currency",
                currency: "BRL"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(input / valorEuroHoje)
    }





    if (seletor1.value === "real" && seletor2.value === "libra") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("pt-br",
            {
                style: "currency",
                currency: "BRL"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(input / valorLibraHoje )
    }





    if (seletor1.value === "real" && seletor2.value === "bitcoin") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("pt-br",
            {
                style: "currency",
                currency: "BRL"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "BTC"
            }).format(input / valorBitcoinHoje )
    }




    if (seletor1.value === "real" && seletor2.value === "real") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("pt-br",
            {
                style: "currency",
                currency: "BRL"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }).format(input)
    }

    



    if (seletor1.value === "dolar" && seletor2.value === "euro") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(dolar / valorEuroHoje)
    }






    if (seletor1.value === "dolar" && seletor2.value === "dolar") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(input)
    }





    if (seletor1.value === "dolar" && seletor2.value === "libra") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(dolar / valorLibraHoje)
    }






    if (seletor1.value === "dolar" && seletor2.value === "bitcoin") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "BTC"
            }).format(dolar / valorBitcoinHoje)
    }






    if (seletor1.value === "dolar" && seletor2.value === "real") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("pt-br",
            {
                style: "currency",
                currency: "BRL"
            }).format(valorDolarHoje * input )
    }




























    if (seletor1.value === "euro" && seletor2.value === "dolar") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(euro / valorDolarHoje)
    }




    if (seletor1.value === "euro" && seletor2.value === "euro") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(input)
    }





    if (seletor1.value === "euro" && seletor2.value === "libra") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(euro / valorLibraHoje)
    }





    if (seletor1.value === "euro" && seletor2.value === "bitcoin") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "BTC"
            }).format(euro / valorBitcoinHoje)
    }




    if (seletor1.value === "euro" && seletor2.value === "real") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }).format(valorEuroHoje * input)
    }
























    
    if (seletor1.value === "libra" && seletor2.value === "dolar") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(libra / valorDolarHoje)
    }





    if (seletor1.value === "libra" && seletor2.value === "libra") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(input)
    }





    if (seletor1.value === "libra" && seletor2.value === "euro") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(libra / valorEuroHoje)
    }






    if (seletor1.value === "libra" && seletor2.value === "bitcoin") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "BTC"
            }).format(libra / valorBitcoinHoje)
    }





    if (seletor1.value === "libra" && seletor2.value === "real") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }).format(valorLibraHoje * input)
    }
























    if (seletor1.value === "bitcoin" && seletor2.value === "dolar") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "BTC"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(bitcoin / valorDolarHoje)
    }






    if (seletor1.value === "bitcoin" && seletor2.value === "bitcoin") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "BTC"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "BTC"
            }).format(input)
    }
    




    if (seletor1.value === "bitcoin" && seletor2.value === "euro") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "BTC"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(bitcoin / valorEuroHoje)
    }






    if (seletor1.value === "bitcoin" && seletor2.value === "libra") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "BTC"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(bitcoin / valorLibraHoje)
    }





    if (seletor1.value === "bitcoin" && seletor2.value === "real") {

        valorEsquerda.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "BTC"
            }).format(input)


        valorDireita.innerHTML = new Intl.NumberFormat("pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }).format(valorBitcoinHoje * input)
    }
    
    
}





















seletor2.addEventListener("change", trocaImgParagrafoDireita)
seletor1.addEventListener("change", trocaImgParagrafoEsquerda)

botaoConverter.addEventListener("click", converterValores)




