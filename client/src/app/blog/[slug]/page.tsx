export type BlogSlugProps = {
  title?: string;
};

export default function BlogSlug({ title = 'BlogSlug' }: BlogSlugProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
