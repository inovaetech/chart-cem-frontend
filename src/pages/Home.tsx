import "reactflow/dist/style.css";
import * as Toolbar from "@radix-ui/react-toolbar";
import ReactFlow, {
    Background,
    ConnectionMode,
    Controls,
    Node,
    OnEdgesChange,
    OnNodesChange,
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    useEdgesState,
    useNodesState,
} from "reactflow";
// import AnimatedCursor from "react-animated-cursor";
import { Card, HStack, VStack, Text } from "@inovaetech/components-react";
import { Square } from "../components/Nodes/Square";
import { useCallback } from "react";
import DefaultEdge from "../components/Edges/DefaultEdge";

// OS NODES SÃO OS ELEMENTOS
// OS EDGES SÃO AS CONEXOES

const NODE_TYPES = {
    square: Square,
};

const EDGE_TYPES = {
    default: DefaultEdge,
};

const INITIAL_NODES = [
    {
        id: crypto.randomUUID(),
        type: "square",
        position: {
            x: 200,
            y: 400,
        },
        data: { label: "teste 1" }, // ACESSAR INFORMAÇÕES DO MUNDO EXTERNO, PASSAR INFORMAÇÕES PARA O NODE
    },
    {
        id: crypto.randomUUID(),
        type: "square",
        position: {
            x: 1000,
            y: 400,
        },
        data: { label: "teste 2" }, // ACESSAR INFORMAÇÕES DO MUNDO EXTERNO, PASSAR INFORMAÇÕES PARA O NODE
    },
] satisfies Node[];

export default function Criar() {
    const [edges, setEdges] = useEdgesState([]);
    const [nodes, setNodes] = useNodesState(INITIAL_NODES);

    const edgeOptions = {
        type: "default",
        animated: true,
        style: {
            stroke: "#5A81FA",
        },
    };

    const connectionLineStyle = { stroke: "white" };

    const onNodesChange: OnNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange: OnEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);

    //ADICIONAR NOVO NODE
    function addSquareNode() {
        setNodes((nodes) => [
            ...nodes,
            {
                id: crypto.randomUUID(),
                type: "square",
                position: {
                    x: 750,
                    y: 350,
                },
                data: { label: "novo" },
            },
        ]);
    }

    return (
        <VStack className="w-full h-full" alignItems="start" justifyContent="center" bg="background">
            <HStack
                className="w-full h-full bg-slate-200 p-2"
                bg="background"
                alignItems="center"
                justifyContent="center"
            >
                <Card bg="surface" className="h-full w-full border-blue-400" rounded="md">
                    <Card.Header>
                        <Text className="font-bold">Criar Organograma</Text>
                    </Card.Header>
                    <ReactFlow
                        nodeTypes={NODE_TYPES}
                        edgeTypes={EDGE_TYPES}
                        nodes={nodes}
                        edges={edges}
                        onEdgesChange={onEdgesChange}
                        defaultEdgeOptions={edgeOptions}
                        connectionLineStyle={connectionLineStyle}
                        onNodesChange={onNodesChange}
                        onConnect={onConnect}
                        fitView
                        connectionMode={ConnectionMode.Loose}
                    >
                        <Background gap={12} size={2} color="#9C9C9C" />
                        <Controls />
                    </ReactFlow>
                </Card>
            </HStack>
            <Toolbar.Root className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-blue-400 px-8 h-20 w-96 overflow-hidden">
                <Toolbar.Button
                    onClick={addSquareNode}
                    className="w-32 h-32 bg-violet-500 rounded mt-5 transition-transform hover:-translate-y-2"
                />
            </Toolbar.Root>
        </VStack>
    );
}
