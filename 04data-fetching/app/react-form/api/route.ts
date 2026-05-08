import { addProduct } from "@/app/lib/prisma-db";


export async function POST(Request: Request) {
  const body = await Request.json();
  const { title, price, description } = body;

  const product = await addProduct(
    title,
    description,
    parseInt(price)
  );

  return Response.json(product, {
    status: 201,
    headers: {
      "content-type": "application/json",
    },
  });
}