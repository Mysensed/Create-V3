export default async function getUser(userId:string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    //You can throw an error like so
    if (!res.ok) throw new Error ('failed to fetch user')
    //or you can return undefined if you are using the 'notfound' functionality
    //if (!res.ok) return undefined

    return res.json()
}