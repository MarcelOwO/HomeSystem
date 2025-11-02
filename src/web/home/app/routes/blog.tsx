import { useBlogsQuery } from "~/hooks/useBlogsQuery";

export default function Blog() {

  const { data, isLoading, error } = useBlogsQuery();

  return (
    <div className="flex flex-col">
      <h2>Blog</h2>


      {error && <div>error loading content</div>}
      {isLoading && <div>
        <div>
          <img src="sticker_sleep.png" />
        </div>
        <div>
          still loading...
        </div>
      </div>}
      {(data ?? []).map(blog => (
        <div key={blog.Id}
          className="flex flex-col items-center gap-2">
          <div>blog.Title</div>
        </div>))}
    </div>
  );
}
