import React, { useEffect, useState } from "react";
import API from "../api";
const Offers = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [offers, setOffers] = useState([]);
  const token = localStorage.getItem("token");

  // ____________________________ GET OFFERS____________________________
  const fetchOffers = async () => {
    try {
      const res = await API.get(
        "/offers",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.data.success) {
        setOffers(res.data.offers);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOffers();
  }, []);

  //_______________________ADD OFFER______________________
  const addOffer = async () => {
    try {
      await API.post(
        "/offers",
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle("");
      setDescription("");
      fetchOffers();
    } catch (error) {
      console.log(error);
    }
  };

  //___________________ DELETE OFFER__________________________
  const deleteOffer = async (id) => {
    try {
      await API.delete(`/offers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchOffers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>🔥 Offers Management</h2>

      {/*________________________ FORM______________________ */}
      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addOffer}>Add Offer</button>
      </div>

      {/* ____________________LIST_______________________ */}
      <div>
        {offers.map((o) => (
          <div
            key={o._id}
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h4>{o.title}</h4>
              <p>{o.description}</p>
            </div>

            <button
              onClick={() => deleteOffer(o._id)}
              style={{ color: "red" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Offers;