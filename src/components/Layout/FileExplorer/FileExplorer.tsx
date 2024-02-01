import { FC, useState } from "react";
import { FileExplorerNodeProps } from "./FileExplorer.types";
import "./FileExplorer.styles.css";

import { Button, IconButton } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

export const Node: FC<FileExplorerNodeProps> = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="container">
      {/* Move forward by spaces equal to level */}
      <div className="tab">
        {node.childrenNodes && (
          <IconButton
            aria-label="delete"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <ArrowDropDown color="primary" />
          </IconButton>
        )}
      </div>

      {!node.childrenNodes && (
        <div className="file">
          {/* <p className="file-name">{node.name}</p> */}
          <Button variant="text" className="file-name">
            {node.name}
          </Button>
        </div>
      )}

      {node.childrenNodes && (
        <div className="folder">
          {/* <p className="folder-name" onClick={() => setIsExpanded(!isExpanded)}>
            {node.name}
          </p> */}
          <Button
            variant="text"
            className="folder-name"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {node.name}
          </Button>

          {isExpanded &&
            node.childrenNodes.map((n, i) => <Node key={i} node={n} />)}
        </div>
      )}
    </div>
  );
};
