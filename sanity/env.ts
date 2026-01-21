function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}

export const projectId = assertValue(
  import.meta.env.SANITY_STUDIO_PROJECT_ID,
  'Missing SANITY_STUDIO_PROJECT_ID'
)

export const dataset = assertValue(
  import.meta.env.SANITY_STUDIO_DATASET,
  'Missing SANITY_STUDIO_DATASET'
)

export const apiVersion = '2026-01-21'
