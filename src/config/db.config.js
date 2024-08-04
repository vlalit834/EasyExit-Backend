import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
    errorFormat: 'pretty',
});
export default prisma;

export async function connDB() {
    try {
        await prisma.$connect();
        console.log(`🎉 Connected to Database`);
        prisma.$on('beforeExit', async () => {
            await prisma.$disconnect();
            console.log(`🚪 Database connection closed`);
        });
    } catch (error) {
        console.log(error);
    }
}
