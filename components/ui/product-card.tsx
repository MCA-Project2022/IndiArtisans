"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { ExpandIcon, ShoppingCartIcon } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModel from "@/hooks/use-preview-model";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
  data
}) => {
  const previewModel = usePreviewModel();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  }
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModel.onOpen(data);
  }
  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          alt="Product Image"
          fill
          className="aspect-square object-center rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transitio absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<ExpandIcon size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => { }}
              icon={<ShoppingCartIcon size={20} className="text-gray-600" />}
            />

          </div>
        </div>
      </div>
      {/* Description of product */}
      <div>
        <p className="font-semibold text-lg">
          {data.name}
        </p>
        <p className="text-sm text-gray-500">
          {data.category?.name}
        </p>
      </div>
      {/* Price of product */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}

export default ProductCard;