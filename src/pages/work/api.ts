export const getJobs = async ({ city, page = '1' }: { city: string; page: string }) => {
  const response = await fetch(
    '/jobs?' +
      new URLSearchParams({
        city,
        page,
      }),
  );
  return await response.json();
};
