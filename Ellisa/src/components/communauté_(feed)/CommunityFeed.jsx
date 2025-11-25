import { useState } from 'react';

export default function CommunityFeed() {
    const [likes, setLikes] = useState({
        1: false,
        2: false,
        3: false,
    });

    const likePost = (postId) => {
        setLikes((prev) => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    const posts = [
        {
            id: 1,
            avatar:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAQUN87unZiyqMbkjmtEHUjDdKJOt-93SqigeLQN1BwhfFJRVzaKZd3Wcj4QjePaSJV6b788J_ttNAPcLOiqTuFJgTthGdhkDO81bOzI1tp7u5mi18EUyG1MjU6qYVSarcbOIRMys9OnghQge_RcrZFoqO3O91GcFMIaIlsie9phoK-7TwMXlp6ikPOV7fojYW6GfkfvVJI2eBHRfQiBHY0g8loNqna0Aw1S6_pUWtJdcC8kzpwXdAF3ctzmoCKJhkYYznN2lqFEDgH',
            author: 'Aria Sharma',
            timestamp: '2 hours ago',
            content:
                'Exploring the ancient ruins of Carthage! The history here is breathtaking. #Tunisia #History',
            image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBK7FEdwVRFmowV5EynYKKUZBTACoq7l4FVZMvLzEqdSJ5-LrK-Rdumot1zUWXyAQXlMY1ITf3rRGeFh4QMdSfdtLTcQM4jfXRqVNX8Pp5ATK2fYOMUa7jxdJlBo3HHKDcmGpbxEkcn-ngnk53P1rzpXWdUmVAoH3HJxWZnUB2sbwWnX6jYzyaGxInpZ4jMMyatH202y0exAQbVp8M9_XDFM0q5zhXes7oJC2_4nFCUOwf8YmBmvgkOFCV5-vT8gN2vXkJvBfL8dZYC',
            likes: 1200,
            comments: 345,
            shares: 123,
        },
        {
            id: 2,
            avatar:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDurF0ZSMe7mD3mFQZmfsvT8U9rGZqWLCEoEVm_iJ3FnlpuQ2mHtLeKCraXMQ0dlTARzdMKiyIBK70vpHyDW-eBMEtIqWUMqdY1OwHdkjjGldOwdTTAFoddUrd5cEI9Z_MMd_Pxd5kWqZgnPvTUQsum-mSLrz8tyMKDQ1WXJnlWi196ZUw2GLXqMTZIlUQd51yguwMhs02MI8W4qJvOw-AdLlVvtT8RBLWHsqSAZk4UFN_aRMINq8gJ4HvCDDS0RINE9Znt8FaftGSi',
            author: 'Leo Chen',
            timestamp: '5 hours ago',
            content:
                'Just tried the best Brik in Sidi Bou Said! Any other food recommendations? 😋 #Foodie #SidiBouSaid',
            image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ8j0VATfRqaG-otULqrJgetZd4W_Rt4-tiL9keEf26jDlHz-KGVq4AQ9sJkSB0jhDHrYR2NyrCco8EE5JkaxmpNo9SSCbKP_MECBxrwHdco4HpHtCcdkdeR7yfe7ituKccBgDF43NW_Af64LbIzj8mUz77MPmviYHrtCxBv5cBJq86QbxF_Wafi0EY_PKO35N58A0c3F0XqY2ER7qOC-BaGiAzccmva_SHiEZix7HfSp69Gyk6GtT09uKzCgKlm-jVNniAUC_3bgx',
            likes: 876,
            comments: 152,
            shares: 98,
        },
        {
            id: 3,
            avatar:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDtLhciq_lFBPHvm58O5DnFLYMDN14D4zyGIdxyDFnH3t6cx6-DeEmLOvN--79OSxtXG4usVSnTI2Rvnt7xXCuSBtJcgiMspLfBO1OnSW6WPfb1cGC28OzOaJdnTddNDzYlFH94nH8jPNet883dulPUrSo3XRe8FqV60O6w3RpoqaIyKQIdyUO9HEmfqPO48xueDFuj4RD1owqBCQVA1AhdZBcfTDb2lcTNMlNzOhC80dIZvm3Yn5kKgGcj7T4gH-pMwo3Fev2GtHTD',
            author: 'Samantha Jones',
            timestamp: '1 day ago',
            content:
                'The sunset over the Sahara was an unforgettable experience. ✨ #Sahara #Desert #Travel',
            image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuB4aq57dkHkIZLgTgT2LT1VY98eLccTlTOVFgZLu-lj6-6uSQdmOm3EYTdf1fniW5IXsU00UwQgjKBlgT_B7nFVAeChCT5gzq4ffz_Zs5ye7CwqpepEblJK415WlJ60eXUZb9HWwh6LRmFDKPe7qlmz6Rz9ANLMWjLNb-z3i3WFimoc7yWc21M-79HEYmlPtnHqyZwSCgDgw7iyC-hyA-RN9auQpdbrUzH1JP3Z293V6cF4CqIBDG0h9LIjZU8r76Ave89Fz92OFQtS',
            likes: 2500,
            comments: 512,
            shares: 430,
        },
    ];

    return (
        <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-4xl flex-1">
                <main className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
                    {/* Composer */}
                    <div className="flex items-start px-4 py-3 gap-3 @container bg-white dark:bg-dark-slate/20 rounded-xl shadow-sm">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shrink-0 mt-2"
                            style={{
                                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuASshBiRjPOlsuySEyRmg6YPcujRFkgCapLMJzujYna_BxMBQ21EFRLa8zWnSUC18UMxbA1ZF1oOMCD40-0YI9yjkNJMk4JZAxHDKqJYGQasTX9AGeUm4jEW63eF0RRwjHMG-oxRbaQ-GBqDNNG7GfQ-8kUIZWOPxuVsClahBnn2YOilJvyHUTmeIdwzEP4jW2PHMsk0Gu6mOUjG6oXnNITMZyOscBREdQOmB3NEsmczDGDDFZIBLgbqBGfo4RKZytthfNwpmn89q87")`,
                            }}
                        ></div>
                        <div className="flex flex-1 flex-col">
                            <textarea
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-dark-slate dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 focus:border-primary h-auto placeholder:text-gray-400 dark:placeholder:text-gray-500 text-base font-normal leading-normal p-4"
                                placeholder="What's on your mind?"
                            ></textarea>
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center justify-center p-2 text-secondary hover:bg-secondary/10 rounded-full">
                                        <span className="material-symbols-outlined">image</span>
                                    </button>
                                    <button className="flex items-center justify-center p-2 text-secondary hover:bg-secondary/10 rounded-full">
                                        <span className="material-symbols-outlined">videocam</span>
                                    </button>
                                </div>
                                <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-accent text-white text-sm font-bold leading-normal">
                                    <span className="truncate">Post</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Chips */}
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

                    {/* Posts */}
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="flex flex-col gap-2 rounded-xl bg-white dark:bg-dark-slate/20 shadow-sm overflow-hidden"
                        >
                            <div className="p-4 @container">
                                <div className="flex flex-col items-stretch justify-start">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div
                                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                            style={{
                                                backgroundImage: `url("${post.avatar}")`,
                                            }}
                                        ></div>
                                        <div className="flex flex-col">
                                            <p className="text-dark-slate dark:text-white text-lg font-bold leading-tight">
                                                {post.author}
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                                                {post.timestamp}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-dark-slate dark:text-white text-base font-normal leading-normal mb-3">
                                        {post.content}
                                    </p>
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                        style={{
                                            backgroundImage: `url("${post.image}")`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 px-6 pb-4 pt-2 justify-start border-t border-gray-200 dark:border-gray-700">
                                <button
                                    onClick={() => likePost(post.id)}
                                    className="flex items-center justify-center gap-2 group"
                                >
                                    <span
                                        className={`material-symbols-outlined ${likes[post.id]
                                                ? 'text-red-500'
                                                : 'text-gray-500 dark:text-gray-400 group-hover:text-red-500'
                                            }`}
                                    >
                                        {likes[post.id] ? 'favorite' : 'favorite'}
                                    </span>
                                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-red-500 text-sm font-bold leading-normal">
                                        {post.likes}
                                    </p>
                                </button>
                                <button className="flex items-center justify-center gap-2 group">
                                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 group-hover:text-primary">
                                        chat_bubble_outline
                                    </span>
                                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-primary text-sm font-bold leading-normal">
                                        {post.comments}
                                    </p>
                                </button>
                                <button className="flex items-center justify-center gap-2 group">
                                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 group-hover:text-secondary">
                                        share
                                    </span>
                                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-secondary text-sm font-bold leading-normal">
                                        {post.shares}
                                    </p>
                                </button>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
}
