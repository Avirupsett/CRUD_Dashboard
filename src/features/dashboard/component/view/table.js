import React, { useEffect, useState } from 'react'
import DataTable from 'datatables.net-dt';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './table.css'
import Update from '../update/update';
import handlefetch from '../../services/read/handlefetch';
import Add from '../insert/add';
import MUIDataTable from 'mui-datatables';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import deleted from '../../services/delete/handledelete';

export default function RTable() {

  const [items, setItems] = useState([])

  async function handlefetching(change) {
    let data = await handlefetch()
    setItems(data)
    if (data) {
      setTimeout(function () {
        // eslint-disable-next-line
        let table = new DataTable('#myTable', {
          responsive: true,
          bDestroy: true
        })

      }, 1000);
    }
  }
  useEffect(() => {
    handlefetching(0)
    // return () => {

    // }
  }, [])

  const handleInsertItem = (query) => {
    const newItem = { id: query.id, name: query.name, email: query.email, gender: query.gender, status: query.status };
    setItems([...items, newItem]);
  };

  const handleDeleteItem = async(id) => {
    // const updatedItems = items.filter((item) => item.id !== id);
    // setItems(updatedItems);
    
      const query = await deleted(id)
      if (query.status === 204) {
         return "Successful"
      }
      else {
        return "Unsuccessful"
      }
    
  };

  const updateItem = (items, updatedItem) => {
    const index = items.findIndex((item) => item.id === updatedItem.id);
    const newItems = [...items];
    newItems[index] = updatedItem;
    return newItems;
  };
  const handleUpdateItem = (id, name,email,gender,status) => {
    const updatedItem = { id: id, name: name,email:email,gender:gender,status:status };
    setItems(updateItem(items, updatedItem));
  };

  const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
  });
  
    const responsive ="vertical";
    
  
    const columns = [
      {
       name: "id",
       label: "Id",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "name",
       label: "Name",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "email",
       label: "Email",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
       name: "gender",
       label: "Gender",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
       name: "status",
       label: "status",
       options: {
        filter: true,
        sort: false,
       }
      },
      { name: "Edit", 
			options: {
			  filter: true,
			  customBodyRender: (value, tableMeta, updateValue) => {
				return (
				  <Update handleUpdateItem={handleUpdateItem} id={tableMeta.rowData[0]} name={tableMeta.rowData[1]} email={tableMeta.rowData[2]} gender={tableMeta.rowData[3]} status={tableMeta.rowData[4]}/>
				);
			  }
			}
		  }
     ];
     
  
    const options = {
      search: true,
      download: true,
      print: true,
      viewColumns: true,
      filter: true,
      filterType: "dropdown",
      responsive,
      onRowsDelete: (rowsDeleted) => {
        const idsToDelete =rowsDeleted.data.map(d => handleDeleteItem(items[d.dataIndex].id)); // array of all ids to to be deleted    
        console.log(idsToDelete)
      }
   
    };
  
    


  return (
    <div className='container pb-2'>
      <div className='d-flex justify-content-between align-items-center flex-wrap my-2'>
        <h2 className='pt-4 pb-2' style={{ color: 'var(--text-color)' }}>
          DashBoard
        </h2>
        <Add handleInsertItem={handleInsertItem} />
      </div>
      {/* <Table id="myTable" className="table table-striped table-bordered table-responsive table-hover"  >
        <Thead>
          <Tr style={{ textAlign: "center" }}>
            <Th>Sr No.</Th>
            <Th>Client Name</Th>
            <Th>Email</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items && items.map((item, index) => {
            return (
              <Tr style={{ verticalAlign: "middle" }} className={index % 2 !== 0 ? "even" : "odd"} key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td className="" align="center" >

                  <Update name={item.name} email={item.email} gender={item.gender} status={item.status} />
                </Td>
                <Td className="" align="center">
                  <Delete handleDeleteItem={handleDeleteItem} id={item.id} />

                </Td>
              </Tr>
            )
          })}

        </Tbody>
      </Table> */}
      <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
       
        <MUIDataTable
          data={items}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </CacheProvider>
    </div>
  )
}
