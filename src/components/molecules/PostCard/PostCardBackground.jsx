import { useState } from "react";

/* eslint-disable react/prop-types */
function PostBackground({ post }) {
  const [bgColor, setBgColor] = useState();
  getDominantColor(post.postedBy.avatar.url).then((res) => setBgColor(res));

  return post.image ? (
    <img src={post.image.url} alt={post.image.filename} />
  ) : (
    <div className="PostCard-Background" style={{ background: bgColor }}></div>
  );
}

function getDominantColor(imageSrc) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // For cross-origin images
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let r = 0,
        g = 0,
        b = 0;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }

      const avgColor = {
        r: Math.floor(r / (data.length / 4)),
        g: Math.floor(g / (data.length / 4)),
        b: Math.floor(b / (data.length / 4)),
      };

      const hexColor =
        "#" +
        ((1 << 24) + (avgColor.r << 16) + (avgColor.g << 8) + avgColor.b)
          .toString(16)
          .slice(1);
      resolve(hexColor);
      // return hexColor;
    };
    img.onerror = reject;
    img.src = imageSrc;
  });
}

export default PostBackground;
