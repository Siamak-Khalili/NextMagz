import { useQuery } from "@tanstack/react-query";
import { getAllTags } from "@/services/postService";

export default function useTags() {
  const { data, isLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: getAllTags,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const tags = data || [];

  return { tags, isLoading };
}
