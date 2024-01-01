import React from 'react';
import { IconInterface } from './Icon.interface';

const ChartJs: React.FC<IconInterface> = ({size = 24}) => {
	return (
		<span className='i-icon'>
			<svg xmlns="http://www.w3.org/2000/svg"  viewBox={'0 0 48 48'} width={size} height={size} fill="none">
				<path fill="currentColor" d="M 24.984375 1.9863281 A 1.0001 1.0001 0 0 0 24.814453 2.0039062 C 12.217953 2.1044612 2 12.37923 2 25 C 2 37.683 12.318 48 25 48 C 37.682 48 48 37.683 48 25 C 48 18.821 45.546359 13.209266 41.568359 9.0722656 C 41.567359 9.0712656 41.567406 9.0693594 41.566406 9.0683594 C 41.566406 9.0683594 41.564453 9.0664062 41.564453 9.0664062 C 40.511214 7.971913 39.349663 6.9816979 38.099609 6.1113281 A 1.0001 1.0001 0 0 0 37.683594 5.8359375 C 34.093798 3.4497831 29.803143 2.0412222 25.1875 2.0039062 C 25.186193 2.0038957 25.184901 2.0039166 25.183594 2.0039062 A 1.0001 1.0001 0 0 0 24.984375 1.9863281 z M 24 4.0253906 L 24 16.058594 C 19.507586 16.558435 16 20.375651 16 25 C 16 29.963 20.038 34 25 34 C 27.122 34 29.071328 33.258391 30.611328 32.025391 L 39.101562 40.515625 C 35.370562 43.909625 30.43 46 25 46 C 13.42 46 4 36.579 4 25 C 4 13.756623 12.883163 4.5497804 24 4.0253906 z M 26 4.0253906 C 26.21863 4.0357702 26.435531 4.0532223 26.652344 4.0703125 L 26 4.7226562 L 26 4.0253906 z M 29.134766 4.4160156 C 29.986189 4.5879512 30.812271 4.8273331 31.623047 5.0996094 L 26 10.722656 L 26 7.546875 A 1.0001 1.0001 0 0 0 26.070312 7.4804688 L 29.134766 4.4160156 z M 33.650391 5.9003906 C 34.365386 6.2273132 35.058871 6.5920131 35.728516 6.9941406 L 26.582031 16.140625 C 26.390739 16.106513 26.195249 16.084256 26 16.0625 L 26 13.550781 L 33.650391 5.9003906 z M 37.423828 8.1269531 C 38.1134 8.6373146 38.782161 9.173301 39.404297 9.7617188 L 30.748047 18.083984 C 30.139379 17.576761 29.462606 17.150606 28.734375 16.816406 L 37.423828 8.1269531 z M 24.884766 18.005859 A 1.0001 1.0001 0 0 0 25.123047 18.005859 C 28.925931 18.072423 32 21.182507 32 25 C 32 28.859 28.86 32 25 32 C 21.14 32 18 28.859 18 25 C 18 21.179878 21.078258 18.068267 24.884766 18.005859 z" />
			</svg>
		</span>
	);
}

export default ChartJs;
