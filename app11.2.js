// task 2
document.addEventListener("DOMContentLoaded", function () {
    let downloadButton = document.getElementById("downloadButton");
    downloadButton.addEventListener("click", downloadAuthors);

    function downloadAuthors() {
        downloadButton.style.display = "none";
        fetch('http://127.0.0.1:8080/index11.2.html')
            .then(response => response.json())
            .then(data => {
                
                displayAuthors(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function displayAuthors(authors) {
        let authorsListElement = document.getElementById("authorsList");
        authorsListElement.innerHTML = "";
        authors.forEach(function (author) {
            let listItem = document.createElement("li");
            listItem.textContent = author;
            authorsListElement.appendChild(listItem);
        });
    }
});