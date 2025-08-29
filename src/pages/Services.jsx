import React, { useEffect, useState } from "react";
import { fetchRecipes, fetchRecipeById, searchMeals } from "../services/api";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices(); // ✅ from services/api.js
        setServices(data);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Failed to load services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <p className="text-center mt-6">Loading services...</p>;
  }

  if (error) {
    return <p className="text-center mt-6 text-red-500">{error}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Our Services</h1>
      {services.length === 0 ? (
        <p className="text-center text-gray-500">No services available</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="border rounded-lg shadow p-4 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
