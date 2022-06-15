export default {
    type: "document",
    name: "Markdown",
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'foricon',
        title: 'Icon',
        type: 'string',
      },
      {
        type: "markdown",
        description: "A Github flavored markdown field with image uploading",
        name: "write"
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96,
        },
     },
     {
      title: 'Date and Time',
      name: 'dateandtime',
      type: 'datetime',
    }
    ]
  }