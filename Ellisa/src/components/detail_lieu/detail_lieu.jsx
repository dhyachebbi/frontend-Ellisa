import React from "react";

export default function AmphitheaterPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-light">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

                            {/* HERO */}
                            <div className="@container">
                                <div className="@[480px]:px-4 @[480px]:py-3">
                                    <div
                                        className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[480px]"
                                        data-alt="Breathtaking panoramic view of the Amphitheater of El Jem under a clear blue sky."
                                        style={{
                                            backgroundImage:
                                                `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%),
                        url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwJaKrUBKI_7NGeYH33TZ3HPLPBOVMKVdh337wtBleivt4NFo1mig1FpehfZgGn6J97sVhQuCp1WjCJdzghNE59E7lQbH26KqUmV_0vB-_qekG9DXv_iQXzo0Bv4J4IVshG2bH1j4MvGBbAeaACQoObga6JvfbT4usZDFdYDg0WnZiJ3jFTF67HdBTF7wZHleRWpGq-rZRtAQY2s0TrpmjKeLlMyrAR5wSMPB5RSwkdSsiZxktn6jMfyzcKeBU0VqiEzMzNnshjiDZ")`,
                                        }}
                                    >
                                        <div className="flex justify-center gap-2 p-5">
                                            <div className="size-2 rounded-full bg-white"></div>
                                            <div className="size-2 rounded-full bg-white opacity-50"></div>
                                            <div className="size-2 rounded-full bg-white opacity-50"></div>
                                            <div className="size-2 rounded-full bg-white opacity-50"></div>
                                            <div className="size-2 rounded-full bg-white opacity-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TITLE + FAVORITE BUTTON */}
                            <div className="flex flex-wrap justify-between gap-3 p-4">
                                <div className="flex min-w-72 flex-col gap-3">
                                    <p className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                        Amphitheater of El Jem
                                    </p>
                                    <p className="text-text-secondary dark:text-gray-400 text-base font-normal leading-normal">
                                        El Jem, Tunisia
                                    </p>
                                </div>

                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-secondary/20 text-secondary text-sm font-bold leading-normal tracking-[0.015em] gap-2">
                                    <span className="material-symbols-outlined">favorite_border</span>
                                    <span className="truncate">Favorite</span>
                                </button>
                            </div>

                            {/* DESCRIPTION CARD */}
                            <div className="p-4 @container">
                                <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start shadow-[0_0_15px_rgba(0,0,0,0.05)] bg-white dark:bg-background-dark">
                                    <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 p-6">
                                        <p className="text-text-light dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                                            A jewel of Roman architecture in Africa
                                        </p>
                                        <div className="flex items-end gap-3 justify-between">
                                            <p className="text-text-secondary dark:text-gray-400 text-base font-normal leading-normal">
                                                The Amphitheater of El Jem is one of the most accomplished examples
                                                of Roman amphitheater architecture, almost a copy of the Colosseum
                                                in Rome. Built in the 3rd century AD, it is one of the largest in the world.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TABS */}
                            <div className="pb-3">
                                <div className="flex border-b border-gray-200 dark:border-gray-700 px-4 gap-8">
                                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4" href="#">
                                        <p className="text-sm font-bold leading-normal tracking-[0.015em]">Description</p>
                                    </a>
                                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-text-secondary dark:text-gray-400 pb-[13px] pt-4" href="#">
                                        <p className="text-sm font-bold leading-normal tracking-[0.015em]">History</p>
                                    </a>
                                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-text-secondary dark:text-gray-400 pb-[13px] pt-4" href="#">
                                        <p className="text-sm font-bold leading-normal tracking-[0.015em]">Practical Info</p>
                                    </a>
                                </div>
                            </div>

                            {/* RATING SUMMARY */}
                            <div className="flex flex-wrap gap-x-8 gap-y-6 p-4">
                                <div className="flex flex-col gap-2">
                                    <p className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                        4.8
                                    </p>
                                    <div className="flex gap-0.5 text-secondary">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                            star
                                        </span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                            star
                                        </span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                            star
                                        </span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                            star
                                        </span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                            star_half
                                        </span>
                                    </div>
                                    <p className="text-text-light dark:text-gray-300 text-base font-normal leading-normal">
                                        Based on 2,412 reviews
                                    </p>
                                </div>

                                {/* RATING BARS */}
                                <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-x-4 gap-y-3">
                                    {[
                                        { score: 5, w: "85%", p: "85%" },
                                        { score: 4, w: "10%", p: "10%" },
                                        { score: 3, w: "3%", p: "3%" },
                                        { score: 2, w: "1%", p: "1%" },
                                        { score: 1, w: "1%", p: "1%" },
                                    ].map((r, i) => (
                                        <React.Fragment key={i}>
                                            <p className="text-text-light dark:text-gray-300 text-sm">{r.score}</p>
                                            <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                                                <div className="rounded-full bg-secondary" style={{ width: r.w }}></div>
                                            </div>
                                            <p className="text-text-secondary dark:text-gray-400 text-sm text-right">{r.p}</p>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* REVIEW FORM */}
                            <div className="p-4">
                                <div className="rounded-xl bg-white dark:bg-background-dark p-6 shadow-[0_0_15px_rgba(0,0,0,0.05)]">
                                    <h3 className="text-2xl font-bold text-text-light dark:text-white mb-4">Leave a Review</h3>
                                    <form className="flex flex-col gap-4">

                                        <div>
                                            <label htmlFor="rating" className="block text-base font-medium text-text-secondary dark:text-gray-400 mb-2">
                                                Your rating
                                            </label>
                                            <div className="flex items-center gap-2 group">
                                                {[1, 2, 3, 4, 5].map((i) => (
                                                    <span
                                                        key={i}
                                                        className="rating-star material-symbols-outlined text-4xl text-gray-400 cursor-pointer hover:text-secondary"
                                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                                    >
                                                        star
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="review" className="block text-base font-medium text-text-secondary dark:text-gray-400 mb-2">
                                                Your review
                                            </label>
                                            <textarea
                                                id="review"
                                                name="review"
                                                rows="4"
                                                placeholder="Share your experience..."
                                                className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 text-text-light dark:text-white focus:ring-primary focus:border-primary"
                                            ></textarea>
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                className="flex cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-lg font-bold"
                                            >
                                                Submit Review
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>

                            {/* ACTION BUTTONS */}
                            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <button className="flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl h-14 px-6 bg-primary text-white text-lg font-bold">
                                    <span className="material-symbols-outlined">play_circle</span>
                                    <span>Enter Narrative Mode</span>
                                </button>

                                <button className="flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl h-14 px-6 bg-secondary text-white text-lg font-bold">
                                    <span className="material-symbols-outlined">view_in_ar</span>
                                    <span>Launch AR View</span>
                                </button>
                            </div>

                            {/* GALLERY */}
                            <div className="p-4">
                                <h3 className="text-2xl font-bold text-text-light dark:text-white mb-4">Photo Gallery</h3>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        "https://lh3.googleusercontent.com/aida-public/AB6AXuBt2b2Zx-qIBlrC_qlK5J8EYeJ_qqkXQ50g1jsgo8UNXmREseWEe6myIgauGeymrwCzpnrmKc6FLIL-ft8KTB1KgL1qtov1BcRGEu0FiUMzWAj4LJpf4qlkDlesGzBurb-ShKUHWOPic8SQF82Td2LDwNjyX7VMoIgMgbqMyvVgir2vL7snmV01LHWwLpQGJsStWabCKJQBFaCGH7w8H1FYKPSvx0tw3jp0-X-lXxny98LQP-BtbtROPIOqeUdPGQAjMiSlxJxfHTfV",
                                        "https://lh3.googleusercontent.com/aida-public/AB6AXuA5ngWexTEgVGWHNN0P_HBtHQ8DhdZejRi_SEkJpqqQ2BJe2cbul6uo62dJuPtA_50fcUZEOOfcRyJ_RZrSO7KxqMpsDVfvLgEjMWhO3gjdEUJGjyEGIV6zBjNM33kAr4WUTdmf13UvuKm19pTeSyuGtUrZRXd3aZJ1XaErOZ3nLYs7HRexXLqtQ5PWQv8gLPfiNqSkoaaww6gS7EY8OyN5EFSmgqrCO1lg-ZjpXOWWEOd27SOVJRDXs0zyzNmAqRcFfr3cnRpnWpqY",
                                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAIffj4j1PF1PkjS71Ofbqbd0XZAPEtbH4N--2Rw219wO_FJF8bUy0518gjnY_TwjJPUOqRey3qzIEGoskHc14rtjdgZXFvdHmrggBzEaFil3j5ByEuBsEnm2lkpIpyCOYv-7mZanZtxlim-hrbT7xdTGXp6B6h-0Gp2b6nfVAkDExnhazMoltpHCzOC25y8sIn_qKp6KHVz8wOpuZeSSW-TjLDNtAKT8FAvnS72GKv_UUGM7QJQ59ckFkWBuxDAj-mnqSmx_Qy3xdW",
                                    ].map((src, i) => (
                                        <div
                                            key={i}
                                            className="w-full h-40 bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                            style={{ backgroundImage: `url("${src}")` }}
                                        ></div>
                                    ))}

                                    {/* BUTTON VIEW ALL */}
                                    <div className="w-full h-40 bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                                        <button className="text-primary font-bold">View All</button>
                                    </div>
                                </div>
                            </div>

                            {/* MAP */}
                            <div className="p-4">
                                <h3 className="text-2xl font-bold text-text-light dark:text-white mb-4">
                                    Location
                                </h3>

                                <div className="w-full h-80 rounded-xl bg-gray-300 overflow-hidden">
                                    <img
                                        alt="Map showing the location of the Amphitheater of El Jem."
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-AVVXpvRW0WoYdqKsxaSDG8ku_iTBeyBpfWsuMrNA7ksdQMbH8OwAsaDQJMxiswgHxJNKJnK8JX9-FEGuE4DYAzWgQOkE4xuiXwMof5v7Is2N5jT7KT1uJfQ66UBt8ORUCmuTwaHCjOAYXEDfp2QXGvfii0jfTudbLV4exhzcBEWcP-pbA9xtply9m2WOHiDCNcoIkH3hinZp3LSMAV7c8tsD5Y1JSnJfbdfFxiCMTCUF8Reoaj05zZfFllfPo-hiQl8vWsJMxydb"
                                    />
                                </div>
                            </div>

                            {/* RELATED PLACES */}
                            <div className="p-4">
                                <h3 className="text-2xl font-bold text-text-light dark:text-white mb-4">
                                    Related Places
                                </h3>

                                <div className="flex gap-4 overflow-x-auto pb-4">
                                    {[
                                        {
                                            title: "Carthage",
                                            subtitle: "Ancient city ruins",
                                            img:
                                                "https://lh3.googleusercontent.com/aida-public/AB6AXuALF0veclp2g6apng6rWifKeJ3a1RkAFcJpLgzMiPvFcDwi31KfzgdyCxv5LoZ_HL0YjgVEJmmVXTxXrTCEOxZIEHsQPew9UC14DnFmU1V8-XPm1zbVWbIueOIDyEoBwnF9TAAkFCimtueE0UcD5ZRQZQkmuR-12rlri9ygdicQ_-jkj_sTtLQCzVhwnmAd5HGbKFYmo03WfPr-aJc0vUri-mUuD_0CpAdQFCztAOgJGU2bzcjOA30WGwEIaPnwkt6cRWFhSl0M6j7V",
                                        },
                                        {
                                            title: "Sidi Bou Said",
                                            subtitle: "Iconic blue and white town",
                                            img:
                                                "https://lh3.googleusercontent.com/aida-public/AB6AXuD1Q6nSXKLg0UKgMMaXFvGNIWV1XFzNjsjebERfhtBFUS5pGnBFgHmmARn5cTdlETiiqN_f6B3Lj-VOJeak7-NZxtm5LH0I0kokzNZSQoVIbbhvAm6irJzwYLimSkBuJTp-bl_rQq75BHPt_TloWEjskXALeMNYRDlocFQ4KbGWyg-rDlOJRuhhU6zL8CCfoM1EvdVbi8hYFPLyTSF-GFtD82dwVjg29JcwK4Z4XQi6lIGCMHKLHw5ca3EMiAb6NkY4U04CQdfU5VOR",
                                        },
                                        {
                                            title: "The Medina of Tunis",
                                            subtitle: "Historic heart of the city",
                                            img:
                                                "https://lh3.googleusercontent.com/aida-public/AB6AXuAi8l7VoI_a2oWdO5rYcjg6zUY5PDi9Ms82jNWk1sFP4Ua6QrVtzVRkcgKF8Flg8eJwx12DDvP3ZiDZ9SPftPxgmB43InmRrt6Ynu98bN2-1o_fGO55C4Q9K1VC0bSEOL50uFn10n_iH_Nv_HDBVuVlDIb8GCLNKyzSMd-nT1t8W7uQ8BmUiZ-jlPeH2UxYjwkB0a-4XkGXkXfOmNynxtd7PsTIa_14Em53iIRI6HtTaGbmzvIgN_HC4XFOjXc4la0kW1x9U2fXmytA",
                                        },
                                    ].map((place, index) => (
                                        <div key={index} className="flex-shrink-0 w-72">
                                            <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_0_4px_rgba(0,0,0,0.1)] bg-white dark:bg-background-dark">
                                                <div
                                                    className="w-full h-40 bg-center bg-no-repeat bg-cover rounded-t-xl"
                                                    style={{ backgroundImage: `url("${place.img}")` }}
                                                ></div>

                                                <div className="flex w-full grow flex-col items-stretch justify-center gap-1 p-4">
                                                    <p className="text-text-light dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                                                        {place.title}
                                                    </p>
                                                    <p className="text-text-secondary dark:text-gray-400 text-base">
                                                        {place.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
