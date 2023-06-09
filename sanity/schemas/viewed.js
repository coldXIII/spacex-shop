export default {
  name: 'viewed',
  title: 'Viewed',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'product' }],
    },
  ],
};
