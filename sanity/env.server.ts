function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const projectId = requireEnv("NEXT_PUBLIC_SANITY_PROJECT_ID");
export const dataset = requireEnv("NEXT_PUBLIC_SANITY_DATASET");

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
