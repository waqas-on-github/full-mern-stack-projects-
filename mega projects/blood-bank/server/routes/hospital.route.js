import { Router } from "express";
import {  createAccount,
          deleteAllHospitals ,
          AllHospitals  ,
          updateHosipital ,
          deleteOneHospital ,
          getOneHospital
} from "../controlers/Hospital.controler.js";

const router = Router() 




router.post("/create" , createAccount)
router.delete("/delete/all" , deleteAllHospitals)
router.delete("/delete/:id" , deleteOneHospital)
router.get("/:id" , getOneHospital)
router.put("/update/:id" , updateHosipital)


router.get("/" , AllHospitals ) 

export {
    router
}

