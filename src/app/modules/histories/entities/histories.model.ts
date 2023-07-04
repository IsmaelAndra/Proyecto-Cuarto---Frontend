export interface HistoryModel {
    id_history?: string | null;
    title_history: string;
    images_history: string;
    description_history: string;
    updateAt: Date;
    createAt: Date;
}

export interface CreateHistoryDto extends Omit<HistoryModel, 'id_history'>{}

export interface UpdateHistoryDto extends Partial<HistoryModel>{}