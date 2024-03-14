export const getJobs = async ({ city, page = '1' }: { city: string; page: string }) => {
  const response = await fetch(
    'http://demo-app-back.onrender.com/jobs?' +
      new URLSearchParams({
        city,
        page,
      }),
  );
  return await response.json();
};
