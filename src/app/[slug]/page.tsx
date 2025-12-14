export default async function GamePage({ params }: { params: { slug: string | undefined } }) {
  const { slug } = await params;
  return <div>Game {slug}</div>;
}
