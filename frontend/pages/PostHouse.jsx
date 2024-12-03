import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function PostHouse() {
  const [data, setData] = useState({
    type: "",
    furnished: "",
    propertyName:"",
    houseType:'',
    tenantType: "",
    price: "",
    buildupArea: "",
    carpetArea: "",
    balconies: "",
    securityDeposit: "",
    bhkType: "",
    bathrooms: "",
    location: "",
  });
  const [files, setFiles] = useState([]);
  const formdata = new FormData();
  formdata.append("type", data.type);
  formdata.append("buildupArea", data.buildupArea);
  formdata.append("price", data.price);
  formdata.append("tenantType", data.tenantType);
  formdata.append("furnished", data.furnished);
  formdata.append("propertyName", data.propertyName);
  formdata.append("houseType", data.houseType);
  formdata.append("carpetArea", data.carpetArea);
  formdata.append("balconies", data.balconies);
  formdata.append("securityDeposit", data.securityDeposit);
  formdata.append("bathrooms", data.bathrooms);
  formdata.append("bhkType", data.bhkType);
  formdata.append("location", data.location);

  files.forEach((file) => {
    formdata.append("file", file);
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:9000/api/houses/newHouse",
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    if (response.data.success == true) {
      console.log("success");
      toast(response.data.message);
      navigate("/");
    } else {
      toast(error.message);
    }
  };
  return (
    <div>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto flex flex-col rounded-2xl border border-gray-600 p-11 gap-11"
      >
        <h1 className='text-3xl mx-auto font-serif font-extrabold'>Post house details</h1>
        <hr/>
        <div className="flex flex-col gap-3 ">
        
          <Label>Type:</Label>
          <div className="">
            <div className="flex flex-row gap-4">
              <input
                type="radio"
                checked={data.type === "Independent"}
                value="Independent"
                onChange={(e) => setData({ ...data, type: e.target.value })}
              />
              <label htmlFor="independent">Independent</label>
            </div>
            <div className="flex flex-row gap-4">
              <input
                type="radio"
                checked={data.type === "Rental"}
                value="Rental"
                onChange={(e) => setData({ ...data, type: e.target.value })}
              />
              <label htmlFor="independent">Rental</label>
            </div>
          </div>
        </div>
        <div>
          <Label>Property Name:</Label>
          <Input
            placeholder="Enter property name"
            value={data.propertyName}
            onChange={(e) => setData({ ...data, propertyName: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label>House type:</Label>
          <div className="">
            <div className="flex flex-row gap-4">
              <input
                type="radio"
                checked={data.houseType === "flat"}
                value="flat"
                onChange={(e) =>
                  setData({ ...data, houseType: e.target.value })
                }
              />
              <label htmlFor="fullyFurnished">Flat</label>
            </div>
            <div className="flex flex-row gap-4">
              <input
                type="radio"
                checked={data.houseType === "house"}
                value="house"
                onChange={(e) =>
                  setData({ ...data, houseType: e.target.value })
                }
              />
              <label htmlFor="semiFurnished">House</label>
            </div>
            <div className="flex flex-row gap-4">
              <input
                type="radio"
                checked={data.houseType === "commercial"}
                value="commercial"
                onChange={(e) =>
                  setData({ ...data, houseType: e.target.value })
                }
              />
              <label htmlFor="notFurnished">Commercial</label>
            </div>
            <div className="flex flex-row gap-4">
              <input
                type="radio"
                checked={data.houseType === "pg"}
                value="pg"
                onChange={(e) =>
                  setData({ ...data, houseType: e.target.value })
                }
              />
              <label htmlFor="notFurnished">PG</label>
            </div>
          </div>
        </div>
        <div>
          <Label>Location:</Label>
          <Input
            placeholder="Enter complete address"
            value={data.location}
            onChange={(e) => setData({ ...data, location: e.target.value })}
          />
        </div>
        <div>
          <Label>Bathrooms:</Label>
          <Input
            placeholder="Enter the number of bathrooms"
            value={data.bathrooms}
            onChange={(e) => setData({ ...data, bathrooms: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label>Furnished:</Label>
          <div className="">
            <div className="flex flex-row gap-4">
              <input
                type="radio"
                checked={data.furnished === "Fully-Furnished"}
                value="Fully-Furnished"
                onChange={(e) =>
                  setData({ ...data, furnished: e.target.value })
                }
              />
              <label htmlFor="fullyFurnished">Fully-Furnished</label>
            </div>
            <div className="flex flex-row gap-4">
              <input
                type="radio"
                checked={data.furnished === "Semi-Furnished"}
                value="Semi-Furnished"
                onChange={(e) =>
                  setData({ ...data, furnished: e.target.value })
                }
              />
              <label htmlFor="semiFurnished">Semi-Furnished</label>
            </div>
            <div className="flex flex-row gap-4">
              <input
                type="radio"
                checked={data.furnished === "Not-Furnished"}
                value="Rental"
                onChange={(e) =>
                  setData({ ...data, furnished: e.target.value })
                }
              />
              <label htmlFor="notFurnished">Not-Furnished</label>
            </div>
          </div>
        </div>
        <div>
          <Label>Price:</Label>
          <Input
            placeholder="Enter the expected rent"
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </div>
        <div>
          <Label>Buildup Area:</Label>
          <Input
            placeholder="Enter the buidlup area of the house"
            value={data.buildupArea}
            onChange={(e) => setData({ ...data, buildupArea: e.target.value })}
          />
        </div>
        <div>
          <Label>Carpet Area:</Label>
          <Input
            placeholder="Enter the carpet area of the house"
            value={data.carpetArea}
            onChange={(e) => setData({ ...data, carpetArea: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label>Tenant Type:</Label>
          <div className="">
            <div className="flex flex-row gap-4">
              <input
                type="radio"
                checked={data.tenantType === "Family"}
                value="Family"
                onChange={(e) =>
                  setData({ ...data, tenantType: e.target.value })
                }
              />
              <label htmlFor="family">Family</label>
            </div>
            <div className="flex flex-row gap-4">
              <input
                type="radio"
                checked={data.tenantType === "Bachelor"}
                value="Bachelor"
                onChange={(e) =>
                  setData({ ...data, tenantType: e.target.value })
                }
              />
              <label htmlFor="bachelor">Bachelor</label>
            </div>
            <div className="flex flex-row gap-4">
              <input
                type="radio"
                checked={data.tenantType === "Company"}
                value="Company"
                onChange={(e) =>
                  setData({ ...data, tenantType: e.target.value })
                }
              />
              <label htmlFor="company">Company</label>
            </div>
          </div>
        </div>

        <div>
          <Label>Balconies:</Label>
          <Input
            placeholder="Enter te number of balconies"
            value={data.balconies}
            onChange={(e) => setData({ ...data, balconies: e.target.value })}
          />
        </div>
        <div>
          <Label>Secuity Deposit:</Label>
          <Input
            placeholder="Enter the security deposit amount in INR"
            value={data.securityDeposit}
            onChange={(e) =>
              setData({ ...data, securityDeposit: e.target.value })
            }
          />
        </div>
        <div>
          <Label>BHK Type:</Label>
          <Input
            placeholder="Enter the BHK type eg. 2BHK, 3BHK, 1RK etc"
            value={data.bhkType}
            onChange={(e) => setData({ ...data, bhkType: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label>Pictures</Label>
          <input
            type="file"
            multiple
            onChange={(e) => setFiles(Array.from(e.target.files))}
          />
        </div>
        <Button type="submit" className="bg-green-600 text-lg w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
