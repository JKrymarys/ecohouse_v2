import { TempEntry } from 'utils/types'


export interface DataStatus {
    loaded: boolean;
    loading: boolean;
    error: boolean;
}

export interface HouseTempState {
    data: TempEntry[],
    status: DataStatus
}