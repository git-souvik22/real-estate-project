import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Listing() {
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setTimeout(() => {
          setListing(data.listing);
          setLoading(false);
        }, 1500);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, []);
  return (
    <main>
      {loading && (
        <p className="text-center my-4 font-semibold text-2xl">Loading...</p>
      )}
      {error && (
        <p className="text-center my-4 font-semibold text-red-700 text-2xl">
          Something went wrong!
        </p>
      )}
      {listing?.name}
    </main>
  );
}
