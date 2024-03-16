export const getJobs = async ({
  city,
  isForDisabled = false,
}: {
  city: string;
  isForDisabled: boolean;
}) => {
  const response = await fetch(
    '/jobs?' +
      new URLSearchParams({
        city,
        isForDisabled: String(isForDisabled),
      }),
  );
  return await response.json();
};
