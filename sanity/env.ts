function assertValue<T>(v: T | undefined, message: string): T {
  if (!v) throw new Error(message)
  return v
}

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing NEXT_PUBLIC_SANITY_DATASET'
)

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-21'
