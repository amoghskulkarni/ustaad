import { FileSystemNode } from "../../src/components/Layout/FileExplorer/FileExplorer.types";

export const Files1: FileSystemNode = {
  name: "a",
  childrenNodes: [
    {
      name: "b",
      childrenNodes: null,
    },
    {
      name: "c",
      childrenNodes: [
        {
          name: "h",
          childrenNodes: [
            {
              name: "i",
              childrenNodes: null,
            },
            {
              name: "j",
              childrenNodes: null,
            },
            {
              name: "k",
              childrenNodes: null,
            },
          ],
        },
        {
          name: "d",
          childrenNodes: null,
        },
        {
          name: "e",
          childrenNodes: [
            {
              name: "f",
              childrenNodes: null,
            },
            {
              name: "g",
              childrenNodes: null,
            },
          ],
        },
      ],
    },
  ],
};
