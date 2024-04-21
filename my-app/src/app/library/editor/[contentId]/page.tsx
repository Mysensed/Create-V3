import getUser from "@/lib/features/users/getUser";
import getUserPosts from "@/lib/features/users/getUserPosts";
import { Suspense } from "react";
//import UserPosts from "./components/UserPosts";
import { Metadata } from "next";

type Params = {
    params: {
        userId: string,
    }
}



export async function generateMetadata( {params:{ userId }}:Params ): Promise<Metadata> {
    //const userData: Promise<User> = getUser(userId)
    //const user: User = await userData
    return {
        title: 'name of the content block',
        description: 'single content item editor'
    }
}



export default async function contentEditorPage({ params: {userId} }: Params) {

    //const userData: Promise<User> = getUser(userId)
    //const userPostsData: Promise<Post[]> = getUserPosts(userId)

    //way to check if all promises are done.
    // [user, userPosts] = await Promise.all([userData, userPostsData])


    return(
        <>
            
            <Suspense
                fallback={<h2>Loading posts</h2>}
            >
                <h1> placeholder editor page </h1>
            </Suspense>

        </>
    )
}