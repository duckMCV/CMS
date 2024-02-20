"use strict";

/* Package System */
import React from "react";
import Link from 'next/link';

/* Package Application */
import FormLayout from '@views/Admin/Components/FormLayout';

/* Package style */

class Form extends React.Component{

	constructor(props){
		super(props);
	}

	render(){

		return(
			<>	
				{/* TYPE : text,status,radio,select,select_multi,image,video,textarea,autoComplete (multiple:true),password,dateTime
					col:'left', col:'right'
					hideColRight={true} -- ẩn cột phải
				*/}
				<FormLayout
                  getData={{role_id:'roles?limit=10000'}}
                  fields={[
					{key:'title',label:'Title',type:'text',col:'left',isRequied:true}, // Thêm cột title
					{key:'slug',label:'Slug',type:'text',col:'left',isRequied:true},
					{key:'content',label:'Content',type:'textarea',col:'left',isRequied:true},
					{key:'image',label:'Image',type:'image',col:'left',isRequied:true},
					{key:'creator',label:'Creator',type:'text',col:'right',isRequied:true},
					{key:'status',label:'Status',type:'status',defaultValue:true,col:'right',isRequied:true},
				  ]}
				  
                />

			</>
		)
	}
}

export default Form;