import React from "react";

export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create Listing
      </h1>
      <form className="flex flex-col sm:flex-row">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="border p-3 rounded-lg"
            maxLength={62}
            minLength={10}
            autoComplete="off"
            required
          />
          <textarea
            type="text"
            id="description"
            placeholder="Description"
            autoComplete="off"
            className="border p-3 rounded-lg"
            required
          />
          <input
            type="text"
            id="address"
            placeholder="Address"
            autoComplete="off"
            className="border p-3 rounded-lg"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sell" className="w-5" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              <input
                className="rounded-lg p-3 border border-gray-300"
                min={1}
                max={10}
                required
                type="number"
                id="bedRoom"
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="rounded-lg p-3 border border-gray-300"
                min={1}
                max={10}
                required
                type="number"
                id="bathRoom"
              />
              <p>Baths</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="rounded-lg p-3 border border-gray-300"
                required
                type="number"
                id="regularPrice"
              />
              <div className="flex flex-col items-center">
                <p>Regular price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="rounded-lg p-3 border border-gray-300"
                required
                type="number"
                id="discountPrice"
              />
              <div className="flex flex-col items-center">
                <p>Discounted price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
