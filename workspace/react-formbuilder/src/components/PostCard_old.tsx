// without compound pattern
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
    post: Post,
    showProfile?: boolean
}

export default function PostCard({ post, showProfile }: PostCardProps) {
    return (
        <div className='flex w-[300px] flex-row gap-2 rounded-md'>
            <h2 className='text-lg font-semibold'>{post.title}</h2>
            <p>{post.content}</p>

            {showProfile && (
                            <p className='text-sm text-neutral-400'>
                            {post.user.name}
                        </p>
            )}

            <div className='flex flex-row gap-2'>
                <button>Read more</button>
                <button>Comments</button>
            </div>
        </div>
    )
}


{/* <PostCard post={{
        id: 1,
        title: 'Hello world',
        content: 'This is a post content',
        user: {
          id: 1,
          name: 'Harish Rao'
        }
      }} ></PostCard> */}