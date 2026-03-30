const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

async function handleResponse(res) {
  if (!res.ok) {
    let message = "Request failed";
    try {
      const data = await res.json();
      if (data?.message) message = data.message;
    } catch {
      // Ignore response parsing errors and use fallback message.
    }
    throw new Error(message);
  }
  return res.json();
}

function getAuthHeaders() {
  const token = localStorage.getItem("adminToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

function buildProductFormData(data = {}) {
  const fd = new FormData();
  const fields = [
    "id",
    "title",
    "category",
    "productType",
    "navGroup",
    "iconType",
    "description",
    "image",
    "color",
    "tagline",
    "services",
    "displayOrder",
    "isActive",
    "showOnLanding",
    "showInProductsPage",
    "showInNavbar",
  ];

  fields.forEach((key) => {
    if (data[key] !== undefined && data[key] !== null && data[key] !== "") {
      fd.append(key, String(data[key]));
    }
  });

  ["features", "variants", "brands", "sizes", "skus", "facilities", "images"].forEach((key) => {
    if (data[key] !== undefined && data[key] !== null) {
      fd.append(key, JSON.stringify(data[key]));
    }
  });

  if (Array.isArray(data.productImages)) {
    data.productImages.forEach((file) => fd.append("productImages", file));
  } else {
    if (data.imageFile) fd.append("image", data.imageFile);
    if (Array.isArray(data.galleryFiles)) {
      data.galleryFiles.forEach((file) => fd.append("images", file));
    }
  }
  return fd;
}

function buildPromotionFormData(data = {}) {
  const fd = new FormData();
  const fields = [
    "id",
    "title",
    "category",
    "description",
    "image",
    "totalQuantity",
    "totalPrice",
    "displayOrder",
    "isActive",
  ];
  fields.forEach((key) => {
    if (data[key] !== undefined && data[key] !== null && data[key] !== "") {
      fd.append(key, String(data[key]));
    }
  });

  ["items", "images"].forEach((key) => {
    if (data[key] !== undefined && data[key] !== null) {
      fd.append(key, JSON.stringify(data[key]));
    }
  });

  if (Array.isArray(data.promotionImages)) {
    data.promotionImages.forEach((file) => fd.append("promotionImages", file));
  }
  return fd;
}

export async function adminLogin(email, password) {
  const res = await fetch(`${API_BASE_URL}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(res);
}

export async function getProducts() {
  const res = await fetch(`${API_BASE_URL}/products`);
  return handleResponse(res);
}

export async function getProduct(id) {
  const res = await fetch(`${API_BASE_URL}/products/${id}`);
  return handleResponse(res);
}

export async function adminGetProducts() {
  const res = await fetch(`${API_BASE_URL}/admin/products`, {
    headers: { ...getAuthHeaders() },
  });
  return handleResponse(res);
}

export async function adminCreateProduct(data) {
  const res = await fetch(`${API_BASE_URL}/admin/products`, {
    method: "POST",
    headers: { ...getAuthHeaders() },
    body: buildProductFormData(data),
  });
  return handleResponse(res);
}

export async function adminUpdateProduct(id, data) {
  const res = await fetch(`${API_BASE_URL}/admin/products/${id}`, {
    method: "PUT",
    headers: { ...getAuthHeaders() },
    body: buildProductFormData(data),
  });
  return handleResponse(res);
}

export async function adminDeleteProduct(id) {
  const res = await fetch(`${API_BASE_URL}/admin/products/${id}`, {
    method: "DELETE",
    headers: { ...getAuthHeaders() },
  });
  return handleResponse(res);
}

export async function adminGetPromotions() {
  const res = await fetch(`${API_BASE_URL}/admin/promotions`, {
    headers: { ...getAuthHeaders() },
  });
  return handleResponse(res);
}

export async function adminCreatePromotion(data) {
  const res = await fetch(`${API_BASE_URL}/admin/promotions`, {
    method: "POST",
    headers: { ...getAuthHeaders() },
    body: buildPromotionFormData(data),
  });
  return handleResponse(res);
}

export async function adminUpdatePromotion(id, data) {
  const res = await fetch(`${API_BASE_URL}/admin/promotions/${id}`, {
    method: "PUT",
    headers: { ...getAuthHeaders() },
    body: buildPromotionFormData(data),
  });
  return handleResponse(res);
}

export async function getPromotions() {
  const res = await fetch(`${API_BASE_URL}/promotions`);
  return handleResponse(res);
}

export async function createOrder(payload) {
  const res = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handleResponse(res);
}

export async function adminDeletePromotion(id) {
  const res = await fetch(`${API_BASE_URL}/admin/promotions/${id}`, {
    method: "DELETE",
    headers: { ...getAuthHeaders() },
  });
  return handleResponse(res);
}

export async function adminGetOrders() {
  const res = await fetch(`${API_BASE_URL}/admin/orders`, {
    headers: { ...getAuthHeaders() },
  });
  return handleResponse(res);
}

export async function adminUpdateOrderStatus(id, status) {
  const res = await fetch(`${API_BASE_URL}/admin/orders/${id}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: JSON.stringify({ status }),
  });
  return handleResponse(res);
}
