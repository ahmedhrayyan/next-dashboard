import { Suspense } from "react";
import Link from "next/link";
import { ProductService } from "@/services/productService";
import { AlertTriangle, Package } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import ErrorBoundary from "@/components/error-boundary";
import Header from "@/components/header";

export default async function Home() {
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
          </BreadcrumbList>
        </Breadcrumb>
      </Header>
      <div className="p-4 md:p-8">
        <h2 className="mb-4 text-3xl">Overview</h2>
        <Suspense
          fallback={
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Skeleton className="h-32 rounded-xl bg-muted" />
              <Skeleton className="h-32 rounded-xl bg-muted" />
            </div>
          }
        >
          <ErrorBoundary>
            <Statistics />
          </ErrorBoundary>
        </Suspense>
      </div>
    </div>
  );
}

async function Statistics() {
  const products = await ProductService.fetchProducts();
  const totalValue = products.reduce((sum, item) => sum + item.price * item.stock, 0);
  const lowStockItems = products.filter((item) => item.stock < 5).length;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalValue.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">Across {products.length} products</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{lowStockItems}</div>
          <p className="text-xs text-muted-foreground">Items with stock {"<"} 5</p>
        </CardContent>
      </Card>
    </div>
  );
}
