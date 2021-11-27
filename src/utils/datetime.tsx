const unitsInMs = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000
};

type TimeUnit = keyof typeof unitsInMs;

export const getRelativeTime = (date: Date) => {
  let elapsed = date.getTime() - Date.now();
  // Deliberately reduce precision to 1 minute
  if (Math.abs(elapsed) < 60000) elapsed = 0;
  const unit = (Object.keys(unitsInMs).find(u => Math.abs(elapsed) >= unitsInMs[u as TimeUnit]) ||
    'second') as TimeUnit;
  return new Intl.RelativeTimeFormat(
    (window as any).config && (window as any).config.locale
      ? (window as any).config.locale.replace('_', '-')
      : 'en',
    {
      style: 'long',
      numeric: 'auto'
    }
  ).format(Math.round(elapsed / unitsInMs[unit]), unit);
};
