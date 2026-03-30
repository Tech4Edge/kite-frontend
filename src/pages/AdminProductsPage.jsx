import { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import RequireAdminAuth from "../components/admin/RequireAdminAuth";
import {
  adminGetProducts,
  adminCreateProduct,
  adminUpdateProduct,
  adminDeleteProduct,
} from "../services/api";
import { colors } from "../theme";

const emptyForm = {
  id: "",
  title: "",
  category: "",
  productType: "matches",
  navGroup: "Safety Matches",
  iconType: "fire",
  description: "",
  image: "",
  color: colors.primary.main,
  tagline: "",
  services: "",
  displayOrder: 0,
  isActive: true,
  showOnLanding: true,
  showInProductsPage: true,
  showInNavbar: true,
  features: [""],
  variants: [{ name: "", detail: "", packing: "", price: "" }],
  facilities: [{ name: "", location: "", note: "" }],
  imageUrls: [""],
};

function sanitizeStringList(list = []) {
  return (list || []).map((s) => String(s).trim()).filter(Boolean);
}

function sanitizeVariants(list = []) {
  return (list || [])
    .map((v) => ({
      name: String(v.name || "").trim(),
      detail: String(v.detail || "").trim(),
      packing: String(v.packing || "").trim(),
      price: v.price === "" || v.price == null ? null : Number(v.price),
    }))
    .filter((v) => v.name || v.detail || v.packing || v.price != null);
}

function sanitizeFacilities(list = []) {
  return (list || [])
    .map((f) => ({
      name: String(f.name || "").trim(),
      location: String(f.location || "").trim(),
      note: String(f.note || "").trim(),
    }))
    .filter((f) => f.name || f.location || f.note);
}

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [productImages, setProductImages] = useState([]);

  const load = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await adminGetProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const updateFeature = (index, value) => {
    setForm((prev) => {
      const next = [...prev.features];
      next[index] = value;
      return { ...prev, features: next };
    });
  };

  const addFeature = () => setForm((prev) => ({ ...prev, features: [...prev.features, ""] }));
  const removeFeature = (index) =>
    setForm((prev) => ({ ...prev, features: prev.features.filter((_, i) => i !== index) }));

  const updateVariant = (index, key, value) => {
    setForm((prev) => {
      const next = [...prev.variants];
      next[index] = { ...next[index], [key]: value };
      return { ...prev, variants: next };
    });
  };
  const addVariant = () =>
    setForm((prev) => ({
      ...prev,
      variants: [...prev.variants, { name: "", detail: "", packing: "", price: "" }],
    }));
  const removeVariant = (index) =>
    setForm((prev) => ({ ...prev, variants: prev.variants.filter((_, i) => i !== index) }));

  const updateFacility = (index, key, value) => {
    setForm((prev) => {
      const next = [...prev.facilities];
      next[index] = { ...next[index], [key]: value };
      return { ...prev, facilities: next };
    });
  };
  const addFacility = () =>
    setForm((prev) => ({
      ...prev,
      facilities: [...prev.facilities, { name: "", location: "", note: "" }],
    }));
  const removeFacility = (index) =>
    setForm((prev) => ({ ...prev, facilities: prev.facilities.filter((_, i) => i !== index) }));

  const updateImageUrl = (index, value) => {
    setForm((prev) => {
      const next = [...prev.imageUrls];
      next[index] = value;
      return { ...prev, imageUrls: next };
    });
  };
  const addImageUrl = () => setForm((prev) => ({ ...prev, imageUrls: [...prev.imageUrls, ""] }));
  const removeImageUrl = (index) =>
    setForm((prev) => ({ ...prev, imageUrls: prev.imageUrls.filter((_, i) => i !== index) }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const payload = {
        id: form.id,
        title: form.title,
        category: form.category,
        productType: form.productType,
        navGroup: form.navGroup,
        iconType: form.iconType || null,
        description: form.description,
        image: form.image,
        images: sanitizeStringList(form.imageUrls),
        color: form.color,
        tagline: form.tagline,
        services: form.services,
        displayOrder: Number(form.displayOrder) || 0,
        isActive: form.isActive,
        showOnLanding: form.showOnLanding,
        showInProductsPage: form.showInProductsPage,
        showInNavbar: form.showInNavbar,
        features: sanitizeStringList(form.features),
        variants: sanitizeVariants(form.variants),
        facilities: sanitizeFacilities(form.facilities),
        productImages,
      };

      if (editingId) {
        await adminUpdateProduct(editingId, payload);
      } else {
        await adminCreateProduct(payload);
      }
      setForm(emptyForm);
      setEditingId(null);
      setProductImages([]);
      await load();
    } catch (err) {
      setError(err.message || "Failed to save product");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (p) => {
    setEditingId(p.id);
    setForm({
      ...emptyForm,
      id: p.id ?? "",
      title: p.title ?? "",
      category: p.category ?? "",
      productType: p.productType ?? "general",
      navGroup: p.navGroup ?? "",
      iconType: p.iconType ?? "",
      description: p.description ?? "",
      image: p.image ?? "",
      color: p.color ?? colors.primary.main,
      tagline: p.tagline ?? "",
      services: p.services ?? "",
      displayOrder: p.displayOrder ?? 0,
      isActive: p.isActive ?? true,
      showOnLanding: p.showOnLanding ?? true,
      showInProductsPage: p.showInProductsPage ?? true,
      showInNavbar: p.showInNavbar ?? true,
      features: p.features?.length ? p.features : [""],
      variants: p.variants?.length
        ? p.variants.map((v) => ({ ...v, price: v.price ?? "" }))
        : [{ name: "", detail: "", packing: "", price: "" }],
      facilities: p.facilities?.length ? p.facilities : [{ name: "", location: "", note: "" }],
      imageUrls: p.images?.length ? p.images : [""],
    });
    setProductImages([]);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await adminDeleteProduct(id);
      await load();
    } catch (err) {
      setError(err.message || "Failed to delete product");
    }
  };

  return (
    <RequireAdminAuth>
      <AdminLayout>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: colors.text.primary }}>
              Products
            </h1>
            <p className="mt-1 text-sm" style={{ color: colors.text.secondary }}>
              Create, update, and delete products with variants, facilities, and images.
            </p>
          </div>

          {loading ? (
            <div className="text-sm" style={{ color: colors.text.secondary }}>
              Loading products...
            </div>
          ) : (
            <div className="bg-white border border-[#E0E0E0] rounded-2xl p-5 md:p-6 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E0E0E0]">
                    <th className="text-left py-3 pr-4">ID</th>
                    <th className="text-left py-3 pr-4">Title</th>
                    <th className="text-left py-3 pr-4">Category</th>
                    <th className="text-left py-3 pr-4">Type</th>
                    <th className="text-left py-3 pr-4">Updated</th>
                    <th className="text-right py-3 pl-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} className="border-b border-[#F0F0F0]">
                      <td className="py-3 pr-4 font-mono text-xs">{p.id}</td>
                      <td className="py-3 pr-4">{p.title}</td>
                      <td className="py-3 pr-4">{p.category}</td>
                      <td className="py-3 pr-4">{p.productType || "-"}</td>
                      <td className="py-3 pr-4 text-xs text-[#666666]">
                        {p.updatedAt ? new Date(p.updatedAt).toLocaleString() : "-"}
                      </td>
                      <td className="py-3 pl-4 text-right space-x-2">
                        <button
                          onClick={() => handleEdit(p)}
                          className="px-3 py-1 rounded-lg text-xs font-semibold border border-[#E0E0E0] hover:border-[#00AEEF]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(p.id)}
                          className="px-3 py-1 rounded-lg text-xs font-semibold border border-red-200 text-red-600 hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                    <tr>
                      <td className="py-6 text-center text-[#666666]" colSpan={6}>
                        No products yet. Use the form below to add one.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          <div className="bg-white border border-[#E0E0E0] rounded-2xl p-5 md:p-6">
            <h2 className="text-lg font-semibold mb-4" style={{ color: colors.text.primary }}>
              {editingId ? "Edit Product" : "Add New Product"}
            </h2>
            {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
              <div>
                <label className="block mb-1.5 font-medium">ID (slug)</label>
                <input
                  name="id"
                  value={form.id}
                  onChange={handleChange}
                  required
                  disabled={!!editingId}
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                />
              </div>
              <div>
                <label className="block mb-1.5 font-medium">Title</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                />
              </div>
              <div>
                <label className="block mb-1.5 font-medium">Category</label>
                <input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                />
              </div>
              <div>
                <label className="block mb-1.5 font-medium">Product Type</label>
                <select
                  name="productType"
                  value={form.productType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                >
                  <option value="matches">Safety Matches</option>
                  <option value="detergents">Detergents</option>
                  <option value="dish-wash">Dish Wash</option>
                  <option value="general">General</option>
                </select>
              </div>
              <div>
                <label className="block mb-1.5 font-medium">Navbar Group</label>
                <input
                  name="navGroup"
                  value={form.navGroup}
                  onChange={handleChange}
                  placeholder="Safety Matches / Detergents / Dish Wash"
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                />
              </div>
              <div>
                <label className="block mb-1.5 font-medium">Icon Type</label>
                <select
                  name="iconType"
                  value={form.iconType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                >
                  <option value="">None</option>
                  <option value="fire">fire</option>
                  <option value="layer">layer</option>
                  <option value="dish-wash">dish-wash</option>
                </select>
              </div>
              <div>
                <label className="block mb-1.5 font-medium">Primary Image URL (optional)</label>
                <input
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                />
              </div>
              <div>
                <label className="block mb-1.5 font-medium">Upload Product Image(s)</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => setProductImages(Array.from(e.target.files || []))}
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg"
                />
                <p className="text-xs text-[#666666] mt-1">
                  Upload one or many. First image is used as primary.
                </p>
              </div>
              <div>
                <label className="block mb-1.5 font-medium">Color (hex)</label>
                <input
                  name="color"
                  value={form.color}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                />
              </div>
              <div>
                <label className="block mb-1.5 font-medium">Display Order</label>
                <input
                  name="displayOrder"
                  type="number"
                  value={form.displayOrder}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1.5 font-medium">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1.5 font-medium">Tagline</label>
                <input
                  name="tagline"
                  value={form.tagline}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1.5 font-medium">Services</label>
                <textarea
                  name="services"
                  value={form.services}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                />
              </div>
              <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  ["isActive", "Active"],
                  ["showOnLanding", "Show On Landing"],
                  ["showInProductsPage", "Show In Products Page"],
                  ["showInNavbar", "Show In Navbar"],
                ].map(([key, label]) => (
                  <label key={key} className="inline-flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      name={key}
                      checked={Boolean(form[key])}
                      onChange={handleChange}
                    />
                    {label}
                  </label>
                ))}
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1.5 font-medium">Key Features</label>
                <div className="space-y-2">
                  {form.features.map((feature, idx) => (
                    <div key={`f-${idx}`} className="flex gap-2">
                      <input
                        value={feature}
                        onChange={(e) => updateFeature(idx, e.target.value)}
                        placeholder={`Feature ${idx + 1}`}
                        className="flex-1 px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeFeature(idx)}
                        className="px-3 py-2 rounded-lg border border-red-200 text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addFeature}
                    className="px-3 py-2 rounded-lg border border-[#E0E0E0] hover:bg-[#F9F9F9]"
                  >
                    Add Feature
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1.5 font-medium">Variants</label>
                <div className="space-y-2">
                  {form.variants.map((variant, idx) => (
                    <div key={`v-${idx}`} className="grid grid-cols-1 md:grid-cols-5 gap-2">
                      <input
                        placeholder="Name (e.g. 1 KG)"
                        value={variant.name}
                        onChange={(e) => updateVariant(idx, "name", e.target.value)}
                        className="px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm"
                      />
                      <input
                        placeholder="Detail (e.g. 1000 g)"
                        value={variant.detail}
                        onChange={(e) => updateVariant(idx, "detail", e.target.value)}
                        className="px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm"
                      />
                      <input
                        placeholder="Packing (e.g. 12 pcs/ctn)"
                        value={variant.packing}
                        onChange={(e) => updateVariant(idx, "packing", e.target.value)}
                        className="px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm"
                      />
                      <input
                        placeholder="Price"
                        type="number"
                        value={variant.price}
                        onChange={(e) => updateVariant(idx, "price", e.target.value)}
                        className="px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeVariant(idx)}
                        className="px-3 py-2 rounded-lg border border-red-200 text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addVariant}
                    className="px-3 py-2 rounded-lg border border-[#E0E0E0] hover:bg-[#F9F9F9]"
                  >
                    Add Variant
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1.5 font-medium">Facilities</label>
                <div className="space-y-2">
                  {form.facilities.map((facility, idx) => (
                    <div key={`fc-${idx}`} className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <input
                        placeholder="Facility Name"
                        value={facility.name}
                        onChange={(e) => updateFacility(idx, "name", e.target.value)}
                        className="px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm"
                      />
                      <input
                        placeholder="Location"
                        value={facility.location}
                        onChange={(e) => updateFacility(idx, "location", e.target.value)}
                        className="px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm"
                      />
                      <input
                        placeholder="Note"
                        value={facility.note}
                        onChange={(e) => updateFacility(idx, "note", e.target.value)}
                        className="px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeFacility(idx)}
                        className="px-3 py-2 rounded-lg border border-red-200 text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addFacility}
                    className="px-3 py-2 rounded-lg border border-[#E0E0E0] hover:bg-[#F9F9F9]"
                  >
                    Add Facility
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1.5 font-medium">Extra Image URLs</label>
                <div className="space-y-2">
                  {form.imageUrls.map((url, idx) => (
                    <div key={`u-${idx}`} className="flex gap-2">
                      <input
                        value={url}
                        onChange={(e) => updateImageUrl(idx, e.target.value)}
                        placeholder="https://..."
                        className="flex-1 px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeImageUrl(idx)}
                        className="px-3 py-2 rounded-lg border border-red-200 text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addImageUrl}
                    className="px-3 py-2 rounded-lg border border-[#E0E0E0] hover:bg-[#F9F9F9]"
                  >
                    Add URL
                  </button>
                </div>
              </div>

              <div className="flex items-end gap-2 pt-1 md:col-span-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#00AEEF] to-[#0095CC] hover:shadow-lg hover:shadow-[#00AEEF]/30 transition-all disabled:opacity-60"
                >
                  {saving ? "Saving..." : editingId ? "Update Product" : "Create Product"}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(null);
                      setForm(emptyForm);
                      setProductImages([]);
                    }}
                    className="px-5 py-2 rounded-lg text-sm font-semibold border border-[#E0E0E0] hover:bg-[#F9F9F9]"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    </RequireAdminAuth>
  );
};

export default AdminProductsPage;
