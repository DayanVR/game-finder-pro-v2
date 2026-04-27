'use client';

import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  ThemeProvider,
  createTheme,
} from 'flowbite-react';
import { sidebarIcons } from './sidebarIcons';
import { updateURLParam } from '../libs/functions';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Gamepad } from '../svg/Gamepad';

export default function SidePanel() {
  const {
    Home,
    CirclePlus,
    TopGames,
    Platforms,
    AllPlatforms,
    PlayStation,
    Xbox,
    Android,
    IOS,
    Windows,
    Nintendo,
  } = sidebarIcons;
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const platformParam = searchParams.get('platform');
  const topGamesParam = searchParams.get('topGames');
  const releasedGameDateParam = searchParams.get('releasedGameDate');

  const customTheme = createTheme({
    sidebar: {
      root: {
        inner: 'dark:bg-transparent',
      },
      collapse: {
        label: {
          base: 'text-2xl font-medium hover:cursor-pointer',
        },
        icon: {
          base: 'size-8',
        },
      },
      item: {
        base: 'text-xl font-medium ',
        collapsed: {
          insideCollapse:
            'hover:text-(--color-accent-primary) hover:cursor-pointer transition-colors duration-150',
        },
        icon: {
          base: 'size-8',
        },
      },
      itemGroup: {
        base: 'flex flex-col gap-1.5 text-xl',
      },
    },
  });

  const platformsList = [
    { name: 'All Platforms', id: '', icon: AllPlatforms },
    { name: 'PC', id: '6', icon: Windows },
    { name: 'Xbox', id: '2', icon: Xbox },
    { name: 'Nintendo', id: '5', icon: Nintendo },
    { name: 'PlayStation', id: '1', icon: PlayStation },
    { name: 'Android', id: '34', icon: Android },
    { name: 'IOS', id: '39', icon: IOS },
  ];

  return (
    <ThemeProvider theme={customTheme}>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className="w-72 border-r-[3px] border-(--color-bg-secondary) text-white"
      >
        <SidebarItems>
          <h1 className="mt-12 flex items-center justify-center text-2xl font-bold text-white">
            <Gamepad className="mr-2 size-10 rounded-lg bg-(--color-accent-primary)/20 p-1.5 text-(--color-accent-primary)" />{' '}
            GameFinder
            <span className="text-(--color-accent-primary)">PRO</span>
          </h1>
        </SidebarItems>

        <hr className="my-4" />

        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem
              href="/"
              icon={Home}
              className="text-2xl transition-colors duration-150 hover:cursor-pointer"
            >
              Home
            </SidebarItem>

            <SidebarCollapse label="New Releases" icon={CirclePlus}>
              <SidebarItem
                className={
                  releasedGameDateParam === 'last-month'
                    ? 'bg-(--color-accent-primary)/20! text-(--color-accent-primary)!'
                    : 'text-white/60! hover:text-white!'
                }
                onClick={() =>
                  updateURLParam('releasedGameDate', 'last-month', router, searchParams, pathname)
                }
              >
                Last 30 days
              </SidebarItem>
              <SidebarItem
                className={
                  releasedGameDateParam === 'last-week'
                    ? 'bg-(--color-accent-primary)/20! text-(--color-accent-primary)!'
                    : 'text-white/60! hover:text-white!'
                }
                onClick={() =>
                  updateURLParam('releasedGameDate', 'last-week', router, searchParams, pathname)
                }
              >
                This week
              </SidebarItem>
            </SidebarCollapse>

            <SidebarCollapse label="Top Games" icon={TopGames}>
              <SidebarItem
                className={
                  topGamesParam === 'goty'
                    ? 'bg-(--color-accent-primary)/20! text-(--color-accent-primary)!'
                    : 'text-white/60! hover:text-white!'
                }
                onClick={() => updateURLParam('topGames', 'goty', router, searchParams, pathname)}
              >
                Game of the year
              </SidebarItem>
              <SidebarItem
                className={
                  topGamesParam === 'top-50'
                    ? 'bg-(--color-accent-primary)/20! text-(--color-accent-primary)!'
                    : 'text-white/60! hover:text-white!'
                }
                onClick={() => updateURLParam('topGames', 'top-50', router, searchParams, pathname)}
              >
                All time top 50
              </SidebarItem>
            </SidebarCollapse>

            <SidebarCollapse label="Platforms" icon={Platforms}>
              {platformsList.map((platform) => (
                <SidebarItem
                  className={
                    platformParam === platform.id
                      ? 'bg-(--color-accent-primary)/20! text-(--color-accent-primary)!'
                      : 'text-white/60! hover:text-white!'
                  }
                  key={platform.id}
                  icon={platform.icon}
                  onClick={() =>
                    updateURLParam('platform', platform.id, router, searchParams, pathname)
                  }
                  data-default-value={platform.id}
                >
                  {platform.name}
                </SidebarItem>
              ))}
            </SidebarCollapse>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </ThemeProvider>
  );
}
