const tokens = [
    { name: "Bitcoin", amount: 1.5, status: "active" },
    { name: "Ripple", amount: 1000, status: "inactive" },
    { name: "Ethereum", amount: 10, status: "active" },
    { name: "Binance Coin", amount: 5, status: "active" },
    { name: "Cardano", amount: 200, status: "inactive" }
];

function loadTokens() {
    const tableBody = document.getElementById("token-table");
    tableBody.innerHTML = "";
    const tableHead = document.getElementById("token-table-th");
    tableHead.classList.remove('hidden')

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
                    <td>${token.name}</td>
                    <td>${token.amount}</td>
                    <td><span class="status ${statusClass}">${token.status.charAt(0).toUpperCase() + token.status.slice(1)}</span></td>
                    <td><button type="button" class="btn btn-primary">Buy</button></td>
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
                    <td>${token.name}</td>
                    <td>${token.amount}</td>
                    <td><span class="status ${statusClass}">${token.status.charAt(0).toUpperCase() + token.status.slice(1)}</span></td>
                    <td><button type="button" class="btn btn-primary">Buy</button></td>
                `;
                tableBody.appendChild(row);
            });
            document.getElementsByClassName("tokens-container")[0].style.display = "none";
        });

}

document.getElementById("load-tokens-btn").addEventListener("click", loadTokens);
