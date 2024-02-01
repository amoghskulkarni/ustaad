export type FileSystemNode = {
  name: string;
  childrenNodes: null | FileSystemNode[];
};

export type FileExplorerNodeProps = {
  node: FileSystemNode;
};
