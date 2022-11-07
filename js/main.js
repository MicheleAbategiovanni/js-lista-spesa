const listMarket = ["Pane", "Nutella", "Acqua", "Latte"]


const listMarketContainer = document.querySelector(".col:nth-child(2)")

let i = 0

while (i < listMarket.length) {

    const listMarketEl = document.createElement("h6")

    listMarketContainer.append(listMarketEl)

    listMarketEl.append(listMarket[i])

    i++;
}

