type SFMC_GetCustomobjectdata = {
  key: string,
  page: number,
  pagesize: number,
  fields: string,
  filter: string,
  orderby: string,
  top: number,
  offset: number,
}

type libraryItem = {
  keys: {
      id: string,
  },
  values: {
      title?: string,
      brand?: string,
      contentdataextensionkey?: string,
      description?: string,
      category?: string,
      contentmodule?: string,
      emailtemplate?: string,
      previewimage?: string,
      version?: string,
      modifiedby?: string,
      date?: string,
      tags?: string,
  }
}








type Rest = {
  get: (url: string) => any;
  post: (url: string, JSON: any) => any;
  patch: (url: string, JSON: any) => any;
  put: (url: string, JSON: any) => any;
  delete: (url: string) => any;
  getBulk: (url: string) => any;
  getCollection: (url: string[]) => any;
}

type Soap = {
  retrieve: (object: string, properties: string[], filter?: any) => any;
  retrieveBulk: (object: string, properties: string[], filter?: any) => any;
  create: (object: string, request: any, options: any) => any;
  update: (object: string, request: any, options: any) => any;
  execute: (object: string, request: any, options: any) => any;
  delete: (object: string, request: any) => any;
}

type ISFMC_SDK = {
  auth: any;
  rest: Rest;
  soap: Soap;
}




// DEMO COMPONENTS BELOW


//user for demo user page
type DemoUser = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string,
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string,
    }
}

//type for post
type DemoPost = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

//todo
type DemoToDo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean

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

