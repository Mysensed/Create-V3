export default async function getUserPosts(userId:string) {

    //force-cache is default, alternative: cache: 'no-store'
    //next: 'revalidate' tells how often data should be refreshed (60s)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?usserId=${userId}`, {next: { revalidate: 60 }})

    if (!res.ok) throw new Error ('failed to fetch data')
    //if (!res.ok) return undefined

    return res.json()
}