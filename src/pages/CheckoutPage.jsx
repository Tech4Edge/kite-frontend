import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createOrder } from "../services/api";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderContext = location.state?.orderContext;

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    note: "",
  });

  const checkoutData = useMemo(() => {
    if (!orderContext) return null;
    const isProduct = orderContext.type === "product";
    return {
      type: orderContext.type,
      productId: isProduct ? orderContext.id : undefined,
      promotionId: !isProduct ? orderContext.id : undefined,
      selectedSkuOrSize: orderContext.selectedOption || "",
      title: orderContext.title || "",
      totalPrice: orderContext.totalPrice || 0,
    };
  }, [orderContext]);

  if (!checkoutData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-[#F9F9F9] to-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-[#222222] mb-4">Checkout Not Ready</h1>
          <p className="text-[#666666] mb-6">
            Please select a product or promotion first, then click Buy.
          </p>
          <Link to="/products" className="text-[#00AEEF] font-semibold hover:text-[#ED028C]">
            Go to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await createOrder({
        ...checkoutData,
        ...form,
        paymentMethod: "COD",
      });
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Failed to place order");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-[#F9F9F9] to-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center bg-white border border-[#E0E0E0] rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-[#222222] mb-3">Order Placed</h1>
          <p className="text-[#666666] mb-6">
            Your order has been submitted successfully with Cash on Delivery.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#00AEEF] to-[#0095CC]"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F9F9F9] to-white py-12">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-[#E0E0E0] rounded-2xl p-6">
          <h1 className="text-2xl font-bold text-[#222222] mb-5">Checkout</h1>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input name="customerName" value={form.customerName} onChange={handleChange} required className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email (optional)</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">City</label>
              <input name="city" value={form.city} onChange={handleChange} required className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg" />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">Address</label>
              <textarea name="address" value={form.address} onChange={handleChange} required rows={3} className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg" />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">Order Note (optional)</label>
              <textarea name="note" value={form.note} onChange={handleChange} rows={2} className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg" />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">Payment Method</label>
              <input value="Cash on Delivery (COD)" readOnly className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg bg-[#F9F9F9]" />
            </div>
            <div className="md:col-span-2">
              <button type="submit" disabled={submitting} className="w-full px-5 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#00AEEF] to-[#0095CC] disabled:opacity-60">
                {submitting ? "Placing Order..." : "Place Order"}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white border border-[#E0E0E0] rounded-2xl p-6 h-fit">
          <h2 className="text-lg font-semibold text-[#222222] mb-4">Order Summary</h2>
          <p className="text-sm text-[#666666] mb-1">Type</p>
          <p className="font-semibold mb-3">{checkoutData.type === "product" ? "Product" : "Promotion"}</p>
          <p className="text-sm text-[#666666] mb-1">Item</p>
          <p className="font-semibold mb-3">{checkoutData.title}</p>
          {checkoutData.selectedSkuOrSize && (
            <>
              <p className="text-sm text-[#666666] mb-1">Selected Variant</p>
              <p className="font-semibold mb-3">{checkoutData.selectedSkuOrSize}</p>
            </>
          )}
          <p className="text-sm text-[#666666] mb-1">Estimated Price</p>
          <p className="text-2xl font-bold text-[#00AEEF]">
            Rs {Number(checkoutData.totalPrice || 0).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
