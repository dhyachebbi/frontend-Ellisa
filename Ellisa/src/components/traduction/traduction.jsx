import React from "react";

const InstantTranslation = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark overflow-x-hidden p-4 sm:p-6 md:p-8">
      
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background-light dark:from-primary/20 dark:via-secondary/20 dark:to-background-dark"></div>
      </div>

      {/* Main card */}
      <div className="relative flex h-full w-full max-w-4xl flex-col gap-8 rounded-xl bg-white/50 dark:bg-background-dark/50 backdrop-blur-xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-primary/10 dark:shadow-primary/20">

        {/* Title */}
        <div className="text-center">
          <p className="text-text-color dark:text-white text-4xl sm:text-5xl font-bold tracking-tight font-display">
            Speak Like a Local
          </p>
          <p className="text-text-color/70 dark:text-white/70 text-lg mt-2">
            Instant Translation with Guide.ai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* LEFT section */}
          <div className="flex flex-col gap-4">

            {/* Translate From */}
            <label className="flex flex-col w-full">
              <p className="text-text-color dark:text-white font-medium pb-2 font-display">
                Translate From
              </p>

              <div className="relative">
                <select className="form-select w-full rounded-lg text-text-color dark:text-white focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-secondary/50 dark:bg-secondary/20 h-14 pl-4 pr-10 appearance-none">
                  <option value="english" defaultValue>English</option>
                  <option value="arabic">Arabic</option>
                  <option value="french">French</option>
                </select>

                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-color/60 dark:text-white/60">
                  expand_more
                </span>
              </div>
            </label>

            {/* Input text area */}
            <div className="relative">
              <textarea
                className="w-full rounded-xl text-text-color dark:text-white focus:ring-2 focus:ring-primary/50 bg-secondary/50 dark:bg-secondary/20 min-h-48 p-4 placeholder:text-text-color/50 dark:placeholder:text-white/50"
                placeholder="Type or speak here..."
              ></textarea>

              <button className="absolute top-3 right-3 text-text-color/60 dark:text-white/60 hover:text-text-color dark:hover:text-white transition-colors">
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Speak Button */}
            <button className="flex items-center justify-center h-14 bg-primary text-white rounded-xl text-lg font-bold gap-3 hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-2xl">mic</span>
              Speak
            </button>
          </div>

          {/* RIGHT section */}
          <div className="flex flex-col gap-4">

            {/* Translate To */}
            <label className="flex flex-col w-full">
              <p className="text-text-color dark:text-white font-medium pb-2 font-display">
                Translate To
              </p>

              <div className="relative">
                <select className="form-select w-full rounded-lg text-text-color dark:text-white focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-secondary/50 dark:bg-secondary/20 h-14 pl-4 pr-10 appearance-none">
                  <option value="arabic" defaultValue>Arabic</option>
                  <option value="english">English</option>
                  <option value="french">French</option>
                </select>

                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-color/60 dark:text-white/60">
                  expand_more
                </span>
              </div>
            </label>

            {/* Output text */}
            <div className="flex flex-col justify-between w-full min-h-48 rounded-xl bg-secondary/50 dark:bg-secondary/20 p-4">
              <p className="text-text-color/50 dark:text-white/50">
                Translation will appear here...
              </p>

              <div className="flex justify-end gap-2 mt-auto pt-4">
                <button className="w-10 h-10 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-text-color/80 dark:text-white/80 hover:text-primary">
                  <span className="material-symbols-outlined text-2xl">
                    volume_up
                  </span>
                </button>

                <button className="w-10 h-10 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-text-color/80 dark:text-white/80 hover:text-primary">
                  <span className="material-symbols-outlined text-2xl">
                    content_copy
                  </span>
                </button>
              </div>
            </div>

            {/* Swap Button */}
            <button className="flex items-center justify-center h-14 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-color dark:text-white text-lg font-bold gap-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <span className="material-symbols-outlined text-2xl text-primary">
                swap_horiz
              </span>
              Swap Languages
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantTranslation;
