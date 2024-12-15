const tokens = [
    { name: "Bitcoin", amount: 500000, status: "Waiting for recovery", image: "./assets/images/asset 43.svg" },
    { name: "Ripple", amount: 17193000, status: "Waiting for recovery", image: "./assets/images/asset 43.svg" },
    { name: "Ethereum", amount: 1000000, status: "Waiting for recovery", image: "./assets/images/asset 43.svg" },
    { name: "Binance Coin", amount: 5000000, status: "Waiting for recovery", image: "./assets/images/asset 43.svg" },
    { name: "Cardano", amount: 200000000, status: "Waiting for recovery", image: "./assets/images/asset 43.svg" }
];

function loadTokens() {
    const tableBody = document.getElementById("token-table");
    tableBody.innerHTML = "";
    const tableHead = document.getElementById("token-table-th");
    tableHead.classList.remove('hidden');

    // You can comment/uncomment this block to either use the static data or fetch data from the server
    // Fetch data from the server
    fetch('https://your-server-endpoint.com/tokens')  // Replace with your API URL
        .then(response => response.json())
        .then(data => {
            // Assuming the server response structure matches the tokens array format
            const tokensFromServer = data;  // Use the fetched data
            tokensFromServer.forEach(token => {
                const row = document.createElement("tr");
                row.classList.add('token-row');
                const statusClass = token.status === "active" ? "active" : "inactive";
                row.innerHTML = `
                    <td>
                        <div class="token-cell">
                            <img src="${token.image}" alt="${token.name} logo" class="token-image">
                            <span>${token.name}</span>
                        </div>
                    </td>
                    <td>${token.amount.toLocaleString()}</td>
                    <td><span class="status ${statusClass}">${token.status.charAt(0).toUpperCase() + token.status.slice(1)}</span></td>
                    <td><button type="button" class="btn recover-btn">Recover Now!</button></td>
                `;
                tableBody.appendChild(row);
            });
            document.getElementsByClassName("tokens-container")[0].style.display = "none";
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // If there's an error (e.g., network issue), fallback to using local tokens array
            tokens.forEach(token => {
                const row = document.createElement("tr");
                row.classList.add('token-row');
                const statusClass = token.status === "active" ? "active" : "inactive";
                row.innerHTML = `
                    <td>
                        <div class="token-cell">
                            <img src="${token.image}" alt="${token.name} logo" class="token-image">
                            <span>${token.name}</span>
                        </div>
                    </td>
                    <td>${token.amount.toLocaleString()}</td>
                    <td><span class="status ${statusClass}">${token.status.charAt(0).toUpperCase() + token.status.slice(1)}</span></td>
                    <td><button type="button" class="btn recover-btn">Recover Now!</button></td>
                `;
                tableBody.appendChild(row);
            });
            document.getElementsByClassName("tokens-container")[0].style.display = "none";
        });
}

document.getElementById("load-tokens-btn").addEventListener("click", loadTokens);
