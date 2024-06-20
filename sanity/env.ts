export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-06-18'

export const dataset = assertValue(
  'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  'kto9zoq6',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = 'skfx1HM6eBDa3mfFbOMJHmCHvJeQbyvf7xXvPSRJvdO0rnHCDXffZSTn6NbkCR9n9oRD5cfYrh3409vB8VdlxsDvW2x1X71jZJuBxTF6efYtNlaQCv4Tf8i4gNIJkUfvLLPyc30EpXRRcQZ13wULTNTrNatgxMg1v2NRzCsDaa98StDtszfd'

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
