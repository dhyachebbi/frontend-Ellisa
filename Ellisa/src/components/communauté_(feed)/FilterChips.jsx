export default function FilterChips() {
    return (
        <div className="flex gap-3 px-4">
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/10 pl-4 pr-3 text-primary">
                <p className="text-sm font-medium leading-normal">Latest</p>
                <span className="material-symbols-outlined text-xl">expand_more</span>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-800 pl-4 pr-3 text-dark-slate dark:text-white">
                <p className="text-sm font-medium leading-normal">Most Popular</p>
                <span className="material-symbols-outlined text-xl">expand_more</span>
            </button>
        </div>
    );
}
