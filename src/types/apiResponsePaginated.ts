export default interface ApiResponse {
  data: {
    id: number;
    title: string;
    artist_title: string;
    image_id: string;
  }[];
}
