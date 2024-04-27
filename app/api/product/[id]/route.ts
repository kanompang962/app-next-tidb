import { PrismaClient, ProductImage } from "@prisma/client";
import { error } from "console";
import { initImages } from "../func_product";

const prisma = new PrismaClient();

// export async function GET(req: Request, {params}:{params: {id: string}}) {
//     try {
//         const postId = Number(params.id);
//         const results = await prisma.post.findUnique({
//             where: {
//                 id: postId
//             }
//         });

//         if (!results) {
//             return Response.json({ error: 'Not found' });
//         }

//         return Response.json(results);

//     } catch (error) {
//         console.error('Error:', error);
//         return Response.json({ error: error });
//     }
// }

// export async function PUT(req: Request, {params}:{params: {id: string}}) {
//     try {
//         const postId = Number(params.id);
//         const results = await prisma.post.findUnique({
//             where: {
//                 id: postId
//             }
//         });

//         if (!results) {
//             return Response.json({ error: 'Not found' });
//         }

//         return Response.json(results);

//     } catch (error) {
//         console.error('Error:', error);
//         return Response.json({ error: error });
//     }
// }

export async function PUT(req: Request, {params}:{params: {id: string}}) {
    const productId = Number(params.id);
    const {
        title,
        highlights,
        details,
        description,
        price,
        thumbnail,
        images
    } = await req.json();

    // const data = await initImages(images);

    // ckeck id productImage
    const imageUpdateArray = [];
    var imageData = await initImages(images);
    if(imageData?.error) return Response.json({error: imageData.error}); 
    console.log('++++++++++')
    console.log(imageData);
    console.log('++++++++++')

    // if (images) {
    //     for (const image of images.update) {
    //         if (!image.id) return Response.json({error: `Images update required 'id' `});
    
    //         const exists = await existingProductImage(image.id);
    //         if (!exists) return Response.json({error: `Images update with 'id' ${image.id} not found`});

    //         imageUpdateArray.push({
    //             where: { id: image.id },
    //             data: { path: image.path },
    //         });
    //     }
    //     const imageUpdate = {
    //         update: imageUpdateArray,
    //     };
    
    //     const imageCreate= {
    //         create: images.update
    //         .filter((image: ProductImage) => image.id == undefined)
    //         .map((image: ProductImage) => {
    //             if (!image.id) {
    //                 return { path: image.path };
    //             }else {
                    
    //             }
    //           })
    //     }
    
    //     imageData = {
    //         ...imageUpdate,
    //         ...imageCreate,
    //     };
    // }

    // console.log(imageUpdate)
    // console.log(imageCreate)
    // console.log(imageData)

    const product = await prisma.product.update({
        where: {
            id: productId
        },
        data: {
            title,
            highlights,
            details,
            description,
            price,
            thumbnail,
            images: imageData
            //  images: {
            //     update:[
            //         { where: { id: 1 }, data: { path: 'path/to/image11.jpg' } },
            //         { where: { id: 2 }, data: { path: 'path/to/image22.jpg' } },
            //     ]
            // }
        }
    })

    if(!product) return Response.json({error: `Not found`});

    return Response.json(product);
  }