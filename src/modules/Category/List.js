"use strict";

/* Package System */
import React from "react";

/* Package Application */
import ListLayout from '@views/Admin/Components/ListLayout';

class List extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount(){
		this._isMounted = false;
	}

	render(){

		return(
			<React.Fragment>
				{/*  
					maxWidthPopup: xl,lg,md,sm,xs
					isBtnAdd={true} -- Nút thêm
					search={true} -- tìm kiếm
					export={true} -- xuất dữ liệu
					isBtnFilter={true} -- bộ lọc
					hideAction={true} -- List ẩn hành động
					data -- các trường trong update/add
				*/}
				<ListLayout 
					nameDisplay={'Quản lý Category'}
					isBtnAdd={true}
					maxWidthPopup='lg'
					columns={[
						{key:'name',label:'Name',type:'text'},
						{key:'slug',label:'Slug',type:'text'},
                        {key:'image',label:'Hình ảnh',type:'file',width:120},
                        {key:'creator',label:'creator',type:'text'},
                        {key:'content',label:'content',type:'text'},
						{key:'viewed',label:'Lượt xem',type:'number'}, // Thêm cột viewed
						{key:'status',label:'Trạng thái',type:'boolean'}, // Thêm cột status
						{key:'created_at',label:'Ngày tạo',type:'dateTime',width:120},
						{key:'updated_at',label:'Ngày cập nhật',type:'dateTime',width:120}, // Thêm cột updated_at
					]}
				/>
			</React.Fragment>
		)
	}
}

export default List;