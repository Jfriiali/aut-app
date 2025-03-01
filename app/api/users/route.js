export async function GET() {
  return Response.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
}
