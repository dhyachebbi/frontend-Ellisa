import { useState } from 'react';

export default function PostComposer() {
    const [content, setContent] = useState('');

    return (
        <div className="flex items-start px-4 py-3 gap-3 @container bg-white dark:bg-dark-slate/20 rounded-xl shadow-sm">
            <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shrink-0 mt-2"
                data-alt="User avatar"
                style={{
                    backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASshBiRjPOlsuySEyRmg6YPcujRFkgCapLMJzujYna_BxMBQ21EFRLa8zWnSUC18UMxbA1ZF1oOMCD40-0YI9yjkNJMk4JZAxHDKqJYGQasTX9AGeUm4jEW63eF0RRwjHMG-oxRbaQ-GBqDNNG7GfQ-8kUIZWOPxuVsClahBnn2YOilJvyHUTmeIdwzEP4jW2PHMsk0Gu6mOUjG6oXnNITMZyOscBREdQOmB3NEsmczDGDDFZIBLgbqBGfo4RKZytthfNwpmn89q87")',
                }}
            ></div>
            <div className="flex flex-1 flex-col">
                <textarea
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-dark-slate dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 focus:border-primary h-auto placeholder:text-gray-400 dark:placeholder:text-gray-500 text-base font-normal leading-normal p-4"
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
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
    );
}
