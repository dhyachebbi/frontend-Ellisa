export default function Header({ activePage, onPageChange }) {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-10 py-3">
      <div className="flex items-center gap-4 text-dark-slate dark:text-white">
        <div className="text-primary">
          <span className="material-symbols-outlined text-4xl">travel_explore</span>
        </div>
        <h2 className="text-dark-slate dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
          Guide.ai
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <button className="text-dark-slate dark:text-white text-base font-medium leading-normal hover:text-primary transition-colors">
            Home
          </button>

          <button
            onClick={() => onPageChange('details')}
            className={`text-base font-medium leading-normal transition-colors ${activePage === 'details'
              ? 'text-primary dark:text-primary font-bold'
              : 'text-dark-slate dark:text-white hover:text-primary'
              }`}
          >
            Map
          </button>
          <button
            onClick={() => onPageChange('community')}
            className={`text-base font-medium leading-normal transition-colors ${activePage === 'community'
              ? 'text-primary dark:text-primary font-bold'
              : 'text-dark-slate dark:text-white hover:text-primary'
              }`}
          >
            Community
          </button>
          <button
            onClick={() => onPageChange('profile')}
            className={`text-base font-medium leading-normal transition-colors ${activePage === 'profile'
              ? 'text-primary dark:text-primary font-bold'
              : 'text-dark-slate dark:text-white hover:text-primary'
              }`}
          >
            Profile
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Create Post</span>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-gray-100 dark:bg-gray-800 text-dark-slate dark:text-white">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="User avatar"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg79qIgh_hGLnuKBfD2X84LL4YiFBR_1RoM_hHFjh0G0z2gthsib-lUPtPYyl46sm7GFSwI0LHJlJPAecTyhPLXUEX2R7m2uPFyq9I4WpJrT1aew88kakh3_N-4shIvZwpsgqtHvKVqf1l4MIq5MZV22cP2PcxWiB4Yaq2SgObWIH3MlKkcpES8Ts3cC3ZiokXzcyiATFqsanWYV6eDhxtZ4l82WWmnx6je_7Kx56gri9fUb8z8WzA2ApGrGSapTb_zLtj1GEgf8gz")',
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}
