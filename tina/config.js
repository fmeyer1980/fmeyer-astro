import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "/src/assets",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        name: "settings",
        label: "Settings",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          global: true
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: 'Socialmedia links',
            name: 'socialmediaLinks',
            type: 'string',
            ui: {
              component: 'list',
            }
          },
          {
            name: "skills",
            label: "Skills",
            type: "object",
            list: true,
            fields: [
              {
                type: "string",
                name: "headline",
                label: "Headline",
              },
              {
                type: "rich-text",
                name: "text",
                label: "Text",
                isBody: true,
              },
              {
                type: 'image',
                label: 'Hero image',
                name: 'imgSrc',
              }
            ],
          }
        ]
      },
      {
        name: "home",
        label: "Home page",
        path: "src/content/home/",
        match: {
          include: 'index',
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "intro",
            label: "Intro",
            type: "object",
            fields: [
              {
                type: "string",
                name: "headline",
                label: "Headline",
              },
              {
                type: "rich-text",
                name: "text",
                label: "Text",
                isBody: true,
              },
              {
                type: 'image',
                label: 'Hero image',
                name: 'imgSrc',
              }
            ],
          }
        ]
      },
      {
        name: "categories",
        label: "Categories",
        path: "src/content/categories",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "iconSize",
            label: "Icon size",
            options: [
              {
                value: 'h-quarter',
                label: 'Small',
              },
              {
                value: 'h-third',
                label: 'Medium',
              },
              {
                value: 'h-half',
                label: 'Large',
              },
              {
                value: 'h-two-tird',
                label: 'XL',
              }
            ],
            ui: {
              component: 'select',
            }
          },
          {
            type: "string",
            name: "link",
            label: "Link"
          },
          {
            type: 'boolean',
            name: 'highlighted',
            label: 'Highlighted'
          }
        ]
      },
      {
        name: "cases",
        label: "Cases",
        path: "src/content/cases",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'teaser',
            label: 'Teaser'
          },
          {
            type: 'image',
            label: 'Cover image',
            name: 'cover_image',
          },
          {
            type: 'string',
            label: 'Alt text',
            name: 'cover_image_alt',
          },
          {
            type: 'string',
            label: 'External link',
            name: 'externalLink',
          },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [{
              name: "image",
              label: "Image",
              fields: [
                {
                type: "string",
                name: "message",
                label: "Headline"
                },
                {
                  type: 'image',
                  label: 'Image',
                  name: 'image',
                }
              ]
            },
            {
              name: "feautredEntries",
              label: "Feautred entries",
              fields: [
                {
                  type: "string",
                  name: "headline",
                  label: "Headline"
                },
              ]
            },
            {
              name: "imageTextBox",
              label: "Image textbox",
              fields: [
                {
                  type: "string",
                  name: "headline",
                  label: "Headline"
                },
              ]
            }
          ]
          },
        ]
      }
    ]
  },
});
