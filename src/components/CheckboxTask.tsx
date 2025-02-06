import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Pagination from "@mui/material/Pagination";

const itemsPerPage = 5;

const data = [
  { id: 1, name: "Child 1" },
  { id: 2, name: "Child 2" },
  { id: 3, name: "Child 3" },
  { id: 4, name: "Child 4" },
  { id: 5, name: "Child 5" },
  { id: 6, name: "Child 6" },
  { id: 7, name: "Child 7" },
  { id: 8, name: "Child 8" },
  { id: 9, name: "Child 9" },
  { id: 10, name: "Child 10" },
  { id: 11, name: "Child 11" },
  { id: 12, name: "Child 12" },
];

export default function CheckboxTask() {
  const [selected, setSelected] = useState(new Set());
  const [page, setPage] = useState(1);
  const [productData, setProductData] = useState([]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const fetchInitialProductDetails = async () => {
    const url = "https://dashboard-api-stage.renoon.com/products?page=1";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZmE0YTMyNjMxZDcxMDAxZWU1N2Y2NSIsImlhdCI6MTczODgwNzI5OCwiZXhwIjoxNzM4ODkzNjk4fQ.N5LwMMpKQq3Ns7N8eSVetC_Vb6u80Btmh3FYVJdGRA0",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setProductData(json?.data?.products ?? []);
    } catch (error) {
      console.error(error.message);
    }
  };
//   console.log("prodcut", productData);
  useEffect(() => {
    fetchInitialProductDetails();
  }, []);

  // Get current page items
  const currentPageItems = productData?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
//   console.log("curre", currentPageItems);
  // Check if all items in data are selected
  const isParentChecked = productData.every((item) => selected.has(item.id));
  const isParentIndeterminate =
    productData.some((item) => selected.has(item.id)) && !isParentChecked;

  // console.log("isPAre", isParentChecked);
  // console.log("isParentIndeterminate", isParentIndeterminate);

  // Parent checkbox handler (Check/uncheck all across pages)
  const handleParentChange = (event) => {
    if (event.target.checked) {
      setSelected(new Set(productData?.map((item) => item.id))); // Select all
    } else {
      setSelected(new Set()); // Deselect all
    }
  };
//   console.log("selected", selected);
  // Child checkbox handler
  const handleChildChange = (id) => (event) => {
    const newSelected = new Set(selected);
    if (event.target.checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelected(newSelected);
  };

  return (
    <Box sx={{ p: 3 }}>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={isParentChecked}
            indeterminate={isParentIndeterminate}
            onChange={handleParentChange}
          />
        }
      />

      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {currentPageItems.map((item) => (
          <FormControlLabel
            key={item?.id}
            label={item.qrId}
            control={
              <Checkbox
                checked={selected.has(item.id)}
                onChange={handleChildChange(item.id)}
              />
            }
          />
        ))}
      </Box>

      <Pagination
        count={Math.ceil(data.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        sx={{ mt: 2 }}
      />
    </Box>
  );
}
