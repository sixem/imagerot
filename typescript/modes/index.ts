import { BufferHandler } from '../types';
import { chimera } from './chimera';

export const modes: {
    [key: string]: BufferHandler;
} = {
    chimera
};