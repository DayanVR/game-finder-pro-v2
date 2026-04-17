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
import { useRouter, useSearchParams } from 'next/navigation';

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
  } = sidebarIcons;

  const router = useRouter();
  const searchParams = useSearchParams();

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

  return (
    <ThemeProvider theme={customTheme}>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className="w-72 border-r-[3px] border-(--color-bg-secondary) text-white"
      >
        <SidebarItems>
          <h1 className="mt-12 bg-linear-to-r from-(--color-accent-primary) to-(--color-accent-secondary) bg-clip-text text-2xl font-bold text-transparent">
            Game Finder <span className="text-white">PRO</span>
          </h1>
        </SidebarItems>

        <hr className="my-4" />

        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem
              href="/"
              icon={Home}
              className="text-2xl transition-colors duration-150 hover:cursor-pointer hover:text-(--color-accent-primary)"
            >
              Home
            </SidebarItem>

            <SidebarCollapse label="New Releases" icon={CirclePlus}>
              <SidebarItem
                onClick={() =>
                  updateURLParam('releasedGameDate', 'last-month', router, searchParams)
                }
              >
                Last 30 days
              </SidebarItem>
              <SidebarItem
                onClick={() =>
                  updateURLParam('releasedGameDate', 'last-week', router, searchParams)
                }
              >
                This week
              </SidebarItem>
            </SidebarCollapse>

            <SidebarCollapse label="Top Games" icon={TopGames}>
              <SidebarItem onClick={() => updateURLParam('topGames', 'goty', router, searchParams)}>
                Game of the year
              </SidebarItem>
              <SidebarItem
                onClick={() => updateURLParam('topGames', 'top-50', router, searchParams)}
              >
                All time top 50
              </SidebarItem>
            </SidebarCollapse>

            <SidebarCollapse label="Platforms" icon={Platforms}>
              <SidebarItem
                icon={AllPlatforms}
                onClick={() => updateURLParam('platform', '', router, searchParams)}
              >
                All
              </SidebarItem>
              <SidebarItem
                icon={Windows}
                onClick={() => updateURLParam('platform', '6', router, searchParams)}
                data-default-value={'6'}
              >
                PC
              </SidebarItem>
              <SidebarItem
                icon={Xbox}
                onClick={() => updateURLParam('platform', '2', router, searchParams)}
                data-default-value={'2'}
              >
                Xbox
              </SidebarItem>
              <SidebarItem
                icon={PlayStation}
                onClick={() => updateURLParam('platform', '1', router, searchParams)}
                data-default-value={'1'}
                className="text-yellow-500"
              >
                PlayStation
              </SidebarItem>
              <SidebarItem
                icon={Android}
                onClick={() => updateURLParam('platform', '34', router, searchParams)}
                data-default-value={'34'}
                className="text-red-500"
              >
                Android
              </SidebarItem>
              <SidebarItem
                icon={IOS}
                onClick={() => updateURLParam('platform', '39', router, searchParams)}
                data-default-value={'39'}
              >
                IOS
              </SidebarItem>
            </SidebarCollapse>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </ThemeProvider>
  );
}
