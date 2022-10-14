export type listActionType = {
    type: string;
    payload?: {
        id?: string;
        title?: string;
        description?: string;
    }
}