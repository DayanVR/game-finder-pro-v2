import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const updateURLParam = (
  key: string,
  value: string,
  router: AppRouterInstance,
  searchParams: URLSearchParams
) => {
  const params = new URLSearchParams(searchParams.toString());
  const currentValue = params.get(key);

  if (currentValue === value) {
    params.delete(key);
  } else if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }
  router.push(`?${params.toString()}`);
};

export const handleDateChange = (releasedGameDate: string | undefined) => {
  const currentDate = new Date();
  let days = 1;
  if (releasedGameDate === 'last-month') {
    days = 30;
  } else if (releasedGameDate === 'last-week') {
    days = 7;
  }
  const thirtyDaysAgo = new Date(currentDate.getTime() - days * 24 * 60 * 60 * 1000);
  const thirtyDaysAgoTimestamp = Math.floor(thirtyDaysAgo.getTime() / 1000);

  return thirtyDaysAgoTimestamp;
};

export const formattedDate = (timestamp: number | null | undefined) => {
  if (timestamp === null || timestamp === undefined) {
    return 'Date not found';
  } else {
    const date = new Date(timestamp * 1000);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }
};

// export const HandleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//   const { setPage, setOffset, setSortBy, setGotyEditions } = useGameStore();
//   setPage(1);
//   setOffset(0);
//   setSortBy(e.target.value);
//   setGotyEditions(false);
// };

// export const handlePlatformChange = (platformId: string) => {
//   const { setPlatformId, setPage, setOffset, setGotyEditions } = useGameStore.getState();
//   setPage(1);
//   setOffset(0);
//   setPlatformId(platformId);
//   setGotyEditions(false);
// };

// export const handleDateChange = (dateValue: string) => {
//   const { setReleasedGameDate, setPage, setOffset, setGotyEditions } = useGameStore.getState();
//   setPage(1);
//   setOffset(0);
//   setReleasedGameDate(dateValue);
//   setGotyEditions(false);
// };

// export const useHandleTopChange = () => {
//   const router = useRouter();

//   return (topValue: string) => {
//     const { setSortBy, setPage, setOffset, setGotyEditions } = useGameStore.getState();

//     setPage(1);
//     setOffset(0);
//     setSortBy(topValue);

//     if (topValue === 'goty') {
//       setGotyEditions(true);
//       router.push('?goty');
//     } else {
//       setGotyEditions(false);
//     }
//   };
// };
