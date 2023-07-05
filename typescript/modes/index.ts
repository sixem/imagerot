import { TBufferHandler } from '../types';
import { chimera } from './chimera';

export const modes: {
    [key: string]: TBufferHandler;
} = {
    chimera
};