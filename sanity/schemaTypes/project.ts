import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'subtitle',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'text',
    }),

    defineField({
      name: 'photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),

    defineField({
      name: 'website',
      type: 'url',
    }),

    defineField({
      name: 'review',
      type: 'object',
      fields: [
        defineField({
          name: 'quote',
          type: 'text',
        }),
        defineField({
          name: 'author',
          type: 'string',
        }),
      ],
    }),
  ],
})
