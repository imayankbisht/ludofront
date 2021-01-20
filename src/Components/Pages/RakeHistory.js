import React,{useState ,useEffect} from 'react';
import MaterialTable from 'material-table';
import {apiCall} from '../services/apiCall';
import moment from 'moment';

export default function RakeHistory(props){
    const [loading , setLoading] = useState(true);
    const [data , setData] = useState([]);
    const [column , setColumn] = useState([]);

    useEffect(()=>{
      rakeHistory();
    },[])

    function makeCol(keys){
        let dataa =keys.filter(data => data != "_id" && data != "__v");
        let bigContainer =[];
        let dataw;
        for(var i=0;i<dataa.length;i++){
            if(dataa[i] == 'startTime'){
              dataw = {
                title:dataa[i],
                field:dataa[i],
                render:rowData =><span>{timeFormat(rowData.startTime)}</span>
             }
            }else if(dataa[i] == 'endTime'){
                dataw = {
                    title:dataa[i],
                    field:dataa[i],
                    render:rowData =><span>{timeFormat(rowData.endTime)}</span>
                 }   
            }
            else{
                 dataw = {
                    title:dataa[i],
                    field:dataa[i]
                }
            }
            
          bigContainer.push(dataw);
        }
        return bigContainer;
    }
     
    function timeFormat(timestamp){
        return moment(timestamp).format("DD-MM-YYYY h:mm:ss");
    }


    async function rakeHistory(){
        const result = await apiCall('get','https://ylrwt.sse.codesandbox.io/transaction/rakeHistory'); 
        setData(result);
        const keys = Object.keys(result[0]);
        const column1 =await makeCol(keys);
        setColumn(column1);
        setLoading(false);
    }


    const {title} = props;
    return(
        <div>
            {loading?<div>Loding...</div>:
            <MaterialTable
             title={title}
             data={data}
             columns={column}
             options={{
                 filtering:true,
                 exportButton:true
             }}
          />
            }
        </div>
    )
}


