import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { columns } from "@/app/(dashboard)/products/columns";
import { DataTable } from "@/app/(dashboard)/products/data-table";
import { ProductService } from "@/services/productService";
import { Product } from "@/types/product";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CategoryFilter from "@/components/category-filter";
import ErrorBoundary from "@/components/error-boundary";
import Header from "@/components/header";
import QuerySearch from "@/components/query-search";

export const metadata: Metadata = {
  title: "Products",
};

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const categories = await ProductService.fetchCategories();
  const { search, category } = await searchParams;
  return (
    <div>
      <Header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#" asChild>
                <Link href="/">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Header>
      <div className="relative p-4 md:p-8">
        <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
          <QuerySearch placeholder="Search" className="max-w-sm" />
          <CategoryFilter categories={categories} />
        </div>
        <Suspense
          fallback={
            <span className="absolute left-1/2 top-52 -ms-5 inline-flex size-10 animate-ping rounded-full bg-sky-400 opacity-75"></span>
          }
        >
          <ErrorBoundary>
            <ProductList search={search} category={category} />
          </ErrorBoundary>
        </Suspense>
      </div>
    </div>
  );
}

async function ProductList({ search, category }: { search?: string; category?: string }) {
  let products: Product[];
  // Real-world scenario should handle search and category and list from the same API
  if (search) {
    products = await ProductService.searchProducts(search);
  } else if (category) {
    products = await ProductService.fetchProductsByCategory(category);
  } else {
    products = await ProductService.fetchProducts();
  }

  return (
    <div className="rounded-md border">
      <DataTable columns={columns} data={products} />
    </div>
  );
}
