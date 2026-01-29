import { redirect } from "next/navigation"

export default function EmailPage({
  params,
}: {
  params: { slug: string }
}) {
  redirect(`/`)
}
