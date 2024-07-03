export interface IPostModel {
    id: number,
    title: string
    userId: number,
    tags: string[],
    reactions: number,
    body: string
}