export default function PostCard({ post }) {
    const {
        avatar,
        author,
        timestamp,
        content,
        image,
        likes,
        comments,
        shares,
    } = post;

    return (
        <div className="flex flex-col gap-2 rounded-xl bg-white dark:bg-dark-slate/20 shadow-sm overflow-hidden">
            <div className="p-4 @container">
                <div className="flex flex-col items-stretch justify-start">
                    <div className="flex items-center gap-3 mb-3">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                            data-alt="User avatar"
                            style={{ backgroundImage: `url("${avatar}")` }}
                        ></div>
                        <div className="flex flex-col">
                            <p className="text-dark-slate dark:text-white text-lg font-bold leading-tight">
                                {author}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                                {timestamp}
                            </p>
                        </div>
                    </div>
                    <p className="text-dark-slate dark:text-white text-base font-normal leading-normal mb-3">
                        {content}
                    </p>
                    {image && (
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            data-alt="Post image"
                            style={{ backgroundImage: `url("${image}")` }}
                        ></div>
                    )}
                </div>
            </div>
            <div className="flex flex-wrap gap-4 px-6 pb-4 pt-2 justify-start border-t border-gray-200 dark:border-gray-700">
                <button className="flex items-center justify-center gap-2 group">
                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 group-hover:text-red-500">
                        favorite
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-red-500 text-sm font-bold leading-normal">
                        {likes}
                    </p>
                </button>
                <button className="flex items-center justify-center gap-2 group">
                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 group-hover:text-primary">
                        chat_bubble_outline
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-primary text-sm font-bold leading-normal">
                        {comments}
                    </p>
                </button>
                <button className="flex items-center justify-center gap-2 group">
                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 group-hover:text-secondary">
                        share
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-secondary text-sm font-bold leading-normal">
                        {shares}
                    </p>
                </button>
            </div>
        </div>
    );
}
