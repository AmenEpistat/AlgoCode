export interface QuizOption {
    id: string;
    text: string;
}

export interface Quiz {
    id: string;
    question: string;
    options: QuizOption[];
    correctOptionId: string | string[];
}
