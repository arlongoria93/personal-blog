export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "mainImage", title: "Main Image", type: "image" },
    { name: "stack", title: "Stack", type: "array", of: [{ type: "string" }] },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    { name: "description", title: "Description", type: "text" },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "github",
      title: "Github",
      type: "url",
    },
    {
      name: "deployed",
      title: "Deployed",
      type: "url",
    },
  ],
};
