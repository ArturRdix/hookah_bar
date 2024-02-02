const products = await fetch(process.env.REACT_APP_API_URL + '/Products')
    .then((response) => {
        return response.json();
    });


export default products 