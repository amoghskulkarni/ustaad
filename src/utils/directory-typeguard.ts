import { FileSystemNode } from "../components/Layout/FileExplorer/FileExplorer.types";

export const isDirectory = (
  node: FileSystemNode | FileSystemNode[]
): node is FileSystemNode[] => {
  return true;
};
