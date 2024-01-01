import React from 'react';
import './style.scss';
import Icon from '@icon-park/react/es/all';


interface Header {
	slug: string;
	title: string;
	sortable: boolean;
	style: object;
}

interface DataTableProps {
	headers: Array<Header>;
	records: Array<any>;
	onHeaderClick: Function;
}

const DataTable: React.FC<DataTableProps> = ({headers, records, onHeaderClick}) => {
	return (
		<div className={'table'}>
			<table border={0} cellSpacing={0}>
				<thead>
				<tr>
					{headers.map((item: Header) => {
						return <DataTableHeader key={item.slug} onHeaderClick={onHeaderClick} {...item} />;
					})}
				</tr>
			</thead>
			<tbody>
				{records.map((item: any, index: number) => {
					return (
						<tr key={index}>
							{headers.map((header: Header) => {
								return <DataTableCell key={header.slug} value={item[header.slug]} style={header.style} />;
							})}
						</tr>
					);
				})}
				</tbody>
			</table>
		</div>
	);
}

const DataTableHeader: React.FC<any> = ({slug, title, sortable, style, onHeaderClick}) => {
	const headerClick = () => {
		if (sortable) {
			onHeaderClick(slug);
		}
	};


	return (
		<th style={style} onClick={headerClick}>
			{title}
			{sortable && <Icon type={'SortTwo'} theme={'outline'} size={14}/>}
		</th>
	);
};


const DataTableCell: React.FC<any> = ({value, style}) => {
	return (
		<td style={style}>
			{value}
		</td>
	);
};

export default DataTable;
