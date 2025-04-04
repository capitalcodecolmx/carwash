import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ContactPage } from "@/pages/ContactPage";
import { AboutPage } from "@/pages/AboutPage";
import { BookingPage } from "@/pages/BookingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // English routes
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "book",
        element: <BookingPage />,
      },
      // Spanish routes
      {
        path: "servicios",
        element: <ServicesPage />,
      },
      {
        path: "sobre-nosotros",
        element: <AboutPage />,
      },
      {
        path: "contacto",
        element: <ContactPage />,
      },
      {
        path: "reservar",
        element: <BookingPage />,
      },
    ],
  },
]);
