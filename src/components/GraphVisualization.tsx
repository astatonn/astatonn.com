import React from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  Position
} from 'reactflow';

import 'reactflow/dist/style.css';


const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: -150 },
    data: { label: 'Learnability' },
    style: {
      background: '#4f46e5',
      padding: '10px 20px',
      borderRadius: '8px',
      border: 'none',
    
    },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Bottom,
  },
  {
    id: '2',
    position: { x: -150, y: 50 },
    data: { label: 'Leadership' },
    style: {
      background: '#4f46e5',
      padding: '10px 20px',
      borderRadius: '8px',
      border: 'none',
    },
    sourcePosition: Position.Top,
    targetPosition: Position.Top,
  },
  {
    id: '3',
    position: { x: 150, y: 50 },
    data: { label: 'Inovation' },
    style: {
      background: '#4f46e5',
      padding: '10px 20px',
      borderRadius: '8px',
      border: 'none',
    },
    sourcePosition: Position.Top,
    targetPosition: Position.Top,
  },
  {
    id: '4',
    position: { x: 280, y: -30 },
    data: { label: 'Artificial Inteligence' },
    style: {
      background: '#47A4E6',
      padding: '5px 10px',
      borderRadius: '8px',
      border: 'none',
    },
    sourcePosition: Position.Left,
    targetPosition: Position.Left,
  },
  {
    id: '5',
    position: { x: 200, y: -110 },
    data: { label: 'Software Prototyping' },
    style: {
      background: '#47A4E6',
      padding: '5px 10px',
      borderRadius: '8px',
      border: 'none',
    },
    sourcePosition: Position.Left,
    targetPosition: Position.Left,
  },
  {
    id: '6',
    position: { x: 240, y: -70 },
    data: { label: 'Troubleshooting' },
    style: {
      background: '#47A4E6',
      padding: '5px 10px',
      borderRadius: '8px',
      border: 'none',
    },
    sourcePosition: Position.Left,
    targetPosition: Position.Left,
  },
  {
    id: '7',
    position: { x: -280, y: -30 },
    data: { label: 'Database Archtecture' },
    style: {
      background: '#47A4E6',
      padding: '5px 10px',
      borderRadius: '8px',
      border: 'none',
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Right,
  },
  {
    id: '8',
    position: { x: -200, y: -110 },
    data: { label: 'Algorithms' },
    style: {
      background: '#47A4E6',
      padding: '5px 10px',
      borderRadius: '8px',
      border: 'none',
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Right,
  },
  {
    id: '9',
    position: { x: -240, y: -70 },
    data: { label: 'User Experience' },
    style: {
      background: '#47A4E6',
      padding: '5px 10px',
      borderRadius: '8px',
      border: 'none',
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Right,
  },
  {
    id: '10',
    position: { x: 0, y: 0 },
    data: { label: 'Interests' },
    style: {
      background: 'rgba(71,164,230,0.5)',
      padding: '5px 10px',
      borderRadius: '8px',
      border: 'none',
    },
    sourcePosition: Position.Top,
    targetPosition: Position.Top,
  },



];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'straight', animated: true },
  { id: 'e1-3', source: '1', target: '3', type: 'straight', animated: true },
  { id: 'e2-3', source: '2', target: '3', type: 'straight', animated: true },
  { id: 'e10-4', source: '10', target: '4', type: 'straight' },
  { id: 'e10-5', source: '10', target: '5', type: 'straight' },
  { id: 'e10-6', source: '10', target: '6', type: 'straight' },
  { id: 'e10-7', source: '10', target: '7', type: 'straight' },
  { id: 'e10-8', source: '10', target: '8', type: 'straight' },
  { id: 'e10-9', source: '10', target: '9', type: 'straight' },

];

const GraphVisualization = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <>
      <style>
        {`
          .react-flow__handle {
            opacity: 0 !important;
            width: 0 !important;
            height: 0 !important;
            background: transparent !important;
            border: none !important;
          }
          .react-flow__node{
            color: #f5f5f5 !important;
          }

          .react-flow__node-default {
            font-size: 8px;
            font-weight: 300;

          }

          .react-flow__node-default[data-id="10"] {
            top: -5px;
            font-weight: 400;
            color: #f5f5f5 !important;
          }

          .react-flow__node-default[data-id="9"] {
            left: 5px;
            color: #f5f5f5 !important;
          } 
          .react-flow__node-default[data-id="8"] {
            left: 5px;
            color: #f5f5f5 !important;
          } 
          .react-flow__node-default[data-id="7"] {
            left: 5px;
            color: #f5f5f5 !important;
          } 
          .react-flow__node-default[data-id="6"] {
            left: -5px;
            color: #f5f5f5 !important;
          } 
          .react-flow__node-default[data-id="5"] {
            left: -5px;
            color: #f5f5f5 !important;
          } 
          .react-flow__node-default[data-id="4"] {
            left: -5px;
            color: #f5f5f5 !important;
          } 
         

          .react-flow__node-default[data-id="1"], .react-flow__node-default[data-id="2"], .react-flow__node-default[data-id="3"]  {
            font-weight: 700 !important;
            font-color: #f5f5f5 !important;
          }

          
        `}
      </style>
      <div className="h-[600px] w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          attributionPosition="bottom-right"
          panOnDrag={false}
          selectionOnDrag={false}
          panOnScroll={false}
          nodesDraggable={false}
          zoomOnScroll={false}
        >
          <Background />
          {/* <Controls /> */}
          {/* <MiniMap /> */}
        </ReactFlow>
      </div>
    </>
  );
};

export default GraphVisualization;