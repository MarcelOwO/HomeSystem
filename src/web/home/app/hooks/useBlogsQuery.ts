import { BlogApi } from "~/api/blog";
import { useQuery } from "@tanstack/react-query"

export function useBlogsQuery() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: BlogApi.GetAll,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
}
