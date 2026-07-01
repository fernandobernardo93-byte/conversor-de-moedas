const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector("#moeda")

function converterMoeda() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector("#currency-value-to-convert") //Valor Real
    const convertedCurrencyValue = document.querySelector("#currency-value ")   //Valor Dolar

    const dolarToday = 5.2
    const euroToday = 5.92
    const libraToday = 6.84
    const bitcoinToday = 313114.25

    if (currencySelect.value === "USD") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value === "EUR") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR',

        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value === "LIB") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value === "BIT") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")

    if (currencySelect.value === "USD") {
        currencyName.innerHTML = `
        <img src="assets/dolar.png" alt="Dólar" class="dolar">
        <h6>Dólar Americano</h6>
        <p id="currency-value">US$ 0,00</p>
        `
    }
    
    if (currencySelect.value === "EUR") {
        currencyName.innerHTML = `
        <img src="assets/euro.png" alt="Euro" class="euro">
        <h6>Euro</h6>
        <p id="currency-value">€ 0,00</p>
        `
    }
    if (currencySelect.value === "LIB") {
        currencyName.innerHTML = `
        <img src="assets/libra.png" alt="Libra" class="libra" style="width: 50px;">
        <h6>Libra</h6>
        <p id="currency-value">£ 0,00</p>
        `
    }
    if (currencySelect.value === "BIT") {
        currencyName.innerHTML = `
        <img src="assets/bitcoin.png" alt="Bitcoin" class="bitcoin" style="width: 50px;">
        <h6>Bitcoin</h6>
        <p id="currency-value">₿ 0,00</p>
        `
    }
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', converterMoeda)