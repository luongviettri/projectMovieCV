import AxiosClient from "../Utils/Http/AxiosClient";

const mockAPI = "https://633c471674afaef16405f4e7.mockapi.io/NewsMovie";
const NewsService = AxiosClient.get(mockAPI);
export default NewsService;
