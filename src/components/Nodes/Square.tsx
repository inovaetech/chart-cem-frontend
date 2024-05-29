import { NodeProps, Handle, Position, Node, NodeResizer } from "reactflow";
import "reactflow/dist/style.css";

type NodeData = {
    value: number;
};

type Square = Node<NodeData>;

export function Square({ selected }: NodeProps) {
    return (
        <div className="w-full h-full bg-violet-500 border-solid border-2 border-violet-600 rounded min-w-[100px] min-h-[100px]">
            <NodeResizer
                minWidth={100}
                minHeight={100}
                isVisible={selected}
                lineClassName="border-blue-400"
                handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
            />
            <Handle
                id="right"
                type="source"
                position={Position.Right}
                style={{ right: -10, width: 8, height: 8, backgroundColor: "#5A81FA", borderColor: "white" }}
                // className="-right-5 w-3 h-3 border-2 bg-blue-500 border-red-500"
            />
            <Handle
                id="left"
                type="source"
                position={Position.Left}
                style={{ left: -10, width: 8, height: 8, backgroundColor: "#5A81FA", borderColor: "white" }}
            />
            <Handle
                id="top"
                type="source"
                position={Position.Top}
                style={{ top: -10, width: 8, height: 8, backgroundColor: "#5A81FA", borderColor: "white" }}
            />
            <Handle
                id="bottom"
                type="source"
                position={Position.Bottom}
                style={{ bottom: -10, width: 8, height: 8, backgroundColor: "#5A81FA", borderColor: "white" }}
            />
        </div>
    );
}
