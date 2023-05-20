-- CreateTable
CREATE TABLE "components" (
    "component_id" TEXT NOT NULL,
    "component_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "components_pkey" PRIMARY KEY ("component_id")
);

-- CreateTable
CREATE TABLE "products" (
    "product_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "supplier_id" TEXT NOT NULL,
    "supplier_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("supplier_id")
);

-- CreateTable
CREATE TABLE "component_suppliers" (
    "supplier_id" TEXT NOT NULL,
    "component_id" TEXT NOT NULL,

    CONSTRAINT "component_suppliers_pkey" PRIMARY KEY ("supplier_id","component_id")
);

-- CreateTable
CREATE TABLE "component_products" (
    "product_id" TEXT NOT NULL,
    "component_id" TEXT NOT NULL,

    CONSTRAINT "component_products_pkey" PRIMARY KEY ("product_id","component_id")
);

-- AddForeignKey
ALTER TABLE "component_suppliers" ADD CONSTRAINT "component_suppliers_component_id_fkey" FOREIGN KEY ("component_id") REFERENCES "components"("component_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "component_suppliers" ADD CONSTRAINT "component_suppliers_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("supplier_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "component_products" ADD CONSTRAINT "component_products_component_id_fkey" FOREIGN KEY ("component_id") REFERENCES "components"("component_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "component_products" ADD CONSTRAINT "component_products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
