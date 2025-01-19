"use client";

import config from "@/lib/config";
import { cn } from "@/lib/utils";
import { IKUpload, ImageKitProvider } from "imagekitio-next";
import { useRef, useState } from "react";

const {
  env: {
    imageKit: { publicKey, urlEndpoint },
  },
} = config;

const authenticatior = async (): Promise<{
  signature: string;
  expire: number;
  token: string;
}> => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Resquest failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();

    const { signature, token, expire } = data;

    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

interface Props {
  type: "image" | "video";
  accept: string;
  placeholder: string;
  folder: string;
  variant: "dark" | "light";
  onFileChange: (filePath: string) => void;
  value?: string;
}

const ImageUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
  value,
}: Props) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const styles = {
    button:
      variant === "dark"
        ? "bg-light-600 border-gray-100 border"
        : "bg-dark-300",
    placeholder: variant === "dark" ? "text-light-100" : "text-slate-500",
    text: variant === "dark" ? "text-light-100" : "text-dark-400",
  };

  const onError = () => {};

  const onSuccess = () => {};

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticatior}
    >
      <IKUpload
        className="hidden"
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-upload.png"
      />

      <button className={cn("upload-btn", styles.button)}></button>
    </ImageKitProvider>
  );
};

export default ImageUpload;
