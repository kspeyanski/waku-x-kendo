import { Grid as KendoGrid } from "kendo/index.js";
import React from "react";

export const Grid = () => {
  const data = fetch(
    `https://demos.telerik.com/kendo-ui/service-v4/odata/Products`
  )
    .then((resp) => resp.json())
    .then((json) => json.value);

  return (
    <React.Suspense fallback={<>test</>}>
      <KendoGrid
        data={data}
        schema={{
          model: {
            id: "ProductID",
          },
        }}
        state={{
          columns: [
            { field: "ProductID", title: "ID", width: 40 },
            { field: "ProductName", title: "Product Name" },
            { field: "UnitsInStock", title: "Units In Stock" },
            { field: "UnitsOnOrder", title: "Units On Order" },
          ],
        }}
        style={{ height: 350 }}
      />
    </React.Suspense>
  );
};
