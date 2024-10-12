import { getSession } from "next-auth/react";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = async (req: Request) => {
  // @ts-ignore
  const session = await getSession({ req });
  console.log("Session:", session); // Tambahkan log untuk sesi
  if (!session || !session.user) {
    console.error("Authentication failed"); // Log jika autentikasi gagal
    return null;
  }
  return { id: session.user.id };
};

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .onUploadComplete(async ({ metadata, file }) => {
      // Kode ini dijalankan di server setelah upload
      console.log("Upload selesai");
      console.log("URL file:", file.url);

      // Mengembalikan informasi tambahan ke klien
      return { uploadedFileUrl: file.url };
    }),

  pdfUploader: f({ pdf: { maxFileSize: "4MB" } })
    .onUploadComplete(async ({ metadata, file }) => {
      // Kode ini dijalankan di server setelah upload
      console.log("Upload PDF selesai");
      console.log("URL file:", file.url);

      // Mengembalikan informasi tambahan ke klien
      return { uploadedFileUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
