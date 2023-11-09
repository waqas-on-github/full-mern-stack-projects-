import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

export default function cabinTableOperations() {
  return (
    <>
      <Filter
        filtername="discount"
        options={[
          { value: "all", lable: "All" },
          { value: "no-discount", lable: "No discount" },
          { value: "with-discount", lable: "With discount" },
        ]}
      />

      <SortBy
        options={[
          {value: "name-asc",label: "sort by name (A-Z)"},
          {value: "name-desc",label: "sort by name (Z-A)"},
          {value: "regularPrice-asc",label:  "sort by price(low first)"},
          {value: "regularPrice-desc",label: "sort by price(high first)"},
          {value: "maxCapacity-asc",label:   "sort by capacity (low first)"},
          {value: "maxCapacity-desc",label:  "sort by capacity (high first)"},

        ]}
      />
    </>
  );
}
