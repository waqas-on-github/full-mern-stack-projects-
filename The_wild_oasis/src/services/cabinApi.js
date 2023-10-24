import supabase from "./supabase.js";

async function getCabins() {
  try {
    let { data, error } = await supabase
      .from('cabins')
      .select('*');
      
      
    if (error) {
      console.error(error);
      throw new Error("Error fetching cabins");
    }

    if (data && data.length > 0) {
      return data;
    } else {
      throw new Error("No cabin data found");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }


}

export { getCabins };
