import { mockProducts } from "@/mocks/mockProducts";
import { Product } from "@/types/product";

export class ProductService {
  private static delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  static async fetchProducts(): Promise<Product[]> {
    // Simulate network delay
    await this.delay(800);

    // Simulate potential errors (1 in 10 chance)
    if (Math.random() < 0.1) {
      throw new Error("Failed to fetch products");
    }

    return mockProducts;
  }

  static async fetchProductsByCategory(category: string): Promise<Product[]> {
    await this.delay(500);

    return mockProducts.filter((product) => product.category === category);
  }

  static async fetchCategories(): Promise<string[]> {
    await this.delay(300);

    return Array.from(new Set(mockProducts.map((product) => product.category)));
  }

  static async searchProducts(query: string): Promise<Product[]> {
    await this.delay(500);

    const searchTerm = query.toLowerCase();
    return mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm),
    );
  }

  // Utility function to simulate product updates (for bonus points)
  static async updateProduct(id: number, updates: Partial<Product>): Promise<Product> {
    await this.delay(500);

    const productIndex = mockProducts.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new Error("Product not found");
    }

    const updatedProduct = {
      ...mockProducts[productIndex],
      ...updates,
      lastUpdated: new Date().toISOString().split("T")[0],
    };
    return updatedProduct;
  }
}
