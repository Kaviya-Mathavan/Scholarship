

import React, { useEffect, useState,useCallback } from "react";
import DataTable from "react-data-table-component";
import './Table.css';
import axios from 'axios';
import User from './Users'

export default function Table()

{
  const [details, setDetails] = useState(null)
  const updateState = useCallback(state => handleSubmit(state));
    const columns= [
        
        {
            name:"S.No",
            selector:(row)=>row.school_id,
        },
        {
            name:"Application ID",
            selector:(row)=>row.user_Id,
        },
        {
            name:"Email",
            selector:(row)=>row.email,
        },
      
        {
            name:"Contact Number",
            selector:(row)=>row.phone_Number,
        },
        
     
        {
            name:"10th Mark",
            selector:(row)=>row.tenth_mark,
        },

        {
            name:"12th Mark",
            selector:(row)=>row.twelth_mark,
        },

        {
            name:"Parent",
            selector:(row)=>row.parent,
        },
        {
            name:"Status",
            selector:(row)=>row.application_status,
        },

     
        {
            name:"Action",
            selector:(row)=>(
                <div id="buttonar">
                    {row.application_status === 'pending' && (
                        <><button className="buttonapprove" onClick={() => changeProduct(row)
                        }>Approve</button>
                        <button className="buttonreject" onClick={() => handleDelete(row)}>Rejected</button></>
                       
                    )}
                
                </div>
            ),

        }

    ];
    // function handleSubmit(row, event) {
    //     if (`event.type === 'contextmenu'`) {
    //       setSingleCard(row);
    //       toggle2(row);
    //     }
    //   }
    const handleSubmit= (user_Id) => {

        console.log(user_Id)
        setDetails(user_Id)     
        // fetch(`http://localhost:8080/api/v1/user/${user_Id}`,
    
        //   { method: 'get', })
    
        //   .then(() => {
    
     
    
        //     getProduct();
    
        //   })
    
        //   .catch((error) => {
    
        //     console.error('Error deleting item:', error);
    
        //   });
    
      };
    const handleApprove = (row) => {
    
        const updatedData = data.map((item) =>
          item === row ? { ...item, application_status: 'Accepted' } : item
        );
        setData(updatedData);
      };
    
     
    
      const handleDelete = (id) => {
        id.application_status = "reject"
        console.log(id);

        axios.put(`http://localhost:8080/api/v1/user/PutUser/${id.user_Id}`, id)
        .then((response) => {
            console.log(response.data)
            getProduct();
        })
        .catch((error) => {
            console.log("érror")
        })
      };
    const [data, setData]= useState([]);
    const [search, SetSearch]= useState('');
    const [filter, setFilter]= useState([]);



    const getProduct= async() =>{
    try{
        const req= await fetch("http://localhost:8080/api/v1/user/getUser");
        const res= await req.json();
        setData(res);
        setFilter(res);
    } catch(error){
       console.log(error);
    }
    }

    const changeProduct= async(id) =>{
        try{
            id.application_status = "accepted"
            console.log(id);
          
          axios.put(`http://localhost:8080/api/v1/user/PutUser/${id.user_Id}`, id)
          .then((response) => {
               console.log(response.data)
               getProduct();
          })
          .catch((error) => {
              console.log("érror")
          })
        } catch(error){
           console.log(error);
        }
        }

    useEffect(()=>{
        getProduct();
    }, []);

    useEffect(()=>{
        const result= data.filter((item)=>{
         return item.application_status.toLowerCase().includes(search.toLocaleLowerCase());
        });
        setFilter(result);
    },[search,data]);
   
   const tableHeaderstyle={
    headCells:{
        style:{
            fontWeight:"bold",
            fontSize:"14px",
            backgroundColor:"#ccc"

        },
    },
   }

     return(
        <React.Fragment>
            <h1 id="table1">Product List</h1>
            <DataTable style="text-align:center"
            customStyles={tableHeaderstyle}
            columns={columns}
            data={filter}
            onRowClicked={updateState}
            pagination
            selectableRows
            fixedHeader
            selectableRowsHighlight
            highlightOnHover
            subHeader
             subHeaderComponent={
                <input type="text" 
                className="w-25 form-control"
                placeholder="Search..."
                value={search}
                onChange={(e)=>SetSearch(e.target.value)}
                
                />
             }
             subHeaderAlign="center"
            
            
            />
            {details!= undefined || details!=null ? ( <User data={details}/> ) : (<></>) }
        </React.Fragment>
    );
}


