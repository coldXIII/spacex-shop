export default {
  name: 'viewed',
  title: 'Viewed',
  type: 'document',
  fields: [
    {
      name: 'product',
      title: 'Product',
      type: 'string',
    },
    {
      name: 'id',
      title: 'Id',
      type: 'string',
    },
    {
      name: 'user',
      title: 'User',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      option: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
