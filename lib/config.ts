const toNumber = (value: string | undefined, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const config = {
  useMockMode: process.env.USE_MOCK_MODE !== 'false',
  mockDelayMs: toNumber(process.env.MOCK_DELAY_MS, 300),
  databaseUrl: process.env.DATABASE_URL || 'file:./prisma/dev.db',
  nextAuthSecret: process.env.NEXTAUTH_SECRET || 'dev-secret-change-in-production',
  nextAuthUrl: process.env.NEXTAUTH_URL || 'http://localhost:3000'
};
