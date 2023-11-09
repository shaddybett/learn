import React, { useEffect, useState } from "react";


export default function Body() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const pageSize = 8;

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2023-11-08&to=2023-11-08&sortBy=popularity&apiKey=5e99a430081843aa81c53baae05d39c0&page=${page}&pageSize=${pageSize}`
    )
      .then((response) => response.json())
      .then((news) => setData(news))
      .catch((error) => console.error("Error fetching this data", error));
  }, [page, pageSize]);

  function nextPage() {
    setPage(page + 1);
  }
  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  return (
    <div className="container">
      <div className="row">
        {data ? (
          data.articles.map((article, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={article.urlToImage}
                  alt={article.author}
                />
                <div className="card-body">
                  <h5 className="card-title">Title: {article.title}</h5>
                  
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="pagination" style={{float: 'right'}} >
        <button
          onClick={prevPage}
          disabled={page === 1}
          style={{
            backgroundColor: "#007BFF", // Background color
            color: "white",
            padding: "5px 10px",
            borderRadius: "10px",
            border: "none",
            marginRight: "10px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Back
        </button>
        <button
          onClick={nextPage}
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            padding: "5px 10px",
            borderRadius: "10px",
            border: "none",
            marginRight: "10px",
            marginTop: "20px",
            cursor: "pointer",
            
      
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
