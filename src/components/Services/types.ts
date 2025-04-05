export type ServiceCategory = "exterior" | "interior" | "protection" | "all";

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  category: ServiceCategory;
  price: string;
  duration: string;
  popular?: boolean;
}
