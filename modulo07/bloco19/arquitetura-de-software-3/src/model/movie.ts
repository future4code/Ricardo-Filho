export type movie = {
        id: string,
        title: string,
        description: string,
        duration: number,
        year: number
}

export interface MovieInputDTO {
    title: string,
    description: string,
    duration: number,
    year: number
}