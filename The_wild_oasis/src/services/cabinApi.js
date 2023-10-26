import supabase from "./supabase.js";

async function getCabins() {
  try {
    let { data, error } = await supabase.from("cabins").select("*");

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


// delete  single  cabin 
async function deleteCabin(id) {
  console.log(id);
  
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  
}

 
async function createCabin ( cabinData ) {

const { data, error } = await supabase
.from('cabins')
.insert([cabinData ])
.select()



if (error) {
  console.error(error);
  throw new Error("Cabin could not be created ");
}


return data 

}


export { getCabins, deleteCabin , createCabin };
