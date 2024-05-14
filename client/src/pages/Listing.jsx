import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setLoading(false);
          setError(true);
          return;
        }
        setLoading(false);
        setListing(data.listing);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchListing();
  }, []);
  return (
    <main>
      {loading && (
        <p className="text-center my-4 text-2xl font-semibold">Loading...</p>
      )}
      {error && (
        <p className="text-center my-4 text-2xl text-red-700 font-semibold">
          Something went wrong!
        </p>
      )}
      {listing && listing.name}
    </main>
  );
}
