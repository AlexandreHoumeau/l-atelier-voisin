import { createClient } from 'next-sanity'

import { projectId, dataset, apiVersion } from "../env.public";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
