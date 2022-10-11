export type Action = {
    type: string;
    payload?: {
        id?: string;
        name?: string;
    }
}