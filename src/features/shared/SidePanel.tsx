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

import Home from '@/features/svg/sidebar/home';
import CirclePlus from '@/features/svg/sidebar/circlePlus';
import TopGames from '@/features/svg/sidebar/topGames';
import Platforms from '@/features/svg/sidebar/platforms';
import AllPlatforms from '@/features/svg/sidebar/platforms/allPlatforms';
import PlayStation from '@/features/svg/sidebar/platforms/playstation';
import Xbox from '@/features/svg/sidebar/platforms/xbox';
import Android from '@/features/svg/sidebar/platforms/android';
import IOS from '@/features/svg/sidebar/platforms/ios';
import Windows from '@/features/svg/sidebar/platforms/windows';

export default function SidePanel() {
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
        className="fixed top-0 left-0 h-screen w-72 border-r-[3px] border-(--color-bg-secondary) text-white"
      >
        <SidebarItems>
          <h1 className="mt-12 bg-linear-to-r from-(--color-accent-primary) to-(--color-accent-secondary) bg-clip-text text-2xl font-bold text-transparent">
            Game Finder <span className="text-white">PRO</span>
          </h1>
        </SidebarItems>

        <hr className="my-4" />

        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="/" icon={Home} className="text-2xl hover:text-(--color-accent-primary) hover:cursor-pointer transition-colors duration-150">
              Home
            </SidebarItem>

            <SidebarCollapse label="New releases" icon={CirclePlus}>
              <SidebarItem href="#">Last 30 days</SidebarItem>
              <SidebarItem>This week</SidebarItem>
            </SidebarCollapse>

            <SidebarCollapse label="Top games" icon={TopGames}>
              <SidebarItem href="#">Game of the year</SidebarItem>
              <SidebarItem>All time top 50</SidebarItem>
            </SidebarCollapse>

            <SidebarCollapse label="Platforms" icon={Platforms}>
              <SidebarItem icon={AllPlatforms}>All</SidebarItem>
              <SidebarItem icon={Windows}>PC</SidebarItem>
              <SidebarItem icon={Xbox}>Xbox</SidebarItem>
              <SidebarItem icon={PlayStation} className="text-yellow-500">
                PlayStation
              </SidebarItem>
              <SidebarItem icon={Android} className="text-red-500">
                Android
              </SidebarItem>
              <SidebarItem icon={IOS}>IOS</SidebarItem>
            </SidebarCollapse>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </ThemeProvider>
  );
}
