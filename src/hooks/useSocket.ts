// src/hooks/useSocket.ts (Corrected)
import { wsBaseURL } from '@/utils/base-url';
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const useSocket = (commentId: string) => {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io(wsBaseURL, {});

        newSocket.on('connect', () => {
            console.log('WS Client Connected');

            // Join the specific room upon connection
            const roomName = `Comment_${commentId}`;
            newSocket.emit('JOIN_ROOM', roomName);
            console.log(`Client attempting to join room: ${roomName}`);
        });

        // ... other listeners ...

        setSocket(newSocket);

        // 3. Cleanup Phase
        return () => {
            console.log('WS Client Disconnecting...');
            newSocket.disconnect();
        };
    }, [commentId]);

    return socket;
};