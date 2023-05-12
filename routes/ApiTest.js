var express = require("express");
var router = express.Router();
const axios = require('axios');



router.get("/", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/top-headlines';
    const params = {
        country: 'us',
        pageSize: 4,
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
        
        
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/headline2", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/top-headlines';
    const params = {
        q: 'philippines',
        //searchIn: 'description',
        //sortBy: 'popularity',
        country: 'ph',
        pageSize: 5,
        //category: 'entertainment',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/phHeadline", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'http://api.mediastack.com/v1/news';
    const params = {
        //q:'phil',
        //from:'2023-05-05',
        //to:'2023-05-06',
        //sortBy:'popularity',
        //category:'technology',
        //language:'en',
        //categories: 'business',
        keywords: 'philippines',
        //sort: 'popularity',
        offset: 1,
        limit: 6,
        countries: 'ph',
        access_key: 'a5ab611c80fa0902b8a3fadf1298c33c',
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/phHeadline3", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'http://api.mediastack.com/v1/news';
    const params = {
        //q:'phil',
        //from:'2023-05-05',
        //to:'2023-05-06',
        //sortBy:'popularity',
        //category:'technology',
        //language:'en',
        //categories: 'business',
        offset: 7,
        limit: 4,
        countries: 'ph',
        access_key: 'a5ab611c80fa0902b8a3fadf1298c33c',
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/sportsNews", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'sports',
        searchIn: 'description',
        from: '2023-5-11',
        to: '2023-5-12',
        sortBy: 'popularity',
        pageSize: 9,
        page: 1,
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/phSubHeadlineTech", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'technology',
        searchIn: 'description',
        pageSize: 2,
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});


router.get("/phSubHeadBusiness", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'business',
        searchIn: 'description',
        pageSize: 2,
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/phSubHeadEntertainment", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'entertainment',
        searchIn: 'description',
        pageSize: 1,
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});


router.get("/phSubHeadShowbiz", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'Showbiz',
        searchIn: 'description',
        pageSize: 1,
        page: 2,
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/GlobalNews", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'any',
        searchIn: 'description',
        from: '2023-5-8',
        to: '2023-5-13',
        sortBy: 'popularity',
        pageSize: 9,
        page: 1,
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/GlobalNewsPolitics", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'World Politics',
        searchIn: 'description',
        from: '2023-5-8',
        to: '2023-5-13',
        sortBy: 'popularity',
        pageSize: 10,
        page: 1,
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/GlobalNewsEntertain", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'World Entertainment',
        searchIn: 'description',
        from: '2023-5-8',   
        to: '2023-5-13',
        sortBy: 'popularity',
        pageSize: 12,
        page: 1,
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});


router.get("/BusinessNewsPh", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'Business',
        searchIn: 'title,content,description',
        from: '2023-5-8',   
        to: '2023-5-13',
        sortBy: 'popularity',
        pageSize: 10,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/BusinessNewsPh2", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'Philippine AND (Business OR Market)',
        searchIn: 'title,content,description',
        from: '2023-5-8',   
        to: '2023-5-13',
        sortBy: 'popularity',
        pageSize: 10,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/BusinessNewsStocks", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'Stock Market',
        searchIn: 'title,content,description',
        from: '2023-5-8',   
        to: '2023-5-13',
        sortBy: 'popularity',
        pageSize: 12,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/OpinionNews", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'Professional Opinion OR Advice OR Opinion OR Professional Advice',
        searchIn: 'title,content,description',
        from: '2023-5-8',   
        to: '2023-5-13',
        sortBy: 'popularity',
        pageSize: 10,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/OpinionNewsPh", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'Legal Advice',
        searchIn: 'title,content,description',
        from: '2023-5-8',   
        to: '2023-5-13',
        sortBy: 'popularity',
        pageSize: 12,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/OpinionNewsOthers", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'debate',
        searchIn: 'title,content,description',
        from: '2023-5-8',   
        to: '2023-5-13',
        sortBy: 'popularity',
        pageSize: 12,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/LifeStyleNews", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'food AND cooking',
        searchIn: 'title,content,description',
        from: '2023-5-8',   
        to: '2023-5-13',
        sortBy: 'popularity',
        pageSize: 10,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/LifeStyleNewsFashion", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'Fashion',
        searchIn: 'title,content,description',
        from: '2023-5-8',   
        to: '2023-5-13',
        sortBy: 'popularity',
        pageSize: 10,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/LifeStyleNewsTravel", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'Travel AND Art',
        searchIn: 'title,content,description',
        from: '2023-5-8',   
        to: '2023-5-13',
        sortBy: 'popularity',
        pageSize: 12,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/SportsNewsWorld", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'Basketball OR sports',
        searchIn: 'title,content,description',
        sortBy: 'popularity',
        pageSize: 12,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});


router.get("/SportsNewsPh", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'Games',
        searchIn: 'title,content,description',
        sortBy: 'popularity',
        pageSize: 12,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/SportsRandom", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'board games',
        searchIn: 'title,content,description',
        sortBy: 'popularity',
        pageSize: 10,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});


router.get("/EntertainmentNews", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'music AND videos',
        searchIn: 'title,content,description',
        sortBy: 'popularity',
        pageSize: 10,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/EntertainmentNewsTV", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'television',
        searchIn: 'title,content,description',
        sortBy: 'popularity',
        pageSize: 10,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/EntertainmentNewsComedy", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'comedy',
        searchIn: 'title,content,description',
        sortBy: 'popularity',
        pageSize: 10,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/TechNewsMobile", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'mobile technology',
        searchIn: 'title,content,description',
        sortBy: 'popularity',
        pageSize: 10,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/TechNewsPC", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'PC',
        searchIn: 'title,content,description',
        sortBy: 'popularity',
        pageSize: 10,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});

router.get("/TechNewsGames", (req, res, next) => {
    // Set the API endpoint URL and parameters
    const url = 'https://newsapi.org/v2/everything';
    const params = {
        q: 'E-Games OR Computer Gaming',
        searchIn: 'title,content,description',
        sortBy: 'popularity',
        pageSize: 10,
        page: 1,
        language: 'en',
        //apiKey: 'bb32c96502a24cafb4fc9e33851be330', //API key 1
        //apiKey: 'd989e9ab6a9c4d348508a9e7dca936f8', //API key 2
        //apiKey: '9dc18cac12be469eac6787339c91f149', //API key 3
        apiKey: '6d76c314c7fc495f9e8cd53bca45d556', //API key 4
    };

    // Make the API call using axios
    axios.get(url, { params })
        .then(response => {
            // Handle the API response
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(error => {
            // Handle any errors that occur
            //console.error(error);
            res.send(error);
        });
});


module.exports = router;