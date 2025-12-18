import axios from "axios";

const handleFetchPostal=async (req,res)=>{
    try {
        const postalCode=req.params.postalCode;
        const response=await axios.get(`http://www.postalpincode.in/api/pincode/${postalCode}`)
        const details=response.data;

        res.status(200).json(details)
        
    } catch (error) {
        res.status(500).json({error:`Internal Server error ${error.message}`})
        
    }

}

export{handleFetchPostal}