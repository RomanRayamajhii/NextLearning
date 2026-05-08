
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";

const prismaClientSingleton = () => {
  const dbPath = path.join(process.cwd(), "dev.db");
  const adapter = new PrismaBetterSqlite3({ url: dbPath });
  return new PrismaClient({ adapter });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        { title: "Product 1", description: "Product 1 description", price: 100 },
        { title: "Product 2", description: "Product 2 description", price: 200 },
        { title: "Product 3", description: "Product 3 description", price: 300 },
      ],
    });
  }
};

// Call seedProducts to ensure data exists

export async function getProducts(query?:string){
    await new Promise((resolve)=>setTimeout(resolve,1500));
    if(query){
        return await prisma.product.findMany({
            where:{
                OR:[
                    {title:{contains:query}},
                    {description:{contains:query}}
                ]
            }
        })
    }
    return await prisma.product.findMany();
}
export async function getProduct(id:number){
    await new Promise((resolve)=>setTimeout(resolve,1500));
    return prisma.product.findUnique({
        where:{
            id
        }
    })
}
export async function addProduct(
    title:string,
    description:string,
    price:number
){
    await new Promise((resolve)=>setTimeout(resolve,1500));
    return prisma.product.create({
        data:{
            title,
            description,
            price
        }
    })


}
export async function updateProduct(
    id:number,
    title:string,
    description:string,
    price:number
){
    await new Promise((resolve)=>setTimeout(resolve,1500));
    return prisma.product.update({
        where:{
            id
        },
        data:{
            title,
            description,
            price
        }
    })


}
export async function deleteProduct(id:number){
    await new Promise((resolve)=>setTimeout(resolve,1500));
    return prisma.product.delete({
        where:{
            id
        }
    })


}