import { StateEntry } from 'utils/types'


export interface DataStatus {
    loaded: boolean;
    loading: boolean;
    error: boolean;
}

export interface SensorData {
    data: StateEntry[],
    status: DataStatus
}