import supabase from "./supabase.js";
import { supabaseUrl } from "./supabase.js";

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

 



//  async function createCabin ( cabinData ) {
//    const imageName = `${Math.random()}-${cabinData?.image?.name}`.replaceAll('/' , '')
//    const imagePath = `${supabaseUrl}/storage/v1/object/sign/cabin-images${imageName}`
  
  
//    const { data, error } = await supabase
//    .from('cabins')
//    .insert([{...cabinData , image :  imagePath}])
//    .select()
  
  
//    if (error) {
//      console.error(error);
//      throw new Error("Cabin could not be created ");
//    }
  
  
//    const  {error : storageError} = supabase.storage.from("cabin-images").upload( imageName , cabinData?.image)
//  if(storageError) {
//    console.log(storageError);
//    await supabase.from("cabins").delete().eq("id", data?.id)
//   throw new Error("image   could not be uploaded  ");


//  }


//  return data 

//  }

async function createCabin(cabinData, id ) {

  try {
    
    const hasimagepath = cabinData?.image?.startsWith()?.supabaseUrl

    const imageName = `${Math.random()}-${cabinData?.image?.name}`;
    const imagePath =  hasimagepath? cabinData?.image : ` ${supabaseUrl}/storage/v1/object/sign/cabin-images/${imageName}`;

  
    let query  = supabase.from("cabins") 

    //1 create cabin 
    if(!id)
     {
       query.insert([{ ...cabinData, image: imagePath }])

     }

     // edit  
     if(id ) {
      query.update({...cabinData , image : imagePath}).eq("id",id)
     }
     const {data , error } =  await query().select().single()

    if (error) {
      console.error(error);
      throw new Error("Cabin could not be created");
    }

    const { data : imgdata  ,   error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, cabinData?.image);
      
      console.log(imgdata);
    if (storageError) {
      console.log(storageError);
      // If there's a storage error, you may want to clean up the inserted cabin
      await supabase.from("cabins").delete().eq("id", data[0].id);
      throw new Error("Image could not be uploaded");
    }



    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}



export { getCabins, deleteCabin ,createCabin };

