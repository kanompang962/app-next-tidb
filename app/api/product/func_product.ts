import { PrismaClient, ProductImage } from '@prisma/client';

const prisma = new PrismaClient();

export const existingProductImage = async (id: number): Promise<boolean> => {
    const productImage = await prisma.productImage.findUnique({
        where: {
            id: id,
        },
    });
    // ส่งคืน true หากพบ ProductImage, ส่งคืน false หากไม่พบ
    return !!productImage;
};

export async function initImages(imagesUpdateArray: any) {
    if (!imagesUpdateArray) {
        return ;
    }

    var images;

    if (imagesUpdateArray.update) {
        images = await checkImageUpdates(imagesUpdateArray);
    }

    if (imagesUpdateArray.create) {
        images = await checkImageCreates(imagesUpdateArray);
    }

    return images;
}

async function checkImageUpdates(imagesUpdateArray: any) {
    const imageUpdateArray = [];
    for (const image of imagesUpdateArray.update) {
        // ตรวจสอบว่า `id` มีอยู่และภาพมีอยู่ในฐานข้อมูล
        if (!image.id) {
            return {
                error: `Images update required 'id'`,
            };
        }

        const exists = await existingProductImage(image.id);
        if (!exists) {
            return {
                error: `Images update with 'id' ${image.id} not found`,
            };
        }
        // สร้างอาร์เรย์สำหรับอัปเดตภาพ
        imageUpdateArray.push({
            where: { id: image.id },
            data: { path: image.path },
        });
    }

    return {
        update: imageUpdateArray,
    };
}
async function checkImageCreates(imagesCreateArray: any) {
    for (const image of imagesCreateArray.create) {

        if (!image.path) {
            return {
                error: `Images create required 'path'`,
            };
        }
    }

    return {
        create: imagesCreateArray.create
    }
}
