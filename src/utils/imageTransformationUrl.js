import ImageKit from "imagekit-javascript";

const imagekit = new ImageKit({
  publicKey: "public_bSN51VNf5qka5UXCjlGzE+seBo8=",
  urlEndpoint: "https://ik.imagekit.io/nkb6ungbcp",
});

export default function imageManipulationUrl({ imageUrls, width, height }) {
  const imagePath = imageUrls.replace("https://walks-images-bucket.s3.eu-west-2.amazonaws.com", "");

  return imagekit.url({
    path: imagePath,
    transformation: [
      {
        height: width,
        width: height,
      },
    ],
  });
}
