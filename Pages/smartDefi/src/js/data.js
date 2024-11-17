const volume24 = document.querySelector("section.overview #volume24h");
const launched_tokens = document.querySelector("section.overview #launched-tokens");
const presales = document.querySelector("section.overview #presales");
const holders = document.querySelector("section.overview #holders");
const top_gainers = document.querySelector(".dashboard-section .js-gainers");
const new_sd = document.querySelector(".dashboard-section .js-new-sd");
const explore = document.querySelector(".dashboard-section .js-explore");

axios.get('./json/example.json').then((response) => {
    const data = response.data;

    // dashboard overviews
    [volume24, launched_tokens, presales, holders].forEach(item => {
        item.children[1].innerHTML = data[item.id]
    })

    // Top Gainers
    data["top-gainers"].forEach(item => {
        top_gainers.innerHTML += `<div class="list-item">
                                    <span class="item-number">${item['item-number']}</span>
                                    <img src="${item['item-icon']}" alt="SmartDeFiDoge" class="item-icon">
                                    <div class="item-info">
                                        <span class="item-name">${item['item-name']}</span>
                                        <span class="item-subname">${item['item-subname']}</span>
                                    </div>
                                    <span class="item-change ${item['positive'] ? 'positive' : 'negative'}">${item['item-change']}</span>
                                </div>`
    })

    // New SD
    data["new-sd"].forEach(item => {
        new_sd.innerHTML += `<div class="list-item">
                                    <img src="${item['item-icon']}" alt="fegxsc" class="item-icon">
                                    <div class="item-info">
                                        <span class="item-name">${item['item-name']}</span>
                                        <span class="item-subname">${item['item-subname']}</span>
                                    </div>
                                    <span class="item-price ${item['positive'] ? 'positive' : 'negative'}">${item['item-price']}</span>
                                </div>`
    })

    // Explore
    data["explore"].forEach(item => {
        explore.innerHTML += `<div class="table-row">
                                    <span class="item-number ms-2">${item['item-number']}</span>
                                    <div class="item-info">
                                        <img src="${item['item-icon']}" alt="smartDOGE" class="item-icon" width="30">
                                        <div class="d-flex flex-column">
                                            <span class="item-name">${item['item-name']}</span>
                                            <span class="item-subname">${item['item-subname']}</span>
                                        </div>
                                    </div>
                                    <span class="item-price ${item['price-positive'] ? 'positive' : 'negative'}">${item['item-price']}</span>
                                    <span class="item-change ${item['change-positive'] ? 'positive' : 'negative'}">${item['item-change']}</span>
                                    <span class="item-volume">${item['item-volume']}</span>
                                    <span class="item-marketcap">${item['item-market']}</span>
                                </div>`
    })


}).catch((error) => {
    console.log(error)
    alert("Something went wrong during connecting to the API (check console log)");
})