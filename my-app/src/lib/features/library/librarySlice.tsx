
// export async function getLibrary(page: number = 1, pageSize: number = 100): Promise<libraryItem[] | undefined >{
//     const res = await fetch(`http://localhost:3000/api/library?page=${page}&pagesize=${pageSize}&offset=0`)
//     if (!res.ok) throw new Error ('failed to fetch library data')
//     return res.json()    
// }