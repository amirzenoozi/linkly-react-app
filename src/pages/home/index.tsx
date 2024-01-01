import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/container';
import FlexCol from '../../components/flex-col';
import FlexRow from '../../components/flex-row';
import { isMobile } from 'react-device-detect';
import './style.scss';
import Icon from '@icon-park/react/es/all';
import DataTable from '../../components/data-table';
import staticRecords from '../../constants/records';

function Home() {
	const [headers, setHeaders] = useState<Array<any>>([]);
	const { t } = useTranslation();

	useEffect(() => {
		staticRecords.forEach((item: any) => {
			item.qr = <Icon type={'BarCode'} theme={'outline'} size={24} />;
		});
		setHeaders([
			{
				slug: 'shortLink',
				title: 'Short Link',
				sortable: true,
				style: { textAlign: 'left', width: '35%' },
			},
			{
				slug: 'originalLink',
				title: 'Original Link',
				sortable: true,
				style: { textAlign: 'left', width: '35%' },
			},
			{
				slug: 'qr',
				title: 'QR',
				sortable: false,
				style: { textAlign: 'center', width: '5%' },
			},
			{
				slug: 'clicks',
				title: 'Clicks',
				sortable: true,
				style: { textAlign: 'center', width: '5%' },
			},
			{
				slug: 'status',
				title: 'Status',
				sortable: true,
				style: { textAlign: 'center', width: '10%' },
			},
			{
				slug: 'date',
				title: 'Created',
				sortable: true,
				style: { textAlign: 'center', width: '10%' },
			}
		]);
	}, []);


	const sortTableHandler = (slug: string) => {
		console.log(slug);
	};

	return (
		<>
			<section className={'home'}>
				<Container>
					<FlexRow>
						<FlexCol xs={24}>
							<div className={'home-content'}>
								<h1>Shorten Your Loooong Links :)</h1>
								<p>Linkly is an efficient and easy-to-use URL shortening service that streamlines your
									online experience.</p>
								<div className={'home-input'}>
									<Icon type={'link'} theme={'outline'} size={'1.5rem'}/>
									<input type="text" placeholder="Enter the link here"/>
									<button type='button'>{ isMobile ? <Icon type={'ArrowRight'} theme={'outline'} size={24} /> : 'Shorten Now!'}</button>
								</div>
								<span>You can create <i>05</i> more links. Register Now to enjoy Unlimited usage</span>
							</div>
						</FlexCol>
					</FlexRow>
				</Container>
				<span className={'home-mouse'}/>
			</section>
			<section className={'logs'}>
				<div className={'logs-tab'}>
					<ul>
						<li><Icon type={'History'} theme={'outline'} size={16} />{ isMobile ? '' : 'History' }</li>
						<li><Icon type={'ChartLine'} theme={'outline'} size={16} />{ isMobile ? '' : 'Statistics' }</li>
						<li><Icon type={'Click'} theme={'outline'} size={16} />{ isMobile ? '' : 'Click Stream' }</li>
						<li><Icon type={'Setting'} theme={'outline'} size={16} />{ isMobile ? '' : 'Setting' }</li>
					</ul>
				</div>
				<div className={'logs-table'}>
					<DataTable
						headers={headers}
						records={staticRecords}
						onHeaderClick={sortTableHandler}
					/>
				</div>
			</section>
		</>
	);
}

export default Home;
