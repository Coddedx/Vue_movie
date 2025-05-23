export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Dates {
    maximum: string;
    minimum: string;
}

export interface MovieResponse {
    dates: Dates;
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface Result {
    iso_630_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    type: string;
    official: boolean;
    published_at: Dates;
}

export interface Root {
    id: number;
    results: Result[];

}