import { createContext, ReactNode, useContext } from "react";

// with compound pattern
type Post = {
    id: number,
    title: string,
    content: string,
    user: {
        id: number,
        name: string
    };
};

type PostCardProps = {
    children: ReactNode,
    post: Post,
}

type PostCardContextType = {
    post: Post
}

let PostCardContext = createContext<PostCardContextType | undefined>(undefined);

const usePostCardContext = () => {
    let context = useContext(PostCardContext);
    if (!context) {
        throw new Error('usePostCardContext must be used within a PostCardProvider');
    }
    return context;
}

export default function PostCard({ children, post }: PostCardProps) {
    return (
        <PostCardContext.Provider value={{ post }}>
            <div className='flex w-[300px] flex-row gap-2 rounded-md'>
                <p>{post.content}</p>
                {children}
            </div>
        </PostCardContext.Provider>
    )
}

PostCard.Title = function PostCardTitle() {
    let context = usePostCardContext();
    return <h2 className='text-lg font-semibold'>{context.post.title}</h2>
}
PostCard.User = function PostCardUser() {
    let context = usePostCardContext();
    return <p className='text-sm text-neutral-400'>{context.post.user.name}</p>
}
PostCard.Buttons = function PostCardButtons() {
    return <div className='flex flex-row gap-2'>
        <button>Read more</button>
        <button>Comments</button>
    </div>
}
