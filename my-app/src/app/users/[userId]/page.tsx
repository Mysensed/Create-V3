import IntroBlock from "@/components/navigation/introBlock";
import getUser from "@/lib/features/users/getUser";
import getUserPosts from "@/lib/features/users/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
import { Description } from "@radix-ui/react-dialog";
import getAllUsers from "@/lib/features/users/getAllUsers";


type Params = {
    params: {
        userId: string,
    }
}



export async function generateMetadata( {params:{ userId }}:Params ): Promise<Metadata> {
    const userData:Promise<DemoUser> = getUser(userId)
    const user:DemoUser = await userData

    return {
        title: user.name,
        description: 'single user page meta data'
    }
}



export default async function userPage({ params: {userId} }: Params) {

    const userData: Promise<DemoUser> = getUser(userId)
    const userPostsData: Promise<DemoPost[]> = getUserPosts(userId)

    //way to check if all promises are done.
    const [user, userPosts] = await Promise.all([userData, userPostsData])

    return(
        <>
            {IntroBlock(
                { 
                    title: `${user.name}`, 
                    body: 'demo page to load a dynamic url', 
                }, 
                { 
                    preTitle: 'user id', 
                    title: userId,
                    body: 'for this user',
                    sub: '',
                },
                { 
                    preTitle: 'posts by user', 
                    title:  `${userPosts.length}`,
                    body: 'for this user',
                    sub: '',
                }
            )}

            <Suspense
                fallback={<h2>Loading posts</h2>}
            >
                <UserPosts promise={userPostsData} />
            </Suspense>

        </>
    )
}


//Generate static (url)Params. to tell Next.js what userId's it can expect so it can pre-load the user page
//All params are strings, but our userId is a number so we have to convert
export async function generateStaticParams() {
    const usersData: Promise<DemoUser[]> = getAllUsers()
    const users = await usersData

    return users.map(user => ({ 
        userId: user.id.toString()
    }))
}