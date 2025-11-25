/**
 * RANKING & PROFILE PAGE
 * Combined page with Ranking, Badges, and User Profile sections
 * Uses tabs to organize Ranking and Profile views
 */

import { useState } from 'react';

// ============================================================================
// MAIN COMPONENT: RankingAndProfilePage
// ============================================================================
export function RankingPage() {
  const [mainTab, setMainTab] = useState('ranking'); // 'ranking' or 'profile'
  const [leaderboardType, setLeaderboardType] = useState('global');
  const [profileTab, setProfileTab] = useState('preferences');
  const [notifications, setNotifications] = useState(true);
  const [arMode, setArMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const leaderboardData = [
    { rank: 1, name: 'Salma', points: 12000 },
    { rank: 2, name: 'Khalil', points: 11500 },
    { rank: 3, name: 'Amine (You)', points: 10800, isYou: true },
    { rank: 4, name: 'Yasmine', points: 10200 },
    { rank: 5, name: 'Mehdi', points: 9800 },
  ];

  const badges = [
    {
      id: 1,
      name: 'Carthage Conqueror',
      icon: 'castle',
      description: 'Visit all major sites in Carthage.',
      earned: true,
    },
    {
      id: 2,
      name: 'Medina Master',
      icon: 'storefront',
      description: 'Explore the historic medinas of Tunis, Sousse, and Kairouan.',
      earned: true,
    },
    {
      id: 3,
      name: 'Sahara Survivor',
      icon: 'wb_sunny',
      description: 'Complete a camel trek in the Sahara desert.',
      earned: false,
    },
    {
      id: 4,
      name: 'El Djem Enthusiast',
      icon: 'theater_comedy',
      description: 'Visit the Roman amphitheater of El Djem.',
      earned: false,
    },
    {
      id: 5,
      name: 'Hidden Gem Hunter',
      icon: 'diamond',
      description: 'Discover 5 off-the-beaten-path locations.',
      earned: false,
    },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-col flex-1 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-5">
          <div className="flex w-full flex-col gap-8">

            {/* Main Tabs: Ranking vs Profile */}
            <div className="flex gap-4 border-b border-border-light dark:border-border-dark">
              <button
                onClick={() => setMainTab('ranking')}
                className={`pb-3 px-4 font-bold text-sm transition-colors ${
                  mainTab === 'ranking'
                    ? 'border-b-[3px] border-b-primary text-primary'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Ranking & Badges
              </button>
              <button
                onClick={() => setMainTab('profile')}
                className={`pb-3 px-4 font-bold text-sm transition-colors ${
                  mainTab === 'profile'
                    ? 'border-b-[3px] border-b-primary text-primary'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                My Profile
              </button>
            </div>

            {/* ========== RANKING TAB ========== */}
            {mainTab === 'ranking' && (
              <div className="flex w-full flex-col gap-8">
                {/* User Profile Summary */}
                <div className="flex p-4 @container bg-white dark:bg-background-dark rounded-xl shadow-sm">
                  <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                    <div className="flex gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAF1XY9Tr2WJEljjI7xQm2OqD8MY4v7XPVQDX1Md4gWAhIuFWSTPYo_hQAgVxZxojZrEwuX2cDNBHTyfaN2N1MJ_PcI9jRB88kIQgySQrKaW-K8-ef6PAPTxM6jpGoOm4kJSVi5uf59X092Evvp3WYKU_e8bjPf-3LtsTn1w_0gn3keb1-_uSUxkwFDBMyG7a_B4j8TuMur_BH0n0d382tVHBJDwSwsi7bWRcJm3hIY4A83Lgsu1MMGwRl2-10u-xAYErV6kCovMHG9")',
                        }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p className="text-text-dark dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
                          Amine
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                          Seasoned Explorer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="flex flex-col gap-3 p-4 bg-white dark:bg-background-dark rounded-xl shadow-sm">
                  <div className="flex gap-6 justify-between">
                    <p className="text-text-dark dark:text-white text-base font-medium leading-normal">
                      Next Rank: Cultural Connoisseur
                    </p>
                  </div>
                  <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-4">
                    <div className="h-4 rounded-full bg-secondary" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-right text-sm text-gray-500 dark:text-gray-400">
                    10,800 / 15,000 Points
                  </p>
                </div>

                {/* Leaderboard */}
                <div className="flex flex-col gap-4">
                  <div className="flex px-4 py-3">
                    <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 p-1">
                      <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:shadow-lg text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal transition-all duration-300">
                        <span className="truncate">My Rank</span>
                        <input
                          className="invisible w-0"
                          name="leaderboard-toggle"
                          type="radio"
                          value="my-rank"
                          checked={leaderboardType === 'my-rank'}
                          onChange={(e) => setLeaderboardType(e.target.value)}
                        />
                      </label>
                      <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:shadow-lg text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal transition-all duration-300">
                        <span className="truncate">Global Leaderboard</span>
                        <input
                          className="invisible w-0"
                          name="leaderboard-toggle"
                          type="radio"
                          value="global"
                          checked={leaderboardType === 'global'}
                          onChange={(e) => setLeaderboardType(e.target.value)}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="px-4 py-3 @container">
                    <div className="flex overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-background-dark">
                      <table className="flex-1 w-full">
                        <thead>
                          <tr className="bg-white dark:bg-background-dark">
                            <th className="px-4 py-3 text-left text-text-dark dark:text-white w-[100px] text-sm font-medium leading-normal">
                              Rank
                            </th>
                            <th className="px-4 py-3 text-left text-text-dark dark:text-white w-[400px] text-sm font-medium leading-normal">
                              Traveler
                            </th>
                            <th className="px-4 py-3 text-left text-text-dark dark:text-white w-[200px] text-sm font-medium leading-normal">
                              Points
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {leaderboardData.map((entry) => (
                            <tr
                              key={entry.rank}
                              className={`border-t border-t-border-light dark:border-t-border-dark ${
                                entry.isYou ? 'bg-primary/10' : ''
                              }`}
                            >
                              <td
                                className={`h-[72px] px-4 py-2 w-[100px] text-sm font-normal leading-normal ${
                                  entry.isYou
                                    ? 'text-primary font-bold'
                                    : 'text-gray-500 dark:text-gray-400'
                                }`}
                              >
                                {entry.rank}
                              </td>
                              <td
                                className={`h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal ${
                                  entry.isYou
                                    ? 'text-primary font-bold'
                                    : 'text-text-dark dark:text-white'
                                }`}
                              >
                                {entry.name}
                              </td>
                              <td
                                className={`h-[72px] px-4 py-2 w-[200px] text-sm font-normal leading-normal ${
                                  entry.isYou
                                    ? 'text-primary font-bold'
                                    : 'text-gray-500 dark:text-gray-400'
                                }`}
                              >
                                {entry.points}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Badge Collection */}
                <div className="flex flex-col gap-4 p-4 bg-white dark:bg-background-dark rounded-xl shadow-sm">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-text-dark dark:text-white">Your Badge Collection</h3>
                    <div className="flex gap-2">
                      <select className="rounded-lg border border-border-light dark:border-border-dark bg-transparent focus:ring-primary focus:border-primary text-sm text-text-dark dark:text-white">
                        <option>All Categories</option>
                        <option>Historical Sites</option>
                        <option>Cultural Experiences</option>
                        <option>Hidden Gems</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {badges.map((badge) => (
                      <div
                        key={badge.id}
                        className={`group relative flex flex-col items-center text-center gap-2 p-4 rounded-xl transition-transform duration-300 hover:scale-105 ${
                          badge.earned
                            ? 'bg-gray-50 dark:bg-gray-800'
                            : 'bg-gray-100 dark:bg-gray-700/50 grayscale'
                        }`}
                      >
                        <div
                          className={`w-20 h-20 rounded-full flex items-center justify-center text-white ${
                            badge.earned ? 'bg-secondary' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        >
                          <span className="material-symbols-outlined !text-5xl">
                            {badge.icon}
                          </span>
                        </div>
                        <p
                          className={`font-semibold text-sm ${
                            badge.earned
                              ? 'text-text-dark dark:text-white'
                              : 'text-gray-400 dark:text-gray-500'
                          }`}
                        >
                          {badge.name}
                        </p>
                        <div className="absolute inset-0 bg-black/70 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-xs p-2">{badge.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="py-6 flex justify-center">
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg text-base shadow-lg transition-all duration-300 flex items-center gap-2">
                    <span className="material-symbols-outlined">explore</span>
                    Discover New Sites
                  </button>
                </div>
              </div>
            )}

            {/* ========== PROFILE TAB ========== */}
            {mainTab === 'profile' && (
              <div className="flex flex-col gap-8">
                {/* Profile Header */}
                <div className="flex p-4 @container">
                  <div className="flex w-full flex-col gap-4 items-center">
                    <div className="flex gap-4 flex-col items-center">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCv6js3m_iKnghHm0s2WSIk8WSYQ5Ywxgy2gZNuQDWh-qwUMGNxRS2_QL2Uz4CuK_-yn0JwhPfwVjSZmpQKSNqLvKT-VGzUvlNCoC_91rKYtcthFmv6RLaL4Evbr8GIaSWcDq9RrJbBVyeh945HVuS5-OvCRjHdRWijd8g9GQQ5RELPbaKjlaotODZmuu5az8iWAk82UdPPkD-Hor2mQqp5mUKSuJIfgKiA1jmTn3UfvpoEgEDNO-mvIl3nT8-8QTNS_NHjGNfKNVzr")',
                        }}
                      ></div>
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-deep-blue dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                          Welcome back, Alex Doe!
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal text-center">
                          Member Since January 2023
                        </p>
                      </div>
                    </div>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-light-gray dark:bg-gray-800 text-deep-blue dark:text-white text-sm font-bold leading-normal tracking-[0.015em] w-auto">
                      <span className="material-symbols-outlined mr-2">edit</span>
                      <span className="truncate">Edit Profile</span>
                    </button>
                  </div>
                </div>

                {/* Profile Sub-Tabs */}
                <div className="pb-3">
                  <div className="flex border-b border-light-gray dark:border-gray-700 px-4 justify-between">
                    <button
                      onClick={() => setProfileTab('preferences')}
                      className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 transition-colors ${
                        profileTab === 'preferences'
                          ? 'border-b-primary text-primary'
                          : 'border-b-transparent text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">Preferences</p>
                    </button>
                    <button
                      onClick={() => setProfileTab('badges')}
                      className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 transition-colors ${
                        profileTab === 'badges'
                          ? 'border-b-primary text-primary'
                          : 'border-b-transparent text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">Badges</p>
                    </button>
                    <button
                      onClick={() => setProfileTab('history')}
                      className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 transition-colors ${
                        profileTab === 'history'
                          ? 'border-b-primary text-primary'
                          : 'border-b-transparent text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">History</p>
                    </button>
                  </div>
                </div>

                {/* Preferences Tab */}
                {profileTab === 'preferences' && (
                  <div className="p-4 space-y-4">
                    {/* Notifications */}
                    <div className="flex items-center gap-4 bg-background-light dark:bg-background-dark px-4 min-h-14 justify-between rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="text-deep-blue dark:text-white flex items-center justify-center rounded-lg bg-light-gray dark:bg-gray-800 shrink-0 size-10">
                          <span className="material-symbols-outlined">notifications</span>
                        </div>
                        <p className="text-deep-blue dark:text-white text-base font-normal leading-normal flex-1 truncate">
                          Notifications
                        </p>
                      </div>
                      <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-light-gray dark:bg-gray-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary">
                        <div className="h-full w-[27px] rounded-full bg-white"
                          style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px'}}
                        ></div>
                        <input
                          checked={notifications}
                          onChange={() => setNotifications(!notifications)}
                          className="invisible absolute"
                          type="checkbox"
                        />
                      </label>
                    </div>

                    {/* Language */}
                    <div className="flex items-center gap-4 bg-background-light dark:bg-background-dark px-4 min-h-14 justify-between rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="text-deep-blue dark:text-white flex items-center justify-center rounded-lg bg-light-gray dark:bg-gray-800 shrink-0 size-10">
                          <span className="material-symbols-outlined">language</span>
                        </div>
                        <p className="text-deep-blue dark:text-white text-base font-normal leading-normal flex-1 truncate">
                          Language
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-gray-500 dark:text-gray-400 text-base">English</p>
                        <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">
                          arrow_forward_ios
                        </span>
                      </div>
                    </div>

                    {/* AR Mode */}
                    <div className="flex items-center gap-4 bg-background-light dark:bg-background-dark px-4 min-h-14 justify-between rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="text-deep-blue dark:text-white flex items-center justify-center rounded-lg bg-light-gray dark:bg-gray-800 shrink-0 size-10">
                          <span className="material-symbols-outlined">view_in_ar</span>
                        </div>
                        <p className="text-deep-blue dark:text-white text-base font-normal leading-normal flex-1 truncate">
                          AR Mode
                        </p>
                      </div>
                      <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-light-gray dark:bg-gray-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary">
                        <div className="h-full w-[27px] rounded-full bg-white"
                          style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px'}}
                        ></div>
                        <input
                          checked={arMode}
                          onChange={() => setArMode(!arMode)}
                          className="invisible absolute"
                          type="checkbox"
                        />
                      </label>
                    </div>

                    {/* Dark Mode */}
                    <div className="flex items-center gap-4 bg-background-light dark:bg-background-dark px-4 min-h-14 justify-between rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="text-deep-blue dark:text-white flex items-center justify-center rounded-lg bg-light-gray dark:bg-gray-800 shrink-0 size-10">
                          <span className="material-symbols-outlined">dark_mode</span>
                        </div>
                        <p className="text-deep-blue dark:text-white text-base font-normal leading-normal flex-1 truncate">
                          Dark Mode
                        </p>
                      </div>
                      <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-light-gray dark:bg-gray-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary">
                        <div className="h-full w-[27px] rounded-full bg-white"
                          style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px'}}
                        ></div>
                        <input
                          checked={darkMode}
                          onChange={handleDarkModeToggle}
                          className="invisible absolute"
                          type="checkbox"
                        />
                      </label>
                    </div>
                  </div>
                )}

                {/* Badges Tab */}
                {profileTab === 'badges' && (
                  <div className="p-4">
                    <p className="text-deep-blue dark:text-white text-center py-8">
                      Your badges will appear here
                    </p>
                  </div>
                )}

                {/* History Tab */}
                {profileTab === 'history' && (
                  <div className="p-4">
                    <p className="text-deep-blue dark:text-white text-center py-8">
                      Your activity history will appear here
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}

// Alias for UserProfilePage (keep export for compatibility)
export function UserProfilePage() {
  return <RankingPage />;
}

// ============================================================================
// EXPORT SUMMARY
// ============================================================================
// RankingPage: Combined main page with two tabs:
//   - Ranking & Badges: Shows profile summary, progress bar, leaderboard, badges
//   - My Profile: User settings with preferences, badges, and history tabs
// UserProfilePage: Alias for backward compatibility
// ============================================================================
