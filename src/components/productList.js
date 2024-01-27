const products = await fetch('http://localhost:5000/api/Products')
    .then((response) => {
        return response.json();
    });


export default products 