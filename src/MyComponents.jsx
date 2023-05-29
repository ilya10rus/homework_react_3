import { useState } from 'react';
import styles from './App.module.css';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '=', 'C'];

export const MyComponent = () => {
	const [value, setValue] = useState(0);
	const [value2, setValue2] = useState('');
	const [operator, setOperator] = useState('');
	const [finish, setFinish] = useState(false);
	let operands = value + operator + value2;

	const showValue = (num) => {
		if (value === 0) {
			setValue(num);
			setFinish(false);
		} else if (operator) {
			setValue2((preVal2) => preVal2 + num);
			setFinish(false);
		} else if (value !== 0 && value !== '+' && value !== '-') {
			setValue((preVal) => preVal + `${num}`);
			setFinish(false);
		}
		if (num === '+' || num === '-' || num === '=' || num === 'C') {
			if (num === 'C') {
				setValue(0);
				setValue2('');
				setOperator('');
				setFinish(false);
			} else if (num === '+') {
				setFinish(false);
			} else if (num === '-') {
				setFinish(false);
			} else if (num !== 'C' && num !== '=') {
				setFinish(false);
			} else if (num === '=') {
				setValue2('');
				setOperator('');
				setValue(eval(operands));
				setFinish(true);
			}
		}
	};

	return (
		<div className={styles.calc} key={Math.random()}>
			<div className={finish ? styles.display_finish : styles.display}>
				{operands}
			</div>
			{numbers.map((num) => (
				<a className={styles.calcNum} key={num} onClick={() => showValue(num)}>
					{num}
				</a>
			))}
		</div>
	);
};
