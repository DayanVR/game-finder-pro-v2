'use client';

import { Pagination } from 'flowbite-react';
import { useState } from 'react';
import type { PaginationProps } from 'flowbite-react';
import { updateURLParam } from '../libs/functions';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const paginationTheme: PaginationProps['theme'] = {
  layout: {
    table: {
      base: 'text-sm',
      span: 'font-semibold',
    },
  },
  pages: {
    base: 'xs:mt-0 mt-2 inline-flex items-center -space-x-px',
    showIcon: 'inline-flex',
    previous: {
      base: 'ml-0 !bg-(--color-bg-secondary) rounded-l-lg border bg-card px-3 py-2 leading-tight hover:!bg-(--color-text-secondary)/20 hover:!text-white transition-colors',
      icon: 'h-5 w-5',
    },
    next: {
      base: 'rounded-r-lg !bg-(--color-bg-secondary) hover:!bg-(--color-text-secondary)/20 hover:!text-white border px-3 py-2 leading-tight transition-colors',
      icon: 'h-5 w-5',
    },
    selector: {
      base: 'w-12 !bg-(--color-bg-secondary) hover:!bg-white/15 py-2 leading-tight transition-colors',
      active:
        '!bg-(--color-accent-primary)/90 text-primary-foreground hover:!bg-(--color-accent-primary)/90 hover:text-primary-foreground',
      disabled: 'cursor-not-allowed opacity-50',
    },
  },
};

export function PaginationComponent({ totalPages }: { totalPages: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentPage = Number(searchParams.get('page')) || 1;

  const onPageChange = (page: number) => {
    updateURLParam('page', page.toString(), router, searchParams, pathname);
  };

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        theme={paginationTheme}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}
