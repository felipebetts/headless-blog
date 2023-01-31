

export interface FrontMatterParams {
    title: string
    date: string
    description: string
    thumbnailUrl: string
    tags?: Array<string>
}

export interface PostParams {
    frontmatter: FrontMatterParams
    slug: string
    minutesToRead: number
}