'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EmailRedirectPage({
  params,
}: {
  params: { slug: string }
}) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/`);
  }, [router, params]);

  return null;
}
