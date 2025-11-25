import PostComposer from './PostComposer';
import FilterChips from './FilterChips';
import PostCard from './PostCard';

export default function CommunityFeed() {
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
                    <PostComposer />

                    <FilterChips />

                    {/* Posts */}
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </main>
            </div>
        </div>
    );
}
