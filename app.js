// Progression 1: create a function and fetch the api using axios
function gettingNews() {
    axios.get("https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=bae27bad050aa337416d3760cd8265b6")
    // axios.get("https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=53ff4a1e8f8ea53c72374509562fa8b5")
        .then((response) => {
            console.log(response.data);
            printingNews(response.data.articles);
        })
        .catch((error) => {
            console.log(error);
            throw new Error("Oops! Unsuccessful try");
        });
}

gettingNews();

function printingNews(articles) {
    let mainNews = document.getElementById("main-news");
    
    articles.forEach((data) => {

        let i = 1;
        let art = document.createElement("article");  
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("news-cards");

        let title = document.createElement("h4");
        let image = document.createElement("img");
        let imagediv = document.createElement("div");
        let description = document.createElement("div");

        title.innerHTML = `${data.title}`;
        description.innerHTML = `${data.content}`;
        
        image.setAttribute("src", data.image);
        imagediv.setAttribute("id", "image-container")
        imagediv.appendChild(image)
        
        art.appendChild(title);
        art.appendChild(imagediv);
        art.appendChild(description);
        cardDiv.appendChild(art)
        mainNews.appendChild(cardDiv); 

        i += 1;
    });

}