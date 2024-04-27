import { PrismaClient, ProductImage } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const results = await prisma.product.findMany({
    include: {
      images: true, // รวมข้อมูลจากโมเดล ProductImage ที่เชื่อมโยงกับ Products
    },
  });
  return Response.json(results);
}

export async function POST(req: Request) {
  const {
    title,
    highlights,
    details,
    description,
    price,
    thumbnail,
    images
  } = await req.json();
  console.log(images)

  const newProduct = await prisma.product.create({
    data: {
      title,
      highlights,
      details,
      description,
      price,
      thumbnail,
      images,
      // images: {
      //   create: [
      //     { path: 'path/to/image1.jpg' },
      //     { path: 'path/to/image2.jpg' }
      //   ]
      // }
    },
  });
  return Response.json(newProduct);
}
