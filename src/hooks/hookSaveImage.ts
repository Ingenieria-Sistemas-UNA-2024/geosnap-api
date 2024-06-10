import { S3 } from "aws-sdk";

const s3 = new S3({
  region: "us-east-1",
  accessKeyId: "AKIAVRUVRO4Z7B3MMEXP",
  secretAccessKey: "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",
});

export const sendFileToDestination = async (file: File): Promise<void> => {
  try {
    const params = {
      Bucket: "geosnaps3",
      Key: `imagenes/${file.name}`,
      Body: file,
    };

    await s3.upload(params).promise();
    console.log("El archivo se ha subido correctamente a S3.");
  } catch (error) {
    console.error("Error al subir el archivo a S3:", error);
    throw error;
  }
};

export const getImageFromDestination = async (fileName: string): Promise<File | null> => {
  try {
    const params = {
      Bucket: "geosnaps3",
      Key: `imagenes/${fileName}`,
    };
    const data = await s3.getObject(params).promise();
    const file = new File([data.Body as Blob], fileName, { type: data.ContentType });
    return file;
  } catch (error) {
    console.error("Error al obtener la imagen desde S3:", error);
    return null;
  }
};

