





// DEMO COMPONENTS BELOW


//user for demo user page
type DemoUser = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng": string,
      }
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string,
    }
}

//type for post
type DemoPost = {
  "userId": number,
  "id": number,
  "title": string,
  "body": string,
}


//individual wiki pages
type WikiResult = {
  pageid: string,
  title: string,
  extract: string,
  thumbnail?: {
    source: string,
    width: number,
    hieght: number,
  }
}


//query, and (possible) array of resulting pages
type WikiSearchResult = {
  query?: {
    pages?: WikiResult[],
  }
}

